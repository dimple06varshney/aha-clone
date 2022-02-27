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
