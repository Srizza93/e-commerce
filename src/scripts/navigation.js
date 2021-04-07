export default () => {
  const navigationBar = document.createElement('div');
  const topics = ['All', `Today's deal`, 'Customer Service', 'Gift Cards', 'Sell', 'Registry'];
  const icon = document.createElement('div');
  icon.classList.add('buttons', 'icon');

  for (let i = 0; i < 3; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    icon.appendChild(bar);
  }

  navigationBar.appendChild(icon);
  navigationBar.classList.add('container');
  topics.forEach(topics => {
    const menu = document.createElement('div');
    navigationBar.appendChild(menu);
    menu.classList.add('buttons');
    menu.innerHTML = topics;
  })

  return navigationBar;
}