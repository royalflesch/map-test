var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_stationen_1 = new ol.format.GeoJSON();
var features_stationen_1 = format_stationen_1.readFeatures(json_stationen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stationen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stationen_1.addFeatures(features_stationen_1);
var lyr_stationen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stationen_1, 
                style: style_stationen_1,
                interactive: true,
                title: '<img src="styles/legend/stationen_1.png" /> stationen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_stationen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_stationen_1];
lyr_stationen_1.set('fieldAliases', {'standort': 'standort', 'anzahl_ladepunkte': 'anzahl_ladepunkte', 'ladesaeule_status': 'ladesaeule_status', 'adresse': 'adresse', 'koordinaten': 'koordinaten', 'typ': 'typ', 'ladepunkt': 'ladepunkt', 'stecker': 'stecker', 'status': 'status', 'authmethod_1': 'authmethod_1', 'authmethod_2': 'authmethod_2', });
lyr_stationen_1.set('fieldImages', {'standort': '', 'anzahl_ladepunkte': '', 'ladesaeule_status': '', 'adresse': '', 'koordinaten': '', 'typ': '', 'ladepunkt': '', 'stecker': '', 'status': '', 'authmethod_1': '', 'authmethod_2': '', });
lyr_stationen_1.set('fieldLabels', {'standort': 'no label', 'anzahl_ladepunkte': 'no label', 'ladesaeule_status': 'no label', 'adresse': 'no label', 'koordinaten': 'no label', 'typ': 'no label', 'ladepunkt': 'no label', 'stecker': 'no label', 'status': 'no label', 'authmethod_1': 'no label', 'authmethod_2': 'no label', });
lyr_stationen_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});