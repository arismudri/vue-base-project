import Vue from "vue";
import App from "@/modules/app/views/App.vue";
import router from "@/modules/app/router";
import vuetify from "@/plugins/vuetify";
// import axios from "axios";
// import VueAxios from "vue-axios";

import "@/modules/app/views/components";
import "@/plugins";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  // axios,
  // VueAxios,
  render: (h) => h(App),
}).$mount("#app");
