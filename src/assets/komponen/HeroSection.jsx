import React from 'react';

function HeroSection(props) {
  const { desc1, desc2 } = props;
  return (
    <div className="kontainerall">
      <div className="Teks1">
        <h1>Thinkara</h1>
        <p>
          {desc1}
        </p>
      </div>
      <div className="Teks2">
        <p>
          {desc2}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
