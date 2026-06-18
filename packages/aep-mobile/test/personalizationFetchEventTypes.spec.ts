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

import optimizeMessagesRequest from '../src/optimizeMessagesRequest';
import personalizationEdgeRequest from '../src/personalizationEdgeRequest';
import iamMessagesRequest from '../src/iamMessagesRequest';
import {
  LEGACY_EDGE_EVENT_TYPE,
  PROPOSITION_FETCH_EDGE_EVENT_TYPE
} from '../src/personalizationFetchEventTypes';

describe('personalizationFetchEventTypes', () => {
  describe('constants', () => {
    it('LEGACY_EDGE_EVENT_TYPE is the deprecated personalization.request value', () => {
      expect(LEGACY_EDGE_EVENT_TYPE).toBe('personalization.request');
    });

    it('PROPOSITION_FETCH_EDGE_EVENT_TYPE is the current decisioning.propositionFetch value', () => {
      expect(PROPOSITION_FETCH_EDGE_EVENT_TYPE).toBe('decisioning.propositionFetch');
    });
  });

  describe('optimizeMessagesRequest backward compatibility', () => {
    it('matches a legacy personalization.request optimize event', () => {
      const event = optimizeMessagesRequest.mock({
        edgeEventType: LEGACY_EDGE_EVENT_TYPE,
        decisionScopes: ['demoLoc1']
      });
      expect(optimizeMessagesRequest.isMatch(event)).toBe(true);
    });

    it('matches a new decisioning.propositionFetch optimize event', () => {
      const event = optimizeMessagesRequest.mock({
        edgeEventType: PROPOSITION_FETCH_EDGE_EVENT_TYPE,
        decisionScopes: ['demoLoc1']
      });
      expect(optimizeMessagesRequest.isMatch(event)).toBe(true);
    });

    it('does not match an unrelated edge event type', () => {
      const event = optimizeMessagesRequest.mock({
        edgeEventType: 'decisioning.propositionDisplay',
        decisionScopes: ['demoLoc1']
      });
      expect(optimizeMessagesRequest.isMatch(event)).toBe(false);
    });
  });

  describe('personalizationEdgeRequest backward compatibility', () => {
    it('matches a legacy personalization.request edge event', () => {
      const event = personalizationEdgeRequest.mock({
        edgeEventType: LEGACY_EDGE_EVENT_TYPE
      });
      expect(personalizationEdgeRequest.isMatch(event)).toBe(true);
    });

    it('matches a new decisioning.propositionFetch edge event', () => {
      const event = personalizationEdgeRequest.mock({
        edgeEventType: PROPOSITION_FETCH_EDGE_EVENT_TYPE
      });
      expect(personalizationEdgeRequest.isMatch(event)).toBe(true);
    });

    it('does not match an unrelated edge event type', () => {
      const event = personalizationEdgeRequest.mock({
        edgeEventType: 'decisioning.propositionDisplay'
      });
      expect(personalizationEdgeRequest.isMatch(event)).toBe(false);
    });
  });

  describe('iamMessagesRequest backward compatibility', () => {
    it('matches a legacy personalization.request IAM event', () => {
      const event = iamMessagesRequest.mock({
        edgeEventType: LEGACY_EDGE_EVENT_TYPE,
        surfaces: ['mobileapp://com.example.app']
      });
      expect(iamMessagesRequest.isMatch(event)).toBe(true);
    });

    it('matches a new decisioning.propositionFetch IAM event', () => {
      const event = iamMessagesRequest.mock({
        edgeEventType: PROPOSITION_FETCH_EDGE_EVENT_TYPE,
        surfaces: ['mobileapp://com.example.app']
      });
      expect(iamMessagesRequest.isMatch(event)).toBe(true);
    });

    it('does not match an unrelated edge event type', () => {
      const event = iamMessagesRequest.mock({
        edgeEventType: 'decisioning.propositionDisplay',
        surfaces: ['mobileapp://com.example.app']
      });
      expect(iamMessagesRequest.isMatch(event)).toBe(false);
    });
  });
});
