import React from 'react';

const Tree : React.FC<any> = ({ data, toRight }) => {

    let handleOpen = (e : any) => {
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");
    }
    toRight++;
    return (
        <>
            {Object.keys(data).map((item) => {

                if (typeof data[item] === 'object' || Array.isArray(data[item])) {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={Math.random() + toRight}>
                                <span className="caret" onClick={ (e) => handleOpen(e)}>{item}</span>
                                <ul className="nested">
                                    <Tree data={data[item]} toRight={toRight} />
                                </ul>
                           </li>
                } else {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={Math.random() + toRight}>{`${item} : ${data[item]?.toString()}`}</li>
                }

            })}
        </>
    )
}

export default React.memo(Tree);