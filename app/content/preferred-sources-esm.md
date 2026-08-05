# Preferred Sources: Implement with ESM

This article demonstrates an alternative method for integrating the Preferred Sources library using an **ES Module (`.mjs`)** distribution. Alongside standard script tag inclusion, developers working in environments that utilize module bundlers or `<script type="module">` tags can opt to import the SDK directly and coordinate runtime execution using top-level imports and clean async/await resolution.

### Try it out
Below is a live widget instantiated entirely via top-level ES Module import and direct instance interaction:

<div style="margin: 20px 0; display: flex; gap: 12px; align-items: center;">
  <div google-add-preferred-source-btn id="custom-esm-button-container"></div>
  <button id="custom-esm-trigger-btn" class="btn btn-success">Trigger via ESM SDK</button>
</div>

---

## How to Implement
1. Import `preferredSource` directly from `publisher.mjs`.
2. Call `preferredSource.init()` directly on the imported instance to configure runtime options.
3. Bind flow initiation directly to custom UI triggers using `.onclick = () => { preferredSource.addPreferredSource(); }`.
4. Register event callbacks directly on `preferredSource` using clean `async` / `await` syntax.

```html
<script type="module">
  // 1. Import module singleton directly
  import { preferredSource } from "{{env.SWG_JS_PUBLISHER_MJS_URL}}";

  // 2. Initialize directly using the imported module instance
  preferredSource.init({ theme: 'dark' });

  // 3. Programmatically bind flow invocation via onclick
  const triggerBtn = document.querySelector('#custom-esm-trigger-btn');
  triggerBtn.onclick = () => {
    preferredSource.addPreferredSource();
  };

  // 4. Track button clicks
  preferredSource.setOnAddPreferredSourceClick(() => {
    console.log('The user clicked the Add Preferred Source button.');
  });

  // 5. Register an async callback to handle final user consent responses
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
</script>
```
