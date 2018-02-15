var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_Campsnocurrentmovementactivities_0 = new ol.format.GeoJSON();
var features_Campsnocurrentmovementactivities_0 = format_Campsnocurrentmovementactivities_0.readFeatures(json_Campsnocurrentmovementactivities_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campsnocurrentmovementactivities_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Campsnocurrentmovementactivities_0.addFeatures(features_Campsnocurrentmovementactivities_0);var lyr_Campsnocurrentmovementactivities_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campsnocurrentmovementactivities_0, 
                style: style_Campsnocurrentmovementactivities_0,
                title: '<img src="styles/legend/Campsnocurrentmovementactivities_0.png" /> Camps (no current movement activities)'
            });var format_Campswithmovementactivities_1 = new ol.format.GeoJSON();
var features_Campswithmovementactivities_1 = format_Campswithmovementactivities_1.readFeatures(json_Campswithmovementactivities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campswithmovementactivities_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Campswithmovementactivities_1.addFeatures(features_Campswithmovementactivities_1);var lyr_Campswithmovementactivities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campswithmovementactivities_1, 
                style: style_Campswithmovementactivities_1,
                title: '<img src="styles/legend/Campswithmovementactivities_1.png" /> Camps (with movement activities)'
            });var format_Floodingoutlinehistoricalfeedback_2 = new ol.format.GeoJSON();
var features_Floodingoutlinehistoricalfeedback_2 = format_Floodingoutlinehistoricalfeedback_2.readFeatures(json_Floodingoutlinehistoricalfeedback_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floodingoutlinehistoricalfeedback_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Floodingoutlinehistoricalfeedback_2.addFeatures(features_Floodingoutlinehistoricalfeedback_2);var lyr_Floodingoutlinehistoricalfeedback_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Floodingoutlinehistoricalfeedback_2, 
                style: style_Floodingoutlinehistoricalfeedback_2,
                title: '<img src="styles/legend/Floodingoutlinehistoricalfeedback_2.png" /> Flooding outline (historical feedback)'
            });var format_Floodriskslopesatriskoffailureangle35_3 = new ol.format.GeoJSON();
var features_Floodriskslopesatriskoffailureangle35_3 = format_Floodriskslopesatriskoffailureangle35_3.readFeatures(json_Floodriskslopesatriskoffailureangle35_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Floodriskslopesatriskoffailureangle35_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Floodriskslopesatriskoffailureangle35_3.addFeatures(features_Floodriskslopesatriskoffailureangle35_3);var lyr_Floodriskslopesatriskoffailureangle35_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Floodriskslopesatriskoffailureangle35_3, 
                style: style_Floodriskslopesatriskoffailureangle35_3,
                title: '<img src="styles/legend/Floodriskslopesatriskoffailureangle35_3.png" /> Flood risk - slopes at risk of failure (angle >35°)'
            });

lyr_Campsnocurrentmovementactivities_0.setVisible(true);lyr_Campswithmovementactivities_1.setVisible(true);lyr_Floodingoutlinehistoricalfeedback_2.setVisible(true);lyr_Floodriskslopesatriskoffailureangle35_3.setVisible(true);
var layersList = [baseLayer,lyr_Campsnocurrentmovementactivities_0,lyr_Campswithmovementactivities_1,lyr_Floodingoutlinehistoricalfeedback_2,lyr_Floodriskslopesatriskoffailureangle35_3];
lyr_Campsnocurrentmovementactivities_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CiC_Camp': 'CiC_Camp', 'Camp_ID': 'Camp_ID', 'orig_ogc_f': 'orig_ogc_f', });
lyr_Campswithmovementactivities_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CiC_Camp': 'CiC_Camp', 'Camp_ID': 'Camp_ID', 'orig_ogc_f': 'orig_ogc_f', });
lyr_Floodingoutlinehistoricalfeedback_2.set('fieldAliases', {'DN': 'DN', 'orig_ogc_f': 'orig_ogc_f', });
lyr_Floodriskslopesatriskoffailureangle35_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Campsnocurrentmovementactivities_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'CiC_Camp': 'TextEdit', 'Camp_ID': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_Campswithmovementactivities_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CiC_Camp': 'TextEdit', 'Camp_ID': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_Floodingoutlinehistoricalfeedback_2.set('fieldImages', {'DN': 'TextEdit', 'orig_ogc_f': 'TextEdit', });
lyr_Floodriskslopesatriskoffailureangle35_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Campsnocurrentmovementactivities_0.set('fieldLabels', {'OBJECTID': 'no label', 'CiC_Camp': 'no label', 'Camp_ID': 'no label', 'orig_ogc_f': 'no label', });
lyr_Campswithmovementactivities_1.set('fieldLabels', {'OBJECTID': 'no label', 'CiC_Camp': 'no label', 'Camp_ID': 'no label', 'orig_ogc_f': 'no label', });
lyr_Floodingoutlinehistoricalfeedback_2.set('fieldLabels', {'DN': 'no label', 'orig_ogc_f': 'no label', });
lyr_Floodriskslopesatriskoffailureangle35_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Floodriskslopesatriskoffailureangle35_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});