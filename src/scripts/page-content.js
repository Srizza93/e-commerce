import pcPic from '../images/computers.jpeg';
import homePic from '../images/home.jpeg';
import beautyPic from '../images/beauty.jpeg';
import gardenPic from '../images/garden.jpeg';
import toysPic from '../images/toys.jpeg';
import foodPic from '../images/food.jpeg';

export default () => {
  const galery = document.createElement('div');
  const topicObj = {
    'Computers': pcPic,
    'Home': homePic,
    'Beauty': beautyPic,
    'Garden': gardenPic,
    'Toys': toysPic,
    'Food': foodPic
  };
  const topicKeys = Object.entries(topicObj);
  galery.classList.add('galery');
  for (const [topic, pic] of topicKeys) {
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const topicPic = document.createElement('img');
    title.innerHTML = topic;
    topicPic.src = pic;
    topicPic.alt = topic;
    container.classList.add('galery__topics');
    title.classList.add('galery__topics__title');
    topicPic.classList.add('galery__topics__pic')
    container.appendChild(title);
    container.appendChild(topicPic);
    galery.appendChild(container);
  }

  return galery;
}