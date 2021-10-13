import { CepheusEvent } from "./cepheusEvent";

/** Payload of a Push Request Event */
export type PushDedupedPayload = {
    /** The name of the event */
    event: 'push passed deduplication step';
    /** id to stitch the requests together */
    groupID: string;
    /** The platform to send the push to */
    platform?: string;
    /** The push token to send to */
    pushTokens?: string;
    /** The push token that was deduped */
    duplicatePushToken?: string;
}

/** Push Request Dedupe */
export type PushDeduped = CepheusEvent & {
    payload?: PushDedupedPayload;
}