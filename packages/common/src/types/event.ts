import { Annotation } from "./annotation";

export enum GriffonEventType {
    BLOB = 'blob',
    CLIENT = 'client',
    CONTROL = 'control',
    GENERIC = 'generic',
    LOG = 'log',
    NETWORKREQUEST = 'netreq',
    NETWORKRESPONSE = 'netres',
    STATUS = 'status',
}

/** Generic Event */
export interface GriffonEvent {
    /** Array of Annotation objects */
    annotations?: Annotation[];
    /** A unique id that differentiates clients from one another */
    clientId: string;
    /** An object with custom data describing the event */
    payload?: object;
    /** When the event occurred */
    timestamp: number;
    /** The type of event */
    type: GriffonEventType;
    /** Uniquely identifies each event */
    uuid: string;
}