/** The payload of a Config Update Command */
export interface ConfigUpdateCommandEventPayload {
    /** The type of command */
    type: 'configUpdate';
    /** Object containing the config paths and values to update */
    detail: object;
}

/** Config Update Command */
export interface ConfigUpdateCommandEvent {
    payload?: ConfigUpdateCommandEventPayload;
    vendor: 'com.adobe.griffon.mobile';
}