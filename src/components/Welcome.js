//React imports
import React, { useEffect } from 'react';

//Local imports
import { Header } from './Header';
import { Footer } from './Footer';
import '../css/welcome.css';

export const Welcome = () => {
  //Initialize title and get any blogs that may be in LocalStorage
  useEffect(() => {
    document.title = 'Welcome';
  }, []);

  return (
    <>
      <Header />
      <section className="welcome">
        <h1>Welcome to your Blogs</h1>
      </section>
      <Footer />
    </>
  );
};
