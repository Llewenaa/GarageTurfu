class Voiture {
    constructor(marque, modele, annee, couleur){
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }

    afficherDetails() {
        console.log(`La  voiture est une ${this.marque} ${this.modele} ${this.annee} de couleur ${this.couleur}`);
    }
}
const maVoiture = new Voiture("Honda","Civic", 2024,"vert");
maVoiture.afficherDetails();