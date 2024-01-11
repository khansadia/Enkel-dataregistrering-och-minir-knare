// Asking name from user
let Name = prompt("What is your name?");
console.log("Hello " + Name + "!");
 
// Asking ageyear from user 
const AgeYear = prompt (" What is your age year?");
 console.log("My age year is" + AgeYear + "!");

 //Beräkna användarens ålder genom att subtrahera födelseåret från det aktuella året. 
 

const BirthYear = prompt("What is your birth year?");
const age = new Date().getFullYear() - BirthYear;
console.log("You are " + age + " year old.");