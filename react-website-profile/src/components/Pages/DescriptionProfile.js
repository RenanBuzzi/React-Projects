import React from 'react';
import '../Pages/DescriptionProfile.css';

function DescriptionProfile() {
  return (    
  <div className='description-container'>
    <video src="/videos/SourceCode.mp4" autoPlay loop muted></video>
    <div class="typewriter">
      <h1>Renan Gaspar Buzzi</h1>
    </div>
  </div>
  );
}

export default DescriptionProfile;
