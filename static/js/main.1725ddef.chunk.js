(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=(n(16),n(5)),u=n(6),c=n(8),s=n(7),h=n(9),d=n(2),f=n.n(d),p=n(1),b=n.n(p);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var _="styles_skeletonClass__3--f2";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".styles_skeletonClass__3--f2 {\n  background-color: var(--theme-base-color);\n  background-image: linear-gradient(90deg, var(--theme-base-color),var(--theme-highlight-color),var(--theme-base-color) );\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 4px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  animation: styles_loading__Z65VQ var(--theme-duration) ease-in-out infinite;\n  -webkit-animation: styles_loading__Z65VQ var(--theme-duration) ease-in-out infinite;\n}\n\n@keyframes styles_loading__Z65VQ {\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n}");var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,y(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,d["Component"]),n=t,(r=[{key:"render",value:function(){var e=[],t=this.props,n=t.count,r=t.duration,o=t.defaultBaseColor,a=t.defaultHighlightColor,i=t.width,l=t.height,u=t.circle,c={"--theme-base-color":o,"--theme-highlight-color":a,"--theme-duration":"".concat(r,"s")};null!=i&&(c.width=i),null!=l&&(c.height=l),null!==i&&null!==l&&u&&(c.borderRadius="50%");for(var s=0;s<n;s++)e.push(f.a.createElement("span",{key:s,className:_,style:c},"\u200c"));return f.a.createElement(d.Fragment,null,e)}}])&&g(n.prototype,r),o&&g(n,o),t}();m(k,"propTypes",{count:b.a.number,duration:b.a.number,width:b.a.string,height:b.a.string,circle:b.a.bool,defaultBaseColor:b.a.string,defaultHighlightColor:b.a.string}),m(k,"defaultProps",{count:1,duration:1.2,width:null,height:null,circle:!1,defaultBaseColor:"#eee",defaultHighlightColor:"#f5f5f5"});var O=k,C=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement(O,null),o.a.createElement(O,{width:100,height:100,circle:!0}),o.a.createElement(O,{count:4}),o.a.createElement(O,{width:300,height:50}))}}]),t}(r.Component);i.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.1725ddef.chunk.js.map