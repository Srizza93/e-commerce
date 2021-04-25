export default () => {
  const container = document.createElement('div');
  const topSellers = document.createElement('div');
  const footer = document.createElement('footer');

  footer.classList.add('footer');

  container.appendChild(footer);

  return container;
}