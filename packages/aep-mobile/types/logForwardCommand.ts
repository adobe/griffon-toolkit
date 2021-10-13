/** The payload of a Log Forward Command command */
export type LogForwardCommandPayload = {
    /** The type of command */
    type: 'logForwarding';
    /** Additional command detail */
    detail: {
        /** Turn on or off the log forwarding */
        enable: boolean;
    }
}

/** Log Forward Command */
export type LogForwardCommand = {
    payload: LogForwardCommandPayload;
    vendor: 'com.adobe.griffon.mobile';
}