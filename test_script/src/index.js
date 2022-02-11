import Test from "./test.js";
const test = new Test();

const a = document.createElement("div");
a.className = "sendiaFrame";
a.hidden = true;

const b = document.createElement("iframe");
b.src = "http://localhost:3000";
b.width = "100%";
b.height = "100%";
b.style = "border:none; border-radius:16px";

const btn = document.createElement("img");
btn.className = "sendiaBtnFrame";
btn.src = "https://test.sendia.io/static/brand/aris-logo.svg";
btn.addEventListener("click", function () {
  a.hidden = false;
  btn.hidden = true;
});

a.append(b);

document.body.append(a);
document.body.append(btn);

console.log(document.location.href);
console.log(b.contentDocument.location);

const style = document.createElement("style");
style.append(
  `
    .sendiaFrame { 
        width: 370px; 
        height: 680px; 
        position:absolute; 
        bottom:20px; 
        right:20px; 
        box-shadow: 0px 2px 12px 0px #23243F1F; 
      }
      .sendiaBtnFrame { 
          width: 48px; 
          height: 48px; 
          position:absolute; 
          bottom:20px; 
          right:20px; 
          border-radius: 16px;
          box-shadow: 0px 2px 12px 0px #23243F1F; 
      }
    `
);
document.body.append(style);

window.addEventListener("message", function (e) {
  if (e.data == "close sendia") {
    a.hidden = true;
    btn.hidden = false;
  }
});

export { test as Test };
