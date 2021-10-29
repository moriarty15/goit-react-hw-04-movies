(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{13:function(e,t,n){e.exports={link:"Navigation_link__2yV6x",activeLink:"Navigation_activeLink__2dbfU"}},14:function(e,t,n){e.exports={title:"MovieDetailsPage_title__1iO4x",overview:"MovieDetailsPage_overview__wS3o7",images:"MovieDetailsPage_images__15f59"}},18:function(e,t,n){e.exports={images:"Cast_images__NYXL9",contain:"Cast_contain__1gB_a"}},34:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),i=n(7),o=n(8),l=n.n(o),j=n(10),u=n(9),b=n(2),h=n(0);function p(e){var t=e.films;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.original_title,c=e.name;return Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/movies/".concat(t),children:null!==n&&void 0!==n?n:c})},t)}))})})}function d(e){var t=e.onSubmit,n=e.found,a=Object(c.useState)(""),r=Object(u.a)(a,2),s=r[0],o=r[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.trim()&&(t(s),o(""))},children:[Object(h.jsx)("button",{type:"submit",children:"Search"}),Object(h.jsx)("input",{onChange:function(e){e.preventDefault();var t=e.target.value.trim();""!==t&&o(t)}})]}),n.length>0&&Object(h.jsx)("ul",{children:n.map((function(e){var t=e.original_title,n=e.name,c=e.id;return Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/movies/".concat(c),children:null!==t&&void 0!==t?t:n})},c)}))})]})}var f=n(13),v=n.n(f);function x(){return Object(h.jsxs)("nav",{children:[Object(h.jsx)(i.c,{exact:!0,to:"/",className:v.a.link,activeClassName:v.a.activeLink,children:"Home"}),Object(h.jsx)(i.c,{to:"/movies",className:v.a.link,activeClassName:v.a.activeLink,children:"Movies"})]})}function O(){return Object(h.jsx)("h1",{children:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}var m=n(14),g=n.n(m),w=n(18),_=n.n(w);function k(e){var t=e.cast;return Object(h.jsx)(h.Fragment,{children:0!==t.length&&Object(h.jsx)("ul",{children:t.map((function(e){var t=e.profile_path,n=e.id,c=e.name,a=e.character;return Object(h.jsxs)("div",{className:_.a.contain,children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{className:_.a.images,src:t?"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(t):"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",alt:"img"}),Object(h.jsxs)("span",{children:["Name: ",c]}),Object(h.jsxs)("p",{children:["Character: ",a]})]})," "]},n)}))})})}function y(e){var t=e.reviews;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{children:t.map((function(e){var t=e.author,n=e.content;return Object(h.jsxs)("li",{children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("p",{children:n})]},t)}))})})}function S(){var e=Object(b.g)().url,t=Object(b.f)().movieId,n=Object(c.useState)(null),a=Object(u.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)([]),p=Object(u.a)(o,2),d=p[0],f=p[1],v=Object(c.useState)([]),x=Object(u.a)(v,2),O=x[0],m=x[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\nhttps://api.themoviedb.org/3/movie/".concat(t,"?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:if("Released"===(c=e.sent).status){e.next=10;break}return alert("error 404"),e.abrupt("return");case 10:s(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("whoops");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var w=function(){var e=Object(j.a)(l.a.mark((function e(){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,c.cast;case 9:a=e.sent,f(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(l.a.mark((function e(){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US&page=1"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,c.results;case 9:a=e.sent,m(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u0432\u0441\u0451 \u043f\u0440\u043e\u043f\u0430\u043b\u043e");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:r&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{className:g.a.title,children:[r.original_title," (",Object(h.jsx)("span",{children:r.release_date.slice(0,4)}),")"]}),Object(h.jsx)("img",{className:g.a.images,src:r.poster_path?"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(r.poster_path):"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",alt:r.original_title}),Object(h.jsxs)("p",{children:["rate: ",Object(h.jsx)("span",{children:r.vote_average})]}),Object(h.jsx)("p",{className:g.a.overview,children:"Overview "}),Object(h.jsx)("p",{children:r.overview}),Object(h.jsx)("p",{className:g.a.overview,children:"Genres "}),Object(h.jsx)("ul",{children:r.genres.map((function(e){var t=e.name;return Object(h.jsx)("li",{children:Object(h.jsx)("span",{children:t})},t)}))}),Object(h.jsx)("p",{children:"Additional information"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"".concat(e,"/cast"),onClick:function(){w()},children:"Cast"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"".concat(e,"/reviews"),onClick:function(){_()},children:"Reviews"})})]}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"".concat(e,"/cast"),children:0!==d.length?Object(h.jsx)(k,{cast:d}):Object(h.jsx)("p",{children:"Sorry, sorry, nothing was found"})}),Object(h.jsx)(b.a,{path:"".concat(e,"/reviews"),children:0!==O.length?Object(h.jsx)(y,{reviews:O}):Object(h.jsx)("p",{children:"We don't have any reviews for this movie"})})]})]})})}function N(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1],f=Object(c.useState)([]),v=Object(u.a)(f,2),m=v[0],g=v[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=f67f4d14d6b529f941fa4f285225b954");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,n.results;case 9:c=e.sent,o(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("whoops");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=f67f4d14d6b529f941fa4f285225b954&language=en-US&page=1&include_adult=false&query=".concat(n));case 5:return t=e.sent,e.next=8,t.json();case 8:return c=e.sent,e.next=11,c.results;case 11:a=e.sent,g(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log("whoops");case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,children:Object(h.jsx)(p,{films:i})}),Object(h.jsx)(b.a,{path:"/movies",exact:!0,children:Object(h.jsx)(d,{onSubmit:function(e){a(e)},found:m})}),Object(h.jsx)(b.a,{path:"/movies/:movieId",children:Object(h.jsx)(S,{})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(O,{})})]})]})}s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(N,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b777c9c2.chunk.js.map