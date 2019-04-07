import React from 'react';

import Header from '../components/header';
import Body from '../components/body';

function MainPage() {
  return (
    <div className="root" style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Body />
    </div>
  );
}

export default MainPage;
