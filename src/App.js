
import './App.css';
import image from './goals.jpeg'
import imageTwo from './brainjpg.jpeg'
import { GoalsForWeek } from './GoalsForWeek';

function App() {
  return (
    <div className="App">
      <div >
      <img src={image} width="200px" alt='img'/>
      </div>
      <div className="container">
      <h1>Goals for the week</h1>
      </div>
      <GoalsForWeek/>
      <div className="img">
      <img src={imageTwo} width="200px" alt='img2'/>
      </div>
    </div>
  );
}

export default App;
