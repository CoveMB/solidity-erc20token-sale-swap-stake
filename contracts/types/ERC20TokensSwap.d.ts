/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ERC20TokensSwapContract
  extends Truffle.Contract<ERC20TokensSwapInstance> {
  "new"(
    _baseToken: string,
    _quoteToken: string,
    _exchangeRate: string,
    meta?: Truffle.TransactionDetails
  ): Promise<ERC20TokensSwapInstance>;
}

export interface Rate {
  name: "Rate";
  args: {
    scaledPrice: BN;
    timeStamp: BN;
    0: BN;
    1: BN;
  };
}

export interface SwapRateInfo {
  name: "SwapRateInfo";
  args: {
    exchangeType: string;
    sellingAmount: BN;
    buyingAmount: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

export interface SwapTransferInfo {
  name: "SwapTransferInfo";
  args: {
    beneficiary: string;
    amountSent: BN;
    amountReceived: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

type AllEvents = Rate | SwapRateInfo | SwapTransferInfo;

export interface ERC20TokensSwapInstance extends Truffle.ContractInstance {
  baseToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getScaledRate: {
    (
      _scalingDecimal: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _scalingDecimal: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _scalingDecimal: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _scalingDecimal: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  pairName(txDetails?: Truffle.TransactionDetails): Promise<string>;

  quoteToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getAvailableBaseTokenLiquidity(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getAvailableQuoteTokenLiquidity(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getBidPrice: {
    (
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapQuoteForBaseToken: {
    (
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _quoteTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getAskPrice: {
    (
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapBaseForQuoteToken: {
    (
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _baseTokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    baseToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getScaledRate: {
      (
        _scalingDecimal: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _scalingDecimal: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _scalingDecimal: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _scalingDecimal: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    pairName(txDetails?: Truffle.TransactionDetails): Promise<string>;

    quoteToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getAvailableBaseTokenLiquidity(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getAvailableQuoteTokenLiquidity(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getBidPrice: {
      (
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapQuoteForBaseToken: {
      (
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _quoteTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getAskPrice: {
      (
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapBaseForQuoteToken: {
      (
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _baseTokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
