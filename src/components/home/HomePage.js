import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home Page</h1>
        <p>React, redux</p>
        <Link to="about" className="btn btn-primary">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
