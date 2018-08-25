import React from 'react';
import {connect} from 'react-redux'
import CourseListing from './CourseListing';


class Courses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    const {courseData} = this.props;

    return (
      <div>
        <div className="d-flex flex-column">
          {courseData.map(info => <CourseListing {...info} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  courseData: Object.values(state.courses)
})

export default connect(mapStateToProps)(Courses);
