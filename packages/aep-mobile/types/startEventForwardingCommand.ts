/** The payload of a Start Event Forwarding Command */
export type StartEventForwardingCommandPayload = {
    /** The type of command */
    type: 'startEventForwarding';
}

/** Start Event Forwarding Command */
export type StartEventForwardingCommand = {
    payload: StartEventForwardingCommandPayload;
    vendor: 'com.adobe.griffon.mobile';
}