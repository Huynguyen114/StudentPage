import types from '../actions/types';

const innitialState = { stateLoading: true };

function loadingReducer(state = innitialState, action) {
  switch (action.type) {
    case types.SHOW_LOADING:
      return { ...state, stateLoading: true };
    case types.HIDE_LOADING:
      return { ...state, stateLoading: false };
    default:
      return state;
  }
}

export default loadingReducer;
