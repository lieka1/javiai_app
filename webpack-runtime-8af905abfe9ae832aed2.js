!function(){"use strict";var e,t,n,r,o,a,f,c={},i={};function u(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return c[e].call(n.exports,n,n.exports,u),n.exports}u.m=c,e=[],u.O=function(t,n,r,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var f=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[c])}))?n.splice(c--,1):(f=!1,o<a&&(a=o));if(f){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},u.d(o,a),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return{70:"8a8d09a4",147:"0f1159e5",162:"component---src-pages-dataset-lab-tsx",198:"31b45c90",218:"component---src-pages-404-tsx",351:"commons",352:"9ff28164",396:"497cd2bd",466:"5c94f8c1",532:"styles",611:"b55107cc",612:"7fab36dd",691:"component---src-pages-index-tsx",721:"fd0b3a01",765:"04466a55",913:"46498fd9",921:"f4debfa0",946:"52c63b42",971:"cc594a49",979:"9ef4ab7f"}[e]+"-"+{70:"4d1ead096bde497619a9",147:"ff566ce630eb03b25e65",162:"4b9c999c33e148cd3f4f",198:"0fbc307080720085eccf",218:"61505db8ca65c54b6c4c",351:"1b8060fbdc01ddfbfabe",352:"f75c23ba7e72246eeb96",396:"7cd0ca272a323a221475",466:"8253da928624f7b59fb1",532:"35b650cd4f4cd6387677",611:"9727ec2c33f80556572d",612:"d2351bc83e242a11be0a",691:"8b934522ca584d0b2a9e",721:"c410ca061895a24236b5",765:"cd0e8bef803d9687cb12",913:"6ae41323417ddcc6477b",921:"844566b0bce82e43c693",946:"e370c5ee4d41cec4f566",971:"b637b1139974e9709ace",979:"33600d96b0b82d6ffdc4"}[e]+".js"},u.miniCssF=function(e){return"styles.3213459d7541be524375.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="javiai:",u.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var f,c;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var s=i[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){f=s;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.setAttribute("data-webpack",o+n),f.src=e),r[e]=[t];var l=function(t,n){f.onerror=f.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",a=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(f=n[r]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===e||o===t))return f}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var f;if((o=(f=a[r]).getAttribute("data-href"))===e||o===t)return f}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var f=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=f,i.request=c,o.parentNode.removeChild(o),r(i)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},f={658:0},u.f.miniCss=function(e,t){f[e]?t.push(f[e]):0!==f[e]&&{532:1}[e]&&t.push(f[e]=a(e).then((function(){f[e]=0}),(function(t){throw delete f[e],t})))},function(){var e={658:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=u.p+u.u(t),f=new Error;u.l(a,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,r[1](f)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],f=n[1],c=n[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(r in f)u.o(f,r)&&(u.m[r]=f[r]);if(c)var d=c(u)}for(t&&t(n);i<a.length;i++)o=a[i],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(d)},n=self.webpackChunkjaviai=self.webpackChunkjaviai||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();