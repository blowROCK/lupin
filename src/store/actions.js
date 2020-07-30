import * as types from "./mutation-types";

export const workingPerWeek = ({ commit }, payload) => {
  commit(types.SET_WORKING_PER_WEEK, payload);
};
export const workingPerDay = ({ commit }, payload) => {
  commit(types.SET_WORKING_PER_DAY, payload);
};
export const setMonthlySalary = ({ commit }, payload) => {
  commit(types.SET_MONTHLY_SALARY, payload);
};
export const setStartTime = ({ commit }, payload) => {
  commit(types.SET_START_TIME, payload);
};
export const setClosingTime = ({ commit }, payload) => {
  commit(types.SET_CLOSING_TIME, payload);
};
export const setPayday = ({ commit }, payload) => {
  commit(types.SET_PAYDAY, payload);
};
export const calcMode = ({ commit }, payload) => {
  commit(types.SET_CALC_MODE, payload);
};
export const showSettingModal = ({ commit }, payload) => {
  console.log('dexter : commit payload : ', commit,payload);
  commit(types.SET_SHOW_SETTING_MODAL, payload);
};