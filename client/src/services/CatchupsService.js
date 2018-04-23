import Api from '@/services/Api'

export default {
    fetchCatchups() {
        return Api().get('catchups');
    }
}