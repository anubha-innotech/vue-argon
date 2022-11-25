import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Users from "../views/Users.vue";

import store from "@/store"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      needsAuth: true
    }
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});
router.beforeEach((to, from, next) => {
  let isUserLoggedIn = store.state.user
  if(to.meta.needsAuth) {
    if(isUserLoggedIn) {
      next()
    } else {
      next("/signin");
    }
  } else {
    next();
  }
})
export default router;
