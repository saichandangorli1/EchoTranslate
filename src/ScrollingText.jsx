import React from 'react';
import './index.css'; // Make sure to import the CSS file where you've added the styles

const ScrollingText = () => {
  return (
    <div className="overflow-hidden bg-gray-800">
      <p className="scrolling-text text-white text-sm">
        Note: We're currently in a trial phase, gathering valuable feedback to enhance your experience. Stay tuned for the launch of our complete version soon........
      </p>
      {/* <p className="scrolling-text1 text-white text-sm">
         designed to make your communication seamless across languages.
      </p> */}
    </div>
  );
};

export default ScrollingText;
