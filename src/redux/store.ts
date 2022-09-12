import { configureStore, createSlice } from '@reduxjs/toolkit';
//import { current } from '@reduxjs/toolkit'

const userState = createSlice({
    name : "user",

    initialState : {
        users : [],
        currentUser : {},
        check : {
            isExists : false,
            incorrectEmOrPass : false,
            signUp : false,
            isLoading : false,
        },
        chartDay : 1,
        chartData : {}
    },

    reducers : {
        showLoading : (state, action) => {
            switch (action.payload.type) {
                case 'SHOWLOADING':
                    state.check.isLoading = action.payload.isLoading
                    break;
                default:
                    break;
            }
        },
        changeDays : (state, action) => {
            switch (action.payload.type) {
                case 'CHANGEDAYS':
                    return {
                        ...state,
                        chartDay : action.payload.chartDay
                    }
                case 'ADDNEWDATA':
                    return {
                        ...state,
                        chartData : {...state.chartData, [action.payload.data.day] : action.payload.data.value }
                    }
                default:
                    break;
            }
        },
       
    }

})
//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

export const selectChartDay = (state : any) => state.chartDay;
export const selectChartData = (state : any) => state.chartData[state.chartDay];
export const { showLoading, changeDays} = userState.actions;
const store = configureStore({
    reducer : userState.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;