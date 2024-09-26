function addField() {
  const input = document.createElement("input");
  const formContainer = document.getElementById("dynamicForm");
  formContainer.appendChild(input);
}

document.querySelector("button").addEventListener("click", addField);

function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");

  let allFilled = true;
  let message = "Entered values:\n";

  inputs.forEach((input) => {
    if (!input.value) {
      allFilled = false;
    }
    message += input.value + "\n";
  });

  if (!allFilled) {
    alert("Please fill all fields.");
  } else {
    alert(message);
  }
}

document
  .querySelector('button[type="button"]')
  .addEventListener("click", submitForm);
