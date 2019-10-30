import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            chartData: {
                labels:[],
                datasets: [{
                    data: [],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ]
                }]
            }
        }
        
    }
    
    render(){
        return(
            <Doughnut data={this.state.chartData}/>
        )
    }
}
export default DoughnutChart