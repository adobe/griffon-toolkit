import { MobileEvent } from "./mobileEvent";

/** The payload of a Set Push Identifier event */
export type SetPushIdentifierPayload = {
    ACPExtensionEventData: {
        /** The token used to send push messages */
        pushidentifier: string;
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent';
    ACPExtensionEventType: 'com.adobe.eventtype.generic.identity';
}

/** Set Push Identifier */
export type SetPushIdentifier = MobileEvent & {
    payload: SetPushIdentifierPayload;
}