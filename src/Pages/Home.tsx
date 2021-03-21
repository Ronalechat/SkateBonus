import React from "react";
import styled from 'styled-components';
import HeroFeature from "../Components/HeroFeature/HeroFeature";
import NewsHomeSection from "../Components/News/NewsHomeSection/NewsHomeSection";

type HomeType = {
  isSticky: boolean;
}

const ResponsiveBody = styled.div<{isSticky: boolean;}>`
  ${({isSticky}) => isSticky && `
    padding-top: 110px;
  `}
`;

const Home: React.FC<HomeType> = ({isSticky}) => {
  return (
    <ResponsiveBody isSticky={isSticky}>
      <HeroFeature />
      <NewsHomeSection />
    </ResponsiveBody>
  );
};

export default Home;
