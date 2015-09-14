$(document).ready(function(){

  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
    $("#longitude").text(position.coords.longitude);
    $("#latitude").text(position.coords.latitude);
  });
}

getLocation();



insertMap($("#latitude").text(), $("#longitude").text());
 });
