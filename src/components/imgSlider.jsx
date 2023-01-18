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
import { useState } from 'react';
import {MdArrowForwardIos} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { DEV_CONFIG } from '../config';
function Imgslider() {
    const navigate = useNavigate()
const {data,lang}  = useSelector((store)=>store)
const dispatch = useDispatch()
const [apidata, setapidata] = useState([])
const baseUrl = 'https://image.tmdb.org/t/p/original';
const apiKey = DEV_CONFIG.API_KEY;
    useEffect(()=>{
        axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_original_language=${lang=="tamil"?"ta":"te"}`
      )
      .then(function (response) {
        setapidata(response.data.results)
        dispatch(addData(response.data.results));
        
      });



    },[])

    

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

      {apidata.map((e, i)=>{
          if(!e.backdrop_path)return
         return  <Wrap key= {i}>
          <img onClick={()=>{
              navigate(`/details/${e.id}`)
          }} src ={`${baseUrl}${e.backdrop_path}`} alt=''/>
      </Wrap>

      })}
{/*       
      <Wrap>
          <img src="https://image-resizer-cloud-api.akamaized.net/image/73315301-F56E-49DB-9DBF-CC03D04CC99F/0-3x1.jpg?width=1440" alt=''/>
      </Wrap>
      <Wrap>
          <img src="https://image-resizer-cloud-api.akamaized.net/image/6F40B3A6-FACD-4D2A-AC86-A123CC569A01/0-3x1.jpg?width=1440" alt=''/>
      </Wrap> */}

  </Carousel>
)
}

export default Imgslider;
const icon = Styled(MdArrowForwardIos)`
    

`
const Carousel = Styled(Slider)`
width:100%;
ul li button {
    &:before{
        font-size:10px;
        color: rgb(150,158,171);
    }
}
.slick-prev{
    left:20px;
    z-index:1;
    height:100px;
    &::before{
        font-size:30px;
    }
}
.slick-dots li{
    margin:0;
}
.slick-next{
    right:30px;
    z-index:1;
    &::before{
        /* content: "\f101"; */
        /* MdArrowForwardIos */
        /* background-color:red; */
        font-size:30px;
        /* height:40px; */
    
    }
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
height:500px;
img{
    // border:4px solid transparent;
    // border-radius:4px;
    width:100%;
    height:100%;
    object-fit:cover;
    // box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
    // rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:300ms;

    &:hover{
        // border:4px solid rgb(249,249,249,0.8)
    }

}

`