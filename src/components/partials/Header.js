import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand">React</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li activeClassName="active"><IndexLink to="/">Home</IndexLink></li>
            <li activeClassName="active"><Link to="/about">About</Link></li>
            <li activeClassName="active"><Link to="/courses">Courses</Link></li>
          </ul>
        </div>
        {loading && <LoadingDots interval={100} dots={20} />}
      </div>
    </nav>
  );
};

export default Header;
