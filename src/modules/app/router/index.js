import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const importRoutesModules = () => {
  const context = require.context("@/modules", true, /router.js$/i);
  return context
    .keys()
    .map(context)
    .map((m) => m.default);
};

const routes = [
  {
    path: "/",
    name: "LandingPage",
    meta: { layout: "auth" },
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ "@/modules/app/views/components/common/AppRouteEntryPoint.vue"
      ),
  },
  ...importRoutesModules(),
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
