import { GenericPlaces } from "./genericPlaces";
import { POI } from "./placesEntry";

/** The payload of a Places Exit Event */
export type PlacesExitPayload = {
    ACPExtensionEventData: {
        /** The POI that the user exited */
        triggeringregion: POI;
        /** The type of action that took place. In this case it is exit */
        regioneventtype: 'exit';
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent';
}

/** Places Exit Event */
export type PlacesExit = GenericPlaces & {
    payload: PlacesExitPayload;
}