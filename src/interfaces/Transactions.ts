export interface TransactionSearchResults {
    "current-round"?: number;
    "next-token"?: string;
    transactions: Transactions[];
}

export interface Transactions {
    id: string;
    note: string;
    assetId: number;
    amount: number;
    "asset-transfer-transaction"?: any;
    streams?: number;
    planets_per_stream: number;
    deviceType?: string;
    device?: string;
    tDate?: string;
}

export interface PWDevice {
    id: string;
    type: string;
    streams: any[]
}

export interface PWStream {
    amount: number;
    streams: number;
    planets_per_stream: number;
    tDate: string;
}
