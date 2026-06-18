/*
Copyright 2026 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as kit from '@adobe/griffon-toolkit';

/**
 * XDM eventType sent by Mobile SDKs prior to Optimize 5.x.
 * Kept for backward compatibility — Assurance must continue matching sessions
 * from older SDK builds that still emit this value.
 */
export const LEGACY_EDGE_EVENT_TYPE = 'personalization.request';

/**
 * XDM eventType introduced in Optimize 5.x (aepsdk-optimize-ios PR #159).
 * Aligns Mobile SDK with the current XDM spec already used by Web SDK.
 * Ref: MOB-24547 / PLATIR-51299
 */
export const PROPOSITION_FETCH_EDGE_EVENT_TYPE = 'decisioning.propositionFetch';

/**
 * JMESPath matcher expression that accepts both the legacy and current
 * XDM eventType for a personalization fetch edge request.
 * Drop-in replacement for the single-value eventType clause inside
 * kit.combineAll([...]) matcher definitions.
 */
export const edgeEventTypeMatcher = kit.combineAny([
  `payload.ACPExtensionEventData.xdm.eventType==\`${LEGACY_EDGE_EVENT_TYPE}\``,
  `payload.ACPExtensionEventData.xdm.eventType==\`${PROPOSITION_FETCH_EDGE_EVENT_TYPE}\``
]);
