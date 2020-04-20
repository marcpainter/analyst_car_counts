mapboxgl.accessToken = 'pk.eyJ1Ijoid2dlcmtlbiIsImEiOiJjanVlMXNvbnQwOWV1NDRzM2djYm01ZTl5In0.45m2Vyg6I1UFlOR9hgRm3A';
var fmap = new mapboxgl.Map({
container: 'fmap',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-98, 38.88],
maxZoom: 5,
minZoom: 1,
zoom: 3
});





// Holds visible airport features for filtering
var airports = [];

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
closeButton: false
});

var filterEl = document.getElementById('feature-filter');
var listingEl = document.getElementById('feature-listing');

function renderListings(features) {
// Clear any existing listings
listingEl.innerHTML = '';
if (features.length) {
features.forEach(function(feature) {
var prop = feature.properties;
var item = document.createElement('a');
item.textContent = prop.name ;
item.addEventListener('mouseover', function() {
// Highlight corresponding feature on the map
popup.setLngLat(feature.geometry.coordinates)
.setText(feature.properties.name )
.addTo(map);
});
listingEl.appendChild(item);
});

// Show the filter input
filterEl.parentNode.style.display = 'block';
} else {
var empty = document.createElement('p');
empty.textContent = 'Drag the map to populate results';
listingEl.appendChild(empty);

// Hide the filter input
//filterEl.parentNode.style.display = 'none';

// remove features filter
//fmap.setFilter('airport', ['has', 'abbrev']);


}
}

function normalize(string) {
return string.trim().toLowerCase();
}

function getUniqueFeatures(array, comparatorProperty) {
var existingFeatureKeys = {};
// Because features come from tiled vector data, feature geometries may be split
// or duplicated across tile boundaries and, as a result, features may appear
// multiple times in query results.
var uniqueFeatures = array.filter(function(el) {
if (existingFeatureKeys[el.properties[comparatorProperty]]) {
return false;
} else {
existingFeatureKeys[el.properties[comparatorProperty]] = true;
return true;
}
});

return uniqueFeatures;
}

fmap.on('load', function() {

fmap.addLayer({
"id": "airport",
"source": {

{
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates":
[40.7605307,-73.9829513]
},
"properties": {
    "icrdn":"4323288",
    "job_index":"5376",
    "fcrdn":"7506",
    "crdbranchnumber":"81074",
    "officestreet1":"745 7TH AVENUE",
    "officestreet2":"",
    "officecity":"NEW YORK",
    "officestate":"NY",
    "officezip":"10019",
    "registeredlocation":"TRUE",
    "bdmainoffice":"FALSE",
    "iamainoffice":"FALSE",
    "addressstartdate":"04/27/2006",
    "addressenddate":"09/22/2008",
    "privateresidence":"FALSE",
    "orig_fromdate":"2006-04-27",
    "corrected_todate":"2008-09-22",
    "located_at_office":"TRUE",
    "zip5":"10019",
    "zipbranch":"7506:10019",
    "bcrdn":"81074",
    "match_bcrdn":"81074",
    "branch":"7506;81074",
    "corrected_fromdate":"2006-04-27",
    "num_records":"1",
    "fromdate":"16918",
    "todate":"17797",
    "s":"4",
    "number":"745",
    "street":"7TH AVENUE",
    "g_lat":"40.7605307",
    "g_lon":"-73.9829513",
    "g_country":"USA",
    "g_state":"New York",
    "g_county":"New York County",
    "g_city":"New York",
    "g_postcode":"10019",
    "g_street":"7th Avenue",
    "g_number":"745",
    "g_confidence":"9",
    "g_formatted":"Times Square, Barclays, 745 7th Avenue, New York, NY 10019, United States of America",
    "g_quality":"7",
    "name":"LEHMAN BROTHERS INC.",
    "marker-color":"#085",
    "marker-symbol":"warehouse" ,
    "marker-size":"medium"
}
}
,
{
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates":
[40.7552631,-73.9742085]
},
"properties": {
    "icrdn":"2919801",
    "job_index":"8192",
    "fcrdn":"18718",
    "crdbranchnumber":"NA",
    "officestreet1":"277 PARK AVENUE",
    "officestreet2":"10TH FLOOR",
    "officecity":"NEW YORK",
    "officestate":"NY",
    "officezip":"10172",
    "registeredlocation":"FALSE",
    "bdmainoffice":"FALSE",
    "iamainoffice":"FALSE",
    "addressstartdate":"05/01/2001",
    "addressenddate":"05/01/2001",
    "privateresidence":"FALSE",
    "orig_fromdate":"2001-05-01",
    "corrected_todate":"2001-05-01",
    "located_at_office":"TRUE",
    "zip5":"10172",
    "zipbranch":"18718:10172",
    "bcrdn":"NA",
    "match_bcrdn":"301504",
    "branch":"18718;301504",
    "corrected_fromdate":"2001-05-01",
    "num_records":"2",
    "fromdate":"15096",
    "todate":"17806",
    "s":"4",
    "number":"277",
    "street":"PARK AVENUE",
    "g_lat":"40.7552631",
    "g_lon":"-73.9742085",
    "g_country":"USA",
    "g_state":"New York",
    "g_county":"New York County",
    "g_city":"New York",
    "g_postcode":"10037",
    "g_street":"Park Avenue",
    "g_number":"277",
    "g_confidence":"10",
    "g_formatted":"277 Park Avenue, New York, NY 10037, United States of America",
    "g_quality":"7",
    "name":"CHASE H&Q",
    "marker-color":"#085",
    "marker-symbol":"warehouse" ,
    "marker-size":"medium"
}
});






fmap.on('moveend', function() {
var features = fmap.queryRenderedFeatures({layers: ['airport']});

if (features) {
var uniqueFeatures = getUniqueFeatures(features, "name");
// Populate features for the listing overlay.
renderListings(uniqueFeatures);

// Clear the input container
filterEl.value = '';

// Store the current features in sn `airports` variable to
// later use for filtering on `keyup`.
airports = uniqueFeatures;
}
});

fmap.on('mousemove', 'airport', function(e) {
// Change the cursor style as a UI indicator.
fmap.getCanvas().style.cursor = 'pointer';

// Populate the popup and set its coordinates based on the feature.
var feature = e.features[0];
popup.setLngLat(feature.geometry.coordinates)
.setText(feature.properties.name
.addTo(map);
});

fmap.on('mouseleave', 'airport', function() {
fmap.getCanvas().style.cursor = '';
popup.remove();
});

filterEl.addEventListener('keyup', function(e) {
var value = normalize(e.target.value);

// Filter visible features that don't match the input value.
var filtered = airports.filter(function(feature) {
var name = normalize(feature.properties.name);
return name.indexOf(value) > -1 || code.indexOf(value) > -1;
});

// Populate the sidebar with filtered results
renderListings(filtered);

// Set the filter to populate features into the layer.
fmap.setFilter('airport', ['match', ['get', 'name'], filtered.map(function(feature) {
return feature.properties.abbrev;
}), true, false]);
});

// Call this function on initialization
// passing an empty array to render an empty state
renderListings([]);
});