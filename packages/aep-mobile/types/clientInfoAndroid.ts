export interface ClientInfoAndroidEventPayload {
    deviceInfo: {
        /** Canonical name for the platform. Used for Griffon identifying if the device is iOS or Android */
        'Canonical platform name': 'Android';
        /** Read from Build.MODEL, which is the end-user-visible name for the end product. */
        'Device name'?: string;
        /** The style of interface to use on the current device. */
        'Device type'?: string;
        /** The manufacturer of the product/hardware. */
        'Device manufacturer'?: string;
        /** The value is in the format "Android <OperatingSystemVersion>" */
        'Operating system'?: string;
        /** Phones display resolution in pixels (width x height) */
        'Screen size'?: string;
        /** The battery charge level for the device. This is integer value ranging from 1 to 100. If unable to fetch battery value -1 is returned */
        'Battery level'?: number;
        /** The current enabled/disabled state of location for the device. */
        'Location service enabled'?: boolean;
        /** Tells the app’s authorization status for using location services. */
        'Location authorization status'?: string;
        /** Represents the carrier name. "Unknown" if this value is not available, or not valid on the platform. */
        'Carrier name'?: string;
        /** Indicates whether Low Power Mode is enabled on an iOS device. */
        'Low power mode enabled'?: boolean;
    }
}

// TODO: import clientinfo from common and extend
/** Android Client Info Event */
export interface ClientInfoAndroidEvent {
    payload: ClientInfoAndroidEventPayload;
    type: 'client'; // TODO: Replace with event enum
}