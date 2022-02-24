import logo from './logo.svg';
import './App.css';
import Imgslider from './components/imgSlider';
import Movies from './components/NewReleases';
import Genre from './components/Genre';

function App() {
  return (
    <div className="App">
      <Imgslider />
      <Movies title='New Releases' />
      <Movies  title='Top-10 Movies this week' />
      <Genre title="Action" genre = {28} />
      <Genre title="Comedy" genre = {35} />
      <Genre title="Crime" genre = {80} />
      <Genre title="Drama" genre = {18} />
      <Genre title="Romance" genre = {10749} />
      <Genre title="Thriller" genre = {53} />

    </div>
  );
}

export default App;
