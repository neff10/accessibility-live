import React from 'react';
import './css/App.css';
import cardImage from './diala.jpg'



function App() {
  return (
    <div className="App">
      <div className="cardItem">
        <div className="card">
          <img src={cardImage} alt="img" className='screen' />
          <div className="cardDetails">
            <div className='text'>
              <h2><b>Dial-a-ride</b></h2>
              <p><h3>Description</h3></p>
            </div>
            <div className='readMore'>
              <p>Read more...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
