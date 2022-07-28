var map;
var latlng;
var infowindow;

$(document).ready(function () {
  //get data set from the backend in a json structure
  var data = [
    {
      description: 'North-West District,Botswana',
      location: 'Pom Pom Camp',
      latitude: '-19.5839496',
      longitude: '22.8434128',
    },
    {
      description: 'North-West District,Botswana',
      location: "Gunn's Camp",
      latitude: '-19.5273432',
      longitude: '23.1422763',
    },

    {
      description: 'North-West District,Botswana',
      location: 'Xudum Okavango Delta Lodge',
      latitude: '-19.6324421',
      longitude: '22.8989629',
    },
    {
      description: 'North-West District,Botswana',
      location: 'Nxabega Okavango Tented Camp',
      latitude: '-19.4847889',
      longitude: '22.794011',
    },
    {
      description: 'North-West District, Botswana',
      location: ' Xaranna Okavango Delta Camp',
      latitude: '-19.7140699',
      longitude: '22.885103',
    },
  ];
  //if backend servie ready
  // $.ajax({ //library for JS help front-end to talk back-end, without having to reload the page
  //   url: "HelpMapper-backend.php",
  //   async: true,
  //   dataType: 'json', // is a language
  //   success: function (data) {
  //     console.log(data);
  //     ViewCustInGoogleMap(data);
  //   }
  // });
  // console.log(data);
  ViewCustInGoogleMap(data);
});
function ViewCustInGoogleMap(data) {
  var gm = google.maps; //create instance of google map
  //add initial map option
  var mapOptions = {
    center: new google.maps.LatLng(-19.6324421, 22.898962), // Coimbatore = (11.0168445, 76.9558321)
    zoom: 10,
  };
  //bine html tag to show the google map and bind mapoptions
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  //create instance of google information windown
  infowindow = new google.maps.InfoWindow();
  var marker, i;
  var MarkerImg = './assets/images/camp.png';
  var MarkerImg2 =
    'https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png';
  //loop through all the locations and point the mark in the google map
  for (var i = 0; i < data.length; i++) {
    marker = new gm.Marker({
      position: new gm.LatLng(data[i]['latitude'], data[i]['longitude']),
      map: map,
      icon: MarkerImg,
    });

    //add info for popup tooltip
    google.maps.event.addListener(
      marker,
      'click',
      (function (marker, i) {
        return function () {
          infowindow.setContent(data[i]['location'] + data[i]['description']);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}
