import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../actions';

const FormEdit = props => {
  const [student, setStudent] = useState({
    id: props.item.id,
    firstName: props.item.firstName,
    lastName: props.item.lastName,
    email: props.item.email,
    location: props.item.location,
    hobby: props.item.hobby
  });

  function handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setStudent(student => ({
      ...student,
      [name]: value
    }));
  }

  function updateStudent(event, student) {
    event.preventDefault();
    props.displayForm(true);

    const updatedStudent = { ...student };

    props.onUpdate(updatedStudent);
  }

  return (
    <tr>
      <td>
        <input
          name='firstName'
          defaultValue={props.item.firstName}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          name='lastName'
          defaultValue={props.item.lastName}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          name='email'
          defaultValue={props.item.email}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          name='location'
          defaultValue={props.item.location}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          name='hobby'
          defaultValue={props.item.hobby}
          onChange={handleInputChange}
        />
      </td>
      <td className='action'>
        <button type='submit' onClick={event => updateStudent(event, student)}>
          Update
        </button>
        <button type='submit' onClick={() => props.displayForm(true)}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdate(student) {
      dispatch(updateStudent(student));
    }
  };
}

export default connect(null, mapDispatchToProps)(FormEdit);
