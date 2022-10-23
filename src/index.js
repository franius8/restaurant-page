import headerBuilder from './header';
import footerBuilder from './footer';

// File is prepared bottom-to-top.

const homepageBuilder = (() => {
  const content = document.getElementById('content');
  // Subfunctions for middle parts.
  const createMiddleMainImage = () => {
    const mainImage = document.createElement('img');
    mainImage.setAttribute('id', 'mainimage');
    mainImage.setAttribute('src', '../images/pizza-3000273_1920-2.jpg');
    return mainImage;
  };
  const createMiddleMainText = () => {
    const mainText = document.createElement('div');
    mainText.setAttribute('id', 'maintext');
    const p = document.createElement('p');
    p.textContent = 'Traditional cuisine in the modern world';
    const button = document.createElement('button');
    button.textContent = 'Discover more...';
    mainText.appendChild(p);
    mainText.appendChild(button);
    return mainText;
  };
  const createIconDivs = (middleIconsDiv) => {
    const icons = ['eco', 'restaurant_menu', 'family_restroom'];
    const iconHeaders = ['Organic ingredients', 'Diverse menu', 'Families welcome'];
    const iconsText = ['We use only the finest, organically farmed ingredients',
      'In our menu there is something for everyone',
      'Everyone is sure to have a pleasant time dining with us'];
    middleIconsDiv.setAttribute('id', 'middleicons');
    for (let i = 0; i < 3; i += 1) {
      const iconDiv = document.createElement('div');
      iconDiv.classList.add('icondiv');
      const icon = document.createElement('div');
      icon.innerHTML = `<span class="material-symbols-outlined">${icons[i]}</span>`;
      iconDiv.appendChild(icon);
      const iconHeader = document.createElement('div');
      iconHeader.classList.add('iconheader');
      iconHeader.textContent = iconHeaders[i];
      iconDiv.appendChild(iconHeader);
      const iconText = document.createElement('div');
      iconText.classList.add('icontext');
      iconText.textContent = iconsText[i];
      iconDiv.appendChild(iconText);
      middleIconsDiv.appendChild(iconDiv);
    }
    return middleIconsDiv;
  };
  const createQuoteText = () => {
    const quoteText = document.createElement('div');
    quoteText.setAttribute('id', 'quotetext');
    quoteText.innerHTML = 'Our main focus is that <span class="em">everyone</span> has a good time dining with us.';
    return quoteText;
  };
  const createHoursSpan = () => {
    const hoursSpan = document.createElement('span');
    hoursSpan.classList.add('material-symbols-outlined');
    hoursSpan.textContent = 'nest_clock_farsight_analog';
    return hoursSpan;
  };
  const createHoursHeader = () => {
    const hoursHeader = document.createElement('div');
    hoursHeader.setAttribute('id', 'hoursheader');
    hoursHeader.textContent = 'Opening hours';
    return hoursHeader;
  };
  const createHoursContent = () => {
    const hoursContent = document.createElement('div');
    const hoursTable = document.createElement('table');
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const openingHoursAry = ['Closed', '12:00-22:00', '12:00-22:00', '12:00-22:00', '12:00-23:00', '12:00-23:00', '12:00-22:00'];
    for (let i = 0; i < 7; i += 1) {
      const tableRow = document.createElement('tr');
      const weekDay = document.createElement('td');
      weekDay.textContent = weekDays[i];
      tableRow.appendChild(weekDay);
      const openingHours = document.createElement('td');
      openingHours.textContent = openingHoursAry[i];
      tableRow.appendChild(openingHours);
      hoursTable.appendChild(tableRow);
    }
    hoursContent.appendChild(hoursTable);
    return hoursContent;
  };
  // Functions for creating middle parts.
  const createMiddleMainElement = () => {
    const middleMainElement = document.createElement('div');
    middleMainElement.setAttribute('id', 'mainelement');
    middleMainElement.appendChild(createMiddleMainImage());
    middleMainElement.appendChild(createMiddleMainText());
    return middleMainElement;
  };
  const createMiddleIcons = () => {
    const middleIcons = document.createElement('div');
    middleIcons.setAttribute('id', 'middleicons');
    createIconDivs(middleIcons);
    return middleIcons;
  };
  const createMiddleQuote = () => {
    const quoteDiv = document.createElement('div');
    quoteDiv.setAttribute('id', 'quotediv');
    quoteDiv.appendChild(createQuoteText());
    return quoteDiv;
  };
  const createMiddleHours = () => {
    const hoursDiv = document.createElement('div');
    hoursDiv.setAttribute('id', 'hoursdiv');
    hoursDiv.appendChild(createHoursSpan());
    hoursDiv.appendChild(createHoursHeader());
    hoursDiv.appendChild(createHoursContent());
    return hoursDiv;
  };
  const middleBuilder = () => {
    const middle = document.createElement('div');
    middle.setAttribute('id', 'middle');
    middle.appendChild(createMiddleMainElement());
    middle.appendChild(createMiddleIcons());
    middle.appendChild(createMiddleQuote());
    middle.appendChild(createMiddleHours());
    return middle;
  };
  const buildSite = () => {
    content.appendChild(headerBuilder.buildHeader());
    content.appendChild(middleBuilder());
    content.appendChild(footerBuilder.buildFooter());
  };
  return { buildSite };
})();

homepageBuilder.buildSite();
