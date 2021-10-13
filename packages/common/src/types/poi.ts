/** Point of Interest Object */
export interface POI {
    /** The POI latitude */
    latitude: number;
    /** The Places library the POI belongs to */
    libraryid: string;
    /** The POI longitud */
    longitude: number;
    /** The POI name */
    regionname?: string;
    /** An object with some defined items and custom data items. */
    regionmetadata?: {
        /** The POI category */
        category: string;
        /** The POI city */
        city: string;
        /** The POI country */
        country: string;
        /** The POI state */
        state: string;
        /** The POI street */
        street: string;
    };
    /** The POI radius */
    radius: number;
    /** The unique region id */
    regionid: string;
    /** Is the user currently in the POI */
    useriswithin: boolean;
    /** The weight of the POI. It is used to prioritize POIs when a user is inside multiple POIS */
    weight?: number;
}