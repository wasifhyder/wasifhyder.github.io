(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(e,a,t){e.exports=t(410)},231:function(e,a,t){},358:function(e){e.exports={}},359:function(e,a,t){},410:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(86),i=t.n(o),c=(t(231),t(19)),l=t(88),m=t.n(l),d=t(417),s=t(418),f=t(419),u=t(194),p=t(416),g=(t(358),t(359),p.a.TabPane);function h(e){console.log(e)}window._=m.a,window.data={habit:{Meditation:{},Migraine:{},Awake:{},Reading:{},Gym:{},Dancing:{}}};var w=function(e){e.forItem;return r.a.createElement("div",{align:"left"},r.a.createElement(f.a,null,"Experimental Habit Tracker"),r.a.createElement("div",{className:"calendar-group"},m.a.keys(window.data.habit).map(function(e,a){return r.a.createElement(v,{inputRef:a,key:a,title:e})})))},v=function(e){var a=e.title,t=window.data.habit[a],o=Object(n.useState)({data:t}),i=Object(c.a)(o,2),l=i[0],m=i[1];return r.a.createElement("div",{className:"calendar"},r.a.createElement(u.a,{direction:"vertical",align:"left",yearLegend:function(){return a},data:y(l.data),from:"2019-01-01",to:"2019-12-31",emptyColor:"#eeeeee",colors:["#61cdbb","#97e3d5","#e8c1a0","#f47560"],margin:{top:40,right:40,bottom:40,left:40},yearSpacing:40,monthBorderColor:"#ffffff",dayBorderWidth:2,dayBorderColor:"#ffffff",onClick:function(e,a){return E(l,e.day,m)}}))},E=function(e,a,t){var n=e.data,r=(n[a]&&n[a].value||0)%5;n[a]={value:r+1},t({data:n})},y=function(e){return m.a.keys(e).map(function(a){return{day:a,value:e[a].value}})},b=function(){return r.a.createElement(d.a,{className:"App",full:!0},r.a.createElement("img",{className:"App-image",src:"art.png",alt:"something"}),r.a.createElement("span",{className:"transparent",style:{width:"750px",height:"750px",top:"-250px",right:"-220px"}}),r.a.createElement("div",{className:"App-header"},r.a.createElement(s.a,{className:"App-logo",margin:"none"},"Wasif Hyder"),r.a.createElement(f.a,{className:"App-subheading"},"Artist / Designer / Developer")),r.a.createElement("div",{className:"App-content"},r.a.createElement(p.a,{defaultActiveKey:"1",onChange:h},r.a.createElement(g,{tab:"Year",key:"1"},r.a.createElement(w,{forItem:"Migraine"})),r.a.createElement(g,{tab:"Month",key:"2"},"Content of Tab Pane 2"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[226,1,2]]]);
//# sourceMappingURL=main.34194fd7.chunk.js.map