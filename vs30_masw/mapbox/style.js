
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
        "fix_7823_1": {
            "type": "geojson",
            "data": json_fix_7823_1
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
            "id": "lyr_fix_7823_1_0",
            "type": "fill",
            "source": "fix_7823_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'DN'], 0.0], ['<=', ['get', 'DN'], 65.0]], 0.559, ['all', ['>', ['get', 'DN'], 65.0], ['<=', ['get', 'DN'], 81.0]], 0.559, ['all', ['>', ['get', 'DN'], 81.0], ['<=', ['get', 'DN'], 95.0]], 0.559, ['all', ['>', ['get', 'DN'], 95.0], ['<=', ['get', 'DN'], 104.0]], 0.559, ['all', ['>', ['get', 'DN'], 104.0], ['<=', ['get', 'DN'], 114.0]], 0.559, ['all', ['>', ['get', 'DN'], 114.0], ['<=', ['get', 'DN'], 122.0]], 0.559, ['all', ['>', ['get', 'DN'], 122.0], ['<=', ['get', 'DN'], 129.0]], 0.559, ['all', ['>', ['get', 'DN'], 129.0], ['<=', ['get', 'DN'], 136.0]], 0.559, ['all', ['>', ['get', 'DN'], 136.0], ['<=', ['get', 'DN'], 141.0]], 0.559, ['all', ['>', ['get', 'DN'], 141.0], ['<=', ['get', 'DN'], 146.0]], 0.559, ['all', ['>', ['get', 'DN'], 146.0], ['<=', ['get', 'DN'], 151.0]], 0.559, ['all', ['>', ['get', 'DN'], 151.0], ['<=', ['get', 'DN'], 155.0]], 0.559, ['all', ['>', ['get', 'DN'], 155.0], ['<=', ['get', 'DN'], 160.0]], 0.559, ['all', ['>', ['get', 'DN'], 160.0], ['<=', ['get', 'DN'], 168.0]], 0.559, ['all', ['>', ['get', 'DN'], 168.0], ['<=', ['get', 'DN'], 199.0]], 0.559, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'DN'], 0.0], ['<=', ['get', 'DN'], 65.0]], '#d7191c', ['all', ['>', ['get', 'DN'], 65.0], ['<=', ['get', 'DN'], 81.0]], '#e24430', ['all', ['>', ['get', 'DN'], 81.0], ['<=', ['get', 'DN'], 95.0]], '#ed6e43', ['all', ['>', ['get', 'DN'], 95.0], ['<=', ['get', 'DN'], 104.0]], '#f89957', ['all', ['>', ['get', 'DN'], 104.0], ['<=', ['get', 'DN'], 114.0]], '#fdba6f', ['all', ['>', ['get', 'DN'], 114.0], ['<=', ['get', 'DN'], 122.0]], '#fed18a', ['all', ['>', ['get', 'DN'], 122.0], ['<=', ['get', 'DN'], 129.0]], '#fee8a5', ['all', ['>', ['get', 'DN'], 129.0], ['<=', ['get', 'DN'], 136.0]], '#ffffc0', ['all', ['>', ['get', 'DN'], 136.0], ['<=', ['get', 'DN'], 141.0]], '#e6f4a7', ['all', ['>', ['get', 'DN'], 141.0], ['<=', ['get', 'DN'], 146.0]], '#cce98f', ['all', ['>', ['get', 'DN'], 146.0], ['<=', ['get', 'DN'], 151.0]], '#b3de76', ['all', ['>', ['get', 'DN'], 151.0], ['<=', ['get', 'DN'], 155.0]], '#92cf64', ['all', ['>', ['get', 'DN'], 155.0], ['<=', ['get', 'DN'], 160.0]], '#6abc58', ['all', ['>', ['get', 'DN'], 160.0], ['<=', ['get', 'DN'], 168.0]], '#42a94d', ['all', ['>', ['get', 'DN'], 168.0], ['<=', ['get', 'DN'], 199.0]], '#1a9641', '#ffffff']}
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