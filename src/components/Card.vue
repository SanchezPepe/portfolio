<template>
  <div @mouseover="flip = true" @mouseleave="flip = false">
      <p class="w-full h-full text-center bg-blue-500" v-if="!flip">
        {{ front }}
      </p>

      <p class="w-full h-full text-center bg-green-500" v-if="flip" >
        {{ back }}
      </p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    front: String,
    back: String,
  },
  setup() {
    const flip = ref(false);

    return { flip };
  },
};
</script>

