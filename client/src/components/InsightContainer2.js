import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import InsightChart2 from './InsightChart2';

const InsightContainer2 = () => {
  const { leases, getLeases } = useContext(GlobalContext);
  const ed = new Date("2020-08-21T00:00:00.000Z").getTime();
  const sd = new Date("2017-08-21T00:00:00.000Z").getTime()
  const result = leases.filter(item => {
      const time = new Date(item.start_date).getTime();
      return (sd < time && time < ed);
  });
  console.log(result)

  useEffect(() => {
    getLeases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
        <InsightChart2 chartData={result}/>
    </React.Fragment>
  )
};

export default InsightContainer2;