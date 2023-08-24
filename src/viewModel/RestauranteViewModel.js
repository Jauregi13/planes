import { action,makeObservable, observable } from "mobx";
import { restaurantes } from "../model/RestauranteRepository";

class RestauranteViewModel {
    restaurantes = [];
    constructor(){
        makeObservable(this,{
            restaurantes: observable,
            getAllRestaurantes: action
        })
    }

    getAllRestaurantes(){

       return restaurantes.getRestaurantes();

    }
}

export default RestauranteViewModel;