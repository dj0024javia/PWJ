import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:5001/api-test-b307b/us-central1/api"
})

export default instance