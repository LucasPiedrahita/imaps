(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[99],{1073:function(e,t,n){},1074:function(e,t,n){},1088:function(e,t,n){"use strict";n.r(t),n.d(t,"PropertyPanel",(function(){return u}));var r=n(12),i=n(142);const o=e=>{const t=e.map((e=>e.getAttribute("PIN_NUM"))),n=new URLSearchParams;if(t){n.set("pins",t.toString());const e={pins:t.toString()};history.state?history.state.pins!=e.pins&&history.pushState({pins:t.toString()},"",`${location.pathname}?${n.toString()}`):history.pushState({pins:t.toString()},"",`${location.pathname}?${n.toString()}`)}else history.replaceState(history.state,"",location.pathname)};n(1073);var c=n(25);const s=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(13),n.e(27),n.e(69)]).then(n.bind(null,1289)))),l=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(61)]).then(n.bind(null,1290)))),a=Object(r.lazy)((()=>Promise.all([n.e(13),n.e(41),n.e(172)]).then(n.bind(null,1269)))),u=e=>{const t=Object(r.useRef)({pins:""}),[n,u]=Object(r.useState)(!1),[d,f]=Object(r.useState)(),[p,h]=Object(r.useState)(),[b,v]=Object(r.useState)("OBJECTID IS NULL"),[m,g]=Object(r.useState)("OBJECTID IS NULL"),[j,y]=Object(r.useState)(),[O,w]=Object(r.useState)("list"),[S,A]=Object(r.useState)(!1),[x,P]=Object(r.useState)(),k=Object(r.useRef)(),[E,T]=Object(r.useState)(),[_,C]=Object(r.useState)(!1),I=e=>{w(e),setTimeout((()=>{var t,n,r;const i=document.querySelector(`calcite-tab-title:${"list"===e?"first":"last"}-child`),o=null===(t=document)||void 0===t||null===(n=t.querySelector("calcite-tab-nav"))||void 0===n||null===(r=n.shadowRoot)||void 0===r?void 0:r.querySelector(".tab-nav-active-indicator");i.focus(),o.setAttribute("style",`transition-duration: 0.3s; width: ${i.clientWidth}px; left: ${i.offsetLeft}px;`)}),1e3),A(!0)};return Object(r.useEffect)((()=>{if(!n){(e=>{y(e.map.allTables.find((e=>e.title.includes("Condo")&&"feature"===e.type))),P(e.map.allTables.find((e=>e.title.includes("Address")&&"feature"===e.type))),T(e.map.allLayers.find((e=>e.title.includes("Property")&&"feature"===e.type))),u(!0),f(e)})(e.view),document.querySelectorAll("calcite-tab-nav").forEach((e=>{e.addEventListener("calciteTabChange",(e=>{w(0===e.detail.tab?"list":"info")}))})),window.addEventListener("popstate",(e=>{var n,r,i,o;(null===(n=e.state)||void 0===n?void 0:n.pins)===(null===(r=t.current)||void 0===r?void 0:r.pins)?history.back():(null===(i=e.state)||void 0===i?void 0:i.pins)&&g(`PIN_NUM in ('${decodeURIComponent(null===(o=history.state)||void 0===o?void 0:o.pins.split(",").join("','"))}')`);t.current=e.state}));const n=new URL(document.URL).searchParams.get("pins");n&&g(`PIN_NUM in ('${decodeURIComponent(n.split(",").join("','"))}')`)}return()=>{console.log("cleanup")}}),[]),Object(r.useEffect)((()=>{((e,t,n)=>i.c(((r,i)=>{void 0!=n&&(null===t||void 0===t||t.queryFeatures({geometry:n,outFields:["OBJECTID","REID","PIN_NUM"],returnGeometry:!0,outSpatialReference:null===e||void 0===e?void 0:e.spatialReference}).then((n=>{null===e||void 0===e||e.goTo(n.features);const o=n.features.map((e=>e.getObjectId()));t.queryRelatedFeatures({relationshipId:0,objectIds:o,outFields:["*"]}).then((e=>{const t=[],c=[];o.forEach((n=>{var r;null===(r=e[n])||void 0===r||r.features.forEach((e=>{t.push(e.getAttribute("OBJECTID")),c.push(e)}))})),t.length?r({where:`OBJECTID in (${t.toString()})`,features:c,properties:n.features}):i()}))})))})))(d,E,e.geometry).then((t=>{if(void 0!=e.geometry){if(C(!0),v(t.where),k.current=t.properties,1===t.features.length){var n,r;const i=t.features[0];i.layer=j,i.popupTemplate=null===j||void 0===j?void 0:j.popupTemplate;const c=t.features[0];c.geometry=null===(n=t.properties)||void 0===n||null===(r=n.find((e=>e.getAttribute("PIN_NUM")===c.getAttribute("PIN_NUM"))))||void 0===r?void 0:r.geometry,h(c),e.featureSelected(c),o([c]),I("info")}else o([]),h(void 0),I("list");e.propertiesSelected(t.properties)}}))}),[e.geometry,e.propertiesSelected,e.featureSelected,e.selectedProperties]),Object(c.jsxs)("div",{className:"panel",children:[n&&Object(c.jsx)(r.Suspense,{fallback:"",children:Object(c.jsx)(s,{view:d,condosTable:j,addressTable:x,propertyLayer:E,where:m,searchComplete:t=>{var n;t.feature?(h(t.features[0]),e.featureSelected(t.features[0]),o([t.features[0]]),I("info")):(o([]),h(void 0),I("list"));const r=null===t||void 0===t?void 0:t.features.map((e=>e.getAttribute("OBJECTID")));v(`OBJECTID in (${r.toString()})`),k.current=t.properties,null===(n=e.selectedProperties)||void 0===n||n.forEach((e=>{e.setAttribute("selected",0)})),e.propertiesSelected(k.current)}})}),Object(c.jsxs)("calcite-tabs",{position:"below",layout:"center",children:[Object(c.jsxs)("calcite-tab-nav",{slot:"tab-nav",children:[Object(c.jsx)("calcite-tab-title",{active:"list"===O,children:"List"}),Object(c.jsx)("calcite-tab-title",{active:"info"===O,disabled:p?null:"",children:"Info"})]}),Object(c.jsx)("calcite-tab",{active:"list"===O?"":null,children:n&&Object(c.jsx)(r.Suspense,{fallback:"",children:Object(c.jsx)(a,{view:d,layer:j,filter:b,loading:_,reloadTable:S,selectedTab:O,featureSelected:t=>{if(t){var n,r,i,c,s;null===(n=k.current)||void 0===n||n.forEach((e=>{(null===e||void 0===e?void 0:e.getAttribute("PIN_NUM"))!=(null===t||void 0===t?void 0:t.getAttribute("PIN_NUM"))&&(null===e||void 0===e||e.setAttribute("selected",0))}));const l=null===(r=k.current)||void 0===r?void 0:r.find((e=>(null===e||void 0===e?void 0:e.getAttribute("PIN_NUM"))===(null===t||void 0===t?void 0:t.getAttribute("PIN_NUM"))));null===l||void 0===l||l.setAttribute("selected",1),null===(i=k.current)||void 0===i||i.splice(null===(c=k.current)||void 0===c?void 0:c.indexOf(l),1),null===(s=k.current)||void 0===s||s.push(l),t.geometry=null===l||void 0===l?void 0:l.geometry,null===d||void 0===d||d.goTo(t.geometry),h(t),e.featureSelected(t),e.propertiesSelected(k.current),o([t]),I("info")}}})})}),Object(c.jsx)("calcite-tab",{active:"info"===O?"":null,children:n&&Object(c.jsx)(r.Suspense,{fallback:"",children:Object(c.jsx)(l,{view:d,feature:p})})})]})]})};t.default=u},1288:function(e,t,n){"use strict";n.r(t),n.d(t,"Shell",(function(){return v}));var r=n(12),i=n(1088);n(1074);const o=e=>{var t,n;(null===(t=e.target)||void 0===t?void 0:t.parentElement).collapsed=null===(n=e.target)||void 0===n?void 0:n.dismissed},c=(e,t,n)=>{var r,i;((e,t)=>{innerWidth<1e3?e.forEach((e=>{e.isActive=!1})):t?e.forEach((e=>{e.isActive=e.isActive&&!e.isTool})):e.forEach((e=>{e.isActive=e.isActive&&e.isTool}))})(n,t.isTool),t.isActive=!0;const o=null===(r=e.target)||void 0===r||null===(i=r.parentElement)||void 0===i?void 0:i.parentElement,c=null===o||void 0===o?void 0:o.querySelector("calcite-panel"),s=null===o||void 0===o?void 0:o.querySelector(".action-panel");return t.isActive?(null===o||void 0===o||o.removeAttribute("collapsed"),null===c||void 0===c||c.removeAttribute("dismissed"),null===s||void 0===s||s.removeAttribute("hidden")):(null===o||void 0===o||o.setAttribute("collapsed",""),null===c||void 0===c||c.setAttribute("dismissed",""),null===s||void 0===s||s.setAttribute("hidden","")),n};var s=n(54),l=n.n(s),a=n(53),u=n(38),d=n(55),f=n(25);const p=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(55)]).then(n.bind(null,1265)))),h=Object(r.lazy)((()=>n.e(170).then(n.bind(null,1093)))),b=Object(r.lazy)((()=>n.e(173).then(n.bind(null,1094)))),v=()=>{var e,t;const[s,v]=Object(r.useState)([]),[m,g]=Object(r.useState)(),[j,y]=Object(r.useState)(window.innerWidth),[O,w]=Object(r.useState)(null),[S,A]=Object(r.useState)(!1),[x,P]=Object(r.useState)([]),[k,E]=Object(r.useState)(),{theme:T,setTheme:_}=Object(r.useContext)(a.a),{actions:C,setActions:I}=Object(r.useContext)(d.a),N=e=>{E({...k,attributes:null===e||void 0===e?void 0:e.attributes})},M=e=>{P([...x,...e]),E({...k,attributes:null});const t=C.find((e=>e.isActive));t&&(t.isActive=!1);const n=C.find((e=>"Property Search"===e.title));n&&(n.isActive=!0);const r=document.getElementById("propertySearch");if(r){(null===r||void 0===r?void 0:r.closest(".action-panel")).hidden=!1;const e=null===r||void 0===r?void 0:r.closest("calcite-shell-panel");null===e||void 0===e||e.removeAttribute("collapsed")}l.a.render(Object(f.jsx)(i.PropertyPanel,{propertiesSelected:M,featureSelected:N,selectedProperties:e}),r),I([...C])},L=()=>{var e,t,n;(y(window.innerWidth),window.innerWidth<=500)&&(null===(e=document.querySelector("calcite-shell-panel"))||void 0===e||null===(t=e.shadowRoot)||void 0===t||null===(n=t.querySelector(".content"))||void 0===n||n.setAttribute("style","width: 100vw"));document.querySelectorAll("calcite-action[active]").forEach((e=>{const t=C.find((t=>t.title===e.getAttribute("text")));var n,r,i,o;window.innerWidth>=1e3&&(null===t||void 0===t?void 0:t.isActive)&&(t.isTool&&((null===(n=document.getElementById(t.container))||void 0===n?void 0:n.closest(".action-panel")).hidden=!0,null===(r=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===r||r.setAttribute("collapsed",""),t.isActive=!1));window.innerWidth<1e3&&(null===t||void 0===t?void 0:t.isActive)&&(t.isTool?null===(i=document.querySelector("calcite-shell-panel[slot=primary-panel]"))||void 0===i||i.removeAttribute("collapsed"):null===(o=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===o||o.removeAttribute("collapsed"))}))},U=e=>{if(console.log("setWidget",e.title),e){const t=document.getElementById(e.container);if(!(null===t||void 0===t?void 0:t.hasChildNodes())){if("Property Search"===e.title){const e=Object(r.lazy)((()=>Promise.resolve().then(n.bind(null,1088))));l.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:O,propertiesSelected:M,featureSelected:N,selectedProperties:x})}),t)}if("Location Search"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(59)]).then(n.bind(null,1095))));l.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:O})}),t)}if("Layers"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(63)]).then(n.bind(null,1268))));l.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:O})}),t)}if("Basemaps"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(60)]).then(n.bind(null,1261))));l.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:O})}),t)}if("Legend"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(13),n.e(68)]).then(n.bind(null,1096))));l.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:O})}),t)}if("Property Select"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(53)]).then(n.bind(null,1097))));l.a.render(Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(e,{view:O,geometrySet:q})}),t)}if("Measure"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(10),n.e(13),n.e(88)]).then(n.bind(null,1266))));l.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:O})," "]}),t)}if("Sketch"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(54)]).then(n.bind(null,1281))));l.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:O})," "]}),t)}if("Bookmarks"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(13),n.e(27),n.e(41),n.e(81),n.e(268)]).then(n.bind(null,1098))));l.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:O})," "]}),t)}if("Print"===e.title){const e=Object(r.lazy)((()=>Promise.all([n.e(1),n.e(2),n.e(4),n.e(13),n.e(74)]).then(n.bind(null,1273))));l.a.render(Object(f.jsxs)(r.Suspense,{fallback:"",children:[Object(f.jsx)(e,{view:O})," "]}),t)}}}},F=()=>{var e;const t=C.find((e=>e.isActive));return(null===t||void 0===t||null===(e=t.tips)||void 0===e?void 0:e.length)?Object(f.jsx)("calcite-action",{text:"Action",label:"Action",slot:"header-actions-end",icon:"lightbulb",appearance:"solid",scale:"m","calcite-hydrated":"",onClick:()=>{v([...s,...t.tips]),g(t.title)}}):""},q=e=>{const t=document.getElementById("propertySearch");l.a.render(Object(f.jsx)(i.PropertyPanel,{geometry:e,propertiesSelected:M,selectedProperties:x,featureSelected:N,selectedFeature:k}),t)};return Object(r.useEffect)((()=>{document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.addEventListener("calcitePanelDismissedChange",o)}));return(e=>{e?("dark"===e&&_("dark"),"light"===e&&_("light")):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(e="dark",_("dark")):(e="light",_("light")),document.body.classList.remove("light"===e?"dark":"light"),document.body.classList.add("light"===e?"light":"dark");const t=Array.from(document.head.querySelectorAll("link")).find((t=>t.href.includes(`${e}/main.css`)));t&&document.head.appendChild(t)})(window.localStorage.getItem("imaps_theme")),window.addEventListener("resize",L),setTimeout((()=>{var e,t,n;null===(e=document.querySelector("calcite-shell-panel"))||void 0===e||null===(t=e.shadowRoot)||void 0===t||null===(n=t.querySelector(".content"))||void 0===n||n.setAttribute("style","width: 100vw")}),500),()=>{window.removeEventListener("resize",L),document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.removeEventListener("calcitePanelDismissedChange",o)}))}}),[C]),Object(f.jsxs)("div",{children:[Object(f.jsxs)("calcite-shell",{theme:T,className:"shell",children:[j>=1e3?Object(f.jsxs)("calcite-shell-panel",{slot:"primary-panel",position:"start","width-scale":"l",collapsed:!0,children:[Object(f.jsx)("calcite-action-bar",{slot:"action-bar",children:C.map((e=>{if(e.isTool)return Object(f.jsx)("calcite-action",{name:e.container,text:e.title,icon:e.icon,onClick:t=>{I([...c(t,e,C)]),U(e)},active:!0===e.isActive?"":null},e.icon)}))}),Object(f.jsxs)("div",{className:"panel-header",children:[Object(f.jsx)("div",{className:"panel-title",children:null===(e=C.find((e=>e.isActive&&e.isTool)))||void 0===e?void 0:e.title}),Object(f.jsxs)("div",{className:"header-actions",children:[F(),Object(f.jsx)("calcite-action",{"aria-label":"Close",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"x",onClick:e=>{var t,n,r;null===(t=e.target.closest(".panel-header"))||void 0===t||t.toggleAttribute("hidden"),null===(n=e.target.closest(".action-panel"))||void 0===n||n.toggleAttribute("hidden"),null===(r=e.target.closest("calcite-shell-panel"))||void 0===r||r.toggleAttribute("collapsed")}})]})]}),Object(f.jsx)("div",{className:"action-panel",children:Object(f.jsx)("div",{className:"panel-content",children:C.map((e=>{if(e.isTool)return Object(f.jsx)("div",{id:e.container,hidden:!e.isActive},e.container)}))})})]}):"",Object(f.jsxs)("calcite-shell-panel",{slot:"contextual-panel",position:"end","width-scale":"l",children:[Object(f.jsx)("calcite-action-bar",{slot:"action-bar",children:C.map((e=>{if(!e.isTool||j<1e3)return Object(f.jsx)("calcite-action",{text:e.title,name:e.container,icon:e.icon,onClick:async t=>{I([...c(t,e,C)]),U(e)},active:!0===e.isActive?"":null},e.icon)}))}),Object(f.jsxs)("div",{className:"panel-header",children:[Object(f.jsx)("div",{className:"panel-title",children:null===(t=C.find((e=>e.isActive)))||void 0===t?void 0:t.title}),Object(f.jsxs)("div",{className:"header-actions",children:[F(),Object(f.jsx)("calcite-action",{"aria-label":"Close",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"x",onClick:e=>{var t,n,r;null===(t=e.target.closest(".panel-header"))||void 0===t||t.toggleAttribute("hidden"),null===(n=e.target.closest(".action-panel"))||void 0===n||n.toggleAttribute("hidden"),null===(r=e.target.closest("calcite-shell-panel"))||void 0===r||r.toggleAttribute("collapsed")}})]})]}),Object(f.jsx)("div",{className:"action-panel",children:Object(f.jsx)("div",{className:"panel-content",children:C.map((e=>{if(!e.isTool||j<1e3)return Object(f.jsx)("div",{id:e.container,hidden:!e.isActive},e.container)}))})})]}),Object(f.jsx)("div",{slot:"shell-header",children:Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(h,{links:u.b})})}),Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(p,{id:"95092428774c4b1fb6a3b6f5fed9fbc4",initialized:async e=>{if(!S){w(e),A(!0);const t=document.getElementById("propertySearch");e.map&&l.a.render(Object(f.jsx)(i.PropertyPanel,{view:e,propertiesSelected:M,featureSelected:N,selectedProperties:x}),t)}},geometryChanged:q,selectedProperties:x,selectedFeature:k})})]}),Object(f.jsx)(r.Suspense,{fallback:"",children:Object(f.jsx)(b,{tips:s,title:m,closed:!0,tipsDismissed:()=>{v([]),g("")}})})]})};t.default=v},129:function(e,t,n){"use strict";var r,i,o=n(258);let c;var s,l;function a(e){return"function"==typeof c[e]?c[e]=c[e](o.a):c[e]}c=null!=(r=o.a.dojoConfig)&&r.has||null!=(i=o.a.esriConfig)&&i.has?{...null==(s=o.a.dojoConfig)?void 0:s.has,...null==(l=o.a.esriConfig)?void 0:l.has}:{},a.add=(e,t,n,r)=>((r||void 0===c[e])&&(c[e]=t),n&&a(e)),a.cache=c,a.add("esri-deprecation-warnings",!0),(()=>{a.add("host-webworker",void 0!==o.a.WorkerGlobalScope&&self instanceof o.a.WorkerGlobalScope);const e="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(a.add("host-browser",e),a.add("host-node","object"==typeof o.a.process&&o.a.process.versions&&o.a.process.versions.node&&o.a.process.versions.v8),a.add("dom",e),a("host-browser")){const e=navigator,t=e.userAgent,n=e.appVersion,r=parseFloat(n);if(a.add("wp",parseFloat(t.split("Windows Phone")[1])||void 0),a.add("msapp",parseFloat(t.split("MSAppHost/")[1])||void 0),a.add("khtml",n.indexOf("Konqueror")>=0?r:void 0),a.add("edge",parseFloat(t.split("Edge/")[1])||void 0),a.add("opr",parseFloat(t.split("OPR/")[1])||void 0),a.add("webkit",!a("wp")&&!a("edge")&&parseFloat(t.split("WebKit/")[1])||void 0),a.add("chrome",!a("edge")&&!a("opr")&&parseFloat(t.split("Chrome/")[1])||void 0),a.add("android",!a("wp")&&parseFloat(t.split("Android ")[1])||void 0),a.add("safari",!(n.indexOf("Safari")>=0)||a("wp")||a("chrome")||a("android")||a("edge")||a("opr")?void 0:parseFloat(n.split("Version/")[1])),a.add("mac",n.indexOf("Macintosh")>=0),a.add("quirks","BackCompat"===document.compatMode),!a("wp")&&t.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),n=t.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(n.replace(/_/,".").replace(/_/g,""));a.add(e,r),a.add("ios",r)}a.add("trident",parseFloat(n.split("Trident/")[1])||void 0),a.add("svg","undefined"!=typeof SVGAngle),a("webkit")||(t.indexOf("Opera")>=0&&a.add("opera",r>=9.8&&parseFloat(t.split("Version/")[1])||r),!(t.indexOf("Gecko")>=0)||a("wp")||a("khtml")||a("trident")||a("edge")||a.add("mozilla",r),a("mozilla")&&a.add("ff",parseFloat(t.split("Firefox/")[1]||t.split("Minefield/")[1])||void 0))}})(),(()=>{if(o.a.navigator){const e=navigator.userAgent,t=e.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),n=e.match(/iPhone/i);t&&a.add("esri-mobile",t),n&&a.add("esri-iPhone",n),a.add("esri-geolocation",!!navigator.geolocation)}a.add("esri-canvas-svg-support",!a("trident")),a.add("esri-wasm","WebAssembly"in o.a),a.add("esri-shared-array-buffer",(()=>{const e="SharedArrayBuffer"in o.a,t=!1===o.a.crossOriginIsolated;return e&&!t})),a.add("esri-atomics","Atomics"in o.a),a.add("esri-workers","Worker"in o.a),a.add("esri-text-decoder","TextDecoder"in o.a),a.add("esri-text-encoder","TextEncoder"in o.a),a.add("featurelayer-snapshot-enabled",!0),a.add("featurelayer-snapshot-point-min-threshold",8e4),a.add("featurelayer-snapshot-point-max-threshold",4e5),a.add("featurelayer-snapshot-point-coverage",.1),a.add("featurelayer-advanced-symbols",!1),a.add("featurelayer-pbf",!0),a.add("featurelayer-pbf-statistics",!1),a.add("feature-layers-workers",!0),a.add("mapview-transitions-duration",200),a.add("mapserver-pbf-enabled",!1),a("host-webworker")||a("host-browser")&&(a.add("csp-restrictions",(()=>{try{new Function}catch{return!0}return!1})),a.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{a.add("esri-image-decode",!0,!0,!0)})).catch((()=>{a.add("esri-image-decode",!1,!0,!0)}))}return!1})),a.add("esri-url-encodes-apostrophe",(()=>{const e=o.a.document.createElement("a");return e.href="?'",e.href.indexOf("?%27")>-1})),a.add("vectortilelayer-max-buffers",(()=>a("ff")?160:Number.POSITIVE_INFINITY)))})(),t.a=a},130:function(e,t,n){"use strict";n(129);var r=n(204),i=n(138),o=n(196);const c={info:0,warn:1,error:2,none:3};class s{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,s._loggers[this.module]=this;const t=this.module.lastIndexOf(".");-1!==t&&(this._parent=s.getLogger(this.module.slice(0,t)))}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e)}warn(...e){this._log("warn","always",...e)}info(...e){this._log("info","always",...e)}errorOnce(...e){this._log("error","once",...e)}warnOnce(...e){this._log("warn","once",...e)}infoOnce(...e){this._log("info","once",...e)}errorOncePerTick(...e){this._log("error","oncePerTick",...e)}warnOncePerTick(...e){this._log("warn","oncePerTick",...e)}infoOncePerTick(...e){this._log("info","oncePerTick",...e)}get test(){const e=this;return{loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return{resetLoggers(e={}){const t=s._loggers;return s._loggers=e,t},set throttlingDisabled(e){s._throttlingDisabled=e}}}static getLogger(e){let t=s._loggers[e];return t||(t=new s({module:e})),t}_log(e,t,...n){if(this._matchLevel(e)){if("always"!==t&&!s._throttlingDisabled){const r=this._argsToKey(n),i=this._loggedMessages[e].get(r);if("once"===t&&null!=i||"oncePerTick"===t&&i&&i>=s._tickCounter)return;this._loggedMessages[e].set(r,s._tickCounter),s._scheduleTickCounterIncrement()}for(const t of r.a.log.interceptors)if(t(e,this.module,...n))return;this._inheritedWriter()(e,this.module,...n)}}_parentWithMember(e,t){let n=this;for(;Object(i.k)(n);){const t=n[e];if(Object(i.k)(t))return t;n=n.parent}return t}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...n){console[e](`[${t}]`,...n)}_matchLevel(e){const t=r.a.log.level?r.a.log.level:"warn";return c[this._parentWithMember("level",t)]<=c[e]}_argsToKey(...e){return Object(o.b)(JSON.stringify(e,((e,t)=>"object"!=typeof t||Array.isArray(t)?t:"[Object]")))}static _scheduleTickCounterIncrement(){s._tickCounterScheduled||(s._tickCounterScheduled=!0,Promise.resolve().then((()=>{s._tickCounter++,s._tickCounterScheduled=!1})))}}s._loggers={},s._tickCounter=0,s._tickCounterScheduled=!1,s._throttlingDisabled=!1,t.a=s},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return i})),n.d(t,"k",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return a})),n.d(t,"s",(function(){return l}));function r(e){return null!=e}function i(e){return null==e}function o(e){return void 0===e}function c(e,t){return r(e)?t(e):null}function s(e){return e}function l(e,t){if(i(e))throw new Error(t);return e}function a(e,t){return r(e)?e:"function"==typeof t?t():t}function u(e){return r(e)&&e.destroy(),null}function d(e){return r(e)&&e.dispose(),null}function f(e){return r(e)&&e.remove(),null}function p(e){return r(e)&&e.abort(),null}function h(e){return null}function b(e,t){const n=new Array;for(const r of e)n.push(m(r,null,t));return n}function v(e,t){for(const n of e)m(n,null,t)}function m(e,t,n){return r(e)?n(e):t}function g(e,t){return r(e)?t(e):null}function j(e){return e.filter((e=>r(e)))}function y(e,...t){let n=e,r=0;for(;r<t.length&&n;)n=n[t[r++]];return n}function O(e){return e}},140:function(e,t,n){"use strict";var r=n(141),i=n(130),o=n(718);class c extends o.a{constructor(e,t,n){if(super(e,t,n),!(this instanceof c))return new c(e,t,n)}toJSON(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((e,t)=>{if(t&&"object"==typeof t&&"function"==typeof t.toJSON)return t;try{return Object(r.a)(t)}catch(c){return"[object]"}})))}}catch(e){throw i.a.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new c(e.name,e.message,e.details)}}c.prototype.type="error",t.a=c},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));n(129);var r=n(455);function i(e,t){let n;if(t)for(n in e)e.hasOwnProperty(n)&&(void 0===e[n]?delete e[n]:e[n]instanceof Object&&i(e[n],!0));else for(n in e)e.hasOwnProperty(n)&&void 0===e[n]&&delete e[n];return e}function o(e){if(!e||"object"!=typeof e||"function"==typeof e)return e;if(Object(r.h)(e)||Object(r.k)(e)||Object(r.l)(e)||Object(r.f)(e)||Object(r.i)(e)||Object(r.g)(e)||Object(r.j)(e)||Object(r.d)(e)||Object(r.e)(e))return Object(r.m)(e);if(e instanceof Date)return new Date(e.getTime());if(e instanceof ArrayBuffer)return e.slice(0,e.byteLength);if(e instanceof Map){const t=new Map;return e.forEach(((e,n)=>{t.set(n,o(e))})),t}if(e instanceof Set){const t=new Set;return e.forEach((e=>{t.add(o(e))})),t}let t;const n=e;if("function"==typeof n.clone)t=n.clone();else if("function"==typeof n.map&&"function"==typeof n.forEach)t=n.map(o);else if("function"==typeof n.notifyChange&&"function"==typeof n.watch)t=n.clone();else{t={};for(const n of Object.getOwnPropertyNames(e))t[n]=o(e[n])}return t}function c(e,t){return e===t||"number"==typeof e&&isNaN(e)&&"number"==typeof t&&isNaN(t)||"function"==typeof(e||{}).getTime&&"function"==typeof(t||{}).getTime&&e.getTime()===t.getTime()||!1}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return _})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return T})),n.d(t,"j",(function(){return w})),n.d(t,"k",(function(){return S})),n.d(t,"l",(function(){return y})),n.d(t,"m",(function(){return j})),n.d(t,"n",(function(){return p})),n.d(t,"o",(function(){return k})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return A})),n.d(t,"s",(function(){return x})),n.d(t,"t",(function(){return h})),n.d(t,"u",(function(){return d})),n.d(t,"v",(function(){return b})),n.d(t,"w",(function(){return E})),n.d(t,"x",(function(){return g}));var r=n(138),i=(n(130),n(140)),o=n(848),c=n(301);function s(e){return Promise.all(e)}function l(e){return new Promise(((t,n)=>{try{e(t,n)}catch(r){Promise.resolve().then((()=>n(r)))}}))}function a(e="Aborted"){return new i.a("AbortError",e)}function u(){return new AbortController}function d(e){if(p(e))throw a()}function f(e){return Object(r.k)(e)?"aborted"in e?e:e.signal:e}function p(e){const t=f(e);return Object(r.k)(t)&&t.aborted}function h(e){if(j(e))throw e}function b(e){if(!j(e))throw e}function v(e,t){const n=f(e);if(!Object(r.j)(n)){if(!n.aborted)return Object(c.d)(n,"abort",(()=>t()));t()}}function m(e,t){const n=f(e);if(!Object(r.j)(n))return d(n),Object(c.d)(n,"abort",(()=>t(a())))}function g(e,t){const n=f(t);return Object(r.j)(n)?e:new Promise(((n,i)=>{let o=v(t,(()=>i(a())));const c=()=>o=Object(r.p)(o);e.then(c,c),e.then(n,i)}))}function j(e){return e&&"AbortError"===e.name}function y(e){return e.catch((e=>{if(!j(e))throw e}))}function O(){let e=null;const t=new Promise(((t,n)=>{e={promise:void 0,resolve:t,reject:n}}));return e.promise=t,e}function w(e){if(!e)return;if("function"!=typeof e.forEach){const t=Object.keys(e);return w(t.map((t=>e[t]))).then((e=>{const n={};return t.forEach(((t,r)=>n[t]=e[r])),n}))}const t=e;return Promise.allSettled(t).then((e=>Array.from(t,((t,n)=>{const r=e[n];return"fulfilled"===r.status?{promise:t,value:r.value}:{promise:t,error:r.reason}}))))}function S(e){return w(e).then((e=>e.filter((e=>!!e.value)).map((e=>e.value))))}function A(e){return Promise.reject(e)}function x(e){return Promise.resolve(e)}function P(e,t,n){const r=u();return v(n,(()=>r.abort())),new Promise(((n,i)=>{let o=setTimeout((()=>{o=0,n(t)}),e);v(r,(()=>{o&&(clearTimeout(o),i(a()))}))}))}function k(e){return e&&"function"==typeof e.then}function E(e){return e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then?e:Promise.resolve(e)}function T(e,t=-1){let n,i,o,c,s=null;const l=(...d)=>{if(n){i=d,c&&c.reject(a()),c=O();const e=Object(r.d)(c.promise);if(s){const e=s;s=null,e.abort()}return e}if(o=c||O(),c=null,t>0){const r=u();n=E(e(...d,r.signal));const i=n;P(t).then((()=>{n===i&&(c?r.abort():s=r)}))}else n=1,n=E(e(...d));const f=()=>{const e=i;i=o=n=s=null,null!=e&&l(...e)},p=n,h=o;return p.then(f,f),p.then(h.resolve,h.reject),Object(r.d)(h.promise)};return l}function _(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r})),r=t=>{e(t)};return r.resolve=t=>e(t),r.reject=e=>t(e),r.timeout=(e,t)=>o.a.setTimeout((()=>r.reject(t)),e),r.promise=n,r}function C(e){let t=u();const n=e(t.signal);let r={promise:n,finished:!1,abort:()=>{t&&(t.abort(),t=null)}};const i=()=>{r&&(r.finished=!0,r=null),t=null};return n.then(i,i),r}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c}));var r=n(141);function i(e,t,n=!1){return l(e,t,n)}function o(e,t){if(null!=t)return t[e]||s(e.split("."),!1,t)}function c(e,t,n){const r=e.split("."),i=r.pop(),o=s(r,!0,n);o&&i&&(o[i]=t)}function s(e,t,n){let r=n;for(const i of e){if(null==r)return;if(!(i in r)){if(!t)return;r[i]={}}r=r[i]}return r}function l(e,t,n){return t?Object.keys(t).reduce((function(e,i){let o=e[i],c=t[i];return o===c?e:void 0===o?(e[i]=Object(r.a)(c),e):(Array.isArray(c)||Array.isArray(e)?(o=o?Array.isArray(o)?e[i]=o.concat():e[i]=[o]:e[i]=[],c&&(Array.isArray(c)||(c=[c]),n?c.forEach((e=>{-1===o.indexOf(e)&&o.push(e)})):e[i]=c.concat())):c&&"object"==typeof c?e[i]=l(o,c,n):e.hasOwnProperty(i)&&!t.hasOwnProperty(i)||(e[i]=c),e)}),e||{}):e}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return a}));var r=n(177);const i=/\{([^\}]+)\}/g;function o(e){return null==e?"":e}function c(e,t){return e.replace(i,"object"==typeof t?(e,n)=>o(Object(r.b)(n,t)):(e,n)=>o(t(n)))}function s(e,t){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(e=>t&&-1!==t.indexOf(e)?e:`\\${e}`))}function l(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function a(e){return(new DOMParser).parseFromString(e||"","text/html").body.innerText||""}},204:function(e,t,n){"use strict";var r=n(258),i=(n(129),n(177)),o=n(296);const c={apiKey:void 0,applicationUrl:r.a.location&&r.a.location.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryService:null,geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(r.a.esriConfig&&(Object(i.a)(c,r.a.esriConfig,!0),delete c.has),!c.assetsPath){const e="4.19.0";c.assetsPath=`https://cdn.jsdelivr.net/npm/@arcgis/core@${e}-next.${o.a}/assets`}c.baseUrl&&console.warn("[esri.config]","baseUrl has been replaced by assetsPath"),Object.defineProperty(c,"baseUrl",{set(){console.warn("[esri.config]","baseUrl has been replaced by assetsPath")}}),c.request.corsEnabledServers=[],c.request.corsEnabledServers.push=function(){return console.warn("[esri.config]","request.corsEnabledServers is not supported and will be removed in a future release. See http://esriurl.com/cors8664"),0},t.a=c},252:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},258:function(e,t,n){"use strict";(function(e){const n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:void 0;t.a=n}).call(this,n(252))},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r="20210407",i="8757c15eef8f55f2af038ec79fa53adf0db975ec"},301:function(e,t,n){"use strict";function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function i(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(t,n);if(Array.isArray(t)){const r=t.slice();for(const t of r)e.addEventListener(t,n);return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function o(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(t,n);const o=i(e,t,(t=>{o.remove(),n.call(e,t)}));return{remove(){o.remove()}}}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o}));const c={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function s({key:e}){return c[e]||e}},455:function(e,t,n){"use strict";function r(e,t){if(e.forEach)e.forEach(t);else for(let n=0;n<e.length;n++)t(e[n],n,e)}function i(e,t,n){if(e.slice)return e.slice(t,n);void 0===t?t=0:(t<0&&(t+=e.length),t=Math.min(e.length,Math.max(0,t))),void 0===n?n=e.length:(n<0&&(n+=e.length),n=Math.min(e.length,Math.max(0,n)));const r=Math.max(0,n-t),i=new(0,e.constructor)(r);for(let o=0;o<r;o++)i[o]=e[t+o];return i}function o(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}function c(e){return e instanceof Int8Array||e&&e.constructor&&"Int8Array"===e.constructor.name}function s(e){return e instanceof Uint8Array||e&&e.constructor&&"Uint8Array"===e.constructor.name}function l(e){return e instanceof Uint8ClampedArray||e&&e.constructor&&"Uint8ClampedArray"===e.constructor.name}function a(e){return e instanceof Int16Array||e&&e.constructor&&"Int16Array"===e.constructor.name}function u(e){return e instanceof Uint16Array||e&&e.constructor&&"Uint16Array"===e.constructor.name}function d(e){return e instanceof Int32Array||e&&e.constructor&&"Int32Array"===e.constructor.name}function f(e){return e instanceof Uint32Array||e&&e.constructor&&"Uint32Array"===e.constructor.name}function p(e){return e instanceof Float32Array||e&&e.constructor&&"Float32Array"===e.constructor.name}function h(e){return e instanceof Float64Array||e&&e.constructor&&"Float64Array"===e.constructor.name}function b(e){const t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return t}function v(e){return e?128+e.buffer.byteLength+64:0}n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return s})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return i})),n.d(t,"n",(function(){return b}))},718:function(e,t,n){"use strict";var r=n(177);class i{constructor(e,t,n){this.name=e,this.details=n,this.message=void 0,this instanceof i&&(this.message=t&&function(e,t){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,n){if(""===n)return"$";const i=Object(r.b)(n,t),o=null==i?"":i;if(void 0===o)throw new Error(`could not find key "${n}" in template`);return o.toString()}))}(t,n)||"")}toString(){return"["+this.name+"]: "+this.message}}t.a=i},848:function(e,t,n){"use strict";var r=n(258);var i,o=(i=r.a,{setTimeout:(e,t)=>{const n=i.setTimeout(e,t);return{remove:()=>i.clearTimeout(n)}}});t.a=o}}]);
//# sourceMappingURL=99.f37302f3.chunk.js.map