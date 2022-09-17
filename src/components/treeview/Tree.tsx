import React, { useCallback, useMemo, ChangeEvent } from 'react';

const Tree : React.FC<any> = ({ data }) => {

    let handleOpen = (e : any) => {
        e.stopPropagation();
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");
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