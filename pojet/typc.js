function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tip = parseFloat(document.getElementById("tip").value);

  if (isNaN(bill) || isNaN(tip)) {
    alert("Please enter valid numbers for bill and tip.");
    return;
  }

  const total = bill + (bill * tip) / 100;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}
