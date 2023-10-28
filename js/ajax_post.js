const url = "https://jsonplaceholder.typicode.com/posts";

const button = document.getElementById("ajax-btn");
button.addEventListener("click", () => {
  const dummyData = { name: "Sara", age: 15 };
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dummyData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("サーバーからの応答:\n " + JSON.stringify(data, null, 2));
    });
});
