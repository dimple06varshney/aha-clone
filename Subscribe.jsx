import React from "react";
import styled from "styled-components";
import "./Subscribe.css";
import { BsArrowLeft } from "react-icons/bs";

function Subscribe() {
  return (
    <Container>
      <FirstInner>
        <ChoosePlan>
        <BsArrowLeft 
            style={{ width: "45px", height: "30px", color: "white" }}
          />
          <h1>Choose a Plan</h1>
        </ChoosePlan>
        <TwoCards>
          <FirstCard>
            <Offer>50% Savings</Offer>
            <Description>
              <div>Telugu Annual Plan</div>
              <p>
                Unlimited 12 months Ad free access to 100% telugu Movies and Web
                Series
              </p>
            </Description>
            <HorizontalLine></HorizontalLine>

            <Price>
              <h4>
                INR 399/ <span>year</span>
              </h4>
              <button>Subsribe</button>
            </Price>
          </FirstCard>
          <SecondCard>
            <Dummy></Dummy>
            <Description>
              <div>Telugu Quarterly Plan</div>
              <p>
                Unlimited 3 months Ad free access to 100% telugu Movies and Web
                Series
              </p>
            </Description>
            <HorizontalLine></HorizontalLine>

            <Price>
              <h4>
                INR 199/ <span>3 months</span>
              </h4>
              <button>Subsribe</button>
            </Price>
          </SecondCard>
        </TwoCards>
      </FirstInner>

      <Logos>
        <img
          className="fire"
          src="https://www.aha.video/fire-tv.6a7c5bd4edc482ab6fdb.png"
          alt=""
        />
        <img
          className="apple"
          src="	https://www.aha.video/apple-tv.0cc514784d60b0aeab30.png"
          alt=""
        />
        <img
          className="android"
          src="	https://www.aha.video/android-tv.53c5fa7c25f3187d5380.png"
          alt=""
        />
        <img
          className="roku"
          src="	https://www.aha.video/roku.2ce26111eea2042904d8.png"
          alt=""
        />
        <img
          className="mi"
          src="https://www.aha.video/mi.49cd83b5c30b9fbd0ced.png"
          alt=""
        />
        <img
          className="smart"
          src="	https://www.aha.video/smart-tv.f21cc3782238fcc400a8.png"
          alt=""
        />
      </Logos>
    </Container>
  );
}

export default Subscribe;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`;
const FirstInner = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
`;

const ChoosePlan = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 10px;

  img {
    width: 25px;
  }

  h1 {
    font-size: 32px;
    letter-spacing: 1.42px;
    color: white;
  }
`;

const TwoCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FirstCard = styled.div`
  width: 36%;
  height: 250px;
  border-radius: 18px;
  background: #393e44;
`;

const Offer = styled.div`
  background: #67c567da;
  font-family: proximaNova;
  width: 100px;
  color: white;
  padding: 10px;
  padding-left: 13px;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;
const Description = styled.div`
  width: 80%;
  color: white;
  margin: 30px 20px 0 30px;

  div {
    font-size: 20px;
    font-family: proximaNova;
    font-weight: 600;
  }

  p {
    font-family: proximaNova;
    font-weight: 600;
    font-size: 10px;
    line-height: 20px;
  }
`;

const HorizontalLine = styled.hr`
  margin-top: 20px;
  width: 92%;
  border: 1.30498px dashed hsla(0, 0%, 100%, 0.17);
  z-index: 2;
`;
const Price = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h4 {
    color: white;
    font-size: 20px;
    font-weight: normal;

    span {
      font-size: 15px;
      font-weight: normal;
    }
  }

  button {
    font-family: proximaNova;
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
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

const SecondCard = styled(FirstCard)``;

const Dummy = styled.div`
  width: 100px;
  padding: 19px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  margin-top: 40px;
`;
