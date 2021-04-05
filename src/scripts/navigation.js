export default () => {
  const element = document.createElement('div');
  const topics = ['All', `Today's deal`, 'Customer Service', 'Gift Cards', 'Sell', 'Registry'];
  
  element.classList.add('container');
  topics.forEach(topics => {
    const menu = document.createElement('div');
    element.appendChild(menu);
    menu.classList.add('buttons');
    menu.innerHTML = topics;
  })

  return element;
};