import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { NewsCard } from "../Components/News/NewsCard/NewsCard";
import { newsStoryPreviews } from "../MockData/NewsPreviews";

type NewsType = {
  isSticky: boolean;
};

const ResponsiveBody = styled.div<{ isSticky: boolean }>`
  ${({ isSticky }) =>
    isSticky &&
    `
    padding-top: 110px;
  `}
`;

const Title = styled.h1`
  margin-top: 96px;
  font-size: 2.75rem;
  text-decoration: underline;
  text-underline-offset: 12px;
  font-family: Arial Black;
`;

const News: React.FC<NewsType> = ({ isSticky }) => {
  const NewsPreviews = newsStoryPreviews.map((n) => (
    <Col sm={12} lg={6}>
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
    <ResponsiveBody isSticky={isSticky}>
      <Grid>
        <Row>
          <Col><Title>NEWS</Title></Col>
        </Row>
        <Row>{NewsPreviews}</Row>
      </Grid>
    </ResponsiveBody>
  );
};

export default News;
