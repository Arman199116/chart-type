import React, { useRef } from 'react';
import Span from './Span';
import { useDispatch, useSelector } from "react-redux";
import { changeDays, selectCoin } from "./../../redux/store";

const HeaderToolBar = () => {
    const dispatch = useDispatch();
    const coin = useSelector(selectCoin);
    const containerRef = useRef<any>();

    const changeDay = (e : any, day : number) => {
        const span = containerRef.current.children;
        for (let i = 0; i < span.length; i++) {
            span[i].className = "days-span" ;
        }
        e.currentTarget.className += " active";
        if (coin === 'ethereum') {
            dispatch(changeDays({type : 'CHANGE_ETH_DAYS', chartDay : day}));
        } else {
            dispatch(changeDays({type : 'CHANGE_DAYS', chartDay : day}));
        }
    }
    let dayContainer = [
        ['1D', 1, 'active'],
        ['7D', 7, ''],
        ['1M', 30, ''],
        ['3M', 90, ''],
        ['1Y', 365, ''],
        ['YTD', 185, ''],
        ['All', 'max', ''],
    ];
    return (
        <div className='span-container'>
            <div ref={containerRef} className='span-container2'>
                {
                    dayContainer.map((item, index) => {
                        return (
                            <Span key={index} changeDay={changeDay} dayName={item[0]} day={item[1]} activ={ item[2] } />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderToolBar;