(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),o=n.n(s),b=n(0),l=function(t){var e,n=t.selectedTabId,c=t.onTabSelected,i=t.tabs,a=i.find((function(t){return t.id===n}))||i[0];return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:i.map((function(t){return Object(b.jsx)("li",{"data-cy":"Tab",className:o()({"is-active":a.id===t.id}),children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){a.id!==t.id&&c(t)}(t)},children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:null===(e=i.find((function(t){return t.id===n})))||void 0===e?void 0:e.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t,e=Object(d.useState)(r[0]),n=Object(a.a)(e,2),c=n[0],i=n[1],s=(null===(t=r.find((function(t){return t.id===c.id})))||void 0===t?void 0:t.title)||"";return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(s)}),Object(b.jsx)(l,{tabs:r,selectedTabId:c.id,onTabSelected:i})]})};i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.12d83694.chunk.js.map