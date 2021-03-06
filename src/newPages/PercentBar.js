import React from 'react';
import { Row, Col } from 'reactstrap';
import { NumberWidget } from 'components/Widget';
import { dataJS } from 'newComponents/dataJS';

const theArr = dataJS.data.map(key => {
  return key.total_vaccinated;
});

const percentPopVac = () => {
  const temp = theArr[theArr.length - 1];
  return (temp / 30000000) * 100;
};

const PercentBar = () => {
  console.log(theArr);
  return (
    <Row>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Population Vaccinated"
          number={theArr[theArr.length - 1]}
          subtitle="Percentage of pop vaccinated"
          color="secondary"
          progress={{
            value: percentPopVac(),
            label: 'As of today',
          }}
        />
      </Col>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Total Profit"
          subtitle="This month"
          number="9.8k"
          color="secondary"
          progress={{
            value: 75,
            label: 'Last month',
          }}
        />
      </Col>
    </Row>
  );
};

export default PercentBar;
