(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var a=c(3),s=c.n(a),n=c(1),i=(c(8),c(9),c(10),c(0));const b=t=>{let{tabs:e,selectedTab:c,clickedTab:a}=t;return Object(i.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(i.jsx)("div",{className:"tabs is-boxed",children:Object(i.jsx)("ul",{children:e.map((t=>Object(i.jsx)("li",{className:c===t?"is-active":"","data-cy":"Tab",children:Object(i.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:()=>{var e;(e=t)!==c&&a(e)},children:t.title})},t.id)))})}),Object(i.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=()=>{const[t,e]=Object(n.useState)(d[0]);return Object(i.jsxs)("div",{className:"section",children:[Object(i.jsx)("h1",{className:"title",children:"Selected tab is ".concat(t.title)}),Object(i.jsx)(b,{"data-cy":"tab-content",tabs:d,selectedTab:t,clickedTab:c=>{c!==t&&e(c)}})]})};s.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.0f44c829.chunk.js.map