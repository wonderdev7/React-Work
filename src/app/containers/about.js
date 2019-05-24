/* eslint-disable consistent-return */
import React from 'react';
import { connect } from 'react-redux';

import About from '../components/about/About';

class AboutContainer extends React.Component {

  render() {
    const { profile } = this.props;
    return (
      <About profile={profile} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, null)(AboutContainer);