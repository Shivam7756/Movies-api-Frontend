import { HttpStatusCode } from "axios"
import axiosInstance from "../AxiosConfig"

export function getAllMovies(onSuccess, onFailure) {
    axiosInstance.get('get')
        .then(res => {
            if (res.status == HttpStatusCode.Ok) {
                onSuccess(res.data)
                return
            }
            onFailure()
        })
        .catch(err => onFailure())
}

export function getMovieById(movieId, onSuccess, onFailure) {
    axiosInstance.get(`${movieId}`)
        .then(res => {
            if (res.status == HttpStatusCode.Ok) {
                onSuccess(res.data)
                return
            }
            onFailure()
        })
        .catch(err => onFailure())
}