/** The payload of an edge event */
export interface EdgeEventPayload {
    /** An object containing metadata about the request */
    attributes: {
        /** The request id that is shared between the different service requests */
        requestId: string;
        /** The event source */
        source: string;
    };
    /** The name of the event */
    name?: string;
    /** Messages received from the service */
    messages?: string[];
    /** Additional context provided by the service */
    context?: object;

}

/** Generic Edge Event */
export interface EdgeEvent {
    payload?: EdgeEventPayload;
    type: 'service';
}