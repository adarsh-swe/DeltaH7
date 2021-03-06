import Page from 'components/Page';
import React, { useState, Text } from 'react';
import { ComposableMap } from 'react-simple-maps';
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
import { getThemeColors } from 'utils/colors';

const colors = getThemeColors();

const ProvSelector = () => {
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

  return (
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
  );
};

export default ProvSelector;
