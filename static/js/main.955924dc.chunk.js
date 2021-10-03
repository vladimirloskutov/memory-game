(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{22:function(e,t,a){"use strict";a.r(t);a(0);var s=a(5),n=a.n(s),c=a(8),r=a(2),u="GAME_INITIAL",i="GAME_STARTED",l="GAME_FINISHED",o="CARD_OPENED",m="CARD_CLOSED",d="CARD_DELETED",j=function(e){return{type:"CARD_CLOSED",payload:{comparisonIcons:e}}},b=a(1),v=Object(r.b)((function(e){return{gameStatus:e.game.gameStatus}}))((function(e){var t=e.dispatch,a=e.gameStatus;return Object(b.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){switch(a){case u:var e=setInterval((function(){t(function(e){return{type:i,payload:{gameTimerId:e}}}(e))}),1e3);break;case i:break;default:throw new Error("Unknown game status: ".concat(a))}},children:"START"})})),h=Object(r.b)((function(e){return{gameTimer:e.game.gameTimer}}))((function(e){var t=e.gameTimer;return Object(b.jsxs)("div",{className:"d-inline h2",children:["Time: ",t," s"]})})),f=function(){return Object(b.jsxs)("div",{className:"row col-12 mb-5",children:[Object(b.jsx)("div",{className:"col-12 mr-5",children:Object(b.jsx)(v,{})}),Object(b.jsx)("div",{className:"col-12 mt-5",children:Object(b.jsx)(h,{})})]})},g=a(12),O=Object(r.b)((function(e){var t=e.game,a=e.icons;return{gameStatus:t.gameStatus,gameTimerId:t.gameTimerId,shuffledIcons:a.shuffledIcons,remainingIcons:a.remainingIcons,comparisonIcons:a.comparisonIcons}}))((function(e){var t,a=e.dispatch,s=e.cardId,n=e.gameStatus,c=e.gameTimerId,r=e.shuffledIcons,u=e.remainingIcons,v=e.comparisonIcons,h=r[s],f=h.status,O=h.value;switch(f){case m:t=Object(b.jsx)("div",{className:"col-2 mb-4",children:Object(b.jsx)("div",{className:"card bg-warning",children:Object(b.jsx)("div",{id:s,className:"card-body",onClick:function(e){var t=e.target.id;if(n===i){v.length<2&&(v.push(t),a(function(e){return{type:o,payload:{cardId:e}}}(t)));var s=setTimeout((function(){1===v.length&&a(j(v))}),5e3);if(2===v.length){clearTimeout(s);var m=Object(g.a)(v,2),b=m[0],h=m[1],f=r[b].value,O=r[h].value;setTimeout((function(){if(f===O){var e=u-2;a(function(e,t){return{type:d,payload:{comparisonIcons:e,newRemainingIcons:t}}}(v,e)),0===e&&(clearInterval(c),a({type:l}))}else a(j(v))}),2e3)}}},children:Object(b.jsx)("span",{className:"invisible",children:O})})})});break;case o:t=Object(b.jsx)("div",{className:"col-2 mb-4",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsx)("div",{className:"card-body text-center font-weight-bold",children:O})})});break;case d:t=Object(b.jsx)("div",{className:"col-2"});break;default:throw new Error("Unknown card status: ".concat(f))}return t})),I=Object(r.b)((function(e){return{shuffledIcons:e.icons.shuffledIcons}}))((function(e){var t=e.shuffledIcons.map((function(e,t){return Object(b.jsx)(O,{cardId:t},t)}));return Object(b.jsx)("div",{className:"row mb-5",children:t})})),p=Object(r.b)((function(e){return{gameResults:e.game.gameResults}}))((function(e){var t=e.gameResults.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t+1}),Object(b.jsxs)("td",{children:[e,"s"]})]},t)}));return Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Round time"})]})}),Object(b.jsx)("tbody",{children:t})]})})),x=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row mt-5",children:[Object(b.jsxs)("div",{className:"col-3",children:[Object(b.jsx)(f,{}),Object(b.jsx)(p,{})]}),Object(b.jsx)("div",{className:"col-9",children:Object(b.jsx)(I,{})})]})})},T=a(7),N=a(3),y={gameStatus:"GAME_INITIAL",gameTimer:0,gameTimerId:null,gameResults:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(N.a)(Object(N.a)({},e),{},{gameStatus:i,gameTimer:e.gameTimer+1,gameTimerId:t.payload.gameTimerId});case l:var a=Object(T.a)(e.gameResults);return a.push(e.gameTimer),{gameStatus:u,gameTimer:0,gameTimerId:null,gameResults:a};default:return e}},E=[{value:"1",status:m},{value:"2",status:m},{value:"3",status:m},{value:"4",status:m},{value:"5",status:m},{value:"6",status:m},{value:"7",status:m},{value:"8",status:m},{value:"9",status:m},{value:"1",status:m},{value:"2",status:m},{value:"3",status:m},{value:"4",status:m},{value:"5",status:m},{value:"6",status:m},{value:"7",status:m},{value:"8",status:m},{value:"9",status:m},{value:"!",status:m},{value:"@",status:m},{value:"#",status:m},{value:"$",status:m},{value:"%",status:m},{value:"^",status:m},{value:"&",status:m},{value:"*",status:m},{value:"-",status:m},{value:"!",status:m},{value:"@",status:m},{value:"#",status:m},{value:"$",status:m},{value:"%",status:m},{value:"^",status:m},{value:"&",status:m},{value:"*",status:m},{value:"-",status:m}],S=function(){return JSON.parse(JSON.stringify(E)).sort((function(){return Math.random()-.5}))},R=S(),A={shuffledIcons:R,remainingIcons:R.length,comparisonIcons:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=Object(T.a)(e.shuffledIcons);switch(t.type){case o:var s=t.payload.cardId;return a[s].status=o,Object(N.a)(Object(N.a)({},e),{},{shuffledIcons:a});case m:var n=t.payload.comparisonIcons;return n.forEach((function(e){a[e].status=m})),Object(N.a)(Object(N.a)({},e),{},{shuffledIcons:a,comparisonIcons:[]});case d:var c=t.payload,r=c.comparisonIcons,u=c.newRemainingIcons;return r.forEach((function(e){a[e].status=d})),Object(N.a)(Object(N.a)({},e),{},{shuffledIcons:a,remainingIcons:u,comparisonIcons:[]});case l:var i=S();return{shuffledIcons:i,remainingIcons:i.length,comparisonIcons:[]};default:return e}},D=Object(c.a)({game:w,icons:k}),C=Object(c.b)(D);n.a.render(Object(b.jsx)(r.a,{store:C,children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.955924dc.chunk.js.map