import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/login/Login'; 
import Subscribe from './components/Subscribe';
import Language from './components/Language';
function App() {
 
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/subscribe' element={<Subscribe/>}></Route>
        <Route path='/language' element={<Language/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
