<template>
  <div id="Lupin">
    <Header :mode="calcMode" @on-change-mode="onChangeMode" />
    <el-row>
      <Numbers v-bind:total="totalMoney" />
    </el-row>
    <Modal v-if="showSettingModal"/>
  </div>
</template>

<script>
import Header from "./header/header";
import Numbers from "./contents/numbers";
import Modal from "./modal/modal";

export default {
  name: "App",
  components: {
    Header,
    Numbers,
    Modal
  },
  data() {
    return {
      currDate: new Date(),
      timer: null,
      showModal: false
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
      return this.$store.getters.workingPerWeek;
    },
    workingPerDay() {
      return this.$store.getters.workingPerDay;
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
    showSettingModal() {
      return this.$store.getters.showSettingModal;
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
            m:  this.currDate.getDate() < this.payday
                ? this.currDate.getMonth() -1
                : this.currDate.getMonth(),
            d: this.payday
          })
        );
        console.log('dexter : workingDays : ', workingDays);
        const workingSecond = workingDays * 9 * 60 * 60;
        return (this.workedSecond + workingSecond) * this.secondSalary;
      }
    }
  },
  mounted() {
    console.log('dexter --------------APP mounted-------------');
    this.startTimer();
  },
  methods: {
    getBusinessDatesCount(date1, date2) {
      let count = 0;
      let startDate = (date1 < date2) ? date1 : date2;
      const endDate = (date1 > date2) ? date1 : date2;
      while (startDate <= endDate) {
        const dayOfWeek = startDate.getDay();
        if (!(dayOfWeek === 6 || dayOfWeek === 0)) count++;
        startDate.setDate(startDate.getDate() + 1);
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
    },
    // onOpenModal(){
    //   this.showModal = true;
    // },
    // onCloseModal(){
    //   this.showModal = false;
    // }
  }
};
</script>
<style lang="scss">
@import "../assets/reset";

#Lupin {
  width: 250px;
  height: 400px;
}
</style>
