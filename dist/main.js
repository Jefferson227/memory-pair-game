!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);const o=document.getElementById("container");var i=()=>void 0===window.orientation||(o.insertAdjacentHTML("afterend",'<div id="device-not-supported">\n                <p>Mobile screens not supported. Please, open the game on a large screen.</p>\n            </div>'),!1);n(2),n(3);const c=document.getElementById("container");var d={blackScreenIn:'<div id="black-screen-in"></div>',blackScreenOut:'<div id="black-screen-out"></div>',toBlack:function(){c.insertAdjacentHTML("afterend",this.blackScreenIn),this.removeToBlack()},fromBlack:function(){c.insertAdjacentHTML("afterend",this.blackScreenOut),this.removeFromBlack()},removeToBlack:function(){const e=document.getElementById("black-screen-in");e.addEventListener("animationend",()=>{e.remove()})},removeFromBlack:function(){const e=document.getElementById("black-screen-out");e.addEventListener("animationend",()=>{e.remove()})}};var s={sound:!1,fullscreen:!1,token:"",gameScore:{victory:!1,time:0,numberOfAttempts:0}};var a={create:function(e,t=!1,n=!0){let o=new Audio;o.id="soundtrack",o.src=`static/media-files/sound/${e}`,o.style.display="none",o.autoplay=!0,o.loop=t,o.muted=n,document.getElementById("container").appendChild(o),o.onended=()=>{o.remove()},o.pause()},play:function(){document.getElementById("soundtrack").load()},change:function(e){document.getElementById("soundtrack").src=`static/media-files/sound/${e}`},effect:function(e){let t=new Audio(`static/media-files/sound/${e}`);t.muted=!s.sound,t.play()}};n(4);const r=document.getElementById("container");var l=()=>r.insertAdjacentHTML("beforeend",'<div id="game-scene"></div>');n(5),n(6),n(7);const u=()=>'<div class="blood-image"></div>',m=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",(()=>`<div id="blood">${u()}</div>`)())},g=()=>'<div class="cage-airi"></div>',v=()=>'<div class="cage-broken-chain"></div>',f=()=>{a.effect("chain-down-game-over.mp3"),y(),p()},y=()=>{document.querySelector("#cage").style.setProperty("--cage-margin-top",0)},p=()=>{const e=document.querySelector("#cage"),t=document.querySelector(".cage-airi");e.addEventListener("transitionend",{handleEvent:function(n){t.classList.add("cage-airi-game-over"),a.effect("girl-scream.mp3"),e.removeEventListener(n.type,this,!1),t.addEventListener("transitionend",()=>{a.effect("body-hit-ground.mp3"),document.getElementById("blood").classList.add("blood-show")})}})},b=()=>{const e=document.querySelector(".battleground-stats-airi");let t=parseInt(e.style.getPropertyValue("--stats-airi-health"));t<=20&&t>0&&a.effect("heartbeat.mp3")},E=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",(()=>`<div id="cage">${g()+v()}</div>`)())};let h={airi:100,you:101};const k=document.getElementById("container"),B=()=>`<div class="battleground-stats-image">${I()+L()}</div>`,I=()=>'<div class="battleground-stats-airi"></div>',L=()=>'<div class="battleground-stats-player"></div>',w=()=>{const e=document.querySelector(".battleground-stats-airi");h.airi=h.airi-20,e.style.setProperty("--stats-airi-health",h.airi+"%"),(()=>{const e=document.querySelector("#cage");let t=parseInt(e.style.getPropertyValue("--cage-margin-top"));e.style.setProperty("--cage-margin-top",t+26+"px"),a.effect("chain-down.mp3"),b()})()},S=()=>{k.insertAdjacentHTML("beforeend",(()=>`<div id="battleground-stats">${B()}</div>`)())};n(8),n(9);var x=["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif","13.gif","14.gif","15.gif","16.gif","17.gif","18.gif","19.gif","20.gif","21.gif","22.gif"];let T=[],M=[];class C{constructor(e,t,n){this.id=C.id(),this.x=e,this.y=t,this.image=n}static id(){return T.length+1}}const $=e=>e.sort(()=>Math.random()-.5),j=()=>x.slice(0,6),A=()=>($(x),j(),(()=>{let e=j();for(let t=e.length-1;t>=0;t--)e.push(e[t]);M=e})(),$(M),(()=>{let e=75,t=90;for(let n=0;n<12;n++)6===n&&(e=75),n>=6&&(t=210),e+=120,T.push(new C(e,t,M[n]))})(),(()=>{let e="";for(let t=0;t<12;t++)e+=`<div class="card" id="${T[t].id}">\n                      <div class="card-content" style="margin-left: ${T[t].x}px; margin-top: ${T[t].y}px">\n                        <div class="card-front"></div>\n                        <div class="card-back" style="background-image: url(static/images/card-images/${T[t].image})"></div>\n                      </div>\n                    </div>`;return e})()),H=document.getElementById("container"),q=()=>`<div class="battleground-board-image">${O()}</div>`,O=()=>`<div class="battleground-board-field">${A()}</div>`;var F=()=>{H.insertAdjacentHTML("beforeend",(()=>`<div id="battleground-board" class="battleground-board-disable">${q()}</div>`)())};n(10);let P={x:null,y:null};const N=e=>{const t=document.querySelector(".sentry-gun");let n=t.getBoundingClientRect(),o=n.left+n.width/2,i=n.top+n.height/2;t.style.transform="rotate("+(Math.atan2(e.clientY-i,e.clientX-o)-1.57)+"rad)",D(e)},D=e=>{P.x=e.clientX,P.y=e.clientY},Y=()=>{document.getElementById("game-scene").insertAdjacentHTML("afterend",'<div class="sentry-gun"></div>'),window.addEventListener("mousemove",N),(()=>{const e=document.querySelector(".sentry-gun");setTimeout(()=>{console.log("fire"),e.insertAdjacentHTML("beforeend",'<div class="fire-ball"></div>')},500)})()};n(11),n(12),n(13),n(14);const _=document.getElementById("container"),R={text:"Well Done!",style:"score-page-victory"},z={text:"Game Over",style:"score-page-defeat"};var V=e=>{_.insertAdjacentHTML("beforeend",(e=>`<div id="score-page" class="${e.style}">\n                <div class="score-page-congratulation">${e.text}</div>\n            </div>`)((e=>{switch(e){case"victory":return R;case"defeat":return z}})(e)));const t=document.getElementById("score-page");t.addEventListener("animationend",()=>{t.classList.add("score-page-rebound")})};n(15),n(16);const G=(e,t="")=>{const n=document.getElementById("full-screen-video");n.src=`static/media-files/video/${e}`,n.loop="loop"==t,n.play()};n(17);const J="https://memory-pair-game-back.herokuapp.com",K=async()=>{const e=`${J}/scores`;let t={status:null,token:null};try{const n=await fetch(e,{method:"GET",mode:"cors",headers:{Authorization:`Bearer ${s.token}`}});if(!n.ok)throw console.log(n),t.status=n.status,t.data=n.data,new Error(n);return(await n).json()}catch(e){return console.log(e),t}},X=async()=>{document.getElementById("container").insertAdjacentHTML("afterend",(e=>`<div id="server-operations-login">${e}</div>`)("Connecting to server..."));let e=await(async()=>{const e=`${J}/auth/signin`,t={username:"SuperApp",password:"megaPassword256"};let n={status:null,token:null};try{const o=await fetch(e,{method:"POST",mode:"cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(!o.ok)throw console.log(o),n.status=o.status,n.data=o.data,new Error(o);return(await o).json()}catch(e){return console.log(e),n}})();s.token=e.accessToken,setTimeout(()=>{document.getElementById("server-operations-login").remove()},1e3)};let W=[],Q="";const U=(e,t)=>{if("string"==typeof e){if(e<t)return 1;if(e>t)return-1}return t-e},Z=e=>{return'<div class="score">\n                        <button class="score-title" name="name">Name</button>\n                        <button class="score-title" name="time">Time</button>\n                        <button class="score-title" name="status">Difficulty</button>\n                        <button class="score-title" name="points">Points</button>\n                     </div><div class="score">'+e.map(e=>(e=>{const{name:t,time:n,status:o,points:i}=e;return` <div class="score-result">${t}</div>\n             <div class="score-result">${n} sec</div>\n             <div class="score-result">${o}</div>\n             <div class="score-result">${i}</div>`})(e)).join("")+"</div>"},ee=()=>{document.querySelector(".score").addEventListener("click",e=>{const t=e.target.name;switch(t){case"name":case"time":case"status":case"points":te(t)}document.querySelectorAll(".score").forEach(e=>e.remove()),ne(W)})},te=e=>{e===Q?(Q="",W.sort((t,n)=>U(t[e],n[e])),console.log(W)):(Q=e,W.sort((t,n)=>((e,t)=>{if(console.log(typeof e),"string"==typeof e){if(e<t)return-1;if(e>t)return 1}return e-t})(t[e],n[e])),console.log(W))},ne=e=>{const t=document.getElementById("score-table-wrapper");let n=Z(e);t.insertAdjacentHTML("beforeend",n),ee()},oe=()=>{const e=document.getElementById("submit-name"),t=document.getElementById("user-input");t.focus(),e.addEventListener("click",async()=>{if(""!==t.value){let e=await(async e=>{const t=`${J}/scores`;let n={status:null,token:null};try{const o=await fetch(t,{method:"POST",mode:"cors",body:JSON.stringify(e),headers:{Authorization:`Bearer ${s.token}`,"Content-Type":"application/json"}});if(!o.ok)throw console.log(o),n.status=o.status,n.data=o.data,new Error(o);return(await o).json()}catch(e){return console.log(e),n}})(ie(t.value));console.log(e);let n=await K();(W=n).sort((e,t)=>U(e.id,t.id)),console.log(n),document.getElementById("submit-wrapper").remove(),ne(W),ee(),ce()}})},ie=e=>({name:e,time:60-parseInt(s.gameScore.time),points:1e3*parseInt(s.gameScore.time)-100*s.gameScore.numberOfAttempts}),ce=()=>{const e=document.getElementById("score-table-wrapper"),t=document.getElementById("play-again");e.classList.add("score-table-visible"),t.classList.add("score-table-visible")},de=()=>{s.gameScore.numberOfAttempts=0,d.toBlack();const e=document.getElementById("black-screen-in"),t=document.getElementById("soundtrack");e.addEventListener("animationend",()=>{se(),t.pause(),G("kottans-end.mp4"),document.getElementById("full-screen-video").onended=function(e){Ne(),a.change("starting-page.mp3")}})},se=()=>{document.getElementById("game-scene").remove(),document.querySelector(".sentry-gun").remove(),document.getElementById("cage").remove(),document.getElementById("battleground-stats").remove(),document.getElementById("battleground-board").remove(),document.getElementById("blood").remove(),document.getElementById("score-page").remove()};var ae=()=>{console.log(s);const e=document.getElementById("score-page"),t=document.querySelector(".score-page-congratulation");e.insertAdjacentHTML("beforeend",'<div id="score-table-wrapper">\n         <buttom id="play-again">Play again</button>');const n=document.getElementById("score-table-wrapper"),o=document.getElementById("play-again");t.addEventListener("animationend",async()=>{if(s.gameScore.victory)e.insertAdjacentHTML("beforeend",'<div id="submit-wrapper"> \n                <div id="input-wrapper">    \n                    <input placeholder="Your name..." type="text" name="userName" id="user-input">\n                    <div class="buttons-wrapper">\n                        <button id="submit-name">Submit</button>\n                        <button id="submit-cancel">Cancel</button>\n                    </div>\n                </div>\n            </div>'),oe(),document.getElementById("submit-cancel").addEventListener("click",async()=>{console.log("sumbit cancel"),document.getElementById("submit-wrapper").remove();let e=await K();(W=e).sort((e,t)=>U(e.id,t.id)),console.log(e),ne(W),ee(),ce()});else{let e=await K();(W=e).sort((e,t)=>U(e.id,t.id)),console.log(e);let t=Z(e);n.insertAdjacentHTML("beforeend",t),ee(),n.classList.add("score-table-visible"),o.classList.add("score-table-visible")}}),document.getElementById("play-again").addEventListener("click",()=>{de()})};var re=e=>{a.change("score-page.mp3"),V(e),ae()};let le,ue=60;const me=()=>{clearInterval(le)},ge=()=>{document.getElementById("battleground-stats").insertAdjacentHTML("beforeend",(()=>`<div id="timer">${ue}</div>`)()),le=setInterval(()=>{ue-=1,document.getElementById("timer").innerHTML=ue,0===ue&&(me(),f(),setTimeout(()=>{re("defeat")},3e3),ue=60)},1e3)};let ve=[],fe=0,ye=2,pe=0;const be=e=>{e.firstElementChild.classList.add("card-content-show"),ve.push({id:e.attributes.id.value,img:T[e.attributes.id.value-1].image}),Ee()},Ee=()=>{null!=ve[1]&&(ve[0].img!==ve[1].img?(ke(),((e,t)=>{e&&w(),t&&playerReduceLife()})(he()),"dead"===(()=>{if(0===h.airi||0===h.player)return"dead"})()&&Ie("defeat")):ve[0].img===ve[1].img&&Be(),++pe,console.log(pe))},he=()=>!0,ke=()=>{const e=document.getElementById(ve[0].id),t=document.getElementById(ve[1].id);ve=[],setTimeout(()=>{e.firstElementChild.classList.remove("card-content-show"),t.firstElementChild.classList.remove("card-content-show")},500)},Be=()=>{const e=document.getElementById(ve[0].id),t=document.getElementById(ve[1].id);fe+=1,ve=[],setTimeout(()=>{6==fe&&Ie("victory"),e.firstElementChild.classList.add("card-content-correct"),t.firstElementChild.classList.add("card-content-correct"),e.firstElementChild.classList.remove("card-content-show"),t.firstElementChild.classList.remove("card-content-show"),e.firstElementChild.addEventListener("transitionend",()=>{e.firstElementChild.classList.add("card-content-correct-grayscale"),t.firstElementChild.classList.add("card-content-correct-grayscale")})},500)},Ie=e=>{const t=document.querySelector("#battleground-board");switch(e){case"victory":Le();break;case"defeat":we()}me(),s.gameScore.time=ue,s.gameScore.numberOfAttempts=pe,t.classList.add("battleground-board-disable"),Te(),a.effect("slide-fall.mp3")},Le=()=>{xe("victory"),s.gameScore.victory=!0},we=()=>{f(),setTimeout(()=>{xe("defeat"),s.gameScore.victory=!1},3e3)},Se=()=>{const e=document.querySelectorAll(".card-content"),t=document.getElementById("battleground-board");e.forEach(e=>{e.classList.add("card-content-show")}),setTimeout(()=>{t.classList.remove("battleground-board-disable"),document.querySelector(".battleground-board-field").addEventListener("click",e=>{const t=e.target.closest(".card");null!==t&&be(t)}),e.forEach(e=>{e.classList.remove("card-content-show")})},2e3)},xe=e=>{setTimeout(()=>{re(e)},500)},Te=()=>{(()=>T=[])(),h.airi=100,h.player=101,ve=[],fe=0,ye=2,pe=0,ue=60};var Me=()=>{setTimeout(()=>{Se()},2e3)};const Ce=document.getElementById("container");var $e=()=>{Ce.insertAdjacentHTML("beforeend",'<div id="countdown">3</div>'),(()=>{const e=document.getElementById("countdown");let t=setInterval(()=>{1==e.innerHTML?(clearInterval(t),e.remove(),Me()):e.innerHTML-=1},1e3)})(),setTimeout(()=>{ge()},3e3)};const je=()=>{const e=document.getElementById("dialog"),t=document.getElementById("battleground-board");e.classList.add("dialog-hide"),e.addEventListener("transitionend",()=>{e.remove(),document.querySelector("#cage").style.setProperty("--cage-margin-top","-220px"),a.effect("chain-down.mp3"),$e(),setTimeout(()=>{a.effect("board-fall.mp3"),t.classList.add("battleground-board-show"),t.addEventListener("transitionend",{handleEvent:function(e){a.effect("board-hit-floor.mp3"),t.classList.add("battleground-board-rebound"),t.removeEventListener(e.type,this,!1)}})},3e3)})};var Ae=(e,t,n)=>{const o=document.getElementById("game-scene"),i=((e,t,n)=>`<div id="dialog">${e}${t}${n}</div>`)((e=>`<div class="dialog-box-avatar" style="background-image: url(static/images/${e})"></div>`)(e),((e,t)=>`<div class="dialog-box">${e}${t}</div>`)((e=>`<div class="dialog-box-avatar-name">${e}</div>`)(t),(e=>`<div class="dialog-box-text">${e}</div>`)(n)),'<div class="dialog-box-button">ok</div>');o.insertAdjacentHTML("beforeend",i),document.querySelector(".dialog-box-button").addEventListener("click",()=>{je()})};var He=()=>{d.fromBlack(),a.change("main-page.mp3"),l(),F(),Y(),E(),S(),m();Ae("captain-sad.png","capitan","Hey, sergeant! You are in the alpha version of the game,<br>so you can't save a princess or lost your life.<br>She will wait for you in next update.")};const qe=e=>{Oe();const t=document.getElementById("black-screen-in"),n=document.getElementById("full-screen-video");return n.classList.add("full-screen-video-zoom"),t.addEventListener("animationend",()=>{n.classList.remove("full-screen-video-zoom"),document.getElementById("full-screen-video").pause(),document.querySelector(".difficulty-menu").remove(),document.getElementById("game-options-button").remove(),document.getElementById("game-options-menu").remove(),He()})},Oe=()=>{document.querySelector(".difficulty-menu").classList.add("difficulty-menu-transition"),d.toBlack(),a.effect("planet-transition.mp3")};var Fe=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",'<div class="difficulty-menu">\n                <button class="difficulty-name difficulty-disabled" value="easy">Easy</button>\n                <button class="difficulty-name" value="normal">Normal</button>\n                <button class="difficulty-name difficulty-disabled" value="hard">Hard</button>\n            </div>'),document.querySelector(".difficulty-menu").addEventListener("click",e=>{switch(e.target.value){case"easy":case"normal":case"hard":qe(e.target.value)}})};n(18);var Pe={openMenuButton:function(){return'<button id="game-options-button">Game options</button>'},mainMenu:function(){return'<div id="game-options-menu">\n                    <div class="game-options-checkboxs">\n                        <h3>Options</h3>\n                        <label class="game-options-label">\n                            <input type="checkbox" class="checkbox" id="game-options-menu-sound" value="sound" checked>\n                            <span>Sound</span>\n                        </label>\n                        <label class="game-options-label">\n                            <input type="checkbox" class="checkbox" id="game-options-menu-fullscreen" value="fullscreen" checked>\n                            Fullscreen\n                        </label>\n                    </div>\n                    <div class="game-options-info">\n                        <h3>Hotkeys</h3>\n                        <p>M - Sound off/on</p>\n                        <p>F - Fullscreen off/on</p>\n                    </div>\n                    <button id="game-options-menu-close">Close<button>\n                </div>'},openMenuClickEvent:function(){document.getElementById("game-options-button").addEventListener("click",()=>{this.applyMenuClickEven()})},closeMenuClickEvent:function(){document.getElementById("game-options-menu-close").addEventListener("click",()=>{this.applyMenuClickEven()})},applyMenuClickEven:function(){const e=document.getElementById("game-options-menu"),t=document.querySelector(".difficulty-menu"),n=document.getElementById("game-options-button");e.classList.toggle("game-options-menu-visible"),t.classList.toggle("difficulty-menu-hide"),n.classList.toggle("difficulty-menu-hide")},checkboxClickEvent:function(){document.querySelectorAll(".checkbox").forEach(e=>{e.addEventListener("click",()=>{this.applyCheckbox(e.value)})})},applyCheckbox:function(e){return this.checkboxFunc(e)},checkboxFunc:function(e){switch(e){case"sound":return this.checkboxSound();case"fullscreen":return this.checkboxFullscreen()}},checkboxSound:function(){s.sound=!s.sound;const e=document.getElementById("soundtrack"),t=document.getElementById("full-screen-video");e.muted=!e.muted,t.muted=!t.muted},checkboxFullscreen:function(){const e=null==document.webkitCurrentFullScreenElement;s.fullscreen=!s.fullscreen,e?document.documentElement.webkitRequestFullScreen():document.webkitCancelFullScreen()},setsettings:function(){document.getElementById("game-options-menu-sound").checked=s.sound,document.getElementById("game-options-menu-fullscreen").checked=s.fullscreen},render:function(){document.getElementById("container").insertAdjacentHTML("beforeend",this.openMenuButton()+this.mainMenu()),this.setsettings(),this.openMenuClickEvent(),this.closeMenuClickEvent(),this.checkboxClickEvent()}};var Ne=()=>{d.fromBlack(),a.play(),G("planet.mp4","loop"),Fe(),Pe.render(),X()};var De={fullscreen:function(){document.body.addEventListener("keydown",e=>{const t=null==document.webkitCurrentFullScreenElement;if(("f"==e.key||70==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault(),s.fullscreen=!s.fullscreen;const n=document.getElementById("game-options-menu-fullscreen");n&&(n.checked=!n.checked),t?document.documentElement.webkitRequestFullScreen():document.webkitCancelFullScreen()}})},sound:function(){document.body.addEventListener("keydown",e=>{if(("m"==e.key||77==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault();const t=document.getElementById("full-screen-video"),n=document.getElementById("soundtrack"),o=document.getElementById("game-options-menu-sound");n.muted=!n.muted,s.sound=!s.sound,t&&(t.muted=!t.muted),o&&(o.checked=!o.checked)}})},introVideoSkipButton:function(){document.body.addEventListener("keydown",{handleEvent:function(e){if(("Escape"==e.key||"Esc"==e.key||27==e.keyCode)&&"BODY"==e.target.nodeName){e.preventDefault();const t=document.getElementById("intro-video-menu"),n=document.getElementById("intro-video-menu-skip");void 0!==t&&null!=t?(t.remove(),n.remove(),Ne(),document.body.removeEventListener(e.type,this,!1)):document.body.removeEventListener(e.type,this,!1)}}})},applyHotKeys:function(){this.introVideoSkipButton(),this.sound(),this.fullscreen()}};n(19);const Ye=e=>_e(e),_e=e=>{switch(e){case"sound":return Re();case"screen":return ze();case"hide":return Ve()}},Re=()=>{document.querySelector(".intro-video-menu-box").classList.toggle("intro-video-menu-box-active");const e=document.getElementById("full-screen-video");s.sound=!s.sound;const t=document.getElementById("soundtrack");t.muted=!t.muted,e.muted?e.muted=!1:e.muted=!0},ze=()=>{const e=document.getElementsByClassName("intro-video-menu-box")[1],t=null==document.webkitCurrentFullScreenElement;e.classList.toggle("intro-video-menu-box-active"),s.fullscreen=!s.fullscreen,t?document.documentElement.webkitRequestFullScreen():document.webkitCancelFullScreen()},Ve=()=>{const e=document.getElementById("intro-video-menu");e.classList.add("intro-video-menu-hide-button"),e.addEventListener("animationend",()=>{e.remove()})};var Ge=()=>{document.getElementById("container").insertAdjacentHTML("beforeend",'<div id="intro-video-menu">\n                <button class="intro-video-menu-box" value="sound">Sound</button>\n                <button class="intro-video-menu-box" value="screen">Full Screen</button>\n                <button class="intro-video-menu-box" value="hide">Hide</button>\n            </div><div id="intro-video-menu-skip">\n                Press ESC to skip\n            </div>'),document.querySelectorAll(".intro-video-menu-box").forEach(e=>{e.addEventListener("click",()=>{Ye(e.value)})}),(()=>{const e=document.getElementById("intro-video-menu"),t=document.getElementById("intro-video-menu-skip");e.addEventListener("animationend",()=>{e.remove(),t.remove()})})()};if(i()){((e,t="")=>{document.getElementById("container").insertAdjacentHTML("beforeend",((e,t)=>`<video autoplay muted ${t} id="full-screen-video">\n                <source src="static/media-files/video/${e}" type="video/mp4">\n            </video>`)(e,t))})("kottans-intro.mp4",""),Ge(),De.applyHotKeys(),a.create("starting-page.mp3",!0),document.getElementById("full-screen-video").onended=function(e){Ne()}}}]);