import { ACPExtensionEventSource, ACPExtensionEventType, MobileEvent } from "./mobileEvent";

/** AEP Edge Error Response Payload */
export interface EdgeErrorResponseEventPayload {
    ACPExtensionEventData: {
        /** The request ID of the edge service request */
        requestId: string;
        /** The type of request that was made */
        type: string;
        /** The information received in the response */
        payload: any[];
    };
    ACPExtensionEventSource: ACPExtensionEventSource.ERRORRESPONSECONTENT;
    ACPExtensionEventType: ACPExtensionEventType.EDGE;
}

/** AEP Edge Error Response */
export interface EdgeErrorResponseEvent extends MobileEvent {
    payload: EdgeErrorResponseEventPayload;
}