import { ACPExtensionEventSource, ACPExtensionEventType, MobileEvent } from "./mobileEvent";

/** Payload of the Configuration Update Event */
export type ConfigurationUpdateEventPayload = {
    ACPExtensionEventData: {
        /** The configuration values to write */
        'config.update': object;
    };
    ACPExtensionEventSource: ACPExtensionEventSource.RESPONSECONTENT;
    ACPExtensionEventType: ACPExtensionEventType.CONFIGURATION;
}

/** Configuration Update */
export type ConfigurationUpdateEvent = MobileEvent & {
    payload: ConfigurationUpdateEventPayload;
}