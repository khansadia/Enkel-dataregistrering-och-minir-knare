//Asking name from user
let Name = prompt("What is your name?");
console.log("Hello " + Name + "!");
 
// Asking ageyear from user 
const AgeYear = prompt (" What is your age year?");
 console.log("My age year is" + AgeYear + "!");

 //Beräkna användarens ålder genom att subtrahera födelseåret från det aktuella året. 
 
const BirthYear = prompt("What is your birth year?");
const age = new Date().getFullYear() - BirthYear;
console.log("You are " + age + " year old."); 


// Now its time to create mini calculator.// starting with asking for two number using prompt.


let nummer1 = prompt("Enter your first number:");
let nummer2 = prompt("Enter your second number:");

console.log(nummer1 + " + " + nummer2 + " = " + (Number(nummer1) + Number(nummer2)));
console.log(nummer1 + " - " + nummer2 + " = " + (nummer1 - nummer2));
console.log(nummer1 + " * " + nummer2 + " = " + (nummer1 * nummer2));
console.log(nummer1 + " / " + nummer2 + " = " + (nummer1 / nummer2));
// Tänk på att prompt ALLTID returnerar en sträng.
let string = prompt("Enter a nummer:");
let nummer = parseInt(string);
alert("Beräkningarna är klara! Kontrollera konsolen för resultaten.");
