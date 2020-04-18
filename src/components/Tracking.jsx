import React, { useEffect, useState } from 'react';

import Script from 'react-load-script';

let webgazer;
const Tracking = () => {
  const [webgazerLoaded, setWebgazerLoaded] = useState(false);

  useEffect(() => {
    if (!window.webgazer) return;
    webgazer = window.webgazer;
    webgazer.begin();
  }, [webgazerLoaded]);

  return (
    <>
      <Script url="./webgazer.js" onLoad={() => setWebgazerLoaded(true)} />
      <div>Tracking goes here.</div>
    </>
  );
};

export default Tracking;
