import Alpine from "alpinejs";

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
  var htmx: { process: (elt: Element | null) => void };
}

window.Alpine = Alpine;

document.addEventListener("astro:after-swap", () => {
  htmx.process(document.body);
  Alpine.initTree(document.body);
});

function bridgeToastEvent(e: Event) {
  window.dispatchEvent(
    new CustomEvent("make-toast", { detail: (e as CustomEvent).detail }),
  );
}
document.body.addEventListener("make-toast", bridgeToastEvent);
document.addEventListener("astro:after-swap", () => {
  document.body.addEventListener("make-toast", bridgeToastEvent);
});

Alpine.start();
