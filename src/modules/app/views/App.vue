<template>
  <component :is="layout">
    <router-view :key="fullPath" />
  </component>
  <!-- <v-app>
    <v-main>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
    </v-main>
  </v-app> -->
</template>

<script>
import { LAYOUT } from "@/modules/app/constant/app.constant";
export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  }),
  computed: {
    fullPath() {
      return this.$router?.fullPath;
    },
    layout() {
      let type = LAYOUT.default;

      if (this.$route.meta.layout) {
        type = this.$route.meta.layout;
      }

      return `${type}-layout`;
    },
  },
};
</script>
