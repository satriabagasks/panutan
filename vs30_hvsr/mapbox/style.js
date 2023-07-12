
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
        "overlayfix_1": {
            "type": "geojson",
            "data": json_overlayfix_1
        }
                    ,
        "ADMINISTRASI_LN_25K_2": {
            "type": "geojson",
            "data": json_ADMINISTRASI_LN_25K_2
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
            "id": "lyr_overlayfix_1_0",
            "type": "fill",
            "source": "overlayfix_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'DN'], 0.0], ['<=', ['get', 'DN'], 235.0]], 0.404, ['all', ['>', ['get', 'DN'], 235.0], ['<=', ['get', 'DN'], 248.0]], 0.404, ['all', ['>', ['get', 'DN'], 248.0], ['<=', ['get', 'DN'], 270.0]], 0.404, ['all', ['>', ['get', 'DN'], 270.0], ['<=', ['get', 'DN'], 294.0]], 0.404, ['all', ['>', ['get', 'DN'], 294.0], ['<=', ['get', 'DN'], 322.0]], 0.404, ['all', ['>', ['get', 'DN'], 322.0], ['<=', ['get', 'DN'], 340.0]], 0.404, ['all', ['>', ['get', 'DN'], 340.0], ['<=', ['get', 'DN'], 355.0]], 0.404, ['all', ['>', ['get', 'DN'], 355.0], ['<=', ['get', 'DN'], 365.0]], 0.404, ['all', ['>', ['get', 'DN'], 365.0], ['<=', ['get', 'DN'], 372.0]], 0.404, ['all', ['>', ['get', 'DN'], 372.0], ['<=', ['get', 'DN'], 381.0]], 0.404, ['all', ['>', ['get', 'DN'], 381.0], ['<=', ['get', 'DN'], 390.0]], 0.404, ['all', ['>', ['get', 'DN'], 390.0], ['<=', ['get', 'DN'], 401.0]], 0.404, ['all', ['>', ['get', 'DN'], 401.0], ['<=', ['get', 'DN'], 411.0]], 0.404, ['all', ['>', ['get', 'DN'], 411.0], ['<=', ['get', 'DN'], 427.0]], 0.404, ['all', ['>', ['get', 'DN'], 427.0], ['<=', ['get', 'DN'], 481.0]], 0.404, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'DN'], 0.0], ['<=', ['get', 'DN'], 235.0]], '#d7191c', ['all', ['>', ['get', 'DN'], 235.0], ['<=', ['get', 'DN'], 248.0]], '#e24430', ['all', ['>', ['get', 'DN'], 248.0], ['<=', ['get', 'DN'], 270.0]], '#ed6e43', ['all', ['>', ['get', 'DN'], 270.0], ['<=', ['get', 'DN'], 294.0]], '#f89957', ['all', ['>', ['get', 'DN'], 294.0], ['<=', ['get', 'DN'], 322.0]], '#fdba6f', ['all', ['>', ['get', 'DN'], 322.0], ['<=', ['get', 'DN'], 340.0]], '#fed18a', ['all', ['>', ['get', 'DN'], 340.0], ['<=', ['get', 'DN'], 355.0]], '#fee8a5', ['all', ['>', ['get', 'DN'], 355.0], ['<=', ['get', 'DN'], 365.0]], '#ffffc0', ['all', ['>', ['get', 'DN'], 365.0], ['<=', ['get', 'DN'], 372.0]], '#e6f4a7', ['all', ['>', ['get', 'DN'], 372.0], ['<=', ['get', 'DN'], 381.0]], '#cce98f', ['all', ['>', ['get', 'DN'], 381.0], ['<=', ['get', 'DN'], 390.0]], '#b3de76', ['all', ['>', ['get', 'DN'], 390.0], ['<=', ['get', 'DN'], 401.0]], '#92cf64', ['all', ['>', ['get', 'DN'], 401.0], ['<=', ['get', 'DN'], 411.0]], '#6abc58', ['all', ['>', ['get', 'DN'], 411.0], ['<=', ['get', 'DN'], 427.0]], '#42a94d', ['all', ['>', ['get', 'DN'], 427.0], ['<=', ['get', 'DN'], 481.0]], '#1a9641', '#ffffff']}
        }
,
        {
            "id": "lyr_ADMINISTRASI_LN_25K_2_0",
            "type": "line",
            "source": "ADMINISTRASI_LN_25K_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
],
}