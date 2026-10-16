# Index marketing snippet

Below are the snippets to add to index.html (HEAD and BODY) to enable OG tags, Netlify form and a minimal cookie consent banner. Apply carefully — these are additive and non-destructive.

--- HEAD SNIPPET (insert inside <head>) ---

<meta property="og:title" content="Forgemonde — un monde qui se souvient de vos choix" />
<meta property="og:description" content="Jouez gratuitement — un jeu narratif en navigateur. IA optionnelle. Jouable en 30s." />
<meta property="og:image" content="https://forge-des-mondes.netlify.app/press/press-kit/screenshot1.svg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />

--- BODY SNIPPET (place near top of <body>) ---

<!-- Newsletter form (Netlify Forms) -->
<section id="marketing-newsletter" style="padding:14px;background:linear-gradient(180deg,#16151f,#0d0c14);color:#ecebe6;text-align:center;">
  <h2>Joue maintenant — reste informé des mises à jour</h2>
  <form name="newsletter" method="POST" data-netlify="true" style="display:inline-block;margin-top:8px;">
    <input type="hidden" name="form-name" value="newsletter" />
    <input id="email" name="email" type="email" placeholder="Ton e‑mail" required style="padding:8px 10px;border-radius:8px;border:1px solid #2a2936;margin-right:8px;" />
    <button type="submit" style="padding:8px 12px;border-radius:8px;background:#d2a24c;border:none;color:#14121b;font-weight:600;">S’inscrire</button>
  </form>
</section>

<!-- Minimal cookie consent -->
<div id="cookie-consent" style="position:fixed;right:12px;bottom:12px;background:#16151f;color:#ecebe6;padding:10px 14px;border-radius:10px;border:1px solid #2a2936;font-size:14px;display:none;z-index:9999;">
  <div style="max-width:320px;">Nous utilisons des cookies pour améliorer l'expérience. En continuant, vous acceptez le suivi minimal.</div>
  <div style="margin-top:8px;text-align:right;"><button id="cookie-accept" style="background:#d2a24c;border:none;padding:6px 10px;border-radius:6px;color:#14121b;font-weight:600;">Accepter</button></div>
</div>

<script>
(function(){try{if(localStorage.getItem('forge_cookie')){return;}var el=document.getElementById('cookie-consent');if(!el)return;el.style.display='block';document.getElementById('cookie-accept').addEventListener('click',function(){localStorage.setItem('forge_cookie','1');el.style.display='none';});}catch(e){} })();
</script>
