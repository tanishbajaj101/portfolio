import { s as e } from './sr.BrDI4Z8O.js';
import { s as r } from './config.8JBl_d4u.js';
if (e) {
  const t = document.getElementById('featured-title');
  (t && e.reveal(t, r()),
    document.querySelectorAll('[id^="featured-project-"]').forEach((o, f) => {
      e.reveal(o, r(f * 100));
    }));
}
