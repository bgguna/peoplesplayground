<template>
    <div class="catchups">
        <h1>Edit Catch-up</h1>
        <div class="summary">

        </div>
        <div>
                <button class="app_back_btn" @click="backToCatchups">Back</button>
        </div>
    </div>
</template>

<script>
import CatchupsService from '@/services/CatchupsService'
export default {
    name: 'viewcatchup',
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
        async backToCatchups () {
            this.$router.push({ name: 'Catchups' })
        }
    }
}
</script>

<style type="text/css">
.summary div {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
}

.app_back_btn {
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

