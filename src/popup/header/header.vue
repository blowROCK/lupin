<template>
    <el-row id="header">
        <el-col :span="16" :offset="4">
            <el-radio-group v-model="tabType" size="mini">
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
    name: 'Header',
    components: {
    },
    data () {
      return {
        tabType: '하루'
      }
    },
    created() {
      // chrome.notifications.create('reminder', {
    }
  }
</script>
<style lang="scss" scoped>
#header{
    text-align: center;
    .gearBox{
        border: 0;
        font-size: 1rem;
        height: 28px;
        padding: 0 12px;
        line-height: 28px;
    }
}
</style>
