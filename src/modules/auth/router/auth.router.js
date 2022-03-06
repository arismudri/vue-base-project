import AppBaseWrapper from "@/modules/app/views/components/base/AppBaseWrapper";

export default {
  path: "/auth",
  component: AppBaseWrapper,
  children: [
    {
      path: "login",
      name: "Login",
      meta: { layout: "auth", option: { type: "login" } },
      component: () =>
        import(
          /* webpackChunkName: "auth" */ "@/modules/auth/views/AuthForm.vue"
        ),
    },
  ],
};
