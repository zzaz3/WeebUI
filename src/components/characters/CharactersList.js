import React, { PropTypes } from 'react';
import CharactersListRow from './CharactersListRow';

const CharactersList = ({characters}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
          <th>Eye Color</th>
          <th>Birth Year</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(character =>
          <CharactersListRow key={character.name} character={character} />
        )}
      </tbody>
    </table>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharactersList;
