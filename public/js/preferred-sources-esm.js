/**
 * @fileoverview Client-side modern ES Module integration for Preferred Sources.
 */

import { preferredSource } from 'process.env.SWG_JS_PUBLISHER_MJS_URL';

// 1. Initialize runtime directly using the imported module instance
preferredSource.init({ theme: 'dark' });

// 2. Hook up programmatic manual trigger via onclick
const triggerBtn = document.querySelector('#custom-esm-trigger-btn');
if (triggerBtn) {
  triggerBtn.onclick = () => {
    preferredSource.addPreferredSource();
  };
}

// 3. Track button clicks
preferredSource.setOnAddPreferredSourceClick(() => {
  console.log('The user clicked the Add Preferred Source button.');
});

// 4. Register an async callback to handle final user consent responses
preferredSource.setOnAddPreferredSourceResponse(async (responsePromise) => {
  const response = await responsePromise;
  if (response.actionCompleted) {
    console.log('Successfully added as preferred source!');
  } else if (response.alreadyCompleted) {
    console.log('Already a preferred source.');
  } else if (response.ineligible) {
    console.log('Source is ineligible.');
  }
});
