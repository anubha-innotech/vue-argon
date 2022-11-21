import { createStore } from "vuex";
import {
  getAuth,
  signOut
} from 'firebase/auth'

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    user: false
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    setUser({ commit }) {
      // console.log('set user');
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // alert('user')
      } else {
        // alert('no user')
      }
      commit("SET_USER", user)
    },
    handleSignout({ commit }) {
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        // console.log('signout');
        const user = false
        commit("SET_USER", user)
      }).catch((error) => {
        // An error happened.
        console.log('signout' + error);
      });
    }
  },
  getters: {
    currentUser(state) {
      return state.user
    }
  }
});

