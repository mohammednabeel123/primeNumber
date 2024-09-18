const labelInput = document.getElementById("x");
const calculateButton = document.getElementById("CalculateButton");
const clearButton = document.getElementById("clearButton");
const notearea = document.getElementById("notearea");
calculateButton.addEventListener("click", function () {
  const inputnumber = parseFloat(labelInput.value);

  if (isNaN(inputnumber) || inputnumber < 2) {
    notearea.innerText = " Enter a Number Greater Than 2 !!";
    notearea.style.color = "red";
    return;
  }
  let isprime = true;
  for (let i = 2; i <= Math.sqrt(inputnumber); i++) {
    if (inputnumber % i === 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    notearea.innerText = "The Number is Prime";
    notearea.style.color = "blue";
  } else {
    notearea.innerText = "The Number is Not Prime";
    notearea.style.color = "red";
  }
});

clearButton.addEventListener("click", function () {
  labelInput.value = "";
  notearea.innerText = "";
});
