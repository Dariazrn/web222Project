//Zyrianova Daria
//121782205
//dzyrianova@myseneca.ca
function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  var lat = document.querySelector("#latitude").value;
  var lon = document.querySelector("#longitude").value;
  var wrongLatitude = document.querySelector("#latitudeID");
  var wrongLongitude = document.querySelector("#longitudeID");
  if (wrongLatitude.childNodes.length > 1) {
    wrongLatitude.removeChild(wrongLatitude.lastChild);
  }
  if (wrongLongitude.childNodes.length > 1) {
    wrongLongitude.removeChild(wrongLongitude.lastChild);
  }
  if(lat) {
    if (!isNaN(lat)) {
      var latInput = parseFloat(lat);
      if (latInput >= -90 && latInput <= 90) {
        if(lon) {
          if (!isNaN(lon)) {
            var lonInput = parseFloat(lon);
            if (lonInput >=- 180 && lonInput <= 180) {
              return true;      
            }
            else{
              var message = document.createTextNode(" must be a valid Longitude (-180 to 180)");
              wrongLongitude.appendChild(message);
              return false;
            }
          }
          else{
            var message = document.createTextNode(" must be a valid Longitude (-180 to 180)");
            wrongLongitude.appendChild(message);
            return false;
          }
        }            
      }
      else{
        var message = document.createTextNode(" must be a valid Latitude (-90 to 90)");
        wrongLatitude.appendChild(message);
        return false;
      }
    }
    else{
      var message = document.createTextNode(" must be a valid Latitude (-90 to 90)");
      wrongLatitude.appendChild(message);
      return false;
    }
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
