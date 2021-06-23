(()=>{var e,t={723:(e,t,n)=>{"use strict";n(4915);var s=n(5844),r=n(144),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-bar"),e._v(" "),n("navigation-menu"),e._v(" "),n("Banner"),e._v(" "),n("Home"),e._v(" "),n("Footer")],1)};i._withStripped=!0;var o=n(5734),a=n(1253),p=n(2171),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[n("slideshow",{attrs:{gallery:e.slideshow}}),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"galery"},e._l(e.products,(function(t){return n("div",{key:t.id,staticClass:"galery__topics"},[n("div",{staticClass:"galery__topics_child"},[n("h2",{staticClass:"galery__topics_title"},[e._v(e._s(t.text))])]),e._v(" "),n("div",{staticClass:"galery__topics_child"},[n("a",{attrs:{href:"./research.html"}},[n("img",{staticClass:"galery_topics_pic",attrs:{src:e.getImgUrl(t.image),alt:"Home"}})])]),e._v(" "),n("div",{staticClass:"galery__topics_child"},[n("a",{staticClass:"galery__topics_link",attrs:{href:"./research.html"}},[e._v("\n          "+e._s(t.link)+"\n        ")])])])})),0)],1)};c._withStripped=!0;var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slideshow"},[n("div",{staticClass:"slideshow_main-image"},[n("img",{staticClass:"slideshow_selection_product-image main-image",attrs:{src:e.getImgUrl(e.gallery[e.index].image),alt:e.gallery[e.index].text}}),e._v(" "),n("div",{staticClass:"slideshow_txt-container"},[n("h2",{staticClass:"slideshow_txt-container_text"},[e._v("\n        "+e._s(e.gallery[e.index].text)+"\n      ")])]),e._v(" "),n("a",{staticClass:"slideshow_arrow prev",on:{click:function(t){return e.showPreviousImage()}}},[e._v("❮")]),e._v(" "),n("a",{staticClass:"slideshow_arrow next",on:{click:function(t){return e.showNextImage()}}},[e._v("❯")])])])};l._withStripped=!0;const d={name:"Slideshow",data:function(){return{index:0}},props:{gallery:{type:Array,required:!0}},methods:{getImgUrl:function(e){return n(1853)("./"+e)},updateIndex:function(){var e=this.$props.gallery;this.index<0&&(this.index=e.length-1),this.index>e.length-1&&(this.index=0),this.reset_animation();var t=Array.from(document.querySelectorAll(".gallery_selection_gallery-image"));t.forEach((function(e){e.classList.remove("selected-photo")})),t[this.index]&&t[this.index].classList.add("selected-photo")},showPreviousImage:function(){this.index--,this.updateIndex()},showNextImage:function(){this.index++,this.updateIndex()},autoPicChange:function(){this.showNextImage()},reset_animation:function(){var e=document.querySelector(".main-image");e.style.animation="none",e.offsetHeight,e.style.animation=null}},mounted:function(){setInterval(this.autoPicChange,7e3)}};var g=n(3379),u=n.n(g),h=n(4825);u()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var x=n(1900),m=(0,x.Z)(d,l,[],!1,null,null,null);m.options.__file="src/vue/SlideShow.vue";const f={name:"App",components:{Slideshow:m.exports},data:function(){return{products:[{id:1,text:"Computers and accessories",image:"computers.jpeg",link:"Shop now"},{id:2,text:"Home",image:"home.jpeg",link:"Explore now"},{id:3,text:"Beauty",image:"beauty.jpeg",link:"See more"},{id:4,text:"Garden",image:"garden.jpeg",link:"See more"},{id:5,text:"Toys",image:"ball.jpeg",link:"Shop now"},{id:6,text:"Food",image:"food.jpeg",link:"See more"},{id:7,text:"Music",image:"guitar.jpeg",link:"See more"},{id:8,text:"Apple",image:"mac2.jpeg",link:"See more"},{id:9,text:"Turntables",image:"turntable2.jpeg",link:"Shop now"},{id:10,text:"Deals and promotion",image:"shoes.jpeg",link:"Shop now"},{id:11,text:"Shop top categories",image:"mac3.jpeg",link:"Shop now"},{id:12,text:"For kids",image:"toys4.jpeg",link:"Explore now"}],slideshow:[{id:1,image:"slideshow1.jpeg",text:"Find the best deals"},{id:2,image:"slideshow2.jpeg",text:"Best quality"},{id:3,image:"slideshow3.jpeg",text:"All sort of categories"},{id:4,image:"slideshow4.jpeg",text:"Travel with us"},{id:5,image:"slideshow5.jpeg",text:"Shop now"}]}},methods:{getImgUrl:function(e){return n(1853)("./"+e)}}};var j=n(5954);u()(j.Z,{insert:"head",singleton:!1}),j.Z.locals;var b=(0,x.Z)(f,c,[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome-message"},[n("span",[e._v("Welcome to "),n("b",[e._v("e-commerce.com")]),e._v(". Please visit the website to discover\n      number one products and best deals.")])])}],!1,null,null,null);b.options.__file="src/vue/HomeContent.vue";const _=b.exports;var v=n(5872);const w={name:"App",components:{SearchBar:o.Z,NavigationMenu:a.Z,Banner:p.Z,Home:_,Footer:v.Z}};var y=(0,x.Z)(w,i,[],!1,null,null,null);y.options.__file="src/vue/App.vue";const k=y.exports;document.body.appendChild((0,s.Z)()),new r.Z({el:".app-root",render:function(e){return e(k)}})},5954:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(3645),r=n.n(s)()((function(e){return e[1]}));r.push([e.id,"\n.home-container {\n  display: flex;\n  flex-direction: column;\n  background: rgb(255, 140, 0);\n  background: radial-gradient(\n    circle,\n    rgba(255, 140, 0, 1) 72%,\n    rgba(19, 25, 33, 1) 100%\n  );\n}\n.welcome-message {\n  text-align: center;\n  padding: 15px;\n  margin: 25px 50px 0 50px;\n  background-color: white;\n}\n.galery {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap-reverse;\n  justify-content: center;\n  min-height: 600px;\n  padding-bottom: 50px;\n}\n.galery__topics {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  text-align: left;\n  margin: 25px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n.galery__topics_child {\n  padding: 25px 20px;\n}\n.main-image {\n  width: 100%;\n  height: 300px;\n}\n.galery_topics_pic {\n  position: relative;\n  width: 100%;\n  max-width: 257px;\n  height: auto;\n}\n.galery__topics_title {\n  margin: 0;\n}\n.galery__topics_link {\n  font-size: 13px;\n  text-decoration: none;\n  color: #007185;\n}\n.galery__topics_link:hover {\n  text-decoration: underline;\n  color: red;\n}\n@media only screen and (max-width: 600px) {\n.welcome-message {\n    margin: 25px;\n}\n}\n",""]);const i=r},4825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(3645),r=n.n(s)()((function(e){return e[1]}));r.push([e.id,"\n.slideshow {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.slideshow-container {\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n}\n.slideshow_txt-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 260px;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  background-color: black;\n  opacity: 0.7;\n}\n.slideshow_txt-container_text {\n  color: white;\n  font-weight: normal;\n}\n.slideshow_main-image {\n  position: relative;\n  background-color: white;\n}\n.slideshow_arrow {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 40px;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.slideshow_arrow:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.prev {\n  left: 0;\n}\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n.main-image {\n  display: block;\n  animation: slideappear 1s 1 ease-in, slidedisappear 1s 1 ease-out 6s;\n}\n.gallery_selection {\n  display: flex;\n  flex-direction: row;\n}\n.slideshow_selection_product-image {\n  display: block;\n  cursor: pointer;\n}\n@keyframes slideappear {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes slidedisappear {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n",""]);const i=r},2976:(e,t,n)=>{"use strict";e.exports=n.p+"f54208893d9a940fc093.jpeg"},4465:(e,t,n)=>{"use strict";e.exports=n.p+"100c8aa780cfbc11f5ce.jpeg"},5080:(e,t,n)=>{"use strict";e.exports=n.p+"d94eaff40a95d4c41a02.jpeg"},8275:(e,t,n)=>{"use strict";e.exports=n.p+"5061f8ee2949ebe35f11.jpeg"},9821:(e,t,n)=>{"use strict";e.exports=n.p+"dfd529fed772d5d46e4f.jpeg"},764:(e,t,n)=>{"use strict";e.exports=n.p+"d3fc6c35ffa19d628cf5.jpeg"},2e3:(e,t,n)=>{"use strict";e.exports=n.p+"b09ccde01464f98c4fd1.jpeg"},4851:(e,t,n)=>{"use strict";e.exports=n.p+"1454c8c910743f24e684.jpeg"},5635:(e,t,n)=>{"use strict";e.exports=n.p+"21dd4436662f12557f83.jpeg"},9337:(e,t,n)=>{"use strict";e.exports=n.p+"9dbcfdfb2c7c11052efa.jpeg"},8363:(e,t,n)=>{"use strict";e.exports=n.p+"159ec396c43881cb5b27.jpeg"},849:(e,t,n)=>{"use strict";e.exports=n.p+"1dec966ce518453f3885.jpeg"},6511:(e,t,n)=>{"use strict";e.exports=n.p+"9df46dedbd8e5e13987d.jpeg"},7837:(e,t,n)=>{"use strict";e.exports=n.p+"d9150836c8672ab56b51.jpeg"},2482:(e,t,n)=>{"use strict";e.exports=n.p+"ad2ce62db0bae8462490.jpeg"},6867:(e,t,n)=>{"use strict";e.exports=n.p+"26fcc68bec878330c13e.jpeg"},7139:(e,t,n)=>{"use strict";e.exports=n.p+"4246f2ab7356997e652b.jpeg"},3030:(e,t,n)=>{"use strict";e.exports=n.p+"19feb0546c8af1d349d4.jpeg"},918:(e,t,n)=>{"use strict";e.exports=n.p+"828dc526c08e5ea9c95d.jpeg"},731:(e,t,n)=>{"use strict";e.exports=n.p+"42764ae304660f85fdc4.jpeg"},3672:(e,t,n)=>{"use strict";e.exports=n.p+"2995faa9542ab1e0758a.jpeg"},3505:(e,t,n)=>{"use strict";e.exports=n.p+"1c3a20453bac3ed7c151.jpeg"},8684:(e,t,n)=>{"use strict";e.exports=n.p+"a23e22d6c5c59dedbec8.jpeg"},7976:(e,t,n)=>{"use strict";e.exports=n.p+"02bde9f0c7b27bda29fe.jpeg"},3146:(e,t,n)=>{"use strict";e.exports=n.p+"9931959a438557b5ad32.jpeg"},771:(e,t,n)=>{"use strict";e.exports=n.p+"068eac5cb2b34579a576.jpeg"},954:(e,t,n)=>{"use strict";e.exports=n.p+"3ed4550d06daf146ea14.jpeg"},3575:(e,t,n)=>{"use strict";e.exports=n.p+"dde5bd1948321099b7db.jpeg"},3216:(e,t,n)=>{"use strict";e.exports=n.p+"818e16cee59268fb8a74.jpeg"},30:(e,t,n)=>{"use strict";e.exports=n.p+"611bdc44d8306329ae05.jpeg"},7530:(e,t,n)=>{"use strict";e.exports=n.p+"0def89b2805480536a18.jpeg"},7431:(e,t,n)=>{"use strict";e.exports=n.p+"ed67c431da44a93cecaf.jpeg"},6932:(e,t,n)=>{"use strict";e.exports=n.p+"6a491fb1847ea9b68992.jpeg"},6988:(e,t,n)=>{"use strict";e.exports=n.p+"a3c36ca0d082a01f81f4.jpeg"},4246:(e,t,n)=>{"use strict";e.exports=n.p+"61aa9dd22a1e3cb4ceb2.jpeg"},9472:(e,t,n)=>{"use strict";e.exports=n.p+"b7c5a3e015a2cca35aa1.jpeg"},3712:(e,t,n)=>{"use strict";e.exports=n.p+"b1e739de483cc137c4d7.jpeg"},5789:(e,t,n)=>{"use strict";e.exports=n.p+"b6336437263e2f54d95e.jpeg"},9313:(e,t,n)=>{"use strict";e.exports=n.p+"5b64ce5275cfd84cd242.jpeg"},4905:(e,t,n)=>{"use strict";e.exports=n.p+"1e050e944f216e00834c.jpeg"},9485:(e,t,n)=>{"use strict";e.exports=n.p+"88c0e0a36db39708419b.jpeg"},4037:(e,t,n)=>{"use strict";e.exports=n.p+"8498174c058f287c4896.jpeg"},4008:(e,t,n)=>{"use strict";e.exports=n.p+"d769981cae0d984775ae.jpeg"},4419:(e,t,n)=>{"use strict";e.exports=n.p+"5f396fafb7e5aee9bd7b.jpeg"},7704:(e,t,n)=>{"use strict";e.exports=n.p+"d9721f5c8cd991139e44.jpeg"},5557:(e,t,n)=>{"use strict";e.exports=n.p+"29b6ecd79d0c4ec6b901.jpeg"},6745:(e,t,n)=>{"use strict";e.exports=n.p+"e83078f8c825d6073779.jpeg"},7700:(e,t,n)=>{"use strict";e.exports=n.p+"38d94ba3c9d926695979.jpeg"},1853:(e,t,n)=>{var s={"./ball.jpeg":2976,"./ball2.jpeg":4465,"./ball3.jpeg":5080,"./beauty.jpeg":8275,"./beauty2.jpeg":9821,"./beauty3.jpeg":764,"./computer.jpeg":2e3,"./computer2.jpeg":4851,"./computer3.jpeg":5635,"./computer4.jpeg":9337,"./computers.jpeg":8363,"./computers2.jpeg":849,"./computers3.jpeg":6511,"./computers4.jpeg":7837,"./food.jpeg":2482,"./food2.jpeg":6867,"./food4.jpeg":7139,"./garden.jpeg":3030,"./garden2.jpeg":918,"./garden3.jpeg":731,"./garden4.jpeg":3672,"./guitar.jpeg":3505,"./guitar3.jpeg":8684,"./guitar4.jpeg":7976,"./home.jpeg":3146,"./home2.jpeg":771,"./home3.jpeg":954,"./home4.jpeg":3575,"./mac.jpeg":3216,"./mac2.jpeg":30,"./mac3.jpeg":7530,"./shoes.jpeg":7431,"./shoes2.jpeg":6932,"./shoes3.jpeg":6988,"./shoes4.jpeg":4246,"./slideshow1.jpeg":9472,"./slideshow2.jpeg":3712,"./slideshow3.jpeg":5789,"./slideshow4.jpeg":9313,"./slideshow5.jpeg":4905,"./toys.jpeg":9485,"./toys2.jpeg":4037,"./toys3.jpeg":4008,"./toys4.jpeg":4419,"./turntable.jpeg":7704,"./turntable2.jpeg":5557,"./turntable3.jpeg":6745,"./turntable4.jpeg":7700};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id=1853}},n={};function s(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,s),i.exports}s.m=t,e=[],s.O=(t,n,r,i)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,r,i]=e[c],a=!0,p=0;p<n.length;p++)(!1&i||o>=i)&&Object.keys(s.O).every((e=>s.O[e](n[p])))?n.splice(p--,1):(a=!1,i<o&&(o=i));a&&(e.splice(c--,1),t=r())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[o,a,p]=n,c=0;for(r in a)s.o(a,r)&&(s.m[r]=a[r]);for(p&&p(s),t&&t(n);c<o.length;c++)i=o[c],s.o(e,i)&&e[i]&&e[i][0](),e[o[c]]=0;s.O()},n=self.webpackChunke_commerce=self.webpackChunke_commerce||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=s.O(void 0,[860,703],(()=>s(723)));r=s.O(r)})();