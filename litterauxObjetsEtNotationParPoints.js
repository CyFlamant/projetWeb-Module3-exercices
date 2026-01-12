var personne = {
    nom:"machin",
    age: 52,
    profession: "menuisier",
}


personne.nationalite = "belge";

console.log(personne);

console.log("Nom : "+ personne.nom);
console.log("Age : " + personne.age);

personne.profession = "chomeur";
console.log("Nouvelle profession : " + personne.profession);

var animal = {};
animal.espece='';
animal.age = '';
console.log(animal);
animal.nom = "kiki";

console.log("Nom de l'animal : " + animal.nom);