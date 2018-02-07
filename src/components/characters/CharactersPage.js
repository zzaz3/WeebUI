import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as characterActions from '../../actions/characterActions';
import CharactersList from './CharactersList';

class CharactersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { characters } = this.props;

    return (
      <div>
        <h1>Characters</h1>
        <CharactersList characters={characters.results}/>
      </div>
    );
  }
}

CharactersPage.propTypes = {
  characters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    characters: state.characters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(characterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
