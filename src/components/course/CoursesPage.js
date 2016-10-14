import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ''}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <tr key={index}>{course.title}</tr>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <div className="well">
          <div className="form-inline">
            <div className="form-group">
              <label for="title">Add Course: </label>
              <input id="title" className="form-control" type="text" onChange={this.onTitleChange} value={this.state.course.title} />
            </div>
            <button onClick={this.onClickSave} className="btn btn-primary">Add</button>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr><th>Title</th></tr>
          </thead>
          <tbody>
            {this.props.courses.map(this.courseRow)}
          </tbody>
        </table>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // state.courses = rootReducers -> prop
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
