import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';

const NewsCard = (thumbnail, title, description, url) => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="/assets/318x180.svg"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
