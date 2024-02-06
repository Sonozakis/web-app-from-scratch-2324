const nameFile = document.querySelector("p");
const jsonFile = "https://sonozakis.github.io/web-app-from-scratch-2324/docs/info.json";

  fetch(jsonFile) 
    .then((response) => {
      if(!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json();
    })
    .then((data) => {
      nameFile.innerHTML = data.name;
      console.log(data);
    })

    .catch((error) => {
      console.error("There is a problem fetching the JSON file", error);
  });