<template>
  <div id="Lupin">
    <Header :mode="mode" @on-change-mode="onChangeMode" />
    <el-row>
      <Numbers v-bind:total="totalMoney" />
    </el-row>
  </div>
</template>

<script>
import Header from "./header/header";
import Numbers from "./contents/numbers";
import { SECOND_OF_HOUR } from "../store/getters";

export default {
  name: "App",
  components: {
    Header,
    Numbers
  },
  data() {
    return {
      currDate: null,
      currSeconds: 0,
      startDate: null,
      closingDate: null,
      timer: null,
      mode: "하루"
    };
  },
  computed: {
    monthlySalary() {
      return this.$store.getters.monthlySalary;
    },
    startTime() {
      return this.$store.getters.startTime;
    },
    closingTime() {
      return this.$store.getters.closingTime;
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
    totalMoney() {
      return this.currSeconds * this.secondSalary;
    }
  },
  created() {
    console.log('? : --------------?-------------');
    this.currDate = new Date();
    this.startDate = this.getDate(this.startTime);
    this.closingDate = this.getDate(this.closingTime);
    this.currSeconds = (this.currDate - this.startDate) / 1000;
    console.log('this.currSeconds : ', this.currSeconds);
  },
  mounted() {
    console.log('1 : --------------1??-------------');
    this.startTimer();
  },
  methods: {
    updateCurrSeconds(){
      if(this.mode === '하루'){
        return (this.currDate - this.startDate) / 1000;
      }else if(this.mode === '한달'){
        const monthlySec =
        return (this.currDate - this.startDate) / 1000;
      }
    },
    getDate(hours) {
      return new Date(
        this.currDate.getFullYear(),
        this.currDate.getMonth(),
        this.currDate.getDate(),
        hours
      );
    },
    startTimer() {
      this.timer = setInterval(() => (this.currSeconds += 1.5), 1500);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    onChangeMode(mode) {
      this.mode = mode;
      console.log("mode : ", this.mode);
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
