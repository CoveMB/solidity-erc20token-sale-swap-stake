/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface SatiERC20TokenSwapContract
  extends Truffle.Contract<SatiERC20TokenSwapInstance> {
  "new"(
    _baseToken: string,
    _quoteToken: string,
    _ERC20TokenToUsdRate: string,
    meta?: Truffle.TransactionDetails
  ): Promise<SatiERC20TokenSwapInstance>;
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

export interface SatiERC20TokenSwapInstance extends Truffle.ContractInstance {
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

  quoteToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getAvailableBaseTokenLiquidity(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getAvailableQuoteTokenLiquidity(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  getBidPrice: {
    (
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapQuoteForBaseToken: {
    (
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _satiAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getAskPrice: {
    (
      _ERC20TokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _ERC20TokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _ERC20TokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _ERC20TokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  swapBaseForQuoteToken: {
    (
      _ERC20TokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _ERC20TokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _ERC20TokenAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _ERC20TokenAmount: number | BN | string,
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

    quoteToken(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getAvailableBaseTokenLiquidity(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getAvailableQuoteTokenLiquidity(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    getBidPrice: {
      (
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapQuoteForBaseToken: {
      (
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _satiAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getAskPrice: {
      (
        _ERC20TokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _ERC20TokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _ERC20TokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _ERC20TokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    swapBaseForQuoteToken: {
      (
        _ERC20TokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _ERC20TokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _ERC20TokenAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _ERC20TokenAmount: number | BN | string,
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
