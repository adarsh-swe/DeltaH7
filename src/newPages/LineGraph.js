import { Line } from 'react-chartjs-2';
import {
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
import { MdInsertChart } from 'react-icons/md';
import React, { useEffect, text, useState } from 'react';
import Page from 'newComponents/Page';
import { dataJS } from 'newComponents/dataJS';

import axios from 'axios';

const LineGraph = ({ props }) => {
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
  const [chart, setchart] = useState({
    line: {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Covid vaccines administered',
            borderColor: '#6a82fb',
            backgroundColor: 'rgb(106,130,251, 0.8)',
            data: [],
          },

          {
            label: 'Covid case numbers',
            borderColor: '#fc5c7d',
            backgroundColor: '#fc5c7d',
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: true,
        },
        title: {
          display: false,
          text: 'Chart.js Line Chart - Stacked Area',
        },
        tooltips: {
          intersect: true,
          mode: 'nearest',
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              stacked: false,
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
              stacked: false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
  });

  const getData = () => {
    console.log(
      'https://delta7-api.billybishop.repl.co/api/provinceHistory/' + region,
    );
    axios
      .get(
        'https://delta7-api.billybishop.repl.co/api/provinceHistory/' + region,
      )
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

        console.log(theArr);
        console.log(theArr2);
        console.log(theArr3);

        setchart({
          line: {
            data: {
              labels: theArr3,
              datasets: [
                {
                  label: '# of people fully vaccinated',
                  borderColor: '#6a82fb',
                  backgroundColor: 'rgb(106,130,251, 0.8)',
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
                    stacked: false,
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
                    stacked: false,
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
  }, [region]);

  return (
    <Page>
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
                    return (
                      <DropdownItem
                        onClick={() => {
                          setRegion(x);
                          console.log(region);
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
      <Row>
        <Col lg="8" md="12" sm="12" xs="12">
          <Card>
            <CardHeader>
              Covid cases vs Covid vaccinations{' '}
              <small className="text-muted text-capitalize">
                <text style={{ color: 'red' }}> red = Covid cases</text>
              </small>
              <small className="text-muted text-capitalize">
                <text style={{ color: 'blue' }}>
                  {' '}
                  blue = Vaccination numbers
                </text>
              </small>
            </CardHeader>
            <CardBody>
              <Line data={chart.line.data} options={chart.line.options} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default LineGraph;
