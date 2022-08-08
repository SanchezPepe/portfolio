<template>
  <div class="grid md:grid-cols-2">
    <Card
      class="border-2 border-y-lime-50"
      :front="projects[0].front"
      :back="projects[0].back"
      :url="projects[0].url"
    />
    <Card
      class="border-2 border-y-lime-50"
      :front="projects[1].front"
      :back="projects[1].back"
      :url="projects[1].url"
    />
    <Card
      class="border-2 border-y-lime-50"
      :front="projects[2].front"
      :back="projects[2].back"
      :url="projects[2].url"
    />
    <Card
      class="border-2 border-y-lime-50"
      :front="projects[3].front"
      :back="projects[3].back"
      :url="projects[3].url"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { toRefs } from "vue";

export default {
  setup() {
    const data = {
      projects: [
        {
          front: "Cryptocurrency to MXN",
          back: "Built an Android application using Bitso Exchange API to reduce mobile data consumption and fetch Bitcoin, Ethereum, Ripple, and Bitcoin Cash prices.",
          url: "https://github.com/SanchezPepe/CryptocurrencyToMXN",
        },
        {
          front: "App ITAM",
          back: "Developed for the student community a web app using Vue.js, Vueyify and Firebase to plan their schedules and track the school shuttle in real-time.",
          url: "https://github.com/SanchezPepe/AppITAM",
        },
        {
          front: "Vue3-Choropleth",
          back: "Migrating https://www.npmjs.com/package/vue-choropleth to Vue 3",
          url: "https://github.com/SanchezPepe/vue3-choropleth",
        },
        {
          front: "Tweet streaming",
          back: "Used Apache Spark Streaming and Twitter API to fetch trending topics in a range of time",
          url: "https://github.com/SanchezPepe/Twitter_Spark",
        },
      ],
    };

    return { ...toRefs(data) };
  },
  components: {
    Card,
  },
};
</script>

<style></style>
