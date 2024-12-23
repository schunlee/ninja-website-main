// pages/games/english.js
import React from 'react';

const JapanesePage = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://games.narutostorm.com"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Naruto Storm - Japanese"
      />
    </div>
  );
};

export default JapanesePage;