var pageComponent=webpackJsonppageComponent([0],{292:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),i=o(l),s=n(2),p=o(s);n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15);var c=n(293),f=o(c),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),t}(i.default);p.default.register(d,f.default),t.default=d},293:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.updatesIndex=void 0;var l,i=n(1),s=o(i),p=n(2),c=o(p);goog.loadModule(function(e){function t(e,t,o){var l=function(){r("div"),r("header",null,null,"class","header"),r("div",null,null,"class","container"),r("h1",null,null,"class","header-title");var t=e.page.title;"function"==typeof t?t():null!=t&&u(t),a("h1"),r("h2",null,null,"class","header-subtitle");var n=e.page.description;"function"==typeof n?n():null!=n&&u(n),a("h2"),a("div"),a("header"),i({updates:e.page.updates},null,o),a("div")};s(n.$$assignDefaults({content:l},e),null,o)}goog.module("updatesIndex.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,u=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),i=(o.attr,c.default.getTemplate("ElectricUpdates.incrementaldom","render")),s=c.default.getTemplate("main.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="updatesIndex.render"),e.render.params=["page"],e.render.types={page:"any"},e.templates=l=e,e});var f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),t}(s.default);c.default.register(f,l),t.updatesIndex=f,t.templates=l,t.default=l}},[292]);