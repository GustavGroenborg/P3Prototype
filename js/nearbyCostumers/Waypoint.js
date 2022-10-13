class Waypoint {
    /**
     * Constructs an instance of the Waypoint class.
     * The instance is initiated with a GeoJSON property, that contains the properties formulated by the W3C convention,
     * or some other convention; to be honest, I cannot really which convention it follows, but it does follow the
     * convention made by the guys that made the GeoJSON standard.
     * @param latlng: Latlng object. The input is not type-validated.
     */
    constructor(latlng) {
        this.geoJSON = {
            'type': 'Feature',
            'properties': {
                'name': 'userLocation'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [latlng.lng, latlng.lat]
            }
        }

        this.#addLeafletProperties();
    }


    /**
     * Adds the necessary properties required by Leaflet.
     * These properties make it easier to make it work with GeoJSON waypoints in Leaflet.
     * Note: This private method has been made redundant.
     * This could be done easier, with just a class extension to the leaflet class, that just fetches the GeoJSON
     * property from the Leaflet property.
     */
    #addLeafletProperties() {
        this.Leaflet = L.geoJSON(this.geoJSON, {
            pointToLayer: function (feature, latlng) {
                let marker = L.circleMarker(latlng, {
                    radius: 7,
                    fillColor: "#0078ff",
                    color: "#0d5bb2",
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.8

                });

                return marker;
            }
        });
    }


    /**
     * Takes a latlng object and returns a GeoJSON object.
     * No of the inputs are validated.
     * @param latLng: latlng object.
     * @param name: GeoJSON name, if not specified will be, "Waypoint."
     * @param geoJSONType: GeoJSON type, if not specified will be, "Feature."
     * @returns {{geometry: {coordinates: (number|*)[], type: string}, type: string, properties: {name: string}}}: A GeoJSON object.
     */
    static #latLngToGeoJSON(latLng, name = 'Waypoint', geoJSONType = 'Feature') {
       return {
           'type': geoJSONType,
           'properties': {
               'name': name
           },
           'geometry': {
               'type': 'Point',
               'coordinates': [latLng.lng, latLng.lat]
           }
       };
    }


    /**
     * Returns a Leaflet circle marker, based on a latlng object.
     * A GeoJSON object will be generated with type, "Feature," and name, "CircleMarker."
     * @param latlng: latlng object {lat: lng:}
     */
    static leafletCircleMarker(latlng) {
        return L.geoJSON(
            this.#latLngToGeoJSON(latlng, 'CircleMarker'),
            {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, {
                        radius: 7,
                        fillColor: "#0078ff",
                        color: "#0d5bb2",
                        weight: 3,
                        opacity: 1,
                        fillOpacity: 0.8
                    })
                }
            }
        );
    }
}

export { Waypoint };