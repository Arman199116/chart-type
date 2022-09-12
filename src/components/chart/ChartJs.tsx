import React, { useEffect, useState, useMemo} from "react";
import  "chart.js/auto";
import { Line } from "react-chartjs-2";
import ClipLoader from 'react-spinners/ClipLoader';
import { createSelector } from 'reselect';
import getData from "./../data/fetch_data";
import { DataType } from "./../../model";
import {optionsChartjs_2} from './graph.ts/options';
import { useDispatch, connect } from "react-redux";

const ChartJs : React.FC = () => {
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [data, setData] = useState<any>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        setIsloading(true);
        if (!dayData) {
            getData(days).then(value => {
                let dataObj = dataLabel.addData(value);
                setData(dataObj);
                dispatch(changeDays({
                    type : 'ADDNEWDATA',
                    data : {
                        day : days,
                        value : dataObj
                    }
                }))
            });
        } else {
            setData(dayData);
        }

    },[days, dispatch, dayData]);
    return (
        <div>
            <Line data={data} width='390px' options={optionsChartjs_2} />
        </div>
    )
}


let getChartValue = createSelector([ selectChartData, selectChartDay ], (chartData, chartDay) => {
    console.log('new chart data');
    return {
        dayData : chartData,
        days : chartDay
    };
});
const mapStateToProps = (state) => {
    const {days, dayData} = getChartValue(state);
    return {
        days : days,
        dayData : dayData
    }
}

export default connect(mapStateToProps)(ChartJs)
