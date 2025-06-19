import {Voiture} from "./voiture.js"
const maVoiture = new Voiture("Honda","Civic", 2024,"vert");
maVoiture.afficherDetails();

maVoiture.couleur = "jaune";
console.log(maVoiture.couleur);
maVoiture.afficherDetails();