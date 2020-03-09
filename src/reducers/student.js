import types from '../actions/types';

const innitialState = {
  students: [],
  display: true
};

function studentReducer(state = innitialState, action) {
  switch (action.type) {
    case types.DISPLAY_FORM_SUCCESS:
      return { ...state, display: !state.display };
    case types.ADD_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.concat(action.payload.student)
      };
    case types.DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.filter(
          student => student.id !== action.payload.id
        )
      };
    case types.UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map(stu =>
          action.payload.id === stu.id ? action.payload.student : stu
        )
      };
    case types.FETCH_STUDENTS_SUCCESS:
      return { ...state, students: action.payload.students };

    default:
      return state;
  }
}

export default studentReducer;
