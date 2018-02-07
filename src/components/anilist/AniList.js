import React, { PropTypes } from 'react';
import AniListRow from './AniListRow';
import { Button, Card, Image } from 'semantic-ui-react'

const AniList = ({list}) => {
  return (
    <Card.Group>
        {list.map(item =>
          <AniListRow key={item.id} item={item} />
        )}
    </ Card.Group>
  );
};

AniList.propTypes = {
  list: PropTypes.array.isRequired
};

export default AniList;
