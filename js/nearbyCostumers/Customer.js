/**
 * This class just constructs a waypoint, gives it a red colour, and adds it, at a random location, within a given
 * distance to the inputted location.
 */
class Customer {

    /******************
     * Public Methods *
     ******************/

    /**
     * This is a wannabe constructor.
     * None of the input parameters are input validated.
     * @param latlng: Latlng object {lat: lng:}
     * @param customerName: The name of the customer.
     * @returns {*}: A Leaflet object.
     */
    static createCustomer(inpLatlng,customerName) {
        let latlng = this.#randomLatlngNearInp(inpLatlng);
        return L.geoJSON(
            Customer.latlngToGeoJSON(latlng, customerName),
            {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, Customer.circleMarkerOptions());
                },

                onEachFeature: Customer.onEachFeature
            }
        );
    }


    /**
     * Converts latlng to GeoJSON.
     * Ideally this should only be done in the LeafletMap class, but due to time constraints,
     * I have utilised the duct-tape to make it work as fast as possible.
     * This input is not type-validated.
     * @param latlng: latlng object {lat: lng:}
     * @param customerName: string, defaults to, "nearbyCustomer"
     */
    static latlngToGeoJSON(latlng, customerName = 'nearbyCustomer') {
        return {
            'type': 'Feature',
                'properties': {
                'name': customerName,
                'popupContent': 'This customer is within 30km of your location.'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [latlng.lng, latlng.lat]
            }
        };
    }


    /**
     * Returns the necessary options for a red Leaflet Circle Marker.
     */
    static circleMarkerOptions() {
        return {
            radius: 7,
            fillColor: "#ef0a0a",
            color: "#cc0000",
            weight: 3,
            opacity: 1,
            fillOpacity: 0.8
        };
    }


    /**
     * Adding a popup to a Leaflet feature.
     * @param feature: Self-explanatory in the context.
     * @param layer: Self-explanatory in the context.
     */
    static addPopup(feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent, { 'maxHeight': 100 });
        }
    }


    /**
     * Applies the addPopup function, to each feature in a layer.
     * @param feature: Self-explanatory in the context.
     * @param layer: Self-explanatory in the context.
     */
    static onEachFeature(feature, layer) {
        Customer.addPopup(feature, layer);
    }


    /*******************
     * Private Methods *
     *******************/

    static #randomLatlngNearInp(latlng) {
        let inp = {lat: latlng.lat, lng: latlng.lng};

        function newNum(num) {
            return (Math.random() * (0.25 - (-0.25)) + (-0.25)) + num;
        }

        return {lat: newNum(inp.lat), lng: newNum(inp.lng)};
    }

}

export { Customer };