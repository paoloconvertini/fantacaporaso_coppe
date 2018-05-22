import { takeLatest } from "redux-saga/effects";
import { FETCH_TEAMS_REQUEST } from "./types";
import { fetchData } from "./sagas/teamsSaga";

export default function* rootSaga() {
  yield takeLatest(FETCH_TEAMS_REQUEST, fetchData);
}