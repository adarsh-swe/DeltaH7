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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { MdInsertChart } from 'react-icons/md';
import React, { useEffect, text, useState } from 'react';
import Page from 'newComponents/Page';
import { dataJS } from 'newComponents/dataJS';
import News from './News';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const LineGraph = ({ props }) => {
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
  const [modal, setModal] = useState(false);
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
  const toggle = () => setModal(!modal);
  const getData = () => {
    const query =
      region === 'CAN'
        ? 'https://Delta7-API.billybishop.repl.co/api/test'
        : 'https://delta7-api.billybishop.repl.co/api/provinceHistory/' +
          region;

    axios
      .get(query)
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
      <Row className="align-items-center">
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
        <Col lg="4" md="12" sm="12" xs="12">
          <Card style={{ backgroundColor: '#f8f9fa', borderColor: '#f8f9fa' }}>
            Given the current state of the COVID-19 pandemic, the recent
            approvals for numerous vaccines are a promising step towards
            returning to our normal lives. However, the fast tracked research
            and development processes for preparing this vaccine have caused
            many people to doubt its effectiveness and are concerned about
            potential side effects associated with it. Though this is a valid
            concern, there are many misconceptions about the vaccine’s side
            effects including rumours of microchips being implanted via the
            injection, or it potentially altering your DNA. For the average
            person, such rumours are enough to cause distrust in the available
            vaccines and many people make judgments without taking the time to
            fully understand the vaccine. This tool is meant for the average
            person to understand the covid situation and the importance of the
            vaccine in a concise manner.
            <div
              className="align-center"
              style={{ marginBottom: 10, marginTop: 10 }}
            >
              <Button color="danger" onClick={toggle}>
                Read More
              </Button>
            </div>
          </Card>

          <Row className="d-flex align-items-center">
            <Col className="d-flex align-items-center">
              <Card>
                <CardBody>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      caret
                      color="#236842"
                      className="text-capitalize m-1"
                    >
                      {region}
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
        </Col>
      </Row>
      <h4>News:</h4>
      <News news={region} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Vaccine Info</ModalHeader>
        <ModalBody className="overflow-auto">
          <p>
            To debunk the false rumours of microchipping and altering your DNA,
            we first need to understand how the vaccine works. According to John
            Hopkins Medicine faculty, The coronavirus that causes COVID-19 has
            spikes of protein on each viral particle. These spikes help the
            viruses attach to cells and cause disease. Some of the coronavirus
            vaccines in development are designed to help the body “recognize”
            these spike proteins and fight the coronavirus that has them. An
            effective vaccine will protect a person who receives it by lowering
            their chances of getting COVID-19 if they encounter the coronavirus.
            Widespread vaccination for the coronavirus means that the virus will
            not infect as many people. This will limit spread through
            communities. As you can see, the vaccine uses a similar spike
            protein as that of the virus to ‘train’ your immune system to combat
            it. As of right now, the two most effective vaccines are made by
            Moderna and Pfizer, and are around 95% effective in preventing the
            deadly virus, NOT altering your DNA or microchipping you.
          </p>
          <p>
            Another concern that is more notable is the fast-tracked production
            of this vaccine. Given that vaccines can take around 10 years to
            fully develop, the accelerated production of the Covid-19 vaccine
            which was made in under a year concerns many people. However, when
            considering the core purpose of this vaccine and the rate at which
            the virus was spreading, the accelerated production time is
            justified. Companies were able to develop the vaccine very quickly
            because of the global demand for it, which provided more funding and
            resources towards its production than a normal vaccine. Also at its
            current state, the vaccine is intended to decrease the Covid growth
            rate and is still being developed to improve its overall
            effectiveness.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Page>
  );
};

export default LineGraph;
