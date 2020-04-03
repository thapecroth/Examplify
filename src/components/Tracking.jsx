import React, { useEffect } from 'react';

const Tracking = () => {
  useEffect(() => {
    console.log(webgazer);
  }, []);
  return <div>Tracking goes here.</div>;
};

export default Tracking;
