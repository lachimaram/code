const mytitle = document.getElementById("title"); // get the element with id "title"
mytitle.style.color = "red";
mytitle.style.backgroundColor = "blue";
const parties = document.getElementsByClassName("partie"); // get all elements with class "action"
const paragraphs = document.getElementsByTagName("p"); //
const paragraphs2 = document.querySelectorAll("p"); //select all paragraphs hey salam ...
console.log(parties);
mytitle.classList.add("example");
mytitle.classList.remove("example");
mytitle.classList.toggle("example"); // ki matkounch tajouter et contrairement

for (let partie of parties) {
  partie.style.backgroundColor = "red"; // change the color of each element to green
}
const newdiv = document.createElement("div"); // create a new div element
newdiv.setAttribute("id", "newDiv"); // set the id attribute of the new div
const newpragraph = document.createElement("p"); // create a new paragraph element
newpragraph.setAttribute("id", "p"); // set the id ( attribute class, div,...) of the new paragraph
newpragraph.textContent = "salam how are youuu"; // set the text content(wach naktab dakhal hada attribute) of the new paragraph
parties[0].appendChild(newdiv);
newdiv.appendChild(newpragraph); // append the new paragraph to the new div
const pdepartie = parties[0].querySelector("p");
parties[0].insertBefore(newdiv, pdepartie); // select the first paragraph inside the first element with class "partie"
newdiv.remove(); // remove the new div from the document
const mybtn = document.querySelector("#btn");
mybtn.addEventListener("click", () => {
  const name = prompt("Enter your name:");
  console.log(name);
});
