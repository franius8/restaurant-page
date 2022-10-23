import headerBuilder from './header';
import footerBuilder from './footer';

const aboutBuilder = (() => {
  const content = document.getElementById('content');
  const buildAboutpage = () => {
    content.appendChild(headerBuilder.buildHeader());
    content.appendChild(footerBuilder.buildFooter());
  };
  return { buildAboutpage };
})();

export default aboutBuilder;
