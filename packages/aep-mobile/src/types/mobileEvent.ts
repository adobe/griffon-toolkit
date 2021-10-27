/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type MobileEvent = {
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
     * An object with the custom data describing the event
     */
    ACPExtensionEventData?: {
      [k: string]: unknown;
    };
    /**
     * The name of the event
     */
    ACPExtensionEventName?: string;
    /**
     * The event number generated by the SDK
     */
    ACPExtensionEventNumber?: number;
    /**
     * The event source
     */
    ACPExtensionEventSource: string;
    /**
     * The event type
     */
    ACPExtensionEventType: string;
    /**
     * The unique event id
     */
    ACPExtensionEventUniqueIdentifier?: string;
  };
  type?: "generic";
  /**
   * The vendor of the plugin that sent the event
   */
  vendor?: string;
  [k: string]: unknown;
};
