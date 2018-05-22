import { call, put } from "redux-saga/effects";
import { fetchTeams } from "../api";
import * as types from '../types';


export function* fetchData(action) {
  try {
    const teams = yield call(fetchTeams, action);
    yield put({type: types.FETCH_TEAMS_SUCCESS, teams});
  } catch (error) {
    yield put({type: types.FETCH_TEAMS_FAILURE, error})

  }
}