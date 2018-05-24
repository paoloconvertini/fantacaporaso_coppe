import { call, put } from "redux-saga/effects";
import { fetchTeamsApi, fetchClassificaEuropeApi } from "../api";
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