import { Chart } from 'chart.js';
import 'chartjs-adapter-moment';
//import { ChartPluginsOptions } from "@types/chartjs-plugin-crosshair";
//import { CrosshairOptions } from "@types/chartjs-plugin-crosshair";
//Chart.register(CrosshairOptions);

////// react-chartjs-2 options //////////////////

export let optionsChartjs_2 : any = {
    elements: { point: { radius: 0 } } ,
    plugins: {
        crosshair: {
            line: {
                color: "#d1d1d1",
                width: 2,
            },
        },
        legend: {
            display: false
        },
        tooltip: {

            mode: 'index',
            intersect: false,
            backgroundColor: '#FFFFFF',
            bodyColor: "black",
            padding: 20,
            titleColor: 'black',
            callbacks: {
                label: function(chart : any) {
                    return ' Price $' + chart.formattedValue 
                },
                labelColor: function(chart : any) {
                    return {   
                        backgroundColor: '#16C784',
                        borderWidth: 3,
                        borderRadius: 5,
                    };
                },
            },
        },
    },

    scales: {

        x: {
            grid: {
                display: false
            },
            type: "time",
            distribution: "linear",

            time: {
                parser: "dd/mm/yyyy",    
            },
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
            }    
        },
        y: {
            ticks: {
                beginAtZero: true,
                autoSkip: true,
                maxTicksLimit: 12,  
                callback: function(value : string) {
                    return  (Number.parseFloat(value).toFixed(2)) + 'K';
                },
            },
        },
    }
}