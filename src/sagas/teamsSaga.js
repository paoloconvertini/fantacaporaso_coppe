import { call, put } from "redux-saga/effects";
import { fetchTeamsApi, fetchClassificaEuropeApi, fetchClassificaCoppaItaliaApi, fetchClassificaChampionsApi } from "../api";
import * as types from '../types';


export function* fetchTeams() {
  try {
    const teams = yield call(fetchTeamsApi);
    yield put({type: types.FETCH_TEAMS_SUCCESS, teams});
  } catch (error) {
    yield put({type: types.FETCH_TEAMS_FAILURE, error})
  }
}

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