import { GriffonEventType } from "./event";

/** Outgoing Command */
export interface Command {
    /** A unique id that differentiates clients from one another */
    clientId?: string;
    /** An object with custom data describing the event */
    payload?: object;
    /** When the command was triggered */
    timestamp: number;
    /** The type of event. For commands it's always 'control'. */
    type: GriffonEventType.CONTROL;
    /** The vendor of the plugin to receive the command */
    vendor?: string;
}