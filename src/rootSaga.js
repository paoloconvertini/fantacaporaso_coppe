import { takeLatest } from "redux-saga/effects";
import { FETCH_TEAMS_REQUEST, FETCH_CLASS_EUROPE_REQUEST, FETCH_CLASS_CHAMP_REQUEST, FETCH_CLASS_ITALIA_REQUEST } from "./types";
import { fetchTeams, fetchClassificaEurope, fetchClassificaChampions, fetchClassificaItalia } from "./sagas/teamsSaga";

export default function* rootSaga() {
  yield takeLatest(FETCH_CLASS_EUROPE_REQUEST, fetchClassificaEurope);
  yield takeLatest(FETCH_CLASS_CHAMP_REQUEST, fetchClassificaChampions);
  yield takeLatest(FETCH_CLASS_ITALIA_REQUEST, fetchClassificaItalia);
  yield takeLatest(FETCH_TEAMS_REQUEST, fetchTeams);
}