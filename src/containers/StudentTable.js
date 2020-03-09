import React, { useState } from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import HeaderTable from '../component/HeaderTable';
import RowTable from '../component/RowTable';
import FormEdit from './FormEdit';
import { deleteStudent, addStudent, displayFormAdd } from '../actions';
import Button from '@material-ui/core/Button';

const StudentTable = props => {
  const [student, setStudent] = useState({
    id: '',
    First: '',
    Last: '',
    Email: '',
    Location: '',
    Hobby: ''
  });

  function editStudent(students, id) {
    props.displayForm(false);
    setStudent(student => ({
      ...student,
      id: students[id].id,
      First: students[id].First,
      Last: students[id].Last,
      Email: students[id].Email,
      Location: students[id].Location,
      Hobby: students[id].Hobby
    }));
  }

  return (
    <React.Fragment>
      <table>
        <HeaderTable />
        <tbody>
          {props.students.map((item, index) =>
            student.id === item.id && props.display === false ? (
              <FormEdit
                key={v4()}
                item={item}
                updateStudent={props.updateStudent}
                displayForm={props.displayForm}
                students={props.students}
              />
            ) : (
              <RowTable
                key={v4()}
                item={item}
                students={props.students}
                onDelete={props.Delete}
                edit={editStudent}
                index={index}
              />
            )
          )}
        </tbody>
      </table>
      <Button
        variant='contained'
        color='primary'
        onClick={props.displayFormAdd}
      >
        Add Student
      </Button>
    </React.Fragment>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addStudent(student) {
      dispatch(addStudent(student));
    },
    Delete(id) {
      dispatch(deleteStudent(id));
    },
    displayFormAdd: value => {
      dispatch(displayFormAdd(value));
    }
  };
}

export default connect(null, mapDispatchToProps)(StudentTable);
