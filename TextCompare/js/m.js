var noweb=window.location.href;function emdl(){$("#ema").removeClass("dou"),$("#pw").removeClass("dou");var t=$("#ema").val(),e=$("#pw").val(),a=0,o=0;if(t.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)&&t.length>6?($("#ema").css("background-color","#ffffff"),a=1):($("#ema").addClass("dou"),$("#ema").css("background-color","#ffdfdf")),e.length>3?($("#pw").css("background-color","#ffffff"),o=1):($("#pw").addClass("dou"),$("#pw").css("background-color","#ffdfdf")),1==a&&1==o){$("#pw").removeClass("dou");$.ajax({type:"post",url:"../emdl.aspx",data:{em:t,pw:e},cache:!1,dataType:"text",success:function(t){"y"==t?window.location.href=window.location:($("#pw").addClass("dou"),$("#pw").css("background-color","#ffdfdf"))},error:function(){}})}}function myout(){1==n?window.location.href="../myout.aspx":window.location.href="myout.aspx"}function EmailAutoComplete(t){this.config={targetCls:".inputElem",parentCls:".parentCls",hiddenCls:".hiddenCls",searchForm:".jqtransformdone",hoverBg:"hoverBg",inputValColor:"black",mailArr:["@qq.com","@163.com","@126.com","@gmail.com","@hotmail.com","@yahoo.com","@yahoo.com.cn","@live.com","@sohu.com","@sina.com"],isSelectHide:!0,callback:null},this.cache={onlyFlag:!0,currentIndex:-1,oldIndex:-1},this.init(t)}"http://nrgh"==noweb.charAt(0,11)&&(noweb=noweb.replace("http://","http://www."),window.location.href=noweb),$((function(){$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover({trigger:"hover"}),$('[data-spy="scroll"]').each((function(){$(this).scrollspy("refresh")}))})),$(window).scroll((function(){$("#menu_wrap").offset().top;$(window).scrollTop()>=455&&($(".nav-bg").css("top",50),$(".nav-bg").css("position","fixed"),$("#menu_wrap").addClass("menuFixed")),$(window).scrollTop()<455&&($(".nav-bg").css("position","relative"),$(".nav-bg").css("top",455),$("#menu_wrap").removeClass("menuFixed")),1==n&&($(window).scrollTop()>=30&&($(".nav-bg").css("top",50),$(".nav-bg").css("position","fixed"),$("#menu_wrap").addClass("menuFixed")),$(window).scrollTop()<30&&($(".nav-bg").css("position","relative"),$("#menu_wrap").removeClass("menuFixed")))})),$((function(){var t,e={};$(".nzz").hover((function(){t=$(this).attr("id"),e[t+"_timer"]=setTimeout((function(){$("#zt").addClass("mh"),$(".nn").css("display","none"),$(".nav-zi").css("display","block"),$("#n"+t).css("display","block"),$("#n"+t).addClass("nadc"),$(".nzz").removeClass("nav-zibg"),$("#"+t).addClass("nav-zibg"),1}),300)}),(function(){clearTimeout(e[t+"_timer"])})),$(".yn").mouseleave((function(){$(".nav-zi").css("display","none"),$("#zt").removeClass("mh"),$(".nzz").removeClass("nav-zibg")}))})),$(document).ready((function(){$(".nav-zi a").mouseover((function(){$(this).children().removeClass("ls")})),$(".nav-zi a").mouseout((function(){$(this).children().addClass("ls")}))})),jQuery.browser={},jQuery.browser.msie=!1,jQuery.browser.version=0,navigator.userAgent.match(/MSIE ([0-9]+)./)&&(jQuery.browser.msie=!0,jQuery.browser.version=RegExp.$1),EmailAutoComplete.prototype={constructor:EmailAutoComplete,init:function(t){this.config=$.extend(this.config,t||{});var e=this,a=e.config,o=e.cache;$(a.targetCls).each((function(t,n){$(n).keyup((function(t){var i=t.target,s=$.trim($(this).val()),r=t.keyCode,l=$(this).outerHeight(),d=$(this).outerWidth(),c=$(this).closest(a.parentCls);$(c).css({position:"relative"}),""==s?($(n).attr({"data-html":""}),$(a.hiddenCls,c).val(""),o.currentIndex=-1,o.oldIndex=-1,$(".auto-tip",c)&&!$(".auto-tip",c).hasClass("hidden")&&$(".auto-tip",c).addClass("hidden"),e._removeBg(c)):($(n).attr({"data-html":s}),$(a.hiddenCls,c).val(s),$(".auto-tip",c)&&$(".auto-tip",c).hasClass("hidden")&&$(".auto-tip",c).removeClass("hidden"),e._renderHTML({keycode:r,e:t,target:i,targetVal:s,height:l,width:d,parentNode:c}))}))})),$(a.searchForm).each((function(t,e){$(e).keydown((function(t){if(13==t.keyCode)return!1}))})),$(document).click((function(t){t.stopPropagation();var e=t.target,o=a.targetCls.replace(/^\./,"");$(e).hasClass(o)||$(".auto-tip")&&$(".auto-tip").each((function(t,e){!$(e).hasClass("hidden")&&$(e).addClass("hidden")}))}))},_renderHTML:function(t){var e,a=this,o=a.config,n=a.cache,i=a._keyCode(t.keycode);if($(".auto-tip",t.parentNode).hasClass("hidden")&&$(".auto-tip",t.parentNode).removeClass("hidden"),i>-1)a._keyUpAndDown(t.targetVal,t.e,t.parentNode);else{if(e=/@/.test(t.targetVal)?t.targetVal.replace(/@.*/,""):t.targetVal,n.onlyFlag){$(t.parentNode).append('<input type="hidden" class="hiddenCls"/>');for(var s='<ul class="auto-tip">',r=0;r<o.mailArr.length;r++)s+='<li class="p-index'+r+'"><span class="output-num"></span><em class="em" data-html="'+o.mailArr[r]+'">'+o.mailArr[r]+"</em></li>";s+="</ul>",n.onlyFlag=!1,$(t.parentNode).append(s),$(".auto-tip",t.parentNode).css({position:"absolute",top:t.height,width:t.width+"px",left:51,border:"1px solid #ccc","z-index":1e4})}$(".auto-tip li",t.parentNode).each((function(t,a){$(".output-num",a).html(e),!$(".output-num",a).hasClass(o.inputValColor)&&$(".output-num",a).addClass(o.inputValColor);var n=$.trim($(".em",a).attr("data-html"));$(a).attr({"data-html":e+""+n})})),a._accurateMate({target:t.target,parentNode:t.parentNode}),a._itemHover(t.parentNode),a._executeClick(t.parentNode)}},_accurateMate:function(t){var e=this,a=e.config,o=e.cache,n=$.trim($(t.target,t.parentNode).attr("data-html")),i=[];if(/@/.test(n)){var s=n.replace(/@.*/,""),r=n.replace(/.*@/,"");if($.map(a.mailArr,(function(t){new RegExp(r).test(t)&&i.push(t)})),i.length>0){$(".auto-tip",t.parentNode).html(""),$(".auto-tip",t.parentNode)&&$(".auto-tip",t.parentNode).hasClass("hidden")&&$(".auto-tip",t.parentNode).removeClass("hidden");for(var l="",d=0,c=i.length;d<c;d++)l+='<li class="p-index'+d+'"><span class="output-num"></span><em class="em" data-html="'+i[d]+'">'+i[d]+"</em></li>";$(".auto-tip",t.parentNode).html(l),$(".auto-tip li",t.parentNode).each((function(t,e){$(".output-num",e).html(s),!$(".output-num",e).hasClass(a.inputValColor)&&$(".output-num",e).addClass(a.inputValColor);var o=$.trim($(".em",e).attr("data-html"));$(e).attr("data-html",""),$(e).attr({"data-html":s+""+o})})),o.currentIndex=-1,o.oldIndex=-1,$(".auto-tip .output-num",t.parentNode).html(s),e._itemHover(t.parentNode),e._executeClick(t.parentNode)}else $(".auto-tip",t.parentNode)&&!$(".auto-tip",t.parentNode).hasClass("hidden")&&$(".auto-tip",t.parentNode).addClass("hidden"),$(".auto-tip",t.parentNode).html("")}},_itemHover:function(t){var e=this.config;this.cache;$(".auto-tip li",t).hover((function(t,a){!$(this).hasClass(e.hoverBg)&&$(this).addClass(e.hoverBg)}),(function(){$(this).hasClass(e.hoverBg)&&$(this).removeClass(e.hoverBg)}))},_removeBg:function(t){var e=this.config;$(".auto-tip li",t).each((function(t,a){$(a).hasClass(e.hoverBg)&&$(a).removeClass(e.hoverBg)}))},_keyUpAndDown:function(t,e,a){var o=this.cache,n=this.config;if($(".auto-tip li",a)&&$(".auto-tip li").length>0){var i=$(".auto-tip li",a).length,s=e.keyCode;if(o.oldIndex=o.currentIndex,38==s){if(-1==o.currentIndex?o.currentIndex=i-1:(o.currentIndex=o.currentIndex-1,o.currentIndex<0&&(o.currentIndex=i-1)),-1!==o.currentIndex){!$(".auto-tip .p-index"+o.currentIndex,a).hasClass(n.hoverBg)&&$(".auto-tip .p-index"+o.currentIndex,a).addClass(n.hoverBg).siblings().removeClass(n.hoverBg);var r=$(".auto-tip .p-index"+o.currentIndex,a).attr("data-html");$(n.targetCls,a).val(r),$(n.hiddenCls,a).val(r)}}else if(40==s){if(o.currentIndex==i-1?o.currentIndex=0:(o.currentIndex++,o.currentIndex>i-1&&(o.currentIndex=0)),-1!==o.currentIndex){!$(".auto-tip .p-index"+o.currentIndex,a).hasClass(n.hoverBg)&&$(".auto-tip .p-index"+o.currentIndex,a).addClass(n.hoverBg).siblings().removeClass(n.hoverBg);r=$(".auto-tip .p-index"+o.currentIndex,a).attr("data-html");$(n.targetCls,a).val(r),$(n.hiddenCls,a).val(r)}}else if(13==s){var l=$(".auto-tip .p-index"+o.oldIndex,a).attr("data-html");$(n.targetCls,a).val(l),$(n.hiddenCls,a).val(l),n.isSelectHide&&!$(".auto-tip",a).hasClass("hidden")&&$(".auto-tip",a).addClass("hidden"),n.callback&&$.isFunction(n.callback)&&n.callback(),o.currentIndex=-1,o.oldIndex=-1}}},_keyCode:function(t){for(var e=["17","18","38","40","37","39","33","34","35","46","36","13","45","44","145","19","20","9"],a=0,o=e.length;a<o;a++)if(t==e[a])return a;return-1},_executeClick:function(t){var e=this.config;$(".auto-tip li",t).unbind("click"),$(".auto-tip li",t).bind("click",(function(a){var o=$(this).attr("data-html");$(e.targetCls,t).val(o),e.isSelectHide&&!$(".auto-tip",t).hasClass("hidden")&&$(".auto-tip",t).addClass("hidden"),$(e.hiddenCls,t).val(o),e.callback&&$.isFunction(e.callback)&&e.callback()}))}},$((function(){new EmailAutoComplete({})}));