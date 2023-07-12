
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
        "A0_fixed_1": {
            "type": "geojson",
            "data": json_A0_fixed_1
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
            "id": "lyr_A0_fixed_1_0",
            "type": "fill",
            "source": "A0_fixed_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'A01'], 1.366491], ['<=', ['get', 'A01'], 1.7628]], 0.701, ['all', ['>', ['get', 'A01'], 1.7628], ['<=', ['get', 'A01'], 2.0798]], 0.701, ['all', ['>', ['get', 'A01'], 2.0798], ['<=', ['get', 'A01'], 2.4286]], 0.701, ['all', ['>', ['get', 'A01'], 2.4286], ['<=', ['get', 'A01'], 2.809]], 0.701, ['all', ['>', ['get', 'A01'], 2.809], ['<=', ['get', 'A01'], 3.2053]], 0.701, ['all', ['>', ['get', 'A01'], 3.2053], ['<=', ['get', 'A01'], 3.6016]], 0.701, ['all', ['>', ['get', 'A01'], 3.6016], ['<=', ['get', 'A01'], 4.0296]], 0.701, ['all', ['>', ['get', 'A01'], 4.0296], ['<=', ['get', 'A01'], 4.6161]], 0.701, ['all', ['>', ['get', 'A01'], 4.6161], ['<=', ['get', 'A01'], 5.408686]], 0.701, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'A01'], 1.366491], ['<=', ['get', 'A01'], 1.7628]], '#1a9641', ['all', ['>', ['get', 'A01'], 1.7628], ['<=', ['get', 'A01'], 2.0798]], '#60b856', ['all', ['>', ['get', 'A01'], 2.0798], ['<=', ['get', 'A01'], 2.4286]], '#a6d96a', ['all', ['>', ['get', 'A01'], 2.4286], ['<=', ['get', 'A01'], 2.809]], '#d3ec95', ['all', ['>', ['get', 'A01'], 2.809], ['<=', ['get', 'A01'], 3.2053]], '#ffffc0', ['all', ['>', ['get', 'A01'], 3.2053], ['<=', ['get', 'A01'], 3.6016]], '#fed791', ['all', ['>', ['get', 'A01'], 3.6016], ['<=', ['get', 'A01'], 4.0296]], '#fdae61', ['all', ['>', ['get', 'A01'], 4.0296], ['<=', ['get', 'A01'], 4.6161]], '#ea643f', ['all', ['>', ['get', 'A01'], 4.6161], ['<=', ['get', 'A01'], 5.408686]], '#d7191c', '#ffffff']}
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