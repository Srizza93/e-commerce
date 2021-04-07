export default () => {

  const searchBar = document.createElement('div');

  const containerForm = document.createElement('div');
  const searchForm = document.createElement('input');
  searchForm.type = 'search';
  searchForm.placeholder = 'Write something...'
  searchForm.classList.add('search-form');
  containerForm.appendChild(searchForm);


  
  searchBar.classList.add('search-bar');
  searchBar.appendChild(containerForm);



  return searchBar;

}