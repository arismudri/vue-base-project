import Vue from "vue";
import App from "@/modules/app/views/App.vue";
import router from "@/modules/app/router";
import vuetify from "@/plugins/vuetify";
import "@/modules/app/views/components";
// import '@/plugins';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
