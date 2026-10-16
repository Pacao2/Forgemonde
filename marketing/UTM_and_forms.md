# UTM & Netlify Forms guide

Netlify Forms snippet (place in the page where you want the newsletter form):

<form name="newsletter" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="newsletter" />
  <label for="email">Ton e‑mail</label>
  <input id="email" name="email" type="email" required />
  <button type="submit">S’inscrire</button>
</form>

Example UTM for campaigns:
- ?utm_source=producthunt&utm_medium=post&utm_campaign=launch_v1
- ?utm_source=reddit&utm_medium=post&utm_campaign=launch_v1

Recommended analytics: Plausible (privacy-friendly) or Google Analytics (detailed). Add consent banner before enabling tracking.
