/**
 * @fileoverview Client-side traditional IIFE integration for Preferred Sources.
 */

(self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || []).push(
  (preferredSource) => {
    // 1. Manually initialize runtime with dark theme styling
    preferredSource.init({theme: 'dark'});

    // 2. Attach onclick listener to custom manual action button
    const manualBtn = document.querySelector('#custom-trigger-btn');
    if (manualBtn) {
      manualBtn.onclick = () => {
        preferredSource.addPreferredSource();
      };
    }
  }
);
