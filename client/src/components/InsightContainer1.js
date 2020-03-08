import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import InsightChart1 from './InsightChart1';

const InsightContainer1 = () => {
  const { leases, getLeases } = useContext(GlobalContext);
  const newData = [];
  const newCar = [];
  const usedCar = [];
  const otherCar = [];
  leases.map(item => {
    if (item.lease_type === 'NEW') {
      newCar.push(item.lease_type);
    } else if (item.lease_type === 'USED') {
      usedCar.push(item.lease_type);
    } else {
      otherCar.push(item.lease_type);
    }
  });
  newData.push(newCar.length);
  newData.push(usedCar.length);
  newData.push(otherCar.length);

  const chartData = {
    labels: ['New', 'Used', 'Short-Term'],
    datasets: [
      {
        data: newData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  useEffect(() => {
    getLeases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <InsightChart1 chartData={chartData} />
    </React.Fragment>
  )
};

export default InsightContainer1;
