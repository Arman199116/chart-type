import React, { useRef } from 'react';
import { useDispatch } from "react-redux";
import { Day, Item } from '../../model';
import { changeDays } from "./../../redux/store";

const HeaderToolBar : React.FC = () => {
    const dispatch = useDispatch();
    const containerRef = useRef<HTMLDivElement>(null);

    let dayContainer : Item[][] = [
        ['1D', 1, 'days-span active'],
        ['7D', 7, 'days-span'],
        ['1M', 30, 'days-span'],
        ['3M', 90, 'days-span'],
        ['1Y', 365, 'days-span'],
        ['YTD', 185, 'days-span'],
        ['All', 'max', 'days-span'],
    ];
    const changeDay = (e : React.MouseEvent, day : Day, dayName : string) => {
        const clickedEl = e.target as HTMLSpanElement;
        dispatch(changeDays({type : 'CHANGE_DAYS', chart : {chartDay : day, dayName : dayName}}));

        const span = containerRef.current!.children;
        for (let i = 0; i < span.length; i++) {
            span[i].className = "days-span";
        }
        clickedEl.classList.toggle('active');
    }

    return (
        <div className='span-container'>
            <div ref={containerRef} className='span-container2'>
                {
                    dayContainer.map((item : any , i : number) => {
                        return (
                            <span key={i} className={ item[2] } onClick={ e => changeDay(e, item[1], item[0])}>{item[0]}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderToolBar;