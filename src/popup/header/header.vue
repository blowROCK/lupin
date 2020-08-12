<template>
  <el-row id="header">
    <el-col :span="16" :offset="4">
      <el-radio-group
        v-model="mode"
        @change="changeHandler($event)"
        size="mini"
      >
        <el-radio-button label="하루"></el-radio-button>
        <el-radio-button label="한달"></el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col :span="4">
      <el-button
        @click="openModal"
        class="iconBox"
        size="mini"
        icon="el-icon-setting"
      ></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    changeMode: Function,
    mode: String,
  },
  computed: {
    showSettingModal() {
      return this.$store.getters.showSettingModal;
    },
  },
  methods: {
    changeHandler(e) {
      this.$emit("on-change-mode", e);
    },
    openModal() {
      console.log("dexter - -------------OPEN MODAL-------------");
      this.$store.dispatch("showSettingModal", true);
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  text-align: center;
  margin-bottom: 8px;
  padding: 15px 5px;
  font-size: 1.1rem;
  border-bottom: 1px solid rgb(189, 189, 189);

  .iconBox {
    border: 0;
    font-size: 1rem;
    height: 28px;
    padding: 0 12px;
    line-height: 28px;
  }
}
</style>
