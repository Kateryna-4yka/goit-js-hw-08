const form = document.querySelector(".login-form");

form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  const form = event.target;
  
  if (form.elements.email.value.trim() === "" || form.elements.password.value.trim() === "") {
    alert ("All form fields must be filled in");
    return;
  };


  const inputInfo = {
  [form.elements.email.name]: form.elements.email.value.trim(),
   [form.elements.password.name] : form.elements.password.value.trim(),
  
  };

console.log(inputInfo);

  form.reset();
}
