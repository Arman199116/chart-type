import {DataType} from '../../model'

const getData = async (days : number) => {
    
    console.log('fetch data ' +  days);
    let response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=1`);
    let value: DataType = await response.json();
    
    return value;
};

export default getData;
