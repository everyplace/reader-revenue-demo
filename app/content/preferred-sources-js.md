<script async preferred-sources-control="manual" type="application/javascript" src="{{env.SWG_JS_PUBLISHER_URL}}"></script>

# Preferred Sources: Implement with JS

When you need programmatic control over runtime settings (such as dark theme formatting or multi-language localization), or wish to manually trigger the Preferred Source flow from a custom user interface, you can integrate via JavaScript using traditional IIFE callback queues.

### Try it out
This demo uses `preferred-sources-control="manual"` to suppress automatic DOM scanning, sets a custom dark theme via `preferredSource.init({theme: 'dark'})`, and connects a custom styled HTML button to manually fire `preferredSource.addPreferredSource()`:

<div style="margin: 20px 0; display: flex; gap: 12px; align-items: center;">
  <div google-add-preferred-source-btn id="custom-iife-button-container"></div>
  <button id="custom-trigger-btn" class="btn btn-primary">Manually Trigger Flow via JS</button>
</div>

---

## How to Implement
1. Include `publisher.js` with the `preferred-sources-control="manual"` attribute.
2. Push an initialization callback onto the global `self.PREFERRED_SOURCE` queue.
3. Call `preferredSource.init(options)` with your configuration options and bind custom buttons via `.onclick = () => { preferredSource.addPreferredSource(); }`.
4. Register event callbacks directly on `preferredSource` using clean `async` / `await` syntax.

```html
<script async preferred-sources-control="manual" src="{{env.SWG_JS_PUBLISHER_URL}}"></script>
<script>
  (self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || []).push(function(preferredSource) {
    // 1. Initialize buttons with explicit dark styling
    preferredSource.init({ theme: 'dark' });

    // 2. Programmatically launch flow on custom button click via onclick
    const triggerBtn = document.querySelector('#custom-trigger-btn');
    triggerBtn.onclick = () => {
      preferredSource.addPreferredSource();
    };

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
</script>
```
