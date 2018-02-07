import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CharactersListRow = ({ character }) => {
  return (
    <tr>
      <td>{character.name}</td>
      <td>{character.height}</td>
      <td>{character.mass}</td>
      <td>{character.hair_color}</td>
      <td>{character.skin_color}</td>
      <td>{character.eye_color}</td>
      <td>{character.birth_year}</td>
      <td>{character.gender}</td>
    </tr>
  );
};

CharactersListRow.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharactersListRow;
