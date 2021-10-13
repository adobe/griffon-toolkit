import { MobileEvent } from "./mobileEvent";

/** The payload of a Generic Places Event */
export type GenericPlacesPayload = {
    ACPExtensionEventType: 'com.adobe.eventtype.places';
}

/** Generic Places Event */
export type GenericPlaces = MobileEvent & {
    payload: GenericPlacesPayload;
}