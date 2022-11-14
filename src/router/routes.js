export const routes = [
  {
    path: "/",
    component: () => import("../layouts/LayoutMain.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "main",
        component: () => import("../pages/MainPage.vue"),
      },
      {
        name: "profile",
        path: "profile",
        component: () => import("../pages/ProfilePage.vue"),
      },
      {
        name: "settings",
        path: "settings",
        component: () => import("../pages/SettingsPage.vue"),
      },
      {
        name: "comunity",
        path: "comunity",
        component: () => import("../pages/ComunityPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("../layouts/LayoutAuth.vue"),
    children: [
      {
        path: "signin",
        name: "signin",
        component: () => import("../pages/auth/SignInPage.vue"),
      },
      {
        path: "signup",
        name: "signup",
        component: () => import("../pages/auth/SignUpPage.vue"),
      },
    ],
  },
];
