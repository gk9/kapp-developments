webpackJsonp([35783957827783],{103:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);return function u(i,f,c){if("string"!=typeof f){if(s){var h=l(f);h&&h!==s&&u(i,h,c)}var p=a(f);o&&(p=p.concat(o(f)));for(var d=0;d<p.length;++d){var m=p[d];if(!(e[m]||t[m]||c&&c[m])){var y=r(f,m);try{n(i,m,y)}catch(e){}}}return i}return i}})},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=a(s),i=n(295),f=a(i),c=function(e){function t(n){o(this,t);var a=r(this,e.call(this,n));return a.handleClick=function(){a.setState({pathOffset0:0,pathOffset1:0,pathOffset2:0,transition0:"stroke-dashoffset 2s, transform 1s 4s",transition1:"stroke-dashoffset ease-out 2s 2s",transition2:"stroke-dashoffset 1s 4s",house0x:0,windowStyle:1})},a.state={pathLength0:3e3,pathOffset0:3e3,pathLength1:3e3,pathOffset1:3e3,pathLength2:3e3,pathOffset2:3e3,house0x:"-10%",windowStyle:0,transition0:"",transition1:"",transition2:""},a}return l(t,e),t.prototype.componentDidMount=function(){var e=document.querySelector("#house0").getTotalLength(),t=document.querySelector("#house1").getTotalLength(),n=document.querySelector("#house2").getTotalLength();this.setState({pathLength0:e,pathOffset0:e,pathLength1:t,pathOffset1:t,pathLength2:n,pathOffset2:n})},t.prototype.render=function(){var e={strokeDasharray:this.state.pathLength0,strokeDashoffset:this.state.pathOffset0,transform:"translateX("+this.state.house0x+")",transition:this.state.transition0},t={strokeDasharray:this.state.pathLength1,strokeDashoffset:this.state.pathOffset1,transition:this.state.transition1},n={strokeDasharray:this.state.pathLength2,strokeDashoffset:this.state.pathOffset2,transition:this.state.transition2},a={opacity:this.state.windowStyle};return u.default.createElement("div",{className:f.default.aniContainer},u.default.createElement("h1",{onClick:this.handleClick},"press"),u.default.createElement("svg",{className:f.default.houseSvg,viewBox:"0 0 746 355"},u.default.createElement("g",{fill:"none",fillRule:"evenodd"},u.default.createElement("polygon",{className:f.default.path+" "+f.default.house0,id:"house0",strokeLinecap:"square",points:"733 342 111.996779 342 111.996779 300.987885 473 30 733 236",style:e}),u.default.createElement("path",{className:f.default.path+" "+f.default.house2,id:"house2",d:"M379,48 L57,290",style:n}),u.default.createElement("polyline",{className:f.default.path+" "+f.default.house1,id:"house1",points:"587 355 587 207.966671 347 19 198 134 198 81 157 81 157 164 9 277",style:t}),u.default.createElement("rect",{style:a,x:"349",y:"213",width:"50",height:"36"}),u.default.createElement("rect",{style:a,x:"417",y:"213",width:"50",height:"36"}),u.default.createElement("rect",{style:a,x:"417",y:"264",width:"50",height:"36"}),u.default.createElement("rect",{style:a,x:"349",y:"264",width:"50",height:"36"}))))},t}(u.default.Component);t.default=c,e.exports=t.default},295:function(e,t){e.exports={aniContainer:"src-components-LogoAni----pathAni-module---aniContainer---2iqqF",houseSvg:"src-components-LogoAni----pathAni-module---houseSvg---3j7OB",path:"src-components-LogoAni----pathAni-module---path---1ZdEU",house0:"src-components-LogoAni----pathAni-module---house0---51sVB",house1:"src-components-LogoAni----pathAni-module---house1---2YKAv",house2:"src-components-LogoAni----pathAni-module---house2---C3liQ"}},205:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=a(s),i=n(47),f=a(i),c=n(201),h=a(c),p=function(e){function t(n){o(this,t);var a=r(this,e.call(this,n));return a.handleClick=function(){a.setState({sx:.5})},a.state={sx:1},a}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",null,u.default.createElement(h.default,null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement(f.default,{to:"/page-2/"},"Go to page 2"))},t}(u.default.Component);t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-5b5b730524205cf705d2.js.map