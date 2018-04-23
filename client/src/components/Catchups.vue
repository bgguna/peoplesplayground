<template>
  <div class="catchups">
      <h1>Catchups</h1>
      This file will list all the catchups.
      
      <div v-for="catchup in catchups">
          <p>
              <span><b>{{ catchup.title }}</b></span><br />
              <span>{{ catchup.description }}</span>
          </p>
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
        async getCatchups () {
            const response = await CatchupsService.fetchCatchups()
            this.catchups = response.data
        }
    }
}
</script>