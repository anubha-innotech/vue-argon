<template>
<div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
        <div class="col-12">
            <navbar isBtn="bg-gradient-light" />
        </div>
    </div>
</div>
<main class="main-content mt-0">
    <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;">
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 text-center mx-auto">
                    <h1 class="text-white mb-2 mt-5">Welcome!</h1>
                    <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <argon-alert v-if="registered" dismissible="true">
                    <strong>Success!</strong> Registered successfully!
                </argon-alert>
                <div class="card z-index-0">
                    <div class="card-header text-center pt-4">
                        <h5>Register with</h5>
                    </div>
                    <div class="row px-xl-5 px-sm-4 px-3">
                        <div class="col-3 ms-auto px-1">
                            <a class="btn btn-outline-light w-100" href="javascript:;" @click.prevent="handleSignupWithFacebook">
                                <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(3.000000, 3.000000)" fill-rule="nonzero">
                                            <circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047" />
                                            <path d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z" fill="#FFFFFF" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <argon-social-button icon="fab fa-twitter-square" socialBtn="twitter" iconOnly="true" size="lg" @click.prevent="handleSignupWithTwitter" />
                        <div class="col-3 me-auto px-1">
                            <a class="btn btn-outline-light w-100" href="javascript:;" @click.prevent="handleSignupWithGoogle">
                                <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(3.000000, 2.000000)" fill-rule="nonzero">
                                            <path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" fill="#4285F4" />
                                            <path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" fill="#34A853" />
                                            <path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" fill="#FBBC05" />
                                            <path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" fill="#EB4335" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div class="mt-2 position-relative text-center">
                            <p class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">or</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <form role="form">
                            <argon-input type="text" placeholder="Name" aria-label="Name" v-on:on-focus="onFocus" v-on:on-blur="onBlur" v-on:update-value="updateName($event)" />
                            <argon-input type="email" placeholder="Email" aria-label="Email" v-on:update-value="updateEmail($event)" />
                            <argon-input type="password" placeholder="Password" aria-label="Password" v-on:update-value="updatePassword($event)" />
                            <argon-checkbox checked>
                                <label class="form-check-label" for="flexCheckDefault">
                                    I agree the
                                    <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                                </label>
                            </argon-checkbox>
                            <argon-alert color="warning" v-if="error" dismissible="true">
                                <strong>Error!</strong> {{error}}
                            </argon-alert>

                            <div class="text-center">
                                <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2" @click.prevent="handleSignup" :disabled="!email && !password">Sign up</argon-button>
                            </div>
                            <p class="text-sm mt-3 mb-0">
                                Already have an account?
                                <a href="javascript:;" class="text-dark font-weight-bolder">Sign in</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<app-footer />
<spinner v-if="showLoading" />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonAlert from "@/components/ArgonAlert.vue";
import ArgonSocialButton from "@/components/ArgonSocialButton.vue";
import Spinner from "./components/Spinner.vue";
import {
    getFirestore,
    collection,
    addDoc
} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    TwitterAuthProvider,
    FacebookAuthProvider
} from 'firebase/auth'

const body = document.getElementsByTagName("body")[0];
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerTwitter = new TwitterAuthProvider();

export default {
    name: "signin",
    components: {
        Navbar,
        AppFooter,
        ArgonInput,
        ArgonCheckbox,
        ArgonButton,
        ArgonAlert,
        ArgonSocialButton,
        Spinner
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error: null,
            registered: false,
            showLoading: false,
        }
    },
    computed: {},
    methods: {
        handleSignup() {
            this.showLoading = true
            this.error = null;
            this.registered = false;
            const auth = getAuth();
            // console.log(this.name, this.email);
             createUserWithEmailAndPassword(auth, this.email, this.password).then(
                async (userCredential) => {
                    const user = userCredential.user;
                    console.log(user.uid);
                    this.registered = true;
                    const db = getFirestore()
                    // Add a new document in collection "users"
                    try {
                        const docRef = await addDoc(collection(db, "users"), {
                            name: this.name,
                            email: this.email,
                            password: this.password,
                            uid: user.uid,
                            role: "user",
                            joined: new Date(),
                        });
                        console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                    this.name = '';
                    this.email = '';
                    this.password = '';
                    this.showLoading = false;
                }).catch((error) => {
                this.showLoading = false
                this.error = error.message
            });
        },
        handleSignupWithGoogle() {
            this.error = null;
            this.registered = false;
            const auth = getAuth();
            signInWithPopup(auth, providerGoogle)
                .then((result) => {
                    console.log(result);
                }).catch((error) => {
                    this.error = error.message;
                });
        },
        handleSignupWithFacebook() {
            this.error = null;
            this.registered = false;
            const auth = getAuth();
            signInWithPopup(auth, providerFacebook)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    this.error = error.message;
                });
        },
        handleSignupWithTwitter() {
            this.error = null;
            this.registered = false;
            const auth = getAuth();
            signInWithPopup(auth, providerTwitter)
                .then((result) => {
                    console.log(result);
                }).catch((error) => {
                    this.error = error.message;
                });
        },
        onFocus() {

        },
        onBlur() {

        },
        updateName(updatedValue) {
            this.name = updatedValue
        },
        updateEmail(updatedValue) {
            this.email = updatedValue
        },
        updatePassword(updatedValue) {
            this.password = updatedValue
        }
    },
    created() {
        this.$store.state.hideConfigButton = true;
        this.$store.state.showNavbar = false;
        this.$store.state.showSidenav = false;
        this.$store.state.showFooter = false;
        body.classList.remove("bg-gray-100");
    },
    beforeUnmount() {
        this.$store.state.hideConfigButton = false;
        this.$store.state.showNavbar = true;
        this.$store.state.showSidenav = true;
        this.$store.state.showFooter = true;
        body.classList.add("bg-gray-100");
    },
};
</script>
