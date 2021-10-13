import { GenericPlaces } from "./genericPlaces"
import { POI } from "./placesEntry"

/** The payload of a Receive Places Event */
export type ReceivePlacesPayload = {
    ACPExtensionEventData: {
        /** The resulting POIs */
        nearbypois: POI[];
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent';
}

/** Receive Places Event */
export type ReceivePlaces = GenericPlaces & {
    payload: ReceivePlacesPayload;
}