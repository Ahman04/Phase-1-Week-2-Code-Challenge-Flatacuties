document.addEventListener("DOMContentLoaded", () => { // Ensure the DOM is fully loaded
  const list = document.getElementById("characters"); // Animal list
  const img = document.getElementById("animal-image"); // Animal image
  const name = document.getElementById("animal-name"); // Animal name
  const votes = document.getElementById("animal-votes"); // Animal votes
  const voteBtn = document.getElementById("vote-btn"); // Vote button

  let currentAnimal = null; // Track the currently displayed animal

  // Load all animals
  fetch("http://localhost:3000/characters") // Fetch from local server
    .then(res => res.json())  // Parse JSON response
    .then(animals => {  // Process the list of animals
      animals.forEach(animal => { // For each animal
        const li = document.createElement("li");    // Create list item
        li.textContent = animal.name; // Set animal name
        li.onclick = () => showAnimal(animal); // Display animal details on click
        list.appendChild(li); // Add to the list
      }); 
    });

  function showAnimal(animal) { // Display animal details
    currentAnimal = animal; // Update current animal
    img.src = animal.image; // Set image source
    name.textContent = animal.name; // Set name text
    votes.textContent = animal.votes; // Set votes text
  }

  voteBtn.onclick = () => { // Handle vote button click
    if (currentAnimal) { // Ensure an animal is selected
      currentAnimal.votes++; // Increment votes
      votes.textContent = currentAnimal.votes; // Update votes display
       
    }
  };
});
