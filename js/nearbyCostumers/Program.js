import { LeafletMap } from './LeafletMap.js'

(async function program() {
    let nearbyCostumersMap = new LeafletMap();

    // Setting the map view to the current user location. As well as adding the user to the map.
    await nearbyCostumersMap.setViewToUsrLoc()

    console.log('Watch me making JS OO!');
})();