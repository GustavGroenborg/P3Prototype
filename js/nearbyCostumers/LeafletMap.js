import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { UserLocation } from './UserLocation.js';
import { Waypoint } from './Waypoint.js';
import { Customer } from './Customer.js';

class LeafletMap {

    /***************
     * Constructor *
     ***************/
    /**
     * Constructs an instance of the LeafletMap class.
     * The instance is instantiated with a random ID, made by the uudiv4 library. After the id has been defined and
     * instantiated, a new div element will be added to the body element. When a new element has been added the leaflet
     * map will be instantiated and the appropriate tile layer will be added. Lastly an object, usrLoc, will be
     * defined, with the properties equal to null.
     */
    constructor() {
        // id is added because I cannot be bothered to use getElementById or write an extension.
        this.id = 'id' + uuidv4();
        this.#addDivToBody(this.id);
        this.#setElWidthAndHeight(this.id);
        this.map = new L.map(this.id);
        this.#addTileLayer();
        this.map.setView([56.20746, 10.48096], 7);
        this.usrLoc = {lat: null, lng: null};

        // Used to group the user location, and to make it easy to remove.
        // Note: This way of doing it might be an misinterpretation of the documentation of Leaflet.
        this.usrLocLayerGroup = L.layerGroup();
        this.usrLocLayerGroup.addTo(this.map);

        // Used to group the location of nearby, "Companies."
        this.corpLayerGroup = L.layerGroup();
        this.corpLayerGroup.addTo(this.map);
    }


    /*************
     * Variables *
     *************/

    /*******************
     * Private Methods *
     *******************/

    /**
     * The token is currently not domain protected.
     * @returns {string}: Returns the MapBox token.
     */
    #getMapboxToken() {
        return 'pk.eyJ1IjoiZ3VzdGF2Y3JnIiwiYSI6ImNsOHlldDVvMDA4ZnYzb3BrYmNpeHFjY2oifQ.CT5ug3Z1oqHd7EnWO_gMHw';
    }


    /**
     * Add a tile layer with presets.
     */
    #addTileLayer() {
        L.tileLayer('https://api.mapbox.com/styles/v1/{style_id}/tiles/{tileSize}/{z}/{x}/{y}?access_token={accessToken}',
            {
                attribution: 'Map data &copy; <a href="https://www.geodanmark.dk/home/vejledninger/geofa/">GeoDanmark</a> | Imagery © <a href="https://www.mapbox.com/">Mapbox</a> | &copy <a href="mailto:gustavrisagerus@gmail.com">Gustav C. R. Grønborg</a>',
                maxZoom: 18,
                style_id: 'mapbox/outdoors-v11', //Throws a 404 error, but works anyhow.
                tileSize: 512,
                zoomOffset: -1,
                accessToken: this.#getMapboxToken()

            }).addTo(this.map);
    }


    /**
     * Adds a HTML div element to the body element.
     * @param id: The desired ID of the new div element.
     */
    #addDivToBody(id) {
        if (typeof id !== 'string')
            throw new Error('Input is not string. Input type: ' + typeof id);
        let div = document.createElement('div');

        div.id = id;

        document.querySelector('body').appendChild(div);
    }


    /**
     * Sets the width and the height of an element to 70vw/vh.
     * @param id: element id.
     */
    #setElWidthAndHeight(id) {
        let el;

        if (this.#inpIs(id, 'string')) {
            if (id.indexOf('#') === -1)
                el = document.querySelector('#' + id);
            else
                el = document.querySelector(id);
        }

        el.style.height = '70vh';
        el.style.width = '70vw';
        el.style.margin = 'auto';
    }


    /**
     * Checks if input is of desired type. Throws error if input is not of desired type.
     * @param inp: input.
     * @param type: The desired type as string.
     * @returns {boolean}: True, if input matches type.
     */
    #inpIs(inp, type) {
        if (typeof type !== 'string')
            throw new Error('Type in #inpIs is not string. Type is: ' + type);

        if (typeof inp !== type)
            throw new Error('Type is not ' + type + '. Type is ' + typeof inp);

        return true;
    }


    /**
     * Adds a latlng object to the called instance of the leaflet map.
     * The input is not type validated. This Methods utilises the Waypoint class.
     * @param latlng: latlng object {lat: lng:}
     */
    #addLatlngToMap(latlng) {
        let leafletFeature = Waypoint.leafletCircleMarker(latlng);

        leafletFeature.addTo(this.map);
    }


    /**
     * Adds a latlng to the UsrLayerGroup.
     * The input is not type validated. This Methods utilises the Waypoint class.
     * @param latlng: latlng object {lat: lng:}
     */
    #addLatlngToUsrLayerGroup(latlng) {
        let usrFeature = Waypoint.leafletCircleMarker(latlng);

        this.usrLocLayerGroup.addLayer(usrFeature);
    }



    /******************
     * Public Methods *
     ******************/

    /**
     * Sets the map view to the current user location. If the user location is not available, the map view is set
     * to a standard view of lat: 56.20746, lng: 10.48096, with a zoom level of 14.
     * Also imports the user location on the map as a GeoJson object.
     */
    async setViewToUsrLoc() {
        UserLocation.getCurLoc()
            .then((curLoc) => {
                this.usrLoc.lat = curLoc.lat;
                this.usrLoc.lng = curLoc.lng;

                this.map.setView([this.usrLoc.lat, this.usrLoc.lng], 14);
                this.#addLatlngToUsrLayerGroup(curLoc);
                console.log(curLoc);

                this.addCustomers();
            });

    }


    /**
     * Adds the last stored user location to the called instance of the Leaflet map.
     * This method relies indirectly on the Waypoint class, through its' use of the private method, "#addLatlngToMap."
     */
    addUsrLocToMap() {
        this.#addLatlngToMap(this.usrLoc);
    }


    addCustomers() {
        //Hopefully adding companies.
        for (let i = 0; i < 25; i++) {
            this.corpLayerGroup.addLayer(Customer.createCustomer(this.usrLoc, ('company'+i)));
        }
    }
}

export { LeafletMap };