import { MobileEvent } from "./mobileEvent";

/** The payload of a Lifecycle Start event */
export type LifecycleStartPayload = {
    /** The lifecycle data */
    ACPExtensionEventData: {
        /** The amount of time before a session expires */
        maxsessionlength: number;
        /** The type of event that triggers the new session */
        sessionEvent: string;
        /** Context data about the device */
        lifecyclecontextdata: {
            /** The id of the application */
            appid: string;
            /** The number of times the app has launched */
            launches: string;
            /** The name of the applications crash event */
            crashevent: string;
            /** The name of device */
            devicename: string;
            /** The hour in the day that the app launched */
            hourofday: string;
            /** Number of days since the app was last launched */
            dayssincelastuse: string;
            /** Type of application format. Will change if on a smart device. */
            runmode: string;
            /** The version of the OS the last time the app launched */
            previousosversion: string;
            /** The language the device is running under */
            locale: string;
            /** The phone provider the device goes through */
            carriername: string;
            /** The number of days since the first launch of the application */
            dayssincefirstuse: string;
            /** The day of week that the app launched */
            dayofweek: string;
            /** The name of the application launch event */
            launchevent: string;
            /** The id of the application the last time the app was launched */
            previousappid: string;
            /** The resolution of the device */
            resolution: string;
            /** Used in calculating length of session */
            ignoredsessionlength: string;
            /** The version of the OS */
            osversion: string;
        }
        /** The timestamp when the session started */
        starttimestampseconds: number;
        /** The timestamp when the previous session was paused (if applicable) */
        previoussessionpausetimestampseconds: number;
        /** The timestamp when the previous session was started */
        previoussessionstarttimestampseconds: number;
    };
    ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent';
    ACPExtensionEventType: 'com.adobe.eventtype.lifecycle';
}

/** Lifecycle Start */
export type LifecycleStart = MobileEvent & {
    payload: LifecycleStartPayload;
}