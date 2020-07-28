import * as types from './mutation-types'

export default {
  [types.SET_MONTHLY_SALARY] (state, payload) {
    state.monthlySalary = payload;
  },
  [types.SET_YEAR_SALARY] (state, payload) {
    state.yearSalary = payload;
  },
  [types.SET_START_TIME] (state, payload) {
    state.startTime = payload;
  },
  [types.SET_CLOSING_TIME] (state, payload) {
    state.closingTime = payload;
  },
  [types.SET_PAYDAY] (state, payload) {
    state.payday = payload;
  }
}

