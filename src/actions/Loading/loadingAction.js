import types from '../types';

export function showLoading() {
  return {
    type: types.SHOW_LOADING
  };
}

export function hideLoading() {
  return {
    type: types.HIDE_LOADING
  };
}
