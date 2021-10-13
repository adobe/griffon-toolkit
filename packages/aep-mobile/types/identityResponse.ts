import { MobileEvent } from "./mobileEvent";

/** The payload of a Identity Response event */
export type IdentityResponsePayload = {
    ACPExtensionEventData: {
        /** The unique ID assigned by Adobe */
        mid: string;
        /** The token used to send push messages */
        pushidentifier: string;
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.responseidentity';
    ACPExtensionEventType: 'com.adobe.eventtype.identity';
}

/** Identity Response */
export type IdentityResponse = MobileEvent & {
    payload: IdentityResponsePayload;
}