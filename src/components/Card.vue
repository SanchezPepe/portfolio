<template>
  <div
    class="font-sans inline-block align-middle text-center"
    @mouseover="flip = true"
    @mouseleave="flip = false"
  >
    <div class="flex h-full dark:bg-stone-900" v-if="!flip">
      <div class="m-auto">
        {{ front }}
      </div>
    </div>

    <div class="flex h-full dark:bg-zinc-800" v-if="flip">
      <div class="m-auto">
        {{ back }}
      </div>
    </div>
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
