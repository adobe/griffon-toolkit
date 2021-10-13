import { SharedState } from "./sharedState";

/** The payload of a Shared State - Versions event */
export type SharedStateConfigPayload = {
    ACPExtensionEventData: {
        stateowner: 'com.adobe.module.configuration';
    };
    metadata: {
        'state.data': {
            /** In the Launch UI, the type of environment this configuration was generated for */
            'build.environment'?: string;
            /** The IMS Org that the mobile app's config was created by */
            'experienceCloud.org'?: string;
            /** The ID of the property inside launch */
            'property.id'?: string;
            /** The URL to download the rules configuration for the property */
            'rules.url'?: string;
        };
    };
}

/** Shared State - Versions */
export type SharedStateConfig = SharedState & {
    payload: SharedStateConfigPayload;
}