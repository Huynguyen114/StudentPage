import React, { Component } from 'react';
import StudentTable from './StudentTable';
import FormAddStudent from './FormAddStudent';
import { fetchStudents } from '../actions/FetchStudents/fetchStudent';
import { connect } from 'react-redux';
import Loading from './Loading/Loading';

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.displayForm = this.displayForm.bind(this);
  }

  displayForm(value) {
    this.setState({ display: value });
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.students);
  }

  render() {
    const { students } = this.props;
    const jsx = (
      <React.Fragment>
        <h1>Student Table</h1>
        <StudentTable
          students={students}
          displayForm={this.displayForm}
          display={this.state.display}
        />
        <Loading />
      </React.Fragment>
    );
    if (this.props.display === true) {
      return jsx;
    }
    return <FormAddStudent />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStudent: students => {
      dispatch(fetchStudents(students));
    }
  };
}

function mapStateToProps(state) {
  return {
    students: state.students.students,
    display: state.students.display
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
