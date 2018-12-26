!function(e){var n={};function t(o){if(n[o])return n[o].exports;var d=n[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,t),d.l=!0,d.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var d in e)t.d(o,d,function(n){return e[n]}.bind(null,d));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=14)}([function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0),t(1),t(2);const o=document.getElementById("container");var d={blackScreenIn:'<div id="black-screen-in"></div>',blackScreenOut:'<div id="black-screen-out"></div>',toBlack:function(){o.insertAdjacentHTML("afterend",this.blackScreenIn),this.removeToBlack()},fromBlack:function(){o.insertAdjacentHTML("afterend",this.blackScreenOut),this.removeFromBlack()},removeToBlack:function(){const e=document.getElementById("black-screen-in");e.addEventListener("animationend",()=>{e.remove()})},removeFromBlack:function(){const e=document.getElementById("black-screen-out");e.addEventListener("animationend",()=>{e.remove()})}};var c={create:function(e,n=!1,t=!0){let o=new Audio;o.id="soundtrack",o.src=`static/media-files/sound/${e}`,o.style.display="none",o.autoplay=!0,o.loop=n,o.muted=t,document.getElementById("container").appendChild(o),o.onended=(()=>{o.remove()}),o.pause()},play:function(){document.getElementById("soundtrack").load()},change:function(e){document.getElementById("soundtrack").src=`static/media-files/sound/${e}`}};t(3);const i=document.getElementById("container");var s=()=>i.insertAdjacentHTML("beforeend",'<div id="game-scene"></div>');t(4);const a=document.getElementById("container"),l=()=>'<div class="battleground-stats-image"></div>';var r=()=>{a.insertAdjacentHTML("beforeend",(()=>`<div id="battleground-stats">${l()}</div>`)())};t(5),t(6);var u=["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif","13.gif","14.gif","15.gif","16.gif","17.gif","18.gif","19.gif","20.gif","21.gif","22.gif"];let m=[],v=[];class g{constructor(e,n,t){this.id=g.id(),this.x=e,this.y=n,this.image=t}static id(){return m.length+1}}const f=e=>e.sort(()=>Math.random()-.5),b=()=>u.slice(0,6),y=()=>(f(u),b(),(()=>{let e=b();for(let n=e.length-1;n>=0;n--)e.push(e[n]);v=e})(),f(v),(()=>{let e=75,n=90;for(let t=0;t<12;t++)6===t&&(e=75),t>=6&&(n=210),e+=120,m.push(new g(e,n,v[t]))})(),(()=>{let e="";for(let n=0;n<12;n++)e+=`<div class="card" id="${m[n].id}">\n                      <div class="card-content" style="margin-left: ${m[n].x}px; margin-top: ${m[n].y}px">\n                        <div class="card-front"></div>\n                        <div class="card-back" style="background-image: url(static/images/card-images/${m[n].image})"></div>\n                      </div>\n                    </div>`;return e})()),p=document.getElementById("container"),E=()=>`<div class="battleground-board-image">${h()}</div>`,h=()=>`<div class="battleground-board-field">${y()}</div>`;var k=()=>{p.insertAdjacentHTML("beforeend",(()=>`<div id="battleground-board" class="battleground-board-disable">${E()}</div>`)())};t(7),t(8),t(9);const B=document.getElementById("container");var L=e=>{B.insertAdjacentHTML("beforeend",(e=>`<div id="score-page">\n                <div class="score-page-congratulation">${e}</div>\n            </div>`)(e));const n=document.getElementById("score-page");n.addEventListener("animationend",()=>{n.classList.add("score-page-rebound")})};t(10),t(11);var I=(e,n="")=>{return document.getElementById("container").insertAdjacentHTML("beforeend",((e,n)=>`<video autoplay muted ${n} id="full-screen-video">\n                <source src="static/media-files/video/${e}" type="video/mp4">\n            </video>`)(e,n))};const x=()=>{d.toBlack(),document.getElementById("black-screen-in").addEventListener("animationend",()=>{I("kottans-end.mp4");const e=document.getElementById("full-screen-video");e.onended=function(n){e.remove(),S(),Q(),c.change("starting-page.mp3")}})},S=()=>{document.getElementById("game-scene").remove(),document.getElementById("battleground-stats").remove(),document.getElementById("battleground-board").remove(),document.getElementById("score-page").remove()};var w=()=>{const e=document.getElementById("score-page"),n=document.getElementsByClassName("score-page-congratulation")[0];e.insertAdjacentHTML("beforeend",'<div id="score-table">\n                <div class="scores">Web server for score table will be available in next updates...</div>\n                <buttom id="play-again">Play again</button>\n            </div>');const t=document.getElementById("score-table");n.addEventListener("animationend",()=>{t.classList.add("score-table-visible")}),document.getElementById("play-again").addEventListener("click",()=>{x()})};var C=e=>{c.change("score-page.mp3"),L(e),w()};let M=[],T=0,H=2;const $=e=>{e.children[0].classList.add("card-content-show"),M.push({id:e.attributes.id.value,img:m[e.attributes.id.value-1].image}),j()},j=()=>{null!=M[1]&&(M[0].img!==M[1].img?A():M[0].img===M[1].img&&F())},A=()=>{const e=document.getElementById(M[0].id),n=document.getElementById(M[1].id);M=[],setTimeout(()=>{e.children[0].classList.remove("card-content-show"),n.children[0].classList.remove("card-content-show")},500)},F=()=>{const e=document.getElementById(M[0].id),n=document.getElementById(M[1].id);T+=1,M=[],setTimeout(()=>{6==T&&(N(),_()),e.children[0].classList.add("card-content-correct"),n.children[0].classList.add("card-content-correct"),e.children[0].classList.remove("card-content-show"),n.children[0].classList.remove("card-content-show"),e.children[0].addEventListener("transitionend",()=>{e.children[0].classList.add("card-content-correct-grayscale"),n.children[0].classList.add("card-content-correct-grayscale")})},500)},O=()=>{const e=document.querySelectorAll(".card-content"),n=document.getElementById("battleground-board");e.forEach(e=>{e.classList.add("card-content-show")}),setTimeout(()=>{n.classList.remove("battleground-board-disable"),document.querySelectorAll(".card").forEach(e=>{e.addEventListener("click",()=>{$(e)})}),e.forEach(e=>{e.classList.remove("card-content-show")})},2e3)},_=()=>{setTimeout(()=>{C("Well done!")},500)},N=()=>{(()=>m=[])(),console.log(m),M=[],T=0,H=2};var q=()=>{setTimeout(()=>{O()},2e3)};const P=document.getElementById("container");var D=()=>{P.insertAdjacentHTML("beforeend",'<div id="countdown">3</div>'),(()=>{const e=document.getElementById("countdown");let n=setInterval(()=>{1==e.innerHTML?(clearInterval(n),e.remove(),q()):e.innerHTML-=1},1e3)})()};const Y=()=>{const e=document.getElementById("dialog"),n=document.getElementById("battleground-board");e.classList.add("dialog-hide"),e.addEventListener("transitionend",()=>{e.remove(),D(),setTimeout(()=>{n.classList.add("battleground-board-show"),n.addEventListener("transitionend",()=>{n.classList.add("battleground-board-rebound")})},3e3)})};var R=(e,n,t)=>{const o=document.getElementById("game-scene"),d=((e,n,t)=>`<div id="dialog">${e}${n}${t}</div>`)((e=>`<div class="dialog-box-avatar" style="background-image: url(static/images/${e})"></div>`)(e),((e,n)=>`<div class="dialog-box">${e}${n}</div>`)((e=>`<div class="dialog-box-avatar-name">${e}</div>`)(n),(e=>`<div class="dialog-box-text">${e}</div>`)(t)),'<div class="dialog-box-button">ok</div>');o.insertAdjacentHTML("beforeend",d),document.getElementsByClassName("dialog-box-button")[0].addEventListener("click",()=>{Y()})};var z=()=>{d.fromBlack(),c.change("main-page.mp3"),s(),r(),k();R("captain-sad.png","capitan","Hey, sergeant! You are in the alpha version of the game,<br>so you can't save a princess or lost your life.<br>She will wait for you in next update.")};const K=e=>{V();const n=document.getElementById("black-screen-in"),t=document.getElementById("full-screen-video");return t.classList.add("full-screen-video-zoom"),n.addEventListener("animationend",()=>{t.classList.remove("full-screen-video-zoom"),document.getElementById("full-screen-video").remove(),document.getElementsByClassName("difficulty-menu")[0].remove(),document.getElementById("game-options-button").remove(),document.getElementById("game-options-menu").remove(),z()})},V=()=>{document.getElementsByClassName("difficulty-menu")[0].classList.add("difficulty-menu-transition"),d.toBlack()};var W=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",'<div class="difficulty-menu">\n                <button class="difficulty-name difficulty-disabled" value="easy">Easy</button>\n                <button class="difficulty-name" value="normal">Normal</button>\n                <button class="difficulty-name difficulty-disabled" value="hard">Hard</button>\n            </div>'),document.querySelectorAll(".difficulty-name").forEach(e=>{e.addEventListener("click",()=>{K(e.value)})})};t(12);var G={sound:!1,fullscreen:!1};var J={open_menu_button:function(){return'<button id="game-options-button">Game options</button>'},main_menu:function(){return'<div id="game-options-menu">\n                    <div class="game-options-checkboxs">\n                        <h3>Options</h3>\n                        <label class="game-options-label">\n                            <input type="checkbox" class="checkbox" id="game-options-menu-sound" value="sound" checked>\n                            <span>Sound</span>\n                        </label>\n                        <label class="game-options-label">\n                            <input type="checkbox" class="checkbox" id="game-options-menu-fullscreen" value="fullscreen" checked>\n                            Fullscreen\n                        </label>\n                    </div>\n                    <div class="game-options-info">\n                        <h3>Hotkeys</h3>\n                        <p>M - Sound off/on</p>\n                        <p>F - Fullscreen off/on</p>\n                    </div>\n                    <button id="game-options-menu-close">Close<button>\n                </div>'},openMenuClickEvent:function(){document.getElementById("game-options-button").addEventListener("click",()=>{this.applyMenuClickEven()})},closeMenuClickEvent:function(){document.getElementById("game-options-menu-close").addEventListener("click",()=>{this.applyMenuClickEven()})},applyMenuClickEven:function(){const e=document.getElementById("game-options-menu"),n=document.getElementsByClassName("difficulty-menu")[0],t=document.getElementById("game-options-button");e.classList.toggle("game-options-menu-visible"),n.classList.toggle("difficulty-menu-hide"),t.classList.toggle("difficulty-menu-hide")},checkboxClickEvent:function(){document.querySelectorAll(".checkbox").forEach(e=>{e.addEventListener("click",()=>{this.applyCheckbox(e.value)})})},applyCheckbox:function(e){return this.checkboxFunc(e)},checkboxFunc:function(e){switch(e){case"sound":return this.checkboxSound();case"fullscreen":return this.checkboxFullscreen()}},checkboxSound:function(){G.sound=1!=G.sound;const e=document.getElementById("soundtrack");e.muted=!e.muted},checkboxFullscreen:function(){G.fullscreen=1!=G.fullscreen,null!=document.webkitCurrentFullScreenElement?document.webkitCancelFullScreen():document.documentElement.webkitRequestFullScreen()},setSettings:function(){document.getElementById("game-options-menu-sound").checked=G.sound,document.getElementById("game-options-menu-fullscreen").checked=G.fullscreen},render:function(){document.getElementById("container").insertAdjacentHTML("beforeend",this.open_menu_button()+this.main_menu()),this.setSettings(),this.openMenuClickEvent(),this.closeMenuClickEvent(),this.checkboxClickEvent()}};var Q=()=>{d.fromBlack(),c.play(),I("planet.mp4","loop"),W(),J.render()};t(13);const U=e=>X(e),X=e=>{switch(e){case"sound":return Z();case"screen":return ee();case"hide":return ne()}},Z=()=>{document.getElementsByClassName("intro-video-menu-box")[0].classList.toggle("intro-video-menu-box-active");const e=document.getElementById("full-screen-video");G.sound=1!=G.sound;const n=document.getElementById("soundtrack");n.muted=!n.muted,e.muted?e.muted=!1:e.muted=!0},ee=()=>{document.getElementsByClassName("intro-video-menu-box")[1].classList.toggle("intro-video-menu-box-active"),G.fullscreen=1!=G.fullscreen,null!=document.webkitCurrentFullScreenElement?document.webkitCancelFullScreen():document.documentElement.webkitRequestFullScreen()},ne=()=>{const e=document.getElementById("intro-video-menu");e.classList.add("intro-video-menu-hide-button"),e.addEventListener("animationend",()=>{e.remove()})};var te=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",'<div id="intro-video-menu">\n                <button class="intro-video-menu-box" value="sound">Sound</button>\n                <button class="intro-video-menu-box" value="screen">Full Screen</button>\n                <button class="intro-video-menu-box" value="hide">Hide</button>\n            </div><div id="intro-video-menu-skip">\n                Press ESC to skip\n            </div>'),document.querySelectorAll(".intro-video-menu-box").forEach(e=>{e.addEventListener("click",()=>{U(e.value)})}),(()=>{const e=document.getElementById("intro-video-menu"),n=document.getElementById("intro-video-menu-skip");e.addEventListener("animationend",()=>{e.remove(),n.remove()})})()};var oe={fullscreen:function(){document.body.addEventListener("keydown",{handleEvent:function(e){if(("f"==e.key||70==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault(),G.fullscreen=1!=G.fullscreen;const n=document.getElementById("game-options-menu-fullscreen");n&&(n.checked=!n.checked),null!=document.webkitCurrentFullScreenElement?document.webkitCancelFullScreen():document.documentElement.webkitRequestFullScreen()}}})},sound:function(){document.body.addEventListener("keydown",{handleEvent:function(e){if(("m"==e.key||77==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault();const n=document.getElementById("full-screen-video"),t=document.getElementById("soundtrack"),o=document.getElementById("game-options-menu-sound");t.muted=!t.muted,G.sound=1!=G.sound,n&&(n.muted=1!=n.muted),o&&(o.checked=!o.checked)}}})},introVideoSkipButton:function(){document.body.addEventListener("keydown",{handleEvent:function(e){if(("Escape"==e.key||"Esc"==e.key||27==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault();const n=document.getElementById("full-screen-video"),t=document.getElementById("intro-video-menu"),o=document.getElementById("intro-video-menu-skip");void 0!==t&&null!=t?(n.remove(),t.remove(),o.remove(),Q(),document.body.removeEventListener(e.type,this,!1)):document.body.removeEventListener(e.type,this,!1)}}})},applyHotKeys:function(){this.introVideoSkipButton(),this.sound(),this.fullscreen()}};I("kottans-intro.mp4",""),te(),oe.applyHotKeys(),c.create("starting-page.mp3",!0);const de=document.getElementById("full-screen-video");de.onended=function(e){de.remove(),Q()}}]);