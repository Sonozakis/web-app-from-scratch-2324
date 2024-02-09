// const nameFile = document.querySelector("");
// const jsonFile = "https://sonozakis.github.io/web-app-from-scratch-2324/docs/scripts/info.json";

//   fetch(jsonFile) 
//     .then((response) => {
//       // Check if the response is ok
//       if(!response.ok) {
//         // If not show error
//         throw new Error('Network response was not ok')
//     }
//     // If it's ok return result from JSON file
//     return response.json();
//     })
//     .then((data) => {
//       // Update the <p> in the HTML and show the JSON in the console
//       nameFile.innerHTML = data.name;
//       console.log(data);
//     })

//     .catch((error) => {
//       // If there is an error during fetching show error
//       console.error("There is a problem fetching the JSON file", error);
//   });


const showAbout = document.querySelector('header section ul li:nth-of-type(1) a');
const about = document.querySelector('main article');
    
// Event listener that opens article on click
document.addEventListener('click', function(event) {
  if (event.target === showAbout) {
    // If user clicks link
    event.preventDefault();
    about.classList.add('show'); // Adds the 'show' class
  } else if (event.target = getComputedStyle(about, '::after')) {
    // If user clicks on the close button 
    about.classList.remove('show'); // Removes the 'show' class
  }
});