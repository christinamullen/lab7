function getNewCatImage() {
    const url = "https://api.thecatapi.com/v1/images/search";

    // Fetch data from the API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON data
      })
      .then((data) => {
        const imageUrl = data[0].url;

        // Find the catImage element and update its src attribute
        const catImageElement = document.getElementById("catImage");
        catImageElement.src = imageUrl;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  // Find the button element and add a click event listener to call getNewCatImage
  const newImageButton = document.getElementById("newImageButton");
  newImageButton.addEventListener("click", getNewCatImage);

  // Load an initial cat image
  getNewCatImage();

  //lanai
  //20.79124160473819, -156.96275559279405
  //Kings
  //36.63178667648085, -119.46906677912959
  //roosefelt
  //40.75200353277046, -73.957840454472
  //argentina
  //41.8951267231113, 12.477067036339175