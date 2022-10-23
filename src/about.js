import headerBuilder from './header';
import footerBuilder from './footer';

const aboutBuilder = (() => {
  const content = document.getElementById('content');
  const createMiddleMainImage = () => {
    const mainImage = document.createElement('img');
    mainImage.setAttribute('id', 'mainimage');
    mainImage.setAttribute('src', 'images/pasta-1181189_1920.jpg');
    return mainImage;
  };
  const createMiddleMainText = () => {
    const mainText = document.createElement('div');
    mainText.setAttribute('id', 'maintext');
    const p = document.createElement('p');
    p.textContent = 'Our story – Passion for food';
    mainText.appendChild(p);
    return mainText;
  };
  const createMiddleMainElement = () => {
    const middleMainElement = document.createElement('div');
    middleMainElement.setAttribute('id', 'mainelement');
    middleMainElement.appendChild(createMiddleMainImage());
    middleMainElement.appendChild(createMiddleMainText());
    return middleMainElement;
  };
  const middleBuilder = () => {
    const middle = document.createElement('div');
    middle.setAttribute('id', 'middle');
    middle.appendChild(createMiddleMainElement());
    return middle;
  };
  const buildAboutpage = () => {
    content.appendChild(headerBuilder.buildHeader());
    content.appendChild(middleBuilder());
    content.appendChild(footerBuilder.buildFooter());
  };
  return { buildAboutpage };
})();

export default aboutBuilder;
