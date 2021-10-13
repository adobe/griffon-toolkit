import { ACPExtensionEventSource, ACPExtensionEventType, MobileEvent } from "./mobileEvent";

export interface HitHeaders {
    /** The value used to pull the processing information from the Hit Debugger Service */
    etag: string;
    [key: string]: any;
}

export type AnalyticsResponseEventPayload = {
    ACPExtensionEventData: {
        /** The ID of the event that this is a response to */
        requestEventIdentifier: string;
        /** Query parameter of the data that was passed to Analytics */
        hitUrl?: string;
        /** The headers returned from the request */
        hitHeaders: HitHeaders;
        /** The host url of the service that was hit to pass the data to Analytics */
        hitHost?: string;
    };
    ACPExtensionEventSource: ACPExtensionEventSource.RESPONSECONTENT;
    ACPExtensionEventType: ACPExtensionEventType.ANALYTICS;
}

/** Analytics Response */
export type AnalyticsResponseEvent = MobileEvent & {
    payload?: AnalyticsResponseEventPayload;
}