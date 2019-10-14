//React imports
import React from 'react';

//Local imports
import '../css/footer.css';

//Simple dumb footer component
export const Footer = () => {
  return (
    <footer>
      <p>
        <span>{'\u00A9'}</span>
        {'\u00A0'}
        {'\u00A0'} Joseph Urbina {'\u00A0'}
        {'\u00A0'}2019
      </p>
    </footer>
  );
};
