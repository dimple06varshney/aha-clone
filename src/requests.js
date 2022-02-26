import { useParams } from "react-router-dom";

const API_KEY = "2de712a36830216e53d2563ead7b1d80";
const MOVIE_ID = "299536";

export const requests = {
  fetchDetailsPage: `/movie/${MOVIE_ID}?api_key=${API_KEY}`,
};


// /movie/690957?api_key=2de712a36830216e53d2563ead7b1d80