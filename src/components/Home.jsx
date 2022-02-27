import Imgslider from './imgSlider';
import Movies from './NewReleases';
import Genre from './Genre';
import Footer from "./footer/Footer"
import Header from './Header';
import "./home.css";
const Home = () =>{
    return (
       <div className='homepage'>
       <Header/>    
      <Imgslider />
      <Movies title='New Releases' />
      <Movies  title='Top-10 Movies this week' />
      <Genre title="Action" genre = {28} />
      <Genre title="Comedy" genre = {35} />
      <Genre title="Crime" genre = {80} />
      <Genre title="Drama" genre = {18} />
      <Genre title="Romance" genre = {10749} />
      <Genre title="Thriller" genre = {53} />
      <Footer/>
       </div>     
    )
}

export default Home