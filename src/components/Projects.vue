<template>
  <div class="grid sm:grid-cols-2">
    <Card front="FRONT" back="BACK"/>
    <Card front="FRONT" back="BACK"/>
    <Card front="FRONT" back="BACK"/>
    <Card front="FRONT" back="BACK"/>

  </div>
</template>

<script>
import Card from "./Card.vue"

export default {
  components: {
    Card,
  }
};
</script>

<style></style>
