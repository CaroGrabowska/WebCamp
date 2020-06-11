(function () {
  document.addEventListener(
    'DOMContentLoaded',
    function () {

      const widget = document.querySelector('.js-widget-sale');

      window.addEventListener('scroll',function () {
         const currentScroll = window.pageYOffset;

         if (currentScroll > 300) {
           // down
           widget.classList.add('js-display-none');
         } else if (currentScroll < 300) {
           // up
            widget.classList.remove('js-display-none');
         }
      });

      //MOBILE MENU LIST
      const toggleMenuMobile = {
        emitter: document.querySelector('.js-mobile-toogler-emitter'),
        absorber: document.querySelector('.js-mobile-toogler-adapter'),
        overlay: document.querySelector('.js-mobile-overlay'),
        body: document.body,
        classToElement: 'js-navbar-scroll',
        classToBody: 'js-overflow-hidden',
        classVisibility: 'js-display-mobile',
        classVisibilityOverlay: 'js-display-mobile-overlay',
      };

      //OPEN MOBILE MENU
      toggleMenuMobile.emitter.addEventListener('click', (e) => {
        toggleMenuMobile.overlay.classList.add(toggleMenuMobile.classVisibilityOverlay);
        toggleMenuMobile.absorber.classList.add(toggleMenuMobile.classVisibility);
        toggleMenuMobile.absorber.classList.add(toggleMenuMobile.classToElement);
        toggleMenuMobile.body.classList.add(toggleMenuMobile.classToBody);
      });

      //CLOSE  MOBILE MENU
      toggleMenuMobile.overlay.addEventListener('click', (e) => {
        toggleMenuMobile.overlay.classList.remove(toggleMenuMobile.classVisibilityOverlay);
        toggleMenuMobile.absorber.classList.remove(toggleMenuMobile.classVisibility);
        toggleMenuMobile.absorber.classList.remove(toggleMenuMobile.classToElement);
        toggleMenuMobile.body.classList.remove(toggleMenuMobile.classToBody);
      });

      //FOOTER MENU LIST
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