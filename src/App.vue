<script setup>
import Info from "./components/Info.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <div
    class="grid lg:grid-cols-2 h-screen dark:bg-stone-900 dark:text-white font-serif"
  >
    <Info />
    <Projects />
  </div>
</template>
