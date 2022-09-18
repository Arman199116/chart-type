import React, { useEffect, useState} from "react";
import  "chart.js/auto";
import { Line } from "react-chartjs-2";
import ClipLoader from 'react-spinners/ClipLoader';
import { createSelector } from 'reselect';
import getData from "./../data/fetch_data";
import { Props, StateDataType, InitialStateType } from "./../../model";
import { optionsChartjs_2 } from './graph/options';
import { useDispatch, connect, useSelector } from "react-redux";
import { addData } from "./../data/dataLabel";
import { selectChartCoinDay, selectChartCoinData, changeDays, selectCoin } from "./../../redux/store";


const ChartJs : React.FC<Props> = ({ days , dayData }) : JSX.Element => {
    let dispatch = useDispatch();
    let coin : string = useSelector(selectCoin);

    const [isLoading, setIsloading] = useState<boolean>(false);
    const [data, setData] = useState<StateDataType>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        setIsloading(true);
        if (dayData === undefined) {

            getData(days, coin).then(value => {
                let dataObj : StateDataType = addData(value);
                setData(dataObj);
                if (coin === 'ethereum') {
                    dispatch(changeDays({
                        type : 'ADD_NEW_ETH_DATA',
                        data : {
                            day : days,
                            value : dataObj
                        }
                    }));
                } else {
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
        }

    },[days, dayData, dispatch, coin]);

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
    return {
        dayData : chartData,
        days : chartDay
    };
});
const mapStateToProps = (state : InitialStateType) => {
    const {days, dayData} = getChartValue(state);
    return {
        days : days,
        dayData : dayData
    }
}

export default connect(mapStateToProps)<any>(ChartJs)
