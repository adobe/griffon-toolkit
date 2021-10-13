import { GriffonEvent, GriffonEventType } from "./event";

/** The payload of the Log Event */
export type LogEventPayload = {
    /** Represents a line logged by the application */
    logline: string;
}

/** Log Event */
export type LogEvent = GriffonEvent & {
    payload?: LogEventPayload;
    type: GriffonEventType.LOG;
}