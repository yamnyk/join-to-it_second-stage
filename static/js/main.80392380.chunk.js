(this["webpackJsonpjoin-to-it_second-stage"]=this["webpackJsonpjoin-to-it_second-stage"]||[]).push([[0],{100:function(e,a,t){},11:function(e,a,t){e.exports={NavBar:"NavBar_NavBar__Cqnef",NavBar__Search:"NavBar_NavBar__Search__RWO_A",NavBar__SearchSubmit:"NavBar_NavBar__SearchSubmit__3eEfi",NavBar__SearchIcon:"NavBar_NavBar__SearchIcon__3-hp3",NavBar__SearchInput:"NavBar_NavBar__SearchInput__h24F6",NavBar__Navigation:"NavBar_NavBar__Navigation__27Q3Q",NavBar__IconsList:"NavBar_NavBar__IconsList__NgBBZ",NavBar__NavIcon:"NavBar_NavBar__NavIcon__2mgpq",NavBar__NavIcon_notifyed:"NavBar_NavBar__NavIcon_notifyed__36eR0",NavBar__Profile:"NavBar_NavBar__Profile__3bQij",NavBar__UserName:"NavBar_NavBar__UserName__3XA6U",NavBar__Avatar:"NavBar_NavBar__Avatar__3zNbF"}},20:function(e,a,t){e.exports={SideBar:"SideBar_SideBar__38KVu",SideBar__Link:"SideBar_SideBar__Link__-RT68",SideBar__company:"SideBar_SideBar__company__3s7Vm",SideBar__List:"SideBar_SideBar__List__pdq65",SideBar__Item:"SideBar_SideBar__Item__3Wevb",SideBar__Item_Active:"SideBar_SideBar__Item_Active__1eAIb",SideBar__Icon:"SideBar_SideBar__Icon__1TS73"}},203:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),o=t.n(l),_=(t(99),t(100),t(34)),c=t(24),s=t(35),i=t(87),m=t.n(i),u=(t(64),t(5)),v=t.n(u),N=t(62),d=t(91),E=t.n(d),f=t(92);function B(e){var a=e.toString().split(" ");return{date:[e.getFullYear(),e.getMonth()<10?"0".concat(e.getMonth()+1):e.getMonth()+1,e.getDate()<10?"0".concat(e.getDate()):e.getDate()].join("-"),time:a[4]}}var p={},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return void 0===p[e]?p[e]=0:p[e]++,"".concat(e).concat(p[e])};var h=function(e){var a=e.modal,t=e.handleClose,l=e.events,o=e.setEvents,i=a.event,m=i.id,u=i.box,N=i.bounds,d=i.start,E=i.end,p=i.title,h=i.notes,S=i.color,C=Object(n.useState)(null),b=Object(s.a)(C,2),w=b[0],I=b[1],y=function(e,a,t){var n=e||{},r=n.clientX,l=n.clientY,o=a||{},_=o.top,c=o.left,s={top:-18,bottom:null,borderBottomColor:"#4D4F5C",borderTopColor:null};return console.log(e),(l>=600||_>=600)&&(l-=350,_-=350,s.bottom=s.top,s.top=null,s.borderTopColor="#4D4F5C",s.borderBottomColor=null),{clientX:r||c,clientY:l||_,arrow:s}}(u,N),j={position:"absolute",top:y.clientY+"px",left:"".concat(y.clientX-260,"px"),arrow:y.arrow};return r.a.createElement("div",{className:v.a.NewEvent__Wrap},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=new FormData(e.target),n=new Date([a.get("startDate"),a.get("startTime")].join(" ")),r=new Date(E),s={title:a.get("title"),start:n,end:r,notes:a.get("notes"),box:u,bounds:N,color:a.get("color")};if(n.getTime()===r.getTime()&&r.setHours(n.getHours()+1),Date.now()>n.getTime())I("Incorrect date");else{var i,v=Object(f.a)(a.entries());try{for(v.s();!(i=v.n()).done;){if(i.value.some((function(e){return!1===Boolean(e)})))return void I("You should fill all the fields")}}catch(p){v.e(p)}finally{v.f()}var d={},B=l.find((function(e){return e.id===m}));B?(d=Object(c.a)(Object(c.a)({},B),s),l.splice(l.indexOf(B),1)):(s.start=new Date(a.get("startDate")+" "+a.get("startTime")),d=Object(c.a)({id:g("event_")},s)),o([].concat(Object(_.a)(l),[d])),t()}}(e)},className:v.a.NewEvent,style:j},r.a.createElement("div",{className:v.a.NewEvent__Arrow,style:j.arrow}),r.a.createElement("i",{className:["far fa-times-circle",v.a.NewEvent__Close].join(" "),onClick:function(){return t(!1)}}),r.a.createElement("p",{className:[v.a.NewEvent__Button_Cancel,v.a.NewEvent__Error].join(" ")},w),r.a.createElement("label",{className:v.a.NewEvent__Label},"event name",r.a.createElement("input",{className:v.a.NewEvent__Input,name:"title",type:"text",defaultValue:p})),r.a.createElement("label",{className:v.a.NewEvent__Label},"event date",r.a.createElement("input",{className:[v.a.NewEvent__Input,v.a.NewEvent__Input_Date].join(" "),name:"startDate",type:"date",defaultValue:B(d).date}),r.a.createElement("i",{className:["far fa-calendar-alt",v.a.NewEvent__Input_Date_Icon].join(" ")})),r.a.createElement("label",{className:v.a.NewEvent__Label},"event time",r.a.createElement("input",{className:v.a.NewEvent__Input,name:"startTime",type:"time",onChange:function(e){return e},defaultValue:B(d).time}),r.a.createElement("i",{className:["far fa-clock",v.a.NewEvent__Input_Date_Icon].join(" ")})),r.a.createElement("label",{className:v.a.NewEvent__Input_Color},r.a.createElement("input",{name:"color",type:"color",defaultValue:S||"#3B86FF"})),r.a.createElement("label",{className:v.a.NewEvent__Label},"notes",r.a.createElement("input",{className:v.a.NewEvent__Input,name:"notes",type:"text",defaultValue:h})),r.a.createElement("div",{className:v.a.NewEvent__Buttons},r.a.createElement("input",{className:[v.a.NewEvent__Button,v.a.NewEvent__Button_Cancel].join(" "),type:"reset",value:a.isOnEvent?"discard":"cancel",onClick:function(){var e=l.find((function(e){return e.id===m})),a=Object(_.a)(l);a.splice(l.indexOf(e),1),o(a),t()}}),r.a.createElement("input",{className:v.a.NewEvent__Button,type:"submit",value:"Save"}))))},S=Object(N.b)(m.a),C=E()(N.a);var b=function(){var e=Object(n.useState)(localStorage.getItem("events")||[]),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)({isShowing:!1}),i=Object(s.a)(o,2),m=i[0],u=i[1],N=function(e,a){u({isShowing:!0,event:e,isOnEvent:a})};return r.a.createElement("div",{className:["Container",v.a.Calendar].join(" ")},r.a.createElement("h2",{className:v.a.Calendar__Title},"Calendar"),r.a.createElement("div",{className:v.a.Calendar__Wrapper},m.isShowing&&r.a.createElement(h,{modal:Object(c.a)({},m),handleClose:function(){u(Object(c.a)(Object(c.a)({},m),{},{isShowing:!1}))},events:Object(_.a)(t),setEvents:l}),r.a.createElement(C,{selectable:!0,localizer:S,events:t,eventPropGetter:function(e){return{style:{background:e.color}}},startAccessor:"start",endAccessor:"end",onSelectEvent:function(e){return N(e,!0)},onSelectSlot:function(e){return N(e,!1)},style:{height:850}})))},w=t(16),I=t(20),y=t.n(I),j=t(9),x=function(e){var a=e.items,t=function(e){return r.a.createElement("div",{className:y.a.SideBar__Icon},e.children)},n=Object(j.g)(),l=a.map((function(e){var a=[y.a.SideBar__Item];return e.linkURL===n.pathname&&a.push(y.a.SideBar__Item_Active),a=a.join(" "),r.a.createElement("li",{key:e.id,className:a},r.a.createElement(t,null,e.icon),r.a.createElement(w.b,{to:e.linkURL,className:y.a.SideBar__Link},e.text))}));return r.a.createElement("div",{className:y.a.SideBar},r.a.createElement(w.b,{to:"/",className:[y.a.SideBar__company,y.a.SideBar__Link].join(" ")},"IMPEKABLE"),r.a.createElement("ul",{className:y.a.SideBar__List},l))},L=t(11),k=t.n(L),M=function(e){var a=e.user;return r.a.createElement("div",{className:k.a.NavBar},r.a.createElement("form",{action:"",className:k.a.NavBar__Search},r.a.createElement("button",{className:k.a.NavBar__SearchSubmit,type:"submit"},r.a.createElement("i",{className:["fas fa-search",k.a.NavBar__SearchIcon].join(" ")})),r.a.createElement("input",{className:k.a.NavBar__SearchInput,type:"text",placeholder:"Search transactions, invoices or help"})),r.a.createElement("div",{className:k.a.NavBar__Navigation},r.a.createElement("div",{className:k.a.NavBar__IconsList},r.a.createElement("i",{className:["far fa-life-ring",k.a.NavBar__NavIcon].join(" ")}),r.a.createElement("i",{className:["fas fa-comments",k.a.NavBar__NavIcon].join(" ")}),r.a.createElement("i",{className:["fas fa-bell",k.a.NavBar__NavIcon,k.a.NavBar__NavIcon_notifyed].join(" ")})),r.a.createElement("div",{className:k.a.NavBar__Profile},r.a.createElement("p",{className:k.a.NavBar__UserName},a.name),r.a.createElement("img",{src:a.imgUrl,alt:"user",className:k.a.NavBar__Avatar}))))},O=t(48),D=t.n(O),P=t(49),R=t.n(P),T=function(e){return r.a.createElement("div",{className:R.a.Preloader},r.a.createElement("div",{className:[R.a.Preloader,R.a.PreloaderInner].join(" ")}))},U=function(){return r.a.createElement("div",{className:D.a.Message},r.a.createElement("div",{className:D.a.MessageContainer},r.a.createElement("h1",{className:D.a.MessageTitle},"This page is not available yet"),r.a.createElement("p",null,"Please follow the ",r.a.createElement(w.b,{to:"/calendar"},"link")," to see the Calendar functioning"),r.a.createElement(T,null)))};var A=function(){var e=[{id:g("menuItem"),text:"Home",linkURL:"/",icon:r.a.createElement("i",{className:"fas fa-home"}),altMsg:"home"},{id:g("menuItem"),text:"Dashboard",linkURL:"/dashboard",icon:r.a.createElement("i",{className:"fas fa-grip-vertical"}),altMsg:"home"},{id:g("menuItem"),text:"Inbox",linkURL:"/inbox",icon:r.a.createElement("i",{className:"fas fa-envelope"}),altMsg:"home"},{id:g("menuItem"),text:"Products",linkURL:"/products",icon:r.a.createElement("i",{className:"fas fa-barcode"}),altMsg:"home"},{id:g("menuItem"),text:"Invoices",linkURL:"/invoices",icon:r.a.createElement("i",{className:"fas fa-receipt"}),altMsg:"home"},{id:g("menuItem"),text:"Customers",linkURL:"/customers",icon:r.a.createElement("i",{className:"fas fa-user"}),altMsg:"home"},{id:g("menuItem"),text:"Chat Room",linkURL:"/chat",icon:r.a.createElement("i",{className:"fas fa-comment-alt"}),altMsg:"home"},{id:g("menuItem"),text:"Calendar",linkURL:"/calendar",icon:r.a.createElement("i",{className:"fas fa-calendar-alt"}),altMsg:"home"},{id:g("menuItem"),text:"Help Center",linkURL:"/help",icon:r.a.createElement("i",{className:"fas fa-question-circle"}),altMsg:"home"},{id:g("menuItem"),text:"Settings",linkURL:"/settings",icon:r.a.createElement("i",{className:"fas fa-cog"}),altMsg:"home"}];return r.a.createElement("div",null,r.a.createElement(x,{items:e}),r.a.createElement(M,{user:{name:"John Doe",imgUrl:"./img/user_avatar.png"}}),r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/calendar",component:b,exact:!0}),r.a.createElement(j.b,{path:"/error",component:U,exact:!0}),r.a.createElement(j.b,{path:"/",exact:!0}),r.a.createElement(j.a,{from:"*",to:"/error"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports={Message:"OtherPagesMessage_Message__3Tbey",MessageContainer:"OtherPagesMessage_MessageContainer__3-CX5",MessageTitle:"OtherPagesMessage_MessageTitle__H97xu"}},49:function(e,a,t){e.exports={Preloader:"Preloader_Preloader__2A4ZB",loading:"Preloader_loading__vlRMC",PreloaderInner:"Preloader_PreloaderInner__g1uzZ"}},5:function(e,a,t){e.exports={Calendar:"CustomCalendarStyle_Calendar__3jzY-",Calendar__Wrapper:"CustomCalendarStyle_Calendar__Wrapper___zpzt",Calendar__Title:"CustomCalendarStyle_Calendar__Title__3gJfu",NewEvent:"CustomCalendarStyle_NewEvent__3a2JN",NewEvent__Arrow:"CustomCalendarStyle_NewEvent__Arrow__3IOBG",NewEvent__Wrap:"CustomCalendarStyle_NewEvent__Wrap__3pdm7",NewEvent__Error:"CustomCalendarStyle_NewEvent__Error__j_04N",NewEvent__Close:"CustomCalendarStyle_NewEvent__Close__14qbx",NewEvent__Label:"CustomCalendarStyle_NewEvent__Label__3gfhK",NewEvent__Input:"CustomCalendarStyle_NewEvent__Input__2Siz-",NewEvent__Input_Date_Icon:"CustomCalendarStyle_NewEvent__Input_Date_Icon__3sGXg",NewEvent__Input_Color:"CustomCalendarStyle_NewEvent__Input_Color__RBb4Y",NewEvent__Buttons:"CustomCalendarStyle_NewEvent__Buttons__1e-ik",NewEvent__Button:"CustomCalendarStyle_NewEvent__Button__1XhvY",NewEvent__Button_Cancel:"CustomCalendarStyle_NewEvent__Button_Cancel__3ap3W"}},64:function(e,a,t){},94:function(e,a,t){e.exports=t(203)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.80392380.chunk.js.map