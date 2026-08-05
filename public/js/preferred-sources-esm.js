/**
 * @fileoverview Client-side modern ES Module integration for Preferred Sources.
 */

import { preferredSource } from 'process.env.SWG_JS_PUBLISHER_MJS_URL';

// 1. Initialize runtime directly using the imported module instance
preferredSource.init({ theme: 'dark' });

// 2. Hook up programmatic manual trigger
const triggerBtn = document.querySelector('#custom-esm-trigger-btn');
if (triggerBtn) {
  triggerBtn.onclick = () => {
    preferredSource.addPreferredSource();
  };
}
