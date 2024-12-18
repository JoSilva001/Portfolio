import './polyfills.server.mjs';
import{A,C as H,D as u,E as D,F as B,G as T,H as M,I as _,J as f,K as m,L as R,O as F,S as N,V as L,a as y,b as g,c as x,d as k,e as j,f as v,g as E,h as d,i as P,j as C,k as n,l as t,m as p,n as l,o as S,p as I,q as z,r as a,s as b,t as O}from"./chunk-IYFK6MOD.mjs";var Y=(()=>{let o=class o{constructor(){this.title="joPortfolio"}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=g({type:o,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(e,i){e&1&&p(0,"router-outlet")},dependencies:[N]});let c=o;return c})();var q=(()=>{class c{static \u0275fac=function(r){return new(r||c)};static \u0275mod=x({type:c});static \u0275inj=y({imports:[u]})}return c})();var U=["animatedContainer"],h=c=>({active:c}),G=(()=>{let o=class o{constructor(r,e){this.viewportScroller=r,this.elRef=e,this.currentSection="inicio"}irParaSecao(r){let e=document.getElementById(r);if(e){let s=e.getBoundingClientRect().top+window.pageYOffset+-50;window.scrollTo({top:s,behavior:"smooth"})}}onScroll(){document.querySelectorAll("section").forEach(e=>{let i=e.getBoundingClientRect(),s=e.getAttribute("id");i.top<window.innerHeight&&i.bottom>0&&(this.currentSection=s||"")})}};o.\u0275fac=function(e){return new(e||o)(P(D),P(v))},o.\u0275cmp=g({type:o,selectors:[["app-home-navigation-bar"]],viewQuery:function(e,i){if(e&1&&S(U,5),e&2){let s;I(s=z())&&(i.animatedContainer=s.first)}},hostBindings:function(e,i){e&1&&l("scroll",function(){return i.onScroll()},!1,E)},standalone:!0,features:[b],decls:15,vars:12,consts:[[1,"navegacao"],[3,"click","ngClass"]],template:function(e,i){e&1&&(n(0,"section",0)(1,"nav")(2,"ul")(3,"li")(4,"a",1),l("click",function(){return i.irParaSecao("inicio")}),a(5,"IN\xCDCIO"),t()(),n(6,"li")(7,"a",1),l("click",function(){return i.irParaSecao("sobre")}),a(8,"SOBRE"),t()(),n(9,"li")(10,"a",1),l("click",function(){return i.irParaSecao("projetos")}),a(11,"PROJETOS"),t()(),n(12,"li")(13,"a",1),l("click",function(){return i.irParaSecao("contato")}),a(14,"CONTATO"),t()()()()()),e&2&&(d(4),C("ngClass",O(4,h,i.currentSection==="inicio")),d(3),C("ngClass",O(6,h,i.currentSection==="sobre")),d(3),C("ngClass",O(8,h,i.currentSection==="projetos")),d(3),C("ngClass",O(10,h,i.currentSection==="contato")))},dependencies:[u,H],styles:[".navegacao[_ngcontent-%COMP%]{position:sticky;top:0;z-index:3}.navegacao[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;background:#272727;justify-content:flex-end;padding-right:4%;height:4rem;gap:2%;align-items:center;font-family:Montserrat,sans-serif;color:#fff;cursor:pointer;list-style-type:none;font-size:1.1em}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:all .2;text-decoration:none;color:#000}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;transition:.2s;color:#ff4d5a}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transition:.5s ease;color:#ff4d5a}@media (max-width: 540px){.navegacao[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:space-around;font-size:.9em}}"]});let c=o;return c})();var V=(()=>{let o=class o{irParaSecao(r){let e=document.getElementById(r);if(e){let s=e.getBoundingClientRect().top+window.pageYOffset+-50;window.scrollTo({top:s,behavior:"smooth"})}}redirect(r){r.target.className=="pi pi-github"?window.open("https://github.com/JoSilva001"):window.open("https://www.linkedin.com/in/josesilvacode/")}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=g({type:o,selectors:[["app-home"]],standalone:!0,features:[b],decls:58,vars:0,consts:[["id","inicio"],["id","inicio-conteudo"],[3,"click"],[1,"pi","pi-arrow-down"],["id","sobre"],[1,"titulo"],["id","sobre-conteudo"],["id","apresentacao"],["version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 482.9 482.9",0,"xml","space","preserve","height","40%","stroke","rgb(26, 26, 26)","stroke-width","16",2,"enable-background","new 0 0 482.9 482.9"],["fill","url(#gradient-1)","d",`M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5
                    c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6
                    c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z
                     M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4
                    c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0
                    c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z`],["fill","url(#gradient-2)","d",`M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3
                    c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7
                    c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41
                    c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56
                    c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8
                    c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3
                    c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3
                    C447,415.5,446.9,388.8,446.8,383.6z`],["id","gradient-1","x1","0","y1","0","x2","80%","y2","80%"],["stop-color","rgb(81,162,233)","offset","0%"],["stop-color","rgb(168,120,162)","offset","100%"],["id","gradient-2","x1","20%","y1","20%","x2","100%","y2","100%"],["stop-color","rgb(168,120,162)","offset","0%"],["stop-color","rgb(255,77,90)","offset","100%"],["id","tecnologias"],["id","projetos"],["id","titulo-projetos"],[1,"projeto-1"],["src","./assets/progresso.png",1,"imgProjetos",2,"width","60%"],["id","texto-1"],[1,"projeto-2"],[1,"projeto-3"],["id","contato"],[1,"pi","pi-github",2,"font-size","2rem"],[1,"pi","pi-linkedin",2,"font-size","2rem"]],template:function(e,i){e&1&&(n(0,"main")(1,"section",0)(2,"div",1)(3,"h1"),a(4,"Ol\xE1, eu sou "),n(5,"span"),a(6,"Jos\xE9"),t()(),n(7,"h2"),a(8," desenvolvedor Front end."),t(),n(9,"button",2),l("click",function(){return i.irParaSecao("sobre")}),a(10,"Meu trabalho "),p(11,"i",3),t()(),p(12,"div"),t(),p(13,"app-home-navigation-bar"),n(14,"section",4)(15,"div",5)(16,"h1"),a(17,"SOBRE MIM"),t()(),n(18,"div",6)(19,"div",7),k(),n(20,"svg",8)(21,"g"),p(22,"path",9)(23,"path",10),t(),n(24,"defs")(25,"linearGradient",11),p(26,"stop",12)(27,"stop",13),t(),n(28,"linearGradient",14),p(29,"stop",15)(30,"stop",16),t()()(),j(),n(31,"p"),a(32,"Ter a possibilidade de ajudar pessoas com interfaces amig\xE1veis e intuitivas me cativa, a combina\xE7\xE3o \xFAnica de criatividade, l\xF3gica, tecnologia e nunca ficar sem coisas novas para descobrir, impulsiona o meu entusiasmo e paix\xE3o pelo desenvolvimento web"),t()(),n(33,"div",17),p(34,"div"),t()()(),n(35,"section",18)(36,"div",19)(37,"h1"),a(38,"Projetos"),t()(),n(39,"div",20)(40,"article"),p(41,"img",21),n(42,"div",22),a(43,"meu primeiro projeto"),t()()(),n(44,"div",23)(45,"article"),p(46,"img",21),n(47,"div"),a(48,"meu segundo projeto"),t()()(),n(49,"div",24)(50,"article"),p(51,"img",21),n(52,"div"),a(53,"meu terceiro projeto"),t()()()(),n(54,"section",25)(55,"footer"),p(56,"i",26)(57,"i",27),t()()())},dependencies:[G,q],styles:['@font-face{font-family:primeicons;font-display:block;src:url("./media/primeicons-RSSEDYLY.eot");src:url("./media/primeicons-RSSEDYLY.eot?#iefix") format("embedded-opentype"),url("./media/primeicons-4GST5W3O.woff2") format("woff2"),url("./media/primeicons-P53SE5CV.woff") format("woff"),url("./media/primeicons-GEFHGEHP.ttf") format("truetype"),url("./media/primeicons-DHQU4SEP.svg?#primeicons") format("svg");font-weight:400;font-style:normal}.pi[_ngcontent-%COMP%]{font-family:primeicons;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pi[_ngcontent-%COMP%]:before{--webkit-backface-visibility:hidden;backface-visibility:hidden}.pi-fw[_ngcontent-%COMP%]{width:1.28571429em;text-align:center}.pi-spin[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_fa-spin 2s infinite linear;animation:_ngcontent-%COMP%_fa-spin 2s infinite linear}@media (prefers-reduced-motion: reduce){.pi-spin[_ngcontent-%COMP%]{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes _ngcontent-%COMP%_fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.pi-folder-plus[_ngcontent-%COMP%]:before{content:"\\ea05"}.pi-receipt[_ngcontent-%COMP%]:before{content:"\\ea06"}.pi-asterisk[_ngcontent-%COMP%]:before{content:"\\ea07"}.pi-face-smile[_ngcontent-%COMP%]:before{content:"\\ea08"}.pi-pinterest[_ngcontent-%COMP%]:before{content:"\\ea09"}.pi-expand[_ngcontent-%COMP%]:before{content:"\\ea0a"}.pi-pen-to-square[_ngcontent-%COMP%]:before{content:"\\ea0b"}.pi-wave-pulse[_ngcontent-%COMP%]:before{content:"\\ea0c"}.pi-turkish-lira[_ngcontent-%COMP%]:before{content:"\\ea0d"}.pi-spinner-dotted[_ngcontent-%COMP%]:before{content:"\\ea0e"}.pi-crown[_ngcontent-%COMP%]:before{content:"\\ea0f"}.pi-pause-circle[_ngcontent-%COMP%]:before{content:"\\ea10"}.pi-warehouse[_ngcontent-%COMP%]:before{content:"\\ea11"}.pi-objects-column[_ngcontent-%COMP%]:before{content:"\\ea12"}.pi-clipboard[_ngcontent-%COMP%]:before{content:"\\ea13"}.pi-play-circle[_ngcontent-%COMP%]:before{content:"\\ea14"}.pi-venus[_ngcontent-%COMP%]:before{content:"\\ea15"}.pi-cart-minus[_ngcontent-%COMP%]:before{content:"\\ea16"}.pi-file-plus[_ngcontent-%COMP%]:before{content:"\\ea17"}.pi-microchip[_ngcontent-%COMP%]:before{content:"\\ea18"}.pi-twitch[_ngcontent-%COMP%]:before{content:"\\ea19"}.pi-building-columns[_ngcontent-%COMP%]:before{content:"\\ea1a"}.pi-file-check[_ngcontent-%COMP%]:before{content:"\\ea1b"}.pi-microchip-ai[_ngcontent-%COMP%]:before{content:"\\ea1c"}.pi-trophy[_ngcontent-%COMP%]:before{content:"\\ea1d"}.pi-barcode[_ngcontent-%COMP%]:before{content:"\\ea1e"}.pi-file-arrow-up[_ngcontent-%COMP%]:before{content:"\\ea1f"}.pi-mars[_ngcontent-%COMP%]:before{content:"\\ea20"}.pi-tiktok[_ngcontent-%COMP%]:before{content:"\\ea21"}.pi-arrow-up-right-and-arrow-down-left-from-center[_ngcontent-%COMP%]:before{content:"\\ea22"}.pi-ethereum[_ngcontent-%COMP%]:before{content:"\\ea23"}.pi-list-check[_ngcontent-%COMP%]:before{content:"\\ea24"}.pi-thumbtack[_ngcontent-%COMP%]:before{content:"\\ea25"}.pi-arrow-down-left-and-arrow-up-right-to-center[_ngcontent-%COMP%]:before{content:"\\ea26"}.pi-equals[_ngcontent-%COMP%]:before{content:"\\ea27"}.pi-lightbulb[_ngcontent-%COMP%]:before{content:"\\ea28"}.pi-star-half[_ngcontent-%COMP%]:before{content:"\\ea29"}.pi-address-book[_ngcontent-%COMP%]:before{content:"\\ea2a"}.pi-chart-scatter[_ngcontent-%COMP%]:before{content:"\\ea2b"}.pi-indian-rupee[_ngcontent-%COMP%]:before{content:"\\ea2c"}.pi-star-half-fill[_ngcontent-%COMP%]:before{content:"\\ea2d"}.pi-cart-arrow-down[_ngcontent-%COMP%]:before{content:"\\ea2e"}.pi-calendar-clock[_ngcontent-%COMP%]:before{content:"\\ea2f"}.pi-sort-up-fill[_ngcontent-%COMP%]:before{content:"\\ea30"}.pi-sparkles[_ngcontent-%COMP%]:before{content:"\\ea31"}.pi-bullseye[_ngcontent-%COMP%]:before{content:"\\ea32"}.pi-sort-down-fill[_ngcontent-%COMP%]:before{content:"\\ea33"}.pi-graduation-cap[_ngcontent-%COMP%]:before{content:"\\ea34"}.pi-hammer[_ngcontent-%COMP%]:before{content:"\\ea35"}.pi-bell-slash[_ngcontent-%COMP%]:before{content:"\\ea36"}.pi-gauge[_ngcontent-%COMP%]:before{content:"\\ea37"}.pi-shop[_ngcontent-%COMP%]:before{content:"\\ea38"}.pi-headphones[_ngcontent-%COMP%]:before{content:"\\ea39"}.pi-eraser[_ngcontent-%COMP%]:before{content:"\\ea04"}.pi-stopwatch[_ngcontent-%COMP%]:before{content:"\\ea01"}.pi-verified[_ngcontent-%COMP%]:before{content:"\\ea02"}.pi-delete-left[_ngcontent-%COMP%]:before{content:"\\ea03"}.pi-hourglass[_ngcontent-%COMP%]:before{content:"\\e9fe"}.pi-truck[_ngcontent-%COMP%]:before{content:"\\ea00"}.pi-wrench[_ngcontent-%COMP%]:before{content:"\\e9ff"}.pi-microphone[_ngcontent-%COMP%]:before{content:"\\e9fa"}.pi-megaphone[_ngcontent-%COMP%]:before{content:"\\e9fb"}.pi-arrow-right-arrow-left[_ngcontent-%COMP%]:before{content:"\\e9fc"}.pi-bitcoin[_ngcontent-%COMP%]:before{content:"\\e9fd"}.pi-file-edit[_ngcontent-%COMP%]:before{content:"\\e9f6"}.pi-language[_ngcontent-%COMP%]:before{content:"\\e9f7"}.pi-file-export[_ngcontent-%COMP%]:before{content:"\\e9f8"}.pi-file-import[_ngcontent-%COMP%]:before{content:"\\e9f9"}.pi-file-word[_ngcontent-%COMP%]:before{content:"\\e9f1"}.pi-gift[_ngcontent-%COMP%]:before{content:"\\e9f2"}.pi-cart-plus[_ngcontent-%COMP%]:before{content:"\\e9f3"}.pi-thumbs-down-fill[_ngcontent-%COMP%]:before{content:"\\e9f4"}.pi-thumbs-up-fill[_ngcontent-%COMP%]:before{content:"\\e9f5"}.pi-arrows-alt[_ngcontent-%COMP%]:before{content:"\\e9f0"}.pi-calculator[_ngcontent-%COMP%]:before{content:"\\e9ef"}.pi-sort-alt-slash[_ngcontent-%COMP%]:before{content:"\\e9ee"}.pi-arrows-h[_ngcontent-%COMP%]:before{content:"\\e9ec"}.pi-arrows-v[_ngcontent-%COMP%]:before{content:"\\e9ed"}.pi-pound[_ngcontent-%COMP%]:before{content:"\\e9eb"}.pi-prime[_ngcontent-%COMP%]:before{content:"\\e9ea"}.pi-chart-pie[_ngcontent-%COMP%]:before{content:"\\e9e9"}.pi-reddit[_ngcontent-%COMP%]:before{content:"\\e9e8"}.pi-code[_ngcontent-%COMP%]:before{content:"\\e9e7"}.pi-sync[_ngcontent-%COMP%]:before{content:"\\e9e6"}.pi-shopping-bag[_ngcontent-%COMP%]:before{content:"\\e9e5"}.pi-server[_ngcontent-%COMP%]:before{content:"\\e9e4"}.pi-database[_ngcontent-%COMP%]:before{content:"\\e9e3"}.pi-hashtag[_ngcontent-%COMP%]:before{content:"\\e9e2"}.pi-bookmark-fill[_ngcontent-%COMP%]:before{content:"\\e9df"}.pi-filter-fill[_ngcontent-%COMP%]:before{content:"\\e9e0"}.pi-heart-fill[_ngcontent-%COMP%]:before{content:"\\e9e1"}.pi-flag-fill[_ngcontent-%COMP%]:before{content:"\\e9de"}.pi-circle[_ngcontent-%COMP%]:before{content:"\\e9dc"}.pi-circle-fill[_ngcontent-%COMP%]:before{content:"\\e9dd"}.pi-bolt[_ngcontent-%COMP%]:before{content:"\\e9db"}.pi-history[_ngcontent-%COMP%]:before{content:"\\e9da"}.pi-box[_ngcontent-%COMP%]:before{content:"\\e9d9"}.pi-at[_ngcontent-%COMP%]:before{content:"\\e9d8"}.pi-arrow-up-right[_ngcontent-%COMP%]:before{content:"\\e9d4"}.pi-arrow-up-left[_ngcontent-%COMP%]:before{content:"\\e9d5"}.pi-arrow-down-left[_ngcontent-%COMP%]:before{content:"\\e9d6"}.pi-arrow-down-right[_ngcontent-%COMP%]:before{content:"\\e9d7"}.pi-telegram[_ngcontent-%COMP%]:before{content:"\\e9d3"}.pi-stop-circle[_ngcontent-%COMP%]:before{content:"\\e9d2"}.pi-stop[_ngcontent-%COMP%]:before{content:"\\e9d1"}.pi-whatsapp[_ngcontent-%COMP%]:before{content:"\\e9d0"}.pi-building[_ngcontent-%COMP%]:before{content:"\\e9cf"}.pi-qrcode[_ngcontent-%COMP%]:before{content:"\\e9ce"}.pi-car[_ngcontent-%COMP%]:before{content:"\\e9cd"}.pi-instagram[_ngcontent-%COMP%]:before{content:"\\e9cc"}.pi-linkedin[_ngcontent-%COMP%]:before{content:"\\e9cb"}.pi-send[_ngcontent-%COMP%]:before{content:"\\e9ca"}.pi-slack[_ngcontent-%COMP%]:before{content:"\\e9c9"}.pi-sun[_ngcontent-%COMP%]:before{content:"\\e9c8"}.pi-moon[_ngcontent-%COMP%]:before{content:"\\e9c7"}.pi-vimeo[_ngcontent-%COMP%]:before{content:"\\e9c6"}.pi-youtube[_ngcontent-%COMP%]:before{content:"\\e9c5"}.pi-flag[_ngcontent-%COMP%]:before{content:"\\e9c4"}.pi-wallet[_ngcontent-%COMP%]:before{content:"\\e9c3"}.pi-map[_ngcontent-%COMP%]:before{content:"\\e9c2"}.pi-link[_ngcontent-%COMP%]:before{content:"\\e9c1"}.pi-credit-card[_ngcontent-%COMP%]:before{content:"\\e9bf"}.pi-discord[_ngcontent-%COMP%]:before{content:"\\e9c0"}.pi-percentage[_ngcontent-%COMP%]:before{content:"\\e9be"}.pi-euro[_ngcontent-%COMP%]:before{content:"\\e9bd"}.pi-book[_ngcontent-%COMP%]:before{content:"\\e9ba"}.pi-shield[_ngcontent-%COMP%]:before{content:"\\e9b9"}.pi-paypal[_ngcontent-%COMP%]:before{content:"\\e9bb"}.pi-amazon[_ngcontent-%COMP%]:before{content:"\\e9bc"}.pi-phone[_ngcontent-%COMP%]:before{content:"\\e9b8"}.pi-filter-slash[_ngcontent-%COMP%]:before{content:"\\e9b7"}.pi-facebook[_ngcontent-%COMP%]:before{content:"\\e9b4"}.pi-github[_ngcontent-%COMP%]:before{content:"\\e9b5"}.pi-twitter[_ngcontent-%COMP%]:before{content:"\\e9b6"}.pi-step-backward-alt[_ngcontent-%COMP%]:before{content:"\\e9ac"}.pi-step-forward-alt[_ngcontent-%COMP%]:before{content:"\\e9ad"}.pi-forward[_ngcontent-%COMP%]:before{content:"\\e9ae"}.pi-backward[_ngcontent-%COMP%]:before{content:"\\e9af"}.pi-fast-backward[_ngcontent-%COMP%]:before{content:"\\e9b0"}.pi-fast-forward[_ngcontent-%COMP%]:before{content:"\\e9b1"}.pi-pause[_ngcontent-%COMP%]:before{content:"\\e9b2"}.pi-play[_ngcontent-%COMP%]:before{content:"\\e9b3"}.pi-compass[_ngcontent-%COMP%]:before{content:"\\e9ab"}.pi-id-card[_ngcontent-%COMP%]:before{content:"\\e9aa"}.pi-ticket[_ngcontent-%COMP%]:before{content:"\\e9a9"}.pi-file-o[_ngcontent-%COMP%]:before{content:"\\e9a8"}.pi-reply[_ngcontent-%COMP%]:before{content:"\\e9a7"}.pi-directions-alt[_ngcontent-%COMP%]:before{content:"\\e9a5"}.pi-directions[_ngcontent-%COMP%]:before{content:"\\e9a6"}.pi-thumbs-up[_ngcontent-%COMP%]:before{content:"\\e9a3"}.pi-thumbs-down[_ngcontent-%COMP%]:before{content:"\\e9a4"}.pi-sort-numeric-down-alt[_ngcontent-%COMP%]:before{content:"\\e996"}.pi-sort-numeric-up-alt[_ngcontent-%COMP%]:before{content:"\\e997"}.pi-sort-alpha-down-alt[_ngcontent-%COMP%]:before{content:"\\e998"}.pi-sort-alpha-up-alt[_ngcontent-%COMP%]:before{content:"\\e999"}.pi-sort-numeric-down[_ngcontent-%COMP%]:before{content:"\\e99a"}.pi-sort-numeric-up[_ngcontent-%COMP%]:before{content:"\\e99b"}.pi-sort-alpha-down[_ngcontent-%COMP%]:before{content:"\\e99c"}.pi-sort-alpha-up[_ngcontent-%COMP%]:before{content:"\\e99d"}.pi-sort-alt[_ngcontent-%COMP%]:before{content:"\\e99e"}.pi-sort-amount-up[_ngcontent-%COMP%]:before{content:"\\e99f"}.pi-sort-amount-down[_ngcontent-%COMP%]:before{content:"\\e9a0"}.pi-sort-amount-down-alt[_ngcontent-%COMP%]:before{content:"\\e9a1"}.pi-sort-amount-up-alt[_ngcontent-%COMP%]:before{content:"\\e9a2"}.pi-palette[_ngcontent-%COMP%]:before{content:"\\e995"}.pi-undo[_ngcontent-%COMP%]:before{content:"\\e994"}.pi-desktop[_ngcontent-%COMP%]:before{content:"\\e993"}.pi-sliders-v[_ngcontent-%COMP%]:before{content:"\\e991"}.pi-sliders-h[_ngcontent-%COMP%]:before{content:"\\e992"}.pi-search-plus[_ngcontent-%COMP%]:before{content:"\\e98f"}.pi-search-minus[_ngcontent-%COMP%]:before{content:"\\e990"}.pi-file-excel[_ngcontent-%COMP%]:before{content:"\\e98e"}.pi-file-pdf[_ngcontent-%COMP%]:before{content:"\\e98d"}.pi-check-square[_ngcontent-%COMP%]:before{content:"\\e98c"}.pi-chart-line[_ngcontent-%COMP%]:before{content:"\\e98b"}.pi-user-edit[_ngcontent-%COMP%]:before{content:"\\e98a"}.pi-exclamation-circle[_ngcontent-%COMP%]:before{content:"\\e989"}.pi-android[_ngcontent-%COMP%]:before{content:"\\e985"}.pi-google[_ngcontent-%COMP%]:before{content:"\\e986"}.pi-apple[_ngcontent-%COMP%]:before{content:"\\e987"}.pi-microsoft[_ngcontent-%COMP%]:before{content:"\\e988"}.pi-heart[_ngcontent-%COMP%]:before{content:"\\e984"}.pi-mobile[_ngcontent-%COMP%]:before{content:"\\e982"}.pi-tablet[_ngcontent-%COMP%]:before{content:"\\e983"}.pi-key[_ngcontent-%COMP%]:before{content:"\\e981"}.pi-shopping-cart[_ngcontent-%COMP%]:before{content:"\\e980"}.pi-comments[_ngcontent-%COMP%]:before{content:"\\e97e"}.pi-comment[_ngcontent-%COMP%]:before{content:"\\e97f"}.pi-briefcase[_ngcontent-%COMP%]:before{content:"\\e97d"}.pi-bell[_ngcontent-%COMP%]:before{content:"\\e97c"}.pi-paperclip[_ngcontent-%COMP%]:before{content:"\\e97b"}.pi-share-alt[_ngcontent-%COMP%]:before{content:"\\e97a"}.pi-envelope[_ngcontent-%COMP%]:before{content:"\\e979"}.pi-volume-down[_ngcontent-%COMP%]:before{content:"\\e976"}.pi-volume-up[_ngcontent-%COMP%]:before{content:"\\e977"}.pi-volume-off[_ngcontent-%COMP%]:before{content:"\\e978"}.pi-eject[_ngcontent-%COMP%]:before{content:"\\e975"}.pi-money-bill[_ngcontent-%COMP%]:before{content:"\\e974"}.pi-images[_ngcontent-%COMP%]:before{content:"\\e973"}.pi-image[_ngcontent-%COMP%]:before{content:"\\e972"}.pi-sign-in[_ngcontent-%COMP%]:before{content:"\\e970"}.pi-sign-out[_ngcontent-%COMP%]:before{content:"\\e971"}.pi-wifi[_ngcontent-%COMP%]:before{content:"\\e96f"}.pi-sitemap[_ngcontent-%COMP%]:before{content:"\\e96e"}.pi-chart-bar[_ngcontent-%COMP%]:before{content:"\\e96d"}.pi-camera[_ngcontent-%COMP%]:before{content:"\\e96c"}.pi-dollar[_ngcontent-%COMP%]:before{content:"\\e96b"}.pi-lock-open[_ngcontent-%COMP%]:before{content:"\\e96a"}.pi-table[_ngcontent-%COMP%]:before{content:"\\e969"}.pi-map-marker[_ngcontent-%COMP%]:before{content:"\\e968"}.pi-list[_ngcontent-%COMP%]:before{content:"\\e967"}.pi-eye-slash[_ngcontent-%COMP%]:before{content:"\\e965"}.pi-eye[_ngcontent-%COMP%]:before{content:"\\e966"}.pi-folder-open[_ngcontent-%COMP%]:before{content:"\\e964"}.pi-folder[_ngcontent-%COMP%]:before{content:"\\e963"}.pi-video[_ngcontent-%COMP%]:before{content:"\\e962"}.pi-inbox[_ngcontent-%COMP%]:before{content:"\\e961"}.pi-lock[_ngcontent-%COMP%]:before{content:"\\e95f"}.pi-unlock[_ngcontent-%COMP%]:before{content:"\\e960"}.pi-tags[_ngcontent-%COMP%]:before{content:"\\e95d"}.pi-tag[_ngcontent-%COMP%]:before{content:"\\e95e"}.pi-power-off[_ngcontent-%COMP%]:before{content:"\\e95c"}.pi-save[_ngcontent-%COMP%]:before{content:"\\e95b"}.pi-question-circle[_ngcontent-%COMP%]:before{content:"\\e959"}.pi-question[_ngcontent-%COMP%]:before{content:"\\e95a"}.pi-copy[_ngcontent-%COMP%]:before{content:"\\e957"}.pi-file[_ngcontent-%COMP%]:before{content:"\\e958"}.pi-clone[_ngcontent-%COMP%]:before{content:"\\e955"}.pi-calendar-times[_ngcontent-%COMP%]:before{content:"\\e952"}.pi-calendar-minus[_ngcontent-%COMP%]:before{content:"\\e953"}.pi-calendar-plus[_ngcontent-%COMP%]:before{content:"\\e954"}.pi-ellipsis-v[_ngcontent-%COMP%]:before{content:"\\e950"}.pi-ellipsis-h[_ngcontent-%COMP%]:before{content:"\\e951"}.pi-bookmark[_ngcontent-%COMP%]:before{content:"\\e94e"}.pi-globe[_ngcontent-%COMP%]:before{content:"\\e94f"}.pi-replay[_ngcontent-%COMP%]:before{content:"\\e94d"}.pi-filter[_ngcontent-%COMP%]:before{content:"\\e94c"}.pi-print[_ngcontent-%COMP%]:before{content:"\\e94b"}.pi-align-right[_ngcontent-%COMP%]:before{content:"\\e946"}.pi-align-left[_ngcontent-%COMP%]:before{content:"\\e947"}.pi-align-center[_ngcontent-%COMP%]:before{content:"\\e948"}.pi-align-justify[_ngcontent-%COMP%]:before{content:"\\e949"}.pi-cog[_ngcontent-%COMP%]:before{content:"\\e94a"}.pi-cloud-download[_ngcontent-%COMP%]:before{content:"\\e943"}.pi-cloud-upload[_ngcontent-%COMP%]:before{content:"\\e944"}.pi-cloud[_ngcontent-%COMP%]:before{content:"\\e945"}.pi-pencil[_ngcontent-%COMP%]:before{content:"\\e942"}.pi-users[_ngcontent-%COMP%]:before{content:"\\e941"}.pi-clock[_ngcontent-%COMP%]:before{content:"\\e940"}.pi-user-minus[_ngcontent-%COMP%]:before{content:"\\e93e"}.pi-user-plus[_ngcontent-%COMP%]:before{content:"\\e93f"}.pi-trash[_ngcontent-%COMP%]:before{content:"\\e93d"}.pi-external-link[_ngcontent-%COMP%]:before{content:"\\e93c"}.pi-window-maximize[_ngcontent-%COMP%]:before{content:"\\e93b"}.pi-window-minimize[_ngcontent-%COMP%]:before{content:"\\e93a"}.pi-refresh[_ngcontent-%COMP%]:before{content:"\\e938"}.pi-user[_ngcontent-%COMP%]:before{content:"\\e939"}.pi-exclamation-triangle[_ngcontent-%COMP%]:before{content:"\\e922"}.pi-calendar[_ngcontent-%COMP%]:before{content:"\\e927"}.pi-chevron-circle-left[_ngcontent-%COMP%]:before{content:"\\e928"}.pi-chevron-circle-down[_ngcontent-%COMP%]:before{content:"\\e929"}.pi-chevron-circle-right[_ngcontent-%COMP%]:before{content:"\\e92a"}.pi-chevron-circle-up[_ngcontent-%COMP%]:before{content:"\\e92b"}.pi-angle-double-down[_ngcontent-%COMP%]:before{content:"\\e92c"}.pi-angle-double-left[_ngcontent-%COMP%]:before{content:"\\e92d"}.pi-angle-double-right[_ngcontent-%COMP%]:before{content:"\\e92e"}.pi-angle-double-up[_ngcontent-%COMP%]:before{content:"\\e92f"}.pi-angle-down[_ngcontent-%COMP%]:before{content:"\\e930"}.pi-angle-left[_ngcontent-%COMP%]:before{content:"\\e931"}.pi-angle-right[_ngcontent-%COMP%]:before{content:"\\e932"}.pi-angle-up[_ngcontent-%COMP%]:before{content:"\\e933"}.pi-upload[_ngcontent-%COMP%]:before{content:"\\e934"}.pi-download[_ngcontent-%COMP%]:before{content:"\\e956"}.pi-ban[_ngcontent-%COMP%]:before{content:"\\e935"}.pi-star-fill[_ngcontent-%COMP%]:before{content:"\\e936"}.pi-star[_ngcontent-%COMP%]:before{content:"\\e937"}.pi-chevron-left[_ngcontent-%COMP%]:before{content:"\\e900"}.pi-chevron-right[_ngcontent-%COMP%]:before{content:"\\e901"}.pi-chevron-down[_ngcontent-%COMP%]:before{content:"\\e902"}.pi-chevron-up[_ngcontent-%COMP%]:before{content:"\\e903"}.pi-caret-left[_ngcontent-%COMP%]:before{content:"\\e904"}.pi-caret-right[_ngcontent-%COMP%]:before{content:"\\e905"}.pi-caret-down[_ngcontent-%COMP%]:before{content:"\\e906"}.pi-caret-up[_ngcontent-%COMP%]:before{content:"\\e907"}.pi-search[_ngcontent-%COMP%]:before{content:"\\e908"}.pi-check[_ngcontent-%COMP%]:before{content:"\\e909"}.pi-check-circle[_ngcontent-%COMP%]:before{content:"\\e90a"}.pi-times[_ngcontent-%COMP%]:before{content:"\\e90b"}.pi-times-circle[_ngcontent-%COMP%]:before{content:"\\e90c"}.pi-plus[_ngcontent-%COMP%]:before{content:"\\e90d"}.pi-plus-circle[_ngcontent-%COMP%]:before{content:"\\e90e"}.pi-minus[_ngcontent-%COMP%]:before{content:"\\e90f"}.pi-minus-circle[_ngcontent-%COMP%]:before{content:"\\e910"}.pi-circle-on[_ngcontent-%COMP%]:before{content:"\\e911"}.pi-circle-off[_ngcontent-%COMP%]:before{content:"\\e912"}.pi-sort-down[_ngcontent-%COMP%]:before{content:"\\e913"}.pi-sort-up[_ngcontent-%COMP%]:before{content:"\\e914"}.pi-sort[_ngcontent-%COMP%]:before{content:"\\e915"}.pi-step-backward[_ngcontent-%COMP%]:before{content:"\\e916"}.pi-step-forward[_ngcontent-%COMP%]:before{content:"\\e917"}.pi-th-large[_ngcontent-%COMP%]:before{content:"\\e918"}.pi-arrow-down[_ngcontent-%COMP%]:before{content:"\\e919"}.pi-arrow-left[_ngcontent-%COMP%]:before{content:"\\e91a"}.pi-arrow-right[_ngcontent-%COMP%]:before{content:"\\e91b"}.pi-arrow-up[_ngcontent-%COMP%]:before{content:"\\e91c"}.pi-bars[_ngcontent-%COMP%]:before{content:"\\e91d"}.pi-arrow-circle-down[_ngcontent-%COMP%]:before{content:"\\e91e"}.pi-arrow-circle-left[_ngcontent-%COMP%]:before{content:"\\e91f"}.pi-arrow-circle-right[_ngcontent-%COMP%]:before{content:"\\e920"}.pi-arrow-circle-up[_ngcontent-%COMP%]:before{content:"\\e921"}.pi-info[_ngcontent-%COMP%]:before{content:"\\e923"}.pi-info-circle[_ngcontent-%COMP%]:before{content:"\\e924"}.pi-home[_ngcontent-%COMP%]:before{content:"\\e925"}.pi-spinner[_ngcontent-%COMP%]:before{content:"\\e926"}html[_ngcontent-%COMP%]{width:100vw;box-sizing:border-box}main[_ngcontent-%COMP%]{width:100%;height:100%;background:#1a1a1a;box-sizing:border-box;flex-direction:row}#inicio[_ngcontent-%COMP%]{display:flex;height:100vh;align-items:center;justify-content:center}#inicio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.1rem;color:#fff;margin-left:10px}#inicio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:beige}#inicio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3.1rem;color:#fff}#inicio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}#inicio-conteudo[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;gap:10px}#inicio-conteudo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{left:40px;border:1px solid red;font-size:1.4rem;font-family:Montserrat,sans-serif;padding:.4rem 4rem;background:transparent;color:red}#inicio-conteudo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1rem}#inicio-conteudo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}#projetos[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-rows:30vh 80vh 80vh 80vh;grid-template-areas:"titulo-projetos" "projeto-1" "projeto-2" "projeto-3"}#titulo-projetos[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}#titulo-projetos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#fff}article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px}.projeto-1[_ngcontent-%COMP%]{grid-area:projeto-1;display:flex;background-color:#00f;background:#1a1a1a}.projeto-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:relative;bottom:100px}.projeto-1[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:inline-block;position:relative;height:80%;width:80%;left:5%}.projeto-1[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:5.5rem;background-color:#ff4d5a;width:60%;height:100%}.projeto-1[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:70%;color:#fff;font-size:40px}.projeto-2[_ngcontent-%COMP%]{grid-area:projeto-2;background-color:green;background:#1a1a1a;display:flex;justify-content:flex-end}.projeto-2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:relative;bottom:100px}.projeto-2[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;right:5%;position:relative;height:80%;width:80%}.projeto-2[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:5.5rem;background-color:#ff4d5a;width:60%;height:100%}.projeto-2[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;right:50%;bottom:70%;color:#fff;font-size:40px}.projeto-3[_ngcontent-%COMP%]{grid-area:projeto-3;background-color:bisque;background:#1a1a1a;display:flex}.projeto-3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:relative;bottom:100px}.projeto-3[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:inline-block;position:relative;height:80%;width:80%;left:5%}.projeto-3[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:5.5rem;background-color:#ff4d5a;width:60%;height:100%}.projeto-3[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:70%;color:#fff;font-size:40px}#sobre[_ngcontent-%COMP%]{height:100vh;background:#1a1a1a}#sobre[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{display:flex;height:20%;justify-content:center;width:100%}#sobre[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{align-self:center;font-size:40px;color:#fff;background:#00f;font-size:2em;font-weight:700}#sobre-conteudo[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;display:flex}#sobre-conteudo[_ngcontent-%COMP%]   #apresentacao[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;width:50%;gap:10px}#sobre-conteudo[_ngcontent-%COMP%]   #tecnologias[_ngcontent-%COMP%]{width:50%}#sobre-conteudo[_ngcontent-%COMP%]   P[_ngcontent-%COMP%]{text-align:center;color:#fff;width:40%;font-size:1.3rem}footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1rem;height:20vh;width:100%;background-color:#272727}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#fff;transition:.2s;cursor:pointer;transform:scale(1.1)}@media (max-width: 540px){#inicio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;color:#fff;margin-left:10px}#inicio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:beige}#inicio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#fff}#sobre-conteudo[_ngcontent-%COMP%]{display:flex;flex-direction:column}#sobre-conteudo[_ngcontent-%COMP%]   #apresentacao[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%}#sobre-conteudo[_ngcontent-%COMP%]   #tecnologias[_ngcontent-%COMP%]{min-width:100%;min-height:50%}#sobre-conteudo[_ngcontent-%COMP%]   P[_ngcontent-%COMP%]{text-align:center;width:50%;font-size:1.3rem}#projetos[_ngcontent-%COMP%]   #projetos[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-rows:30vh 80vh 80vh 80vh;grid-template-areas:"titulo-projetos" "projeto-1" "projeto-2" "projeto-3"}}.imgProjetos[_ngcontent-%COMP%]{transition:transform .5s}.imgProjetos[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(.97)}'],data:{animation:[M("fadeInRight",[m(":enter",[f({opacity:0,transform:"translateX(10%)"}),_("1000ms ease-in",f({opacity:1,transform:"translateX(0)"}))])]),M("fadeInLeft",[m(":enter",[f({opacity:0,transform:"translateX(-10%)"}),_("1000ms ease-in",f({opacity:1,transform:"translateX(0)"}))])]),M("fadeInDown",[m(":enter",[f({opacity:0,transform:"translateY(-10%)"}),_("1000ms ease-in",f({opacity:1,transform:"translateY(0)"}))])]),M("fadeInUp",[m(":enter",[f({opacity:0,transform:"translateY(10%)"}),_("1000ms 1000ms ease-in",f({opacity:1,transform:"translateY(0)"}))])])]}});let c=o;return c})();var Q=[{path:"",component:V}];var X={providers:[L(Q),T(),R()]};var W={providers:[F()]},J=A(X,W);var K=()=>B(Y,J),He=K;export{He as a};
