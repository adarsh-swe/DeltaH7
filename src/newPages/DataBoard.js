import React, { useEffect, text } from 'react';
import Page from 'newComponents/Page';
import LineGraph from './LineGraph';
import PercentBar from './PercentBar';
const DataBoard = () => {
  useEffect(() => {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  });
  return (
    <Page className="DashboardPage" title="Dashboard">
      <PercentBar></PercentBar>
      <LineGraph></LineGraph>
    </Page>
  );
};

export default DataBoard;
