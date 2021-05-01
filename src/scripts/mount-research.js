export default () => {
  const container = document.createElement('div');
  const results = document.createElement('div');
  const footer = document.createElement('footer');

  results.classList.add('results');
  footer.classList.add('footer');

  container.appendChild(results);
  container.appendChild(footer);

  return container;
}