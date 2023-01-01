export interface AnalyticsData {
  positions: {
    active: Position[];
    closed: Position[];
  };
}

export interface Position {
  type: StrategyType;
  purchaseDate: string;
  amount: number;
  spotPrice: number;
  premiumPaid: number;
}

export enum StrategyType {
  CALL = "CALL",
  PUT = "PUT",
  STRAP = "STRAP",
  STRIP = "STRIP",
  STRANGLE = "STRANGLE",
  STRADDLE = "STRADDLE",
  LongButterfly = "Long Butterfly",
  LongCondor = "Long Condor",
  BullCallSpread = "Bull Call Spread",
  BullPutSpread = "Bull Put Spread",
  BearPutSpread = "Bear Put Spread",
  BearCallSpread = "Bear Call Spread",
}
