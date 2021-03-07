import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
// import { news } from './news-config';
import { Col, Row } from 'reactstrap';
import axios from 'axios';

const News = ({ news }) => {
  const [newsArr, setnewsArr] = useState([]);
  const newsData = () => {
    axios
      .get('https://deltaapi.billybishop.repl.co/api/news/' + news)
      .then(res => res.data)
      .then(json => {
        setnewsArr(json);
      });
  };

  useEffect(() => {
    newsData();
  }, [news]);

  return (
    <>
      <Row>
        {newsArr.map(element => {
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
