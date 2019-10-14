//React imports
import React from 'react';

//Local imports
import { Header } from './Header';
import { Footer } from './Footer';

//Dumb component to show 404 error
export const NotFound = () => {
  return (
    <>
      <Header />
      <section>
        <h1>404 Error</h1>
        <h2>The page requested was not found</h2>
      </section>
      <Footer />
    </>
  );
};
