if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){var stop,staticx,img=new Image;function Sakura(A,i,t,g,B){this.x=A,this.y=i,this.s=t,this.r=g,this.fn=B}function getRandom(A){var i,t;switch(A){case"x":i=Math.random()*window.innerWidth;break;case"y":i=Math.random()*window.innerHeight;break;case"s":i=Math.random();break;case"r":i=6*Math.random();break;case"fnx":t=1*Math.random()-.5,i=function(A,i){return A+.5*t-1.7};break;case"fny":t=1.5+.7*Math.random(),i=function(A,i){return i+t};break;case"fnr":t=.03*Math.random(),i=function(A){return A+t}}return i}function startSakura(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var A,i=document.createElement("canvas");staticx=!0,i.height=window.innerHeight,i.width=window.innerWidth,i.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;z-index:99999;"),i.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(i),A=i.getContext("2d");for(var t=new SakuraList,g=0;g<20;g++){var B,o,I,a,e,R,n;o=getRandom("x"),I=getRandom("y"),e=getRandom("r"),a=getRandom("s"),R=getRandom("fnx"),n=getRandom("fny"),randomFnR=getRandom("fnr"),B=new Sakura(o,I,a,e,{x:R,y:n,r:randomFnR}),B.draw(A),t.push(B)}stop=requestAnimationFrame(function(){A.clearRect(0,0,i.width,i.height),t.update(),t.draw(A),stop=requestAnimationFrame(arguments.callee)})}function stopp(){if(staticx){var A=document.getElementById("canvas_sakura");A.parentNode.removeChild(A),window.cancelAnimationFrame(stop),staticx=!1}else startSakura()}
img.src="https://cdn.h5ds.com/space/files/600972551685382144/20231012/636829107579789312.png",
Sakura.prototype.draw=function(A){A.save();this.s;A.translate(this.x,this.y),A.rotate(this.r),A.drawImage(img,0,0,30*this.s,30*this.s),A.restore()},Sakura.prototype.update=function(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=getRandom("fnr"),Math.random()>.4?(this.x=getRandom("x"),this.y=0,this.s=getRandom("s"),this.r=getRandom("r")):(this.x=window.innerWidth,this.y=getRandom("y"),this.s=getRandom("s"),this.r=getRandom("r")))},SakuraList=function(){this.list=[]},SakuraList.prototype.push=function(A){this.list.push(A)},SakuraList.prototype.update=function(){for(var A=0,i=this.list.length;A<i;A++)this.list[A].update()},SakuraList.prototype.draw=function(A){for(var i=0,t=this.list.length;i<t;i++)this.list[i].draw(A)},SakuraList.prototype.get=function(A){return this.list[A]},SakuraList.prototype.size=function(){return this.list.length},window.onresize=function(){document.getElementById("canvas_snow")},img.onload=function(){startSakura()}}