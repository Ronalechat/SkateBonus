import React from 'react';
import styled from 'styled-components'

const FeatureImage = styled.span<{ image: string }>`
  background-color: red;
  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
  height: calc(100vh - 100px);
  width: 100%;
  
  transition: all .34s ease-in-out; 
  /* Media query for width change to 100vw if mobile  */
`;

const HeroFeatureContainer = styled.div`
  display: flex;
  margin-top: 103px;
  height: calc(100vh - 100px);
  background-color: red;
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

type HeroFeatureCardProps = {
  image: string;
  hrefURL: string;
  altText: string;
};

const HeroFeatureCardsData = [
  {
    image:
      "https://video-images.vice.com/_uncategorized/1550236179235-palace-streetwear-david-sims-23.jpeg",
    hrefURL: "https://www.palaceskateboards.com/",
    altText: "palace streetwear helmet on fire",
  },
  {
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F08%2Fpalace-skateboards-fall-2020-collection-lookbook-042.jpg?q=75&w=800&cbr=1&fit=max",
    hrefURL: "https://www.youtube.com/watch?v=hiemJlT_ixA",
    altText: "Dude in a leather Jacket",
  },
  {
    image:
      "https://www.insidethegames.biz/media/image/142257/o/1s8t7Oh8OZcQLkjm",
    hrefURL: "https://www.youtube.com/watch?v=hiemJlT_ixA",
    altText: "Russian skaters",
  },
];

const HeroFeatureCard: React.FC<HeroFeatureCardProps> = ({
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
    <HeroFeatureCard key={h.altText} image={h.image} hrefURL={h.hrefURL} altText={h.altText} />
  ));

  return <HeroFeatureContainer>{heroCards}</HeroFeatureContainer>;
};

export default HeroFeature;