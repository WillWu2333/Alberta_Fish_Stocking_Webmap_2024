var wms_layers = [];


        var lyr_OtherStatesandProvinces_0 = new ol.layer.Tile({
            'title': 'Other States and Provinces',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Alberta_1 = new ol.format.GeoJSON();
var features_Alberta_1 = format_Alberta_1.readFeatures(json_Alberta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alberta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_1.addFeatures(features_Alberta_1);
var lyr_Alberta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_1, 
                style: style_Alberta_1,
                popuplayertitle: "Alberta",
                interactive: true,
                title: '<img src="styles/legend/Alberta_1.png" /> Alberta'
            });
var format_AlbertaWaterBodies_2 = new ol.format.GeoJSON();
var features_AlbertaWaterBodies_2 = format_AlbertaWaterBodies_2.readFeatures(json_AlbertaWaterBodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaWaterBodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaWaterBodies_2.addFeatures(features_AlbertaWaterBodies_2);
var lyr_AlbertaWaterBodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaWaterBodies_2, 
                style: style_AlbertaWaterBodies_2,
                popuplayertitle: "Alberta Water Bodies",
                interactive: false,
                title: '<img src="styles/legend/AlbertaWaterBodies_2.png" /> Alberta Water Bodies'
            });
var format_FishStockingPoints_3 = new ol.format.GeoJSON();
var features_FishStockingPoints_3 = format_FishStockingPoints_3.readFeatures(json_FishStockingPoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_3.addFeatures(features_FishStockingPoints_3);
var lyr_FishStockingPoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_3, 
                style: style_FishStockingPoints_3,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_3_0.png" /> 0 - 2550<br />\
    <img src="styles/legend/FishStockingPoints_3_1.png" /> 2550 - 8120<br />\
    <img src="styles/legend/FishStockingPoints_3_2.png" /> 8120 - 20000<br />\
    <img src="styles/legend/FishStockingPoints_3_3.png" /> 20000 - 40000<br />\
    <img src="styles/legend/FishStockingPoints_3_4.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStockingPoints_3_5.png" /> 110000 - 1613075<br />'
        });

lyr_OtherStatesandProvinces_0.setVisible(true);lyr_Alberta_1.setVisible(true);lyr_AlbertaWaterBodies_2.setVisible(true);lyr_FishStockingPoints_3.setVisible(true);
var layersList = [lyr_OtherStatesandProvinces_0,lyr_Alberta_1,lyr_AlbertaWaterBodies_2,lyr_FishStockingPoints_3];
lyr_Alberta_1.set('fieldAliases', {'fid': 'fid', 'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaWaterBodies_2.set('fieldAliases', {'fid': 'fid', 'HYDROUID': 'HYDROUID', 'NAME': 'Waterbody Name', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStockingPoints_3.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'Waterbody', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'Species', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Author': 'Author', 'Stocking Number': 'Stocking Number', });
lyr_Alberta_1.set('fieldImages', {'fid': 'Hidden', 'PRUID': 'Hidden', 'DGUID': 'Hidden', 'PRNAME': 'Hidden', 'PRENAME': 'Hidden', 'PRFNAME': 'Hidden', 'PREABBR': 'Hidden', 'PRFABBR': 'Hidden', 'LANDAREA': 'Hidden', });
lyr_AlbertaWaterBodies_2.set('fieldImages', {'fid': 'Hidden', 'HYDROUID': 'Hidden', 'NAME': 'TextEdit', 'RANK': 'Hidden', 'PRUID': 'Hidden', });
lyr_FishStockingPoints_3.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'Hidden', 'STOCKING N': 'Hidden', 'PLANNED ST': 'TextEdit', 'Author': 'TextEdit', 'Stocking Number': 'TextEdit', });
lyr_Alberta_1.set('fieldLabels', {});
lyr_AlbertaWaterBodies_2.set('fieldLabels', {'NAME': 'no label', });
lyr_FishStockingPoints_3.set('fieldLabels', {'DISTRICT': 'inline label - always visible', 'WATERBODY': 'inline label - always visible', 'SPECIES': 'inline label - always visible', 'GENOTYPE': 'inline label - always visible', 'PLANNED ST': 'inline label - always visible', 'Author': 'header label - always visible', 'Stocking Number': 'inline label - always visible', });
lyr_FishStockingPoints_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});