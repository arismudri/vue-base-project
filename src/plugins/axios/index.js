import Vue from "vue";
import * as http from "axios";
import VueAxios from "vue-axios";

const config = {
  baseURL:
    process?.env?.VUE_APP_BASE_URL ?? "https://attendance.stroosstech.id",
};

const axios = http.create(config);

Vue.use(VueAxios, axios);
