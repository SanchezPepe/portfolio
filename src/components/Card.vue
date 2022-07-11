<template>
  <div @mouseover="flip = true" @mouseleave="flip = false">
    <transition name="fade">
      <p class="absolute w-full h-full bg-blue-500" v-if="!flip">{{ front }}</p>
    </transition>

    <transition name="fade">
      <p class="absolute w-full h-full bg-green-500" v-if="flip">
        {{ back }}
      </p>
    </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
