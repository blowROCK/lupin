<template>
    <div id="side">
        <div class="cylinder">
            <div class="bg"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Side',
    components: {
    },
    data () {
      return {

      }
    },
    created() {

    }
  }
</script>
<style lang="scss" scoped>
#side{
    .cylinder{
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
        height: 360px;
        .bg{
            background: red;
        }
    }
}
</style>
