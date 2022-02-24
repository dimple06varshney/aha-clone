import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function NewReleases(props) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
  };

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=024bccde6bb621415ae4cb4cddc07d56&with_original_language=te&page=${Math.floor(
          Math.random() * 10
        )}`
      )
      .then(function (response) {
        // console.log(response.data.results)
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
               <img
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
  .slick-prev{
    left:-30px;
    z-index:1;
  
  }
    .slick-disabled{
     
      &::before{
        display:none;
        cursor: none;
      }
    }
   
`;
