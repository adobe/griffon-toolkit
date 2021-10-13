import { CepheusEvent } from "./cepheusEvent";

/** The payload of a Push Request Feedback event */
export type PushFeedbackPayload = {
    /** The name of the event */
    event: 'feedback sent to pipeline';
    /** Response code */
    responseCode?: number;
    /** Response message */
    responseMessage?: string;
    /** The response */
    feedback?: {
        /** id to stitch the requests together */
        groupID: string;
        /** The platform to send the push to */
        platform?: string;
        /** The status of the request */
        status?: string;
    }
}

/** Push Request Feedback */
export type PushFeedback = CepheusEvent & {
    payload?: PushFeedbackPayload;
}