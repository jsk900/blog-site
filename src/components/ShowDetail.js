//React imports
import React, { useEffect } from 'react';

//Local imports
import { Header } from './Header';
import { Footer } from './Footer';
import '../css/showDetail.css';

export const ShowDetail = props => {
  //Destructuring props. As these props are coming via a link they will be located inside location.state
  const { userName, title, content, today } = props.location.state;

  useEffect(() => {
    document.title = 'Show Blog';
  }, []);

  //This little bit of code handles our back button
  const handleBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <Header />
      <section className="show-blog-container">
        <div className="card">
          <p className="blog-p">User</p>
          <p className="blog-p"> {userName}</p>

          <p className="blog-p">Title</p>
          <p className="blog-p"> {title}</p>

          <p className="blog-p">Creation Date</p>
          <p className="blog-p"> {today}</p>

          <p className="blog-p">Blog</p>
          <p className="blog-p"> {content}</p>
          <button className="back-btn" onClick={handleBack}>
            Back
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};
