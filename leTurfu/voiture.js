import Vehicule from './vehicule.js';
// Classe Voiture qui hérite de la classe Véhicule

class Voiture extends Vehicule {
    #_couleur;
    constructor( marque, modele, annee, couleur){
        super(marque, modele, annee);
        this.#_couleur = couleur;
    }

     afficherDetails() {
        console.log(`La  voiture est : ${this.marque} ${this.modele} ${this.annee} ${this.#_couleur}`);
   
    }
    
    get couleur() {
        return this.#_couleur;
    }
    
    set couleur(couleur) {
        this.#_couleur = couleur;
    }
}





export  {Voiture};