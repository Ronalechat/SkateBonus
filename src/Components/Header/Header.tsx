import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import skateBonusLogo from "../../Assets/Images/Main/skatebonus-logo.png";

const AppHeader = styled.header<{ isSticky: boolean }>`
  background-color: #fff;
  width: 100%;
  top: 0;
  z-index: 20;
  padding-top: 31px;

  ${({ isSticky }) =>
    isSticky &&
    `
    padding-top: 0px;
    position: fixed;
    top: 0;
    left: 0;
  `}
`;

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  max-height: 100px;
  width: 55vw;
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuItemTitle = styled.div`
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 900;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  border: 1px solid #000;
  border-radius: 50%;
  padding: 8px;
  font-family: Arial Black;
  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }
`;

const LogoFlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuLogo = styled.div<{ logo: string }>`
  height: 80px;
  width: 87px;
  background-image: url("${({ logo }) => logo}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
`;

// Header sizing:
//  Header is approx 1/5 for logo 3/5 for text and 1/5 for socials
// No socials in header on mobile

type StickyHeaderType = {
  isSticky: boolean;
}

const Header: React.FC<StickyHeaderType> = ({isSticky}) => {
  
  return <AppHeader isSticky={isSticky}>{HeaderGrid()}</AppHeader>;
};

type MenuItemType = {
  name: string;
  url?: string;
};

const MenuItem: React.FC<MenuItemType> = ({ name, url }) => {
  return (
    <UnstyledLink to={url ? url : "#"}>
      <MenuItemTitle>{name}</MenuItemTitle>
    </UnstyledLink>
  );
};

const FlexContainer = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderGrid = () => {
  return (
    <FlexContainer>
      <LogoFlexContainer>
        <UnstyledLink to="/">
          <MenuLogo logo={skateBonusLogo} />
        </UnstyledLink>
      </LogoFlexContainer>
      <MenuItemWrapper>
        <MenuItem name="News" url="/news" />
        <MenuItem name="Stories" url="/stories" />
        <MenuItem name="Watch" url="/watch" />
        <MenuItem name="Shop" url="/shop" />
      </MenuItemWrapper>
      <div className="socials">Socials</div>
    </FlexContainer>
  );
};

export default Header;
