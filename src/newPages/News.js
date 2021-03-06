import React from 'react';
import NewsCard from './NewsCard';
import { news } from './news-config';
import { Col, Row } from 'reactstrap';

const News = () => {
  return (
    <>
      <Row>
        {news.map(element => {
          return (
            <Col md={3} sm={3} xs={12} className="mb-3">
              <NewsCard
                thumbnail={element.thumbnail}
                title={element.title}
                description={element.description}
                url={element.url}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default News;
