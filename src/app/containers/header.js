import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Header from '../components/header/Header';
import { togglePlugBtn } from '../store/actions';

class HeaderContainer extends React.Component {
  render() {
    const { location, togglePlugBtn } = this.props;
    return (
      <Header location={location} togglePlugBtn={togglePlugBtn} />
    );
  }
}

const mapDispatchToProps = {
  togglePlugBtn,
};

export default withRouter(connect(null, mapDispatchToProps)(HeaderContainer));