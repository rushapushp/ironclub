import {makeAutoObservable} from "mobx";

export default class ClientStore {
    constructor(){
        this._names = []
        this._ages = []
        this._exps = []
        this._phonenumbers = []
        this._trainers = []
        makeAutoObservable(this)
    }


    setNames(names) {
        this._names = names
    }
    setAges(ages) {
        this._ages = ages
    }
    setExps(exps) {
        this._exps = exps
    }
    setPhonenumbers(phonenumbers) {
        this._phonenumbers = phonenumbers
    }
    setTrainers(trainers) {
        this._trainers = trainers
    }
    get names() {
        return this._names
    }

    get ages() {
        return this._ages
    }
    get exps() {
        return this._exps
    }
    get phonenumbers() {
        return this._phonenumbers
    }
    get trainers() {
        return this._trainers
    }
   
}