!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);!function(e){e.updateWatchlist({type:"NODE_ADDED",DOMIdentifier:"#stories_pagelet_rhc",action:function(){document.getElementById("stories_pagelet_rhc").remove()}})}(new class{constructor(){this.watchlist=[];const e=this.generateCallbackFromWatchlist();new MutationObserver(e).observe(document,{childList:!0,subtree:!0})}updateWatchlist(e){this.watchlist.push(e)}generateCallbackFromWatchlist(){return this.watchlist,e=>{e.forEach(e=>{this.watchlist.map(t=>{const r=document.querySelectorAll(t.DOMIdentifier)[0];if(e.target===r)t.action();else{const r=e.addedNodes;for(var n=0;n<r.length;n++)r[n]===document.querySelectorAll(t.DOMIdentifier)[0]&&t.action()}})})}}})}]);