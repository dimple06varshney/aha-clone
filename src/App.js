<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
import Imgslider from './components/imgSlider';
import Movies from './components/NewReleases';
import Genre from './components/Genre';

=======
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/login/Login'; 
import Subscribe from './components/Subscribe';
import { DetailsPage } from './components/DetailsPage';
import { requests } from './requests';
>>>>>>> Stashed changes
function App() {
 
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Imgslider />
      <Movies title='New Releases' />
      <Movies  title='Top-10 Movies this week' />
      <Genre title="Action" genre = {28} />
      <Genre title="Comedy" genre = {35} />
      <Genre title="Crime" genre = {80} />
      <Genre title="Drama" genre = {18} />
      <Genre title="Romance" genre = {10749} />
      <Genre title="Thriller" genre = {53} />

=======
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/subscribe' element={<Subscribe/>}></Route>
        <Route path='/details/:id' element={<DetailsPage />}></Route>
      </Routes>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
=======
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/login/Login'; 
import Subscribe from './components/Subscribe';
import Language from './components/Language';
import { DetailsPage } from './components/DetailsPage';
import MoviePage from './components/MoviePage';
function App() {
 
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/subscribe' element={<Subscribe/>}></Route>
        <Route path='/language' element={<Language/>}></Route>
        <Route path='/details/:id' element={<DetailsPage />}></Route>
        <Route path='/movies' element={<MoviePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
>>>>>>> Stashed changes
