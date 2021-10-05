import { GriffonEvent, GriffonEventType } from "./event";

/** The payload of the Log Event */
export interface LogEventPayload {
    /** Represents a line logged by the application */
    logline: string;
}

/** Log Event */
export interface LogEvent extends GriffonEvent {
    payload?: LogEventPayload;
    type: GriffonEventType.LOG;
}