import { MobileEvent } from "./mobileEvent";

/** The payload of a Start Monitor Event */
export type StartPlacesMonitorPayload = {
    ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent';
    ACPExtensionEventType: 'com.adobe.eventtype.placesmonitor';
}

/** Start Monitor Event */
export type StartPlacesMonitor = MobileEvent & {
    payload: StartPlacesMonitorPayload;
}