import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Book Saver</h1>
        <p className="lead">Search for books and save the ones you like, don't worry they'll be here when you come back!</p>
        <hr className="my-2" />
        <p>Search a book already!</p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;