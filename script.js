
//array for list of movies 
const movies = [
  "Iron Man",
  "Captain America",
  "The Avengers"
];

//Grab elements from HTML 
const button = document.getElementById("showBtn");
const list = document.getElementById("movieList");


//Click Event for the button element
button.addEventListener("click", () => {
    //Clears list from any duplicates happening by setting to an empty string
  list.innerHTML = "";
  //Create the list item by going through the movies array in the loop
  movies.forEach(movieItem => {
    //create list item element
    const li = document.createElement("li");
    //set the movie item to the text content 
    li.textContent = movieItem;
    //add the movieItems to the list 
    list.appendChild(li);
  });
});