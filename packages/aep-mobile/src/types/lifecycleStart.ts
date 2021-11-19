/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type LifecycleStart = {
  /**
   * Array of Annotation objects
   */
  annotations?: {
    /**
     * An object with custom data describing the annotation
     */
    payload?: {
      [k: string]: unknown;
    };
    /**
     * This is to scope annotations and prevent overwrites from other plugins. The type is usually determined by the plugin writing the annotation
     */
    type: string;
    /**
     * Uniquely identifies each annotation
     */
    uuid: string;
    [k: string]: unknown;
  }[];
  /**
   * A unique id that differentiates clients from one another
   */
  clientId: string;
  /**
   * An object with custom data describing the event
   */
  payload?: {
    [k: string]: unknown;
  };
  /**
   * When the event occurred
   */
  timestamp: number;
  /**
   * The type of event
   */
  type: "blob" | "client" | "control" | "generic" | "log" | "status";
  /**
   * Uniquely identifies each event
   */
  uuid: string;
  [k: string]: unknown;
} & {
  payload?: {
    /**
     * The lifecycle data
     */
    ACPExtensionEventData: {
      /**
       * The amount of time before a session expires
       */
      maxsessionlength?: number;
      /**
       * The type of event that triggers the new session
       */
      sessionevent?: string;
      /**
       * Context data about the device
       */
      lifecyclecontextdata?: {
        /**
         * The id of the application
         */
        appid?: string;
        /**
         * The number of times the app has launched
         */
        launches?: string;
        /**
         * The name of the applications crash event
         */
        crashevent?: string;
        /**
         * The name of device
         */
        devicename?: string;
        /**
         * The hour in the day that the app launched
         */
        hourofday?: string;
        /**
         * Number of days since the app was last launched
         */
        dayssincelastuse?: string;
        /**
         * Type of application format. Will change if on a smart device.
         */
        runmode?: string;
        /**
         * The version of the OS the last time the app launched
         */
        previousosversion?: string;
        /**
         * The language the device is running under
         */
        locale?: string;
        /**
         * The phone provider the device goes through
         */
        carriername?: string;
        /**
         * The number of days since the first launch of the application
         */
        dayssincefirstuse?: string;
        /**
         * The day of week that the app launched
         */
        dayofweek?: string;
        /**
         * The name of the application launch event
         */
        launchevent?: string;
        /**
         * The id of the application the last time the app was launched
         */
        previousappid?: string;
        /**
         * The resolution of the device
         */
        resolution?: string;
        /**
         * Used in calculating length of session
         */
        ignoredsessionlength?: string;
        /**
         * The version of the OS
         */
        osversion?: string;
        [k: string]: unknown;
      };
      /**
       * The timestamp when the session started
       */
      starttimestampseconds?: number;
      /**
       * The timestamp when the previous session was paused (if applicable)
       */
      previoussessionpausetimestampseconds?: number;
      /**
       * The timestamp when the previous session was started
       */
      previoussessionstarttimestampseconds?: number;
      [k: string]: unknown;
    };
    ACPExtensionEventSource?: "com.adobe.eventSource.responseContent";
    ACPExtensionEventType?: "com.adobe.eventType.lifecycle";
    [k: string]: unknown;
  };
  [k: string]: unknown;
};
