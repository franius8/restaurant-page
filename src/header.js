const headerBuilder = (() => {
  const createHeaderList = () => {
    const list = document.createElement('ul');
    const listData = ['Homepage', 'About us', 'Our menu', 'Contact'];
    const iDs = ['homepage', 'about', 'menu', 'contact'];
    listData.forEach((item, index) => {
      const li = document.createElement('li');
      li.setAttribute('id', iDs[index]);
      li.classList.add('navbaritem');
      li.textContent = item;
      list.appendChild(li);
    });
    return list;
  };
  const createHeaderLogo = () => {
    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    logo.textContent = 'Yummy Food';
    return logo;
  };
  const createHeaderNavbar = () => {
    const navBar = document.createElement('nav');
    navBar.setAttribute('id', 'navbar');
    navBar.appendChild(createHeaderList());
    return navBar;
  };
  const buildHeader = () => {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    header.appendChild(createHeaderLogo());
    header.appendChild(createHeaderNavbar());
    return header;
  };
  return { buildHeader };
})();

export default headerBuilder;
