import { CepheusEvent } from "./cepheusEvent";

/** The payload of a Push Request Forwarded event */
export type PushForwardedPayload = {
    /** The name of the event */
    event: 'push sent to platform service';
    /** id to stitch the requests together */
    groupID: string;
    /** The platform to send the push to */
    platform?: string;
    /** The push token to send to */
    pushTokens?: string;
    /** The body sent to the push service */
    body?: string;
    /** The status returned from the service */
    status?: number;
}

/** Push Request Forwarded */
export type PushForwarded = CepheusEvent & {
    payload?: PushForwardedPayload;
}