import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createName = async (name) => {
    const {data} = await $authHost.post('api/name', name)
    return data
}

export const fetchNames = async () => {
    const {data} = await $host.get('api/name')
    return data
}

export const createAge = async (age) => {
    const {data} = await $authHost.post('api/age', age)
    return data
}

export const fetchAges = async () => {
    const {data} = await $host.get('api/age')
    return data
}

export const createExp = async (exp) => {
    const {data} = await $authHost.post('api/exp', exp)
    return data
}

export const fetchExps = async () => {
    const {data} = await $host.get('api/exp')
    return data
}

export const createPhonenumber = async (phonenumber) => {
    const {data} = await $authHost.post('api/phonenumber', phonenumber)
    return data
}

export const fetchPhonenumbers = async () => {
    const {data} = await $host.get('api/phonenumber')
    return data
}

export const createTrainer = async (trainer) => {
    const {data} = await $authHost.post('api/trainer', trainer)
    return data
}

export const fetchTrainers = async () => {
    const {data} = await $host.get('api/trainer')
    return data
}


export const createClient = async (client) => {
    const {data} = await $authHost.post('api/client', client)
    return data
}

export const fetchClients = async (name, age) => {
    const {data} = await $host.get('api/client', {params: {
        name, age
    }})
    return data
}

export const fetchOneClient = async (id) => {
    const {data} = await $host.get('api/client/' + id)
    return data
}
