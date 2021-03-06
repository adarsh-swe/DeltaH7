import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';

const NewsCard = ({ thumbnail, title, description, url }) => {
  return (
    <Card>
      <CardImg top width="100%" src={thumbnail} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
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
