import React, { useEffect } from 'react';
import '../App.css'; // Import the CSS file

function BackgroundTransition() {
  useEffect(() => {
    // This effect will run once when the component mounts
    // After the page loads, change the background to dark blue
    document.body.style.backgroundColor = 'darkblue';
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>

    </div>
  );
}

export default BackgroundTransition;