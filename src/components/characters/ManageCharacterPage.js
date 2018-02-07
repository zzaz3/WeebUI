import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CharacterActions from '../../actions/characterActions';

class ManageCharacterPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Manage Character Page</h1>
    );
  }
}

ManageCharacterPage.propTypes = {
  //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CharacterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCharacterPage);
