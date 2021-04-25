export default () => {
  const stripe = document.createElement('div');
  
  stripe.classList.add('sub-nav');
  stripe.innerHTML = 'Due to COVID you might experience some delay';
  
  return stripe;
}
