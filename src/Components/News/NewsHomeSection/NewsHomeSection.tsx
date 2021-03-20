import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { NewsCardType, NewsCard } from "../NewsCard/NewsCard";

// type NewsHomeSectionType = {
//   newsStoryPreviews: NewsCardType[]
// }

const newsStoryPreviews: NewsCardType[] = [
  {
    title: "The Miracle Of Skateboard.",
    tags: ["skateboarding", "trends"],
    bodyPreview: "Aenean ultrices lorem quam, sit amet finibus ex mollis in.",
    imageURL:
      "https://www.exploratorium.edu/skateboarding/images/alt/olllieHump_seq.png",
  },
  {
    title: "7 Ways Skateboard Can Improve Your Business.",
    tags: ["skateboarding", "business"],
    bodyPreview: "Nam lectus erat, finibus vitae condimentum sed.",
    imageURL: "https://miro.medium.com/max/742/0*VvwXfqz1qR2LG5Hx.",
  },
  {
    title: "5 Outrageous Ideas For Your Skateboard.",
    tags: ["fashion", "aesthetics"],
    bodyPreview: "Ut diam libero, ",
    imageURL:
      "https://www.meldmagazine.com.au/wp-content/uploads/2016/01/feature-skateboard-fashion.jpg",
  },
  {
    title: "You Will Never Believe These Bizarre Truths Behind Skateboard.",
    tags: ["bizzarre facts", "skateboarding"],
    bodyPreview: "Nunc malesuada volutpat pulvinar. ",
    imageURL:
      "http://skatenewswire.com/wp-content/uploads/2018/07/MARC-JOHNSON-BOARD-BRAND.jpg",
  },
  {
    title: "What It's Like Dating a Skateboarder.",
    tags: ["skateboarding", "dating"],
    bodyPreview:
      "We talk to Arty Longford, skateboard photographer for over three decades. ",
    imageURL:
      "https://www.toptrendsguide.com/wp-content/uploads/2020/09/Skater-Style.jpg",
  },
  {
    title:
      "What's So Trendy About Skateboard That Everyone Went Crazy Over It?",
    tags: ["trends", "fashion", "skateboarding"],
    bodyPreview: "Bacon ipsum dolor amet spare ribs",
    imageURL:
      "https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2thdGVib2FyZCUyMHRyaWNrfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    title: "Prosciutto rump strip steak shoulder buffalo beef ribs.",
    tags: ["bacon", "news"],
    bodyPreview: "Chuck ribeye jowl tongue t-bone",
    imageURL: "https://en.wikipedia.org/wiki/Bacon#/media/File:Made20bacon.png",
  },
];

const Title = styled.h2`
  
`;

const NewsHomeSection: React.FC = () => {
  const filteredNewsStories = newsStoryPreviews.slice(0, 6);
  console.log(filteredNewsStories);
  const displayedStories = filteredNewsStories.map((n) => (
    <Col sm={12} lg={6}>
      <NewsCard
        key={n.title}
        title={n.title}
        tags={n.tags}
        bodyPreview={n.bodyPreview}
        imageURL={n.imageURL}
      />
    </Col>
  ));

  return (
    <Grid>
      <Row>
        <Col><Title>Latest News</Title></Col>
      </Row>
      <Row>{displayedStories}</Row>
    </Grid>
  );
};

export default NewsHomeSection;
