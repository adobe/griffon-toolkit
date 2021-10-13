import { MobileEvent } from "./mobileEvent"

/** The payload of a Track Media Event */
export type TrackMediaPayload = {
    ACPExtensionEventData: {
        /** The unique tracker ID */
        trackerid?: string;
        /** The unique session ID */
        sessionid?: string;
        /** The event name */
        'event.name': string;
        /** Information about the event based on the event type */
        'event.param'?: object;
        /** An object with the standard and custom data describing the event */
        'event.metadata'?: object;
        /** The event timestamp */
        'event.timestamp': number;
        /** Display the event in griffon if set to false */
        'event.internal': false;
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.media.trackmedia';
    ACPExtensionEventType: 'com.adobe.eventtype.media';
}

/** Track Media Event */
export type TrackMedia = MobileEvent & {

}