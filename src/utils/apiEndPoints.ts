import axios from 'axios'

export const baseUrl = 'https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json'

export const API = axios.create({
    baseURL: baseUrl,
})