import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import skateBonusLogo from "../../Assets/Images/Main/skatebonus-logo.png";

const AppHeader = styled.header`
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
`;

const UnstyledLink = styled(Link)`
    text-decoration: none;
`

const MenuItemTitle = styled.div`
    font-size: 2rem;
    line-height: 48px;
    font-weight: 900;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 8px;
    font-family: Arial Black;
    &:hover {
        border-color: rgba(0 , 0, 0, 0.2);
    }
`;

const MenuLogo = styled.img`
    height: 100px;
`;

// Header sizing:
//  Header is approx 1/5 for logo 3/5 for text and 1/5 for socials
// No socials in header on mobile

const Header: React.FC = () => {
  return <AppHeader>{HeaderGrid()}</AppHeader>;
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

const HeaderGrid = () => {
  return (
    <Grid>
      <Row>
        <Col lg={3}>
          <UnstyledLink to="/">
            <MenuLogo src={skateBonusLogo} />
          </UnstyledLink>
        </Col>
        <Col lg={6}>
          <MenuItemWrapper>
            <MenuItem name="News" url="/news" />
            <MenuItem name="Stories" url="/stories" />
            <MenuItem name="Watch" url="/watch" />
            <MenuItem name="Shop" url="/shop"  />
          </MenuItemWrapper>
        </Col>
        <Col lg={3}>
          <div className="socials">Socials</div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header;
