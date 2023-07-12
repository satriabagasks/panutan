
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
        "F0fix_1": {
            "type": "geojson",
            "data": json_F0fix_1
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
            "id": "lyr_F0fix_1_0",
            "type": "fill",
            "source": "F0fix_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'F0'], 0.789122], ['<=', ['get', 'F0'], 1.18055]], 0.7, ['all', ['>', ['get', 'F0'], 1.18055], ['<=', ['get', 'F0'], 1.45833]], 0.7, ['all', ['>', ['get', 'F0'], 1.45833], ['<=', ['get', 'F0'], 1.8245]], 0.7, ['all', ['>', ['get', 'F0'], 1.8245], ['<=', ['get', 'F0'], 2.17805]], 0.7, ['all', ['>', ['get', 'F0'], 2.17805], ['<=', ['get', 'F0'], 2.46846]], 0.7, ['all', ['>', ['get', 'F0'], 2.46846], ['<=', ['get', 'F0'], 2.78412]], 0.7, ['all', ['>', ['get', 'F0'], 2.78412], ['<=', ['get', 'F0'], 3.13767]], 0.7, ['all', ['>', ['get', 'F0'], 3.13767], ['<=', ['get', 'F0'], 3.592227]], 0.7, ['all', ['>', ['get', 'F0'], 3.592227], ['<=', ['get', 'F0'], 4.008]], 0.7, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'F0'], 0.789122], ['<=', ['get', 'F0'], 1.18055]], '#d7191c', ['all', ['>', ['get', 'F0'], 1.18055], ['<=', ['get', 'F0'], 1.45833]], '#ea643f', ['all', ['>', ['get', 'F0'], 1.45833], ['<=', ['get', 'F0'], 1.8245]], '#fdae61', ['all', ['>', ['get', 'F0'], 1.8245], ['<=', ['get', 'F0'], 2.17805]], '#fed791', ['all', ['>', ['get', 'F0'], 2.17805], ['<=', ['get', 'F0'], 2.46846]], '#ffffc0', ['all', ['>', ['get', 'F0'], 2.46846], ['<=', ['get', 'F0'], 2.78412]], '#d3ec95', ['all', ['>', ['get', 'F0'], 2.78412], ['<=', ['get', 'F0'], 3.13767]], '#a6d96a', ['all', ['>', ['get', 'F0'], 3.13767], ['<=', ['get', 'F0'], 3.592227]], '#60b856', ['all', ['>', ['get', 'F0'], 3.592227], ['<=', ['get', 'F0'], 4.008]], '#1a9641', '#ffffff']}
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