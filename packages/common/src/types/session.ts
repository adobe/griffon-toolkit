/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Session {
  /**
   * Array of SessionAnnotation objects
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
    namespace?: string;
    /**
     * Uniquely identifies each annotation
     */
    uuid: string;
    [k: string]: unknown;
  }[];
  /**
   * The base url of the application connected to this session
   */
  link: string;
  /**
   * The first name of the user who created the session
   */
  firstName?: string;
  /**
   * The last name of the user who created the session
   */
  lastName?: string;
  /**
   * The name of the session
   */
  name: string;
  /**
   * Uniquely identifies each session
   */
  uuid: string;
  [k: string]: unknown;
}
