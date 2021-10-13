/** /** Screenshot Capture Command */
export type ScreenshotCaptureCommandPayload = {
    /** The type of command */
    type: string;
}

/** Screenshot Capture Command */
export type ScreenshotCaptureCommand = {
    payload: ScreenshotCaptureCommandPayload;
    vendor: 'com.adobe.griffon.mobile';
}