import React from 'react'
import { useDispatch } from "react-redux";
import { changeCoin } from "./../../redux/store";

const SelectCoin : React.FC = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e : any) => {
        e.preventDefault();
        dispatch(changeCoin({type : 'NEW_COIN', coin : e.target.coins.value}));
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
