<template>
  <div class="catchups">
    <h1>Add Catch-up</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_catchup_btn" @click="addCatchup">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import CatchupsService from '@/services/CatchupsService'
export default {
  name: 'addcatchup',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addCatchup () {
      await CatchupsService.addCatchup({
        title: this.title,
        description: this.description
      })
      this.$swal(
        'Great!',
        `Your catchup has been added!`,
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

