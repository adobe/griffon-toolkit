import { MobileEvent } from "./mobileEvent";

/** The payload of a Media Create Tracker Request Event */
export type MediaCreateTrackerRequestPayload = {
    ACPExtensionEventData: {
        /** The unique tracker ID */
        trackerid: string;
        /** Information about the event based on the event type */
        'event.param'?: object;
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.media.requesttracker';
    ACPExtensionEventType: 'com.adobe.eventtype.media';
}

/** Media Create Tracker Request Event */
export type MediaCreateTrackerRequest = MobileEvent & {
    payload: MediaCreateTrackerRequestPayload;
}