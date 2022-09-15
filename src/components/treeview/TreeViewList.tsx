import React, {useMemo} from "react";
import { createSelector } from 'reselect';
import { selectState } from './../../redux/store';
import {  useSelector, connect } from "react-redux";
import Tree from "./Tree";
import './tree.css';

const TreeviewList : React.FC<any> = ({ state }) => {

    //let state : any = useSelector(selectState);
    let t = useMemo(() => <Tree data = {{State : state}} toRight={0}/>, [state]);

    return (
        <div className='container-state-tree'>
            <h3>State data</h3>
            <ul id="myUL">
                {t}
            </ul>
        </div>
    )
}

let getState = createSelector([ selectState ], (state) => {
    return { stateObj : state }
});
const mapStateToProps = (state : any) => {
    const { stateObj } = getState(state);
    return { state : stateObj }
}

export default connect(mapStateToProps)(TreeviewList);

