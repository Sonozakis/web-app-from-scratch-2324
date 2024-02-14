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

// Load data from favorites.json and populate HTML elements
function loadData() {
  // Fetch the JSON data from favorites.json
  fetch('https://sonozakis.github.io/web-app-from-scratch-2324/scripts/favorites.json')
      .then(response => response.json())
      .then(data => {
          // Populate HTML elements with anime data
          document.querySelector('main div article:nth-of-type(1) div img').src = data.anime[0].image;
          document.querySelector('main div article:nth-of-type(1) div section h3').textContent = data.anime[0].name;
          document.querySelector('main div article:nth-of-type(1) div section p:nth-of-type(1)').textContent = `${data.anime[0].year}`;
          document.querySelector('main div article:nth-of-type(1) div section p:nth-of-type(2)').textContent = `${data.anime[0].information}`;

          // Populate HTML elements with game data
          document.querySelector('main div article:nth-of-type(2) div img').src = data.games[0].image;
          document.querySelector('main div article:nth-of-type(2) div section h3').textContent = data.games[0].name;
          document.querySelector('main div article:nth-of-type(2) div section p:nth-of-type(1)').textContent = `${data.games[0].year}`;
          document.querySelector('main div article:nth-of-type(2) div section p:nth-of-type(2)').textContent = `${data.games[0].information}`;

          // Populate HTML elements with music data
          document.querySelector('main div article:nth-of-type(3) div img').src = data.music[0].image;
          document.querySelector('main div article:nth-of-type(3) div section h3').textContent = data.music[0].name;
          document.querySelector('main div article:nth-of-type(3) div section p').textContent = `${data.music[0].information}`;
      })
      .catch(error => {
          console.error('Error loading favorites:', error);
      });
}

// Call the function to load data when the window finishes loading
window.addEventListener('load', loadData);
