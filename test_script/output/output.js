!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Sendia",[],n):"object"==typeof exports?exports.Sendia=n():e.Sendia=n()}(self,(function(){return(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{Test:()=>t});const t=new class{getVersion(){console.log("v1.0.0")}getTest(){console.log("sdk test")}},o=document.createElement("div");o.className="sendiaFrame",o.hidden=!0;const d=document.createElement("iframe");d.src="http://localhost:3000",d.width="100%",d.height="100%",d.style="border:none; border-radius:16px";const r=document.createElement("img");r.className="sendiaBtnFrame",r.src="https://test.sendia.io/static/brand/aris-logo.svg",r.addEventListener("click",(function(){o.hidden=!1,r.hidden=!0})),o.append(d),document.body.append(o),document.body.append(r),console.log(document.location.href),console.log(d.contentDocument.location);const i=document.createElement("style");return i.append("\n    .sendiaFrame { \n        width: 370px; \n        height: 680px; \n        position:absolute; \n        bottom:20px; \n        right:20px; \n        box-shadow: 0px 4px 16px 0px #23243F1F;\n        border-radius:16px;\n      }\n      .sendiaBtnFrame { \n          width: 48px; \n          height: 48px; \n          position:absolute; \n          bottom:20px; \n          right:20px; \n          border-radius: 16px;\n          box-shadow: 0px 2px 12px 0px #23243F1F; \n      }\n      .sendiaBtnFrame:hover { \n        cursor: pointer;\n    }\n    "),document.body.append(i),window.addEventListener("message",(function(e){"close sendia"==e.data&&(o.hidden=!0,r.hidden=!1)})),n})()}));