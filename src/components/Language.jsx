import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addLang } from "../redux/Action";
import Header from "./Header";

function Language() {
  const [text,settext] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const changeColor = () => {
    settext("telgu")
    document.getElementById("content").style.background =
      "linear-gradient(180deg, #b61a09 -86.4%, #ff6d2e)";

    document.getElementById("content2").style.background =
      "linear-gradient(180deg, #3b4046 9.38%, #2d3037)";

    document.getElementById("language").innerText = "తెలుగు";
  };

  const changeBackColor = () => {
    settext("tamil")
    document.getElementById("content2").style.background =
      "linear-gradient(180deg, #b61a09 -86.4%, #ff6d2e)";
    document.getElementById("content").style.background =
      "linear-gradient(180deg, #3b4046 9.38%, #2d3037)";
    document.getElementById("language").innerText = "தமிழ்";
  };

  const backChange = () => {
    document.getElementById("english").style.background =
      "linear-gradient(131.81deg,rgba(78,67,63,0) 3.92%,rgba(255,110,69,.5) 111.82%)";

    document.getElementById("english").style.color = "white";
    document.getElementById("language").style.background = "none";
  };

  const changeBack = () => {
    document.getElementById("language").style.background =
      "linear-gradient(131.81deg,rgba(78,67,63,0) 3.92%,rgba(255,110,69,.5) 111.82%)";
    document.getElementById("english").style.background = "none";

    document.getElementById("language").style.color = "white";
  };
  return (
    <div>
    <Header/>
    <Container>
      <Innerdiv>
        <h3 className="watch-option">
          Watch <span>100%</span>Content in
        </h3>
        <div  id="content" onClick={changeColor}>
          <img
            src="https://www.aha.video/language-select-icon.702d6cd3acaad06004aa.svg"
            alt=""
          />
          <img
            className="aha-logo"
            src="	https://www.aha.video/telugu-title.0ee2adae74546dbf8a55.svg"
            alt=""
          />
          <h3>Telugu</h3>

          <img
            className="hero-pic"
            src="https://image-resizer-cloud-cdn.api.aha.firstlight.ai/image/static-asset/lang-sel-screen-cast-te.png?width=145"
            alt=""
          />
        </div>
        <div id="content2" onClick={changeBackColor}>
          <img
            src="	https://www.aha.video/language-unselect-icon.e9bc827802e3a880fef2.svg"
            alt=""
          />
          <img
            className="aha-logo"
            src="	https://www.aha.video/tamil-title.88c8c4bf42775608fa7f.png"
            alt=""
          />
          <h3>Tamil</h3>

          <img
            className="hero-pic"
            src="https://image-resizer-cloud-cdn.api.aha.firstlight.ai/image/static-asset/lang-sel-screen-cast-ta.png?width=145"
            alt=""
          />
        </div>
      </Innerdiv>
      <SecondDiv>
        <h3 className="language-selection">Choose Display Language English</h3>

        <ul>
          <li id="english" onClick={backChange}>
            English
          </li>
          <li id="language" onClick={changeBack}>
            తెలుగు
          </li>
        </ul>

        <button onClick={()=>{
          dispatch(addLang(text))
          navigate('/')
        }}>Proceed</button>
      </SecondDiv>
    </Container>
    </div>
  );
}

export default Language;

const Container = styled.div`
  width: 80%;
  border: 1px solid #35393f;
  margin: auto;
  height: 420px;
  display: flex;
  background: #1a1d1e;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-radius: 12px;
  box-sizing: border-box;
  margin-top: 10%;
`;

const Innerdiv = styled.div`
  width: 45%;
  height: 300px;
  margin: 40px 0px 0px 80px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .watch-option {
    color: white;
    font-size: 18px;
    font-style: normal;
    font-family: proximaNova;
    margin-left: 10px;

    span {
      color: #db6d3e;
      padding: 3px;
    }
  }

  div {
    width: 98%;
    margin: auto;
    height: 105px;
    background: linear-gradient(180deg, #3b4046 9.38%, #2d3037);
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);

    img {
      width: 22px;
      margin-left: 10px;
    }

    .aha-logo {
      width: 50px;
    }
    h3 {
      flex: 1;
      color: white;
      font-size: 18px;
    }

    .hero-pic {
      width: 110px;
      height: 100%;
      border-bottom-right-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;

const SecondDiv = styled.div`
  width: 29%;
  /* border: 1px solid red; */
  height: 300px;
  margin: 50px 0px 0px 80px;

  .language-selection {
    color: white;
    font-size: 18px;
    font-style: normal;
    font-family: proximaNova;
    /* margin-left: 10px;  */
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;
    height: 45px;
    width: 100%;
    background: linear-gradient(180deg, #3b4046 9.38%, #2d3037);
    box-shadow: 0 4px 4px transparent;
    border-radius: 30px;
    margin-bottom: 37px;
    padding: 0;
    cursor: pointer;

    li {
      height: 45px;
      width: 100%;
      border-radius: 30px;
      line-height: 45px;
      list-style-type: none;
      font-family: proximaNova;
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      text-align: center;
      color: #707378;
      padding: 0px 20px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: var(--save-button-align-self, none);
    margin: var(--save-button-margin, 0 0 0 0);
    height: 48px;
    width: var(--save-button-width, 100%);
    background: linear-gradient(180deg, #b61a09 -86.4%, #ff6d2e);
    border-radius: 24px;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 18px;
    font-style: normal;
    font-family: proximaNova;
  }
`;
