(this.webpackJsonpreact_hsj=this.webpackJsonpreact_hsj||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},101:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),i=(n(99),n(100),n(101),n(10)),c=n(70),m=n(13),u=n(22),s=n(33);n(2);var h=n(37),b=n.n(h),p=(n(74),n(129),n(179));n(193),n(185),n(198),n(195),Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},item:{marginTop:5},container:{display:"flex",flexWrap:"wrap",marginTop:15},textField:{width:230}}}));var E=Object(s.g)((function(e){var t=e.logout,n=e.history;return r.a.createElement("div",{style:{float:"right",marginRight:5,fontSize:15}},r.a.createElement(u.b,{onClick:function(){t(),n.push("/")}},"Logout"))})),g=n(48),d=n(76),f=n(77),v=n(25),y=n(29),w=n(84),k=(n(130),n(78)),j=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.problem.problem_info))},x=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.problem.problem_answer))},C={color:"white",background:"black",padding:".375rem .75rem",border:"1px solid white",borderRadius:".25rem",fontSize:"1rem",lineHeight:1.5,textAlign:"center",marginTop:25},O=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={number:0},n.state={problems:[],showPopup:!1,random:0},n.onChangeClick=n.onChangeClick.bind(Object(v.a)(n)),n}return Object(w.a)(t,e),Object(y.a)(t,[{key:"searchList",value:function(e,t){console.log(e[t-1].problem);var n=e[t-1].num,a=e[t-1].problem,r=e[t-1].answer;this.setState({result_problem:a,result_answer:r,result_index:n})}}]),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://hyunsojung-dev.github.io/react_hsj/view/").then((function(t){e.setState({problems:t.data})})).catch((function(e){console.log(e)}))}},{key:"onView_ProblemInfo",value:function(){return this.state.problems.map((function(e,t){return r.a.createElement(j,{problem:e,key:t})}))}},{key:"onView_ProblemAnswer",value:function(){return this.state.problems.map((function(e,t){return r.a.createElement(x,{problem:e,key:t})}))}},{key:"onChangeClick",value:function(){var e=Math.floor(117*Math.random())+1;console.log(e),this.setState({random:e})}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:30}},r.a.createElement("div",{style:{textAlign:"center",width:"70%",margin:"auto"}},this.onView_ProblemInfo()[this.state.random],r.a.createElement("div",{className:"button-style"},r.a.createElement("button",{style:C,onClick:this.onChangeClick.bind(this)},"NEXT"),r.a.createElement(k.a,{modal:!0,trigger:r.a.createElement("button",{style:C},"ANSWER")},r.a.createElement("div",{style:{marginTop:15,textAlign:"center",fontSize:"1rem"}},"ANSWER"),r.a.createElement("div",{style:{margin:30,textAlign:"center",fontSize:"1rem"}},this.onView_ProblemAnswer()[this.state.random]," ")))))}}]),t}(a.Component),S=(n(3),n(197)),_=n(194),A=n(191),N=n(192),B=n(43),R=n(187),T=n(183),P=n(186),W=n(83),z=n.n(W),L=n(188),V=n(189),D=n(190),I=n(80),M=n.n(I),F=n(81),G=n.n(F),J=n(82),H=n.n(J),K=n(79),X=n.n(K).a[900];function Y(){return r.a.createElement(B.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(P.a,{color:"inherit",href:"https://hyunsojung-dev.github.io/react-certificate/"},"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac")," ",(new Date).getFullYear(),".")}var $=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"},AppBar:{background:X},Box:{marginBottom:10}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e,t=$(),n=r.a.useState(!0),l=Object(m.a)(n,2),o=(l[0],l[1],Object(a.useState)(null)),h=Object(m.a)(o,2),b=h[0],p=h[1],g=null!=b,d=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),f=Object(m.a)(d,2),v=f[0],y=f[1],w=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&y(Object(c.a)({},v,Object(i.a)({},e,t)))}};return r.a.createElement(u.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(A.a,{position:"static",className:t.AppBar},r.a.createElement(N.a,null,r.a.createElement(T.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:w("left",!0)},r.a.createElement(z.a,null)),r.a.createElement(B.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"React Certificate"),r.a.createElement("div",{style:{float:"right",marginRight:5}},g?r.a.createElement(E,{logout:function(){return p(null)}}):r.a.createElement(u.b,{to:"/login"},r.a.createElement("div",{style:{fontSize:16}},"Login"))))),r.a.createElement(S.a,{open:v.left,onClose:w("left",!1)},(e="left",r.a.createElement("div",{className:t.list,role:"presentation",onClick:w(e,!1),onKeyDown:w(e,!1)},r.a.createElement(R.a,null),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/"},r.a.createElement(L.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(M.a,null)),r.a.createElement(D.a,{primary:"\ubb38\uc81c \ud480\uae30"}))),r.a.createElement(u.b,{to:"/Problem"},r.a.createElement(L.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(G.a,null)),r.a.createElement(D.a,{primary:"\ubb38\uc81c \uc694\uccad"}))),r.a.createElement(u.b,{to:"/comment"},r.a.createElement(L.a,{button:!0},r.a.createElement(V.a,null,r.a.createElement(H.a,null)),r.a.createElement(D.a,{primary:"\ub144\ub3c4\ubcc4 \ub9ac\uc2a4\ud2b8"})))),r.a.createElement(R.a,null)))),r.a.createElement("main",null,r.a.createElement("div",null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:O})),r.a.createElement(_.a,{pt:6},r.a.createElement(Y,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e,t,n){e.exports=n(132)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.c37b3130.chunk.js.map