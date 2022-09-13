import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeCoin, selectCoin } from "./../../redux/store";

const SelectCoin : React.FC = () => {
    const dispatch = useDispatch();
    const coin : string = useSelector(selectCoin);

    const handleSubmit = (e : any) => {
        e.preventDefault();
        let value : string = e.target.coins.value;
        if (value !== coin) {
            dispatch(changeCoin({type : 'NEW_COIN', coin : value}));
        }
    }
    return (
        <div className="select-coin">
            <form onSubmit={ e => handleSubmit(e)} >
                <label >Choose a Coin:</label>
                <select name="coins" id="coins">
                    <option value="bitcoin">Bitcoin</option>
                    <option value="ethereum">Ethereum</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SelectCoin;
