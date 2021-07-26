(()=>{var t,e={8138:(t,e,r)=>{"use strict";r(4915);var n=r(5844),c=r(144),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-root"},[r("search-bar"),t._v(" "),r("navigation-menu"),t._v(" "),r("Banner"),t._v(" "),r("Cart"),t._v(" "),r("Footer")],1)};o._withStripped=!0;var a=r(5734),s=r(1253),i=r(2171),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-container"},[r("a",{staticClass:"back-to-search",attrs:{href:"./research.html"}},[t._v("\n    ❮\n  ")]),t._v(" "),t._m(0),t._v(" "),t._l(t.products,(function(e){return r("cart-product",{key:e.id+e.text,attrs:{pid:e.id,id:e.id,text:e.text,image:e.image,description:e.description,reviews:e.reviews,brand:e.brand,price:e.price,quantity:e.quantity,"trash-image":t.trash.link,"trash-alt":t.trash.alt},on:{deleteItem:t.deleteProduct}})})),t._v(" "),r("div",{staticClass:"cart-container_products_product cart-container_payment-details"},[r("h2",{staticClass:"cart-container_products_product_info_title cart-container_products_product_info_span"},[t._v("\n      Total price\n    ")]),t._v(" "),r("span",{staticClass:"cart-container_products_product_info_span"},[t._v("\n      "+t._s(t.totalPrice())+"€")]),t._v(" "),r("span",{staticClass:"payment-box_taxes cart-container_products_product_info_span"},[t._v("+ €26.34 Shipping and Import Fees outside of France")]),t._v(" "),r("button",{staticClass:"payment-box_button",on:{click:function(e){return t.openPayment()}}},[t._v("\n      Buy Now\n    ")])])],2)};p._withStripped=!0,r(5827),r(9653),r(7327),r(1249);var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-container_products"},[r("div",{staticClass:"cart-container_products_product",attrs:{pid:t.id}},[r("img",{staticClass:"cart-container_products_product_img",attrs:{alt:t.text,src:t.getImgUrl(t.image)}}),t._v(" "),r("div",{staticClass:"cart-container_products_product_info"},[r("h3",{staticClass:"cart-container_products_product_info_title"},[t._v("\n        "+t._s(t.text)+"\n      ")]),t._v(" "),r("span",{staticClass:"cart-container_products_product_info_span"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),r("span",{staticClass:"cart-container_products_product_info_span"},[t._v("\n        "+t._s(t.reviews)+"\n      ")]),t._v(" "),r("span",{staticClass:"cart-container_products_product_info_span"},[t._v("\n        "+t._s(t.brand)+"\n      ")])]),t._v(" "),r("div",{staticClass:"cart-container_products_product_info cart-container_products_product_payment"},[r("h3",{staticClass:"cart-container_products_product_info_title"},[t._v("Price")]),t._v(" "),r("span",{staticClass:"cart-container_products_product_info_span"},[t._v("\n        "+t._s(t.price)+"€\n      ")]),t._v(" "),r("h3",{staticClass:"cart-container_products_product_info_title"},[t._v("Quantity")]),t._v(" "),r("span",{staticClass:"cart-container_products_product_info_span"},[t._v("\n        "+t._s(t.quantity)+"\n      ")]),t._v(" "),r("h3",{staticClass:"cart-container_products_product_info_title"},[t._v("Total")]),t._v(" "),r("span",{staticClass:"cart-container_products_product_info_span"},[t._v("\n        "+t._s(t.totalProduct(t.price,t.quantity))+"€\n      ")])]),t._v(" "),r("div",[r("button",{staticClass:"container-trash-icon",on:{click:function(e){return t.$emit("deleteItem",{event:e,id:t.id})}}},[r("img",{staticClass:"container-trash-icon_icon",attrs:{src:t.getImgUrl(t.trashImage),alt:t.trashAlt}})])])])])};d._withStripped=!0,r(6977);const u={name:"CartProduct",props:{id:{type:Number,required:!0},text:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0},reviews:{type:String,required:!0},brand:{type:String,required:!0},price:{type:Number,required:!0},quantity:{type:Number,required:!0},trashImage:{type:String,required:!0},trashAlt:{type:String,required:!0}},methods:{getImgUrl:function(t){return r(4194)("./"+t)},totalProduct:function(t,e){return(t*e).toFixed(2)}}};var l=r(1900),g=(0,l.Z)(u,d,[],!1,null,null,null);g.options.__file="src/vue/Cart/CartProduct.vue";const _={name:"Cart",components:{CartProduct:g.exports},data:function(){return{products:[{id:1,text:"Soccer ball",image:"ball.jpeg",description:"Nike Sport, white and blue",price:120.99,range:"101 to 200€",reviews:"Good",brand:"Nike",quantity:2,stock:23},{id:2,text:"Turntable",image:"turntable2.jpeg",description:"Turntables",price:145.99,range:"101 to 200€",reviews:"Bad",brand:"Technics",quantity:3,stock:1}],trash:{id:1,link:"trash.png",alt:"trash"}}},props:["pid"],methods:{totalPrice:function(){return this.products.reduce((function(t,e){return e.price*e.quantity+t}),0)},deleteProduct:function(t){var e=t.event.currentTarget.closest(".cart-container_products_product"),r=Number(e.getAttribute("pid")),n=document.querySelector(".cart-container_payment-details"),c=document.querySelector(".back-to-search"),o=document.querySelector(".cart-container_no-products");e.classList.add("delete-product"),this.products=this.products.filter((function(t){return t.id!==r})),0===this.totalPrice()&&(n.classList.add("delete-product"),c.classList.add("back-to-search-show"),o.classList.add("cart-container_no-products_show"))},openPayment:function(){var t=this.products.map((function(t){return t.text})),e=t.length>1?this.totalPrice():this.products[0].price,r=this.products.reduce((function(t,e){return t+e.quantity}),0);window.open("./payment.html?final-details="+encodeURI(t+"-"+e+"-"+r))}}};var f=r(3379),b=r.n(f),h=r(7795),x=r.n(h),m=r(569),j=r.n(m),v=r(3565),y=r.n(v),w=r(9216),C=r.n(w),k=r(4589),q=r.n(k),S=r(7694),P={};P.styleTagTransform=q(),P.setAttributes=y(),P.insert=j().bind(null,"head"),P.domAPI=x(),P.insertStyleElement=C(),b()(S.Z,P),S.Z&&S.Z.locals&&S.Z.locals;var O=(0,l.Z)(_,p,[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-container_no-products"},[r("h3",[t._v("There are no products in your cart")]),t._v(" "),r("a",{staticClass:"cart-container_no-products_back-to-search",attrs:{href:"./research.html"}},[t._v("Please go back to search")])])}],!1,null,null,null);O.options.__file="src/vue/Cart/Cart.vue";const Z=O.exports;var T=r(5872);const N={name:"ResearchApp",components:{SearchBar:a.Z,NavigationMenu:s.Z,Banner:i.Z,Cart:Z,Footer:T.Z}};var E=(0,l.Z)(N,o,[],!1,null,null,null);E.options.__file="src/vue/CartApp.vue";const I=E.exports;document.body.appendChild((0,n.Z)()),new c.Z({el:".app-root",render:function(t){return t(I)}})},7694:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(3645),c=r.n(n)()((function(t){return t[1]}));c.push([t.id,"\n.cart-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 600px;\n  padding: 25px;\n}\n.cart-container_products {\n  display: flex;\n  flex-direction: column;\n  margin: 25px;\n}\n.cart-container_products_product {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: fit-content;\n  margin-bottom: 10px;\n  border: 1px solid #ddd;\n}\n.cart-container_products_product_img {\n  width: 250px;\n  height: 250px;\n  margin: 0 25px;\n}\n.cart-container_products_product_info {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 50%;\n  height: 400px;\n  padding: 25px;\n  border-right: 1px solid #ddd;\n}\n.cart-container_products_product_info_title {\n  margin: 0;\n}\n.cart-container_products_product_info_span {\n  padding: 25px 0;\n}\n.cart-container_products_product_payment {\n  border: 0;\n}\n.cart-container_payment-details {\n  align-items: baseline;\n  justify-content: space-evenly;\n  border: 0;\n}\n.payment-box_taxes {\n  color: #565959;\n}\n.payment-box_button {\n  font-size: 14px;\n  width: 200px;\n  font-weight: bold;\n  border: none;\n  border-radius: 15px;\n  margin: 5px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  background-color: #ff8c00;\n  cursor: pointer;\n  color: black;\n  text-align: center;\n  padding: 10px;\n}\n.payment-box_button:hover {\n  opacity: 0.7;\n}\n.container-trash-icon {\n  margin: 10px;\n}\n.container-trash-icon_icon {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n.delete-product {\n  display: none;\n}\n.back-to-search {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 0;\n  margin: 25px 0;\n  padding: 8px;\n  border: none;\n  border-radius: 0 10px 10px 0;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-size: 40px;\n  font-weight: bold;\n  text-decoration: none;\n  color: black;\n  background-color: #ff8c00;\n  cursor: pointer;\n}\n.back-to-search-show {\n  display: block;\n}\n.back-to-search:hover {\n  opacity: 0.7;\n}\n.cart-container_no-products {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.cart-container_no-products_show {\n  display: flex;\n}\n.cart-container_no-products_back-to-search {\n  color: black;\n  font-weight: bold;\n  padding: 10px;\n  border-radius: 15px;\n  border: 2px solid #ff8c00;\n  text-decoration: none;\n}\n.cart-container_no-products_back-to-search:hover {\n  opacity: 0.7;\n}\n@media only screen and (max-width: 720px) {\n.cart-container_products_product {\n    flex-direction: column;\n}\n.cart-container_payment-details {\n    margin: 0 50px 50px 50px;\n}\n.cart-container_products_product_img {\n    width: 200px;\n    height: 200px;\n    margin-bottom: 50px;\n}\n.cart-container_products_product_info {\n    padding: 0;\n    border: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n.payment-box_button {\n    width: auto;\n}\n}\n@media only screen and (max-width: 320px) {\n.cart-container_products_product_img {\n    width: 100%;\n    height: auto;\n}\n}\n",""]);const o=c},2976:(t,e,r)=>{"use strict";t.exports=r.p+"f54208893d9a940fc093.jpeg"},4465:(t,e,r)=>{"use strict";t.exports=r.p+"100c8aa780cfbc11f5ce.jpeg"},5080:(t,e,r)=>{"use strict";t.exports=r.p+"d94eaff40a95d4c41a02.jpeg"},8275:(t,e,r)=>{"use strict";t.exports=r.p+"5061f8ee2949ebe35f11.jpeg"},9821:(t,e,r)=>{"use strict";t.exports=r.p+"dfd529fed772d5d46e4f.jpeg"},764:(t,e,r)=>{"use strict";t.exports=r.p+"d3fc6c35ffa19d628cf5.jpeg"},2e3:(t,e,r)=>{"use strict";t.exports=r.p+"b09ccde01464f98c4fd1.jpeg"},4851:(t,e,r)=>{"use strict";t.exports=r.p+"1454c8c910743f24e684.jpeg"},5635:(t,e,r)=>{"use strict";t.exports=r.p+"21dd4436662f12557f83.jpeg"},9337:(t,e,r)=>{"use strict";t.exports=r.p+"9dbcfdfb2c7c11052efa.jpeg"},8363:(t,e,r)=>{"use strict";t.exports=r.p+"159ec396c43881cb5b27.jpeg"},849:(t,e,r)=>{"use strict";t.exports=r.p+"1dec966ce518453f3885.jpeg"},6511:(t,e,r)=>{"use strict";t.exports=r.p+"9df46dedbd8e5e13987d.jpeg"},7837:(t,e,r)=>{"use strict";t.exports=r.p+"d9150836c8672ab56b51.jpeg"},2482:(t,e,r)=>{"use strict";t.exports=r.p+"ad2ce62db0bae8462490.jpeg"},6867:(t,e,r)=>{"use strict";t.exports=r.p+"26fcc68bec878330c13e.jpeg"},7139:(t,e,r)=>{"use strict";t.exports=r.p+"4246f2ab7356997e652b.jpeg"},3030:(t,e,r)=>{"use strict";t.exports=r.p+"19feb0546c8af1d349d4.jpeg"},918:(t,e,r)=>{"use strict";t.exports=r.p+"828dc526c08e5ea9c95d.jpeg"},731:(t,e,r)=>{"use strict";t.exports=r.p+"42764ae304660f85fdc4.jpeg"},3672:(t,e,r)=>{"use strict";t.exports=r.p+"2995faa9542ab1e0758a.jpeg"},5027:(t,e,r)=>{"use strict";t.exports=r.p+"1c3a20453bac3ed7c151.jpeg"},8684:(t,e,r)=>{"use strict";t.exports=r.p+"a23e22d6c5c59dedbec8.jpeg"},7976:(t,e,r)=>{"use strict";t.exports=r.p+"02bde9f0c7b27bda29fe.jpeg"},3146:(t,e,r)=>{"use strict";t.exports=r.p+"9931959a438557b5ad32.jpeg"},771:(t,e,r)=>{"use strict";t.exports=r.p+"068eac5cb2b34579a576.jpeg"},954:(t,e,r)=>{"use strict";t.exports=r.p+"3ed4550d06daf146ea14.jpeg"},3575:(t,e,r)=>{"use strict";t.exports=r.p+"dde5bd1948321099b7db.jpeg"},3216:(t,e,r)=>{"use strict";t.exports=r.p+"818e16cee59268fb8a74.jpeg"},625:(t,e,r)=>{"use strict";t.exports=r.p+"611bdc44d8306329ae05.jpeg"},7530:(t,e,r)=>{"use strict";t.exports=r.p+"0def89b2805480536a18.jpeg"},7431:(t,e,r)=>{"use strict";t.exports=r.p+"ed67c431da44a93cecaf.jpeg"},6932:(t,e,r)=>{"use strict";t.exports=r.p+"6a491fb1847ea9b68992.jpeg"},6988:(t,e,r)=>{"use strict";t.exports=r.p+"a3c36ca0d082a01f81f4.jpeg"},4246:(t,e,r)=>{"use strict";t.exports=r.p+"61aa9dd22a1e3cb4ceb2.jpeg"},9472:(t,e,r)=>{"use strict";t.exports=r.p+"d7138c77214189a84fbf.jpeg"},3712:(t,e,r)=>{"use strict";t.exports=r.p+"b1e739de483cc137c4d7.jpeg"},5789:(t,e,r)=>{"use strict";t.exports=r.p+"b6336437263e2f54d95e.jpeg"},9313:(t,e,r)=>{"use strict";t.exports=r.p+"5b64ce5275cfd84cd242.jpeg"},4905:(t,e,r)=>{"use strict";t.exports=r.p+"a71b1119a07190763541.jpeg"},9485:(t,e,r)=>{"use strict";t.exports=r.p+"88c0e0a36db39708419b.jpeg"},4037:(t,e,r)=>{"use strict";t.exports=r.p+"8498174c058f287c4896.jpeg"},4008:(t,e,r)=>{"use strict";t.exports=r.p+"d769981cae0d984775ae.jpeg"},4419:(t,e,r)=>{"use strict";t.exports=r.p+"5f396fafb7e5aee9bd7b.jpeg"},7704:(t,e,r)=>{"use strict";t.exports=r.p+"d9721f5c8cd991139e44.jpeg"},5557:(t,e,r)=>{"use strict";t.exports=r.p+"29b6ecd79d0c4ec6b901.jpeg"},6745:(t,e,r)=>{"use strict";t.exports=r.p+"e83078f8c825d6073779.jpeg"},7700:(t,e,r)=>{"use strict";t.exports=r.p+"38d94ba3c9d926695979.jpeg"},4194:(t,e,r)=>{var n={"./ball.jpeg":2976,"./ball2.jpeg":4465,"./ball3.jpeg":5080,"./beauty.jpeg":8275,"./beauty2.jpeg":9821,"./beauty3.jpeg":764,"./computer.jpeg":2e3,"./computer2.jpeg":4851,"./computer3.jpeg":5635,"./computer4.jpeg":9337,"./computers.jpeg":8363,"./computers2.jpeg":849,"./computers3.jpeg":6511,"./computers4.jpeg":7837,"./doelogo.png":8932,"./food.jpeg":2482,"./food2.jpeg":6867,"./food4.jpeg":7139,"./garden.jpeg":3030,"./garden2.jpeg":918,"./garden3.jpeg":731,"./garden4.jpeg":3672,"./guitar.jpeg":5027,"./guitar3.jpeg":8684,"./guitar4.jpeg":7976,"./home.jpeg":3146,"./home2.jpeg":771,"./home3.jpeg":954,"./home4.jpeg":3575,"./mac.jpeg":3216,"./mac2.jpeg":625,"./mac3.jpeg":7530,"./magnifying.png":6555,"./shoes.jpeg":7431,"./shoes2.jpeg":6932,"./shoes3.jpeg":6988,"./shoes4.jpeg":4246,"./shopping-cart.png":4454,"./slideshow1.jpeg":9472,"./slideshow2.jpeg":3712,"./slideshow3.jpeg":5789,"./slideshow4.jpeg":9313,"./slideshow5.jpeg":4905,"./toys.jpeg":9485,"./toys2.jpeg":4037,"./toys3.jpeg":4008,"./toys4.jpeg":4419,"./trash.png":6567,"./turntable.jpeg":7704,"./turntable2.jpeg":5557,"./turntable3.jpeg":6745,"./turntable4.jpeg":7700};function c(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=o,t.exports=c,c.id=4194}},r={};function n(t){var c=r[t];if(void 0!==c)return c.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,t=[],n.O=(e,r,c,o)=>{if(!r){var a=1/0;for(d=0;d<t.length;d++){for(var[r,c,o]=t[d],s=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(n.O).every((t=>n.O[t](r[i])))?r.splice(i--,1):(s=!1,o<a&&(a=o));if(s){t.splice(d--,1);var p=c();void 0!==p&&(e=p)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[r,c,o]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={511:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var c,o,[a,s,i]=r,p=0;for(c in s)n.o(s,c)&&(n.m[c]=s[c]);if(i)var d=i(n);for(e&&e(r);p<a.length;p++)o=a[p],n.o(t,o)&&t[o]&&t[o][0](),t[a[p]]=0;return n.O(d)},r=self.webpackChunke_commerce=self.webpackChunke_commerce||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var c=n.O(void 0,[237,680,703],(()=>n(8138)));c=n.O(c)})();