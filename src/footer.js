const footerBuilder = (() => {
  const createCorporateName = () => {
    const corporateName = document.createElement('div');
    corporateName.setAttribute('id', 'corporatename');
    corporateName.textContent = 'Yummy Food Group';
    return corporateName;
  };
  const createCorporateData = () => {
    const corporateData = document.createElement('div');
    corporateData.setAttribute('id', 'corporatedata');
    const pData = ['123 Yummy Ave.', 'New York, NY 12345', 'United States'];
    for (let i = 0; i < 3; i += 1) {
      const p = document.createElement('p');
      p.textContent = pData[i];
      corporateData.appendChild(p);
    }
    return corporateData;
  };
  const createAuthorDiv = () => {
    const authorDiv = document.createElement('div');
    authorDiv.setAttribute('id', 'author');
    authorDiv.textContent = 'Created by F. Skawiński';
    const a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/franius8');
    const img = document.createElement('img');
    img.setAttribute('id', 'githubicon');
    img.setAttribute('src', '../images/GitHub-Mark-64px.png');
    a.appendChild(img);
    authorDiv.appendChild(a);
    return authorDiv;
  };
  const buildFooter = () => {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.appendChild(createCorporateName());
    footer.appendChild(createCorporateData());
    footer.appendChild(createAuthorDiv());
    return footer;
  };
  return { buildFooter };
})();

export default footerBuilder;
