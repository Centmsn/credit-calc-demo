(this["webpackJsonpcredit-calc"]=this["webpackJsonpcredit-calc"]||[]).push([[0],{31:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,u,l,d,b,p,j,f,x,h,g,v,m,O,w,y,k=t(0),M=t.n(k),C=t(15),N=t.n(C),E=t(4),L=t(5),z=t(3),A=t(6),I=t(7),S=t(1),X=z.c.div(r||(r=Object(E.a)(["\n  width: 35px;\n  height: 35px;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n\n  border: 2px solid\n    ",";\n  border-radius: 10px;\n\n  font-size: 1.5rem;\n\n  background: ",";\n  color: ",";\n\n  cursor: pointer;\n  user-select: none;\n"])),(function(n){var e=n.theme;return n.isActive?e.colors.orange[900]:e.colors.gray[100]}),(function(n){var e=n.theme;return n.isActive?e.colors.orange[700]:e.colors.gray[100]}),(function(n){return n.theme.colors.gray[900]})),D=z.c.label(o||(o=Object(E.a)([""]))),R=function(n){var e=n.isChecked,t=n.onClick,r=n.label;return r?Object(S.jsxs)(D,{children:[r,Object(S.jsx)(X,{onClick:function(n){return t(n,!e)},isActive:e,children:Object(S.jsx)(I.a,{icon:e?A.c:A.d})})]}):Object(S.jsx)(X,{onClick:function(n){return t(n,!e)},isActive:e,children:Object(S.jsx)(I.a,{icon:e?A.c:A.d})})},B=z.c.div(i||(i=Object(E.a)(["\n  width: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n"]))),F=z.c.h3(c||(c=Object(E.a)(["\n  flex-basis: 100%;\n\n  border-radius: 20px;\n\n  font-size: 1.5rem;\n  text-align: center;\n\n  background: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.gray[900]})),J=z.c.span(a||(a=Object(E.a)(["\n  position: absolute;\n  top: 7.5px;\n  right: 7.5px;\n  border-radius: 10px;\n\n  font-size: 0.75rem;\n\n  background: ",";\n  color: ",";\n\n  padding: 5px;\n"])),(function(n){return n.theme.colors.gray[200]}),(function(n){return n.theme.colors.gray[600]})),K=z.c.div(s||(s=Object(E.a)(["\n  flex-basis: 20%;\n  height: 40px;\n  position: relative;\n"]))),P=z.c.input(u||(u=Object(E.a)(["\n  height: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n\n  border-radius: 20px;\n  border: none;\n\n  font-size: 1.25rem;\n\n  background: ",";\n  color: ",";\n\n  padding: 5px 5px 5px 20px;\n"])),(function(n){return n.theme.colors.gray[100]}),(function(n){return n.theme.colors.white})),Y=z.c.div(l||(l=Object(E.a)(["\n  position: relative;\n  width: 70%;\n  height: 15px;\n\n  margin: 50px 0;\n\n  border: 2px solid ",";\n  border-radius: 20px;\n\n  cursor: pointer;\n"])),(function(n){return n.theme.colors.gray[100]})),q=z.c.div(d||(d=Object(E.a)(["\n  position: absolute;\n  top: -17.5px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n\n  box-shadow: 0 0 4px 0px ",";\n\n  font-size: 2rem;\n\n  background-color: ",";\n  color: white;\n\n  border-radius: 50%;\n"])),(function(n){return n.position}),(function(n){return n.theme.colors.gray[900]}),(function(n){return n.theme.colors.orange[900]})),G=z.c.div(b||(b=Object(E.a)(["\n  height: 100%;\n  width: ","px;\n\n  border-radius: 5px;\n  background: ",";\n"])),(function(n){return n.position+15}),(function(n){return n.theme.colors.gray[300]})),H=Object(z.c)(G)(p||(p=Object(E.a)(["\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  background: rgb(240, 240, 240);\n"]))),Q=function(n){var e=n.min,t=void 0===e?0:e,r=n.max,o=void 0===r?100:r,i=n.title,c=n.unit,a=(n.step,n.onChange),s=Object(k.useState)(0),u=Object(L.a)(s,2),l=u[0],d=u[1],b=Object(k.useState)(0),p=Object(L.a)(b,2),j=p[0],f=p[1],x=Object(k.useState)(t),h=Object(L.a)(x,2),g=h[0],v=h[1],m=Object(k.useRef)(null),O=Object(k.useRef)(null);Object(k.useEffect)((function(){var n=m.current;return n&&n.addEventListener("mouseenter",w),function(){null===n||void 0===n||n.removeEventListener("mouseenter",w)}}),[]);var w=function(){var n=m.current;null===n||void 0===n||n.addEventListener("mousemove",y),null===n||void 0===n||n.addEventListener("mouseleave",M)},y=function(n){if(m.current){var e=m.current.getBoundingClientRect().left,t=n.clientX-e-17;f(t)}},M=function n(){var e=O.current;f(0),e&&(e.removeEventListener("mousemove",y),e.removeEventListener("mouseleave",n))},C=function(n){if(n.preventDefault(),m.current){var e=m.current.getBoundingClientRect(),r=e.left,i=e.width,c=n.clientX-r-25;c+50>i?c=i-50:c<0&&(c=0);var s=Math.floor(c/((i-50)/(o-t)))+t;d(c),v(s),a(s)}},N=function n(e){e.preventDefault(),document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",n)};return Object(S.jsxs)(B,{children:[Object(S.jsx)(F,{children:i}),Object(S.jsxs)(Y,{ref:m,onClick:C,children:[Object(S.jsx)(G,{position:l}),Object(S.jsx)(H,{position:j,ref:O}),Object(S.jsxs)(q,{onMouseDown:function(n){n.preventDefault(),document.addEventListener("mousemove",C),document.addEventListener("mouseup",N)},position:l,children:[Object(S.jsx)(I.a,{icon:A.a}),Object(S.jsx)(I.a,{icon:A.b})]})]}),Object(S.jsxs)(K,{children:[Object(S.jsx)(P,{value:g,onChange:function(n){var e=m.current;if(e){var r,i=e.getBoundingClientRect().width,c=Number(Number(null===n||void 0===n||null===(r=n.target)||void 0===r?void 0:r.value).toFixed(2));c>o?c=o:c<t&&(c=t);var s=(i-50)/(o-t)*c;d(s<0?0:s),v(c),a(c)}},type:"number"}),c&&Object(S.jsx)(J,{children:c})]})]})},T=z.c.input(j||(j=Object(E.a)(["\n  width: 50%;\n  margin: 0 15px;\n\n  border: 2px solid\n    ",";\n  border-radius: 5px;\n\n  background: ",";\n  color: ",";\n\n  padding: 5px 10px;\n"])),(function(n){var e=n.theme;return n.isDisabled?e.colors.gray[100]:e.colors.orange[900]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.gray[900]})),U=z.c.label(f||(f=Object(E.a)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.gray[900]})),V=function(n){var e=n.title,t=n.onChange,r=n.type,o=void 0===r?"text":r,i=n.disabled,c=void 0!==i&&i,a=n.value;return Object(S.jsxs)(U,{children:[e,Object(S.jsx)(T,{type:o,onChange:function(n){return t(n.target.value,n)},disabled:c,isDisabled:c,value:a})]})};!function(n){n[n.MIN=3]="MIN",n[n.MAX=120]="MAX"}(w||(w={})),function(n){n[n.MIN=500]="MIN",n[n.MAX=1e5]="MAX"}(y||(y={}));var W,Z=z.c.div(x||(x=Object(E.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  width: 50vw;\n  height: 30vh;\n  min-height: 400px;\n\n  border-radius: 10px;\n  border: 2px solid ",";\n\n  padding: 20px;\n"])),(function(n){return n.theme.colors.orange[900]})),$=z.c.span(h||(h=Object(E.a)(["\n  position: relative;\n"]))),_=z.c.div(g||(g=Object(E.a)(["\n  position: absolute;\n  top: 50%;\n  right: 11%;\n\n  transform: translateY(-50%);\n\n  border-radius: 5px;\n\n  background: ",";\n  padding: 0 10px;\n"])),(function(n){return n.theme.colors.gray[100]})),nn=z.c.div(v||(v=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),en=z.c.div(m||(m=Object(E.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n"]))),tn=z.c.span(O||(O=Object(E.a)(["\n  flex-basis: 50%;\n  border-radius: 20px;\n\n  font-size: 1.25rem;\n  text-align: center;\n\n  color: ",";\n  background: ",";\n\n  padding: 10px;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.orange[900]})),rn=function(){var n=Object(k.useState)(y.MIN),e=Object(L.a)(n,2),t=e[0],r=e[1],o=Object(k.useState)(w.MIN),i=Object(L.a)(o,2),c=i[0],a=i[1],s=Object(k.useState)(0),u=Object(L.a)(s,2),l=u[0],d=u[1],b=Object(k.useState)(!0),p=Object(L.a)(b,2),j=p[0],f=p[1];return Object(S.jsxs)(Z,{children:[Object(S.jsx)(Q,{onChange:function(n){a(n)},min:w.MIN,max:w.MAX,title:"Okres",unit:"M"}),Object(S.jsx)(Q,{onChange:function(n){r(n)},max:y.MAX,min:y.MIN,title:"Kwota",unit:"PLN"}),Object(S.jsxs)(nn,{children:[Object(S.jsxs)(en,{children:[Object(S.jsxs)($,{children:[Object(S.jsx)(V,{title:"Oprocentowanie",onChange:function(n){var e=Number(n);e>12?e=12:e<0&&(e=0),d(e)},type:"number",disabled:!j,value:l}),Object(S.jsx)(_,{children:"%"})]}),Object(S.jsx)(R,{isChecked:j,onClick:function(){f((function(n){return!n}))}})]}),Object(S.jsxs)(tn,{children:["Rata kredytu: ",function(){var n=Math.floor(t/c);return j&&(n+=n*(l/100)),n.toFixed(2)}(),"z\u0142"]})]})]})},on=Object(z.b)(W||(W=Object(E.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Nunito Sans', sans-serif;\n    }\n    body {\n        width: 100%;\n        height: 100vh;\n\n        overflow: hidden;\n    }\n    input {\n        &:focus {\n            outline: none;\n        }\n    }\n\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n    }\n\n    input[type=number] {\n    -moz-appearance: textfield;\n    }\n"]))),cn={colors:{orange:{700:"rgb(255, 200, 148)",800:"rgb(245, 151, 63)",900:"rgb(240, 128, 23)"},gray:{100:"rgb(207, 207, 207)",200:"rgb(187, 187, 187)",300:"rgb(167, 167, 167)",400:"rgb(147, 147, 147)",500:"rgb(127, 127, 127)",600:"rgb(107, 107, 107)",700:"rgb(87, 87, 87)",800:"rgb(67, 67, 67)",900:"rgb(47, 47, 47)"},white:"rgb(255, 255, 255)"}},an=function(n){var e=n.children;return Object(S.jsx)(z.a,{theme:cn,children:e})};N.a.render(Object(S.jsx)(M.a.StrictMode,{children:Object(S.jsxs)(an,{children:[Object(S.jsx)(on,{}),Object(S.jsx)(rn,{})]})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3f508f9e.chunk.js.map