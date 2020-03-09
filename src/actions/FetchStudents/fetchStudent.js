import types from '../types';

export const fetchStudents = students => ({
  type: types.FETCH_STUDENT,
  students
});

export const fetchStudentSuccess = data => {
  return {
    type: types.FETCH_STUDENTS_SUCCESS,
    payload: {
      students: data
    }
  };
};

export const fetchStudentFailed = err => {
  return {
    type: types.FETCH_STUDENTS_FAILED,
    payload: {
      error: err
    }
  };
};
