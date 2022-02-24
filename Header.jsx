import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Navbar>
      <Logo src="https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png" />
      <NavMenu>
        <a>
          <span>Home</span>
        </a>
        <a>
          <span>Movies</span>
        </a>
        <a>
          <span>Shows</span>
        </a>
        <a>
          <span>Kids</span>
        </a>
        <a>
          <span>My aha</span>
        </a>
      </NavMenu>
      <NavTools>
        <SearchBox>
          <input type="text" placeholder="Search Title Movie or Cast" />

          <a href="#">
            <SearchImage src="https://www.aha.video/search-icon.704c679b82e10dd8379c.svg" />
          </a>
        </SearchBox>

        <LanguageImage src="https://www.aha.video/language-icon.ef88ebcc6b1bcda97fc4.svg" />
        <SubscribeButton>Subscribe Now</SubscribeButton>
        <UserImage src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" />
        <SignIn>Sign In</SignIn>
      </NavTools>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.nav`
  height: 70px;
  background: #1d1e20;
  display: flex;
  align-items: center;
  padding: 0px 32px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 60px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 50px;
  align-items: center;
  color: #bcbcbd;
  font-weight: 500;
  gap: 12px;

  a {
    display: flex;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
  }
  span {
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;

const NavTools = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
  color: white;
  gap: 28px;
`;

const SearchImage = styled.img`
  cursor: pointer;
`;
const LanguageImage = styled.img`
  cursor: pointer;
  width: 22px;
`;
const SubscribeButton = styled.button`
  padding: 5px 23px;
  background: linear-gradient(0deg, #b61a09 -86.4%, #ff6d2e);
  min-width: 143px;
  min-height: 40px;
  border-radius: 20px;
  font-style: normal;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  color: white;
  cursor: pointer;
`;
const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid black;
  background: #37474f;
`;
const SignIn = styled.span`
  font-size: 14px;
  margin-right: 15px;
  margin-left: -15px;
  letter-spacing: 1;
  cursor: pointer;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover > input {
    width: 290px; 
    padding: 10px;
  }

  input {
    width: 0px;
    padding: 0px;
    border-radius: 12px;
    border: none;
    outline: none;
    transition: all 0.2s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3d3d3f;
    color: #fff;
  }

  input:focus {
    outline: none;
  }

  a,
  a:hover {
    text-decoration: none;
    position: absolute;
    right: 1rem;
    display: grid;
    place-items: center;
  }
`;
