import { configureStore, createSlice } from '@reduxjs/toolkit';
//import { current } from '@reduxjs/toolkit'

const userState = createSlice({
    name : "user",

    initialState : {
        coin : 'bitcoin',
        chartDay : 1,
        chartData : {},
        chartEthDay : 1,
        chartEthData : {}
    },

    reducers : {
        changeDays : (state, action) => {
            switch (action.payload.type) {
                case 'CHANGE_DAYS':
                    return {
                        ...state,
                        chartDay : action.payload.chartDay
                    }
                case 'ADD_NEW_DATA':
                    return {
                        ...state,
                        chartData : {...state.chartData, [action.payload.data.day] : action.payload.data.value }
                    }
                case 'CHANGE_ETH_DAYS':
                    return {
                        ...state,
                        chartEthDay : action.payload.chartDay
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

export const selectChartCoinDay = (state : any) => { 
    if (state.coin === 'ethereum') {
        return state.chartEthDay;
    } else {
        return state.chartDay;
    }
};
export const selectChartCoinData = (state : any) => {
    if (state.coin === 'ethereum') {
        return state.chartEthData[state.chartEthDay];
    } else {
        return state.chartData[state.chartDay];
    }

};
export const selectState = (state : any) => state;
export const selectCoin = (state : any) => state.coin;
export const { changeDays, changeCoin } = userState.actions;
const store = configureStore({
    reducer : userState.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;