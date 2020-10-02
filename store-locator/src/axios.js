import axios from "axios"

const instance = axios.create({
    baseURL: "https://us-central1-api-function-webapp.cloudfunctions.net/apiv1"
})

export default instance