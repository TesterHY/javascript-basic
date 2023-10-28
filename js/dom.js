console.log(document.head);
console.log(document.body);
console.log(window);
console.log(document.getElementById("first-list"));
console.log(document.getElementsByClassName("heading"));

const headings = document.getElementsByClassName("heading");

for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

console.log(document.querySelector("h1"));
console.log(document.querySelector("#second-heading"));
console.log(document.querySelector(".list"));

console.log(document.querySelectorAll(".heading"));
console.log(document.querySelectorAll("li"));

// li要素作成
const li = document.createElement("li");
li.textContent = "JavaScriptで新しく作成したリスト3";
document.querySelector("ul").appendChild(li);
