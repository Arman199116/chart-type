import {DataType} from '../../model';

const getData = async (days : number, coin : string ) => {
    var options : any = {
        method: "GET",
        headers: {
            'Accept': "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    };
    
    console.log('fetch data ' +  days);
    let response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${days}&interval=1`, options );
    console.log('sfsdfasdfasdf ' );
    let value: DataType = await response.json();
    
    return value;
};

export default getData;
