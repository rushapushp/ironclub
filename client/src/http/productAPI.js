import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const fetchOneBrand = async (id) => {
    const {data} = await $host.get('api/brand/' + id)
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (typeId, brandId) => {
    const {data} = await $host.get('api/product', {params: {
        typeId, brandId
    }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

export const addToCart = async (productId) => {
    const {data} = await $authHost.post('api/cart', productId)
    return data
}

export const getCart = async () => {
    const {data} = await $authHost.get('api/cart')
    return data
}


