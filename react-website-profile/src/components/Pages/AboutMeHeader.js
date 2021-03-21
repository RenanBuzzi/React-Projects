import React from 'react';
import '../TypeMessage.css';

function DescriptionProfile() {
  return (    
  <div className='description-container'>
    <video src="/videos/SourceCode.mp4" autoPlay loop muted></video>
    <div class="typewriter">
      <h1>a little bit of my personal life...</h1>
    </div>    
  </div>
  );
}

export default DescriptionProfile;
