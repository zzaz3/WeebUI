import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" >Home</IndexLink>
      {" | "}
      <Link to="/characters" >Characters</Link>
      {" | "}
      <Link to="/anilist" >AniList</Link>
      {" | "}
      <Link to="/about" >About</Link>
    </nav>
  );
};

export default Header;
