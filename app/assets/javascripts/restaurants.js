
// function gmap_show(restaurant) {
//   if ((restaurant.latitude == null) || (restaurant.longitude == null) ) {    // validation check if coordinates are there
//     return 0;
//   }

//   handler = Gmaps.build('Google');    // map init
//   handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
//     markers = handler.addMarkers([    // put marker method
//       {
//         "latitude": restaurant.latitude,    // coordinates from parameter restaurant
//         "longitude": restaurant.longitude,
//         "picture": {    // setup marker icon
//           "url": 'http://www.planet-action.org/img/2009/interieur/icons/orange-dot.png',
//           "width":  32,
//           "height": 32
//         },
//         "infowindow": "<b>" + restaurant.name + "</b> " + restaurant.address + ", " + restaurant.postal_code + " " + restaurant.city
//       }
//     ]);
//     handler.bounds.extendWith(markers);
//     handler.fitMapToBounds();
//     handler.getMap().setZoom(12);    // set the default zoom of the map
//   });
// }

// function gmap_form(restaurant) {
//   handler = Gmaps.build('Google');    // map init
//   handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
//     if (restaurant && restaurant.latitude && restaurant.longitude) {    // statement check - new or edit view
//       markers = handler.addMarkers([    // print existent marker
//         {
//           "latitude": restaurant.latitude,
//           "longitude": restaurant.longitude,
//           "picture": {
//             "url": 'http://www.planet-action.org/img/2009/interieur/icons/orange-dot.png',
//             "width":  32,
//             "height": 32
//           },
//           "infowindow": "<b>" + restaurant.name + "</b> " + restaurant.address + ", " + restaurant.postal_code + " " + restaurant.city
//         }
//       ]);
//       handler.bounds.extendWith(markers);
//       handler.fitMapToBounds();
//       handler.getMap().setZoom(12);
//     }
//     else {    // show the empty map
//       handler.fitMapToBounds();
//       handler.map.centerOn([52.10, 19.30]);
//       handler.getMap().setZoom(6);
//     }
//   });

//   var markerOnMap;

//   function placeMarker(location) {    // simply method for put new marker on map
//     if (markerOnMap) {
//       markerOnMap.setPosition(location);
//     }
//     else {
//       markerOnMap = new google.maps.Marker({
//         position: location,
//         map: handler.getMap()
//       });
//     }
//   }

//   google.maps.event.addListener(handler.getMap(), 'click', function(event) {    // event for click-put marker on map and pass coordinates to hidden fields in form
//     placeMarker(event.latitudelongitude);
//     document.getElementById("map_latitude").value = event.latitudelongitude.latitude();
//     document.getElementById("map_longitude").value = event.latitudelongitude.longitude();
//   });
// }
