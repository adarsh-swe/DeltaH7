import Page from 'components/Page';
import React, { useState } from 'react';
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
  const MAPPINGS = {
    CAN: 'Canada',
    ON: 'Ontario',
    QC: 'Quebec',
    NS: 'Nova Scotia',
    NB: 'New Brunswick',
    MB: 'Manitoba',
    BC: 'British Columbia',
    PE: 'Prince Edward Island',
    SK: 'Saskatchewan',
    AB: 'Alberta',
    NL: 'Newfoundland',
    NT: 'Northwest Territories',
    YT: 'Yukon',
    NU: 'Nunavut',
  };

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
                  return region === MAPPINGS.x ? (
                    <DropdownItem disabled>{MAPPINGS.x}</DropdownItem>
                  ) : (
                    <DropdownItem>{MAPPINGS.x}</DropdownItem>
                  );
                })}

                <DropdownItem disabled>canada</DropdownItem>
                <DropdownItem>Ontario</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProvSelector;
