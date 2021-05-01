export default () => {
  const stripe = document.createElement('div');
  const text = document.createElement('span');
  
  stripe.classList.add('sub-nav');
  text.innerHTML = 'Due to COVID you might experience some delay';

  stripe.appendChild(text);
  
  return stripe;
}
