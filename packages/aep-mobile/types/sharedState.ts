import { MobileEvent } from "./mobileEvent";

/** The payload of a Shared State Event */
export type SharedStatePayload = {
    /** The full list of current configuration values */
    ACPExtensionEventData: {
        /** In SDK extension that owns the shared state that is being updated */
        stateowner: string;
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.sharedstate';
    ACPExtensionEventType: 'com.adobe.eventtype.hub';
    /** Additional metadata that is attacked to SDK events */
    metadata: {
        /** The data that is being written to shared state. */
        'state.data': object;
        /** XDM data that is being written to shared state. */
        'xdm.state.data': object;
    };
};

/** Shared State Event */
export type SharedState = MobileEvent & {
    payload: SharedStatePayload;
};