/** The payload of a Streaming Validation event */
export type StreamingValidationPayload = {
    /** The name of the event */
    name: string;
    /** Messages received from the service */
    messages: string[];
    /** Additional context provided by the service */
    context: object;
}

/** Streaming Validation */
export type StreamingValidation = {
    payload: StreamingValidationPayload;
    type: 'service';
    vendor: 'com.adobe.streaming.validation';
}