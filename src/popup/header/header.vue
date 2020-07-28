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
      <el-button class="gearBox" size="mini" icon="el-icon-setting"></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    changeMode: Function,
    mode: String
  },
  methods: {
    changeHandler(e) {
      this.$emit("on-change-mode", e);
    }
  }
};
</script>
<style lang="scss" scoped>
#header {
  margin-bottom: 5px;
  text-align: center;
  .gearBox {
    border: 0;
    font-size: 1rem;
    height: 28px;
    padding: 0 12px;
    line-height: 28px;
  }
}
</style>
