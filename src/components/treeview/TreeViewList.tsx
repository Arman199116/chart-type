import React from "react";
import { createSelector } from 'reselect';
import { selectState } from './../../redux/store';
import { connect } from "react-redux";
import Tree from "./Tree";
import './tree.css';
import { InitialStateType, TreeviewListType } from "../../model";

const TreeviewList : React.FC<TreeviewListType> = ({ state }) => {

    return (
        <div className='container-state-tree'>
            <h3>State data</h3>
            <ul id="myUL">
                <Tree data = {{State : state}} />
            </ul>
        </div>
    )
}

let getState = createSelector([ selectState ], (state ) => {
    return { stateObj : state }
});
const mapStateToProps = (state : InitialStateType) => {
    const { stateObj } = getState(state);
    return { state : stateObj }
}

export default connect(mapStateToProps)(TreeviewList);

