import logoBar from '../images/doelogo.png';

export default () => {
  const searchBar = document.createElement('div');
  const containerForm = document.createElement('div');

  searchBar.classList.add('search-bar');
  containerForm.classList.add('container-form');

  searchBar.appendChild(containerForm);

  return searchBar;
}
