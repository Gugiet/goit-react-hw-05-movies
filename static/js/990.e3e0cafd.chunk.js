"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[990],{7990:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(8683),a=n(5861),c=n(8152),u=n(7757),s=n.n(u),o="MoviesPage_searchbar__h5+Hv",i="MoviesPage_searchForm__MtlmP",p="MoviesPage_searchFormButton__wppho",f="MoviesPage_SearchFormInput__weghc",h=n(2791),l=n(1207),v=n(1523),m=n(8931),d=n(5562),g=n.n(d),w=n(184),x=function(){var e=(0,h.useState)(""),t=(0,c.Z)(e,2),n=t[0],u=t[1],d=(0,h.useState)([]),x=(0,c.Z)(d,2),y=x[0],_=x[1],b=(0,m.TH)(),k=(0,m.k6)();(0,h.useEffect)((function(){var e=new URLSearchParams(b.search).get("query");if(e){var t=function(){var t=(0,a.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.z1)(e);case 2:n=t.sent,r=n.results,_(r),u(e),console.log(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[b.search]);var Z=function(){var e=(0,a.Z)(s().mark((function e(t){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n.trim()){e.next=10;break}return e.next=4,(0,l.z1)(n);case 4:a=e.sent,c=a.results,_(c),u(""),0===c.length&&g().Notify.warning("No movies found! Please change your request and try again"),k.push((0,r.Z)((0,r.Z)({},b),{},{search:"query=".concat(n)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("header",{className:o,children:(0,w.jsxs)("form",{className:i,onSubmit:Z,children:[(0,w.jsx)("input",{onChange:function(e){return u(e.target.value)},className:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:n}),(0,w.jsx)("button",{type:"submit",className:p,children:"search"})]})}),y.length>0&&y.map((function(e){var t=e.id,n=e.title;return(0,w.jsx)("ul",{children:(0,w.jsx)("li",{children:(0,w.jsx)(v.rU,{to:{pathname:"/movies/".concat("".concat(t)),state:{from:{location:b}}},children:(0,w.jsx)("p",{children:n})})},t)})}))]})}},1207:function(e,t,n){n.d(t,{Jh:function(){return v},M1:function(){return l},TP:function(){return f},wr:function(){return h},yA:function(){return i},z1:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/3/";var o="bcec6b10e019f37dcd01cbcecbdb2a04",i="https://image.tmdb.org/t/p/w500",p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t),e.next=3,s().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"$?api_key=").concat(o,"&language=en-US"),e.next=3,s().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(o),e.next=3,s().get(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits$?api_key=").concat(o,"&language=en-US"),e.next=3,s().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews$?api_key=").concat(o,"&language=en-US"),e.next=3,s().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=990.e3e0cafd.chunk.js.map