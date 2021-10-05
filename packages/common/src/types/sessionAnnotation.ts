/** Session Annotation Object */
export interface SessionAnnotation {
    /** An object with custom data describing the annotation */
    payload?: object;
    /** This is to scope annotations and prevent overwrites from other plugins. The type is usually determined by the plugin writing the annotation */
    namespace: string;
    /** Uniquely identifies each annotation */
    uuid: string;
}