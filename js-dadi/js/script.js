// Logica del programma
const userNumber = Math.floor(Math.random() * 6 + 1);
const cpuNumber = Math.floor(Math.random() * 6 + 1);
result = ""
console.log(userNumber, cpuNumber);
if (userNumber == cpuNumber) {
  result = "Parità!";
} else if (userNumber < cpuNumber) {
  result = "Hai perso!";
} else {
  result = "Hai vinto!";
}

// Output
console.log(result)