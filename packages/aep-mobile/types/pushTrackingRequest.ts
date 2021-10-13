import { EdgeRequestEvent } from "./edgeRequest";

/** The payload of a AEP Edge Request */
export type PushTrackingRequestPayload = {
    ACPExtensionEventData: {
        xdm: {
            pushNotificationTracking: {
                pushProviderMessageID: string;
                pushProvider: string;
            };
            eventType: string;
            _experience?: {
                customerJourneyManagement: {
                    messageExecution: {
                        messageExecutionID: string;
                        journeyVersionInstanceID: string;
                        journeyVersionID: string;
                        journeyActionID: string;
                    };
                };
            };
        };
    };
}

/** AEP Edge Request */
export type PushTrackingRequest = EdgeRequestEvent & {
    payload: PushTrackingRequestPayload;
}