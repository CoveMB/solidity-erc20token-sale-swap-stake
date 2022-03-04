"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deploy_mocks_1 = require("../helpers/deploy-mocks");
const founding_1 = require("../helpers/founding");
const utils_1 = require("../helpers/utils");
const variables_1 = require("../helpers/variables");
const SatiToken = artifacts.require("SatiToken");
const SatiEthSwap = artifacts.require("SatiEthSwap");
const initialSwapTestSatiSupply = "10000";
const stiEthRate = 3650;
const freshTokenAndSwapContractsDeploy = async (accounts) => {
    const satiTokenInstance = await SatiToken.new(variables_1.satiTokenSupply.total);
    const mockPriceFeedEth = await (0, deploy_mocks_1.deployPriceFeedMockWithRateOf)(`${stiEthRate}00000000`);
    const swapInstance = await SatiEthSwap.new(satiTokenInstance.address, mockPriceFeedEth.address);
    await satiTokenInstance.transfer(swapInstance.address, (0, utils_1.toUnit)(initialSwapTestSatiSupply));
    return {
        satiTokenInstance,
        swapInstance,
    };
};
contract("SatiEthSwap", (accounts) => {
    const { swapEthBuyerAccount, swapSatiBuyerAccount } = (0, founding_1.nameAccounts)(accounts);
    let swapInstance;
    let satiTokenInstance;
    beforeEach(async () => {
        const freshInstances = await freshTokenAndSwapContractsDeploy(accounts);
        swapInstance = freshInstances.swapInstance;
        satiTokenInstance = freshInstances.satiTokenInstance;
    });
    it("Can not swap ether for Sati if there is no more Sati in the contract", async () => {
        const ethAmountToEmptySupply = (0, utils_1.toUnit)(Number(initialSwapTestSatiSupply) / stiEthRate);
        const emptySatiReserve = async () => await swapInstance.swapPairedTokenForSati(ethAmountToEmptySupply, {
            from: swapSatiBuyerAccount,
            value: ethAmountToEmptySupply,
        });
        await emptySatiReserve();
        try {
            await swapInstance.swapPairedTokenForSati((0, utils_1.toUnit)("1"), {
                from: swapSatiBuyerAccount,
            });
        }
        catch (error) {
            expect(error.message).equal("Returned error: VM Exception while processing transaction: revert Not enough STI -- Reason given: Not enough STI.");
        }
    });
    it("Can swap ether for Sati", async () => {
        await swapInstance.swapPairedTokenForSati((0, utils_1.toUnit)("1"), {
            from: swapSatiBuyerAccount,
            value: (0, utils_1.toUnit)("1"),
        });
        const swapBuyerBalance = await satiTokenInstance.balanceOf(swapSatiBuyerAccount);
        const swapInstanceBalance = await satiTokenInstance.balanceOf(swapInstance.address);
        const satiAmountFromEth = (0, utils_1.toUnit)(stiEthRate);
        expect(swapBuyerBalance.toString()).equal(satiAmountFromEth);
        expect(swapInstanceBalance.toString()).equal((0, utils_1.toUnit)(Number(initialSwapTestSatiSupply) - Number((0, utils_1.toToken)(satiAmountFromEth))));
    });
    it("Emit an event with swap info when swapping eth for sati", async () => {
        const { logs: swapLogs } = await swapInstance.swapPairedTokenForSati((0, utils_1.toUnit)("1"), {
            from: swapSatiBuyerAccount,
            value: (0, utils_1.toUnit)("1"),
        });
        const [rateEvent, swapRateEvent, swapTransferEvent] = swapLogs;
        expect(rateEvent.event).equal("Rate");
        //@ts-expect-error
        expect(rateEvent.args.timeStamp.toString()).equal("1");
        //@ts-expect-error
        expect(rateEvent.args.scaledPrice.toString()).equal((0, utils_1.toUnit)(3650));
        expect(swapRateEvent.event).equal("SwapRate");
        //@ts-expect-error
        expect(swapRateEvent.args.sellingAmount.toString()).equal((0, utils_1.toUnit)(1));
        //@ts-expect-error
        expect(swapRateEvent.args.buyingAmount.toString()).equal((0, utils_1.toUnit)(3650));
        expect(swapTransferEvent.event).equal("SwapTransfer");
        //@ts-expect-error
        expect(swapTransferEvent.args.beneficiary.toString()).equal(swapSatiBuyerAccount);
        //@ts-expect-error
        expect(swapTransferEvent.args.amountSent.toString()).equal((0, utils_1.toUnit)(1));
        //@ts-expect-error
        expect(swapTransferEvent.args.amountReceived.toString()).equal((0, utils_1.toUnit)(3650));
    });
    it("Can not swap sati for ether if buyer does not have enough sati", async () => {
        try {
            await swapInstance.swapSatiForPairedToken((0, utils_1.toUnit)("100"), {
                from: swapEthBuyerAccount,
            });
        }
        catch (error) {
            expect(error.message).equal("Returned error: VM Exception while processing transaction: revert Not enough STI -- Reason given: Not enough STI.");
        }
    });
    it("Can swap Sati for eth", async () => {
        await satiTokenInstance.transfer(swapEthBuyerAccount, (0, utils_1.toUnit)("100"));
        await satiTokenInstance.increaseAllowance(swapInstance.address, (0, utils_1.toUnit)("100"), {
            from: swapEthBuyerAccount,
        });
        await swapInstance.swapSatiForPairedToken((0, utils_1.toUnit)("100"), {
            from: swapEthBuyerAccount,
        });
        const swapBuyerBalance = await satiTokenInstance.balanceOf(swapEthBuyerAccount);
        const swapInstanceBalance = await satiTokenInstance.balanceOf(swapInstance.address);
        expect(swapBuyerBalance.toString()).equal("0");
        expect(swapInstanceBalance.toString()).equal((0, utils_1.toUnit)(String(Number(initialSwapTestSatiSupply) + 100)));
    });
});
//# sourceMappingURL=SatiEthSwap.test.js.map