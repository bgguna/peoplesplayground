<template>
    <div class="catchups">
        <h1>Catchups</h1>
        <div v-if="catchups.length > 0" class="table-wrap">
            <div>
                <router-link v-bind:to="{ name: 'NewCatchup' }" class="">Add Catch-up</router-link>
            </div>
            <table>
                <tr>
                    <td>Title</td>
                    <td width="550">Description</td>
                    <td width="100" align="center">Action</td>
                </tr>
                <tr v-for="catchup in catchups">
                    <td>{{ catchup.title }}</td>
                    <td>{{ catchup.description }}</td>
                    <td align="center">
                        <router-link v-bind:to="{ name: 'EditCatchup', params:{ id: catchup._id } }">Edit Catch-up</router-link>
                        <a href="#" @click="deleteCatchup(catchup._id)">Delete</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else>
            There are no catch-ups... Maybe it's time to have one <br /><br />
            <router-link v-bind:to="{ name: 'NewCatchup' }" class="add_catchup_link">Add Catch-up</router-link>
        </div>
    </div>
</template>

<script>
import CatchupsService from '@/services/CatchupsService'
export default {
    name: 'catchups',
    data () {
        return {
            catchups: []
        }
    },
    mounted () {
        this.getCatchups()
    },
    methods: {
        async getCatchups() {
            const response = await CatchupsService.fetchCatchups()
            this.catchups = response.data.catchups
        },
        async deleteCatchup(id) {
            await CatchupsService.deleteCatchup(id)
            this.$router.push({ name: 'Catchups' })
        }
    }
}
</script>
<style>
.table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
}
table th, table tr {
    text-align: left;
}
table thead {
    background: #f2f2f2;
}
table tr td {
    padding: 10px;
}
table tr:nth-child(odd) {
    background: #f2f2f2;
}
table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
}
a {
    color: #4d7ef7;
    text-decoration: none;
}
a.add_catchup_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
}
</style>
