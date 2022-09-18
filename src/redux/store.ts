import { configureStore, createSlice } from '@reduxjs/toolkit';
import { InitialStateType } from '../model';
//import { current } from '@reduxjs/toolkit'

const userState = createSlice({
    name : "user",

    initialState : {
        coin : 'bitcoin',
        dayName : '1D',
        chartDay : 1,
        chartData : {},
        chartEthData : {}
    },

    reducers : {
        changeDays : (state, action) => {
            switch (action.payload.type) {
                case 'CHANGE_DAYS':
                    return {
                        ...state,
                        chartDay : action.payload.chart.chartDay,
                        dayName : action.payload.chart.dayName,
                    }
                case 'ADD_NEW_DATA':
                    return {
                        ...state,
                        chartData : {...state.chartData, [action.payload.data.day] : action.payload.data.value }
                    }
                case 'ADD_NEW_ETH_DATA':
                    return {
                        ...state,
                        chartEthData : {...state.chartEthData, [action.payload.data.day] : action.payload.data.value }
                    }
                default:
                    break;
            }
        },
        changeCoin : (state, action) => {
            switch (action.payload.type) {
                case 'NEW_COIN':
                    return {
                        ...state,
                        coin : action.payload.coin
                    }
                default:
                    break;
            }
        },
    }
})
//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

export const selectChartCoinDay = (state : InitialStateType) => state.chartDay;
export const selectChartCoinData = (state : InitialStateType ) => {
    if (state.coin === 'ethereum') {
        return state.chartEthData[state.chartDay];
    } else {
        return state.chartData[state.chartDay];
    }

};
export const selectState = (state : InitialStateType) => state;
export const selectCoin = (state : InitialStateType) => state.coin;
export const { changeDays, changeCoin } = userState.actions;
const store = configureStore({
    reducer : userState.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;