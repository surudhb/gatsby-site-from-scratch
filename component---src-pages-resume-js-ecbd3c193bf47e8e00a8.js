(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7Qib":function(e,a,t){"use strict";t.d(a,"a",(function(){return n.a})),t.d(a,"b",(function(){return l.b})),t.d(a,"c",(function(){return r}));var n=t("ElpU"),l=t("BYIe"),r={getImageMap:function(e,a,t,n){return void 0===t&&(t=!1),void 0===n&&(n=3),e.reduce((function(e,l){var r=l.node.relativePath.match(a)[0];if(t)if(e.hasOwnProperty(r))e[r].length<=n&&e[r].push(l.node.childImageSharp.fluid);else{var c=[];c.push(l.node.childImageSharp.fluid),e[r]=c}else e[r]=l.node.childImageSharp.fluid;return e}),{})},getInstitutionClass:function(e){return e.includes("Waterloo")?"waterloo-link":e.includes("Ottawa")?"ottawa-link":"nd-link"}}},F2CN:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return u}));var n=t("q1tI"),l=t.n(n),r=t("Kvkj"),c=t("7Qib"),s=t("IP2g"),m=t("7vrA"),i=t("3Z9Z"),o=t("JI6e");a.default=function(e){var a=e.data,t=a.site.siteMetadata.institutions||[],n=a.allMarkdownRemark.edges||[],u=a.allFile.edges||[],f=c.c.getImageMap(u,/\/[work].*\/|$/);return l.a.createElement(r.c,null,l.a.createElement(c.a,{title:"Resume"}),l.a.createElement(r.d,{title:"Resume"}," ",l.a.createElement("a",{href:"../../surudh_bhutani_resume.pdf",target:"_blank",download:!0},l.a.createElement(s.a,{style:{fontSize:"0.9em"},icon:["fas","file-download"],className:"resume-title-icon"}))),l.a.createElement(m.a,{className:"mt-5 pt-3",fluid:!0},l.a.createElement("br",null),l.a.createElement("h2",{className:"m-auto w-75 text-left"},"Technologies"),l.a.createElement("hr",{className:"w-75 my-0"}),l.a.createElement("br",null),l.a.createElement(s.a,{icon:["fab","java"],className:"resume-icons java"}),l.a.createElement(s.a,{icon:["fab","js-square"],className:"resume-icons js"}),l.a.createElement(s.a,{icon:["fab","html5"],className:"resume-icons html"}),l.a.createElement(s.a,{icon:["fab","css3"],className:"resume-icons css"}),l.a.createElement(s.a,{icon:["fab","swift"],className:"resume-icons swift"}),l.a.createElement("br",null),l.a.createElement(s.a,{icon:["fab","react"],className:"resume-icons reactjs"}),l.a.createElement(s.a,{icon:["fab","node"],className:"resume-icons nodejs"}),l.a.createElement(s.a,{icon:["fab","bootstrap"],className:"resume-icons bootstrap"}),l.a.createElement(s.a,{icon:["fab","sass"],className:"resume-icons github"}),l.a.createElement("br",null),l.a.createElement(s.a,{icon:["fab","github-alt"],className:"resume-icons"}),l.a.createElement(s.a,{icon:["fab","jira"],className:"resume-icons"}),l.a.createElement(s.a,{icon:["fab","docker"],className:"resume-icons"}),l.a.createElement("h2",{className:"m-auto w-75 text-left"},"Education"),l.a.createElement("hr",{className:"w-75 my-0"}),l.a.createElement("br",null),l.a.createElement(i.a,{className:"w-50 m-auto"},t.map((function(e){return l.a.createElement(o.a,{className:"col-xl-4 col-12"},l.a.createElement(r.b,{frontmatter:e}))}))),l.a.createElement("br",null),l.a.createElement("h2",{className:"m-auto w-75 text-left"},"Experience"),l.a.createElement("hr",{className:"w-75 my-0"}),l.a.createElement("br",null),n.map((function(e){var a=e.node;return l.a.createElement("div",{key:a.id},l.a.createElement(r.f,{frontmatter:a.frontmatter,image:f[a.fields.slug],html:a.html}),l.a.createElement("br",null))}))))};var u="1591573715"}}]);
//# sourceMappingURL=component---src-pages-resume-js-ecbd3c193bf47e8e00a8.js.map