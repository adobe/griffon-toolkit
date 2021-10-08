import { ACPExtensionEventSource, ACPExtensionEventType, MobileEvent } from "./mobileEvent";

/** The payload of a AEP Edge Request Event */
export interface EdgeRequestEventPayload {
    ACPExtensionEventData: {
        /** The dataset to apply the XDM data to */
        datasetId: string;
        /** The XDM data send to the server */
        xdm: object;
    };
    ACPExtensionEventSource: ACPExtensionEventSource.REQUESTCONTENT;
    ACPExtensionEventType: ACPExtensionEventType.EDGE;
}

/** AEP Edge Request */
export interface EdgeRequestEvent extends MobileEvent {
    payload: EdgeRequestEventPayload;
}