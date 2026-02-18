/* eslint-disable */
(function (window) {
  'use strict';

  // Check if already loaded
  if (window.glp && window.glp._loaded) {
    return;
  }

  // Check if there's a queue stub already created
  var existingQueue = window.glp && window.glp._queue ? window.glp._queue : [];

  var glp = {
    _loaded: true,
    _queue: null, // Will be cleared after processing
  };

  var initialized = null; // Changed from false to null - indicates init() hasn't been called yet
  var _currentTrackingId = null; // Stores the current glp_click_id or session_token
  var _conversionTrackedForCurrentId = false; // Flag if conversion was sent for _currentTrackingId
  var _externalSessionId = null; // Stores the _glp_esid for external sessions

  var config = {
    providerId: null, // Numeric ID from public.providers
    useSession: true, // Defaulting to true as per discussion
    userEmail: null, // Optional email provided at init
    clearCookieOnConversion: true, // New config option, default true
    testMode: false, // New config option for test mode, default false
    cookieNameClickId: '_glp_cid',
    cookieNameSessionToken: '_glp_sid',
    cookieNameExternalSessionId: '_glp_esid', // Cookie name for external session ID
    cookieNameProviderId: '_glp_pid', // Cookie storing providerId per domain
    cookieExpiresDays: 30,
    apiEndpoint: 'https://www.glpwinner.com/api/track/v1', // Default to v1 production API endpoint
    // customClickIdParam: 'glp_click_id' // As per TDD, default is glp_click_id
    mdBreakpoint: 768, // Tailwind's default md breakpoint
  };
  const CLICK_ID_PARAM = 'glp_click_id'; // Standard parameter name

  // --- Helper Functions ---
  function decodeQueryParam(encoded) {
    if (!encoded) return null;
    try {
      return decodeURIComponent(encoded.replace(/\+/g, ' '));
    } catch (e) {
      console.error('Error decoding query param:', encoded, e);
      return null;
    }
  }

  function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    // Ensure cookie is set on the root path and for the main domain (stripping www if present)
    var domain = location.hostname.replace(/^www\./i, '');
    document.cookie = name + '=' + (value || '') + expires + '; path=/; domain=' + domain + '; SameSite=Lax';
  }

  function readProviderIdFromCookie() {
    var stored = getCookie(config.cookieNameProviderId);
    if (!stored) {
      return null;
    }
    var parsed = parseInt(stored, 10);
    if (isNaN(parsed)) {
      return null;
    }
    return parsed;
  }

  function persistProviderId(providerId) {
    if (typeof providerId === 'number' && !isNaN(providerId)) {
      config.providerId = providerId;
      setCookie(config.cookieNameProviderId, String(providerId), config.cookieExpiresDays);
    }
  }

  function clearStoredProviderId() {
    config.providerId = null;
    setCookie(config.cookieNameProviderId, '', -1);
  }

  function hasProviderId() {
    return typeof config.providerId === 'number' && !isNaN(config.providerId);
  }

  function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Helper function to determine if the viewport is mobile
  function getIsMobile() {
    return window.innerWidth < config.mdBreakpoint;
  }

  // UUID v4 generator function
  function generateUUID() {
    var d = new Date().getTime();
    var d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16;
      if (d > 0) {
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  // --- SDK Methods ---

  /**
   * Initializes the GLP Tracking SDK.
   * @param {object} userConfig - Configuration object for the SDK.
   *  - providerId (number, optional): Your GLP Winner Provider ID. If omitted, server resolves from domain.
   *  - useSession (boolean, optional, default true): Whether to use GLP-hosted session service.
   *  - userEmail (string, optional): User's email if known at page load, for better soft matching.
   *  - clearCookieOnConversion (boolean, optional, default true): Whether to clear tracking cookies after a conversion.
   *  - testMode (boolean, optional, default false): If true, appends ?testMode=true to API calls to flag data as test data.
   *  - cookieNameClickId (string, optional): Custom name for the click ID cookie.
   *  - cookieNameSessionToken (string, optional): Custom name for the session token cookie.
   *  - cookieExpiresDays (number, optional, default 30): Cookie expiration in days.
   *  - apiEndpoint (string, optional): Base URL for GLP Winner tracking APIs.
   *  - mdBreakpoint (number, optional, default 768): Viewport width for mobile breakpoint.
   */
  glp.init = function (userConfig) {
    if (initialized !== null) {
      console.warn('GLP Tracking SDK already initialized.');
      return;
    }

    // providerId is now optional - server can resolve from domain mapping
    if (userConfig && userConfig.providerId !== undefined && typeof userConfig.providerId !== 'number') {
      console.error('GLP Tracking SDK: providerId must be a number if provided.');
      return;
    }

    config = {
      ...config,
      ...userConfig,
    };

    var hasExplicitProviderId = typeof config.providerId === 'number' && !isNaN(config.providerId);
    if (hasExplicitProviderId) {
      persistProviderId(config.providerId);
    } else {
      var providerIdFromCookie = readProviderIdFromCookie();
      if (providerIdFromCookie !== null) {
        persistProviderId(providerIdFromCookie);
      } else {
        config.providerId = null;
      }
    }

    // Capture click ID on initialization
    var clickIdValue = getQueryParam(CLICK_ID_PARAM); // TDD: default 'glp_click_id'
    var emailFromQuery = decodeQueryParam(getQueryParam('glp_email')); // New: get email from query

    if (clickIdValue) {
      if (config.useSession) {
        // Call /api/track/session to get a session_token
        var payload = {
          clickId: clickIdValue,
          hostname: window.location.hostname, // Server uses for domain-to-provider resolution
          email: config.userEmail || emailFromQuery, // Prioritize email from init config, fallback to query param
          // Add UTM params if present
          utm_source: getQueryParam('utm_source'),
          utm_medium: getQueryParam('utm_medium'),
          utm_campaign: getQueryParam('utm_campaign'),
          utm_term: getQueryParam('utm_term'),
          utm_content: getQueryParam('utm_content'),
        };

        // Only include providerId if explicitly set (otherwise server resolves from domain)
        if (typeof config.providerId === 'number') {
          payload.providerId = config.providerId;
        }

        // Remove null or undefined params from payload before sending
        for (var key in payload) {
          if (payload[key] === null || typeof payload[key] === 'undefined' || payload[key] === '') {
            delete payload[key];
          }
        }

        var sessionApiUrl = config.apiEndpoint + '/session';
        if (config.testMode) {
          sessionApiUrl += '?testMode=true';
        }

        fetch(sessionApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data && data.mode === 'external') {
              // Unmapped domain - server returned external session
              var externalSessionIdFromServer = data.external_session_id || data.session_token;
              if (externalSessionIdFromServer) {
                setCookie(config.cookieNameExternalSessionId, externalSessionIdFromServer, config.cookieExpiresDays);
                _externalSessionId = externalSessionIdFromServer;
              }
              clearStoredProviderId();
              setCookie(config.cookieNameClickId, '', -1);
              initialized = false; // External session mode
              console.log('GLP SDK: Domain not configured:', data.domain);
            } else if (data && data.session_token) {
              setCookie(config.cookieNameSessionToken, data.session_token, config.cookieExpiresDays);
              setCookie(config.cookieNameClickId, '', -1); // Clear raw click ID cookie
              _currentTrackingId = data.session_token;
              _conversionTrackedForCurrentId = false;

              // Store resolved provider ID from server (only if no explicit providerId was provided)
              if (data.resolved_provider_id != null && !(typeof config.providerId === 'number')) {
                var resolvedProviderId = Number(data.resolved_provider_id);
                if (!isNaN(resolvedProviderId)) {
                  persistProviderId(resolvedProviderId);
                  if (data.resolved_from_domain) {
                    console.log(
                      `GLP SDK: Provider ID ${resolvedProviderId} resolved from domain: ${data.resolved_from_domain}`
                    );
                  }
                }
              }

              initialized = true;
              console.log('GLP Tracking SDK initialized.');
              console.log('GLP Tracking Session token set:', data.session_token);
            } else {
              console.error('GLP SDK: Failed to get session token. Storing raw click ID.', data && data.error);
              setCookie(config.cookieNameClickId, clickIdValue, config.cookieExpiresDays);
              _currentTrackingId = clickIdValue; // Fallback to raw click ID
              _conversionTrackedForCurrentId = false;
              initialized = true;
              console.log('GLP Tracking SDK initialized.');
            }
          })
          .catch((error) => {
            console.error('GLP SDK: Error calling session API. Storing raw click ID.', error);
            setCookie(config.cookieNameClickId, clickIdValue, config.cookieExpiresDays);
            _currentTrackingId = clickIdValue; // Fallback to raw click ID
            _conversionTrackedForCurrentId = false;
            initialized = true;
            console.log('GLP Tracking SDK initialized.');
          });
      } else {
        // Not using session service, store glp_click_id directly
        setCookie(config.cookieNameClickId, clickIdValue, config.cookieExpiresDays);
        setCookie(config.cookieNameSessionToken, '', -1); // Clear session token cookie
        _currentTrackingId = clickIdValue;
        _conversionTrackedForCurrentId = false;
        initialized = true;
        console.log('GLP Tracking SDK initialized.');
        console.log('GLP Tracking Click ID set:', clickIdValue);
      }
    } else {
      // No new clickIdValue in URL, check if a cookie exists from a previous session
      _currentTrackingId = getCookie(config.cookieNameSessionToken) || getCookie(config.cookieNameClickId);
      _conversionTrackedForCurrentId = false;

      if (_currentTrackingId) {
        initialized = true;
        console.log('GLP Tracking SDK initialized with internal tracking ID.');
      } else {
        // No internal tracking ID found, this is potentially an external user session
        initialized = false;
        console.log('GLP Tracking SDK: No internal tracking ID. Checking/setting external session ID.');

        _externalSessionId = getCookie(config.cookieNameExternalSessionId);
        if (!_externalSessionId) {
          _externalSessionId = generateUUID();
          setCookie(config.cookieNameExternalSessionId, _externalSessionId, config.cookieExpiresDays);

          var externalSessionLogUrl = config.apiEndpoint + '/external/session';
          // Add testMode if applicable
          if (config.testMode) {
            externalSessionLogUrl += '?testMode=true'; // Assuming testMode might be relevant for external sessions too
          }

          var externalSessionPayload = {
            external_session_id: _externalSessionId,
            hostname: window.location.hostname, // For domain-to-provider resolution
            source_url: window.location.href,
            is_mobile: getIsMobile(),
          };
          if (hasProviderId()) {
            externalSessionPayload.providerId = config.providerId; // Use camelCase for payload
          }

          if (navigator.sendBeacon) {
            try {
              navigator.sendBeacon(externalSessionLogUrl, JSON.stringify(externalSessionPayload));
            } catch (e) {
              console.error('GLP SDK: Error using sendBeacon for external session, falling back to fetch.', e);
              fetch(externalSessionLogUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(externalSessionPayload),
                keepalive: true,
              }).catch(function (err) {
                console.error('GLP SDK: Error logging external session via fetch fallback:', err);
              });
            }
          } else {
            fetch(externalSessionLogUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(externalSessionPayload),
              keepalive: true,
            }).catch(function (err) {
              console.error('GLP SDK: Error logging external session via fetch:', err);
            });
          }
          console.log('GLP Tracking SDK: New external session ID created and attempt to log:', _externalSessionId);
        } else {
          console.log('GLP Tracking SDK: Existing external session ID found:', _externalSessionId);
        }
      }
    }
  };

  /**
   * Tracks a conversion event with retry logic for uninitialized SDK.
   * @param {object} conversionData - Optional data for the conversion.
   *  - email (string, optional): User's email for soft-matching.
   *  - ip (string, optional): User's IP for soft-matching (usually auto-detected by server if not S2S).
   *  - conversion_id (string, optional): Provider's internal ID for this conversion.
   */
  glp.trackConversion = function (conversionData) {
    if (initialized === undefined || initialized === null) {
      console.log('GLP Tracking SDK: init() not yet called. Will retry conversion tracking...');
      var retryDelays = [500, 500, 1000, 1000, 1000, 1000, 1000, 4000];
      var retryIndex = 0;
      function retryConversion() {
        setTimeout(function () {
          if (initialized === false || initialized === true) {
            glp.trackConversion(conversionData);
            return;
          }
          retryIndex++;
          if (retryIndex < retryDelays.length) {
            console.log('GLP Tracking SDK: Still not initialized. Retrying in ' + retryDelays[retryIndex] + 'ms...');
            retryConversion();
          } else {
            console.error('GLP Tracking SDK: Gave up waiting for initialization after multiple retries.');
          }
        }, retryDelays[retryIndex]);
      }
      retryConversion();
      return;
    }

    if (initialized === false) {
      console.log('GLP Tracking SDK: No tracking ID available. DEBUG - logging non GLP Winner affiliated conversion.');
      var logData = {
        // Changed to var to allow adding property
        sourceUrl: window.location.href, // Capture sourceUrl for external log
        isMobile: getIsMobile(), // Capture isMobile for external log
        details: {
          message: 'SDK: non-GLP conversion detected on client.',
        },
      };
      if (hasProviderId()) {
        logData.providerId = config.providerId; // Use camelCase for payload
      }

      // Add external_session_id if available (from SDK state or fallback to cookie)
      var currentExternalSessionId = _externalSessionId || getCookie(config.cookieNameExternalSessionId);
      if (currentExternalSessionId) {
        logData.external_session_id = currentExternalSessionId;
      }

      var externalLogUrl = config.apiEndpoint + '/external/conversion';
      // Add testMode if applicable
      if (config.testMode) {
        externalLogUrl += '?testMode=true';
      }

      if (navigator.sendBeacon) {
        try {
          navigator.sendBeacon(externalLogUrl, JSON.stringify(logData));
        } catch (e) {
          console.error('GLP SDK: Error using sendBeacon for external conversion, falling back to fetch.', e);
          fetch(externalLogUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(logData),
            keepalive: true,
          }).catch((err) => console.error('GLP SDK: Error logging external conversion via fetch fallback:', err));
        }
      } else {
        fetch(externalLogUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(logData),
          keepalive: true,
        }).catch((err) => console.error('GLP SDK: Error logging external conversion via fetch:', err));
      }
      return;
    }

    var payload = {
      sourceUrl: window.location.href, // Add sourceUrl to payload
      isMobile: getIsMobile(), // Add isMobile to payload
      ...conversionData,
    };

    if (hasProviderId()) {
      payload.providerId = config.providerId;
    }

    var clickId = getCookie(config.cookieNameClickId);
    var sessionId = getCookie(config.cookieNameSessionToken);

    if (sessionId) {
      payload.session_token = sessionId;
    } else if (clickId) {
      payload.transaction_id = clickId;
    } else {
      if (!payload.email && !payload.ip) {
        console.warn('GLP SDK: No click ID, session token, email, or IP to track conversion.');
        return;
      }
      console.warn('GLP SDK: Tracking conversion without click_id or session_token (relying on soft-match).');
    }

    var activeId = payload.session_token || payload.transaction_id;
    if (_currentTrackingId === activeId && _conversionTrackedForCurrentId) {
      console.warn(
        'GLP SDK: Conversion already tracked for this ID in current session. Server will deduplicate if needed.'
      );
    }

    var conversionApiUrl = config.apiEndpoint + '/conversion';
    if (config.testMode) {
      conversionApiUrl += '?testMode=true';
    }

    if (navigator.sendBeacon) {
      var beaconQueued = false; // Flag to see if beacon was successfully queued
      try {
        beaconQueued = navigator.sendBeacon(conversionApiUrl, JSON.stringify(payload));
        if (beaconQueued) {
          console.log('GLP SDK: Conversion beacon queued successfully.');
          // Client-side state updates assuming beacon will be sent
          if (_currentTrackingId === activeId) {
            _conversionTrackedForCurrentId = true; // Mark as attempt queued
          }
          if (config.clearCookieOnConversion) {
            console.log('GLP SDK: Clearing tracking cookies post-conversion beacon attempt.');
            setCookie(config.cookieNameClickId, '', -1);
            setCookie(config.cookieNameSessionToken, '', -1);
            _currentTrackingId = null;
            _conversionTrackedForCurrentId = false;
          }
        } else {
          console.error('GLP SDK: navigator.sendBeacon returned false. Attempting fetch with keepalive.');
          // Fall through to fetch if beaconQueued is false (will be handled by !beaconQueued check)
        }
      } catch (e) {
        console.error('GLP SDK: Error using sendBeacon for internal conversion, falling back to fetch.', e);
        beaconQueued = false; // Ensure we fall through to fetch
      }

      if (!beaconQueued) {
        // If beacon wasn't queued (returned false or threw error)
        // Fallback to fetch with keepalive
        fetch(conversionApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        })
          .then((response) => response.json())
          .then((data) => {
            if (
              data &&
              (data.status === 'ok' || data.status === 'duplicate' || data.status === 'attribution_confirmed')
            ) {
              console.log('GLP Conversion tracked (via fetch fallback):', data);
              if (_currentTrackingId === activeId) {
                _conversionTrackedForCurrentId = true;
              }
              if (config.clearCookieOnConversion) {
                console.log('GLP SDK: Clearing tracking cookies post-conversion (fetch fallback).');
                setCookie(config.cookieNameClickId, '', -1);
                setCookie(config.cookieNameSessionToken, '', -1);
                _currentTrackingId = null;
                _conversionTrackedForCurrentId = false;
              }
            } else {
              console.error('GLP SDK: Failed to track conversion (fetch fallback).', data && data.error);
            }
          })
          .catch((error) => {
            console.error('GLP SDK: Error calling conversion API (fetch fallback).', error);
          });
      }
    } else {
      // navigator.sendBeacon is not available
      // Fallback to fetch with keepalive
      fetch(conversionApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      })
        .then((response) => response.json())
        .then((data) => {
          if (
            data &&
            (data.status === 'ok' || data.status === 'duplicate' || data.status === 'attribution_confirmed')
          ) {
            console.log('GLP Conversion tracked (via fetch):', data);
            if (_currentTrackingId === activeId) {
              _conversionTrackedForCurrentId = true;
            }
            if (config.clearCookieOnConversion) {
              console.log('GLP SDK: Clearing tracking cookies post-conversion (fetch).');
              setCookie(config.cookieNameClickId, '', -1);
              setCookie(config.cookieNameSessionToken, '', -1);
              _currentTrackingId = null;
              _conversionTrackedForCurrentId = false;
            }
          } else {
            console.error('GLP SDK: Failed to track conversion (fetch).', data && data.error);
          }
        })
        .catch((error) => {
          console.error('GLP SDK: Error calling conversion API (fetch).', error);
        });
    }
  };

  /**
   * Tracks a lead event with retry logic for uninitialized SDK.
   * @param {object} leadData - Optional data for the lead.
   *  - email (string, optional): User's email.
   *  - lead_ref (string, optional): Provider's internal ID for this lead.
   * @param {string} leadStep - Optional string to denote the step of the lead.
   */
  glp.trackLead = function (leadData, leadStep) {
    if (initialized === undefined || initialized === null) {
      console.log('GLP Tracking SDK: init() not yet called. Will retry lead tracking...');
      var retryDelays = [500, 500, 1000, 1000, 1000, 1000, 1000, 4000]; // Same retry as conversion
      var retryIndex = 0;
      function retryLead() {
        setTimeout(function () {
          if (initialized === false || initialized === true) {
            glp.trackLead(leadData, leadStep); // Pass both arguments
            return;
          }
          retryIndex++;
          if (retryIndex < retryDelays.length) {
            console.log(
              'GLP Tracking SDK: Still not initialized for lead. Retrying in ' + retryDelays[retryIndex] + 'ms...'
            );
            retryLead();
          } else {
            console.error('GLP Tracking SDK: Gave up waiting for initialization for lead after multiple retries.');
          }
        }, retryDelays[retryIndex]);
      }
      retryLead();
      return;
    }

    var payload = {
      sourceUrl: window.location.href,
      isMobile: getIsMobile(),
      step: leadStep, // Add the leadStep to the payload
      ...(leadData || {}), // Spread leadData if it exists
    };

    if (hasProviderId()) {
      payload.providerId = config.providerId;
    }

    var leadApiUrl;

    if (initialized === false) {
      // External user
      console.log('GLP Tracking SDK: Tracking external lead.');
      var currentExternalSessionId = _externalSessionId || getCookie(config.cookieNameExternalSessionId);
      if (currentExternalSessionId) {
        payload.external_session_id = currentExternalSessionId;
      } else {
        console.warn('GLP SDK: External lead tracking attempted without an external session ID.');
        // Potentially log this or decide if it should proceed without external_session_id
        // For now, it will proceed and the backend might reject or handle it.
      }
      leadApiUrl = config.apiEndpoint + '/external/lead';
    } else {
      // Internal user (initialized === true)
      console.log('GLP Tracking SDK: Tracking internal lead.');
      var clickId = getCookie(config.cookieNameClickId);
      var sessionId = getCookie(config.cookieNameSessionToken);

      if (sessionId) {
        payload.session_token = sessionId;
      } else if (clickId) {
        payload.transaction_id = clickId; // transaction_id is the glp_click_id
      } else {
        // This case should ideally not happen if initialized is true,
        // but as a safeguard:
        console.warn(
          'GLP SDK: Internal lead tracking attempted without click_id or session_token, though SDK reported as initialized for internal.'
        );
        // Depending on backend, this might be rejected or rely on soft-matching if implemented for leads.
      }
      leadApiUrl = config.apiEndpoint + '/lead';
    }

    if (config.testMode) {
      leadApiUrl += '?testMode=true';
    }

    // Remove null or undefined params from payload before sending
    for (var key in payload) {
      if (payload[key] === null || typeof payload[key] === 'undefined') {
        delete payload[key];
      }
    }

    if (navigator.sendBeacon) {
      var beaconQueued = false;
      try {
        beaconQueued = navigator.sendBeacon(leadApiUrl, JSON.stringify(payload));
        if (beaconQueued) {
          console.log('GLP SDK: Lead beacon queued successfully.');
          // DO NOT clear cookies for leads
        } else {
          console.error('GLP SDK: navigator.sendBeacon returned false for lead. Attempting fetch with keepalive.');
        }
      } catch (e) {
        console.error('GLP SDK: Error using sendBeacon for lead, falling back to fetch.', e);
        beaconQueued = false;
      }

      if (!beaconQueued) {
        fetch(leadApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data && data.status === 'ok') {
              console.log('GLP Lead tracked (via fetch fallback):', data);
            } else {
              console.error('GLP SDK: Failed to track lead (fetch fallback).', data && data.error);
            }
          })
          .catch((error) => {
            console.error('GLP SDK: Error calling lead API (fetch fallback).', error);
          });
      }
    } else {
      // navigator.sendBeacon not available
      fetch(leadApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.status === 'ok') {
            console.log('GLP Lead tracked (via fetch):', data);
          } else {
            console.error('GLP SDK: Failed to track lead (fetch).', data && data.error);
          }
        })
        .catch((error) => {
          console.error('GLP SDK: Error calling lead API (fetch).', error);
        });
    }
  };

  function processQueue() {
    if (existingQueue && existingQueue.length > 0) {
      console.log('GLP SDK: Processing', existingQueue.length, 'queued commands');
      for (var i = 0; i < existingQueue.length; i++) {
        var cmd = existingQueue[i];
        if (cmd && cmd.method && glp[cmd.method]) {
          glp[cmd.method].apply(glp, cmd.args || []);
        }
      }
    }
  }

  window.glp = glp;
  processQueue();
})(window);

// Queue stub that can be included inline before the SDK loads
// This allows calling glp.init() and glp.trackConversion() before the SDK is loaded
/*
<script>
(function() {
  if (!window.glp) {
    window.glp = {
      _queue: [],
      init: function() {
        window.glp._queue.push({method: 'init', args: arguments});
      },
      trackConversion: function() {
        window.glp._queue.push({method: 'trackConversion', args: arguments});
      },
      trackLead: function() { // Added trackLead to queue stub
        window.glp._queue.push({method: 'trackLead', args: arguments});
      }
    };
  }
})();
*/
