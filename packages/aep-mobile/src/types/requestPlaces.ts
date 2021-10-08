import { RootGriffonEvent } from "./rootGriffonEvent";

export interface RequestPlacesEventPayload {
    ACPExtensionEventData: {
        count: number;
        latitude: number;
        longitude: number;
        requesttype: 'requestgetnearbyplaces';
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent';
}

export interface RequestPlacesEvent extends RootGriffonEvent {
    payload: RequestPlacesEventPayload;
}