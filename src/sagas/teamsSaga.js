import { call, put } from "redux-saga/effects";
import { fetchClassificaEuropeApi, fetchClassificaCoppaItaliaApi, fetchClassificaChampionsApi, fetchCalendChampionsApi, fetchCalendEuropeApi, fetchCalendCoppaItaliaApi } from "../api";
import * as types from '../types';


export function* fetchClassificaEurope() {
  try {
    const response = yield call(fetchClassificaEuropeApi);
    yield put({type: types.FETCH_CLASS_EUROPE_SUCCESS, response});
  } catch (error) {
    yield put({type: types.FETCH_CLASS_EUROPE_FAILURE, error})
  }
}

export function* fetchClassificaItalia() {
  try {
    const response = yield call(fetchClassificaCoppaItaliaApi);
    yield put({type: types.FETCH_CLASS_ITALIA_SUCCESS, response});
  } catch (error) {
    yield put({type: types.FETCH_CLASS_ITALIA_FAILURE, error})
  }
}

export function* fetchClassificaChampions() {
  try {
    const response = yield call(fetchClassificaChampionsApi);
    yield put({type: types.FETCH_CLASS_CHAMP_SUCCESS, response});
  } catch (error) {
    yield put({type: types.FETCH_CLASS_CHAMP_FAILURE, error})
  }
}

export function* fetchCalendEurope() {
  try {
    const response = yield call(fetchCalendEuropeApi);
    yield put({type: types.FETCH_CALEND_EUROPE_SUCCESS, response});
  } catch (error) {
    yield put({type: types.FETCH_CALEND_EUROPE_FAILURE, error})
  }
}

export function* fetchCalendItalia() {
  try {
    const response = yield call(fetchCalendCoppaItaliaApi);
    yield put({type: types.FETCH_CALEND_ITALIA_SUCCESS, response});
  } catch (error) {
    yield put({type: types.FETCH_CALEND_ITALIA_FAILURE, error})
  }
}

export function* fetchCalendChampions() {
  try {
    const response = yield call(fetchCalendChampionsApi);
    yield put({type: types.FETCH_CALEND_CHAMP_SUCCESS, response});
  } catch (error) {
    yield put({type: types.FETCH_CALEND_CHAMP_FAILURE, error})
  }
}