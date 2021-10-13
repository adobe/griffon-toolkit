import { GenericTrack } from "./genericTrack";

/** The payload of a Track Action Event */
export type TrackActionPayload = {
    ACPExtensionEventData: {
        /** The action that was triggered in the application */
        action: string;
    };
}

/** Track Action Event */
export type TrackAction = GenericTrack & {
    payload: TrackActionPayload;
}