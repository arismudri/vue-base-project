<template>
  <v-app>
    <v-main>
      <v-card
        outlined
        color="transparent"
        class="d-flex align-center justify-center mt-16"
        flat
        tile
      >
        <slot />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AppLayoutAuth",
};
</script>
<style>
#app {
  background: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg")
    no-repeat center center fixed !important;
  background-size: cover;
}
.cardColor {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border-color: white !important;
}
</style>
