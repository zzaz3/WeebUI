import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AniActions from '../../actions/aniActions';
import AniList from './AniList';

class AniListPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <h1>AniList</h1>
        <AniList list={list}/>
      </div>
    );
  }
}

AniListPage.propTypes = {
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    list: state.anilist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AniActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AniListPage);
