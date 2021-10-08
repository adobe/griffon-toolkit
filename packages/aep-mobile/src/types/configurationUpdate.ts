import { ACPExtensionEventSource, ACPExtensionEventType, MobileEvent } from "./mobileEvent";

/** Payload of the Configuration Update Event */
export interface ConfigurationUpdateEventPayload {
    ACPExtensionEventData: {
        /** The configuration values to write */
        'config.update': object;
    };
    ACPExtensionEventSource: ACPExtensionEventSource.RESPONSECONTENT;
    ACPExtensionEventType: ACPExtensionEventType.CONFIGURATION;
}

/** Configuration Update */
export interface ConfigurationUpdateEvent extends MobileEvent {
    payload: ConfigurationUpdateEventPayload;
}