import homepageBuilder from './homepage';
import aboutBuilder from './about';

const helper = (() => {
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
            addNavbarListeners();
            break;
          case 'about':
            aboutBuilder.buildAboutpage();
            addNavbarListeners();
            break;
          default:
            break;
        }
      });
    });
  };
  return { clearSite, addNavbarListeners };
})();

export default helper;
