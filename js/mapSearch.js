function addResult(result, i) {
    var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
    var results = document.getElementById('results');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    //var markerIcon = MARKER_PATH + markerLetter + '.png';
    var markerIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

    var tr = document.createElement('tr');
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    tr.onclick = function () {
        google.maps.event.trigger(markers[i], 'click');
    };

    var iconTd = document.createElement('td');
    var nameTd = document.createElement('td');
    var buttonTd = document.createElement('td');
    var icon = document.createElement('img');
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Info";
    btn.id = i;
    btn.onclick = function () {
        window.location.href = "Search.html?facility_id=" + result.facility_id + "&jurisdiction_code=" + result.jurisdiction_code + "&jurisdiction_facility_id=" + result.jurisdiction_facility_id + "&registered_business_name=" + result.registered_business_name + "&facility_name=" + result.facility_name + "&street_address=" + result.street_address + "&suburb=" + result.suburb + "&postcode=" + result.postcode + "&primary_anzsic_class_code=" + result.primary_anzsic_class_code + "&primary_anzsic_class_name=" + result.primary_anzsic_class_name + "&main_activities=" + result.main_activities + "&reports=" + result.reports;
    };
    icon.src = markerIcon;
    icon.setAttribute('class', 'placeIcon');
    icon.setAttribute('className', 'placeIcon');
    var name = document.createTextNode(result.facility_name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    buttonTd.appendChild(btn);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    tr.appendChild(buttonTd);
    results.appendChild(tr);

}

function clearResults() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}


function initMap() {

    var melbourne = new google.maps.LatLng(-37.809954, 144.962886);

    var infowindow = new google.maps.InfoWindow({});

    var map = new google.maps.Map(document.getElementById('map'), {
        center: melbourne,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
    });
}

// Data base Fetch
const url = 'https://raw.githubusercontent.com/balajimohan28/justnowastesample/master/csvjson.json';
var latitude;
var longitude;
fetch(url)
    .then(res => res.json())
    .then(function (data) {

        var currentLocation = window.location;

        var url = new URL(currentLocation);
        var mySuburb = url.searchParams.get("mySuburb");


        var melbourne = new google.maps.LatLng(-37.809954, 144.962886);
        var mapOptions = {
            zoom: 10,
            center: melbourne
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var data_filter = data.filter(element => element.suburb.toLowerCase() == mySuburb.toLowerCase())

        for (var p = 0; p < data_filter.length; p++) {

            addResult(data_filter[p], p);

            var contents = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h5 id="firstHeading" class="firstHeading" style="color:black;">' + '<b>Company Name:</b> ' + data_filter[p].facility_name + '</h5>' +
                '<div id="bodyContent">' +
                '</div>' +
                '</div>';

            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(data_filter[p].latitude, data_filter[p].longitude),
                info: contents
            });

            var infowindow3 = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'mouseover', function () {
                infowindow3.setContent(this.info);
                infowindow3.open(map, this);
            });

            google.maps.event.addListener(marker, 'mouseout', function () {
                infowindow3.close();
            });
        }
        marker.setMap(map);

    })
    .catch(function (e) {
        console.log("Error:", e);
    });
