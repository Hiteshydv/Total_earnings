// src/pages/Loader.js (updated)
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);
          history.push('/result'); // Redirect to the result page when loading is complete
          return prevProgress;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [history]);

  return (
    <div>
      <h2>Loading...</h2>
      <p>{`${progress}% Complete`}</p>
      {/* You can customize the loader UI based on your design */}
    </div>
  );
};

export default Loader;
