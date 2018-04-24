import Api from '@/services/Api'

export default {
    fetchCatchups() {
        return Api().get('catchups')
    },

    addCatchup(params) {
        return Api().post('add_catchup', params)
    },

    updateCatchup(params) {
        return Api().put('catchups/' + params.id, params)
    },

    getCatchup(params) {
        return Api().get('catchup/' + params.id)
    },

    deleteCatchup(id) {
        return Api().delete('catchups/' + id)
    }
}
