// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 30.2747, lng: -97.7404 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

  let url = 
  "https://api.openchargemap.io/v3/poi?key=4d0b1b45-2674-481a-96b8-a48760d39238/?output=json&latitude=(30.513171,-97.936058),(30.121121,-97567030)"
  
  fetch (url).then(function(response){
   console.log(response.json());
  });
  //   var apiKey = "4d0b1b45-2674-481a-96b8-a48760d39238"
  //   curl --request GET \
  //   url 'https://api.openchargemap.io/v3/referencedata?key=' \
  //   header 'Content-Type: application/json