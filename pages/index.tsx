import React from 'react';

import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@components/Home'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
