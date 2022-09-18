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

export type Item = number | string;

export interface Day {
    day : Item
}

export interface DataSetsType {
    backgroundColor : (context : any) => any;
    borderColor : string;
    borderWidth : number;
    data : number[];
    fill : boolean;
}

export interface StateDataType {
    labels : number[];
    datasets : DataSetsType[];
}

export interface Props {
    days : number;
    dayData : StateDataType;
}

interface StateCharType {
    1 : StateDataType;
    7 : StateDataType;
    30 : StateDataType;
    90 : StateDataType;
    365 : StateDataType;
    185 : StateDataType;
    'max' : StateDataType;
}

export interface InitialStateType {
    coin : string;
    dayName : string;
    chartDay : number;
    chartData : StateCharType[];
    chartEthData : StateCharType[];
}

export interface TreeviewListType {
    state : InitialStateType
}

export interface TreeviewType {
    data : {
        State: InitialStateType
    }
}
