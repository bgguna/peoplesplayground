<template>
    <div class="catchups">
        <h1>Edit Catch-up</h1>
        <div class="form">
            <div>
                <textarea rows="15" cols="15" placeholder="SUMMARY" v-model="summary"></textarea>
            </div>
            <div>
                <button class="app_catchup_btn" @click="updateCatchup">Update</button>
            </div>
        </div>
    </div>
</template>

<script>
import CatchupsService from '@/services/CatchupsService'
export default {
    name: 'editcatchup',
    data () {
        return {
            date: '',
            summary: ''
        }
    },
    mounted () {
        this.getCatchup()
    },
    methods: {
        async getCatchup () {
            const response = await CatchupsService.getCatchup({
                id: this.$route.params.id
            })
            this.date = response.data.date
            this.summary = response.data.summary
        },
        async updateCatchup () {
            await CatchupsService.updateCatchup({
                id: this.$route.params.id,
                date: this.date,
                summary: this.summary
            })
            this.$swal(
                'Great!',
                `Your catch-up has been updated!`,
                'success'
            )
            this.$router.push({ name: 'Catchups' })
        }
    }
}
</script>

<style type="text/css">
.form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
}
.form div {
    margin: 20px;
}
.app_catchup_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
}
</style>

