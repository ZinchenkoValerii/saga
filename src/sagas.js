import { takeEvery, put, call } from "redux-saga/effects";

import t from "./action-types";

function saveComment(comment) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ ...comment, id: Date.now() });
    }, 2000);
  });
}

function* addCommentSaga({ comment }) {
  yield put({ type: t.ADD_COMMENT });
  const commentWithID = yield call(saveComment, comment);
  yield put({ type: t.ADD_COMMENT_SUCCESS, comment: commentWithID });
}

export default function* rootSaga() {
  yield takeEvery(t.ADD_COMMENT_TRIGGER, addCommentSaga);
}
