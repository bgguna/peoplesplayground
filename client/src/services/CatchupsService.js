import Api from '@/services/Api'

export default {
    fetchCatchups() {
        return Api().get('catchups');
    },
    addCatchup (params) {
        return Api().post('catchups', params);
    }
}