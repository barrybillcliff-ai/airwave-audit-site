document.documentElement.classList.add("js");
const menu = document.querySelector(".menu"),
  nav = document.querySelector(".navlinks");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
document
  .querySelectorAll(".navlinks a")
  .forEach((a) =>
    a.addEventListener("click", () => nav?.classList.remove("open")),
  );
const obs = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    }),
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((e) => obs.observe(e));
document
  .querySelectorAll("[data-year]")
  .forEach((e) => (e.textContent = new Date().getFullYear()));
if (!document.querySelector(".footer"))
  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer class="footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="/"><span class="brand-mark" style="border-color:#8cd0c8;color:#8cd0c8">A</span>AirWave Audit</a><p>Detailed home environment screening and property mapping across southern NH and northeastern MA.</p></div><div><h3>Services</h3><p><a href="/air-quality/">Indoor air survey</a></p><p><a href="/rf-emf/">RF &amp; EMF mapping</a></p><p><a href="/pricing/">Pricing</a></p></div><div><h3>Company</h3><p><a href="/about/">About</a></p><p><a href="/attorneys-agents/">Attorneys &amp; agents</a></p><p><a href="/book/">Contact / book</a></p></div><div><h3>Contact</h3><p><a href="tel:+19788846732">978-884-6732</a></p><p><a href="mailto:info@airwavehomeaudit.com">info@airwavehomeaudit.com</a></p><p>NH · Merrimack Valley · North Shore</p></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} AirWave Audit</span><span>Measurement and documentation only; not a health assessment. <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a></span></div></div></footer>`,
  );
document
  .querySelectorAll('a[href="/assets/airwave-referral-sheet.pdf"]')
  .forEach((a) => (a.href = "/referral-sheet/"));
