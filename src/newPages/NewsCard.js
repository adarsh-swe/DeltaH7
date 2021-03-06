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
        <CardText>{description}</CardText>
        <a href={url}>
          <Button>Visit</Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
