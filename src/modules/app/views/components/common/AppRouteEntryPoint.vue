<template>
  <div></div>
</template>

<script>
export default {
  name: "AppRouteEntryPoint",
  mounted() {
    this.$router.replace({ name: "Dashboard" }).catch(() => {
      //
    });
  },
};
</script>
