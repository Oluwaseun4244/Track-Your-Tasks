(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),o=(n(16),n(3)),i=n(10),l=n(5),d=n(1),j=function(e){var t=e.color,n=e.text,a=e.press;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:a,style:{backgroundColor:t},className:"btn",children:n})})};j.defaultProps={color:"teal"};var b=j,u=function(e){var t=e.title,n=e.onAdd,a=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(b,{color:a?"red":"green",text:a?"Close":"Add Task",press:n})]})};u.defaultProps={title:"Default title!"};var m=u,O=n(11),h=function(e){var t=e.task,n=e.onDelete,a=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return a(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(O.a,{className:"fatimes",onClick:function(){return n(t.id,t.text)}})]}),Object(d.jsxs)("p",{children:[t.day,Object(d.jsxs)("span",{children:[" at ",t.time]})]})]})},f=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(h,{task:e,onDelete:n,onToggle:a},e.id)}))})},x=n(7),g=n(2);g.b.configure();var p=function(e,t){({info:function(){return g.b.info(e,{position:g.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"01",transition:g.a})},success:function(){return g.b.success(e,{position:g.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"02",transition:g.a})},warn:function(){return g.b.warn(e,{position:g.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"03",transition:g.a})},error:function(){return g.b.error(e,{position:g.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"04",transition:g.a})}})[t]()},k=function(e){var t=e.onAdd,n=e.tasks,c=Object(a.useState)({text:"",day:"",time:"",reminder:!1}),r=Object(l.a)(c,2),s=r[0],i=r[1],j=function(e){var t=e.target.value,n=Math.floor(2e5*Math.random())+1;i(Object(o.a)(Object(o.a)({},s),{},Object(x.a)({id:n},e.target.name,t)))};return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s.text&&s.day&&s.time?(t(s),i({text:"",day:"",time:""})):p("kindly fill the input fileds","warn")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"label",children:"Add Task"}),Object(d.jsx)("input",{name:"text",type:"text",placeholder:"add a task",value:s.text,onChange:j})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"label",children:"Day"}),Object(d.jsx)("input",{name:"day",type:"date",value:s.day,onChange:j})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"label",children:"Time"}),Object(d.jsx)("input",{name:"time",type:"time",value:s.time,onChange:j})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"reminder-label",children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:s.reminder,onChange:function(e){return function(e){e.target.checked?i(Object(o.a)(Object(o.a)({},s),{},{reminder:!0})):i(Object(o.a)(Object(o.a)({},s),{},{reminder:!1}))}(e)}})]}),Object(d.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save task"}),n.length>0&&Object(d.jsx)("h4",{className:"rem",children:"Double tap task to set reminder"})]})},v=(n(18),[{id:1,text:"Buy Xmas Chickens",day:"Dec 24th",time:"2:00pm",reminder:!0},{id:2,text:"Meeting at School",day:"Jan 3rd",time:"11:30am",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th",time:"2:30pm",reminder:!1}]);var T=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=localStorage.getItem("Todos"),s=JSON.parse(localStorage.getItem("Todos")),j=Object(a.useState)(r?s:v),b=Object(l.a)(j,2),u=b[0],O=b[1];return Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)(m,{title:"Task Tracker",onAdd:function(){return c(!n)},showAdd:n}),n&&Object(d.jsx)(k,{onAdd:function(e){O([].concat(Object(i.a)(u),[e]));var t=[].concat(Object(i.a)(u),[e]);localStorage.setItem("Todos",JSON.stringify(t)),p('Task " '.concat(e.text,'" Added'),"success")},tasks:u}),u.length>0?Object(d.jsx)(f,{tasks:u,onDelete:function(e,t){var n=u.filter((function(t){return t.id!==e}));O(n),localStorage.setItem("Todos",JSON.stringify(n)),p('Task " '.concat(t,'" deleted'),"warn")},onToggle:function(e){O(u.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(d.jsx)("h3",{children:"No task"})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.7223e728.chunk.js.map