(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(25)},25:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(9),r=t.n(l);var s=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg  menu"},n.a.createElement("div",{className:"container"},n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:" navbar-nav ms-auto"},[{name:"skills"},{name:"education"},{name:"jobs"},{name:"courses"},{name:"projects"},{name:"contact"}].map(function(e,a){return n.a.createElement("li",{className:"nav-item",key:a},n.a.createElement("a",{className:"nav-link","aria-current":"page",href:"#"+e.name},e.name))})))))},o=t(3),m=t(26);var i=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)(function(){m.a.get("http://localhost:3002/").then(function(e){l(e.data.contact)}).catch(function(e){return console.log(e)})},[]),n.a.createElement("div",{className:"container"},t.map(function(e,a){return n.a.createElement("div",{className:"seccion",key:a},n.a.createElement("div",{className:"container-skills"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-lg-9 vertical-align"},n.a.createElement("div",null,n.a.createElement("h3",null,"Hi, I am ",e.name),n.a.createElement("h4",null,"am I am a software developer"),n.a.createElement("p",null,e.description))),n.a.createElement("div",{className:"col-12 col-lg-3 vertical-align profile-container"},n.a.createElement("img",{src:"images/perfil.png",width:"100%",className:"profile",alt:"profile"}))))))}))};var u=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];Object(c.useEffect)(function(){m.a.get("http://localhost:3002/").then(function(e){l(e.data.skills)}).catch(function(e){return console.log(e)})},[]);var r=t.slice(0,t.length/2),s=t.slice(t.length/2,t.length);return n.a.createElement("div",{className:"seccion",id:"skills"},n.a.createElement("div",{className:"contenido"},n.a.createElement("h3",{className:"titulo-seccion"},"Some skills"),n.a.createElement("div",{className:"container container-skills"},n.a.createElement("div",{className:"row align-items-start"},r.map(function(e,a){return n.a.createElement("div",{className:"col-3 col-lg-3 col-md-3 col-sm-3 ",key:a},n.a.createElement("img",{src:e.image,width:"100%",className:"profile",alt:e.name+" logo"}),n.a.createElement("p",{className:"textoCentrado"},e.name))})),n.a.createElement("div",{className:"row align-items-start"},s.map(function(e,a){return n.a.createElement("div",{className:"col-3 col-lg-3 col-md-3 col-sm-3 ",key:a},n.a.createElement("img",{src:e.image,width:"100%",className:"profile",alt:e.name+" logo"}),n.a.createElement("p",{className:"textoCentrado"},e.name))})))))};var E=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)(function(){m.a.get("http://localhost:3002/").then(function(e){l(e.data.jobs)}).catch(function(e){return console.log(e)})},[]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"seccion",id:"jobs"},n.a.createElement("div",null,n.a.createElement("h3",{className:"titulo-seccion"},"Jobs"),t.map(function(e,a){return n.a.createElement("div",{className:"carta"},n.a.createElement("div",{key:a,className:"row"},n.a.createElement("div",{className:"col-3 vertical-align"},n.a.createElement("img",{src:e.image,width:"100%",alt:"logo "+e.company})),n.a.createElement("div",{className:"col-9 vertical-align"},n.a.createElement("div",null,n.a.createElement("h4",null,e.company),n.a.createElement("p",null,"(",e.lapse," ) ",n.a.createElement("i",null,e.charge)),n.a.createElement("p",null,e.description)))))}))))};var d=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)(function(){m.a.get("http://localhost:3002/").then(function(e){l(e.data.schools)}).catch(function(e){return console.log(e)})},[]),n.a.createElement("div",{className:"seccion",id:"education"},n.a.createElement("div",null,n.a.createElement("h3",{className:"titulo-seccion"},"Education"),t.map(function(e,a){return n.a.createElement("div",{className:"carta",key:a},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("img",{src:e.image,width:"100%",alt:"logo escuela"})),n.a.createElement("div",{className:"col-9 vertical-align"},n.a.createElement("div",null,n.a.createElement("h5",null,e.name," (",e.lapse,")"),n.a.createElement("p",null,e.description)))))})))};var v=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)(function(){m.a.get("http://localhost:3002/").then(function(e){l(e.data.courses)}).catch(function(e){return console.log(e)})},[]),n.a.createElement("div",{className:"container "},n.a.createElement("div",{className:"seccion",id:"courses"},n.a.createElement("div",null,n.a.createElement("h3",{className:"titulo-seccion"},"Courses"),n.a.createElement("div",{className:"row"},t.map(function(e,a){return n.a.createElement("div",{className:"col-12 col-lg-6 columnas"},n.a.createElement("div",{class:"cards",key:a},n.a.createElement("img",{src:e.image,alt:"course",width:"100%"}),n.a.createElement("div",{class:"con"},n.a.createElement("h4",null,n.a.createElement("b",null,e.name)),n.a.createElement("p",null,"Topics: ",e.techs),n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Certifiacte")))))})))))};var p=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)(function(){m.a.get("http://localhost:3002/").then(function(e){l(e.data.projects)}).catch(function(e){return console.log(e)})},[]),n.a.createElement("div",{className:"container "},n.a.createElement("div",{className:"seccion",id:"projects"},n.a.createElement("div",null,n.a.createElement("h3",{className:"titulo-seccion"},"Projects"),n.a.createElement("div",{className:"row"},t.map(function(e,a){return n.a.createElement("div",{className:"col-12 col-lg-4 col-md-6 columnas",key:a},n.a.createElement("div",{className:"carta-proyectos"},n.a.createElement("div",{className:"carta-proyectos-titulo"},n.a.createElement("h5",null,e.name)),n.a.createElement("div",{className:"carta-proyectos-contenido"},n.a.createElement("p",null,e.description),n.a.createElement("h6",null,"Techs used"),n.a.createElement("div",{className:"gallery"},e.techs.map(function(e,a){return n.a.createElement("img",{className:"card-image",src:e.url,key:a,alt:e.name,width:"15%"})}))),n.a.createElement("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Repository"))))})))))};var f=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)(function(){m.a.get("http://localhost:3002/").then(function(e){l(e.data.media)}).catch(function(e){return console.log(e)})},[]),n.a.createElement("div",{className:"container "},n.a.createElement("div",{className:"seccion contacto",id:"contact"},n.a.createElement("div",{className:"contenido "},n.a.createElement("h3",{id:"contact",className:"titulo-seccion"},"Contact me"),n.a.createElement("div",{className:"container-skills"},n.a.createElement("p",null,"Let\xb4s talk and get a coffee :)"),n.a.createElement("div",{className:"row "},t.map(function(e,a){return n.a.createElement("div",{className:"col-6 col-lg-3",key:a},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.image,width:"20%",className:"contact-image",alt:e.name+" image"})),n.a.createElement("p",null,e.text))}))))))};var g=function(){return n.a.createElement("div",{className:"principal"},n.a.createElement(s,null),n.a.createElement(i,null),n.a.createElement("div",{className:"container columnas"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-lg-6 col-md-12 "},n.a.createElement(u,null)),n.a.createElement("div",{className:"col-lg-6 col-md-12 "},n.a.createElement(d,null)))),n.a.createElement(E,null),n.a.createElement(p,null),n.a.createElement(v,null),n.a.createElement(f,null))};var N=function(){return n.a.createElement(g,null)};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)))}},[[12,2,1]]]);
//# sourceMappingURL=main.530185e1.chunk.js.map