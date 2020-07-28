import * as types from './mutation-types';

export  const setMonthlySalary = ({commit}, payload) => {
  commit(types.SET_MONTHLY_SALARY, payload)
}
export  const setYearSalary = ({commit}, payload) => {
  commit(types.SET_YEAR_SALARY, payload)
}
export  const setStartTime = ({commit}, payload) => {
  commit(types.SET_START_TIME, payload)
}
export  const setClosingTime = ({commit}, payload) => {
  commit(types.SET_CLOSING_TIME, payload)
}
export  const setPayday = ({commit}, payload) => {
  commit(types.SET_PAYDAY, payload)
}