import { Line } from 'react-chartjs-2';
import { Card, Row, CardBody, CardHeader, Col } from 'reactstrap';
import { MdInsertChart } from 'react-icons/md';
import React, { useEffect, text } from 'react';
import Page from 'newComponents/Page';
import { dataJS } from 'newComponents/dataJS';

const theArr = dataJS.data.map(key => {
  return key.total_vaccinated;
});

const theArr2 = dataJS.data.map(key => {
  return key.total_cases;
});

const theArr3 = dataJS.data.map(key => {
  return key.date;
});
const chart = {
  line: {
    data: {
      labels: theArr3,
      datasets: [
        {
          label: 'Covid vaccines administered',
          borderColor: '#6a82fb',
          backgroundColor: '#6a82fb',
          data: theArr,
        },

        {
          label: 'Covid case numbers',
          borderColor: '#fc5c7d',
          backgroundColor: '#fc5c7d',
          data: theArr2,
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Stacked Area',
      },
      tooltips: {
        intersect: false,
        mode: 'nearest',
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: 'Date',
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: 'Numbers',
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  },
};
const LineGraph = ({ props }) => {
  useEffect(() => {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  });
  return (
    <Row>
      <Col lg="8" md="12" sm="12" xs="12">
        <Card>
          <CardHeader>
            Covid cases vs Covid vaccinations{' '}
            <small className="text-muted text-capitalize">
              <text style={{ color: 'red' }}> red = Covid cases</text>
            </small>
            <small className="text-muted text-capitalize">
              <text style={{ color: 'blue' }}> blue = Vaccination numbers</text>
            </small>
          </CardHeader>
          <CardBody>
            <Line data={chart.line.data} options={chart.line.options} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default LineGraph;
