import Vue from "vue";
import Vuex from "vuex";

import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SECOND_OF_HOUR: 3600,
    WORKING_PER_WEEK: 5,
    WORKING_PER_DAY: 9,

    monthlySalary: 2000000,
    startTime: 10,
    closingTime: 19,
    payday: 20
  },
  getters,
  mutations,
  actions
});
