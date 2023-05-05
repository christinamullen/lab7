function getNewCatImage() {
    const url = "https://api.thecatapi.com/v1/images/search";

    //fetch the data
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); //Parses JSON data
      })
      .then((data) => {
        const imageUrl = data[0].url;

        const catImageElement = document.getElementById("catImage");
        catImageElement.src = imageUrl;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
//button for new cat img
  const newImageButton = document.getElementById("newImageButton");
  newImageButton.addEventListener("click", getNewCatImage);

  //loal ini cat image
  getNewCatImage();

  const map = L.map('map',{scrollWheelZoom:false}).setView([20.79124160473819, -156.96275559279405], 3.5);

//define the various maptiles
const basemaps = { 
  StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
  ,Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'TOPO-WMS'})
  
  ,Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'})
  
  ,Stamen_Watercolor: L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
  
  ,Esri_WorldImagery: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'})
  
  ,MapTiler_Streets_Hi_Res: L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=GFjeSdAB44Lvg8qhT4cR', {attribution: 'Tiles &copy; MapTiler &mdash; Source: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
};

  //lanai: 20.79124160473819, -156.96275559279405
  //Kings: 36.63178667648085, -119.46906677912959
  //roosevelt: 40.75200353277046, -73.957840454472
  //torre: 41.8951267231113, 12.477067036339175

  
  //array of coordinates
  const locations = {
    lanai: [20.79124160473819, -156.96275559279405],
    kings: [36.63178667648085, -119.46906677912959],
    torre: [41.8951267231113, 12.477067036339175],
    roosevelt: [40.75200353277046, -73.957840454472],
  };

  //show map location
  function showLocation(coordinates) {
    map.setView(coordinates, 13);
  }

  //button listeners
  document.getElementById("lanai").addEventListener("click", () => showLocation(locations.lanai));
  document.getElementById("kings").addEventListener("click", () => showLocation(locations.kings));
  document.getElementById("torre").addEventListener("click", () => showLocation(locations.torre));
  document.getElementById("roosevelt").addEventListener("click", () => showLocation(locations.roosevelt));

