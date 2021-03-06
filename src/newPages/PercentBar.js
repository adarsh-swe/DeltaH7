import React from 'react';
import { Row, Col } from 'reactstrap';
import { NumberWidget } from 'components/Widget';
import { dataJS } from 'newComponents/dataJS';

const PercentBar = () => {
  const dateArr = dataJS.data.map(key => {
    return key.date;
  });

  const theArr = dataJS.data.map(key => {
    return key.total_vaccinated;
  });

  const theArr2 = dataJS.data.map(key => {
    return key.total_cases;
  });

  const theArr3 = dataJS.data.map(key => {
    return key.total_fatalities;
  });

  const theArr4 = dataJS.data.map(key => {
    return key.total_recoveries;
  });

  const percentPopVac = () => {
    const temp = theArr[theArr.length - 1];
    return parseFloat(((temp / 37742154) * 100).toFixed(3));
  };

  const percentPopInf = () => {
    const temp2 = theArr2[theArr2.length - 1];
    return parseFloat(((temp2 / 37742154) * 100).toFixed(3));
  };

  const percentPopFat = () => {
    const temp2 = theArr3[theArr2.length - 1];
    return parseFloat(((temp2 / 37742154) * 100).toFixed(4));
  };

  const percentInfRec = () => {
    const temp2 = theArr4[theArr4.length - 1];
    return parseFloat(((temp2 / 37742154) * 100).toFixed(4));
  };
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
            label: 'As of ' + dateArr[dateArr.length - 1],
          }}
        />
      </Col>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Total cumulative infected"
          subtitle="Percentage of pop infected"
          number={theArr2[theArr.length - 1]}
          color="secondary"
          progress={{
            value: percentPopInf(),
            label: 'As of ' + dateArr[dateArr.length - 1],
          }}
        />
      </Col>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Total Covid Fatalities"
          subtitle="Percentage of pop fatalities"
          number={theArr3[theArr.length - 1]}
          color="secondary"
          progress={{
            value: percentPopFat(),
            label: 'As of ' + dateArr[dateArr.length - 1],
          }}
        />
      </Col>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Total Recoveries"
          subtitle="Percentage of population recovered"
          number={theArr4[theArr.length - 1]}
          color="secondary"
          progress={{
            value: percentInfRec(),
            label: 'As of ' + dateArr[dateArr.length - 1],
          }}
        />
      </Col>
    </Row>
  );
};

export default PercentBar;
