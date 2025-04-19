const passwordBox = document.getElementById("password");
const length = 15;
const allCharector =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+={}[];:,<.>/?";
function passwordGenerator() {
  let password = "";
  while (length > password.length) {
    password += allCharector[Math.floor(Math.random() * allCharector.length)];
  }
  passwordBox.value = password;
}

function copy() {
    const textToCopy = passwordBox.value; 
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Password copied to clipboard!"); 
        })
        .catch((error) => {
            console.error("Failed to copy text: ", error); 
        });
}