import { ACPExtensionEventSource, ACPExtensionEventType, MobileEvent } from "./mobileEvent";

/** The payload of a AEP Edge Response event */
export type EdgeResponseEventPayload = {
    ACPExtensionEventData: {
        /** The request ID of the edge service request */
        requestId: string;
        /** The event ID of the event that this is a response to */
        requestEventId: string;
        /** The type of request that was made */
        type: string;
        /** The information received in the response */
        payload: any[];
    };
    ACPExtensionEventSource: Exclude<ACPExtensionEventSource, ACPExtensionEventSource.ERRORRESPONSECONTENT | ACPExtensionEventSource.REQUESTCONTENT>;
    ACPExtensionEventType: ACPExtensionEventType.EDGE;
}

/** AEP Edge Response */
export type EdgeResponseEvent = MobileEvent & {
    payload: EdgeResponseEventPayload;
}