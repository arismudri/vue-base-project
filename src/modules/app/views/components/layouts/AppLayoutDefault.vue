<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app></v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AppLayoutDefault",
};
</script>
