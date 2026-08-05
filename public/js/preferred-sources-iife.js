/**
 * @fileoverview Client-side traditional IIFE integration for Preferred Sources.
 */

(self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || []).push((api) => {
  // 1. Manually initialize runtime with dark theme styling
  api.init({ theme: 'dark' });

  // 2. Attach click listener to custom manual action button
  const manualBtn = document.getElementById('custom-trigger-btn');
  if (manualBtn) {
    manualBtn.addEventListener('click', () => {
      api.addPreferredSource();
    });
  }
});
