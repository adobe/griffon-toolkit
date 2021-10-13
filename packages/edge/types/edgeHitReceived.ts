import { EdgeEvent } from "./edgeEvent";

/** The payload of a Hit Received event */
export type EdgeHitReceivedPayload = {
    /** An object containing metadata about the request */
    attributes: {
        source: 'com.adobe.edge.konductor';
    };
    name: 'hitReceived';
}

/** Hit Received */
export type EdgeHitReceived = EdgeEvent & {
    payload: EdgeHitReceivedPayload;
}