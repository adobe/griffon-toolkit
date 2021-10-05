import { GriffonEvent, GriffonEventType } from "./event";
import { Location } from "./location";

/** The payload of a Network Response Event */
export interface NetworkResponsePayload {
    /** Whether the data was loaded from the browser cache. */
    fromCache?: boolean;
    /** The webpage that initiated the request. */
    initiator?: string;
    /** The ip address of the server. */
    ip?: string;
    /** Parsed information from the request URL. */
    location?: Location;
    /** HTTP method that the request is made with. */
    method?: string;
    /** The headers returned from the server. */
    responseHeaders?: object;
    /** ID that can be used to pair requests with responses. */
    requestId?: string;
    /** The resulting status code of the request. */
    statusCode?: number;
    /** More details about the status of the request. */
    statusLine?: string;
    /** The URL the request is being made to. Contains the full host, path, and query string. */
    url?: string;
}

/** Network Response */
export interface NetworkResponse extends GriffonEvent {
    payload?: NetworkResponsePayload; 
    /** The type of event. For network responses it's always 'netres'. */
    type: GriffonEventType.NETWORKRESPONSE;
}