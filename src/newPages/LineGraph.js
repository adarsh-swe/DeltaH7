import { Line } from 'react-chartjs-2';
import { Card, Row, CardBody, CardHeader, Col } from 'reactstrap';
import { MdInsertChart } from 'react-icons/md';
import React, { useEffect, text, useState } from 'react';
import Page from 'newComponents/Page';
import { dataJS } from 'newComponents/dataJS';

import axios from 'axios';

/*const theArr = dataJS.data.map(key => {
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
}; */
const LineGraph = ({ props }) => {
  const [arr, setarr] = useState([]);
  const [arr2, setarr2] = useState([]);
  const [arr3, setarr3] = useState([]);

  const [chart, setchart] = useState({
    line: {
      data: {
        labels: arr3,
        datasets: [
          {
            label: 'Covid vaccines administered',
            borderColor: '#6a82fb',
            backgroundColor: '#6a82fb',
            data: arr,
          },

          {
            label: 'Covid case numbers',
            borderColor: '#fc5c7d',
            backgroundColor: '#fc5c7d',
            data: arr2,
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
  });

  const getData = () => {
    axios
      .get('https://delta7-api.billybishop.repl.co/api/provinceHistory/on')
      .then(res => res.data)
      .then(json => {
        const theArr = json.data.map(key => {
          return key.total_vaccinated;
        });

        const theArr2 = json.data.map(key => {
          return key.total_cases;
        });

        const theArr3 = json.data.map(key => {
          return key.date;
        });

        setchart({
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
        });

        setTimeout(() => {
          console.log(chart);
        }, 4000);
      });
  };

  useEffect(() => {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);

    getData();
  }, []);

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
