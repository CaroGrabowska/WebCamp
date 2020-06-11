(function () {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      //HIDE ELEMENT ON SCROLL
      const widget = document.querySelector('.js-widget-sale');

      window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 300) {
          // scroll down
          widget.classList.add('js-display-none');
        } else if (currentScroll < 300) {
          // scroll up
          widget.classList.remove('js-display-none');
        }
      });

      //SUBMENUS TOGGLE ACTION

      const menu = {
        main: document.querySelector('.js-main-menu'),
        parents: document.querySelectorAll('.js-menu-parent'),
        child: '.js-menu-child',
        mainAttr: 'data-menu-active',
        parentAttr: 'data-parent',
        childAttr: 'data-child',
      };

      const submenu = {
        main: document.querySelector('.js-main-menu'),
        parents: document.querySelectorAll('.js-submenu-parent'),
        child: '.js-submenu-child',
        mainAttr: 'data-submenu-active',
        parentAttr: 'data-subparent',
        childAttr: 'data-subchild',
      };

      menu.parents.forEach((menuitem) =>
        menuitem.addEventListener('click', function () {
         setMainDataState(menu, 'data-menu-active');
         setParentDataState(this, menu, 'data-parent');
         setClosestChildDataState(this, menu, 'data-child');
        })
      );

      submenu.parents.forEach((submenuitem) =>
        submenuitem.addEventListener('click', function () {
          setMainDataState(submenu, 'data-submenu-active');
          setParentDataState(this, submenu, 'data-subparent');
          setClosestChildDataState(this, submenu, 'data-subchild');
        })
      );

      function setMainDataState(menuObj,attrName) {
        let currentMenu = menu.main;
        let currentMenuDataAttr = currentMenu.getAttribute(attrName);
        let dataAttrToSet = currentMenuDataAttr === 'false' ? 'true' : 'false';
        currentMenu.setAttribute(menuObj.mainAttr, dataAttrToSet);
      }

      function setParentDataState(el, menuObj, attrName) {
        let currentSubmenu = el;
        let currentSubmenuDataAttr = el.getAttribute(attrName);
        let dataAttrToSet = currentSubmenuDataAttr === 'false' ? 'true' : 'false';
        currentSubmenu.setAttribute(menuObj.parentAttr, dataAttrToSet);
      }

      function setClosestChildDataState(parent, menuObj, attrName) {
        let closestChild = parent.parentElement.querySelector(menuObj.child);
        let currentChildDataAttr = closestChild.getAttribute(attrName);
        let dataAttrToSet = currentChildDataAttr === 'false' ? 'true' : 'false';
        closestChild.setAttribute(menuObj.childAttr, dataAttrToSet);
      }

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
