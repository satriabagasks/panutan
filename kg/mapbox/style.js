
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Kg_overlay_1": {
            "type": "geojson",
            "data": json_Kg_overlay_1
        }
                    ,
        "BatasAdministrasi_2": {
            "type": "geojson",
            "data": json_BatasAdministrasi_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Kg_overlay_1_0",
            "type": "fill",
            "source": "Kg_overlay_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'DN'], 0.0], ['<=', ['get', 'DN'], 1.0]], 0.7, ['all', ['>', ['get', 'DN'], 1.0], ['<=', ['get', 'DN'], 2.0]], 0.7, ['all', ['>', ['get', 'DN'], 2.0], ['<=', ['get', 'DN'], 3.0]], 0.7, ['all', ['>', ['get', 'DN'], 3.0], ['<=', ['get', 'DN'], 4.0]], 0.7, ['all', ['>', ['get', 'DN'], 4.0], ['<=', ['get', 'DN'], 5.0]], 0.7, ['all', ['>', ['get', 'DN'], 5.0], ['<=', ['get', 'DN'], 6.0]], 0.7, ['all', ['>', ['get', 'DN'], 6.0], ['<=', ['get', 'DN'], 6.0]], 0.7, ['all', ['>', ['get', 'DN'], 6.0], ['<=', ['get', 'DN'], 7.0]], 0.7, ['all', ['>', ['get', 'DN'], 7.0], ['<=', ['get', 'DN'], 9.0]], 0.7, ['all', ['>', ['get', 'DN'], 9.0], ['<=', ['get', 'DN'], 10.0]], 0.7, ['all', ['>', ['get', 'DN'], 10.0], ['<=', ['get', 'DN'], 12.0]], 0.7, ['all', ['>', ['get', 'DN'], 12.0], ['<=', ['get', 'DN'], 14.0]], 0.7, ['all', ['>', ['get', 'DN'], 14.0], ['<=', ['get', 'DN'], 22.0]], 0.7, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'DN'], 0.0], ['<=', ['get', 'DN'], 1.0]], '#166915', ['all', ['>', ['get', 'DN'], 1.0], ['<=', ['get', 'DN'], 2.0]], '#259d33', ['all', ['>', ['get', 'DN'], 2.0], ['<=', ['get', 'DN'], 3.0]], '#30b52b', ['all', ['>', ['get', 'DN'], 3.0], ['<=', ['get', 'DN'], 4.0]], '#6ed508', ['all', ['>', ['get', 'DN'], 4.0], ['<=', ['get', 'DN'], 5.0]], '#d0f14b', ['all', ['>', ['get', 'DN'], 5.0], ['<=', ['get', 'DN'], 6.0]], '#f7eb6b', ['all', ['>', ['get', 'DN'], 6.0], ['<=', ['get', 'DN'], 6.0]], '#f4d942', ['all', ['>', ['get', 'DN'], 6.0], ['<=', ['get', 'DN'], 7.0]], '#f5d260', ['all', ['>', ['get', 'DN'], 7.0], ['<=', ['get', 'DN'], 9.0]], '#fa9e4e', ['all', ['>', ['get', 'DN'], 9.0], ['<=', ['get', 'DN'], 10.0]], '#f37b25', ['all', ['>', ['get', 'DN'], 10.0], ['<=', ['get', 'DN'], 12.0]], '#f24510', ['all', ['>', ['get', 'DN'], 12.0], ['<=', ['get', 'DN'], 14.0]], '#d71a1d', ['all', ['>', ['get', 'DN'], 14.0], ['<=', ['get', 'DN'], 22.0]], '#d7191c', '#ffffff']}
        }
,
        {
            "id": "lyr_BatasAdministrasi_2_0",
            "type": "line",
            "source": "BatasAdministrasi_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
],
}