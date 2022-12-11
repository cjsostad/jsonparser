var wms_layers = [];

var lyr_CanadianDigitalElevationModelColorShadedRelief_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://maps.geogratis.gc.ca/wms/elevation_en?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "cdem.color-shaded-relief",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Canadian Digital Elevation Model, Color Shaded Relief",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CanadianDigitalElevationModelColorShadedRelief_0, 0]);

lyr_CanadianDigitalElevationModelColorShadedRelief_0.setVisible(true);
var layersList = [lyr_CanadianDigitalElevationModelColorShadedRelief_0];
