import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { NewsCardType, NewsCard } from "../NewsCard/NewsCard";
import { newsStoryPreviews } from '../../../MockData/NewsPreviews';

const Title = styled.h2`
  margin-top: 96px;
  font-size: 2.75rem;
  text-decoration: underline;
  text-underline-offset: 12px;
  font-family: Arial Black;
`;

const NewsHomeSection: React.FC = () => {
  const filteredNewsStories = newsStoryPreviews.slice(0, 6);
  console.log(filteredNewsStories);
  const displayedStories = filteredNewsStories.map((n) => (
    <Col xs={12} sm={12} lg={6}>
      <NewsCard
        key={n.title}
        title={n.title}
        tags={n.tags}
        bodyPreview={n.bodyPreview}
        imageURL={n.imageURL}
        newsURL={n.newsURL}
      />
    </Col>
  ));

  return (
    <Grid>
      <Row>
        <Col>
          <Title>LATEST NEWS</Title>
        </Col>
      </Row>
      <Row>{displayedStories}</Row>
    </Grid>
  );
};

export default NewsHomeSection;
