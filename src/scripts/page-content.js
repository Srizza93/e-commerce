import background from '../images/background.jpeg';

export default () => {
  const cover = document.createElement('img');
  const galery = document.createElement('div');
  const topics = ['Computers', 'Home', 'Beauty', 'Garden', 'Toys', 'Food'];

  cover.src = background;
  cover.classList.add('background');
  galery.classList.add('galery');
  topics.forEach(topic => {
    const container = document.createElement('div');
    container.innerHTML = topic;
    galery.appendChild(container);
  })

  cover.appendChild(galery);

  return cover;
}