
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
        "overlay_tdom_1": {
            "type": "geojson",
            "data": json_overlay_tdom_1
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
            "id": "lyr_overlay_tdom_1_0",
            "type": "fill",
            "source": "overlay_tdom_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Tdom'], 0.669622], ['<=', ['get', 'Tdom'], 0.79893]], 0.703, ['all', ['>', ['get', 'Tdom'], 0.79893], ['<=', ['get', 'Tdom'], 0.87301]], 0.703, ['all', ['>', ['get', 'Tdom'], 0.87301], ['<=', ['get', 'Tdom'], 0.9263]], 0.703, ['all', ['>', ['get', 'Tdom'], 0.9263], ['<=', ['get', 'Tdom'], 0.97017]], 0.703, ['all', ['>', ['get', 'Tdom'], 0.97017], ['<=', ['get', 'Tdom'], 1.01776]], 0.703, ['all', ['>', ['get', 'Tdom'], 1.01776], ['<=', ['get', 'Tdom'], 1.08885]], 0.703, ['all', ['>', ['get', 'Tdom'], 1.08885], ['<=', ['get', 'Tdom'], 1.17534]], 0.703, ['all', ['>', ['get', 'Tdom'], 1.17534], ['<=', ['get', 'Tdom'], 1.26367]], 0.703, ['all', ['>', ['get', 'Tdom'], 1.26367], ['<=', ['get', 'Tdom'], 1.405249]], 0.703, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Tdom'], 0.669622], ['<=', ['get', 'Tdom'], 0.79893]], '#1a9641', ['all', ['>', ['get', 'Tdom'], 0.79893], ['<=', ['get', 'Tdom'], 0.87301]], '#60b856', ['all', ['>', ['get', 'Tdom'], 0.87301], ['<=', ['get', 'Tdom'], 0.9263]], '#a6d96a', ['all', ['>', ['get', 'Tdom'], 0.9263], ['<=', ['get', 'Tdom'], 0.97017]], '#d3ec95', ['all', ['>', ['get', 'Tdom'], 0.97017], ['<=', ['get', 'Tdom'], 1.01776]], '#fffc69', ['all', ['>', ['get', 'Tdom'], 1.01776], ['<=', ['get', 'Tdom'], 1.08885]], '#fed791', ['all', ['>', ['get', 'Tdom'], 1.08885], ['<=', ['get', 'Tdom'], 1.17534]], '#fdae61', ['all', ['>', ['get', 'Tdom'], 1.17534], ['<=', ['get', 'Tdom'], 1.26367]], '#ea523e', ['all', ['>', ['get', 'Tdom'], 1.26367], ['<=', ['get', 'Tdom'], 1.405249]], '#d7191c', '#ffffff']}
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