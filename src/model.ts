
export type DataType = {
    market_caps: [
        Array<number>[]
    ],
    prices: [
        Array<number>[]
    ],
    total_volumes: [
        Array<number>[]
    ],
}

export interface Props {
    days : number;
    dayData : DataType;
}

export interface Day {
    day : number | string
}

export type Item = number | string;
