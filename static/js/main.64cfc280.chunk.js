(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),i=(n(16),n(3)),o=n(11),l=n(5),d=n(1),j=function(e){var t=e.color,n=e.text,a=e.press;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:a,style:{backgroundColor:t},className:"btn",children:n})})};j.defaultProps={color:"teal"};var u=j,b=function(e){var t=e.title,n=e.onAdd,a=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(u,{color:a?"red":"green",text:a?"Close":"Add Task",press:n})]})};b.defaultProps={title:"Default title!"};var m=b,O=n(10),h=function(e){var t=e.task,n=e.onDelete,a=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return a(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(O.a,{className:"fatimes",onClick:function(){return n(t.id,t.text)}})]}),Object(d.jsxs)("p",{children:[t.day,Object(d.jsxs)("span",{children:[" at ",t.time]})]})]})},x=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(h,{task:e,onDelete:n,onToggle:a},e.id)}))})},f=n(7),p=n(2);p.b.configure();var k=function(e,t){({info:function(){return p.b.info(e,{position:p.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"01",transition:p.a})},success:function(){return p.b.success(e,{position:p.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"02",transition:p.a})},warn:function(){return p.b.warn(e,{position:p.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"03",transition:p.a})},error:function(){return p.b.error(e,{position:p.b.POSITION.TOP_CENTER,autoClose:1500,toastId:"04",transition:p.a})}})[t]()},g=function(e){var t=e.onAdd,n=e.tasks,c=Object(a.useState)({text:"",day:"",time:"",reminder:!1}),r=Object(l.a)(c,2),s=r[0],o=r[1],j=function(e){var t=e.target.value,n=Math.floor(2e5*Math.random())+1;o(Object(i.a)(Object(i.a)({},s),{},Object(f.a)({id:n},e.target.name,t)))};return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s.text&&s.day&&s.time?(t(s),o({text:"",day:"",time:""})):k("kindly fill the input fileds","warn")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"label",children:"Add Task"}),Object(d.jsx)("input",{name:"text",type:"text",placeholder:"add a task",value:s.text,onChange:j})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"label",children:"Day"}),Object(d.jsx)("input",{name:"day",type:"date",value:s.day,onChange:j})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"label",children:"Time"}),Object(d.jsx)("input",{name:"time",type:"time",value:s.time,onChange:j})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{className:"reminder-label",children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:s.reminder,onChange:function(e){return function(e){e.target.checked?o(Object(i.a)(Object(i.a)({},s),{},{reminder:!0})):o(Object(i.a)(Object(i.a)({},s),{},{reminder:!1}))}(e)}})]}),Object(d.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save task"}),n.length>0&&Object(d.jsx)("h4",{className:"rem",children:"Double tap task to set reminder"})]})};n(18);var v=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,text:"Buy Xmas Chickens",day:"Dec 24th",time:"2:00pm",reminder:!0},{id:2,text:"Meeting at School",day:"Jan 3rd",time:"11:30am",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th",time:"2:30pm",reminder:!1}]),s=Object(l.a)(r,2),j=s[0],u=s[1];return Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)(m,{title:"Task Tracker",onAdd:function(){return c(!n)},showAdd:n}),n&&Object(d.jsx)(g,{onAdd:function(e){u([].concat(Object(o.a)(j),[e])),k('Task " '.concat(e.text,'" Added'),"success")},tasks:j}),j.length>0?Object(d.jsx)(x,{tasks:j,onDelete:function(e,t){u(j.filter((function(t){return t.id!==e}))),k('Task " '.concat(t,'" deleted'),"warn")},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(d.jsx)("h3",{children:"No task"})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.64cfc280.chunk.js.map