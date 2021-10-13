import { SharedState } from "./sharedState";

/** The payload of a Shared State - Versions event */
export type SharedStateVersionPayload = {
    ACPExtensionEventData: {
        stateowner: 'com.adobe.module.eventhub';
    };
    metadata: {
        'state.data': {
            /** The version of the SDK */
            version: string;
            /** A mapping of versions per sdk extension */
            extensions: object;
        };
    };
}

/** Shared State - Versions */
export type SharedStateVersion = SharedState & {
    payload: SharedStateVersionPayload;
}