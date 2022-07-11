<template>
  <div class="grid grid-cols-2">
    <vue-flip
      :v-model="true"
      class="text-center border-4"
      width="100%"
      height="2.5rem"
      :active-hover="true"
    >
      <template v-slot:front class="front"> ABC </template>
      <template v-slot:back class="back"> TEST </template>
    </vue-flip>
  </div>
</template>

<script>
import VueFlip from "vue-flip";

export default {
  components: {
    "vue-flip": VueFlip,
  },
};
</script>

<style></style>
