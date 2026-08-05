<script async type="application/javascript" src="{{env.SWG_JS_PUBLISHER_URL}}"></script>

# Preferred Sources: Implement with HTML

For layouts requiring custom HTML framing or container semantics without writing JavaScript, `publisher.js` supports applying the `google-add-preferred-source-btn` data attribute directly to non-button structural elements like `<divs>` or spans.

### Try it out
Below is a live interactive Preferred Source button embedded within a styled call-out banner container:

<div style="border: 1px solid #ccc; padding: 16px; border-radius: 8px; background: #f9f9f9; max-width: 400px; margin: 20px 0;">
  <h4 style="margin-top: 0;">Support Our Journalism</h4>
  <p style="font-size: 14px; color: #555;">Add us to your preferred Google News sources for quick access to our latest articles.</p>
  <div google-add-preferred-source-btn></div>
</div>

---

## How to Implement
Apply `google-add-preferred-source-btn` to any HTML block element. The library will automatically mount the responsive button iframe inside the container while preserving your document structure.

```html
<div class="article-footer-promo">
  <h3>Never miss a breaking story</h3>
  <div google-add-preferred-source-btn></div>
</div>
```
