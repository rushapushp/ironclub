import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor(){
        this._types = []
        this._brands = []
        this._products = []
        this._carts = []
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setProducts(products) {
        this._products = products
    }

    setCarts(cart){
        this._carts = cart
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get cart() {
        return this._carts
    }

    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}