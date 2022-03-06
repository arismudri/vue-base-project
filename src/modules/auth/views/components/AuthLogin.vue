<template>
  <form>
    <v-text-field
      v-model="form.email"
      :counter="10"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      required
    ></v-text-field>
    <v-btn block class="mt-3" color="blue darken-4 blue--text text--lighten-5">
      Login
    </v-btn>
    <!-- <v-checkbox v-model="form.remember" label="Remember?" required></v-checkbox> -->
  </form>
</template>

<script>
export default {
  name: "AuthLogin",

  data: () => ({
    form: {
      username: "",
      password: "",
      remember: false,
    },

    showPassword: false,
  }),

  computed: {},

  methods: {
    submit() {
      // this.$v.$touch();
    },
    clear() {
      // this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
