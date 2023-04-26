// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('click', documentActive);

function documentActive(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu='${subMenuId}']`);
        const subMenuCatalog = document.querySelector('.sub-menu-catalog');

        if (subMenu) {
            const activeTargetElement = document.querySelector('._sub-menu-active');
            const activeBlock = document.querySelector('._sub-menu-open');


            if (activeTargetElement && activeTargetElement !== targetElement) {
                console.log(activeTargetElement);
                activeTargetElement.classList.remove('_sub-menu-active')
                activeBlock.classList.remove('_sub-menu-open')
            }


            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open')
        } else {
            console.log('submenu Error');
        }
        e.preventDefault();
    }
};
