import React from "react";
import HeroFeature from "../Components/HeroFeature/HeroFeature";
import NewsHomeSection from "../Components/News/NewsHomeSection/NewsHomeSection";
import {NewsCard} from '../Components/News/NewsCard/NewsCard';

const Home: React.FC = () => {
  return (
    <div>
      <HeroFeature />
      <NewsHomeSection />
    </div>
  );
};

export default Home;
