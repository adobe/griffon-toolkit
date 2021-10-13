/** The payload of a iOS Client Info Event */
export interface ClientInfoIOSEventPayload {
    deviceInfo: {
        /** Canonical name for the platform. Used for Griffon identifying if the device is iOS or Android */
        'Canonical platform name': 'iOS';
        /** The name identifying the device. */
        'Device name'?: string;
        /** The style of interface to use on the current device. */
        'Device type'?: string;
        /** The model of the device. */
        'Model'?: string;
        /** The value is in the format "<OperationSystemName> <OperatingSystemVersion>" */
        'Operating system'?: string;
        /** Phones display resolution in pixels (width x height) */
        'Screen size'?: string;
        /** The battery charge level for the device. This is integer value ranging from 1 to 100. If unable to fetch battery value -1 is returned */
        'Battery level'?: number;
        /** The battery state for the device. */
        'Battery state'?: string;
        /** A boolean value indicating whether location services are enabled on the device. Users can enable or disable location services by toggling the Location Services switch in Settings > Privacy. */
        'Location service enabled'?: boolean;
        /** Tells the app’s authorization status for using location services. */
        'Location authorization status'?: string;
        /** Indicates whether Low Power Mode is enabled on an iOS device. */
        'Low power mode enabled'?: boolean;
    }
}

// TODO: Extend Clientinfo from common
/** iOS Client Info Event */
export interface ClientInfoIOSEvent {
    payload: ClientInfoIOSEventPayload;
    type: 'client'; // TODO: import type enum
}