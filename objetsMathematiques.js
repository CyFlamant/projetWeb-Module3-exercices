// Constantes numériques
var circonference = 2 * Math.PI * 5;
console.log(circonference);

//Méthodes d'arrondi
var nb = 7.75;
console.log("Nombre exact : " + nb);
console.log("Arrondi au-dessus : " + Math.ceil(nb));
console.log("Arrondi en-dessous : " + Math.floor(nb));
console.log("Arrondi : " + Math.round(nb));
console.log("Tronqué : " + Math.trunc(nb));

//Méthodes de calcul
console.log("2^5 = " + Math.pow(2,5));
console.log("racine carrée de 25 : " + Math.sqrt(25));
console.log("racine cubique de 27 : " + Math.cbrt(27));
console.log("valeur absolue de -15  " + Math.abs(-15));

//Méthodes logarithmiques
console.log("Logarithme naturel de 10 : " + Math.log(10));

//Valeurs minimales et maximales
var liste = [1,5,99,6];
console.log(liste);
console.log("maximum : " + Math.max(...liste));
console.log("minimum : " + Math.min(...liste));

//Méthodes trigonométriques
