import logoBar from '../images/doelogo.png';

export default () => {
  const link = document.createElement('a');
  const logo = document.createElement('img');
  const searchBar = document.createElement('div');
  const containerForm = document.createElement('div');

  link.href = './index.html';
  logo.src = logoBar;
  logo.alt = 'logo';
  logo.classList.add('logo');
  searchBar.classList.add('search-bar');
  containerForm.classList.add('container-form');

  link.appendChild(logo);
  searchBar.appendChild(link);
  searchBar.appendChild(containerForm);

  return searchBar;
}
