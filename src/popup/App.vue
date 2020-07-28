<template>
  <div id="Lupin">
    <Header :mode="calcMode" @on-change-mode="onChangeMode" />
    <el-row>
      <Numbers v-bind:total="totalMoney" />
    </el-row>
  </div>
</template>

<script>
import Header from "./header/header";
import Numbers from "./contents/numbers";

export default {
  name: "App",
  components: {
    Header,
    Numbers
  },
  data() {
    return {
      currDate: new Date(),
      timer: null
    };
  },
  computed: {
    startTime() {
      return this.$store.getters.startTime;
    },
    closingTime() {
      return this.$store.getters.closingTime;
    },
    startDate() {
      return this.getDateData({ h: this.startTime });
    },
    closingDate() {
      return this.getDateData({ h: this.closingTime });
    },
    calcMode() {
      return this.$store.getters.calcMode;
    },
    monthlySalary() {
      return this.$store.getters.monthlySalary;
    },
    payday() {
      return this.$store.getters.payday;
    },
    secondOfHour() {
      return this.$store.getters.SECOND_OF_HOUR;
    },
    workingPerWeek() {
      return this.$store.getters.WORKING_PER_WEEK;
    },
    workingPerDay() {
      return this.$store.getters.WORKING_PER_DAY;
    },
    secondSalary() {
      return (
        this.monthlySalary /
        this.workingPerWeek /
        this.workingPerDay /
        (365 / 7 / 12) /
        this.secondOfHour
      );
    },
    workedSecond() {
      return Math.max((this.currDate - this.startDate) / 1000, 0);
    },
    totalMoney() {
      if (this.calcMode === "하루") {
        return this.workedSecond * this.secondSalary;
      } else if (this.calcMode === "한달") {
        const workingDays = this.getBusinessDatesCount(
          this.currDate,
          this.getDateData({
            m:
              this.payday > this.currDate.getDate()
                ? this.currDate.getMonth()
                : this.currDate.getMonth() + 1,
            d: this.payday
          })
        );
        const workingSecond = workingDays * 9 * 60 * 60;
        return (this.workedSecond + workingSecond) * this.secondSalary;
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    getBusinessDatesCount(startDate, endDate) {
      let count = 0;
      let curDate = startDate;
      while (curDate <= endDate) {
        const dayOfWeek = curDate.getDay();
        if (!(dayOfWeek === 6 || dayOfWeek === 0)) count++;
        curDate.setDate(curDate.getDate() + 1);
      }
      return count;
    },
    getDateData({
      y = this.currDate.getFullYear(),
      m = this.currDate.getMonth(),
      d = this.currDate.getDate(),
      h = 0
    }) {
      return new Date(y, m, d, h);
    },
    startTimer() {
      this.timer = setInterval(() => (this.currDate = new Date()), 1500);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    onChangeMode(mode) {
      this.$store.dispatch("calcMode", mode);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/reset";

#Lupin {
  width: 250px;
  height: 400px;
  padding: 5px;
  box-sizing: border-box;
}
</style>
