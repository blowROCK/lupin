<template>
  <div
    id="number"
    :style="{ transform: `translateY(-${this.height * num}px)` }"
  >
    <h6 class="num" v-for="n in this.nums">
      {{ n }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: {
    num: Number,
    order: Number,
  },
  components: {},
  data() {
    return {
      nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      height: 0,
    };
  },
  mounted() {
    const number = document.getElementById("number");
    this.height = number.offsetHeight / 10;
  },
  methods: {
    display(num) {
      const numberContainer = document.getElementById("number");
      numberContainer.style.transform = `translateY(-${this.height * num}px)`;
    },
  },
};
</script>
<style lang="scss" scoped>
#number {
  transition: transform 1.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  .num {
    font-size: 1.55rem;
  }
}
</style>
