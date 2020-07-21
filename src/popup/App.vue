<template>
  <div id="Lupin">
    <Header />
    <el-row>
      <el-col :span="4">
        <Side />
      </el-col>
      <el-col :span="20">2</el-col>
    </el-row>
  </div>
</template>

<script>
import Header from './header/header';
import Side from './side/side';

export default {
  name: 'App',
  components: {
    Header,
    Side
  },
  data () {
    return {
      userName : this.$store.getters.foo
    }
  },
  created() {
    // chrome.notifications.create('reminder', {
    //   type: 'basic',
    //   iconUrl: '../icons/icon_48.png',
    //   title: 'Don\'t forget!',
    //   message: 'You have  things to do. Wake up, dude!'
    // }, function(notificationId) {});
  }
}
</script>
<style lang="scss" scoped>
#Lupin{
  width: 250px;
  height: 400px;
  padding: 5px;
  box-sizing: border-box;
}
</style>
