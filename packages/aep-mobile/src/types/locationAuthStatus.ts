import { GenericPlaces } from "./genericPlaces";

/** The payload of a Location Auth Status event */
export type LocationAuthStatusPayload = {
    ACPExtensionEventData: {
        /** The response from the allow location popup in the app */
        authstatus: string;
        /** The type of request we are making */
        requesttype: 'requestsetauthorizationstatus';
    }
    ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent';
}

/** Location Auth Status */
export type LocationAuthStatus = GenericPlaces & {
    payload: LocationAuthStatusPayload;
}