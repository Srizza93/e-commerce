import './styles/style.css';

import searchBar from './scripts/search-bar';
import './styles/search-bar.css';

import navigation from './scripts/navigation';
import './styles/navigation.css';

import subNav from './scripts/sub-nav';
import './styles/sub-nav.css';

import pageContent from './scripts/page-content';
import './styles/page-content.css';

// import './image-component';

document.body.appendChild(searchBar());
document.body.appendChild(navigation());
document.body.appendChild(subNav());
document.body.appendChild(pageContent());