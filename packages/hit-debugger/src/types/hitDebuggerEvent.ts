// TODO: Extend event
/** Generic Hit Debugger Event */
export interface HitDebuggerEvent {
    type: 'generic';
    /** The vendor of the service that sent the event */
    vendor: 'com.adobe.analytics.hitdebugger';
}