(() => {
  const halo = document.querySelector('.cursor-halo');
  if (!halo) return;

  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = false;
  let positioned = false;
  let frame = 0;
  let lastTime = 0;
  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;

  function paint() {
    halo.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  }

  function render(time) {
    const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16.7;
    const blend = 1 - Math.exp(-elapsed / 55);
    lastTime = time;
    x += (targetX - x) * blend;
    y += (targetY - y) * blend;
    paint();

    if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.15) {
      frame = requestAnimationFrame(render);
    } else {
      frame = 0;
      lastTime = 0;
    }
  }

  function move(event) {
    if (event.pointerType !== 'mouse') return;
    targetX = event.clientX;
    targetY = event.clientY;

    if (!positioned) {
      x = targetX;
      y = targetY;
      positioned = true;
      paint();
    }

    halo.classList.add('is-visible');
    if (!frame) frame = requestAnimationFrame(render);
  }

  function hide() {
    halo.classList.remove('is-visible');
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    positioned = false;
  }

  function leave(event) {
    if (!event.relatedTarget) hide();
  }

  function visibilityChanged() {
    if (document.hidden) hide();
  }

  function configure() {
    const nextEnabled = pointer.matches && !reducedMotion.matches;
    if (nextEnabled === enabled) return;
    enabled = nextEnabled;
    halo.hidden = !enabled;

    if (enabled) {
      window.addEventListener('pointermove', move, { passive: true });
      document.addEventListener('pointerout', leave, { passive: true });
      window.addEventListener('blur', hide);
      document.addEventListener('visibilitychange', visibilityChanged);
    } else {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', hide);
      document.removeEventListener('visibilitychange', visibilityChanged);
      hide();
    }
  }

  pointer.addEventListener('change', configure);
  reducedMotion.addEventListener('change', configure);
  configure();
})();
