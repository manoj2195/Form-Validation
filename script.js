function validateForm() {
  let name = document.getElementById("name").value; // .value = ye input field ka text return karta hai
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let regexp = new RegExp(/^\d/); // kisi pattern ko match karne ke liy ham regular expression ka use karte hai (\d = digit)
  let regExEmail = new RegExp(/^[\w]+@[a-z]+\.[a-z]{2,}$/); // ( [] = ek ya ek se jayda word match karega ||) (w = word character) || (@+ a-z == character) || (.a-z = character)
  // $ = string end // line end
  if (name === "") {
    alert("Name cannot be empty.");
    return false; //yadi information wrong hai toh form submit nahi hoga
  } else if (email === "") {
    alert("Email cannot be empty.");
    return false;
  } else if (password === "") {
    alert("Password cannot be empty.");
    return false;
  } else if (regexp.test(name)) {
    //yaha per ye syntax hai (jo ki name field pr laga hai)

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
