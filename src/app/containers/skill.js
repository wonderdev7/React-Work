import React from 'react';
import { connect } from 'react-redux';

import Skills from '../components/skills/Skills';

class SkillContainer extends React.Component {
  render() {
    const { percents } = this.props;
    return (
      <Skills percents={percents}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    percents: state.skill.percent,
  };
};

export default connect(mapStateToProps, null)(SkillContainer);