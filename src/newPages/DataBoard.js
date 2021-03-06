import React, { useEffect, useState, text } from 'react';
import Page from 'newComponents/Page';
import LineGraph from './LineGraph';
import PercentBar from './PercentBar';
import News from './News';

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
  const [region, setRegion] = useState('CAN'); //based on code
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
        <Col md={2}>
          <Card>
            <CardBody>
              <UncontrolledButtonDropdown>
                <DropdownToggle
                  caret
                  color="#236842"
                  className="text-capitalize m-1"
                >
                  Region
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Select a Region</DropdownItem>
                  {regions.map(x => {
                    return region == x ? (
                      <DropdownItem disabled onClick={() => setRegion(x)}>
                        {x}
                      </DropdownItem>
                    ) : (
                      <DropdownItem
                        onClick={() => {
                          setRegion(x);
                        }}
                      >
                        {x}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <LineGraph region={region}></LineGraph>
      <News />
    </Page>
  );
};

export default DataBoard;
