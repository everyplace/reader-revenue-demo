# Preferred Sources: Implement with JS (ESM)

Welcome to the cutting edge of Subscribe with Google integrations. Using our new **ES Module (`.mjs`)** architecture, developers using modern tooling or `<script type="module">` can import the Preferred Sources SDK directly without global array queue hacks or `preferred-sources-control="manual"` flags.

### Why ESM is better:
- **Passive-by-Default:** Simply importing `publisher.mjs` has zero side effects. It never scans your DOM or triggers requests until you explicitly command it.
- **Promise `.ready()` API:** Cleanly await initialization using standard modern async/await patterns without nested callback syntax.

### Try it out
Below is a live widget instantiated entirely via ES Module import and `.ready()` Promise resolution:

<div style="margin: 20px 0; display: flex; gap: 12px; align-items: center;">
  <div google-add-preferred-source-btn id="custom-esm-button-container"></div>
  <button id="custom-esm-trigger-btn" class="btn btn-success">Trigger via ESM SDK</button>
</div>

---

## How to Implement
1. Import `preferredSource` from `publisher.mjs` directly in your ES Module script.
2. Await `window.PREFERRED_SOURCE.ready()` (or interact with the exported instance directly).
3. Call `api.init()` and invoke `addPreferredSource()` whenever ready.

```html
<script type="module">
  import { preferredSource } from "{{env.SWG_JS_PUBLISHER_MJS_URL}}";

  (async () => {
    // 1. Await runtime readiness via Promise
    const api = await window.PREFERRED_SOURCE.ready();

    // 2. Initialize with customized theme options
    api.init({ theme: 'dark' });

    // 3. Programmatically bind flow invocation
    document.getElementById('custom-esm-trigger-btn').addEventListener('click', () => {
      api.addPreferredSource();
    });
  })();
</script>
```
