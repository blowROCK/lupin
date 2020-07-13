<template>
  <div id="Lupin">
    <div class="header">
      <div class="header-name-container">
        <h2>닉네임</h2>
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
p {
  font-size: 20px;
}
</style>
