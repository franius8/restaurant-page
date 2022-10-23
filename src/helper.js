import homepageBuilder from './homepage';
import aboutBuilder from './about';
import menuBuilder from './menu';

const helper = (() => {
  const markActiveButton = (id) => {
    const button = document.getElementById(id);
    button.classList.add('active');
  };
  const clearSite = () => {
    const content = document.getElementById('content');
    content.textContent = '';
  };
  const addNavbarListeners = () => {
    const navButtons = document.querySelectorAll('.navbaritem');
    navButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        helper.clearSite();
        // eslint-disable-next-line prefer-destructuring
        const id = e.target.id;
        switch (id) {
          case 'homepage':
            homepageBuilder.buildHomepage();
            break;
          case 'about':
            aboutBuilder.buildAboutpage();
            break;
          case 'menu':
            menuBuilder.buildMenupage();
            break;
          default:
            break;
        }
        addNavbarListeners();
        markActiveButton(id);
      });
    });
  };
  return { clearSite, addNavbarListeners, markActiveButton };
})();

export default helper;
