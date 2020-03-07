import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class InsightChart1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <div className='row'>
          <div className='mixed-chart'>
            <Bar
              data={this.props.chartData}
              options={{
                title: {
                  display: true,
                  text: '# of Leases By Type'
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        stepSize: 1
                      }
                    }
                  ]
                },
                legend: {
                  display:false
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InsightChart1;
