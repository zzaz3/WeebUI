import React, { PropTypes } from 'react';
import Header from './common/Header';

class app extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="container-fluid">
        <Header/>
        {children}
      </div>
    );
  }
}

app.propTypes = {
  children: PropTypes.object.isRequired
};

export default app;

