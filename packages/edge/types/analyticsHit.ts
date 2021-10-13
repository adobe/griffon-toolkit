import { EdgeEvent } from "./edgeEvent";

/** The payload of a Analytics Hit event */
export type AnalyticsHitPayload = {
    /** An object containing metadata about the request */
    attributes: {
        source: 'com.adobe.analytics';
        hitId: string;
    };
    name: 'analytics.hit';
}

/** Analytics Hit */
export type AnalyticsHit = EdgeEvent & {
    payload: AnalyticsHitPayload;
}
