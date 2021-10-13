import { EdgeEvent } from "./edgeEvent";

/** The payload of a Analytics Mapping event */
export type AnalyticsMappingPayload = {
    /** An object containing metadata about the request */
    attributes: {
        source: 'com.adobe.analytics';
        primaryHitId: string;
    };
    name: 'analytics.mapping';
}

/** Analytics Mapping */
export type AnalyticsMapping = EdgeEvent & {
    payload?: AnalyticsMappingPayload;
}
