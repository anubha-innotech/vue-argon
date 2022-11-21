<template>
<div class="py-4 container-fluid">
    <div class=" row">
        <div class="col-12">
            <authors-table />
        </div>
    </div>
</div>
<button @click="listAllUsers()">users</button>
</template>

  
<script>
import AuthorsTable from "./components/UsersTable.vue";
import {
    getAuth
} from 'firebase/auth'
export default {
    name: "tables",
    components: {
        AuthorsTable,
    },
    data() {
        return {
            stats: {
                titleColor: "opacity-7 text-white",
                descColor: "text-white",
                trip: {
                    title: "Today's Trip",
                    desc: "145 KM",
                    classIcon: "text-dark ni ni-money-coins",
                },
                health: {
                    title: "Battery Health",
                    desc: "99 %",
                    classIcon: "text-dark ni ni-controller ",
                },
                speed: {
                    title: "Average Speed",
                    desc: "56 Km/h",
                    classIcon: "text-dark ni ni-delivery-fast",
                },
                volume: {
                    title: "Music Volume",
                    desc: "15/100",
                    classIcon: "text-dark ni ni-note-03",
                },
            },
        };
    },
    methods: {
        listAllUsers(nextPageToken) {
            // List batch of users, 1000 at a time.
            getAuth()
                .listUsers(1000, nextPageToken)
                .then((listUsersResult) => {
                    listUsersResult.users.forEach((userRecord) => {
                        console.log('user', userRecord.toJSON());
                    });
                    if (listUsersResult.pageToken) {
                        // List next batch of users.
                        // listAllUsers(listUsersResult.pageToken);
                    }
                })
                .catch((error) => {
                    console.log('Error listing users:', error);
                });
        }
    }
};
</script>
