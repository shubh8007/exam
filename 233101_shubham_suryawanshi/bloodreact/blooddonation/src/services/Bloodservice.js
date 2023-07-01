import axios from 'axios'
const baseUrl = "http://localhost:8007"
class BloodService {
    getBlood() {
        return axios.get(baseUrl + "/bloods")
    }

    insertBlood() {
        return axios.post(baseUrl + "/bloods/blood")
    }
}

export default new BloodService(); 