import React from 'react';
import { TreeviewType } from '../../model';

const Tree : React.FC<TreeviewType> = ({ data }) => {

    let handleOpen = (e : React.MouseEvent) : void => {
        const clickedEl = e.target as HTMLSpanElement;
        e.stopPropagation();
        clickedEl.parentElement?.querySelector(".nested")?.classList.toggle("active");
        clickedEl.classList.toggle("caret-down");
    }

    let tree = (data : any, toRight : number, ind : number) => {
        toRight++;

        return (
            Object.keys(data).map((item) => {

                if (typeof data[item] === 'object' || Array.isArray(data[item])) {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={item + toRight}>
                                <span className="caret" onClick={ (e) => handleOpen(e)}>{item}</span>
                                <ul className="nested">
                                    {tree(data[item], toRight, ind++)}
                                </ul>
                           </li>
                } else {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={item + toRight}>{`${item} : ${data[item]?.toString()}`}</li>
                }

            })
        )
    }

    return (
        <>
            {
                tree(data, 0, 0)
            }
        </>
    )
}

export default React.memo(Tree);