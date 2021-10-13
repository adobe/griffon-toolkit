import { MobileEvent } from "./mobileEvent";

/** The payload of a Generic Track Event */
export type GenericTrackPayload = {
    ACPExtensionEventData: {
        /** Context data sent with the track call */
        contextdata: object;
    }
    ACPExtensionEventSource?: 'com.adobe.eventsource.requestcontent';
    ACPExtensionEventType?: 'com.adobe.eventtype.generic.track';
}

/** Generic Track Event */
export type GenericTrack = MobileEvent & {
    payload: GenericTrackPayload;
}