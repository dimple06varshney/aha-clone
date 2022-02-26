import React, { useEffect, useState } from "react";
import { instance } from "../axios";
import styled from "styled-components";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// import check from "../assets/check.png";
import WebFont from "webfontloader";
import { SECTION } from "./Details_styles";
import { useParams } from "react-router-dom";
// https://api.themoviedb.org/3/movie/690957?api_key=2de712a36830216e53d2563ead7b1d80&append_to_response=videos
// console.log(check);

const baseUrl = "https://image.tmdb.org/t/p/original";

export function DetailsPage() {
  const params = useParams()
  console.log("params",params)
  const [details, setDetails] = useState([]);
  const [ trailerUrl, setTrailerUrl ] = useState( "" );
  const [ display, setDisplay ] = useState( true );

  useEffect(() => {
    async function fetchData() {

      const request = await instance.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=2de712a36830216e53d2563ead7b1d80&append_to_response=videos`);
      // console.log(request)
      setDetails(request.data);

      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat"],
      },
    });
  }, []);

  // ---------------YOUTUBE FRAME-------------------
  const opts = {
    height: "1000",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(details.title || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };



  // -------------CONDITIONAL DISPLAY----------------

  function handleDisplay ()
  {
    setDisplay( false );
  }

  console.log(display)

  // -----------RETRIVE YEAR FROM DATE-----------------
  const d = new Date(details.release_date);
  let year = d.getFullYear();

  // -------------CONVERT MINUTES TO HOURS+MINUTES--------------

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hr " + rminutes + " min";
  }

  const runtime = timeConvert(`${details.runtime}`);
  console.log(details);
  return (
    <SECTION>
      <div className="details_main">
        <div className="details_main_container">
          <div className="details_main_image-container">
            <div className="gradient"></div>
            <img src={`${baseUrl}${details.backdrop_path}`} />
          </div>
          <div className="details_main_content-container">
            <div className="gradient"></div>
            <div className="details_main_content-container_details">
              <div className="tags_container">
                <div className="tag_premium">
                  <div
                    className="check"
                    // style={{ backgroundImage: `url(${check})` }}
                  ></div>
                  Premium
                </div>
                <div className="tag_rating">U/A</div>
                <div className="tag_rating">13+</div>
              </div>
              <h1 className="title">{details.title}</h1>
              <div className="general">
                {year} • {runtime} • Drama
                <p className="extra_genre">Action • Emotional</p>
              </div>
              <div className="description">{details.overview}</div>
              <div className="actions">
                <div className="wrapper">
                  <div className="top_button_container">
                    <button
                      className="play_trailer"
                      onClick={() => handleClick()}
                    >
                      Play Trailer
                    </button>
                    <button className="subscribe_now">Subscribe Now</button>
                  </div>
                  <div className="bottom_button_container">
                    <button className="share_button">
                      <div>
                        <p className="icon_name">Share</p>
                        <img
                          src="https://img.icons8.com/material-outlined/24/000000/share.png"
                          className="icon"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="details_content">
        <div className="details_content_tabmenu">
          <div className="tabmenu">
            <div id="wrapper">
              <div className="tabs">
                <div
                  className="tab_section"
                  style={{ justify_content: "flex-start" }}
                >
                  <input
                    hidden
                    type="radio"
                    id="tab1"
                    onClick={() => setDisplay(true)}
                  />
                  <label
                    for="tab1"
                    className="tab_control"
                    style={{
                      borderBottomColor: display ? "#ff6d2e" : "#7E7D8E",
                    }}
                  >
                    Cast
                  </label>
                  <input
                    hidden
                    type="radio"
                    id="tab2"
                    onClick={() => setDisplay(false)}
                  />
                  <label
                    for="tab2"
                    className="tab_control"
                    style={{
                      borderBottomColor: display ? "#7E7D8E" : "#ff6d2e",
                    }}
                  >
                    Details
                  </label>
                </div>
                <div className="tab_content">
                  <div
                    className="tab_pannel1"
                    style={{ display: display ? "block" : "none" }}
                  >
                    <div class="container">
                      <div className="cast_container">
                        <div classNmae="cast_image">
                          <img
                            loading="lazy"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFDUDtFLBXK2riMYlo4jAMy60NqmH4vQ1Kg&usqp=CAU"
                          ></img>
                        </div>
                        <div className="cast_title">Yash</div>
                      </div>
                      <div className="cast_container">
                        <div classNmae="cast_image">
                          <img
                            loading="lazy"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sHuehWkevphIVXKHmPs7Qw4fW7Zq_9iWAA&usqp=CAU"
                          ></img>
                        </div>
                        <div className="cast_title">Pooja Hegde</div>
                      </div>
                      <div className="cast_container">
                        <div classNmae="cast_image">
                          <img
                            loading="lazy"
                            src="data:image/jpeg;base64,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"
                          ></img>
                        </div>
                        <div className="cast_title">Brahmanandam</div>
                      </div>
                      <div className="cast_container">
                        <div classNmae="cast_image">
                          <img
                            loading="lazy"
                            src="data:image/jpeg;base64,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"
                          ></img>
                        </div>
                        <div className="cast_title">Prakash Raj</div>
                      </div>
                      <div className="cast_container">
                        <div classNmae="cast_image">
                          <img
                            loading="lazy"
                            src="data:image/jpeg;base64,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"
                          ></img>
                        </div>
                        <div className="cast_title">Vennela Kishore</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab_pannel2"
                    style={{ display: display ? "none" : "block" }}
                  >
                    <div className="details">
                      <div className="details_column">
                        <div className="details_column_title">Director</div>
                      </div>
                      <div className="details_column">
                        <div className="details_column_name">S.S Rajamouli</div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="details_column">
                        <div className="details_column_title">Studio</div>
                      </div>
                      <div className="details_column">
                        <div className="details_column_name">
                          Sri Venkateswara Cinemas, Northstar Entertainment
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details_content_carousels"></div>
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </SECTION>
  );
}
