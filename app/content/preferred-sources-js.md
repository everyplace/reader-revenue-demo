<script async preferred-sources-control="manual" type="application/javascript" src="{{env.SWG_JS_PUBLISHER_URL}}"></script>

# Preferred Sources: Implement with JS

When you need programmatic control over runtime settings (such as dark theme formatting or multi-language localization), or wish to manually trigger the Preferred Source flow from a custom user interface, you can integrate via JavaScript using traditional IIFE callback queues.

### Try it out
This demo uses `preferred-sources-control="manual"` to suppress automatic DOM scanning, sets a custom dark theme via `api.init({theme: 'dark'})`, and connects a custom styled HTML button to manually fire `api.addPreferredSource()`:

<div style="margin: 20px 0; display: flex; gap: 12px; align-items: center;">
  <div google-add-preferred-source-btn id="custom-iife-button-container"></div>
  <button id="custom-trigger-btn" class="btn btn-primary">Manually Trigger Flow via JS</button>
</div>

---

## How to Implement
1. Include `publisher.js` with the `preferred-sources-control="manual"` attribute.
2. Push an initialization callback onto the global `self.PREFERRED_SOURCE` queue.
3. Call `api.init(options)` with your configuration options and use `api.addPreferredSource()` to programmatically launch the flow.

```html
<script async preferred-sources-control="manual" src="{{env.SWG_JS_PUBLISHER_URL}}"></script>
<script>
  (self.PREFERRED_SOURCE = self.PREFERRED_SOURCE || []).push(function(api) {
    // Initialize buttons with explicit dark styling
    api.init({ theme: 'dark' });

    // Programmatically launch flow on custom button click
    document.getElementById('custom-trigger-btn').addEventListener('click', function() {
      api.addPreferredSource();
    });
  });
</script>
```
