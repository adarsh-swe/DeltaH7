import React, { useEffect, useState, text } from 'react';
import Page from 'newComponents/Page';
import LineGraph from './LineGraph';
import PercentBar from './PercentBar';
<<<<<<< HEAD
import News from './News';
import TableTwo from 'newComponents/TableTwo';
=======
>>>>>>> 5ec032b614a1479c4b63faa4a506b02f6730655b

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap';

const DataBoard = () => {
  const [region, setRegion] = useState('ON'); //based on code
  const regions = [
    'CAN',
    'ON',
    'QC',
    'NS',
    'NB',
    'MB',
    'BC',
    'PE',
    'SK',
    'AB',
    'NL',
    'NT',
    'YT',
    'NU',
  ];
  useEffect(() => {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  });
  return (
    <Page className="DashboardPage" title="Dashboard">
      <PercentBar></PercentBar>
      <Row>
        <Col lg="8" md="12" sm="12" xs="12">
          <LineGraph></LineGraph>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <TableTwo />
        </Col>
      </Row>
    </Page>
  );
};

export default DataBoard;
