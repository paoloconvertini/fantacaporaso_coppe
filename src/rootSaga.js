import { takeLatest } from "redux-saga/effects";
import { FETCH_CLASS_EUROPE_REQUEST, FETCH_CLASS_CHAMP_REQUEST, FETCH_CLASS_ITALIA_REQUEST, FETCH_CALEND_CHAMP_REQUEST, FETCH_CALEND_EUROPE_REQUEST, FETCH_CALEND_ITALIA_REQUEST } from "./types";
import { fetchClassificaEurope, fetchClassificaChampions, fetchClassificaItalia, fetchCalendEurope, fetchCalendChampions, fetchCalendItalia } from "./sagas/teamsSaga";

export default function* rootSaga() {
  yield takeLatest(FETCH_CLASS_EUROPE_REQUEST, fetchClassificaEurope);
  yield takeLatest(FETCH_CLASS_CHAMP_REQUEST, fetchClassificaChampions);
  yield takeLatest(FETCH_CLASS_ITALIA_REQUEST, fetchClassificaItalia);
  yield takeLatest(FETCH_CALEND_EUROPE_REQUEST, fetchCalendEurope);
  yield takeLatest(FETCH_CALEND_CHAMP_REQUEST, fetchCalendChampions);
  yield takeLatest(FETCH_CALEND_ITALIA_REQUEST, fetchCalendItalia);
}