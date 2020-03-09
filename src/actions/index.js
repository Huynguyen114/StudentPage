import axios from 'axios';
import types from './types';

export const getStudent = () => {
  return axios.get('http://5e1bd634db8a52001414c6b1.mockapi.io/api/students');
};

export const postMethod = data => {
  return axios.post(
    'http://5e1bd634db8a52001414c6b1.mockapi.io/api/students',
    data
  );
};

export const deleteMethod = id => {
  return axios.delete(
    `http://5e1bd634db8a52001414c6b1.mockapi.io/api/students/${id}`
  );
};

export const updateMethod = (id, student) => {
  return axios.put(
    `http://5e1bd634db8a52001414c6b1.mockapi.io/api/students/${id}`,
    student
  );
};

export function addStudent(student) {
  return {
    type: types.ADD_STUDENT,
    payload: {
      student
    }
  };
}

export function addStudentSuccess(data) {
  return {
    type: types.ADD_STUDENT_SUCCESS,
    payload: {
      student: data
    }
  };
}

export function addStudentFailed(err) {
  return {
    type: types.ADD_STUDENT_FAIL,
    payload: {
      error: err
    }
  };
}

export function deleteStudent(id) {
  return {
    type: types.DELETE_STUDENT,
    payload: {
      id
    }
  };
}

export function deleteStudentSuccess(id) {
  return {
    type: types.DELETE_STUDENT_SUCCESS,
    payload: {
      id
    }
  };
}
export function deleteStudentFailed(err) {
  return {
    type: types.DELETE_STUDENT_FAIL,
    payload: {
      error: err
    }
  };
}

export function updateStudent(student) {
  return {
    type: types.UPDATE_STUDENT,
    payload: {
      id: student.id,
      student
    }
  };
}

export function updateStudentSuccess(student) {
  return {
    type: types.UPDATE_STUDENT_SUCCESS,
    payload: {
      student
    }
  };
}

export function updateStudentFailed(err) {
  return {
    type: types.UPDATE_STUDENT_FAIL,
    payload: {
      error: err
    }
  };
}

export function displayFormAdd() {
  return {
    type: types.DISPLAY_FORM
  };
}
export function displayFormAddSucces() {
  return {
    type: types.DISPLAY_FORM_SUCCESS
  };
}
