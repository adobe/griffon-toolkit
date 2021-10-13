import { MobileEvent } from "./mobileEvent";

/** The payload of a Media Session Created Event */
export type MediaCreatedSessionPayload = {
    ACPExtensionEventData: {
        /** The media sessionid returned by collection service */
        'mediaservice.sessionid': string;
        /** The unique session ID */
        sessionid: string;
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.media.sessioncreated';
    ACPExtensionEventType: 'com.adobe.eventtype.media';
}

/** Media Session Created Event */
export type MediaCreatedSession = MobileEvent & {
    payload: MediaCreatedSessionPayload;
}