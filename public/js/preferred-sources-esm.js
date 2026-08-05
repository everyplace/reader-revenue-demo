/**
 * @fileoverview Client-side modern ES Module integration for Preferred Sources.
 */

import { preferredSource } from 'process.env.SWG_JS_PUBLISHER_MJS_URL';

(async () => {
  // 1. Await runtime initialization via our newly introduced Promise API
  const api = await window.PREFERRED_SOURCE.ready();

  // 2. Initialize runtime manually (ESM imports are passive-by-default)
  api.init({ theme: 'dark' });

  // 3. Hook up programmatic manual trigger
  const triggerBtn = document.getElementById('custom-esm-trigger-btn');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      api.addPreferredSource();
    });
  }
})();
