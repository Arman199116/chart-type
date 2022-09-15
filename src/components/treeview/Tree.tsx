import React, { useCallback, useMemo, ChangeEvent } from 'react';
import { ArrType } from "./../../model";


const Tree : React.FC<any> = ({ data, toRight }) => {

    let handleOpen = (e : any) => {
        e.stopPropagation();
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");

    }
    let arr : ArrType[] = [];
    let tree = (data : any, toRight : number, ind : number) => {
        toRight++;
        return (
            Object.keys(data).map((item) => {

                if (typeof data[item] === 'object' || Array.isArray(data[item])) {
                    arr.push({'key' : Math.random() + toRight, 'span' : "caret", 'ul' : 'nested'});
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={Math.random() + toRight}>
                                <span className="caret" onClick={(e) => {
                                    //let {span , ul} = arr[ind ];
                                    arr[ind] = {...arr[ind], span : 'caret caret-down' , ul : 'nested actice'};
                                    localStorage.setItem('class', JSON.stringify(arr));
                                    handleOpen(e);
                                }}
                                >{item}</span>
                                <ul className="nested">
                                    {tree(data[item], toRight, ind++)}
                                </ul>
                           </li>
                } else {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={Math.random() + toRight}>{`${item} : ${data[item]?.toString()}`}</li>
                }

            })
        )
    };
    
    return (
        <>
            {
                tree(data, 0, 0)
            }
        </>
    )
}

export default React.memo(Tree);