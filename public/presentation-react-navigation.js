!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("presentation-react-navigation",["react"],t):"object"==typeof exports?exports["presentation-react-navigation"]=t(require("react")):e["presentation-react-navigation"]=t(e.react)}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);class i extends a.a.Component{constructor(e){super(e),this.state={menu:"menu menu--off",wrapper:"material-design-hamburger"},this.navigate=this.navigate.bind(this),this.toggle=this.toggle.bind(this),this._renderItems=this._renderItems.bind(this)}navigate(e){e&&e(),this.toggle()}toggle(){"menu menu--off menu--on"===this.state.menu?(this.setState({menu:"menu menu--off"}),this.setState({wrapper:"material-design-hamburger"})):(this.setState({menu:"menu menu--off menu--on"}),this.setState({wrapper:"material-design-hamburger model"}))}_renderItems(){return this.props.items?this.props.items.map((e,t)=>e.spacer?a.a.createElement("div",{className:"spacer"}):a.a.createElement("div",{key:e.id,id:e.id,onClick:()=>this.navigate(e.click),title:e.title?e.title:""},a.a.createElement("a",{href:this.props.hash?`#/${e.id}`:`/${e.id}`,className:"scroll"},e.icon?a.a.createElement("i",{className:"material-icons md-dark"},e.icon):"",e.title?e.title:""))):a.a.createElement("span",null)}render(){return a.a.createElement("nav",{className:"wrapper"},a.a.createElement("section",{className:this.state.wrapper},a.a.createElement("div",{className:"material-design-hamburger__icon",onClick:this.toggle},a.a.createElement("i",{className:"material-icons md-light"},"menu"))),a.a.createElement("section",{className:this.state.menu},a.a.createElement("div",null,this.props.title),this._renderItems()))}}var s=i;n.d(t,"HamburgerMenu",(function(){return s}))}])}));
//# sourceMappingURL=presentation-react-navigation.js.map