import { GriffonEventType } from "./event";

/** The payload of the Client Info Event */
export interface ClientInfoPayload {
    /** A map containing details about the settings of the application on which Griffon is registered */
    appSettings?: object;
    /** A map containing details about the connected device */
    deviceInfo?: object;
    /** Constant value representing this event will initiate a connection */
    type: 'connect';
    /** Griffon SDK Extension version */
    version: string;
}

/** Client Info Event */
export interface ClientInfo extends Event {
    payload?: ClientInfoPayload;
    type: GriffonEventType.CLIENT;
}