function hello()
{
    console.log('Welcome to Gist 7132')  //alert('Welcome to GIST 7132')
}

function updateDiv()
{
    //=================================================
    //Set the message displayed in the div section to the
    //users message
    //===================================================
    console.log('Inside updateDive')
    var userMsg = document.getElementById("userMessage")
    var divMsg = document.getElementById("divMessage")

    divMsg.innerHTML = userMsg.value //Chris' notes only: inner is for text between the tags value out of self closing form control use value
}
function loadList(){

    //===================================================================
    // Get the input controls
    //===================================================================

    console.log('Inside loadList')
    var dataAsJSON =document.getElementById("listDataAsJSON").value
    var dataAsJS = JSON.parse(dataAsJSON)
    var parkSelect = document.getElementById("parkList")


    //===================================================================
    // Add the data to the list
    //===================================================================

    for (row of dataAsJS)
    {
        var option = document.createElement("option")
        option.text = row.text
        option.value = row.value

        parkSelect.options.add(option)
    }

} // end of load list

function zoomMap2Park(longLat, map)
{
    //===================================================================
    // Send in the map, zoom the map and correct the projection to wgs84
    //===================================================================

    console.log(longLat)

    var fromProj = ol.proj.get('EPSG:4326');
    console.log(fromProj);

    var toProj = map.getView().getProjection();
    console.log(toProj);

    //=====================================================================
    // Split the lat long at the colon - long is part 0 and lat is part 1
    //=====================================================================

    var strPoint = longLat.split(":");


    //=====================================================================
    // The below line of code will convert the string version of the point
    // into a number version of the point.
    //=====================================================================

    var point = [Number(strPoint[0]), Number(strPoint[1])];

    // Step 09 - This function will perform the transformation
    // var ProjPoint = ol.proj.addCoordinateTransforms('EPSG:4326', 'EPSG:3005')
    var newProjectedPoint = ol.proj.transform(point, fromProj, toProj)
    console.log(`Original Point: ${point}`)
    console.log(`New Point: ${newProjectedPoint}`)

    map.getView().setCenter(point)

}

function initMap()
{
    //===================================================================
    // initialize the QGIS2web map
    //===================================================================
    console.log("inside initMap")
    map = new ol.Map({
        controls: ol.control.defaults({attribution:false}),
        target: document.getElementById('map'),
        renderer: 'canvas',
        layers: layersList,
        view: new ol.View({
            maxZoom: 28, minZoom: 1
        })
    });

    map.getView().fit([-13727073.265241, 6286764.319672, -13628821.913684, 6368487.875113], map.getSize());
}