import React, { useCallback, useRef } from 'react';
import Span from './Span';
import { useDispatch, useSelector } from "react-redux";
import { changeDays, selectCoin } from "./../../redux/store";

const HeaderToolBar : React.FC<any> = () => {
    const dispatch = useDispatch();
    const coin = useSelector(selectCoin);
    const containerRef = useRef<any>();

    let dayContainer = [
        ['1D', 1, 'days-span active'],
        ['7D', 7, 'days-span'],
        ['1M', 30, 'days-span'],
        ['3M', 90, 'days-span'],
        ['1Y', 365, 'days-span'],
        ['YTD', 185, 'days-span'],
        ['All', 'max', 'days-span'],
    ];
    const changeDay = useCallback((e : any, day : number | string) => {
        const span = containerRef.current.children;
        for (let i = 0; i < span.length; i++) {
            span[i].className = "days-span" ;
        }
        e.currentTarget.classList.toggle("active");
        // e.target.parentElement.child.forEach((el : string, i : number)  => {
        //     if (i === )
        // });
        // console.dir('kkk ' + e.currentTarget.parentElement.children[0].innerHTML );
        
        // console.log(e.currentTarget, day);
        // arr.forEach((item : any ) => {
        //     if (item[1] === day) {
        //         return [...item, item[2] += ' active'];
        //     }
        //     return [...item, item[2] = 'days-span'];;
        // })


        if (coin === 'ethereum') {
            dispatch(changeDays({type : 'CHANGE_ETH_DAYS', chartDay : day}));
        } else {
            dispatch(changeDays({type : 'CHANGE_DAYS', chartDay : day}));
        }
    },[])
    return (
        <div className='span-container'>
            <div ref={containerRef} className='span-container2'>
                {
                    dayContainer.map((item : any, i : number) => {
                        return (
                            //<Span key={index} arr={dayContainer} changeDay={changeDay} dayName={item[0]} day={item[1]} active={ item[2] } />
                            <span key={i} className={item[2]}  onClick={ e => changeDay(e, item[1])}>{item[0]}</span> 
                            )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderToolBar;