import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DEV_CONFIG } from "../config";
function NewReleases(props) {
  const navigate = useNavigate()
  const {lang} = useSelector((store)=>store)
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
  };

  const [data, setdata] = useState([]);
const apiKey = DEV_CONFIG.API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_original_language=${lang=="tamil"?"ta":"te"}&page=${Math.floor(
          Math.random() * 10
        )}`
      )
      .then(function (response) {
       
        setdata(response.data.results);
        
      });
  }, []);

  return (
    <Container>
      <h3>{props.title}</h3>
      <Carousel {...settings}>
        {data.map((e,i) => {
          return (
            <div key={i}>
               <img onClick={()=>{
              navigate(`/details/${e.id}`)
          }}
            className="img-card"
              src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
              alt="poster"
            />

            </div>
           
          );
        })}
      </Carousel>
    </Container>
  );
}

export default NewReleases;
const Container = styled.div`
  margin: 30px;

  h3 {
    color: white;
    margin: 10px;
  }
`;
const Wrap = styled.div`

  gap:10px;
  /* box-sizing: border-box; */

  
`;
const Carousel = styled(Slider)`

height: 100%;
margin-left: 2%;
/* display: flex; */
  .slick-list {
    overflow: visible;
  }
  img {
    width:95%;
  height: 240px;
  transition: 0.3s;
  border-radius :5% ;
  &:hover{
    transform: translate(0, -15px);
  }
  }
  .slick-next{
    right:10px;
    &::before{
        font-size:30px;
    }
  }
  .slick-prev{
    left:-30px;
    z-index:1;
    &::before{
        font-size:30px;
    }
  
  }
    .slick-disabled{
     
      &::before{
        display:none;
        cursor: none;
      }
    }
   
`;
