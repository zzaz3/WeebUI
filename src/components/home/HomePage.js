import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome Home</h1>
        <p>You've finally made it home.</p>
        <Link to="about" className="btn btn=primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
