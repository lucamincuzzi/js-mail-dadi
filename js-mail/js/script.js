enabledEmails = [
  "luca@ciao.it",
  "paolo.birba@kerokero.com",
  "annalanna@panna.it",
  "lana.banana@split.com",
];
console.log(enabledEmails);
let found = false;
let message = "";

document.getElementById("invia").addEventListener("click", function () {
  event.preventDefault();
  // Raccolta dati
  emailInput = document.getElementById("email");
  userEmail = emailInput.value;
  console.log(userEmail);
  // Logica del programma
  for (let i = 0; i < enabledEmails.length; i++) {
    if (userEmail == enabledEmails[i]) {
      found = true;
    }
  }
  if (found == true) {
    message = "Accesso consentito.";
  } else {
    message = "Accesso negato";
  }
  // Output
  document.getElementById("login").append(`${message}`);
});
