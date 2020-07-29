/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * NOTE: this file is auto-generated. Any changes will be clobbered.
 */

import * as kit from '@adobe/griffon-toolkit';

export default [
  {
    matcher: kit.combineAll([
      'timestamp',
      'type==\'control\''
    ]),
    mods: {
      staticLabel: 'Outgoing Command',
      customLabel: 'Outgoing Command',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'timestamp',
      'type'
    ]),
    mods: {
      staticLabel: 'Generic Event',
      customLabel: 'Generic Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.type==\'configUpdate\'',
      'vendor==\'com.adobe.griffon.mobile\'',
      'timestamp',
      'type==\'control\''
    ]),
    mods: {
      staticLabel: 'Config Update Command',
      customLabel: 'Config Update Command',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.type==\'fakeEvent\'',
      'vendor==\'com.adobe.griffon.mobile\'',
      'timestamp',
      'type==\'control\''
    ]),
    mods: {
      staticLabel: 'Fake Event Command',
      customLabel: 'Fake Event Command',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.type==\'logForwarding\'',
      'vendor==\'com.adobe.griffon.mobile\'',
      'timestamp',
      'type==\'control\''
    ]),
    mods: {
      staticLabel: 'Log Forward Command',
      customLabel: 'Log Forward Command',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource',
      'payload.ACPExtensionEventType',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Generic Mobile Event',
      customLabel: 'Generic Mobile Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.type==\'screenshot\'',
      'vendor==\'com.adobe.griffon.mobile\'',
      'timestamp',
      'type==\'control\''
    ]),
    mods: {
      staticLabel: 'Screenshot Capture Command',
      customLabel: 'Screenshot Capture Command',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.type==\'startEventForwarding\'',
      'vendor==\'com.adobe.griffon.mobile\'',
      'timestamp',
      'type==\'control\''
    ]),
    mods: {
      staticLabel: 'Start Event Forwarding Command',
      customLabel: 'Start Event Forwarding Command',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.type==\'connect\'',
      'type==\'client\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Client Info Event',
      customLabel: 'Client Info Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'type==\'log\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Log Event',
      customLabel: 'Log Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'type==\'blob\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Screenshot Response Event',
      customLabel: 'Screenshot Response Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.analytics\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Analytics Response',
      customLabel: 'Analytics Response',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.deviceInfo."Canonical platform name"==\'Android\'',
      'payload.type==\'connect\'',
      'type==\'client\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'iOS Client Info Event',
      customLabel: 'iOS Client Info Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.deviceInfo."Canonical platform name"==\'iOS\'',
      'payload.type==\'connect\'',
      'type==\'client\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'iOS Client Info Event',
      customLabel: 'iOS Client Info Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.configuration\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Configuration Event',
      customLabel: 'Configuration Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.configuration\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Configuration Update',
      customLabel: 'Configuration Update',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
      'payload.ACPExtensionEventSource',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Generic Places Event',
      customLabel: 'Generic Places Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.generic.track\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Generic Track Event',
      customLabel: 'Generic Track Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.lifecycle\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Lifecycle Start',
      customLabel: 'Lifecycle Start',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.sharedstate\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.hub\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Shared State Event',
      customLabel: 'Shared State Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventType.placesMonitor\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Start Monitor Event',
      customLabel: 'Start Monitor Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventData.requesttype==\'requestsetauthorizationstatus\'',
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Location Auth Status',
      customLabel: 'Location Auth Status',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventData.regioneventtype==\'entry\'',
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Places Entry Event',
      customLabel: (data) => `POI Entry: ${kit.search('payload.ACPExtensionEventData.triggeringregion.regionname', data)}`,
      customShortDescription: (data) => {
        const name = kit.search('payload.ACPExtensionEventData.triggeringregion.regionname', data);
        const street = kit.search('payload.ACPExtensionEventData.triggeringregion.regionmetadata.street', data);
        const city = kit.search('payload.ACPExtensionEventData.triggeringregion.regionmetadata.city', data);
        const address = street && city ? `${street}, ${city}` : street || city;
        const output = name && address ? `${name} - ${address}` : name || address;
        return `POI: ${output}`;
      }
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventData.regioneventtype==\'exit\'',
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Places Exit Event',
      customLabel: 'Places Exit Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventData.nearbypois',
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.responsecontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Receive Places Event',
      customLabel: 'Receive Places Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventData.requesttype==\'requestgetnearbyplaces\'',
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Request Places Event',
      customLabel: 'Request Places Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.sharedstate\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.hub\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Shared State - Versions',
      customLabel: 'Shared State - Versions',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.generic.track\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Track Action Event',
      customLabel: 'Track Action Event',
      customShortDescription: () => ''
    }
  },
  {
    matcher: kit.combineAll([
      'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
      'payload.ACPExtensionEventType==\'com.adobe.eventtype.generic.track\'',
      'type==\'generic\'',
      'timestamp'
    ]),
    mods: {
      staticLabel: 'Track State Event',
      customLabel: 'Track State Event',
      customShortDescription: () => ''
    }
  }
];