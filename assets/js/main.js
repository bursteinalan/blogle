// Initialize and add the map
let map;
let service;
let infowindow;
const places = ["Dumpling Cafe", "Taiwan Cafe", "Gourmet Dumpling House"]

function initMap() {
  // The location of Boston
  const boston = { lat: 42.36, lng: -71.06 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: boston,
  });
  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  addPlaces()
}

function addPlaces() {
  places.forEach(place => {
    let request = {
      query: place,
      fields: ['name', 'geometry'],
    };
    service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      createMarker(results[0]);
    }
  })
  })
    
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;


  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    console.log("clicked", place.name)
    infowindow.setContent(place.name || "");
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}