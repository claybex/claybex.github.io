import React, { useState } from 'react';
import videoBG from '../assets/videoBG.mp4'

const Button = ({ isMuted, handleClick }) => {
  return (
    <a href="#" className={`speaker ${isMuted ? 'mute' : ''}`} onClick={handleClick}>
      <span></span>
    </a>
  );
};

const Main = () => {

  const [isMuted, setIsMuted] = useState(true);

  const handleClick = () => {
    setIsMuted(!isMuted);
  };

    return (
      <div className="main">  
        <video src={videoBG} autoPlay loop muted={isMuted} />
        <div className="pageOverlay">
        <div className="content">
        <div className="lightbox">	
		    <div className="titles animate"></div> 
          <h1>Claybex</h1>
          <h2>in code we trust</h2>
          </div>
          </div>
          <div className="media animate">
            <a href="https://www.youtube.com/claybex" target="_blank">
              <i className="fa fa-youtube-play"></i>
            </a>
            <a href="https://steamcommunity.com/id/claybex" target="_blank">
              <i className="fa fa-steam-square"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" id="instagram">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i className="fa fa-twitter"></i>            
            </a>    
          </div>
          <Button isMuted={isMuted} handleClick={handleClick} />
        </div>
        </div>
      
    );
  };

export default Main;