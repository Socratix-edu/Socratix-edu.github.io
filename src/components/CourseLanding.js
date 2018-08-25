import React from 'react'
import {connect} from 'react-redux'

const CourseLanding = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params;

  return {
    ...state.projects[id]
  };
};

export default connect(mapStateToProps)(CourseLanding);
