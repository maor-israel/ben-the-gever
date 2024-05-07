'use client'

// import Axios from "axios"
// import { Request } from "node-fetch"

const BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8800/api/'
    : '/api/'
// const API_KEY = process.env.DATA_API_KEY as string

// BIG Todo: Transform it to using fetch instead of axios
// let axios = Axios.create({
//     withCredentials: true
// })


export const fetchService = {
    GET(endpoint, data) {
        return api(endpoint, 'GET', data)
    },
    POST(endpoint, data) {
        return api(endpoint, 'POST', data)
    },
    PUT(endpoint, data) {
        return api(endpoint, 'PUT', data)
    },
    DELETE(endpoint, data) {
        return api(endpoint, 'DELETE', data)
    }
}
const api = async (endpoint, method = 'GET', data = null) => {

    const url = (method === 'GET' && data) ? `${BASE_URL}${endpoint}?${new URLSearchParams(data)}` : `${BASE_URL}${endpoint}`
    const request = (method === 'GET') ? new Request(url, { method }) :
        new Request(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })

    try {
        const res = await fetch(request)
        const resJson = await res.json()
        console.log('The api result =======> ', resJson)
        return resJson
    } catch (error) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        if (error.response && error.response.status === 401) { // 401 means luck of authentication and that why we clear the session storage and redirect
            sessionStorage.clear()
            window.location.assign('/')
            return null
        }
        throw error
    }
}


function createJsonFiles(reportId) {
    let qaAdded
    let qaEdited
    let panels
}




createJsonFiles()