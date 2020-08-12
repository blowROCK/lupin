<template>
  <div id="modal">
    <el-row class="modal--header">
      <el-col class="modal--header--title" :span="16" :offset="4"><p>설정</p></el-col>
      <el-col :span="4">
        <el-button @click="closeModal" size="mini" class="iconBox" icon="el-icon-close"></el-button>
      </el-col>
    </el-row>
    <el-form class="modal--form" ref="form" :rules="rules" :model="form" label-width="65px">
      <el-form-item label="월급날" prop="monthlyPay">
        <el-input v-model="form.monthlyPay"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">저장</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      form: {
        monthlyPay: null,
        payday: null,
        startTime: null,
        closingTime: null,

        workingPerWeek: null,
        workingPerDay: null
      },
      rules: {
        monthlyPay: [{
          required: true, message: 'Please input phone', trigger: 'blur'
        }]
      }
    };
  },

  // 월급 입력
  // 월급날 1~30 사이
  // 업무 시작 시간, 업무 종료 시간 포멧 30분 단위
  // 하루 업무 시간
  // 한주 업무 일

  methods: {
    onSubmit() {
      console.log("submit!");
    },
    closeModal(){
      this.$store.dispatch("showSettingModal", false);
    }
  },
};
</script>
<style lang="scss" scoped>
#modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: white;
  .modal--header{
    text-align: center;
    margin-bottom: 8px;
    padding: 15px 5px;
    font-size: 1.1rem;
    border-bottom: 1px solid rgb(189, 189, 189);
    .modal--header--title{
      line-height: 28px;
    }
  }
  .modal--form{
    .el-form-item{
      padding: 15px;
    }
  }
}
.iconBox {
  border: 0;
  font-size: 1rem;
  height: 28px;
  padding: 0 12px;
  line-height: 28px;
}
</style>
