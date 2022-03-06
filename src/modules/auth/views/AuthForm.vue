<template>
  <v-card class="d-flex flex-column" min-height="450" min-width="300">
    <v-card-text>
      <p class="text-h4 blue--text text--darken-4">Login</p>
      <AuthLogin />
    </v-card-text>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 blue--text text--darken-4">Register</p>
          <AuthRegister />
        </v-card-text>
      </v-card>
    </v-expand-transition>

    <v-spacer> </v-spacer>

    <v-card-actions class="d-flex justify-center">
      <v-btn
        text
        class="text-lowercase"
        color="light-blue darken-4"
        @click="reveal = !reveal"
      >
        {{ text.msg }}
        <!-- {{ text.btnMode }} -->
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// Component
import { AuthLogin, AuthRegister } from "@/modules/auth/views/components";

export default {
  name: "AuthForm",
  components: { AuthLogin, AuthRegister },
  data: () => ({
    reveal: false,
  }),
  computed: {
    text() {
      return {
        btnMode: this.reveal ? "Login" : "Register",
        msg: this.reveal
          ? "Already have an account?"
          : "Don't have an account?",
      };
    },
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
