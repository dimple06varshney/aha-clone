const API_KEY = "2de712a36830216e53d2563ead7b1d80";
const MOVIE_ID = "299536";

// import {Toggle} from "./components/Toggle"
console.log()

export function language ( { lang } )
{
  console.log(lang)   
};

export const requests = {
  fetchNewReleases: `/movie/now_playing?api_key=${API_KEY}&with_original_language=te`,
  fetchTop10: `/movie/popular?api_key=${API_KEY}&with_original_language=te`,
  fetchAhaOrignals: `/discover/tv?api_key=${API_KEY}&with_original_language=te`,
  fetchHandpicked: `/discover/movie?api_key=${API_KEY}&with_original_language=te&page=${Math.floor(
    Math.random() * 100
  )}`,
  fetchMostWatched: `/discover/movie?api_key=${API_KEY}&with_original_language=te&page=${Math.floor(
    Math.random() * 100
  )}`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&with_original_language=te`,
  fetchNewlyAddedLiabrary: `/discover/movie?api_key=${API_KEY}&with_original_language=te&page=${Math.floor(
    Math.random() * 100
  )}`,
  fetchFree: `/discover/movie?api_key=${API_KEY}&with_original_language=te&page=${Math.floor(
    Math.random() * 100
  )}`,
  fetchReccomended: `/movie/top_rated?api_key=${API_KEY}&with_original_language=te`,
  fetchThriller: `/movie/popular?api_key=${API_KEY}&with_original_language=te&with_genres=53`,
  fetchAhaKIds: `/movie/popular?api_key=${API_KEY}&with_genres=16`,
  fetchAction: `/movie/popular?api_key=${API_KEY}&with_original_language=te&with_genres=28`,
  fetchDrama: `/movie/popular?api_key=${API_KEY}&with_original_language=te&with_genres=18`,
  fetchCrime: `/movie/popular?api_key=${API_KEY}&with_original_language=te&with_genres=80`,
  fetchRommance: `/movie/popular?api_key=${API_KEY}&with_original_language=te&with_genres=10749`,

  fetchDetailsPage: `/movie/${MOVIE_ID}?api_key=${API_KEY}`,
};


// /movie/690957?api_key=2de712a36830216e53d2563ead7b1d80