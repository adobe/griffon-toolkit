/** The payload of a Fake Command Event */
export interface FakeEventCommandPayload {
    /** The type of command */
    type: string;
    /** Additional command detail */
    detail: {
        /** The name of the event */
        eventName?: string;
        /** The event type */
        eventType: string;
        /** The event source */
        eventSource: string;
        /** An object with the custom data describing the event */
        type?: object;
    };
}

// TODO: Extend command from common
/** Fake Event Command */
export interface FakeEventCommand {
    payload: FakeEventCommandPayload;
    vendor: 'com.adobe.griffon.mobile';
}