import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/login/Login'; 
function App() {
 
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
