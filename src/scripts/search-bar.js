import logoBar from '../images/doelogo.png';

export default () => {
  const logo = document.createElement('img');
  const searchBar = document.createElement('div');
  const containerForm = document.createElement('div');

  logo.src = logoBar;
  logo.classList.add('logo');
  searchBar.classList.add('search-bar');
  containerForm.classList.add('container-form');

  searchBar.appendChild(logo);
  searchBar.appendChild(containerForm);

  return searchBar;
}
