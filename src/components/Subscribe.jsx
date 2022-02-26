import React from "react";
import styled from "styled-components";
import "./Subscribe.css";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "./Header";

function Subscribe() {
  
  //loadscript for razorpay
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  
  //display razorpay
  async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const result = await axios.post("http://localhost:5000/payment/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_w2Db3IVWnj9nLm", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Dimple Varshney",
        description: "Subscribe aha!",
        image: <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none" className="ng-star-inserted"><path d="M8.37377 1.70711C8.7643 1.31658 8.7643 0.683418 8.37377 0.292893C7.98325 -0.0976311 7.35008 -0.0976311 6.95956 0.292893L0.292893 6.95956C-0.097631 7.35009 -0.097631 7.98325 0.292893 8.37377L6.95956 15.0404C7.35008 15.431 7.98325 15.431 8.37377 15.0404C8.7643 14.6499 8.7643 14.0168 8.37377 13.6262L2.41421 7.66667L8.37377 1.70711Z" fill="#ECECEC"></path></svg>,
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:5000/payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Dimple Varshney",
            email: "aha.video@10.com",
            contact: "9999999999",
        },
        notes: {
            address: "aha Corporate",
        },
        theme: {
            color: " #ff6d2e",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
  //end displayrazorpay
  return (
    
    <Container>
      <Header/>
      <FirstInner>
        <ChoosePlan>
       <Link to="/"> <BsArrowLeft 
            style={{ width: "45px", height: "30px", color: "white" }}
          /></Link>
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
              <button onClick={displayRazorpay}>Subsribe</button>
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
  background-image: url(https://www.aha.video/backgroundcheck.975c41117a3dd7355f3b.svg);
  margin: 0;
  background-size: 100vw;
`;
const FirstInner = styled.div`
  width: 90%;
  height: 100%;
  padding-top: 5%;
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
  width: 32%;
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
