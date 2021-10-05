import { GriffonEvent, GriffonEventType } from "./event";

/** The payload of a Screenshot Response Event */
export interface ScreenshotResponsePayload {
    /** ID returned from the blob service */
    blobId: string;
    /** Describes the type of blob content uploaded */
    mimeType: string;
}

/** Screenshot Response Event */
export interface ScreenshotResponse extends GriffonEvent {
    payload?: ScreenshotResponsePayload;
    type: GriffonEventType.BLOB;
}