import Vue from "vue";
import Vuex from "vuex";

import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SECOND_OF_HOUR: 3600,

    workingPerWeek: 5,
    workingPerDay: 9,

    calcMode: '하루',
    monthlySalary: 2000000,
    startTime: 8,
    closingTime: 19,
    payday: 30,
    showSettingModal: false
  },
  getters,
  mutations,
  actions
});