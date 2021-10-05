import { SessionAnnotation } from "./sessionAnnotation";

/** Griffon Session */
export interface Session {
    /** Array of SessionAnnotation objects */
    annotations?: SessionAnnotation[];
    /** The base url of the application connected to this session */
    link: string;
    /** The first name of the user who created the session */
    firstName?: string;
    /** The last name of the user who created the session */
    lastName?: string;
    /** The name of the session */
    name: string;
    /** Uniquely identifies each session */
    uuid: string;
}