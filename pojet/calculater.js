const dobInput = document.getElementById("dob");
const calcBtn = document.getElementById("calc-btn");
const resultEl = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  if (!dobInput.value) {
    resultEl.textContent = "Please unter your birthday first.";
    return;
  }

  const age = getAge(dobInput.value);
  if (age < 0) {
    resultEl.textContent = "your age is -1 years old";
    return;
  }

  resultEl.textContent = `Your age is ${age} ${
    age === 1 ? "year" : "years"
  } old`;
});

function getAge(dobString) {
  const today = new Date();
  const birthDate = new Date(dobString);
  let age = today.getFullYear() - birthDate.getFullYear();

  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
