const mapMarker =[];
var evList;
var markMe;
var map;

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 30.2747, lng: -97.7404 };
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    // });
}

window.initMap = initMap;

var submitBtn = document.querySelector('#submitMe');
submitBtn.addEventListener('click', zipStorage);

function zipStorage(event) {
  event.preventDefault();
  
  var zip_code = document.getElementById("zip_code").value;
  localStorage.setItem ("Is_zipcode", zip_code);
  
  mapMarkerCreator();
}

let url = 
  "https://api.openchargemap.io/v3/poi?key=4d0b1b45-2674-481a-96b8-a48760d39238/?output=json&boundingbox=(30.513171,-97.936058),(30.121121,-97.567030)&maxresults=500"
  
fetch (url)
.then((response) => response.json())
.then((response) => {
  evList = response;
  // console.log(response);
  // console.log(response.length);
  // console.log(evList[0].AddressInfo.Postcode);
  });

function mapMarkerCreator() {
  var myZip = localStorage.getItem("Is_zipcode");
  
  for (var i=0; i<evList.length; i++) {
    if (myZip === evList[i].AddressInfo.Postcode) {
      var myLat = evList[i].AddressInfo.Latitude;
      var myLong = evList[i].AddressInfo.Longitude;
      var myLatLong = [myLat,myLong];

      mapMarker.push(myLatLong);
    }
    i++;
  }

  if (mapMarker.length>0) {
    map.setCenter({lat: mapMarker[0][0],lng: mapMarker[0][1]});
    for (var j=0; j<mapMarker.length; j++) {
      const markMe = { lat: mapMarker[j][0], lng: mapMarker[j][1]};
      new google.maps.Marker({
        position: markMe,
        map: map,
      });
    }
    mapMarker.length = 0;
  }
}

