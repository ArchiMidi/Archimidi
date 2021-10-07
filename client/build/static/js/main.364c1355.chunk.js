(this["webpackJsonpfile-upload-client"]=this["webpackJsonpfile-upload-client"]||[]).push([[0],{40:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(32),a=n.n(r),s=(n(40),n(6)),o=n(2),i=n(3),l=n(16),u=n(11),j=n.n(u),b=j.a.create({baseURL:"/api"}),h=function(e){throw e},d={service:b,deleteSong:function(e){return b.delete("/".concat(e)).then((function(e){return e.data})).catch(h)},handleUpload:function(e){return b.post("/upload",e).then((function(e){return e.data})).catch(h)},saveNewSong:function(e){return b.post("/songs/create",e).then((function(e){return e.data})).catch(h)},findAllSongs:function(){return b.get("/songs").then((function(e){return e.data})).catch(h)},getSong:function(e){return b.get("/songs/".concat(e)).then((function(e){return e.data})).catch(h)},signup:function(e,t){return b.post("/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},login:function(e,t){return b.post("/auth/login",{username:e,password:t}).then((function(e){return console.log("service.js login response:",e),e.data})).catch((function(e){return e.response.data}))},logout:function(){return b.delete("/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data}))}},O=n(0);var g=function(e){var t=Object(i.f)(),n=e.user._id,r=Object(c.useState)(""),a=Object(o.a)(r,2),s=a[0],u=a[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),h=b[0],g=b[1],f=Object(c.useState)(""),p=Object(o.a)(f,2),x=p[0],m=p[1],v=Object(c.useState)(n),y=Object(o.a)(v,2),S=y[0],w=(y[1],Object(c.useState)("")),C=Object(o.a)(w,2),U=C[0],E=C[1],N=Object(c.useState)([]),k=Object(o.a)(N,2),F=k[0],L=k[1],_=Object(c.useState)(null),D=Object(o.a)(_,2),A=D[0],B=D[1],T=Object(c.useState)(0),M=Object(o.a)(T,2),z=M[0],I=M[1],P=Object(c.useState)(null),H=Object(o.a)(P,2),J=H[0],R=H[1],Y=Object(O.jsx)("button",{type:"submit",children:"Save new song"}),q=Object(O.jsx)("p",{children:"Loading"}),G=Object(O.jsx)("p",{children:"upload your file"});return Object(c.useEffect)((function(){return null!==A&&L(Object(l.a)(F).filter((function(e){return e!==A}))),function(){B(null)}}),[F,A]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"New Song"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.saveNewSong({title:s,author:h,songUrl:x,createdBy:S,tags:F}).then((function(e){console.log("added new song: ",e),t.push("/songs/".concat(e._id))})).catch((function(e){return console.log("Error while adding the new song: ",e)}))},children:[Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{type:"text",name:"title",value:s,onChange:function(e){return u(e.target.value)}})]}),Object(O.jsx)("label",{children:"Author"}),Object(O.jsx)("textarea",{type:"text",name:"author",value:h,onChange:function(e){return g(e.target.value)}}),Object(O.jsx)("input",{type:"file",onChange:function(e){console.log("The file to be uploaded is: ",e.target.files[0]),I(1);var t=new FormData;t.append("songUrl",e.target.files[0]),d.handleUpload(t).then((function(e){m(e.secure_url),I(2)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}}),Object(O.jsx)("div",{children:z>1?Y:z>0?q:G})]}),F.length<5?Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),R(null),L((function(e){return[U].concat(Object(l.a)(e)).map((function(e){return e.toLowerCase()})).filter((function(e,t,n){return n.indexOf(e)===t||(R("".concat(e," is already a tag")),!1)}))})),E("")},children:[Object(O.jsxs)("label",{children:["Tags",Object(O.jsx)("input",{type:"text",name:"tag",value:U,onChange:function(e){return E(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",children:"Add Tag"})]}):Object(O.jsx)("p",{children:"max tags number reached"}),J&&Object(O.jsx)("p",{children:J}),F.map((function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:e}),Object(O.jsx)("form",{onSubmit:function(e){return B(e)},children:Object(O.jsx)("button",{type:"submit",children:"x"})})]})}))]})},f=n(17),p=(n(66),n(5));function x(e){var t=e.title,n=e._id,c=e.songUrl,r=e.author;return Object(O.jsxs)("div",{className:"songCard",children:[Object(O.jsx)(p.b,{className:"Link",to:"/songs/".concat(n),children:Object(O.jsx)("h3",{children:t})}),Object(O.jsx)("a",{href:c,download:"".concat(t,"_").concat(r,".mid"),children:"Download"})]})}var m=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(""),u=Object(o.a)(i,2),j=u[0],b=u[1],h=Object(c.useState)({title:!0,author:!0,tags:!1}),g=Object(o.a)(h,2),p=g[0],m=g[1];Object(c.useEffect)((function(){d.findAllSongs().then((function(e){a(e)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}),[]);var v=j.split(" ");function y(e,t){for(var n=0;n<=t.length;n++)if(t.substring(n,n+e.length).toLowerCase()===e.toLowerCase())return!0;return!1}var S=r.filter((function(e){var t,n=e.title.split(" "),c=e.author.split(" "),r=Object(l.a)(e.tags),a=Object(f.a)(v);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(!0===p.title){var o,i=Object(f.a)(n);try{for(i.s();!(o=i.n()).done;){if(y(s,o.value))return!0}}catch(d){i.e(d)}finally{i.f()}}if(!0===p.author){var u,j=Object(f.a)(c);try{for(j.s();!(u=j.n()).done;){if(y(s,u.value))return!0}}catch(d){j.e(d)}finally{j.f()}}if(!0===p.tags){var b,h=Object(f.a)(r);try{for(h.s();!(b=h.n()).done;){if(y(s,b.value))return!0}}catch(d){h.e(d)}finally{h.f()}}return!1}}catch(d){a.e(d)}finally{a.f()}}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"List of Songs"}),Object(O.jsxs)("div",{className:"filter",children:[Object(O.jsx)("label",{children:"Search: "}),Object(O.jsx)("input",{className:"searchBar",type:"search",name:"search",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Search by Title",Object(O.jsx)("input",{name:"title",type:"checkbox",checked:p.title,onChange:function(e){return m(Object(s.a)(Object(s.a)({},p),{},{title:e.target.checked}))}})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:["Search by Author",Object(O.jsx)("input",{name:"author",type:"checkbox",checked:p.author,onChange:function(e){return m(Object(s.a)(Object(s.a)({},p),{},{author:e.target.checked}))}})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:["Search through the tags",Object(O.jsx)("input",{name:"tags",type:"checkbox",checked:p.tags,onChange:function(e){return m(Object(s.a)(Object(s.a)({},p),{},{tags:e.target.checked}))}})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"songsListContainer",children:S.length>0?S.map((function(e){return Object(O.jsx)(x,Object(s.a)({className:"songCard"},e),e._id)})):Object(O.jsx)("p",{children:"No songs match your research"})})]})};function v(e){var t=Object(i.g)().pathname;return Object(O.jsx)("nav",{className:"navBar",children:e.user?Object(O.jsxs)(O.Fragment,{children:["/"!==t&&Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("p",{className:"navElements",children:"Home"})}),Object(O.jsx)(p.b,{to:"/",onClick:function(){d.logout().then((function(){e.setUser(null)}))},children:Object(O.jsx)("p",{className:"navElements",children:"Logout"})}),"/songs/add"!==t&&Object(O.jsx)(p.b,{to:"/songs/add",children:Object(O.jsx)("p",{className:"navElements",children:"Upload Song"})}),Object(O.jsx)(p.b,{to:"/mysongs",children:Object(O.jsx)("p",{className:"navElements",children:"My songs"})})]}):Object(O.jsxs)(O.Fragment,{children:["/"!==t&&Object(O.jsx)(p.b,{to:"/",children:Object(O.jsx)("p",{className:"navElements",children:"Home"})}),"/login"===t&&Object(O.jsx)("p",{children:"don't have an account?"}),"/signup"!==t&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(p.b,{to:"/signup",children:Object(O.jsx)("p",{className:"navElements",children:"Sign up"})})}),"/signup"!==t&&"/login"!==t&&Object(O.jsx)("p",{children:"or"}),"/signup"===t&&Object(O.jsx)("p",{children:"already  a user?"}),"/login"!==t&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(p.b,{to:"/login",children:Object(O.jsx)("p",{className:"navElements",children:"Log in"})})}),"/signup"!==t&&"/login"!==t&&Object(O.jsx)("p",{children:"to upload a song "})]})})}var y=n(22),S=n.n(y),w=n(35);function C(e){var t=Object(i.f)();console.log(t);var n=Object(c.useState)(null),r=Object(o.a)(n,2),a=r[0],s=r[1],l=Object(c.useState)({body:null}),u=Object(o.a)(l,2),j=u[0],b=u[1],h=e.user?e.user._id:"",g=e.match.params.id,f=function(){var e=Object(w.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.getSong(t);case 3:n=e.sent,console.log("song retrieved:",n),s(n),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f(g)}),[g]),Object(c.useEffect)((function(){var e=document.createElement("script");return e.src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.22.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(c.useEffect)((function(){a&&b({body:Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("section",{id:"player2",children:[Object(O.jsx)("midi-visualizer",{type:"piano-roll",src:a.songUrl}),Object(O.jsx)("midi-player",{src:a.songUrl,visualizer:"#player2 midi-visualizer"})]})})})}),[a]),Object(O.jsx)("div",{children:a&&Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:a.title}),Object(O.jsx)("h3",{children:a.author}),Object(O.jsx)("p",{children:a.songUrl}),Object(O.jsx)("a",{href:a.songUrl,download:"".concat(a.title,"_").concat(a.author,".mid"),children:"Download"}),h===a.createdBy&&Object(O.jsxs)("button",{onClick:function(){return function(e){try{var n=d.deleteSong(e).then;console.log("song deleted:",n),t.push("/")}catch(c){return console.log(c)}}(a._id)},children:["Delete ",a.title]}),h===a.createdBy&&Object(O.jsx)(p.b,{to:"/songs/edit/".concat(a._id),children:Object(O.jsxs)("button",{children:["Edit ",a.title]})}),null!==j.body?Object(O.jsx)("div",{children:j.body}):Object(O.jsx)("p",{children:"nothing to play"})]})})}function U(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),h=b[0],g=b[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Sign up"}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d.signup(r,l).then((function(t){console.log(t),t.message?(a(""),u(""),g(t.message),console.log(t.message)):(console.log(r),e.setUser(t),e.history.push("/"))})).catch((function(e){return console.log(e)}))},children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(O.jsx)("input",{type:"text",name:"username",value:r,onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(O.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){return u(e.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Sign Up \u270d\ufe0f"}),h&&Object(O.jsx)("h3",{children:h})]})]})}function E(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),h=b[0],g=b[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Log in"}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("handleSubmit login.js ",r,l),d.login(r,l).then((function(t){console.log("handlesubmit service.login response:",t),t.message?(g(t.message),a(""),u("")):(e.setUser(t),e.history.push("/"))}))},children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(O.jsx)("input",{type:"text",name:"username",value:r,onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(O.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){return u(e.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Log in\u270d\ufe0f"}),h&&Object(O.jsx)("h3",{children:h})]})]})}function N(e){console.log("My songs user is",e.user);var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){d.findAllSongs().then((function(e){a(e)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}),[]);var i=r.filter((function(t){return t.createdBy===e.user._id}));return Object(O.jsxs)("div",{className:"songsListContainer",children:[Object(O.jsx)("h3",{children:"My Songs"}),i.length>=1?Object(O.jsx)(O.Fragment,{children:i.map((function(e){return Object(O.jsx)(x,Object(s.a)({},e),e._id)}))}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h1",{children:"You haven't uploaded any songs yet"})})]})}function k(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],b=e.match.params.id;console.log(b);Object(c.useEffect)((function(){j.a.get("/api/songs/".concat(b)).then((function(e){console.log(e.data),a(e.data.title),u(e.data.author)})).catch((function(e){return console.log(e)}))}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Edit song"}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:r,author:l};j.a.put("/api/".concat(b),n).then((function(t){console.log(t),e.history.push("/songs/".concat(b))})).catch((function(e){return console.log(e)}))},children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(O.jsx)("input",{type:"text",name:"title",value:r,onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("label",{htmlFor:"author",children:"Author: "}),Object(O.jsx)("input",{type:"text",name:"author",value:l,onChange:function(e){return u(e.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Update this project"})]})]})}var F=function(e){var t=Object(c.useState)(e.user),n=Object(o.a)(t,2),r=n[0],a=n[1],l=Object(i.f)(),u=function(e){a(e)};return console.log("user in app.js",r),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{user:r,setUser:a,currentPage:e}),Object(O.jsx)("h1",{children:"ArchiMIDIs"}),Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(O.jsx)(i.a,{exact:!0,path:"/songs/add",render:r?function(e){return Object(O.jsx)(g,{user:r,setUser:a})}:l.push("/login")}),Object(O.jsx)(i.a,{exact:!0,path:"/songs/:id",render:r?function(e){return Object(O.jsx)(C,Object(s.a)({user:r},e))}:function(e){return Object(O.jsx)(C,Object(s.a)({user:null},e))}}),Object(O.jsx)(i.a,{exact:!0,path:"/signup",render:function(e){return Object(O.jsx)(U,Object(s.a)({setUser:u},e))}}),Object(O.jsx)(i.a,{exact:!0,path:"/login",render:function(e){return Object(O.jsx)(E,Object(s.a)({setUser:u},e))}}),Object(O.jsx)(i.a,{exact:!0,path:"/mysongs",render:function(e){return Object(O.jsx)(N,{user:r,setUser:a})}}),Object(O.jsx)(i.a,{exact:!0,path:"/songs/edit/:id",component:k})]})]})};j.a.get("/api/auth/loggedin").then((function(e){console.log("response in: ",e);var t=e.data;a.a.render(Object(O.jsx)(p.a,{children:Object(O.jsx)(F,{user:t})}),document.getElementById("root"))}))}},[[68,1,2]]]);
//# sourceMappingURL=main.364c1355.chunk.js.map