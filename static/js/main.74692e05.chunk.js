(this["webpackJsonpcapacitor-poc2"]=this["webpackJsonpcapacitor-poc2"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),i=t(16),a=t.n(i),r=(t(24),t(25),t(2)),s=t(8),l=t(1),d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title is-1",children:"This is the About Page"}),Object(l.jsx)("p",{children:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per"})]})},u=t.p+"static/media/logo.6ce24c58.svg",p=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title is-1",children:"Native Pages"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,"}),Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(l.jsx)(s.b,{to:"/about",children:"About"})]})]})},h=t(19).a.App,j=function(){console.log("Native: Into AppUrlListener");var e=Object(r.f)();return Object(o.useEffect)((function(){console.log("Native: Into useEffect"),h.addListener("appUrlOpen",(function(n){console.log("Native: Into appUrlOpen");var t=n.url.split(".io").pop();t&&(console.log("Native: Into appUrlOpen: pushing ".concat(t)),e.push(t))})),h.addListener("appStateChange",(function(e){console.log("Active: ".concat(e.isActive))}))}),[]),null};var f=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"container mt-2",style:{marginTop:40},children:[Object(l.jsx)(j,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",children:Object(l.jsx)(p,{})}),Object(l.jsx)(r.a,{path:"/about",children:Object(l.jsx)(d,{})})]})]})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),c(e),i(e),a(e)}))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):b(n,e)}))}}(),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.74692e05.chunk.js.map