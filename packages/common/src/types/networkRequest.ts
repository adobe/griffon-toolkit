import { GriffonEvent, GriffonEventType } from "./event";
import { Location } from "./location";

/** Network Request Payload */
export interface NetworkRequestPayload {
    /** The posted body. This is a fully parsed object. */
    body?: object;
    /** The webpage that initiated the request. */
    initiator?: string;
    /** Parsed information from the request URL. */
    location?: Location;
    /** HTTP method that the request is made with. */
    method?: string;
    /** ID that can be used to pair requests with responses. */
    requestId?: string;
    /** The URL the request is being made to. Contains the full host, path, and query string. */
    url?: string;
}

/** Network Request */
export interface NetworkRequest extends GriffonEvent {
    payload?: NetworkRequestPayload;
    /** The type of event. For network requests it's always 'netreq'. */
    type: GriffonEventType.NETWORKREQUEST;
}