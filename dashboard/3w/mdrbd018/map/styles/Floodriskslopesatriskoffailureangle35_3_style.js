var size = 0;
var placement = 'point';

    var fill_Floodriskslopesatriskoffailureangle35_3 = new ol.style.Fill();
var style_Floodriskslopesatriskoffailureangle35_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        
        fill: fill_Floodriskslopesatriskoffailureangle35_3,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        
        fill: fill_Floodriskslopesatriskoffailureangle35_3,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};

    fill_Floodriskslopesatriskoffailureangle35_3.setColor(stripe(0.26, 3.0, 225.0, '#e3ff1c'));