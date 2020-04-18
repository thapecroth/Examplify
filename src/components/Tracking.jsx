import React, { useEffect, useState } from 'react';

import Script from 'react-load-script';
import Webgazer from '../webgazer/webgazer';

let webgazer;
const Tracking = () => {
  const [webgazerLoaded, setWebgazerLoaded] = useState(false);
  const [webgazerStatus, setWebgazerStatus] = useState(false);

  useEffect(() => {
    if (!window.webgazer) return;
    webgazer = Webgazer(window.webgazer);
  }, [webgazerLoaded]);

  useEffect(() => {
    if (!window.webgazer) return;
    webgazer.handleStatusChange(webgazerStatus);
  }, [webgazerStatus]);

  return (
    <>
      <Script url="./webgazer.js" onLoad={() => setWebgazerLoaded(true)} />
      <div
        style={{
          width: '100px',
          margin: '0 auto',
          border: '1px solid black',
          textAlign: 'center',
        }}
        onClick={() => setWebgazerStatus((prev) => !prev)}
      >
        Start/End
      </div>
    </>
  );
};

export default Tracking;
