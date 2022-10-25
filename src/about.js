import headerBuilder from './header';
import footerBuilder from './footer';

const aboutBuilder = (() => {
  const content = document.getElementById('content');
  const firstRowContent = ['Passion', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sagittis est et feugiat. Morbi sit amet condimentum erat. Mauris nulla nisl, facilisis ut eros eu, tristique faucibus dolor. Cras pretium erat augue, vitae cursus justo condimentum quis. Maecenas blandit porta purus, non elementum ipsum aliquam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis eu ante ac viverra. Ut at lobortis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae varius ligula. Aenean a tortor augue. Proin tincidunt mattis ligula nec finibus. In ac viverra ipsum. Integer id lorem nisl.', 'images/cafe-1872888_1920-2.jpg'];
  const secondRowContent = ['Dedication', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sagittis est et feugiat. Morbi sit amet condimentum erat. Mauris nulla nisl, facilisis ut eros eu, tristique faucibus dolor. Cras pretium erat augue, vitae cursus justo condimentum quis. Maecenas blandit porta purus, non elementum ipsum aliquam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis eu ante ac viverra. Ut at lobortis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae varius ligula. Aenean a tortor augue. Proin tincidunt mattis ligula nec finibus. In ac viverra ipsum. Integer id lorem nisl.', 'images/architecture-4062650_1920-2.jpg'];
  const thirdRowContent = ['Tradition', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper sagittis est et feugiat. Morbi sit amet condimentum erat. Mauris nulla nisl, facilisis ut eros eu, tristique faucibus dolor. Cras pretium erat augue, vitae cursus justo condimentum quis. Maecenas blandit porta purus, non elementum ipsum aliquam et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis eu ante ac viverra. Ut at lobortis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae varius ligula. Aenean a tortor augue. Proin tincidunt mattis ligula nec finibus. In ac viverra ipsum. Integer id lorem nisl.', 'images/olive-oil-968657_1920-2.jpg'];
  const createTextDiv = (headingText, innerContent, divClass) => {
    const textDiv = document.createElement('div');
    textDiv.classList.add(divClass);
    const heading = document.createElement('div');
    heading.classList.add('storyheader');
    heading.textContent = headingText;
    const textContent = document.createElement('div');
    textContent.classList.add('storycontent');
    textContent.textContent = innerContent;
    textDiv.appendChild(heading);
    textDiv.appendChild(textContent);
    return textDiv;
  };
  const createImageDiv = (imageSrc) => {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('storyimagediv');
    const image = document.createElement('img');
    image.classList.add('storyimage');
    image.setAttribute('src', imageSrc);
    imageDiv.appendChild(image);
    return imageDiv;
  };
  const createLeftTextRow = (innerContent) => {
    const headingText = innerContent[0];
    const textContent = innerContent[1];
    const imageSrc = innerContent[2];
    const leftTextRow = document.createElement('div');
    leftTextRow.classList.add('lefttextdiv');
    leftTextRow.appendChild(createTextDiv(headingText, textContent, 'lefttext'));
    leftTextRow.appendChild(createImageDiv(imageSrc));
    return leftTextRow;
  };
  const createRightTextRow = (innerContent) => {
    const headingText = innerContent[0];
    const textContent = innerContent[1];
    const imageSrc = innerContent[2];
    const rightTextRow = document.createElement('div');
    rightTextRow.classList.add('righttextdiv');
    rightTextRow.appendChild(createImageDiv(imageSrc));
    rightTextRow.appendChild(createTextDiv(headingText, textContent, 'righttext'));
    return rightTextRow;
  };
  // Functions for creating content elements
  const createMiddleStory = () => {
    const storyDiv = document.createElement('div');
    storyDiv.setAttribute('id', 'story');
    storyDiv.appendChild(createLeftTextRow(firstRowContent));
    storyDiv.appendChild(createRightTextRow(secondRowContent));
    storyDiv.appendChild(createLeftTextRow(thirdRowContent));
    return storyDiv;
  };
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
  // Function for builing unique page content
  const middleBuilder = () => {
    const middle = document.createElement('div');
    middle.setAttribute('id', 'middle');
    middle.appendChild(createMiddleMainElement());
    middle.appendChild(createMiddleStory());
    return middle;
  };
  // Function for building the entire page
  const buildAboutpage = () => {
    content.appendChild(headerBuilder.buildHeader());
    content.appendChild(middleBuilder());
    content.appendChild(footerBuilder.buildFooter());
  };
  return { buildAboutpage };
})();

export default aboutBuilder;
