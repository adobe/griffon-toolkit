import { ACPExtensionEventSource, ACPExtensionEventType, MobileEvent } from "./mobileEvent";

export interface ConfigurationEventPayload {
    ACPExtensionEventData: {
        /** The full list of current configuration values */
        'build.environment': string;
        /** The IMS Org that the mobile app's config was created by */
        'experienceCloud.org': string;
        /** The ID of the property inside launch */
        'property.id': string;
        /** The URL to download the rules configuration for the property */
        'rules.url': string;
    };
    ACPExtensionEventSource: ACPExtensionEventSource.RESPONSECONTENT;
    ACPExtensionEventType: ACPExtensionEventType.CONFIGURATION;
}

/** Configuration Event */
export interface ConfigurationEvent extends MobileEvent {
    payload: ConfigurationEventPayload;
}