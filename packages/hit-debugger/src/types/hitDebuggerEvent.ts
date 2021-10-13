// TODO: Extend event
/** Generic Hit Debugger Event */
export type HitDebuggerEvent = {
    type: 'generic';
    /** The vendor of the service that sent the event */
    vendor: 'com.adobe.analytics.hitdebugger';
}