<template>
  <form>
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-select v-model="select" :items="items" label="Item" required></v-select>
    <v-checkbox v-model="checkbox" label="Do you agree?" required></v-checkbox>
  </form>
</template>

<script>
export default {
  name: "AuthRegister",

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
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
