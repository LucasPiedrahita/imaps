/*! For license information please see 176.04d9a04f.chunk.js.LICENSE.txt */
(this.webpackJsonpimaps=this.webpackJsonpimaps||[]).push([[176],{1090:function(e,t,l){},1244:function(e,t,l){"use strict";l.r(t),l.d(t,"Shell",(function(){return E}));var c=l(1),i=l(7),n=l.n(i);l(1090);const a=e=>{var t,l;(null===(t=e.target)||void 0===t?void 0:t.parentElement).collapsed=null===(l=e.target)||void 0===l?void 0:l.dismissed},o=(e,t,l)=>{t.isActive?t.isActive=!1:(((e,t)=>{innerWidth<1e3?e.forEach((e=>{e.isActive=!1})):t?e.forEach((e=>{e.isActive=e.isActive&&!e.isTool})):e.forEach((e=>{e.isActive=e.isActive&&e.isTool}))})(l,t.isTool),t.isActive=!0);const c=e.target.closest("calcite-shell-panel");return t.isActive?null===c||void 0===c||c.removeAttribute("collapsed"):null===c||void 0===c||c.setAttribute("collapsed",""),l},r=(e,t,l,c)=>{document.querySelectorAll("calcite-action[active]").forEach((l=>{const c=e.find((e=>e.title===l.getAttribute("text")));var i,n,a;window.innerWidth>=1e3&&(null===c||void 0===c?void 0:c.isActive)&&t<1e3&&(c.isTool&&(null===(i=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===i||i.setAttribute("collapsed",""),c.isActive=!1));window.innerWidth<1e3&&(null===c||void 0===c?void 0:c.isActive)&&t>=1e3&&(c.isTool?(null===(n=document.querySelector("calcite-shell-panel[slot=primary-panel]"))||void 0===n||n.removeAttribute("collapsed"),c.isActive=!1):null===(a=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===a||a.removeAttribute("collapsed"));document.querySelectorAll("calcite-action-bar").forEach((e=>{e&&(e.expandDisabled=window.innerWidth<=500)}))})),l(window.innerWidth),c([...e])},s=e=>{const t=e.find((e=>e.isActive));t&&(t.isActive=!1);const l=e.find((e=>"Property Search"===e.title));l&&(l.isActive=!0);const c=document.getElementById(null===l||void 0===l?void 0:l.container);if(c){(null===c||void 0===c?void 0:c.closest(".action-panel")).hidden=!1;const e=null===c||void 0===c?void 0:c.closest("calcite-shell-panel");null===e||void 0===e||e.removeAttribute("collapsed")}return c};var d=l(4),u=l(2),v=l(8),h=l(0);const b=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(56)]).then(l.bind(null,1220)))),p=Object(c.lazy)((()=>l.e(173).then(l.bind(null,1113)))),m=Object(c.lazy)((()=>l.e(177).then(l.bind(null,1114)))),j=Object(c.lazy)((()=>l.e(101).then(l.bind(null,1245)))),x=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(59)]).then(l.bind(null,1246)))),y=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(65)]).then(l.bind(null,1223)))),O=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(61)]).then(l.bind(null,1216)))),f=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(15),l.e(76)]).then(l.bind(null,1115)))),w=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(54)]).then(l.bind(null,1247)))),S=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(10),l.e(15),l.e(91)]).then(l.bind(null,1221)))),g=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(3),l.e(4),l.e(55)]).then(l.bind(null,1224)))),A=Object(c.lazy)((()=>Promise.all([l.e(15),l.e(27),l.e(47),l.e(39),l.e(90)]).then(l.bind(null,1235)))),k=Object(c.lazy)((()=>Promise.all([l.e(1),l.e(2),l.e(4),l.e(15),l.e(94)]).then(l.bind(null,1230)))),E=()=>{const[e,t]=Object(c.useState)([]),[l,i]=Object(c.useState)();console.log("render shell");const[E,q]=Object(c.useState)(window.innerWidth),P=Object(c.useRef)(),[T,M]=Object(c.useState)(!1),[C,W]=Object(c.useState)([]),[$,z]=Object(c.useState)(),{theme:L,setTheme:_}=Object(c.useContext)(d.a),R=Object(c.useRef)(),N=Object(c.useRef)(),I=Object(c.useRef)(),B=Object(c.useRef)(),F=Object(c.useRef)(),[G,D]=Object(c.useState)(),{actions:K,setActions:U}=Object(c.useContext)(v.a),J=e=>{z({...$,attributes:null===e||void 0===e?void 0:e.attributes,geometry:null===e||void 0===e?void 0:e.geometry});const t=K.find((e=>"Property Select"===e.title));if(t&&P.current){const l=document.getElementById(null===t||void 0===t?void 0:t.container);l&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(w,{view:P.current,selectedFeature:e,geometrySet:Z,toolActivated:X})}),l)}const l=K.find((e=>"Print"===e.title));if(l){const t=document.getElementById(null===l||void 0===l?void 0:l.container);n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(k,{view:P.current,exportUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map",templateUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Get%20Layout%20Templates%20Info/execute",selectedFeature:e})}),t)}},V=e=>{W([...C,...e]),e.length>1&&z({...$,attributes:null});const t=s(K);n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(j,{propertiesSelected:V,featureSelected:J,selectedProperties:e})}),t),console.log("setActions"),U([...K])},H=e=>{var t,l,c;R.current=e,null===(t=N.current)||void 0===t||t.cancel(),null===(l=I.current)||void 0===l||null===(c=l.viewModel.activeViewModel)||void 0===c||c.clear(),B.current&&(B.current.viewModel.mode="live"),D("sketch")},Q=(e,t)=>{var l,c;I.current=e,B.current=t,null===(l=R.current)||void 0===l||l.cancel(),null===(c=N.current)||void 0===c||c.cancel(),D("measure")},X=e=>{var t,l,c;N.current=e,null===(t=R.current)||void 0===t||t.cancel(),null===(l=I.current)||void 0===l||null===(c=l.viewModel.activeViewModel)||void 0===c||c.clear(),B.current&&(B.current.viewModel.mode="live"),D("select")},Y=l=>{var c,n;let a;return a=l?K.find((e=>e.isActive&&e.isTool)):K.find((e=>e.isActive)),(null===(c=a)||void 0===c||null===(n=c.tips)||void 0===n?void 0:n.length)?Object(h.jsx)("calcite-action",{text:"Action",label:"Action",slot:"header-actions-end",icon:"lightbulb",appearance:"solid",scale:"m","calcite-hydrated":"",onClick:()=>{t([...e,...a.tips]),i(a.title)}}):""},Z=e=>{const t=s(K);n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(j,{geometry:e,propertiesSelected:V,selectedProperties:C,featureSelected:J,selectedFeature:$})}),t)},ee=e=>{if(e){var t,l,i;const a=document.getElementById(e.container);null===(t=document.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===t||null===(l=t.shadowRoot)||void 0===l||null===(i=l.querySelector(".content"))||void 0===i||i.setAttribute("style","max-width: 350px; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;"),F.current&&(F.current.icon="left-edge"),(null===a||void 0===a?void 0:a.hasChildNodes())||("Property Search"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(j,{view:P.current,propertiesSelected:V,featureSelected:J,selectedProperties:C})}),a),"Location Search"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(x,{view:P.current})}),a),"Layers"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(y,{view:P.current})}),a),"Basemaps"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(O,{view:P.current,default:u.c.default.id,imagery:u.c.imagery.id})}),a),"Legend"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(f,{view:P.current})}),a),"Property Select"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(w,{view:P.current,geometrySet:Z,selectedFeature:$,toolActivated:X,activeTool:G})}),a),"Measure"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(S,{view:P.current,measurementActivated:Q,activeTool:G})}),a),"Sketch"===e.title&&n.a.render(Object(h.jsxs)(c.Suspense,{fallback:"",children:[Object(h.jsx)(g,{view:P.current,toolActivated:H,activeTool:G})," "]}),a),"Bookmarks"===e.title&&n.a.render(Object(h.jsxs)(c.Suspense,{fallback:"",children:[Object(h.jsx)(A,{view:P.current})," "]}),a),"Print"===e.title&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(k,{view:P.current,exportUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map",templateUrl:"https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Get%20Layout%20Templates%20Info/execute"})}),a))}};return Object(c.useEffect)((()=>{document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.addEventListener("calcitePanelDismissedChange",a)}));let e;return((e,t)=>{e?("dark"===e&&t("dark"),"light"===e&&t("light")):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(e="dark",t("dark")):(e="light",t("light")),document.body.classList.remove("light"===e?"dark":"light"),document.body.classList.add("light"===e?"light":"dark");const l=Array.from(document.head.querySelectorAll("link")).find((t=>t.href.includes(`${e}/main.css`)));var c;l&&document.head.appendChild(l),void 0!=window.matchMedia&&void 0!=window.matchMedia("(prefers-color-scheme: dark)").addEventListener&&(null===(c=window.matchMedia("(prefers-color-scheme: dark)"))||void 0===c||c.addEventListener("change",(e=>{const l=e.matches?"dark":"light";t(l),window.localStorage.setItem("imaps_theme",l),document.body.classList.remove("light"===l?"dark":"light"),document.body.classList.add("light"===l?"light":"dark");const c=Array.from(document.head.querySelectorAll("link")).find((e=>e.href.includes(`${l}/main.css`)));c&&document.head.appendChild(c)})))})(window.localStorage.getItem("imaps_theme"),_),window.addEventListener("resize",(()=>{clearTimeout(e),e=setTimeout((()=>{r(K,E,q,U)}),250),document.querySelectorAll("calcite-shell-panel").forEach((e=>{var t,l;let c="350px";F.current&&(F.current.icon="left-edge");const i=e.querySelector("calcite-action-bar");window.innerWidth<=500&&(c=`calc(90vw - ${null===i||void 0===i?void 0:i.clientWidth}px)`),null===e||void 0===e||null===(t=e.shadowRoot)||void 0===t||null===(l=t.querySelector(".content"))||void 0===l||l.setAttribute("style",`max-width: ${c}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`)}))})),document.querySelectorAll("calcite-shell-panel").forEach((e=>{const t=new MutationObserver((l=>{if(l.length){var c,i;let l="350px";window.innerWidth<=500&&(l="calc(90vw - 50px)"),null===e||void 0===e||null===(c=e.shadowRoot)||void 0===c||null===(i=c.querySelector(".content"))||void 0===i||i.setAttribute("style",`max-width: ${l}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`),document.querySelectorAll("calcite-action-bar").forEach((e=>{e&&(e.expandDisabled=window.innerWidth<=500)})),t.disconnect()}else t.disconnect()}));t.observe(null===e||void 0===e?void 0:e.shadowRoot,{childList:!0})})),()=>{window.removeEventListener("resize",(()=>{r(K,E,q,U)})),document.querySelectorAll("calcite-panel").forEach((e=>{null===e||void 0===e||e.removeEventListener("calcitePanelDismissedChange",a)}))}}),[K]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("calcite-shell",{theme:L,className:"shell",children:[E>=1e3?Object(h.jsxs)("calcite-shell-panel",{slot:"primary-panel",position:"start","width-scale":"l",collapsed:!0,children:[Object(h.jsx)("calcite-action-bar",{slot:"action-bar",expanded:!1,children:K.map((e=>{if(e.isTool)return Object(h.jsxs)("div",{children:[Object(h.jsx)("calcite-tooltip",{placement:"trailing",label:e.title,"reference-element":`${e.container}_action`,children:e.title}),Object(h.jsx)("calcite-tooltip-manager",{children:Object(h.jsx)("calcite-action",{text:e.title,name:e.container,icon:e.icon,id:`${e.container}_action`,disabled:T?null:"",onClick:async t=>{console.log("setActions"),U([...o(t,e,K)]),requestAnimationFrame((()=>{ee(e)}))},active:!0===e.isActive?"":null})})]},`${e.container}_action_primary`)}))}),K.map((e=>{if(e.isTool&&e.isActive)return console.log(e),Object(h.jsxs)("div",{className:"panel-header",children:[Object(h.jsx)("div",{className:"panel-title",children:e.title}),Object(h.jsxs)("div",{className:"header-actions",children:[Y(!0),Object(h.jsx)("calcite-action",{"aria-label":"Close",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"x",onClick:()=>{var t,l;null===(t=document)||void 0===t||null===(l=t.querySelector("calcite-shell-panel[slot=primary-panel]"))||void 0===l||l.setAttribute("collapsed",""),e.isActive=!1,console.log("setActions"),U([...K])}})]})]},`${e.icon}_header_primary`)})),K.map((e=>{if(e.isTool)return Object(h.jsx)("div",{id:e.container,className:"action-panel",hidden:!e.isActive},`${e.container}_primary`)}))]}):"",Object(h.jsxs)("calcite-shell-panel",{slot:"contextual-panel",position:"end","width-scale":"l",children:[Object(h.jsx)("calcite-action-bar",{slot:"action-bar",expanded:!1,children:K.map((e=>{if(!e.isTool||E<1e3)return Object(h.jsxs)("div",{children:[Object(h.jsx)("calcite-tooltip",{placement:"leading",label:e.title,"reference-element":`${e.container}_action`,children:e.title}),Object(h.jsx)("calcite-tooltip-manager",{children:Object(h.jsx)("calcite-action",{text:e.title,name:e.container,icon:e.icon,id:`${e.container}_action`,disabled:T?null:"",onClick:async t=>{console.log("setActions"),U([...o(t,e,K)]),requestAnimationFrame((()=>{ee(e)}))},active:!0===e.isActive?"":null})})]},`${e.container}_action_contextual`)}))}),K.map((e=>{if((!e.isTool||E<1e3)&&e.isActive)return Object(h.jsxs)("div",{className:"panel-header",children:[Object(h.jsx)("div",{className:"panel-title",children:e.title}),Object(h.jsxs)("div",{className:"header-actions",children:["Property Search"===e.title&&E>500&&Object(h.jsx)("calcite-action",{ref:F,"aria-label":"Maximize",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"left-edge",onClick:e=>{(e=>{var t,l;let c=0;const i=document.querySelector("calcite-shell-panel[slot=primary-panel]");(null===i||void 0===i?void 0:i.collapsed)||(c+=i.clientWidth);const n=i.querySelector("calcite-action-bar");n&&(c+=null===n||void 0===n?void 0:n.clientWidth);const a=document.querySelector("calcite-shell-panel[slot=contextual-panel]").querySelector("calcite-action-bar");a&&(c+=null===a||void 0===a?void 0:a.clientWidth);let o=`calc(90vw - ${c}px)`;"right-edge"===e.icon?(e.icon="left-edge",o="350px"):e.icon="right-edge";const r=e.closest("calcite-shell-panel");null===r||void 0===r||null===(t=r.shadowRoot)||void 0===t||null===(l=t.querySelector(".content"))||void 0===l||l.setAttribute("style",`max-width: ${o}; width: calc(var(--calcite-panel-width-multiplier) * 100vw) !important;`);const s=null===r||void 0===r?void 0:r.querySelector("calcite-tab-nav");null===r||void 0===r||r.querySelectorAll("calcite-tab").forEach((e=>{null===e||void 0===e||e.setAttribute("style",`max-width: ${o}`)})),null===s||void 0===s||s.setAttribute("style",`max-width: ${o}`);const d=document.querySelector("calcite-tab-title[active]"),u=document.querySelector("calcite-tab-title:not([active])");d&&setTimeout((()=>{const e=new KeyboardEvent("keydown",{altKey:!1,bubbles:!0,cancelable:!0,charCode:0,code:"Enter",composed:!0,ctrlKey:!1,detail:0,isComposing:!1,key:"Enter",keyCode:13,location:0,metaKey:!1,repeat:!1,shiftKey:!1});null===u||void 0===u||u.dispatchEvent(e),null===d||void 0===d||d.dispatchEvent(e)}),250)})(e.target)}}),Y(!1),Object(h.jsx)("calcite-action",{"aria-label":"Close",appearance:"solid",scale:"m","calcite-hydrated":"",icon:"x",onClick:()=>{var t,l;null===(t=document)||void 0===t||null===(l=t.querySelector("calcite-shell-panel[slot=contextual-panel]"))||void 0===l||l.setAttribute("collapsed",""),e.isActive=!1,console.log("setActions"),U([...K])}})]})]},`${e.icon}_header_contextual`)})),K.map((e=>{if(!e.isTool||E<1e3)return Object(h.jsx)("div",{className:"action-panel",id:e.container,hidden:!e.isActive},`${e.container}_contextual`)}))]}),Object(h.jsx)("div",{slot:"shell-header",children:Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(p,{links:u.d})})}),Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(b,{id:"95092428774c4b1fb6a3b6f5fed9fbc4",initialized:async e=>{if(!T){P.current=e,M(!0);const t=document.getElementById("propertySearch");e.map&&n.a.render(Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(j,{view:e,propertiesSelected:V,featureSelected:J,selectedProperties:C,toolActivated:X})}),t)}},geometryChanged:Z,selectedProperties:C,selectedFeature:$})})]}),Object(h.jsx)(c.Suspense,{fallback:"",children:Object(h.jsx)(m,{tips:e,title:l,closed:!0,tipsDismissed:()=>{t([]),i("")}})})]})};t.default=E}}]);
//# sourceMappingURL=176.04d9a04f.chunk.js.map