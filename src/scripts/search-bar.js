import logoBar from '../src/images/doelogo.png';

export default () => {
  const logo = document.createElement('img');
  const searchBar = document.createElement('div');
  const containerForm = document.createElement('div');
  const searchForm = document.createElement('input');
  const select = document.createElement('select');
  const optionArray = ['All', 'Arts', 'Baby', 'Books', 'Computers'];
  const lensContaniner = document.createElement('input');

  logo.src = logoBar;
  logo.classList.add('logo');
  optionArray.forEach(topic => {
    const option = document.createElement('option');
    option.innerHTML = topic;
    select.appendChild(option);
  })
  searchForm.type = 'search';
  searchForm.placeholder = 'Write something...'
  lensContaniner.type = 'submit';
  lensContaniner.value = 'Search';
  searchForm.classList.add('search-form');
  containerForm.classList.add('container-form');
  lensContaniner.classList.add('lens', 'selected');
  select.classList.add('select', 'selected');
  searchBar.classList.add('search-bar');

  searchBar.appendChild(logo);
  containerForm.appendChild(select);
  containerForm.appendChild(searchForm);
  containerForm.appendChild(lensContaniner);
  searchBar.appendChild(containerForm);

  return searchBar;
}
