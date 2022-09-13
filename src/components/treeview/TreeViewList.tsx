import React, {useMemo} from "react";
//import { createSelector } from 'reselect';
import { selectState } from './../../redux/store';
import {  useSelector } from "react-redux";
import Tree from "./Tree";
import './tree.css';

const TreeviewList : React.FC = () => {

    let state : any = useSelector(selectState);

    return (
        <div className='container-state-tree'>
            <h3>State data</h3>
            <ul id="myUL">
                <Tree data = {{State : state}} toRight={0}/>
            </ul>
        </div>
    )
}
// let getState = createSelector([ selectState ], (state) => {
//     return { stateObj : state }
// });
// const mapStateToProps = (state : any) => {
//     const { stateObj } = getState(state);
//     return { state : stateObj }
// }connect(mapStateToProps)

export default React.memo(TreeviewList);

