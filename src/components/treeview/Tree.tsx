import React, { useCallback, useMemo, ChangeEvent } from 'react';

const Tree : React.FC<any> = ({ data, toRight }) => {

    let handleOpen = (e : any) => {

        console.log( 
            typeof e
         );
        e.stopPropagation();
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");
    }
    let arr : any = [];
    let tree = useMemo(() => (data : any, toRight : number) => {
        toRight++;
        arr.push({'key' : Math.random() + toRight, 'span' : "caret", 'ul' : 'nested'});

        return (
            Object.keys(data).map((item) => {

                if (typeof data[item] === 'object' || Array.isArray(data[item])) {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={Math.random() + toRight}>
                                <span className="caret" onClick={(e) => {
                                    let {span , ul} = arr[toRight - 1];
                                    arr[toRight - 1] = {...arr[toRight - 1], span : span === 'caret' ? 'caret caret-down' : 'caret' , ul : ul === 'nested' ? 'nested active' : 'nested'};
                                    localStorage.setItem('class', JSON.stringify(arr)); 
                                    handleOpen(e);
                                }}
                                >{item}</span>
                                <ul className="nested">
                                    {tree(data[item], toRight)}
                                </ul>
                           </li>
                } else {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={Math.random() + toRight}>{`${item} : ${data[item]?.toString()}`}</li>
                }

            })
        )
    },[]);
    
    return (
        <>
            {
                tree(data, 0)
            }
        </>
    )
}

export default React.memo(Tree);