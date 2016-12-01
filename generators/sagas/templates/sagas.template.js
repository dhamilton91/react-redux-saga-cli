import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';


function* DEFAULT(action) {
	try {
		yield put({type: 'DEFAULT_FETCH_REQUESTED'});
		const DEFAULT = yield call(FUNCTION_NAME, action);
		yield put({type: 'DEFAULT_FETCH_SUCCESS', DEFAULT});
	} catch (e) {
		yield put({type: 'DEFAULT_FETCH_FAILED', message: e.message});
	}
}

export default function*() {
	yield takeLatest('DEFAULT_FETCH', DEFAULT);
};
