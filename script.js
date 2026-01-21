const movies = [
  "Iron Man",
  "Captain America",
  "The Avengers"
];

const button = document.getElementById("showBtn");
const list = document.getElementById("movieList");

button.addEventListener("click", () => {
  list.innerHTML = "";
  movies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie;
    list.appendChild(li);
  });
});