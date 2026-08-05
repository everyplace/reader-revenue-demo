/**
 * @fileoverview Client-side traditional IIFE integration for Preferred Sources.
 */

(self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || []).push((preferredSource) => {
  // 1. Manually initialize runtime with dark theme styling
  preferredSource.init({ theme: 'dark' });

  // 2. Attach onclick listener to custom manual action button
  const manualBtn = document.querySelector('#custom-trigger-btn');
  if (manualBtn) {
    manualBtn.onclick = () => {
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
});
