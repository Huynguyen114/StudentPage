import { takeEvery, take, call, put, fork } from 'redux-saga/effects';
import { fetchStudentSuccess } from '../actions/FetchStudents/fetchStudent';
import {
  addStudentSuccess,
  addStudentFailed,
  deleteStudentSuccess,
  deleteStudentFailed,
  updateStudentSuccess,
  updateStudentFailed,
  getStudent,
  postMethod,
  deleteMethod,
  updateMethod,
  displayFormAddSucces
} from '../actions';
import { hideLoading, showLoading } from '../actions/Loading/loadingAction';
import types from '../actions/types';

function* watchFetchListStudentAction() {
  yield take(types.FETCH_STUDENT);
  try {
    yield put(showLoading());
    const res = yield call(getStudent);
    yield put(fetchStudentSuccess(res.data));
  } catch (error) {
    alert(error);
  }
  yield put(hideLoading());
}

function* addStudentSaga({ payload }) {
  const { student } = payload;
  try {
    yield put(showLoading());
    const res = yield call(postMethod, student);
    yield put(addStudentSuccess(res.data));
  } catch (error) {
    yield put(addStudentFailed(error));
  }
  yield put(hideLoading());
}

function* deleteStudentSaga({ payload }) {
  const { id } = payload;
  try {
    yield put(showLoading());
    const res = yield call(deleteMethod, id);
    yield put(deleteStudentSuccess(res.data.id));
  } catch (error) {
    yield put(deleteStudentFailed(error));
  }
  yield put(hideLoading());
}

function* updateStudentSaga(payload) {
  const { id, student } = payload.payload;
  try {
    yield put(showLoading());
    const res = yield call(updateMethod, id, student);
    yield put(updateStudentSuccess(res.data));
  } catch (error) {
    yield put(updateStudentFailed(error));
  }
  yield put(hideLoading());
}

function* displayFormAddSaga() {
  try {
    yield put(showLoading());
    yield put(displayFormAddSucces());
  } catch (error) {
    alert(error);
  }
  yield put(hideLoading());
}
function* rootSaga() {
  yield fork(watchFetchListStudentAction);
  yield takeEvery(types.ADD_STUDENT, addStudentSaga);
  yield takeEvery(types.DELETE_STUDENT, deleteStudentSaga);
  yield takeEvery(types.UPDATE_STUDENT, updateStudentSaga);
  yield takeEvery(types.DISPLAY_FORM, displayFormAddSaga);
}

export default rootSaga;
