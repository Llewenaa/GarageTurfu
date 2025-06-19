class Vehicule {
    #marque;
    #modele;    
    #annee;
    constructor(marque, modele, annee)  {
        this.#marque = marque;
        this.#modele = modele;  
        this.#annee = annee;
    }
    afficherDetails() {
        console.log(`Marque: ${this.#marque}, Modèle: ${this.#modele}, Année: ${this.#annee}`);
    }
    get marque() {
        return this.#marque;
    }
    get modele() {
        return this.#modele;
    }
    get annee() {
        return this.#annee;
    }
    set marque(marque) {
        this.#marque = marque;
    }
    set modele(modele) {
        this.#modele = modele;
    }
    set annee(annee) {
        this.#annee = annee;
    }
}
 export default Vehicule;