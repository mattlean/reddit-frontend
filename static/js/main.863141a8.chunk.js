(this["webpackJsonpreddit-frontend"]=this["webpackJsonpreddit-frontend"]||[]).push([[0],{11:function(e,t){e.exports="data:image/gif;base64,R0lGODlhDwAOALMOAP+Ta/+Zc/+sjf+jgf+bdv+mhv+6of+tjv+KXv+zl/+/p/+Vbf+MYf+LYP///wAAACH5BAEAAA4ALAAAAAAPAA4AAARB0MnpGL2UAYvzagvXMUFjBmJWmmdafSwbTgxsIvFcL3zI7D1XAUAsdCYHgvJwlCQG0ETTYRBYDVNFYqvIKr5dSgQAOw=="},14:function(e,t,a){e.exports=a.p+"static/media/space-snoo.0f9fec70.png"},15:function(e,t,a){e.exports=a(28)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r,n=a(0),o=a.n(n),c=a(4),i=a.n(c),s=a(5),d=a(3),l=a(1),u={hidden:{opacity:0},visible:{opacity:1}},f=Object(s.a)({},u,{hover:{backgroundColor:"#c3dafe",scale:1.1},initial:{opacity:0,backgroundColor:"#c6f6d5"},visible:{opacity:1,backgroundColor:"#fff"}}),m=a(11),p=a.n(m),h=function(e){var t=e.data;return o.a.createElement(d.b.li,{animate:"visible",exit:"hidden",initial:"initial",variants:f,whileHover:"hover",className:"bg-white mb-4 py-2 px-4 rounded transition-colors"},o.a.createElement("a",{href:t.link,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("h1",{className:"font-bold text-lg"},t.title),o.a.createElement("div",{className:"flex flex-row justify-between"},o.a.createElement("p",{className:"mt-2 text-gray-700"},"r/".concat(t.subreddit)),o.a.createElement("p",{className:"flex flex-row items-center mt-2"},o.a.createElement("img",{src:p.a,alt:"upvote",className:"h-4 mr-1"}),o.a.createElement("span",{className:"font-bold text-orange-500"},t.score)))))},b=function(){var e=Object(l.c)((function(e){return e.topPosts.feed}));return e.length>0?o.a.createElement("ul",{className:"mt-16"},o.a.createElement(d.a,null,e.map((function(e){return o.a.createElement(h,{key:e.id,data:e})})))):o.a.createElement("p",{className:"italic mt-64 text-center text-gray-500"},"Don't let your memes just be dreams. Add a top post now.")},v=a(2),g=a(12),E=a(13),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERR":return t.message;default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FETCH":return t.state;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return"";case"UPDATE_SEARCH_FIELD":return t.input;default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{age:[],feed:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a=e.feed.slice(),r=e.age.slice();if(t.postToRemove){a.splice(t.postToRemove.id,1);var n=r.findIndex((function(e){return e===t.postToRemove.id}));n>-1&&r.splice(n,1)}if(e.age.length>9){var o=r.pop();a.splice(a.findIndex((function(e){return e.id===o})),1)}return a.push({id:t.data.data.id,score:t.data.data.score,subreddit:t.data.data.subreddit,title:t.data.data.title,link:"https://reddit.com".concat(t.data.data.permalink)}),a.sort((function(e,t){return t.score-e.score})),r.unshift(t.data.data.id),{age:r,feed:a};default:return e}},O=Object(v.combineReducers)({err:x,fetchState:w,searchField:A,topPosts:y}),j=localStorage.getItem("redux");j&&(r=JSON.parse(j));var T=Object(v.createStore)(O,r,Object(g.composeWithDevTools)(Object(v.applyMiddleware)(E.a))),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_ERR",message:e}},N=function(e){return{type:"SET_FETCH",state:e}},k=(n.useEffect,function(){var e=Object(l.c)((function(e){return e.err})),t=Object(l.c)((function(e){return e.fetchState})),a=Object(l.c)((function(e){return e.searchField})),r=Object(n.useRef)(null),c=Object(l.c)((function(e){return e.topPosts.age.length})),i=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}(t),s=Object(l.b)();Object(n.useEffect)((function(){r.current&&r.current.focus()}),[]),Object(n.useEffect)((function(){r.current&&i&&!t&&r.current.focus()}),[t]);var f,m;e&&(f=o.a.createElement(d.b.p,{animate:"visible",exit:"hidden",initial:"hidden",variants:u,className:"bg-red-100 border border-red-600 mt-4 py-2 px-4 rounded text-red-600"},e)),m=c<1?"Type a subreddit name here...":"Type another subreddit name here...";var p="border border-gray-300 flex-1 mr-2 py-2 px-4 rounded text-xl",h="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 rounded text-white text-xl transition-colors";return t&&(p+=" cursor-not-allowed",h+=" opacity-50 cursor-not-allowed"),o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"flex justify-evenly"},o.a.createElement("input",{ref:r,type:"text",disabled:t,placeholder:m,value:a,onChange:function(e){return s({type:"UPDATE_SEARCH_FIELD",input:e.target.value})},className:p}),o.a.createElement("button",{disabled:t,onClick:function(t){var r;t.preventDefault(),e&&s(S()),s(N(!0)),s((r=a,function(e){fetch("https://www.reddit.com/r/".concat(r,".json?jsonp=foo")).then((function(e){if(e.ok)return e.text();throw new Error("The API responded with an error in the response.")})).then((function(t){var a=/(^\/\*\*\/foo\()|(\)$)/g;if(!t.match(a))throw new Error("Invalid response format from reddit API or no subreddit was found.");var r,n=JSON.parse(t.replace(a,""));if(n.data.children<1)throw new Error("This subreddit has no posts.");for(var o=0;o<n.data.children.length;o+=1){var c=n.data.children[o];if(!c.data.stickied){r=c;break}}r||(r=n.data.children[0]);for(var i,s=!1,d=T.getState().topPosts.feed,l=0;l<d.length;l+=1){var u=d[l];if(u.subreddit===r.data.subreddit){u.id===r.data.id?s=!0:i={i:l,id:u.id};break}}e(s?S("The new top post already exists in the feed."):function(e,t){return{type:"ADD_POST",data:e,postToRemove:t}}(r,i)),e(N(!1))})).catch((function(t){e(S(t.message)),e(N(!1))}))}))},className:h},"Add Post")),o.a.createElement(d.a,null,f))}),D=a(14),P=a.n(D);var R=function(){return Object(n.useEffect)((function(){var e=T.subscribe((function(){var e=T.getState();localStorage.setItem("redux",JSON.stringify(Object(s.a)({},e,{err:"",fetchState:!1,searchField:""})))}));return function(){return e()}}),[]),o.a.createElement("main",{className:"mx-auto my-5"},o.a.createElement("h1",{className:"font-semibold mb-6 text-5xl text-center"},"Top subreddit Post Tracker"),o.a.createElement("img",{src:P.a,alt:"Space Snoo",className:"mx-auto mb-6"}),o.a.createElement("p",{className:"mb-8 text-center text-xl text-gray-700"},"Get the current top post from a\xa0subreddit.",o.a.createElement("br",null),"Keep track of up to 10 subreddits. No reddit account is\xa0necessary!"),o.a.createElement(k,null),o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26),a(27);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:T},o.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.863141a8.chunk.js.map