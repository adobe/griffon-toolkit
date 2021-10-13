import { GenericPlaces } from "./genericPlaces";

export type RequestPlacesEventPayload = {
    ACPExtensionEventData: {
        count: number;
        latitude: number;
        longitude: number;
        requesttype: 'requestgetnearbyplaces';
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent';
}

export type RequestPlacesEvent = GenericPlaces & {
    payload: RequestPlacesEventPayload;
}