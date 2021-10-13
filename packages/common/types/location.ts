/** Parsed information from the request URL. */
export interface Location {
    /** The domain portion of the request URL. */
    domain?: string;
    /** The hash portion of the request URL. */
    hash?: string;
    /** The host portion of the request URL. Includes port number */
    host?: string;
    /** The host portion of the request URL without the port number. */
    hostname?: string;
    /** The origin portion of the request URL. */
    origin?: string;
    /** The path of the request URL. */
    path?: string;
    /** The port of the request URL. */
    port?: string;
    /** The protocol portion of the request URL. */
    protocol?: string;
    /** The query string portion of the request URL. */
    query?: string;
}