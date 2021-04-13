(()=>{"use strict";var e={580:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".navigation-bar {\n  display: inline-flex;\n  width: 100%;\n  background-color: #232f3e;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  box-sizing: border-box;\n}\n\n.buttons {\n  display: inline-flex;\n  height: fit-content;\n  padding: 8px;\n  margin: 5px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.buttons:hover {\n  outline: 1px solid white;\n}\n\n.icon {\n  display: inline-block;\n}\n\n.bar {\n  width: 35px;\n  height: 4px;\n  background-color: white;\n  margin-bottom: 5px;\n}\n\n.last-bar {\n  margin: 0;\n}",""]);const i=o},850:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".galery {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: orange;\n}\n\n.galery__topics {\n  position: relative;\n  text-align: center;\n  margin: 3%;\n  background-color: white;\n  cursor: pointer;\n  flex-grow: 1;\n}\n\n.galery__topics__pic {\n  padding: 0 20px;\n}\n\n.galery__topics__title {\n  margin: 5px;\n}",""]);const i=o},251:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".search-bar {\n  display: flex;\n  background-color: #131921;\n  color: white;\n  padding: 5px;\n}\n\n.container-form {\n  display: flex;\n  flex-direction: row;\n  width: 70%;\n}\n\n.select {\n  width: 80px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-right-width: 10px;\n  border-radius: 4px 0 0 4px;\n  background-color: rgb(202, 202, 202);\n  margin: 6px 0 16px 0;\n  cursor: pointer;\n}\n\n.search-form {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\n.lens {\n  width: 65px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 0 4px 4px 0;\n  border-right: 0;\n  background-color: orange;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n\n.selected:hover {\n  opacity: .8;\n}\n\n.logo {\n  width: 50px;\n  height: 50px;\n  padding: 2px 35px 0px 15px;\n}",""]);const i=o},890:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html, body {\n  width: 100%;\n  margin: 0;\n  box-sizing: border-box;\n}\n",""]);const i=o},930:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".sub-nav {\n  padding: 5px;\n  text-align: center;\n  background-color: red;\n  border: 1px solid black;\n  font-weight: bold;\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var p=a(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:m(u,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function u(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=f||(f=d(n)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=d(n),r=u.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}},275:(e,n,t)=>{e.exports=t.p+"5061f8ee2949ebe35f11.jpeg"},454:(e,n,t)=>{e.exports=t.p+"159ec396c43881cb5b27.jpeg"},932:(e,n,t)=>{e.exports=t.p+"ca523d69565a17d52a27.png"},482:(e,n,t)=>{e.exports=t.p+"ad2ce62db0bae8462490.jpeg"},30:(e,n,t)=>{e.exports=t.p+"19feb0546c8af1d349d4.jpeg"},146:(e,n,t)=>{e.exports=t.p+"9931959a438557b5ad32.jpeg"},485:(e,n,t)=>{e.exports=t.p+"88c0e0a36db39708419b.jpeg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(890);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(932),i=t(251);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(580);n()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var c=t(930);n()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var d=t(454),s=t(146),l=t(275),p=t(30),u=t(485),f=t(482);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var m,g,b,v,x,y,w,C=t(850);n()(C.Z,{insert:"head",singleton:!1}),C.Z.locals,document.body.appendChild((m=document.createElement("img"),g=document.createElement("div"),b=document.createElement("div"),v=document.createElement("input"),x=document.createElement("select"),y=document.createElement("input"),m.src=o,m.classList.add("logo"),["All","Arts","Baby","Books","Computers"].forEach((function(e){var n=document.createElement("option");n.innerHTML=e,x.appendChild(n)})),v.type="search",v.placeholder="Write something...",y.type="submit",y.value="Search",v.classList.add("search-form"),b.classList.add("container-form"),y.classList.add("lens","selected"),x.classList.add("select","selected"),g.classList.add("search-bar"),g.appendChild(m),b.appendChild(x),b.appendChild(v),b.appendChild(y),g.appendChild(b),g)),document.body.appendChild(function(){var e=document.createElement("div"),n=document.createElement("div");n.classList.add("buttons","icon");for(var t=0;t<3;t++){var r=document.createElement("div");r.classList.add("bar"),n.appendChild(r)}return n.lastChild.classList.add("last-bar"),e.appendChild(n),e.classList.add("navigation-bar"),["All","Today's deal","Customer Service","Gift Cards","Sell","Registry"].forEach((function(n){var t=document.createElement("div");e.appendChild(t),t.classList.add("buttons"),t.innerHTML=n})),e}()),document.body.appendChild(((w=document.createElement("div")).classList.add("sub-nav"),w.innerHTML="Due to COVID you might experience some delay",w)),document.body.appendChild(function(){var e,n,t=document.createElement("div"),r={Computers:d,Home:s,Beauty:l,Garden:p,Toys:u,Food:f},o=Object.entries(r);t.classList.add("galery");for(var i=0,a=o;i<a.length;i++){var c=(e=a[i],n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=c[0],g=c[1],b=document.createElement("div"),v=document.createElement("h2"),x=document.createElement("img");v.innerHTML=m,x.src=g,b.classList.add("galery__topics"),v.classList.add("galery__topics__title"),x.classList.add("galery__topics__pic"),b.appendChild(v),b.appendChild(x),t.appendChild(b)}return t}())})()})();