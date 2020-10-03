import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:5001/api-function-webapp/us-central1/apiv1"
})

export default instance