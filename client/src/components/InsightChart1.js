import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class InsightChart1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <div className='row'>
          <div className='mixed-chart'>
            <Doughnut
              data={this.props.chartData}
              options={{
                title: {
                  display: true,
                  text: '# of Leases By Type'
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
