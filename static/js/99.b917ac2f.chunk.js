(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[99],{1070:function(e,t,n){},1071:function(e,t,n){},1084:function(e,t,n){"use strict";n.r(t),n.d(t,"PropertyPanel",(function(){return u}));var r=n(12),i=n(142);const o=e=>{const t=e.map((e=>e.getAttribute("PIN_NUM"))),n=new URLSearchParams;if(t){n.set("pins",t.toString());const e={pins:t.toString()};history.state?history.state.pins!=e.pins&&history.pushState({pins:t.toString()},"",`${location.pathname}?${n.toString()}`):history.pushState({pins:t.toString()},"",`${location.pathname}?${n.toString()}`)}};n(1070);var c=n(25);const s=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(13),n.e(27),n.e(69)]).then(n.bind(null,1285)))),a=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(61)]).then(n.bind(null,1286)))),l=Object(r.lazy)((()=>Promise.all([n.e(13),n.e(41),n.e(170)]).then(n.bind(null,1265)))),u=e=>{const t=Object(r.useRef)({pins:""}),[n,u]=Object(r.useState)(!1),[d,f]=Object(r.useState)(),[h,p]=Object(r.useState)(),[b,m]=Object(r.useState)("OBJECTID IS NULL"),[g,v]=Object(r.useState)("OBJECTID IS NULL"),[j,y]=Object(r.useState)(),[O,w]=Object(r.useState)("list"),[S,x]=Object(r.useState)();let A=[];const[P,k]=Object(r.useState)(),[E,_]=Object(r.useState)(!1),T=e=>{document.querySelector(`calcite-tab-title:${"list"===e?"first":"last"}-child`).dispatchEvent(new MouseEvent("click")),w(e)};return Object(r.useEffect)((()=>{if(!n){(e=>{y(e.map.allTables.find((e=>e.title.includes("Condo")&&"feature"===e.type))),x(e.map.allTables.find((e=>e.title.includes("Address")&&"feature"===e.type))),k(e.map.allLayers.find((e=>e.title.includes("Property")&&"feature"===e.type))),u(!0),f(e)})(e.view),document.querySelectorAll("calcite-tab-nav").forEach((e=>{e.addEventListener("calciteTabChange",(e=>{w(0===e.detail.tab?"list":"info")}))})),window.addEventListener("popstate",(e=>{var n,r,i,o;(null===(n=e.state)||void 0===n?void 0:n.pins)===(null===(r=t.current)||void 0===r?void 0:r.pins)?history.back():(null===(i=e.state)||void 0===i?void 0:i.pins)&&v(`PIN_NUM in ('${decodeURIComponent(null===(o=history.state)||void 0===o?void 0:o.pins.split(",").join("','"))}')`);t.current=e.state}));const n=new URL(document.URL).searchParams.get("pins");n&&v(`PIN_NUM in ('${decodeURIComponent(n.split(",").join("','"))}')`)}return()=>{console.log("cleanup")}}),[]),Object(r.useEffect)((()=>{((e,t,n)=>i.c((r=>{null===t||void 0===t||t.queryFeatures({geometry:n,outFields:["OBJECTID","REID","PIN_NUM"],returnGeometry:!0,outSpatialReference:null===e||void 0===e?void 0:e.spatialReference}).then((n=>{null===e||void 0===e||e.goTo(n.features);const o=n.features.map((e=>e.getObjectId()));t.queryRelatedFeatures({relationshipId:0,objectIds:o,outFields:["*"]}).then((e=>{const t=[],c=[];o.forEach((n=>{var r;null===(r=e[n])||void 0===r||r.features.forEach((e=>{t.push(e.getAttribute("OBJECTID")),c.push(e)}))})),t.length?r({where:`OBJECTID in (${t.toString()})`,features:c,properties:n.features}):Object(i.r)()}))}))})))(d,P,e.geometry).then((t=>{if(_(!0),m(t.where),e.propertiesSelected(t.properties),1===t.features.length){var n;const e=t.features[0];e.layer=j,e.popupTemplate=null===j||void 0===j?void 0:j.popupTemplate;const r=t.features[0];r.geometry=null===(n=t.properties.find((e=>e.getAttribute("PIN_NUM")===r.getAttribute("PIN_NUM"))))||void 0===n?void 0:n.geometry,p(r),o([r]),T("info")}else T("list")}))}),[e.geometry,e.propertiesSelected]),Object(c.jsxs)("div",{className:"panel",children:[n&&Object(c.jsx)(r.Suspense,{fallback:"",children:Object(c.jsx)(s,{view:d,condosTable:j,addressTable:S,propertyLayer:P,where:g,searchComplete:t=>{t.feature?(p(t.features[0]),o([t.features[0]]),T("info")):T("list");const n=null===t||void 0===t?void 0:t.features.map((e=>e.getAttribute("OBJECTID")));m(`OBJECTID in (${n.toString()})`),A=t.properties,A.forEach((e=>{e.setAttribute("selected",0)})),e.propertiesSelected(A)}})}),Object(c.jsxs)("calcite-tabs",{position:"below",layout:"center",children:[Object(c.jsxs)("calcite-tab-nav",{slot:"tab-nav",children:[Object(c.jsx)("calcite-tab-title",{active:"list"===O,children:"List"}),Object(c.jsx)("calcite-tab-title",{active:"info"===O,children:"Info"})]}),Object(c.jsx)("calcite-tab",{active:"list"===O?"":null,children:n&&Object(c.jsx)(r.Suspense,{fallback:"",children:Object(c.jsx)(l,{view:d,layer:j,filter:b,loading:E,selectedTab:O,featureSelected:t=>{if(t){A.forEach((e=>{e.getAttribute("PIN_NUM")!=(null===t||void 0===t?void 0:t.getAttribute("PIN_NUM"))&&e.setAttribute("selected",0)}));const n=A.find((e=>e.getAttribute("PIN_NUM")===(null===t||void 0===t?void 0:t.getAttribute("PIN_NUM"))));null===n||void 0===n||n.setAttribute("selected",1),A.splice(A.indexOf(n),1),A.push(n),t.geometry=null===n||void 0===n?void 0:n.geometry,null===d||void 0===d||d.goTo(t.geometry),p(t),o([t]),T("info"),e.propertiesSelected(A)}}})})}),Object(c.jsx)("calcite-tab",{active:"info"===O?"":null,children:n&&Object(c.jsx)(r.Suspense,{fallback:"",children:Object(c.jsx)(a,{view:d,feature:h})})})]})]})};t.default=u},1284:function(e,t,n){"use strict";n.r(t),n.d(t,"Shell",(function(){return m}));var r=n(12),i=n(1084);n(1071);const o=e=>{var t,n;(null===(t=e.target)||void 0===t?void 0:t.parentElement).collapsed=null===(n=e.target)||void 0===n?void 0:n.dismissed},c=(e,t,n)=>{var r,i;((e,t)=>{innerWidth<1e3?e.forEach((e=>{e.isActive=!1})):t?e.forEach((e=>{e.isActive=e.isActive&&!e.isTool})):e.forEach((e=>{e.isActive=e.isActive&&e.isTool}))})(n,t.isTool),t.isActive=!0;const o=null===(r=e.target)||void 0===r||null===(i=r.parentElement)||void 0===i?void 0:i.parentElement,c=null===o||void 0===o?void 0:o.querySelector("calcite-panel");return t.isActive?(null===o||void 0===o||o.removeAttribute("collapsed"),null===c||void 0===c||c.removeAttribute("dismissed")):(null===o||void 0===o||o.setAttribute("collapsed",""),null===c||void 0===c||c.setAttribute("dismissed","")),n};var s=n(54),a=n.n(s),l=n(53),u=n(38),d=n(55),f=n(25);const h=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(55)]).then(n.bind(null,1253)))),p=Object(r.lazy)((()=>n.e(169).then(n.bind(null,1089)))),b=Object(r.lazy)((()=>n.e(171).then(n.bind(null,1090)))),m=e=>{var t,s;const[m,g]=Object(r.useState)([]),[v,j]=Object(r.useState)(),[y,O]=Object(r.useState)(window.innerWidth),[w,S]=Object(r.useState)(null),[x,A]=Object(r.useState)(!1),[P,k]=Object(r.useState)([]),{theme:E,setTheme:_}=Object(r.useContext)(l.a),{actions:T,setActions:I}=Object(r.useContext)(d.a),C=e=>{k([...e]);const t=T.find((e=>e.isActive));t&&(t.isActive=!1);const n=T.find((e=>"Property Search"===e.title));n&&(n.isActive=!0),I([...T])},M=()=>{O(window.innerWidth)},U=e=>{if(e){const t=document.getElementById(e.container);if(!(null===t||void 0===t?void 0:t.hasChildNodes())){if("Property Search"===e.title){const e=Object(r.lazy)((()=>Promise.resolve().then(n.bind(null,1084))));a.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:w,propertiesSelected:C})}),t)}if("Location Search"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(59)]).then(n.bind(null,1091))));a.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:w})}),t)}if("Layers"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(63)]).then(n.bind(null,1264))));a.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:w})}),t)}if("Basemaps"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(60)]).then(n.bind(null,1258))));a.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:w})}),t)}if("Legend"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(13),n.e(68)]).then(n.bind(null,1092))));a.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:w})}),t)}if("Property Select"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(53)]).then(n.bind(null,1093))));a.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:w,geometrySet:e=>{const t=document.getElementById("propertySearch");a.a.render(Object(f.jsx)(i.PropertyPanel,{geometry:e,propertiesSelected:C}),t)}})}),t)}if("Measure"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(10),n.e(13),n.e(88)]).then(n.bind(null,1262))));a.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:w})," "]}),t)}if("Sketch"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(54)]).then(n.bind(null,1277))));a.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:w})," "]}),t)}if("Bookmarks"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(13),n.e(27),n.e(41),n.e(81),n.e(266)]).then(n.bind(null,1094))));a.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:w})," "]}),t)}if("Print"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(4),n.e(13),n.e(74)]).then(n.bind(null,1269))));a.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:w})," "]}),t)}}}};return Object(r.useEffect)((()=>{document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.addEventListener("calcitePanelDismissedChange",o)}));return(e=>{e?("dark"===e&&_("dark"),"light"===e&&_("light")):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?_("dark"):_("light"),document.body.classList.remove("light"===e?"dark":"light"),document.body.classList.add("light"===e?"light":"dark");const t=Array.from(document.head.querySelectorAll("link")).find((t=>t.href.includes(`${e}/main.css`)));t&&document.head.appendChild(t)})(window.localStorage.getItem("imaps_theme")),window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.removeEventListener("calcitePanelDismissedChange",o)}))}}),[e.actions]),Object(f.jsxs)("div",{children:[Object(f.jsxs)("calcite-shell",{theme:E,className:"shell",children:[y>=1e3?Object(f.jsxs)("calcite-shell-panel",{slot:"primary-panel",position:"start","width-scale":"l",collapsed:!0,children:[Object(f.jsx)("calcite-action-bar",{slot:"action-bar",children:T.map((t=>{if(t.isTool)return Object(f.jsx)("calcite-action",{name:t.container,text:t.title,icon:t.icon,onClick:n=>{I([...c(n,t,e.actions)]),U(t)},active:!0===t.isActive?"":null},t.icon)}))}),Object(f.jsxs)("calcite-panel",{dismissible:!0,dismissed:!0,children:[Object(f.jsx)("div",{slot:"header-content",children:null===(t=T.find((e=>e.isActive&&e.isTool)))||void 0===t?void 0:t.title}),Object(f.jsx)("div",{slot:"header-trailing-content",children:Object(f.jsx)("calcite-action",{label:"Performs another custom action",text:"Perform Another Action!","text-enabled":!0,icon:"blog"})}),T.map((e=>{if(e.isTool)return Object(f.jsx)("div",{id:e.container,hidden:!e.isActive},e.container)}))]})]}):"",Object(f.jsxs)("calcite-shell-panel",{slot:"contextual-panel",position:"end","width-scale":"l",children:[Object(f.jsx)("calcite-action-bar",{slot:"action-bar",children:T.map((t=>{if(!t.isTool||y<1e3)return Object(f.jsx)("calcite-action",{text:t.title,name:t.container,icon:t.icon,onClick:async n=>{I([...c(n,t,e.actions)]),U(t)},active:!0===t.isActive?"":null},t.icon)}))}),Object(f.jsxs)("calcite-panel",{dismissible:!0,children:[Object(f.jsx)("div",{slot:"header-content",children:null===(s=T.find((e=>e.isActive)))||void 0===s?void 0:s.title}),(()=>{var e;const t=T.find((e=>e.isActive));return(null===t||void 0===t||null===(e=t.tips)||void 0===e?void 0:e.length)?Object(f.jsx)("calcite-action",{text:"Action",label:"Action",slot:"header-actions-end",icon:"lightbulb",appearance:"solid",scale:"m","calcite-hydrated":"",onClick:()=>{g([...m,...t.tips]),j(t.title)}}):""})(),T.map((e=>{if(!e.isTool||y<1e3)return Object(f.jsx)("div",{id:e.container,hidden:!e.isActive},e.container)}))]})]}),Object(f.jsx)("div",{slot:"shell-header",children:Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(p,{links:u.b})})}),Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(h,{id:"95092428774c4b1fb6a3b6f5fed9fbc4",initialized:async e=>{if(!x){S(e),A(!0);const t=document.getElementById("propertySearch");e.map&&a.a.render(Object(f.jsx)(i.PropertyPanel,{view:e,propertiesSelected:C}),t)}},geometryChanged:e=>{const t=document.getElementById("propertySearch");a.a.render(Object(f.jsx)(i.PropertyPanel,{geometry:e,propertiesSelected:C}),t)},selectedProperties:P})})]}),Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(b,{tips:m,title:v,closed:!0,tipsDismissed:()=>{g([]),j("")}})})]})};t.default=m},129:function(e,t,n){"use strict";var r,i,o=n(258);let c;var s,a;function l(e){return"function"==typeof c[e]?c[e]=c[e](o.a):c[e]}c=null!=(r=o.a.dojoConfig)&&r.has||null!=(i=o.a.esriConfig)&&i.has?{...null==(s=o.a.dojoConfig)?void 0:s.has,...null==(a=o.a.esriConfig)?void 0:a.has}:{},l.add=(e,t,n,r)=>((r||void 0===c[e])&&(c[e]=t),n&&l(e)),l.cache=c,l.add("esri-deprecation-warnings",!0),(()=>{l.add("host-webworker",void 0!==o.a.WorkerGlobalScope&&self instanceof o.a.WorkerGlobalScope);const e="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(l.add("host-browser",e),l.add("host-node","object"==typeof o.a.process&&o.a.process.versions&&o.a.process.versions.node&&o.a.process.versions.v8),l.add("dom",e),l("host-browser")){const e=navigator,t=e.userAgent,n=e.appVersion,r=parseFloat(n);if(l.add("wp",parseFloat(t.split("Windows Phone")[1])||void 0),l.add("msapp",parseFloat(t.split("MSAppHost/")[1])||void 0),l.add("khtml",n.indexOf("Konqueror")>=0?r:void 0),l.add("edge",parseFloat(t.split("Edge/")[1])||void 0),l.add("opr",parseFloat(t.split("OPR/")[1])||void 0),l.add("webkit",!l("wp")&&!l("edge")&&parseFloat(t.split("WebKit/")[1])||void 0),l.add("chrome",!l("edge")&&!l("opr")&&parseFloat(t.split("Chrome/")[1])||void 0),l.add("android",!l("wp")&&parseFloat(t.split("Android ")[1])||void 0),l.add("safari",!(n.indexOf("Safari")>=0)||l("wp")||l("chrome")||l("android")||l("edge")||l("opr")?void 0:parseFloat(n.split("Version/")[1])),l.add("mac",n.indexOf("Macintosh")>=0),l.add("quirks","BackCompat"===document.compatMode),!l("wp")&&t.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),n=t.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(n.replace(/_/,".").replace(/_/g,""));l.add(e,r),l.add("ios",r)}l.add("trident",parseFloat(n.split("Trident/")[1])||void 0),l.add("svg","undefined"!=typeof SVGAngle),l("webkit")||(t.indexOf("Opera")>=0&&l.add("opera",r>=9.8&&parseFloat(t.split("Version/")[1])||r),!(t.indexOf("Gecko")>=0)||l("wp")||l("khtml")||l("trident")||l("edge")||l.add("mozilla",r),l("mozilla")&&l.add("ff",parseFloat(t.split("Firefox/")[1]||t.split("Minefield/")[1])||void 0))}})(),(()=>{if(o.a.navigator){const e=navigator.userAgent,t=e.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),n=e.match(/iPhone/i);t&&l.add("esri-mobile",t),n&&l.add("esri-iPhone",n),l.add("esri-geolocation",!!navigator.geolocation)}l.add("esri-canvas-svg-support",!l("trident")),l.add("esri-wasm","WebAssembly"in o.a),l.add("esri-shared-array-buffer",(()=>{const e="SharedArrayBuffer"in o.a,t=!1===o.a.crossOriginIsolated;return e&&!t})),l.add("esri-atomics","Atomics"in o.a),l.add("esri-workers","Worker"in o.a),l.add("esri-text-decoder","TextDecoder"in o.a),l.add("esri-text-encoder","TextEncoder"in o.a),l.add("featurelayer-snapshot-enabled",!0),l.add("featurelayer-snapshot-point-min-threshold",8e4),l.add("featurelayer-snapshot-point-max-threshold",4e5),l.add("featurelayer-snapshot-point-coverage",.1),l.add("featurelayer-advanced-symbols",!1),l.add("featurelayer-pbf",!0),l.add("featurelayer-pbf-statistics",!1),l.add("feature-layers-workers",!0),l.add("mapview-transitions-duration",200),l.add("mapserver-pbf-enabled",!1),l("host-webworker")||l("host-browser")&&(l.add("csp-restrictions",(()=>{try{new Function}catch{return!0}return!1})),l.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{l.add("esri-image-decode",!0,!0,!0)})).catch((()=>{l.add("esri-image-decode",!1,!0,!0)}))}return!1})),l.add("esri-url-encodes-apostrophe",(()=>{const e=o.a.document.createElement("a");return e.href="?'",e.href.indexOf("?%27")>-1})),l.add("vectortilelayer-max-buffers",(()=>l("ff")?160:Number.POSITIVE_INFINITY)))})(),t.a=l},130:function(e,t,n){"use strict";n(129);var r=n(204),i=n(138),o=n(196);const c={info:0,warn:1,error:2,none:3};class s{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,s._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=s.getLogger(this.module.slice(0,t)))}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e)}warn(...e){this._log("warn","always",...e)}info(...e){this._log("info","always",...e)}errorOnce(...e){this._log("error","once",...e)}warnOnce(...e){this._log("warn","once",...e)}infoOnce(...e){this._log("info","once",...e)}errorOncePerTick(...e){this._log("error","oncePerTick",...e)}warnOncePerTick(...e){this._log("warn","oncePerTick",...e)}infoOncePerTick(...e){this._log("info","oncePerTick",...e)}get test(){const e=this;return{loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return{resetLoggers(e={}){const t=s._loggers;return s._loggers=e,t},set throttlingDisabled(e){s._throttlingDisabled=e}}}static getLogger(e){let t=s._loggers[e];return t||(t=new s({module:e})),t}_log(e,t,...n){if(this._matchLevel(e)){if("always"!==t&&!s._throttlingDisabled){const r=this._argsToKey(n),i=this._loggedMessages[e].get(r);if("once"===t&&null!=i||"oncePerTick"===t&&i&&i>=s._tickCounter)return;this._loggedMessages[e].set(r,s._tickCounter),s._scheduleTickCounterIncrement()}for(const t of r.a.log.interceptors)if(t(e,this.module,...n))return;this._inheritedWriter()(e,this.module,...n)}}_parentWithMember(e,t){let n=this;for(;Object(i.k)(n);){const t=n[e];if(Object(i.k)(t))return t;n=n.parent}return t}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...n){console[e](`[${t}]`,...n)}_matchLevel(e){const t=r.a.log.level?r.a.log.level:"warn";return c[this._parentWithMember("level",t)]<=c[e]}_argsToKey(...e){return Object(o.b)(JSON.stringify(e,((e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]")))}static _scheduleTickCounterIncrement(){s._tickCounterScheduled||(s._tickCounterScheduled=!0,Promise.resolve().then((()=>{s._tickCounter++,s._tickCounterScheduled=!1})))}}s._loggers={},s._tickCounter=0,s._tickCounterScheduled=!1,s._throttlingDisabled=!1,t.a=s},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return i})),n.d(t,"k",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return p})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return l})),n.d(t,"s",(function(){return a}));function r(e){return null!=e}function i(e){return null==e}function o(e){return void 0===e}function c(e,t){return r(e)?t(e):null}function s(e){return e}function a(e,t){if(i(e))throw new Error(t);return e}function l(e,t){return r(e)?e:"function"==typeof t?t():t}function u(e){return r(e)&&e.destroy(),null}function d(e){return r(e)&&e.dispose(),null}function f(e){return r(e)&&e.remove(),null}function h(e){return r(e)&&e.abort(),null}function p(e){return null}function b(e,t){const n=new Array;for(const r of e)n.push(g(r,null,t));return n}function m(e,t){for(const n of e)g(n,null,t)}function g(e,t,n){return r(e)?n(e):t}function v(e,t){return r(e)?t(e):null}function j(e){return e.filter((e=>r(e)))}function y(e,...t){let n=e,r=0;for(;r<t.length&&n;)n=n[t[r++]];return n}function O(e){return e}},140:function(e,t,n){"use strict";var r=n(141),i=n(130),o=n(717);class c extends o.a{constructor(e,t,n){if(super(e,t,n),!(this instanceof c))return new c(e,t,n)}toJSON(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((e,t)=>{if(t&&"object"==typeof t&&"function"==typeof t.toJSON)return t;try{return Object(r.a)(t)}catch(c){return"[object]"}})))}}catch(e){throw i.a.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new c(e.name,e.message,e.details)}}c.prototype.type="error",t.a=c},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));n(129);var r=n(455);function i(e,t){let n;if(t)for(n in e)e.hasOwnProperty(n)&&(void 0===e[n]?delete e[n]:e[n]instanceof Object&&i(e[n],!0));else for(n in e)e.hasOwnProperty(n)&&void 0===e[n]&&delete e[n];return e}function o(e){if(!e||"object"!=typeof e||"function"==typeof e)return e;if(Object(r.h)(e)||Object(r.k)(e)||Object(r.l)(e)||Object(r.f)(e)||Object(r.i)(e)||Object(r.g)(e)||Object(r.j)(e)||Object(r.d)(e)||Object(r.e)(e))return Object(r.m)(e);if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer)return e.slice(0,e.byteLength);if(e instanceof Map){const t=new Map;return e.forEach(((e,n)=>{t.set(n,o(e))})),t}if(e instanceof Set){const t=new Set;return e.forEach((e=>{t.add(o(e))})),t}let t;const n=e;if("function"==typeof n.clone)t=n.clone();else if("function"==typeof n.map&&"function"==typeof n.forEach)t=n.map(o);else if("function"==typeof n.notifyChange&&"function"==typeof n.watch)t=n.clone();else{t={};for(const n of Object.getOwnPropertyNames(e))t[n]=o(e[n])}return t}function c(e,t){return e===t||"number"==typeof e&&isNaN(e)&&"number"==typeof t&&isNaN(t)||"function"==typeof(e||{}).getTime&&"function"==typeof(t||{}).getTime&&e.getTime()===t.getTime()||!1}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return T})),n.d(t,"h",(function(){return I})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return w})),n.d(t,"k",(function(){return S})),n.d(t,"l",(function(){return y})),n.d(t,"m",(function(){return j})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return k})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return g})),n.d(t,"r",(function(){return x})),n.d(t,"s",(function(){return A})),n.d(t,"t",(function(){return p})),n.d(t,"u",(function(){return d})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return E})),n.d(t,"x",(function(){return v}));var r=n(138),i=(n(130),n(140)),o=n(848),c=n(301);function s(e){return Promise.all(e)}function a(e){return new Promise(((t,n)=>{try{e(t,n)}catch(r){Promise.resolve().then((()=>n(r)))}}))}function l(e="Aborted"){return new i.a("AbortError",e)}function u(){return new AbortController}function d(e){if(h(e))throw l()}function f(e){return Object(r.k)(e)?"aborted"in e?e:e.signal:e}function h(e){const t=f(e);return Object(r.k)(t)&&t.aborted}function p(e){if(j(e))throw e}function b(e){if(!j(e))throw e}function m(e,t){const n=f(e);if(!Object(r.j)(n)){if(!n.aborted)return Object(c.d)(n,"abort",(()=>t()));t()}}function g(e,t){const n=f(e);if(!Object(r.j)(n))return d(n),Object(c.d)(n,"abort",(()=>t(l())))}function v(e,t){const n=f(t);return Object(r.j)(n)?e:new Promise(((n,i)=>{let o=m(t,(()=>i(l())));const c=()=>o=Object(r.p)(o);e.then(c,c),e.then(n,i)}))}function j(e){return e&&"AbortError"===e.name}function y(e){return e.catch((e=>{if(!j(e))throw e}))}function O(){let e=null;const t=new Promise(((t,n)=>{e={promise:void 0,resolve:t,reject:n}}));return e.promise=t,e}function w(e){if(!e)return;if("function"!=typeof e.forEach){const t=Object.keys(e);return w(t.map((t=>e[t]))).then((e=>{const n={};return t.forEach(((t,r)=>n[t]=e[r])),n}))}const t=e;return Promise.allSettled(t).then((e=>Array.from(t,((t,n)=>{const r=e[n];return"fulfilled"===r.status?{promise:t,value:r.value}:{promise:t,error:r.reason}}))))}function S(e){return w(e).then((e=>e.filter((e=>!!e.value)).map((e=>e.value))))}function x(e){return Promise.reject(e)}function A(e){return Promise.resolve(e)}function P(e,t,n){const r=u();return m(n,(()=>r.abort())),new Promise(((n,i)=>{let o=setTimeout((()=>{o=0,n(t)}),e);m(r,(()=>{o&&(clearTimeout(o),i(l()))}))}))}function k(e){return e&&"function"==typeof e.then}function E(e){return e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then?e:Promise.resolve(e)}function _(e,t=-1){let n,i,o,c,s=null;const a=(...d)=>{if(n){i=d,c&&c.reject(l()),c=O();const e=Object(r.d)(c.promise);if(s){const e=s;s=null,e.abort()}return e}if(o=c||O(),c=null,t>0){const r=u();n=E(e(...d,r.signal));const i=n;P(t).then((()=>{n===i&&(c?r.abort():s=r)}))}else n=1,n=E(e(...d));const f=()=>{const e=i;i=o=n=s=null,null!=e&&a(...e)},h=n,p=o;return h.then(f,f),h.then(p.resolve,p.reject),Object(r.d)(p.promise)};return a}function T(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r})),r=t=>{e(t)};return r.resolve=t=>e(t),r.reject=e=>t(e),r.timeout=(e,t)=>o.a.setTimeout((()=>r.reject(t)),e),r.promise=n,r}function I(e){let t=u();const n=e(t.signal);let r={promise:n,finished:!1,abort:()=>{t&&(t.abort(),t=null)}};const i=()=>{r&&(r.finished=!0,r=null),t=null};return n.then(i,i),r}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c}));var r=n(141);function i(e,t,n=!1){return a(e,t,n)}function o(e,t){if(null!=t)return t[e]||s(e.split("."),!1,t)}function c(e,t,n){const r=e.split("."),i=r.pop(),o=s(r,!0,n);o&&i&&(o[i]=t)}function s(e,t,n){let r=n;for(const i of e){if(null==r)return;if(!(i in r)){if(!t)return;r[i]={}}r=r[i]}return r}function a(e,t,n){return t?Object.keys(t).reduce((function(e,i){let o=e[i],c=t[i];return o===c?e:void 0===o?(e[i]=Object(r.a)(c),e):(Array.isArray(c)||Array.isArray(e)?(o=o?Array.isArray(o)?e[i]=o.concat():e[i]=[o]:e[i]=[],c&&(Array.isArray(c)||(c=[c]),n?c.forEach((e=>{-1===o.indexOf(e)&&o.push(e)})):e[i]=c.concat())):c&&"object"==typeof c?e[i]=a(o,c,n):e.hasOwnProperty(i)&&!t.hasOwnProperty(i)||(e[i]=c),e)}),e||{}):e}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l}));var r=n(177);const i=/\{([^\}]+)\}/g;function o(e){return null==e?"":e}function c(e,t){return e.replace(i,"object"==typeof t?(e,n)=>o(Object(r.b)(n,t)):(e,n)=>o(t(n)))}function s(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(e=>t&&-1!==t.indexOf(e)?e:`\\${e}`))}function a(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function l(e){return(new DOMParser).parseFromString(e||"","text/html").body.innerText||""}},204:function(e,t,n){"use strict";var r=n(258),i=(n(129),n(177)),o=n(296);const c={apiKey:void 0,applicationUrl:r.a.location&&r.a.location.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryService:null,geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(r.a.esriConfig&&(Object(i.a)(c,r.a.esriConfig,!0),delete c.has),!c.assetsPath){const e="4.19.0";c.assetsPath=`https://cdn.jsdelivr.net/npm/@arcgis/core@${e}-next.${o.a}/assets`}c.baseUrl&&console.warn("[esri.config]","baseUrl has been replaced by assetsPath"),Object.defineProperty(c,"baseUrl",{set(){console.warn("[esri.config]","baseUrl has been replaced by assetsPath")}}),c.request.corsEnabledServers=[],c.request.corsEnabledServers.push=function(){return console.warn("[esri.config]","request.corsEnabledServers is not supported and will be removed in a future release. See http://esriurl.com/cors8664"),0},t.a=c},252:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},258:function(e,t,n){"use strict";(function(e){const n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:void 0;t.a=n}).call(this,n(252))},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r="20210407",i="8757c15eef8f55f2af038ec79fa53adf0db975ec"},301:function(e,t,n){"use strict";function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function i(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(t,n);if(Array.isArray(t)){const r=t.slice();for(const t of r)e.addEventListener(t,n);return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function o(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(t,n);const o=i(e,t,(t=>{o.remove(),n.call(e,t)}));return{remove(){o.remove()}}}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o}));const c={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function s({key:e}){return c[e]||e}},455:function(e,t,n){"use strict";function r(e,t){if(e.forEach)e.forEach(t);else for(let n=0;n<e.length;n++)t(e[n],n,e)}function i(e,t,n){if(e.slice)return e.slice(t,n);void 0===t?t=0:(t<0&&(t+=e.length),t=Math.min(e.length,Math.max(0,t))),void 0===n?n=e.length:(n<0&&(n+=e.length),n=Math.min(e.length,Math.max(0,n)));const r=Math.max(0,n-t),i=new(0,e.constructor)(r);for(let o=0;o<r;o++)i[o]=e[t+o];return i}function o(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}function c(e){return e instanceof Int8Array||e&&e.constructor&&"Int8Array"===e.constructor.name}function s(e){return e instanceof Uint8Array||e&&e.constructor&&"Uint8Array"===e.constructor.name}function a(e){return e instanceof Uint8ClampedArray||e&&e.constructor&&"Uint8ClampedArray"===e.constructor.name}function l(e){return e instanceof Int16Array||e&&e.constructor&&"Int16Array"===e.constructor.name}function u(e){return e instanceof Uint16Array||e&&e.constructor&&"Uint16Array"===e.constructor.name}function d(e){return e instanceof Int32Array||e&&e.constructor&&"Int32Array"===e.constructor.name}function f(e){return e instanceof Uint32Array||e&&e.constructor&&"Uint32Array"===e.constructor.name}function h(e){return e instanceof Float32Array||e&&e.constructor&&"Float32Array"===e.constructor.name}function p(e){return e instanceof Float64Array||e&&e.constructor&&"Float64Array"===e.constructor.name}function b(e){const t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return t}function m(e){return e?128+e.buffer.byteLength+64:0}n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return s})),n.d(t,"l",(function(){return a})),n.d(t,"m",(function(){return i})),n.d(t,"n",(function(){return b}))},717:function(e,t,n){"use strict";var r=n(177);class i{constructor(e,t,n){this.name=e,this.details=n,this.message=void 0,this instanceof i&&(this.message=t&&function(e,t){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,n){if(""===n)return"$";const i=Object(r.b)(n,t),o=null==i?"":i;if(void 0===o)throw new Error(`could not find key "${n}" in template`);return o.toString()}))}(t,n)||"")}toString(){return"["+this.name+"]: "+this.message}}t.a=i},848:function(e,t,n){"use strict";var r=n(258);var i,o=(i=r.a,{setTimeout:(e,t)=>{const n=i.setTimeout(e,t);return{remove:()=>i.clearTimeout(n)}}});t.a=o}}]);
//# sourceMappingURL=99.b917ac2f.chunk.js.map