import { GenericTrack } from "./genericTrack";

/** The payload of a Track State Event */
export type TrackStatePayload = {
    ACPExtensionEventData: {
        /** The state that should be tracked */
        state: string;
    };
}


/** Track State Event */
export type TrackState = GenericTrack & {
    payload: TrackStatePayload;
}   