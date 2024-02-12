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
const about = document.querySelector('main article:nth-of-type(1)');
const showFavs = document.querySelector('header section ul li:nth-of-type(2) a');
const favs = document.querySelector('main article:nth-of-type(2)');
const showSources = document.querySelector('header section ul li:nth-of-type(3) a');
const sources = document.querySelector('main article:nth-of-type(3)');
    
// Event listener that opens article on click
document.addEventListener('click', function(event) {
  if (event.target === showAbout) {
    // If user clicks link
    event.preventDefault();
    about.classList.add('show'); // Adds the 'show' class
  } else if (event.target.nodeName === 'BUTTON') {
    // If user clicks on a button
    about.classList.remove('show'); // Removes the 'show' class from about
  }
});

document.addEventListener('click', function(event) {
  if (event.target === showFavs) {
    event.preventDefault();
    favs.classList.add('show'); 
  } else if (event.target.nodeName === 'BUTTON') {
    favs.classList.remove('show'); 
  }
});

document.addEventListener('click', function(event) {
  if (event.target === showSources) {
    event.preventDefault();
    sources.classList.add('show'); 
  } else if (event.target.nodeName === 'BUTTON') {
    sources.classList.remove('show'); 
  }
});




