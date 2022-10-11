class UserLocation {

    /******************
     * Public Methods *
     ******************/


    /**
     * Getting the current user location.
     * @returns {Object}: {lat, lng} A latitude-longitude object defined mathcing the one used by the Leaflet library.
     */
    static async getCurLoc() {
        let curLoc = new Object();



        function success(pos) { // pos = position
            curLoc.lat = pos.coords.latitude;
            curLoc.lng = pos.coords.longitude;

            return curLoc;
        }


        function err(e) {
            console.error(e);
            console.log('Std Loc. Finally block, UserLocation.getCurLoc()');
            curLoc.lat = 56.20746;
            curLoc.lng = 10.48096;

            return curLoc;
        }

        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => { resolve(success(position)); },
                (e) => { resolve(err(e)); }
            )
        });
    }
}

export { UserLocation };