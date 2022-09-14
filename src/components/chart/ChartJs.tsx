import React, { useEffect, useState, useMemo, useRef} from "react";
import  "chart.js/auto";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from 'chart.js';
import ClipLoader from 'react-spinners/ClipLoader';
import { createSelector } from 'reselect';
import getData from "./../data/fetch_data";
import { DataType } from "./../../model";
import { optionsChartjs_2 } from './graph/options';
import { useDispatch, connect, useSelector } from "react-redux";
import { dataLabel } from "./../data/dataLabel";
import { selectChartCoinDay, selectChartCoinData, changeDays, selectCoin } from "./../../redux/store";

interface Props {
    days : number;
    dayData : DataType;
}

const ChartJs : React.FC<Props> = ({ days , dayData }) => {
    let dispatch = useDispatch();
    let coin : string = useSelector(selectCoin);
    //let ref = useRef<any>({labels: [], datasets: []});

    const [isLoading, setIsloading] = useState<boolean>(false);
    const [data, setData] = useState<any>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        setIsloading(true);
        if (dayData === undefined) {

            getData(days, coin).then(value => {
                let dataObj = dataLabel.addData(value);
                setData(dataObj);
                //ref.current = dataObj;
                if (coin === 'ethereum') {
                    console.log(coin);  
                    dispatch(changeDays({
                        type : 'ADD_NEW_ETH_DATA',
                        data : {
                            day : days,
                            value : dataObj
                        }
                    }));
                } else {
                    console.log(coin);
                    dispatch(changeDays({
                        type : 'ADD_NEW_DATA',
                        data : {
                            day : days,
                            value : dataObj
                        }
                    }));
                }
            });
        } else {
            setData(dayData);
            //ref.current = dayData;
        }

    },[days, dayData, dispatch]);

    useEffect(() => {
        setIsloading(false);
    },[data]);

    return (
        <div className="chart-container-parrent">

            {

                (!isLoading) ? (
                    <div >
                        <div className="chart-container">
                            <Line data={data} options={optionsChartjs_2} />
                        </div>
                    </div>
                ) : (
                    <div className="loading-board" >
                        <ClipLoader color={'red'} size={100} />
                        <p>Please wait</p>
                    </div>
                )
            }
        </div>
    )
}

let getChartValue = createSelector([ selectChartCoinData, selectChartCoinDay ], (chartData, chartDay) => {
    console.log('new chart data');
    return {
        dayData : chartData,
        days : chartDay
    };
});
const mapStateToProps = (state : any) => {
    const {days, dayData} = getChartValue(state);
    return {
        days : days,
        dayData : dayData
    }
}

export default connect(mapStateToProps)(ChartJs)
