import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import '../css/welcome.css';

export const Welcome = () => {
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
