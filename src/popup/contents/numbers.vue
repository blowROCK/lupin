<template>
  <div id="filp">
    <div class="filp-container">
      <el-row class="numbers-container" type="flex" justify="center">
        <el-col class="numbers-col" v-for="(num, index) in displaySalary">
          <Number :order="index" :num="num" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Number from "./number";
export default {
  name: "Numbers",
  components: {
    Number
  },
  props: {
    total: Number
  },
  mounted() {
    // console.log('this.total : ', this.total);
  },
  computed: {
    displaySalary() {
      let r = this.numToArr(this.total * 100);
      let t = this.digitCheck(r);
      return t;
    }
  },
  methods: {
    numToArr(num) {
      const numStr = Math.floor(num).toString();
      let tmpArr = [];
      for (let i = 0; i < numStr.length; i++) {
        tmpArr.push(numStr[i]);
      }
      return tmpArr;
    },
    digitCheck(arr) {
      while (arr.length < 9) {
        arr.unshift(0);
      }
      return arr;
    }
  }
};
</script>
<style lang="scss" scoped>
.numbers-col {
  width: auto;
  padding: 0 3px;
  height: 1.6rem;
  overflow-y: hidden;
  position: relative;
  &:nth-last-child(3) {
    padding-right: 10px;
    &:before {
      content: "";
      width: 5px;
      height: 5px;
      background: black;
      border-radius: 9999px;
      position: absolute;
      right: 1px;
      top: calc(1.5rem - 9px);
      z-index: 10;
    }
  }
}
</style>
