(function () {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      const toggle = {
        emitterEl: document.querySelectorAll('.js-toggle-emitter'),
        emitter: 'js-toggle-emitter',
        absorber: '.js-toggle-absorber',
        class: 'js-hidden',
      };

      toggle.emitterEl.forEach((emitter) =>
        emitter.addEventListener('click', (e) => {
          let emitter = e.target;

          if (emitter.classList.contains(toggle.emitter)) {
            let absorber = emitter.parentElement.querySelector(toggle.absorber);
            absorber.classList.toggle(toggle.class);
          }
        })
      );
    },
    false
  );
})();
