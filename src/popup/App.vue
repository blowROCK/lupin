<template>
  <div id="Lupin">
    <div class="header">
      <div class="header-name-container">
        <h2>타이틀 TITLE</h2>
      </div>
      <div class="header-button-container">
        <i class="fas fa-cog"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName : this.$store.getters.foo
    }
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
