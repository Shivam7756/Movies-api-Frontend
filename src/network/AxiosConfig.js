import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/movies/',
    timeout: 5000,
})

export default axiosInstance

