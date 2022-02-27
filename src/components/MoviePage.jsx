import React from "react";
import Imgslider from "./imgSlider";
import Genre from "./Genre";
import Header from "./Header";
function MoviePage() {
  return (
    <div>
      <Header />
      <Imgslider />
      <Genre title="Action" genre={28} />
      <Genre title="Comedy" genre={35} />
      <Genre title="Crime" genre={80} />
      <Genre title="Drama" genre={18} />
      <Genre title="Romance" genre={10749} />
      <Genre title="Thriller" genre={53} />
    </div>
  );
}

export default MoviePage;
