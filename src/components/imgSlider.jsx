//rfce//
import React from 'react';
import Styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/Action';
function Imgslider() {
const {data,lang}  = useSelector((store)=>store)
const dispatch = useDispatch()


    useEffect(()=>{
        axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=024bccde6bb621415ae4cb4cddc07d56&with_original_language=te`
      )
      .then(function (response) {
          console.log("starts")
        console.log(response.data.results)
        dispatch(addData(response.data.results));
        
      });



    },[])

    console.log("data",data)

    

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };



  return (
  <Carousel {...settings}>
      <Wrap>
          <img src="https://image-resizer-cloud-api.akamaized.net/image/A123AD13-3C0D-4CBF-8965-A9190E074E35/0-3x1.jpg?width=1440"/>
      </Wrap>
      <Wrap>
          <img src="https://image-resizer-cloud-api.akamaized.net/image/73315301-F56E-49DB-9DBF-CC03D04CC99F/0-3x1.jpg?width=1440"/>
      </Wrap>
      <Wrap>
          <img src="https://image-resizer-cloud-api.akamaized.net/image/6F40B3A6-FACD-4D2A-AC86-A123CC569A01/0-3x1.jpg?width=1440"/>
      </Wrap>

  </Carousel>
)
}

export default Imgslider;

const Carousel = Styled(Slider)`
margin-top:20px;
width:100%;
ul li button {
    &:before{
        font-size:10px;
        color: rgb(150,158,171);
    }
}
.slick-prev{
    left:0;
    z-index:1;
    height:100px;
}
.slick-next{
    right:0;
    z-index:1;
}
li.slick-active button::before{

color:white;
}

// .slick-list{
//     overflow:visible;
// }
button{

    // color:green;
    height:100px;
}


`
const Wrap = Styled.div`

img{
    // border:4px solid transparent;
    // border-radius:4px;
    width:100%;
    height:100%;
    // box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
    // rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:300ms;

    &:hover{
        // border:4px solid rgb(249,249,249,0.8)
    }

}

`