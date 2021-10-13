import { CepheusEvent } from "./cepheusEvent";

/** The payload of a Push Request event */
export type PushRequestPayload = {
    /** The name of the event */
    event: 'push sent to platform service';
    /** id to stitch the requests together */
    groupID: string;
    /** The platform to send the push to */
    platform?: string;
    /** The push token to send to */
    pushTokens?: string;
}

/** Push Request */
export type PushRequest = CepheusEvent & {
    payload?: PushRequestPayload;
}