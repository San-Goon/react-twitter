import postSaga from "./post";
import userSaga from "./user";
import {all, fork} from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ])
}
