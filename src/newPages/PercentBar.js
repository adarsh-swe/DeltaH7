import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { NumberWidget } from 'components/Widget';
import axios from 'axios';

const PercentBar = () => {
  const [barData, setBarData] = useState({
    newDate: '',
    totalVaccinated: [],
    percentVac: [],
    totalCases: [],
    percentCase: [],
    totalFatalities: [],
    percentFat: [],
    totalRecoveries: [],
    percentRec: [],
  });
  const getData = () => {
    console.log('https://delta7-api.billybishop.repl.co/api/test');
    axios
      .get('https://delta7-api.billybishop.repl.co/api/test')
      .then(res => res.data)
      .then(json => {
        const date = json.data.map(key => {
          return key.date;
        });

        const arr = json.data.map(key => {
          return key.total_vaccinated;
        });

        const arr2 = json.data.map(key => {
          return key.total_cases;
        });

        const arr3 = json.data.map(key => {
          return key.total_fatalities;
        });

        const arr4 = json.data.map(key => {
          return key.total_recoveries;
        });

        setBarData({
          newDate: date[date.length - 1],
          totalVaccinated: arr[arr.length - 1],
          percentVac: parseFloat(
            ((arr[arr.length - 1] / 37742154) * 100).toFixed(4),
          ),
          totalCases: arr2[arr2.length - 1],
          percentCase: parseFloat(
            ((arr2[arr2.length - 1] / 37742154) * 100).toFixed(4),
          ),
          totalFatalities: arr3[arr3.length - 1],
          percentFat: parseFloat(
            ((arr3[arr3.length - 1] / 37742154) * 100).toFixed(4),
          ),
          totalRecoveries: arr4[arr4.length - 1],
          percentRec: parseFloat(
            ((arr4[arr4.length - 1] / 37742154) * 100).toFixed(4),
          ),
        });
      });
  };
  useEffect(() => {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);

    getData();
  }, []);
  return (
    <Row>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Population Vaccinated"
          number={barData.totalVaccinated}
          subtitle="Percentage of pop vaccinated"
          color="secondary"
          progress={{
            value: barData.percentVac,
            label: 'As of ' + barData.newDate,
          }}
        />
      </Col>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Total cumulative infected"
          subtitle="Percentage of pop infected"
          number={barData.totalCases}
          color="secondary"
          progress={{
            value: barData.percentCase,
            label: 'As of ' + barData.newDate,
          }}
        />
      </Col>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Total Covid Fatalities"
          subtitle="Percentage of pop fatalities"
          number={barData.totalFatalities}
          color="secondary"
          progress={{
            value: barData.percentFat,
            label: 'As of ' + barData.newDate,
          }}
        />
      </Col>
      <Col lg={3} md={6} sm={6} xs={12}>
        <NumberWidget
          title="Total Recoveries"
          subtitle="Percentage of population recovered"
          number={barData.totalRecoveries}
          color="secondary"
          progress={{
            value: barData.percentRec,
            label: 'As of ' + barData.newDate,
          }}
        />
      </Col>
    </Row>
  );
};

export default PercentBar;
