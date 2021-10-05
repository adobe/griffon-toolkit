/** Annotation Object */
export interface Annotation {
    /** An object with custom data describing the annotation */
    payload?: object;
    /** This is to scope annotations and prevent overwrites from other plugins. 
     * The type is usually determined by the plugin writing the annotation */
    type: string;
    /** Uniquely identifies each annotation */
    uuid: string;
}