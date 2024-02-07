const nameFile = document.querySelector("");
const jsonFile = "https://sonozakis.github.io/web-app-from-scratch-2324/docs/info.json";

  fetch(jsonFile) 
    .then((response) => {
      // Check if the response is ok
      if(!response.ok) {
        // If not show error
        throw new Error('Network response was not ok')
    }
    // If it's ok return result from JSON file
    return response.json();
    })
    .then((data) => {
      // Update the <p> in the HTML and show the JSON in the console
      nameFile.innerHTML = data.name;
      console.log(data);
    })

    .catch((error) => {
      // If there is an error during fetching show error
      console.error("There is a problem fetching the JSON file", error);
  });