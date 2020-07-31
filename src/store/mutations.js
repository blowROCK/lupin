import * as types from './mutation-types'

export default {
  [types.SET_MONTHLY_SALARY] (state, payload) {
    state.monthlySalary = payload;
  },
  [types.SET_START_TIME] (state, payload) {
    state.startTime = payload;
  },
  [types.SET_CLOSING_TIME] (state, payload) {
    state.closingTime = payload;
  },
  [types.SET_PAYDAY] (state, payload) {
    state.payday = payload;
  },
  [types.SET_CALC_MODE] (state, payload) {
    state.calcMode = payload;
  },
  [types.SET_WORKING_PER_WEEK] (state, payload) {
    state.workingPerWeek = payload;
  },
  [types.SET_WORKING_PER_DAY] (state, payload) {
    state.workingPerDay = payload;
  },
  [types.SET_SHOW_SETTING_MODAL] (state, payload) {
    state.showSettingModal = payload;
  }
}

