import { observable, action, makeObservable } from "mobx";
import { firebaseInstance } from "../service/firebase";
import Restaurante from './Restaurante';

class RestauranteRepository {

    restaurantes = [];
    
    constructor() {
        makeObservable(this,{
            restaurantes: observable,
            getRestaurantes: action
        })
    }

    async getRestaurantes(){

        return new Promise((resolve,reject) => {
            const restaurantes = [];
            firebaseInstance.database().ref('Restaurantes').once('value')
            .then(restaurantesData => {
                restaurantesData.forEach(restauranteData => {
                    let restauranteSnapShot = restauranteData.val();
                    let restaurante = new Restaurante(restauranteSnapShot.id,restauranteData.key,restauranteSnapShot.Categoria,
                    restauranteSnapShot.Localidad,restauranteSnapShot.Valoracion,restauranteSnapShot.Probado,restauranteSnapShot.Favorito);
                    restaurantes.push(restaurante);
                    
                });
                this.restaurantes = restaurantes;
                resolve(this.restaurantes);
            }).catch(error => {
                reject(error);
            })
        });
    }

}

export const restaurantes = new RestauranteRepository();