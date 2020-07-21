<template>
  <div id="Lupin">
    <Navigation />
  </div>
</template>

<script>
import Navigation from './navi/navigation';

export default {
  name: 'App',
  components: {
    Navigation,
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
@import "../assets/reset.scss";
#Lupin{
  display: flex;
  width: 400px;
  height: 600px;
  .header{
    .header-name-container{

    }
  }
}
</style>
