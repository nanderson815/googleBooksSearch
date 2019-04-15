(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(64)},35:function(e,t,a){},36:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(22),r=a.n(c),l=(a(35),a(23)),i=a(24),s=a(28),u=a(25),m=a(29),d=a(8),v=a(6),f=function(e){return o.a.createElement("div",{className:"col s12"},o.a.createElement("div",{className:"card horizontal"},o.a.createElement("div",{className:"card-image"},o.a.createElement("img",{src:e.img,alt:e.title})),o.a.createElement("div",{className:"card-stacked"},o.a.createElement("div",{className:"card-content"},o.a.createElement("span",{className:"card-title"},e.title),o.a.createElement("h6",null,e.author),o.a.createElement("p",null,e.desc)),o.a.createElement("div",{className:"card-action"},o.a.createElement("a",{href:e.link},"More Info"),o.a.createElement("button",{className:"btn","data-index":e.id,onClick:function(){return e.action(e.id)}},e.txt)))))},h=function(e){return console.log(e.data),o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("span",{className:"card-title"},"Book Search"),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"input-field col s12"},o.a.createElement("input",{id:"book",type:"text",className:"validate",onChange:e.change,value:e.val}),o.a.createElement("label",{htmlFor:"book"},"Book"))),o.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:e.click},"Submit")))))),o.a.createElement("div",{className:"row"},e.data.map(function(t,a){return o.a.createElement(f,{title:t.volumeInfo.title,key:a,id:a,desc:t.volumeInfo.description,link:t.volumeInfo.infoLink,img:t.volumeInfo.imageLinks.thumbnail,action:e.save,txt:"Save Book",author:t.volumeInfo.authors?t.volumeInfo.authors.join(", "):""})})))},E=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},e.data.map(function(t,a){return o.a.createElement(f,{title:t.title,key:a,id:t._id,desc:t.description,link:t.link,img:t.image,action:e.delete,txt:"Delete",author:t.authors?t.authors.join(", "):""})})))},g=(a(36),a(7)),k=a.n(g),p={search:function(e){var t=e.replace(/ /g,"+");return k.a.get("https://www.googleapis.com/books/v1/volumes?q="+t)}},w=function(e){return o.a.createElement("nav",null,o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("div",{className:"container"},o.a.createElement(d.b,{to:"/",className:"brand-logo"},"Google Books"),o.a.createElement("ul",{id:"nav-mobile",className:"right"},o.a.createElement("li",{className:"hide-on-med-and-down"},o.a.createElement(d.b,{to:"/search"},"Search")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/saved"},"Saved"))))))},b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={result:[],search:"",savedBooks:[]},a.searchBooks=function(e){p.search(e).then(function(e){return a.setState({result:e.data.items})}).catch(function(e){return console.log(e)})},a.getBooks=function(){k.a.get("/api/book").then(function(e){return a.setState({savedBooks:e.data})})},a.deleteBook=function(e){k.a.delete("/api/book/".concat(e)).then(function(){a.getBooks()})},a.saveBooks=function(e){var t=a.state.result[e],n={title:t.volumeInfo.title,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.infoLink};k.a.post("/api/book",n).then(function(e){return console.log(e.data)}).then(function(){alert("Book Saved!"),a.getBooks()})},a.handleInputChange=function(e){var t=e.target.value;a.setState({search:t})},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBooks(a.state.search),a.setState({search:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(w,null),o.a.createElement("div",{className:"container"},o.a.createElement(v.a,{exact:!0,path:"/(|search)",render:function(){return o.a.createElement(h,{click:e.handleFormSubmit,change:e.handleInputChange,val:e.state.search,data:e.state.result,save:e.saveBooks})}}),o.a.createElement(v.a,{exact:!0,path:"/saved",render:function(){return o.a.createElement(E,{data:e.state.savedBooks,delete:e.deleteBook})}})))))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");N?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):B(e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.b9104f75.chunk.js.map