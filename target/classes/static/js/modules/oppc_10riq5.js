_jsload2&&_jsload2('oppc', 'function Lg(a,b){b||(b=document.createElement("canvas"));b.getContext("2d").drawImage(a,0,0)}var Mg=256,Ng=32;function Og(){this.C=s}var Pg;B.Ye(function(a){if(!a.K.Yx){var b=new Og;Ab(a.Wa,b.va(a.K.Vb));b.C=a.Wa.lastChild;a.R.a1=b}}); Og.prototype.va=function(a){a=[\'<div id=zoomer style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:\'+a+\'">\'];a.push(\'<div class="BMap_zoomer" style="top:0;left:0;"></div>\');a.push(\'<div class="BMap_zoomer" style="top:0;right:0;"></div>\');a.push(\'<div class="BMap_zoomer" style="bottom:0;left:0;"></div>\');a.push(\'<div class="BMap_zoomer" style="bottom:0;right:0;"></div>\');a.push("</div>");return a.join("")}; Og.prototype.action=function(a,b){if(!Pg){var c=this.C;if(c){var e=4/3,f=Math.ceil((b?60:120)/2),g=Math.max(15,f/e),i=c.style;i.width=2*f+"px";i.height=2*g+"px";i.visibility="visible";c=c.children;b?(c[0].style.backgroundPosition="0 0",c[1].style.backgroundPosition="-7px 0",c[2].style.backgroundPosition="0 -7px",c[3].style.backgroundPosition="-7px -7px"):(c[0].style.backgroundPosition="-7px -7px",c[1].style.backgroundPosition="0 -7px",c[2].style.backgroundPosition="-7px 0",c[3].style.backgroundPosition= "0 0");var c=s,k=a.x-f,m=a.y-g;if(!isNaN(k)&&!isNaN(m)){i.left=k+"px";i.top=m+"px";var n=Math.ceil((b?120:60)/2),o=Math.max(15,n/e),n=n-f,o=Math.ceil(o-g),p=this.C.style;Pg&&Pg.end();Pg=new tb({Ic:20,duration:240,kc:ub.iD,No:100,va:function(a){if(!(a<0.1)){var b=Math.ceil(n*a),a=Math.ceil(o*a);p.width=(f+b)*2+"px";p.height=(g+a)*2+"px";p.left=k-b+"px";p.top=m-a+"px"}},finish:function(){Pg=t;setTimeout(function(){i.visibility="hidden"},300)}})}}}};B.Ye(function(a){function b(a){if(g.K.Uo){var b=new P("ondeepzoommousewheel");c(a,la(b,a));k.R0.call(k,b);Cb(a)}}function c(a,b){var c=a.srcElement||a.target,e=a.offsetX||a.layerX||0,f=a.offsetY||a.layerY||0,i=s,k=s;1!==c.nodeType&&(c=c.parentNode);for(;c&&c!==g.Wa;){c.aa&&(z.lang.Nc(c.aa)instanceof gb&&(i=z.lang.Nc(c.aa)),z.lang.Nc(c.aa)instanceof tc&&(k=z.lang.Nc(c.aa)));if(!(0===c.clientWidth&&0===c.clientHeight&&c.offsetParent&&"TD"===c.offsetParent.nodeName)&&"http://www.w3.org/2000/svg"!==c.namespaceURI)e+= c.offsetLeft||0,f+=c.offsetTop||0;else if("http://www.w3.org/2000/svg"===c.namespaceURI&&B.hq){var A=B.hq.Ws(g).hf;if(-1<navigator.userAgent.indexOf("Opera")&&"svg"!==c.tagName){if(c=z.lang.Nc(c.aa))c=c.ve(),e+=g.$b(c.Ve()).x,f+=g.$b(c.Rf()).y;break}if(39<=z.ca.Te||51<=z.ca.Qw)e=a.layerX||0,f=a.layerY||0;if(A&&!(window.ActiveXObject||"ActiveXObject"in window))e+=parseFloat(A.style.left)+g.offsetX,f+=parseFloat(A.style.top)+g.offsetY;if(A&&((window.ActiveXObject||"ActiveXObject"in window)&&"svg"=== c.nodeName.toLowerCase())&&!c.aa)e+=parseFloat(A.style.left)+g.offsetX,f+=parseFloat(A.style.top)+g.offsetY;if((9<=z.ca.ia||-1<navigator.userAgent.toLowerCase().indexOf("trident"))&&"svg"!==c.nodeName.toLowerCase()){e+=g.offsetX;f+=g.offsetY;break}if(!z.ca.ia)break}c=c.offsetParent}if((65<=z.ca.Qw||60<=z.ca.Te)&&"ondeepzoommousewheel"===b.type){e=a.clientX+window.scrollX;f=a.clientY+window.scrollY;for(c=g.La();c;)e-=c.offsetLeft,f-=c.offsetTop,c=c.offsetParent}b.offsetX=e;b.offsetY=f;b.pixel=b.lb= new Q(e,f);b.point=b.point=g.xb(b.lb);b.overlay=b.fb=i;b.domEvent=a;b.zb=k;return b}function e(a){var b=g.R,e=!b.ky&&!b.ly;if(b.Fy)clearTimeout(b.Fy),b.Fy=s,e&&(g.dispatchEvent(c(a,la(new P("onrightclick"),a))),g.Sa|=Mg,g.dispatchEvent(c(a,la(new P("onrightdblclick"),a))),g.Sa^=Mg);else{e&&g.dispatchEvent(c(a,la(new P("onrightclick"),a)));var f=c(a,la(new P("onrightclickex"),a));b.Fy=setTimeout(function(){b.Fy=s;e&&g.dispatchEvent(f)},g.K.tC)}}function f(a){if(g.K.Uo){var b=g.R;b.ob&&(b.ob.stop(), b.ob=s,setTimeout(function(){g.dispatchEvent(new P("onmoveend"))},1));g.Sa|=Ng;a=window.event||a;g.Oc=g.Oa;b=new P("onmousewheel");b.Zp=0<=a.wheelDelta||0>a.detail;var e=new Date;b.Zp===q&&g.Oa===g.oa().sm()||b.Zp===t&&g.Oa===g.oa().bp()||220>e-i?g.Sa^=Ng:(i=e,c(a,la(b,a)),g.dispatchEvent(b),g.Sa^=Ng,a.returnValue=t);Cb(a)}}var g=a;g.bZ=a.Sb();a.Wa.I4=ca(t);z.M(g.platform,"mousemove",function(a){0===g.Sa&&g.dispatchEvent(c(a,la(new P("onmousemove"),a)))});z.M(g.platform,"mousedown",function(a){if(g.K.pD){a= window.event||a;z.ca.ia||Cb(a);var b=g.R;b.Jc=q;var e=a.srcElement||a.target;b.ob&&(b.ob.stop(),b.ob=s,g.dispatchEvent(new P("onmoveend")));b.su=a.clientX||a.pageX||0;for(b.tu=a.clientY||a.pageY||0;e&&e!==g.Wa;){if(z.D.it(e,"BMap_Marker")){b.Jc=t;var f=z.lang.Nc(e.aa);if(f instanceof U&&f.z.jf===q||f.z.Wb===q)return}e=e.parentNode}z.ca.ia&&g.ze.setCapture&&g.ze.setCapture();g.dispatchEvent(c(a,la(new P("onmousedown"),a)));g.K.Wb&&(!(g.Sa&8)&&2!==a.button)&&(b.wp=b.su,b.Hk=b.tu,b.zy=g.offsetX,b.k= g.offsetY,g.Sa|=8,g.platform.style.cursor=0===g.R.Qe.length?g.K.Hd:"pointer")}});z.M(document,"mousemove",function(a){var a=window.event||a,b=g.R,e=a.clientX||a.pageX||0,f=a.clientY||a.pageY||0;if(b.su||b.tu)b.ky=e-b.su,b.ly=f-b.tu;var i=bb(),k=40<i-b.MM;if(!(18>i-b.Bt)&&(k&&(b.MM=i),b.Bt=i,g.Sa&8&&g.K.Wb)){var y=g.platform.style;y.cursor.replace(/"|\\s/g,"")!==g.K.Hd&&(y.cursor=g.K.Hd);b.Yj||(g.dispatchEvent(c(a,la(new P("ondragstart"),a))),g.dispatchEvent(new P("onmovestart")),b.ZC=new Q(e,f),b.$C= i);0===b.wp&&(0===b.Hk&&g.R.j4)&&(b.wp=e,b.Hk=f,b.zy=g.offsetX,b.k=g.offsetY);if(0!==e-b.wp||0!==f-b.Hk)g.R.Yj=q,g.dispatchEvent(c(a,la(new P("ondragging"),a))),g.Le(b.zy+e-b.wp,b.k+f-b.Hk,s,k)}});z.M(document,"mouseup",function(a){z.ca.ia&&g.ze.releaseCapture&&g.ze.releaseCapture();var b=g.R;b.T4&&g.V2(q);var a=window.event||a,e=a.clientX||a.pageX,f=a.clientY||a.pageY;if(g.Sa&8&&g.K.Wb){g.Sa^=8;g.platform.style.cursor=0===b.Qe.length?g.K.Vb:"pointer";if(g.R.Yj){var i=c(a,la(new P("ondragend"),a)); g.dispatchEvent(i);Qg(g,new Q(e,f))}b.Yj=t}b.Jc=t;2===a.button&&(b.su=s,b.tu=s,b.ky=0,b.ly=0);g.dispatchEvent(c(a,la(new P("onmouseup"),a)))});4<=z.ca.Te?(z.M(g.Wa,"mouseup",function(a){2===a.button&&e(a)}),z.M(g.Wa,"contextmenu",function(a){na(a)})):z.M(g.Wa,"contextmenu",function(a){e(a);na(a)});var i=new Date,k;a.K.gL&&(k=new Rg(a),a.D2=k);if(z.ca.ia&&9>=z.ca.ia||g.bZ)k=s;z.M(g.Wa,"mousewheel",k?b:f);window.addEventListener&&g.Wa.addEventListener("DOMMouseScroll",k?b:f,t);z.M(g.platform,"click", function(a){var b=new P("onclick"),e=new P("onclickex"),f=g.R;c(a,la(b,a));c(a,la(e,a));if(!g.Sa){var i=!f.ky&&!f.ly;i&&g.dispatchEvent(b);if(!f.Ii)f.Ii=setTimeout(function(){f.Ii=s;i&&g.dispatchEvent(e)},g.K.tC)}f.su=s;f.tu=s;f.ky=0;f.ly=0});z.M(g.platform,"dblclick",function(a){if(!g.Sa){g.Sa=g.Sa|Mg;z.ca.ia&&g.dispatchEvent(c(a,la(new P("onclick"),a)));var b=g.R;if(b.Ii){clearTimeout(b.Ii);b.Ii=s}g.dispatchEvent(c(a,la(new P("ondblclick"),a)));g.Sa=g.Sa^Mg}});z.M(document,"mousedown",function(b){var b= window.event||b,b=b.srcElement||b.target,c=g.R;c.lC=c.lC?z.D.contains(a.Wa,b):z.D.contains(a.platform,b)})}); function Qg(a,b){if(a.K.ox){var c=a.R,e=bb();if(100<e-c.Bt)a.dispatchEvent(new P("onmoveend")),c.Yj=t;else{var f=c.ZC,g=[0<b.x-f.x?1:-1,0<b.y-f.y?1:-1],e=Fb(f,b)/((e-c.$C)/1E3)/2,i=e/1.8,k=0.4*i*e/1E3,m=Math.abs(f.x-b.x),n=0,o=0;0===Math.abs(f.y-b.y)?n=m:(f=Math.abs(f.x-b.x)/Math.abs(f.y-b.y),o=Math.round(Math.sqrt(k*k/(1+f*f))),n=Math.round(f*o));-1===g[0]&&(n=-n);-1===g[1]&&(o=-o);c.ob&&(c.ob.stop(),c.ob=s,a.dispatchEvent(new P("onmoveend")));var p=e/1E3,v=a.offsetX,x=a.offsetY,y=t;c.ob=new tb({duration:i, Ic:30,kc:function(a){a=a*p/1.8;return p*a-0.9*a*a},va:function(b){b=b*3.6/(p*p);y=!y;a.Le(v+Math.round(b*n),x+Math.round(b*o),s,y)},finish:function(){c.ob=s;a.Le(v+Math.round(n),x+Math.round(o));a.dispatchEvent(new P("onmoveend"))},Kt:function(b){c.ob=s;b=b*3.6/(p*p);a.Le(v+Math.round(b*n),x+Math.round(b*o));setTimeout(function(){a.dispatchEvent(new P("onmoveend"))},1)}})}}else a.dispatchEvent(new P("onmoveend"))} function Rg(a){this.map=a;this.Va=a.Va;this.iW=Sg();this.Qd=0;this.lF=1;this.kF=this.ah=s;this.VE=1;this.YE=-1;this.xE=t;this.Yb=19;this.gc=3;this.PM=0;this.Ik="";this.nt=t;this.ME=this.OM=0;this.mK()}var Tg=Rg.prototype;Tg.mK=function(){var a=this,b=a.map;a.Yb=b.K.Yb||19;a.gc=b.K.gc||3;b.addEventListener("onmaptypechange",function(){a.Yb=b.K.Yb||19;a.gc=b.K.gc||3})}; Tg.R0=function(a){var b=this,c=b.map,e=c.R;b.Yb=c.K.Yb||19;b.gc=c.K.gc||3;e.ob&&(e.ob.stop(),e.ob=s,c.dispatchEvent(new P("onmoveend")));var f=Math.floor(a.domEvent.timeStamp),g=f-this.PM,i=0<=a.domEvent.wheelDelta,e=Math.abs(a.domEvent.wheelDelta),k=Math.abs(a.domEvent.deltaY);100<g&&(this.nt=t,this.Ik=Ug(e,k,a.E2),this.Qd=0,this.RN=s);"padScroll"===this.Ik&&(0===k&&0===g&&this.nt===t)&&(this.nt=q);if(0!==g){this.PM=f;if("padScroll"===this.Ik&&40>g){b.Qd=i?b.Qd+0.13:b.Qd-0.16;var f=a.domEvent.wheelDelta- this.OM,g=f-this.ME,m=this.ME;this.ME=f;this.OM=a.domEvent.wheelDelta;this.NM=i;if("boolean"===typeof this.NM&&i!==this.NM||"padScroll"===this.Ik&&3===e&&!isNaN(g)&&50<Math.abs(f-m))b.Zk&&(b.Zk.stop(),b.Zk=s);else if(0!==this.RN)if(0>f&&0<m||0<f&&0>m)5>k&&(this.nt=t);else return}this.RN=this.Qd;e=a.domEvent.wheelDelta/120||-a.domEvent.detail/3;0===e&&z.ca.Te&&(e=-a.domEvent.deltaY);if(0!==e&&(e=Math.ceil(Math.abs(e))*(0<=e?1:-1),"padPinch"===this.Ik&&(e=a.domEvent.deltaY),k=0<e?1:-1,c=c.fa(),0>k&& (b.VE=-1),0<k&&(b.YE=1),f=b.gc,!(c>=b.Yb&&0<k&&1===b.VE||c<=f&&0>k&&-1===b.YE))){"mouseWheel"!==this.Ik&&(e*=0.6);b.Qd+=e;"mouseWheel"===this.Ik&&(b.Qd=b.RM(b.Qd));var n=new Q(a.lb.x,a.lb.y);if("mouseWheel"!==this.Ik){if(!b.Zk&&!b.Od&&!(0===b.Qd||b.nt===q))b.Od=setTimeout(function(){var a=Math.abs(b.Qd),a=Math.round(a);b.Qd=i?a:-a;b.Qd=b.RM(b.Qd);b.Qd!==0&&b.rP(n,b.Qd);b.Od=s},30)}else b.Zk&&(b.Zk.stop(),b.Zk=s),b.Od&&clearTimeout(b.Od),b.Od=setTimeout(function(){b.rP(n,b.Qd);b.Od=s},25)}}}; Tg.RM=function(a){var b=this.gc,c=this.Yb,e=this.map.fa(),a=Math.min(Math.max(a,-3),3);e+a>c?a=c-e:e+a<b&&(a=b-e);return a}; Tg.rP=function(a,b){var c=new O(0,0),e=this,f=e.map,g=e.Va,i=Math.pow(2,b),k=e.lF,m,n=f.width,o=f.height,p=(a.x-n/2)/n,v=(a.y-o/2)/o,x=g.Jb,y=g.Ki,A=x.style,E=y.style,C,F,D=e.iW;e.xE||(e.xE=q,f.dispatchEvent(new P("onzoomstart")));f.rd&&z.D.U(f.rd);g.Bl.style.visibility="hidden";g.od&&(g.od.style.visibility="hidden");g.eo.style.visibility="hidden";if(!e.ah){A[D]||(A[D]="translate3d(0,0,0)");var I=e.kF;I&&(I.parentNode&&I.parentNode.removeChild(I),e.kF=s);e.kF=e.ah=x.cloneNode(q);f.platform.insertBefore(e.ah, f.platform.firstChild)}g.Ki.style.visibility="hidden";if(!e.Se&&f.K.Ms){if(x=e.QN)x.parentNode&&x.parentNode.removeChild(x),e.QN=s;e.Se=y.cloneNode(q);x=e.Se.firstChild;for(I=0;I<x.childElementCount;I++)Lg(y.firstChild.children[I],x.children[I]);Lg(y.lastElementChild,e.Se.lastElementChild);e.Se.style.visibility="";e.QN=e.Se;f.platform.insertBefore(e.Se,f.platform.firstChild)}A.visibility="hidden";E.visibility="hidden";var R=e.ah.style;f.K.qN===t&&(R.display="none");if(f.K.Ms)var M=e.Se.children[0].style, N=e.Se.children[1].style;e.Zk=new tb({Ic:60,duration:f.K.To?400:1,kc:ub.Ks,va:function(a){if(b>0){m=k+a*(i-k);C=-n*(m-1)*p-c.width*a;F=-o*(m-1)*v-c.height*a}else{m=k-a*(k-i);C=n*(1-m)*p;F=o*(1-m)*v}R[D]="translate3d("+C+"px, "+F+"px, 0) scale("+m+")";if(f.K.Ms){M[D]="translate3d("+C+"px, "+F+"px, 0) scale("+m+")";N[D]="translate3d("+C+"px, "+F+"px, 0) scale("+m+")"}e.lF=m},finish:function(){var c=f.fa(),c=Math.round(c+b);f.Oc=f.Oa;f.Oa=c;var c=g.sA(a),i=f.oa().dc(f.fa());f.fc=new J(c.lng+(f.width/ 2-a.x)*i,c.lat-(f.height/2-a.y)*i);f.re=f.cd.nh(f.fc,f.Ub);A.visibility="";E.visibility="";g.Wf();f.rd&&(z.ca.ia&&z.ca.ia<8||document.compatMode==="BackCompat"?z.D.show(f.rd):setTimeout(function(){z.D.show(f.rd)},100));g.Bl.style.visibility="";g.eo.style.visibility="";g.Ki.style.visibility="";f.dispatchEvent(new P("onzoomend"));e.Qd=0;e.lF=1;setTimeout(function(){e.YN()},100);e.YN();e.Zk=s;e.VE=1;e.YE=-1;e.xE=t}})}; Tg.YN=function(){this.ah&&(Rc(this.ah),this.ah.parentNode&&(this.ah.parentNode.removeChild(this.ah),this.ah.innerHTML="",this.ah=s));this.Se&&this.map.K.Ms&&(Rc(this.Se),this.Se.parentNode&&(this.Se.parentNode.removeChild(this.Se),this.Se.innerHTML="",this.Se=s))}; function Sg(){var a="transform",b=document.createElement("div"),c=["Webkit","Moz","O","ms"],e=c.length,f="",b=b.style;a in b&&(f=a);for(a=a.replace(/^[a-z]/,function(a){return a.toUpperCase()});e--;){var g=c[e]+a;if(g in b){f=g;break}}return f}function Ug(a,b,c){var e="mouseWheel";if(120===a&&1>b)e="padPinch";else if(!isNaN(a)&&(10>a||120!==a)&&0===b%1)e="padScroll";z.ca.Te&&0===c&&(e="padScroll");z.ca.Iy&&12===a&&(e="mouseWheel");return e};B.Ye(function(a){z.M(document,"keydown",function(b){a.R.vi==q&&(a.R.vi=t);if(a.K.px&&a.R.lC)switch(b=window.event||b,b.keyCode||b.which){case 43:case 189:case 109:a.R.Jc=q;a.dispatchEvent(new P("onminuspress"));break;case 43:case 61:case 187:case 107:a.R.Jc=q;a.dispatchEvent(new P("onpluspress"));break;case 33:a.R.Jc=t;a.R.vi=q;a.Ag(0,Math.round(0.8*a.height));na(b);break;case 34:a.R.Jc=t;a.R.vi=q;a.Ag(0,-Math.round(0.8*a.height));na(b);break;case 35:a.R.Jc=t;a.R.vi=q;a.Ag(-Math.round(0.8*a.width), 0);na(b);break;case 36:a.R.Jc=t;a.R.vi=q;a.Ag(Math.round(0.8*a.width),0);na(b);break;case 37:a.R.Jc=q;a.R.nc|=1;a.gb();na(b);break;case 38:a.R.Jc=q;a.R.nc|=2;a.gb();na(b);break;case 39:a.R.Jc=q;a.R.nc|=4;a.gb();na(b);break;case 40:a.R.Jc=q,a.R.nc|=8,a.gb(),na(b)}});z.M(document,"keyup",function(b){if(a.K.px)switch(b=window.event||b,b.keyCode||b.which){case 37:a.R.nc&=-2;0!=a.R.nc&&a.gb();break;case 38:a.R.nc&=-3;0!=a.R.nc&&a.gb();break;case 39:a.R.nc&=-5;0!=a.R.nc&&a.gb();break;case 40:a.R.nc&=-9, 0!=a.R.nc&&a.gb()}a.R.Jc=t});Ka.prototype.gb=function(){if(!this.gb.ny||!(this.gb.UA==this.R.nc&&this.R.vi==q)){var a=this,c=a.R.nc;a.gb.UA=c;a.gb.Wx=30;a.gb.duration=999;a.gb.kf=a.gb.lf=0;c&1&&(a.gb.kf=1);c&2&&(a.gb.lf=1);c&4&&(a.gb.kf=-1);c&8&&(a.gb.lf=-1);c&1&&c&4&&(a.gb.kf=0);c&2&&c&8&&(a.gb.lf=0);if(!a.gb.ny){a.gb.ny=q;a.gb.time=bb();a.gb.FV=a.gb.time;a.dispatchEvent(new P("onmovestart"));var e=new tb({Ic:a.gb.Wx,duration:a.gb.duration,kc:ub.UM,va:function(){var c=a.gb,g=a.R.nc;if(a.gb.UA!=g){a.gb.UA= g;if(g&1)c.kf=1;if(g&2)c.lf=1;if(g&4)c.kf=-1;if(g&8)c.lf=-1;if(g&1&&g&4)c.kf=0;if(g&2&&g&8)c.lf=0}if(a.R.vi==q){c.kf=0;c.lf=0}var g=bb(),i=Math.pow((g-c.FV)/c.duration,2);if(!a.R.nc){c.ny=t;e.TF=q;a.gb.time=bb();setTimeout(function(){a.dispatchEvent(new P("onmoveend"))},40)}var k=g-c.time,m=c.kf*k*i>=0?Math.ceil(c.kf*k*i):Math.floor(c.kf*k*i),i=c.lf*k*i>=0?Math.ceil(c.lf*k*i):Math.floor(c.lf*k*i);if(m!=0&&i!=0){m=Math.round(m*0.7);i=Math.round(i*0.7)}c.time=g;a.Le(a.offsetX+m,a.offsetY+i)},finish:function(){a.gb.time= bb();setTimeout(function(){a.dH()},a.gb.Wx)}})}}};Ka.prototype.dH=function(){var a=this,c=a.gb;a.R.vi&&(c.kf=0,c.lf=0);if(a.R.nc){var e=bb(),f=e-c.time,g=Math.ceil(c.kf*f),f=Math.ceil(c.lf*f);c.time=e;a.Le(a.offsetX+g,a.offsetY+f);setTimeout(function(){a.dH()},c.Wx)}else c.ny=t,a.dispatchEvent(new P("onmoveend"))}}); ');