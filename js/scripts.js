var txt = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";

var animal = "Zielone słonie";
var animalUpper = animal.toUpperCase();
console.log(animalUpper);

var txtChange = txt.replace('Papugi', animalUpper);
console.log(txtChange);

var txtLength = txtChange.length;
console.log(txtLength);
var halfTxt = txtLength / 2;
console.log(halfTxt);
var txtLengthSlice = txtChange.slice(0, halfTxt);
console.log(txtLengthSlice);