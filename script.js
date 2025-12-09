function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let regexp = new RegExp(/^\d/); 
  let regExEmail = new RegExp(/^[\w]+@[a-z]+\.[a-z]{2,}$/); 
  if (name === "") {
    alert("Name cannot be empty.");
    return false; 
  } else if (email === "") {
    alert("Email cannot be empty.");
    return false;
  } else if (password === "") {
    alert("Password cannot be empty.");
    return false;
  } else if (regexp.test(name)) {
    

    alert("Name field cannot contain digit");
    return false;
  } else if (password.length <= 8) {
    alert("Minimum 8 character required");
    return false;
  } else if (!regExEmail.test(email)) {
    alert("Email is invalid.");
    return false;
  }
}

