import React from "react";
import styled from "styled-components";
import { HeroFeatureCardsData } from "../../MockData/HeroFeatureData";

const FeatureImage = styled.span<{ image: string }>`
  background-color: grey;
  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
  height: calc(100vh - 100px);
  width: 100%;

  transition: all 0.34s ease-in-out;
  /* Media query for width change to 100vw if mobile  */
`;

const HeroFeatureContainer = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  background-color: red;
  flex-direction: row;
  @media only screen and (min-width: 0em) and (max-width: 48em) {
    flex-direction: column;
  }
`;

const FeatureImageWrapper = styled.span`
  flex-grow: 1;
  height: calc(100vh - 100px);
  width: 100%;
  overflow: hidden;

  ${FeatureImage} {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export type HeroFeatureCardType = {
  image: string;
  hrefURL: string;
  altText: string;
};

const HeroFeatureCard: React.FC<HeroFeatureCardType> = ({
  image,
  hrefURL,
  altText,
}) => {
  return (
    <FeatureImageWrapper>
      <a href={hrefURL}>
        <FeatureImage role="img" image={image} aria-label={altText} />
      </a>
    </FeatureImageWrapper>
  );
};

const HeroFeature: React.FC = () => {
  const heroCards = HeroFeatureCardsData.map((h) => (
    <HeroFeatureCard
      key={h.altText}
      image={h.image}
      hrefURL={h.hrefURL}
      altText={h.altText}
    />
  ));

  return <HeroFeatureContainer>{heroCards}</HeroFeatureContainer>;
};

export default HeroFeature;
