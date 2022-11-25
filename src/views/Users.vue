<template>{{userData}}
<div class="py-4 container-fluid">
    <div class=" row">
        <div class="col-12">
            <users-table :userData="userData"/>
        </div>
    </div>
</div>
<button @click="listAllUsers()">users</button>
</template>

<script>
import UsersTable from "./components/UsersTable.vue";
import {
    getFirestore,
    collection,
    getDocs
} from "firebase/firestore";

export default {
    name: "tables",
    components: {
        UsersTable,
    },
    data() {
        return {
            userData: ""
            // stats: {
            //     titleColor: "opacity-7 text-white",
            //     descColor: "text-white",
            //     trip: {
            //         title: "Today's Trip",
            //         desc: "145 KM",
            //         classIcon: "text-dark ni ni-money-coins",
            //     },
            //     health: {
            //         title: "Battery Health",
            //         desc: "99 %",
            //         classIcon: "text-dark ni ni-controller ",
            //     },
            //     speed: {
            //         title: "Average Speed",
            //         desc: "56 Km/h",
            //         classIcon: "text-dark ni ni-delivery-fast",
            //     },
            //     volume: {
            //         title: "Music Volume",
            //         desc: "15/100",
            //         classIcon: "text-dark ni ni-note-03",
            //     },
            // },
        };
    },
    methods: {

    },
    async mounted() {
        const db = getFirestore()
        const querySnapshot =  await getDocs(collection(db, "users"));
        console.log(querySnapshot);
        // this.userData = querySnapshot
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().name}`);  
            this.userData = doc
            console.log(this.userData.id)
        });
    }
}
</script>
