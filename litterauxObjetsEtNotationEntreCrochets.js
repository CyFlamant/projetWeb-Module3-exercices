var voiture ={};
voiture["marque"] = "Renault";
voiture["modele"] = "Scenic";
console.log(voiture);
console.log("Marque : "+ voiture["marque"]);

voiture["type de moteur"] = "v8";
console.log("type de moteur : " + voiture["type de moteur"]);

voiture["modele"]="Twingo";
voiture["couleur"] = "rouge";
console.log(voiture);

voiture["1"] = "1532";
console.log(voiture);

var arrOfKeys = ["marque", "modele", "couleur"];
for(var i =0 ; i <arrOfKeys.length; i++) {
    console.log(voiture[arrOfKeys[i]]);
}

console.log(voiture.couleur);
console.log(voiture["couleur"]);