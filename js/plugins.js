// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});


/*!
 * Propeller v1.1.0 (http://propeller.in): checkbox.js
 * Copyright 2016-2017 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 */

$( document ).ready(function() {
    $('.pmd-checkbox input').after('<span class="pmd-checkbox-label">&nbsp;</span>');
    // Ripple Effect //
    $(".pmd-checkbox-ripple-effect").on('mousedown', function(e) {
        var rippler = $(this);
        $('.ink').remove();
        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length === 0) {
            rippler.append('<span class="ink"></span>');
        }
        var ink = rippler.find(".ink");
        // prevent quick double clicks
        ink.removeClass("animate");
        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
        //  var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: 20, width: 20});
        }
        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;
        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
        setTimeout(function(){ 
            ink.remove();
        }, 1500);
    })
})  

/*! noUiSlider - 7.0.10 - 2014-12-27 14:50:47 */

!function(a){"use strict";function b(a,b){return Math.round(a/b)*b}function c(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function d(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function e(a,b,c){a.addClass(b),setTimeout(function(){a.removeClass(b)},c)}function f(a){return Math.max(Math.min(a,100),0)}function g(b){return a.isArray(b)?b:[b]}function h(a){var b=a.split(".");return b.length>1?b[1].length:0}function i(a,b){return 100/(b-a)}function j(a,b){return 100*b/(a[1]-a[0])}function k(a,b){return j(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function l(a,b){return b*(a[1]-a[0])/100+a[0]}function m(a,b){for(var c=1;a>=b[c];)c+=1;return c}function n(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=m(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+k([d,e],c)/i(f,g)}function o(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=m(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],l([d,e],(c-f)*i(f,g))}function p(a,c,d,e){if(100===e)return e;var f,g,h=m(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):c[h-1]?a[h-1]+b(e-a[h-1],c[h-1]):e}function q(a,b,d){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!c(e)||!c(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");d.xPct.push(e),d.xVal.push(b[0]),e?d.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(d.xSteps[0]=b[1])}function r(a,b,c){return b?void(c.xSteps[a]=j([c.xVal[a],c.xVal[a+1]],b)/i(c.xPct[a],c.xPct[a+1])):!0}function s(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)q(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)r(e,this.xNumSteps[e],this)}function t(a,b){if(!c(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function u(b,c){if("object"!=typeof c||a.isArray(c))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===c.min||void 0===c.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");b.spectrum=new s(c,b.snap,b.dir,b.singleStep)}function v(b,c){if(c=g(c),!a.isArray(c)||!c.length||c.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");b.handles=c.length,b.start=c}function w(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function x(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function y(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function z(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function A(a,b){if(!c(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function B(a,b){if(!c(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function C(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function D(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0;a.events={tap:c||f,drag:d,fixed:e,snap:f}}function E(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function F(b){var c,d={margin:0,limit:0,animate:!0,format:V};return c={step:{r:!1,t:t},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:C},snap:{r:!1,t:w},animate:{r:!1,t:x},range:{r:!0,t:u},orientation:{r:!1,t:z},margin:{r:!1,t:A},limit:{r:!1,t:B},behaviour:{r:!0,t:D},format:{r:!1,t:E}},b=a.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},b),a.each(c,function(a,c){if(void 0===b[a]){if(c.r)throw new Error("noUiSlider: '"+a+"' is required.");return!0}c.t(d,b[a])}),d.style=d.ort?"top":"left",d}function G(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[f(d),f(e)]):[d,e]}function H(a){a.preventDefault();var b,c,d=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g=a;return 0===a.type.indexOf("MSPointer")&&(f=!0),a.originalEvent&&(a=a.originalEvent),d&&(b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY),(e||f)&&(f||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),b=a.clientX+window.pageXOffset,c=a.clientY+window.pageYOffset),g.points=[b,c],g.cursor=e,g}function I(b,c){var d=a("<div><div/></div>").addClass(U[2]),e=["-lower","-upper"];return b&&e.reverse(),d.children().addClass(U[3]+" "+U[3]+e[c]),d}function J(a,b,c){switch(a){case 1:b.addClass(U[7]),c[0].addClass(U[6]);break;case 3:c[1].addClass(U[6]);case 2:c[0].addClass(U[7]);case 0:b.addClass(U[6])}}function K(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(I(b,d).appendTo(c));return e}function L(b,c,d){return d.addClass([U[0],U[8+b],U[4+c]].join(" ")),a("<div/>").appendTo(d).addClass(U[1])}function M(b,c,d){function i(){return C[["width","height"][c.ort]]()}function j(a){var b,c=[E.val()];for(b=0;b<a.length;b+=1)E.trigger(a[b],c)}function k(a){return 1===a.length?a[0]:c.dir?a.reverse():a}function l(a){return function(b,c){E.val([a?null:c,a?c:null],!0)}}function m(b){var c=a.inArray(b,N);E[0].linkAPI&&E[0].linkAPI[b]&&E[0].linkAPI[b].change(M[c],D[c].children(),E)}function n(b,d){var e=a.inArray(b,N);return d&&d.appendTo(D[e].children()),c.dir&&c.handles>1&&(e=1===e?0:1),l(e)}function o(){var a,b;for(a=0;a<N.length;a+=1)this.linkAPI&&this.linkAPI[b=N[a]]&&this.linkAPI[b].reconfirm(b)}function p(a,b,d,e){return a=a.replace(/\s/g,S+" ")+S,b.on(a,function(a){return E.attr("disabled")?!1:E.hasClass(U[14])?!1:(a=H(a),a.calcPoint=a.points[c.ort],void d(a,e))})}function q(a,b){var c,d=b.handles||D,e=!1,f=100*(a.calcPoint-b.start)/i(),g=d[0][0]!==D[0][0]?1:0;c=G(f,b.positions,d.length>1),e=v(d[0],c[g],1===d.length),d.length>1&&(e=v(d[1],c[g?0:1],!1)||e),e&&j(["slide"])}function r(b){a("."+U[15]).removeClass(U[15]),b.cursor&&a("body").css("cursor","").off(S),Q.off(S),E.removeClass(U[12]),j(["set","change"])}function s(b,c){1===c.handles.length&&c.handles[0].children().addClass(U[15]),b.stopPropagation(),p(T.move,Q,q,{start:b.calcPoint,handles:c.handles,positions:[F[0],F[D.length-1]]}),p(T.end,Q,r,null),b.cursor&&(a("body").css("cursor",a(b.target).css("cursor")),D.length>1&&E.addClass(U[12]),a("body").on("selectstart"+S,!1))}function t(b){var d,f=b.calcPoint,g=0;b.stopPropagation(),a.each(D,function(){g+=this.offset()[c.style]}),g=g/2>f||1===D.length?0:1,f-=C.offset()[c.style],d=100*f/i(),c.events.snap||e(E,U[14],300),v(D[g],d),j(["slide","set","change"]),c.events.snap&&s(b,{handles:[D[g]]})}function u(a){var b,c;if(!a.fixed)for(b=0;b<D.length;b+=1)p(T.start,D[b].children(),s,{handles:[D[b]]});a.tap&&p(T.start,C,t,{handles:D}),a.drag&&(c=C.find("."+U[7]).addClass(U[10]),a.fixed&&(c=c.add(C.children().not(c).children())),p(T.start,c,s,{handles:D}))}function v(a,b,d){var e=a[0]!==D[0][0]?1:0,g=F[0]+c.margin,h=F[1]-c.margin,i=F[0]+c.limit,j=F[1]-c.limit;return D.length>1&&(b=e?Math.max(b,g):Math.min(b,h)),d!==!1&&c.limit&&D.length>1&&(b=e?Math.min(b,i):Math.max(b,j)),b=I.getStep(b),b=f(parseFloat(b.toFixed(7))),b===F[e]?!1:(a.css(c.style,b+"%"),a.is(":first-child")&&a.toggleClass(U[17],b>50),F[e]=b,M[e]=I.fromStepping(b),m(N[e]),!0)}function w(a,b){var d,e,f;for(c.limit&&(a+=1),d=0;a>d;d+=1)e=d%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=c.format.from(f),(f===!1||isNaN(f)||v(D[e],I.toStepping(f),d===3-c.dir)===!1)&&m(N[e]))}function x(a){if(E[0].LinkIsEmitting)return this;var b,d=g(a);return c.dir&&c.handles>1&&d.reverse(),c.animate&&-1!==F[0]&&e(E,U[14],300),b=D.length>1?3:1,1===d.length&&(b=1),w(b,d),j(["set"]),this}function y(){var a,b=[];for(a=0;a<c.handles;a+=1)b[a]=c.format.to(M[a]);return k(b)}function z(){return a(this).off(S).removeClass(U.join(" ")).empty(),delete this.LinkUpdate,delete this.LinkConfirm,delete this.LinkDefaultFormatter,delete this.LinkDefaultFlag,delete this.reappend,delete this.vGet,delete this.vSet,delete this.getCurrentStep,delete this.getInfo,delete this.destroy,d}function A(){var b=a.map(F,function(a,b){var c=I.getApplicableStep(a),d=h(String(c[2])),e=M[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),i=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[[i,f]]});return k(b)}function B(){return d}var C,D,E=a(b),F=[-1,-1],I=c.spectrum,M=[],N=["lower","upper"].slice(0,c.handles);if(c.dir&&N.reverse(),b.LinkUpdate=m,b.LinkConfirm=n,b.LinkDefaultFormatter=c.format,b.LinkDefaultFlag="lower",b.reappend=o,E.hasClass(U[0]))throw new Error("Slider was already initialized.");C=L(c.dir,c.ort,E),D=K(c.handles,c.dir,C),J(c.connect,E,D),u(c.events),b.vSet=x,b.vGet=y,b.destroy=z,b.getCurrentStep=A,b.getOriginalOptions=B,b.getInfo=function(){return[I,c.style,c.ort]},E.val(c.start)}function N(a){var b=F(a,this);return this.each(function(){M(this,b,a)})}function O(b){return this.each(function(){if(!this.destroy)return void a(this).noUiSlider(b);var c=a(this).val(),d=this.destroy(),e=a.extend({},d,b);a(this).noUiSlider(e),this.reappend(),d.start===e.start&&a(this).val(c)})}function P(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}var Q=a(document),R=a.fn.val,S=".nui",T=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},U=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];s.prototype.getMargin=function(a){return 2===this.xPct.length?j(this.xVal,a):!1},s.prototype.toStepping=function(a){return a=n(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},s.prototype.fromStepping=function(a){return this.direction&&(a=100-a),d(o(this.xVal,this.xPct,a))},s.prototype.getStep=function(a){return this.direction&&(a=100-a),a=p(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},s.prototype.getApplicableStep=function(a){var b=m(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},s.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var V={to:function(a){return a.toFixed(2)},from:Number};a.fn.val=function(b){function c(a){return a.hasClass(U[0])?P:R}if(!arguments.length){var d=a(this[0]);return c(d).call(d)}var e=a.isFunction(b);return this.each(function(d){var f=b,g=a(this);e&&(f=b.call(this,d,g.val())),c(g).call(g,f)})},a.fn.noUiSlider=function(a,b){switch(a){case"step":return this[0].getCurrentStep();case"options":return this[0].getOriginalOptions()}return(b?O:N).call(this,a)}}(window.jQuery||window.Zepto);

/*! nouislider - 8.5.1 - 2016-04-24 16:00:29 */

(function (factory) {

    if ( typeof define === 'function' && define.amd ) {

        // AMD. Register as an anonymous module.
        define([], factory);

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

    'use strict';


    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function(a){
            return !this[a] ? this[a] = true : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest ( value, to ) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset ( elem ) {

    var rect = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        docElem = doc.documentElement,
        pageOffset = getPageOffset();

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
            pageOffset.x = 0;
        }

        return {
            top: rect.top + pageOffset.y - docElem.clientTop,
            left: rect.left + pageOffset.x - docElem.clientLeft
        };
    }

    // Checks whether a value is numerical.
    function isNumeric ( a ) {
        return typeof a === 'number' && !isNaN( a ) && isFinite( a );
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor ( element, className, duration ) {
        addClass(element, className);
        setTimeout(function(){
            removeClass(element, className);
        }, duration);
    }

    // Limits a value to 0 - 100
    function limit ( a ) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    function asArray ( a ) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals ( numStr ) {
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass ( el, className ) {
        if ( el.classList ) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass ( el, className ) {
        if ( el.classList ) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass ( el, className ) {
        return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset ( ) {

        var supportPageOffset = window.pageXOffset !== undefined,
            isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
            x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
            y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions ( ) {

        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled ? {
            start: 'pointerdown',
            move: 'pointermove',
            end: 'pointerup'
        } : window.navigator.msPointerEnabled ? {
            start: 'MSPointerDown',
            move: 'MSPointerMove',
            end: 'MSPointerUp'
        } : {
            start: 'mousedown touchstart',
            move: 'mousemove touchmove',
            end: 'mouseup touchend'
        };
    }


// Value calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio ( pa, pb ) {
        return (100 / (pb - pa));
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage ( range, value ) {
        return (value * 100) / ( range[1] - range[0] );
    }

    // (percentage) Where is this value on this range?
    function toPercentage ( range, value ) {
        return fromPercentage( range, range[0] < 0 ?
            value + Math.abs(range[0]) :
                value - range[0] );
    }

    // (value) How much is this percentage on this range?
    function isPercentage ( range, value ) {
        return ((value * ( range[1] - range[0] )) / 100) + range[0];
    }


// Range conversion

    function getJ ( value, arr ) {

        var j = 1;

        while ( value >= arr[j] ){
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping ( xVal, xPct, value ) {

        if ( value >= xVal.slice(-1)[0] ){
            return 100;
        }

        var j = getJ( value, xVal ), va, vb, pa, pb;

        va = xVal[j-1];
        vb = xVal[j];
        pa = xPct[j-1];
        pb = xPct[j];

        return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping ( xVal, xPct, value ) {

        // There is no range group that fits 100
        if ( value >= 100 ){
            return xVal.slice(-1)[0];
        }

        var j = getJ( value, xPct ), va, vb, pa, pb;

        va = xVal[j-1];
        vb = xVal[j];
        pa = xPct[j-1];
        pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep ( xPct, xSteps, snap, value ) {

        if ( value === 100 ) {
            return value;
        }

        var j = getJ( value, xPct ), a, b;

        // If 'snap' is set, steps are used as fixed points on the slider.
        if ( snap ) {

            a = xPct[j-1];
            b = xPct[j];

            // Find the closest position, a or b.
            if ((value - a) > ((b-a)/2)){
                return b;
            }

            return a;
        }

        if ( !xSteps[j-1] ){
            return value;
        }

        return xPct[j-1] + closest(
            value - xPct[j-1],
            xSteps[j-1]
        );
    }


// Entry parsing

    function handleEntryPoint ( index, value, that ) {

        var percentage;

        // Wrap numerical input in an array.
        if ( typeof value === "number" ) {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
            throw new Error("noUiSlider: 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if ( index === 'min' ) {
            percentage = 0;
        } else if ( index === 'max' ) {
            percentage = 100;
        } else {
            percentage = parseFloat( index );
        }

        // Check for correct input.
        if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push( percentage );
        that.xVal.push( value[0] );

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if ( !percentage ) {
            if ( !isNaN( value[1] ) ) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push( isNaN(value[1]) ? false : value[1] );
        }
    }

    function handleStepPoint ( i, n, that ) {

        // Ignore 'false' stepping.
        if ( !n ) {
            return true;
        }

        // Factor to range ratio
        that.xSteps[i] = fromPercentage([
             that.xVal[i]
            ,that.xVal[i+1]
        ], n) / subRangeRatio (
            that.xPct[i],
            that.xPct[i+1] );
    }


// Interface

    // The interface to Spectrum handles all direction-based
    // conversions, so the above values are unaware.

    function Spectrum ( entry, snap, direction, singleStep ) {

        this.xPct = [];
        this.xVal = [];
        this.xSteps = [ singleStep || false ];
        this.xNumSteps = [ false ];

        this.snap = snap;
        this.direction = direction;

        var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

        // Map the object keys to an array.
        for ( index in entry ) {
            if ( entry.hasOwnProperty(index) ) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if ( ordered.length && typeof ordered[0][0] === "object" ) {
            ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
        } else {
            ordered.sort(function(a, b) { return a[0] - b[0]; });
        }


        // Convert all entries to subranges.
        for ( index = 0; index < ordered.length; index++ ) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for ( index = 0; index < this.xNumSteps.length; index++ ) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getMargin = function ( value ) {
        return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
    };

    Spectrum.prototype.toStepping = function ( value ) {

        value = toStepping( this.xVal, this.xPct, value );

        // Invert the value if this is a right-to-left slider.
        if ( this.direction ) {
            value = 100 - value;
        }

        return value;
    };

    Spectrum.prototype.fromStepping = function ( value ) {

        // Invert the value if this is a right-to-left slider.
        if ( this.direction ) {
            value = 100 - value;
        }

        return fromStepping( this.xVal, this.xPct, value );
    };

    Spectrum.prototype.getStep = function ( value ) {

        // Find the proper step for rtl sliders by search in inverse direction.
        // Fixes issue #262.
        if ( this.direction ) {
            value = 100 - value;
        }

        value = getStep(this.xPct, this.xSteps, this.snap, value );

        if ( this.direction ) {
            value = 100 - value;
        }

        return value;
    };

    Spectrum.prototype.getApplicableStep = function ( value ) {

        // If the value is 100%, return the negative step twice.
        var j = getJ(value, this.xPct), offset = value === 100 ? 2 : 1;
        return [this.xNumSteps[j-2], this.xVal[j-offset], this.xNumSteps[j-offset]];
    };

    // Outside testing
    Spectrum.prototype.convert = function ( value ) {
        return this.getStep(this.toStepping(value));
    };

/*  Every input option is tested and parsed. This'll prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */

    var defaultFormatter = { 'to': function( value ){
        return value !== undefined && value.toFixed(2);
    }, 'from': Number };

    function testStep ( parsed, entry ) {

        if ( !isNumeric( entry ) ) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testRange ( parsed, entry ) {

        // Filter incorrect input.
        if ( typeof entry !== 'object' || Array.isArray(entry) ) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }

        // Catch missing start or end.
        if ( entry.min === undefined || entry.max === undefined ) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if ( entry.min === entry.max ) {
            throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
    }

    function testStart ( parsed, entry ) {

        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if ( !Array.isArray( entry ) || !entry.length || entry.length > 2 ) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap ( parsed, entry ) {

        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if ( typeof entry !== 'boolean' ){
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
    }

    function testAnimate ( parsed, entry ) {

        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if ( typeof entry !== 'boolean' ){
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration ( parsed, entry ) {

        parsed.animationDuration = entry;

        if ( typeof entry !== 'number' ){
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
    }

    function testConnect ( parsed, entry ) {

        if ( entry === 'lower' && parsed.handles === 1 ) {
            parsed.connect = 1;
        } else if ( entry === 'upper' && parsed.handles === 1 ) {
            parsed.connect = 2;
        } else if ( entry === true && parsed.handles === 2 ) {
            parsed.connect = 3;
        } else if ( entry === false ) {
            parsed.connect = 0;
        } else {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
    }

    function testOrientation ( parsed, entry ) {

        // Set orientation to an a numerical value for easy
        // array selection.
        switch ( entry ){
          case 'horizontal':
            parsed.ort = 0;
            break;
          case 'vertical':
            parsed.ort = 1;
            break;
          default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }

    function testMargin ( parsed, entry ) {

        if ( !isNumeric(entry) ){
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }

        // Issue #582
        if ( entry === 0 ) {
            return;
        }

        parsed.margin = parsed.spectrum.getMargin(entry);

        if ( !parsed.margin ) {
            throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.");
        }
    }

    function testLimit ( parsed, entry ) {

        if ( !isNumeric(entry) ){
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getMargin(entry);

        if ( !parsed.limit ) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.");
        }
    }

    function testDirection ( parsed, entry ) {

        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch ( entry ) {
          case 'ltr':
            parsed.dir = 0;
            break;
          case 'rtl':
            parsed.dir = 1;
            parsed.connect = [0,2,1,3][parsed.connect];
            break;
          default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }

    function testBehaviour ( parsed, entry ) {

        // Make sure the input is a string.
        if ( typeof entry !== 'string' ) {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf('tap') >= 0,
            drag = entry.indexOf('drag') >= 0,
            fixed = entry.indexOf('fixed') >= 0,
            snap = entry.indexOf('snap') >= 0,
            hover = entry.indexOf('hover') >= 0;

        // Fix #472
        if ( drag && !parsed.connect ) {
            throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover
        };
    }

    function testTooltips ( parsed, entry ) {

        var i;

        if ( entry === false ) {
            return;
        } else if ( entry === true ) {

            parsed.tooltips = [];

            for ( i = 0; i < parsed.handles; i++ ) {
                parsed.tooltips.push(true);
            }

        } else {

            parsed.tooltips = asArray(entry);

            if ( parsed.tooltips.length !== parsed.handles ) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function(formatter){
                if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testFormat ( parsed, entry ) {

        parsed.format = entry;

        // Any object with a to and from method is supported.
        if ( typeof entry.to === 'function' && typeof entry.from === 'function' ) {
            return true;
        }

        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }

    function testCssPrefix ( parsed, entry ) {

        if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses ( parsed, entry ) {

        if ( entry !== undefined && typeof entry !== 'object' ) {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }

        if ( typeof parsed.cssPrefix === 'string' ) {
            parsed.cssClasses = {};

            for ( var key in entry ) {
                if ( !entry.hasOwnProperty(key) ) { continue; }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions ( options ) {

        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            animate: true,
            animationDuration: 300,
            format: defaultFormatter
        }, tests;

        // Tests are executed in the order they are presented here.
        tests = {
            'step': { r: false, t: testStep },
            'start': { r: true, t: testStart },
            'connect': { r: true, t: testConnect },
            'direction': { r: true, t: testDirection },
            'snap': { r: false, t: testSnap },
            'animate': { r: false, t: testAnimate },
            'animationDuration': { r: false, t: testAnimationDuration },
            'range': { r: true, t: testRange },
            'orientation': { r: false, t: testOrientation },
            'margin': { r: false, t: testMargin },
            'limit': { r: false, t: testLimit },
            'behaviour': { r: true, t: testBehaviour },
            'format': { r: false, t: testFormat },
            'tooltips': { r: false, t: testTooltips },
            'cssPrefix': { r: false, t: testCssPrefix },
            'cssClasses': { r: false, t: testCssClasses }
        };

        var defaults = {
            'connect': false,
            'direction': 'ltr',
            'behaviour': 'tap',
            'orientation': 'horizontal',
            'cssPrefix' : 'noUi-',
            'cssClasses': {
                target: 'target',
                base: 'base',
                origin: 'origin',
                handle: 'handle',
                handleLower: 'handle-lower',
                handleUpper: 'handle-upper',
                horizontal: 'horizontal',
                vertical: 'vertical',
                background: 'background',
                connect: 'connect',
                ltr: 'ltr',
                rtl: 'rtl',
                draggable: 'draggable',
                drag: 'state-drag',
                tap: 'state-tap',
                active: 'active',
                stacking: 'stacking',
                tooltip: 'tooltip',
                pips: 'pips',
                pipsHorizontal: 'pips-horizontal',
                pipsVertical: 'pips-vertical',
                marker: 'marker',
                markerHorizontal: 'marker-horizontal',
                markerVertical: 'marker-vertical',
                markerNormal: 'marker-normal',
                markerLarge: 'marker-large',
                markerSub: 'marker-sub',
                value: 'value',
                valueHorizontal: 'value-horizontal',
                valueVertical: 'value-vertical',
                valueNormal: 'value-normal',
                valueLarge: 'value-large',
                valueSub: 'value-sub'
            }
        };

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function( name ){

            // If the option isn't set, but it is required, throw an error.
            if ( options[name] === undefined && defaults[name] === undefined ) {

                if ( tests[name].r ) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
        });

        // Forward pips options
        parsed.pips = options.pips;

        // Pre-define the styles.
        parsed.style = parsed.ort ? 'top' : 'left';

        return parsed;
    }


function closure ( target, options, originalOptions ){
    var
        actions = getActions( ),
        // All variables local to 'closure' are prefixed with 'scope_'
        scope_Target = target,
        scope_Locations = [-1, -1],
        scope_Base,
        scope_Handles,
        scope_Spectrum = options.spectrum,
        scope_Values = [],
        scope_Events = {},
        scope_Self;


    // Delimit proposed values for handle positions.
    function getPositions ( a, b, delimit ) {

        // Add movement to current position.
        var c = a + b[0], d = a + b[1];

        // Only alter the other position on drag,
        // not on standard sliding.
        if ( delimit ) {
            if ( c < 0 ) {
                d += Math.abs(c);
            }
            if ( d > 100 ) {
                c -= ( d - 100 );
            }

            // Limit values to 0 and 100.
            return [limit(c), limit(d)];
        }

        return [c,d];
    }

    // Provide a clean event with standardized offset values.
    function fixEvent ( e, pageOffset ) {

        // Prevent scrolling and panning on touch events, while
        // attempting to slide. The tap event also depends on this.
        e.preventDefault();

        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf('touch') === 0,
            mouse = e.type.indexOf('mouse') === 0,
            pointer = e.type.indexOf('pointer') === 0,
            x,y, event = e;

        // IE10 implemented pointer events with a prefix;
        if ( e.type.indexOf('MSPointer') === 0 ) {
            pointer = true;
        }

        if ( touch ) {
            // noUiSlider supports one movement at a time,
            // so we can select the first 'changedTouch'.
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
        }

        pageOffset = pageOffset || getPageOffset();

        if ( mouse || pointer ) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }

        event.pageOffset = pageOffset;
        event.points = [x, y];
        event.cursor = mouse || pointer; // Fix #435

        return event;
    }

    // Append a handle to the base.
    function addHandle ( direction, index ) {

        var origin = document.createElement('div'),
            handle = document.createElement('div'),
            classModifier = [options.cssClasses.handleLower, options.cssClasses.handleUpper];

        if ( direction ) {
            classModifier.reverse();
        }

        addClass(handle, options.cssClasses.handle);
        addClass(handle, classModifier[index]);

        addClass(origin, options.cssClasses.origin);
        origin.appendChild(handle);

        return origin;
    }

    // Add the proper connection classes.
    function addConnection ( connect, target, handles ) {

        // Apply the required connection classes to the elements
        // that need them. Some classes are made up for several
        // segments listed in the class list, to allow easy
        // renaming and provide a minor compression benefit.
        switch ( connect ) {
            case 1: addClass(target, options.cssClasses.connect);
                    addClass(handles[0], options.cssClasses.background);
                    break;
            case 3: addClass(handles[1], options.cssClasses.background);
                    /* falls through */
            case 2: addClass(handles[0], options.cssClasses.connect);
                    /* falls through */
            case 0: addClass(target, options.cssClasses.background);
                    break;
        }
    }

    // Add handles to the slider base.
    function addHandles ( nrHandles, direction, base ) {

        var index, handles = [];

        // Append handles.
        for ( index = 0; index < nrHandles; index += 1 ) {

            // Keep a list of all added handles.
            handles.push( base.appendChild(addHandle( direction, index )) );
        }

        return handles;
    }

    // Initialize a single slider.
    function addSlider ( direction, orientation, target ) {

        // Apply classes and data to the target.
        addClass(target, options.cssClasses.target);

        if ( direction === 0 ) {
            addClass(target, options.cssClasses.ltr);
        } else {
            addClass(target, options.cssClasses.rtl);
        }

        if ( orientation === 0 ) {
            addClass(target, options.cssClasses.horizontal);
        } else {
            addClass(target, options.cssClasses.vertical);
        }

        var div = document.createElement('div');
        addClass(div, options.cssClasses.base);
        target.appendChild(div);
        return div;
    }


    function addTooltip ( handle, index ) {

        if ( !options.tooltips[index] ) {
            return false;
        }

        var element = document.createElement('div');
        element.className = options.cssClasses.tooltip;
        return handle.firstChild.appendChild(element);
    }

    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips ( ) {

        if ( options.dir ) {
            options.tooltips.reverse();
        }

        // Tooltips are added with options.tooltips in original order.
        var tips = scope_Handles.map(addTooltip);

        if ( options.dir ) {
            tips.reverse();
            options.tooltips.reverse();
        }

        bindEvent('update', function(f, o, r) {
            if ( tips[o] ) {
                tips[o].innerHTML = options.tooltips[o] === true ? f[o] : options.tooltips[o].to(r[o]);
            }
        });
    }


    function getGroup ( mode, values, stepped ) {

        // Use the range.
        if ( mode === 'range' || mode === 'steps' ) {
            return scope_Spectrum.xVal;
        }

        if ( mode === 'count' ) {

            // Divide 0 - 100 in 'count' parts.
            var spread = ( 100 / (values-1) ), v, i = 0;
            values = [];

            // List these parts and have them handled as 'positions'.
            while ((v=i++*spread) <= 100 ) {
                values.push(v);
            }

            mode = 'positions';
        }

        if ( mode === 'positions' ) {

            // Map all percentages to on-range values.
            return values.map(function( value ){
                return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
            });
        }

        if ( mode === 'values' ) {

            // If the value must be stepped, it needs to be converted to a percentage first.
            if ( stepped ) {

                return values.map(function( value ){

                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
                });

            }

            // Otherwise, we can simply use the values.
            return values;
        }
    }

    function generateSpread ( density, mode, group ) {

        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return (value + increment).toFixed(7) / 1;
        }

        var originalSpectrumDirection = scope_Spectrum.direction,
            indexes = {},
            firstInRange = scope_Spectrum.xVal[0],
            lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1],
            ignoreFirst = false,
            ignoreLast = false,
            prevPct = 0;

        // This function loops the spectrum in an ltr linear fashion,
        // while the toStepping method is direction aware. Trick it into
        // believing it is ltr.
        scope_Spectrum.direction = 0;

        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function(a, b){ return a - b; }));

        // Make sure the range starts with the first element.
        if ( group[0] !== firstInRange ) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }

        // Likewise for the last one.
        if ( group[group.length - 1] !== lastInRange ) {
            group.push(lastInRange);
            ignoreLast = true;
        }

        group.forEach(function ( current, index ) {

            // Get the current step and the lower + upper positions.
            var step, i, q,
                low = current,
                high = group[index+1],
                newPct, pctDifference, pctPos, type,
                steps, realSteps, stepsize;

            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if ( mode === 'steps' ) {
                step = scope_Spectrum.xNumSteps[ index ];
            }

            // Default to a 'full' step.
            if ( !step ) {
                step = high-low;
            }

            // Low can be 0, so test for false. If high is undefined,
            // we are at the last subrange. Index 0 is already handled.
            if ( low === false || high === undefined ) {
                return;
            }

            // Find all steps in the subrange.
            for ( i = low; i <= high; i = safeIncrement(i, step) ) {

                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping( i );
                pctDifference = newPct - prevPct;

                steps = pctDifference / density;
                realSteps = Math.round(steps);

                // This ratio represents the ammount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepsize = pctDifference/realSteps;

                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for ( q = 1; q <= realSteps; q += 1 ) {

                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + ( q * stepsize );
                    indexes[pctPos.toFixed(5)] = ['x', 0];
                }

                // Determine the point type.
                type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if ( !index && ignoreFirst ) {
                    type = 0;
                }

                if ( !(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }

                // Update the percentage count.
                prevPct = newPct;
            }
        });

        // Reset the spectrum.
        scope_Spectrum.direction = originalSpectrumDirection;

        return indexes;
    }

    function addMarking ( spread, filterFunc, formatter ) {

        var element = document.createElement('div'),
            out = '',
            valueSizeClasses = [
                options.cssClasses.valueNormal,
                options.cssClasses.valueLarge,
                options.cssClasses.valueSub
            ],
            markerSizeClasses = [
                options.cssClasses.markerNormal,
                options.cssClasses.markerLarge,
                options.cssClasses.markerSub
            ],
            valueOrientationClasses = [
                options.cssClasses.valueHorizontal,
                options.cssClasses.valueVertical
            ],
            markerOrientationClasses = [
                options.cssClasses.markerHorizontal,
                options.cssClasses.markerVertical
            ];

        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

        function getClasses( type, source ){
            var a = source === options.cssClasses.value,
                orientationClasses = a ? valueOrientationClasses : markerOrientationClasses,
                sizeClasses = a ? valueSizeClasses : markerSizeClasses;

            return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
        }

        function getTags( offset, source, values ) {
            return 'class="' + getClasses(values[1], source) + '" style="' + options.style + ': ' + offset + '%"';
        }

        function addSpread ( offset, values ){

            if ( scope_Spectrum.direction ) {
                offset = 100 - offset;
            }

            // Apply the filter function, if it is set.
            values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

            // Add a marker for every point
            out += '<div ' + getTags(offset, options.cssClasses.marker, values) + '></div>';

            // Values are only appended for points marked '1' or '2'.
            if ( values[1] ) {
                out += '<div ' + getTags(offset, options.cssClasses.value, values) + '>' + formatter.to(values[0]) + '</div>';
            }
        }

        // Append all points.
        Object.keys(spread).forEach(function(a){
            addSpread(a, spread[a]);
        });

        element.innerHTML = out;

        return element;
    }

    function pips ( grid ) {

    var mode = grid.mode,
        density = grid.density || 1,
        filter = grid.filter || false,
        values = grid.values || false,
        stepped = grid.stepped || false,
        group = getGroup( mode, values, stepped ),
        spread = generateSpread( density, mode, group ),
        format = grid.format || {
            to: Math.round
        };

        return scope_Target.appendChild(addMarking(
            spread,
            filter,
            format
        ));
    }


    // Shorthand for base dimensions.
    function baseSize ( ) {
        var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
        return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
    }

    // External event handling
    function fireEvent ( event, handleNumber, tap ) {

        var i;

        // During initialization, do not fire events.
        for ( i = 0; i < options.handles; i++ ) {
            if ( scope_Locations[i] === -1 ) {
                return;
            }
        }

        if ( handleNumber !== undefined && options.handles !== 1 ) {
            handleNumber = Math.abs(handleNumber - options.dir);
        }

        Object.keys(scope_Events).forEach(function( targetEvent ) {

            var eventType = targetEvent.split('.')[0];

            if ( event === eventType ) {
                scope_Events[targetEvent].forEach(function( callback ) {

                    callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self,
                        // Return values as array, so arg_1[arg_2] is always valid.
                        asArray(valueGet()),
                        // Handle index, 0 or 1
                        handleNumber,
                        // Unformatted slider values
                        asArray(inSliderOrder(Array.prototype.slice.call(scope_Values))),
                        // Event is fired by tap, true or false
                        tap || false,
                        // Left offset of the handle, in relation to the slider
                        scope_Locations
                    );
                });
            }
        });
    }

    // Returns the input array, respecting the slider direction configuration.
    function inSliderOrder ( values ) {

        // If only one handle is used, return a single value.
        if ( values.length === 1 ){
            return values[0];
        }

        if ( options.dir ) {
            return values.reverse();
        }

        return values;
    }


    // Handler for attaching events trough a proxy.
    function attach ( events, element, callback, data ) {

        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList

        var method = function ( e ){

            if ( scope_Target.hasAttribute('disabled') ) {
                return false;
            }

            // Stop if an active 'tap' transition is taking place.
            if ( hasClass(scope_Target, options.cssClasses.tap) ) {
                return false;
            }

            e = fixEvent(e, data.pageOffset);

            // Ignore right or middle clicks on start #454
            if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
                return false;
            }

            // Ignore right or middle clicks on start #454
            if ( data.hover && e.buttons ) {
                return false;
            }

            e.calcPoint = e.points[ options.ort ];

            // Call the event handler with the event [ and additional data ].
            callback ( e, data );

        }, methods = [];

        // Bind a closure on the target for every event type.
        events.split(' ').forEach(function( eventName ){
            element.addEventListener(eventName, method, false);
            methods.push([eventName, method]);
        });

        return methods;
    }

    // Handle movement on document for handle and range drag.
    function move ( event, data ) {

        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
            return end(event, data);
        }

        var handles = data.handles || scope_Handles, positions, state = false,
            proposal = ((event.calcPoint - data.start) * 100) / data.baseSize,
            handleNumber = handles[0] === scope_Handles[0] ? 0 : 1, i;

        // Calculate relative positions for the handles.
        positions = getPositions( proposal, data.positions, handles.length > 1);

        state = setHandle ( handles[0], positions[handleNumber], handles.length === 1 );

        if ( handles.length > 1 ) {

            state = setHandle ( handles[1], positions[handleNumber?0:1], false ) || state;

            if ( state ) {
                // fire for both handles
                for ( i = 0; i < data.handles.length; i++ ) {
                    fireEvent('slide', i);
                }
            }
        } else if ( state ) {
            // Fire for a single handle
            fireEvent('slide', handleNumber);
        }
    }

    // Unbind move events on document, call callbacks.
    function end ( event, data ) {

        // The handle is no longer active, so remove the class.
        var active = scope_Base.querySelector( '.' + options.cssClasses.active ),
            handleNumber = data.handles[0] === scope_Handles[0] ? 0 : 1;

        if ( active !== null ) {
            removeClass(active, options.cssClasses.active);
        }

        // Remove cursor styles and text-selection events bound to the body.
        if ( event.cursor ) {
            document.body.style.cursor = '';
            document.body.removeEventListener('selectstart', document.body.noUiListener);
        }

        var d = document.documentElement;

        // Unbind the move and end events, which are added on 'start'.
        d.noUiListeners.forEach(function( c ) {
            d.removeEventListener(c[0], c[1]);
        });

        // Remove dragging class.
        removeClass(scope_Target, options.cssClasses.drag);

        // Fire the change and set events.
        fireEvent('set', handleNumber);
        fireEvent('change', handleNumber);

        // If this is a standard handle movement, fire the end event.
        if ( data.handleNumber !== undefined ) {
            fireEvent('end', data.handleNumber);
        }
    }

    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave ( event, data ) {
        if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
            end ( event, data );
        }
    }

    // Bind move events on document.
    function start ( event, data ) {

        var d = document.documentElement;

        // Mark the handle as 'active' so it can be styled.
        if ( data.handles.length === 1 ) {
            // Support 'disabled' handles
            if ( data.handles[0].hasAttribute('disabled') ) {
                return false;
            }

            addClass(data.handles[0].children[0], options.cssClasses.active);
        }

        // Fix #551, where a handle gets selected instead of dragged.
        event.preventDefault();

        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();

        // Attach the move and end events.
        var moveEvent = attach(actions.move, d, move, {
            start: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handles: data.handles,
            handleNumber: data.handleNumber,
            buttonsProperty: event.buttons,
            positions: [
                scope_Locations[0],
                scope_Locations[scope_Handles.length - 1]
            ]
        }), endEvent = attach(actions.end, d, end, {
            handles: data.handles,
            handleNumber: data.handleNumber
        });

        var outEvent = attach("mouseout", d, documentLeave, {
            handles: data.handles,
            handleNumber: data.handleNumber
        });

        d.noUiListeners = moveEvent.concat(endEvent, outEvent);

        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if ( event.cursor ) {

            // Prevent the 'I' cursor and extend the range-drag cursor.
            document.body.style.cursor = getComputedStyle(event.target).cursor;

            // Mark the target with a dragging state.
            if ( scope_Handles.length > 1 ) {
                addClass(scope_Target, options.cssClasses.drag);
            }

            var f = function(){
                return false;
            };

            document.body.noUiListener = f;

            // Prevent text selection when dragging the handles.
            document.body.addEventListener('selectstart', f, false);
        }

        if ( data.handleNumber !== undefined ) {
            fireEvent('start', data.handleNumber);
        }
    }

    // Move closest handle to tapped location.
    function tap ( event ) {

        var location = event.calcPoint, total = 0, handleNumber, to;

        // The tap event shouldn't propagate up and cause 'edge' to run.
        event.stopPropagation();

        // Add up the handle offsets.
        scope_Handles.forEach(function(a){
            total += offset(a)[ options.style ];
        });

        // Find the handle closest to the tapped position.
        handleNumber = ( location < total/2 || scope_Handles.length === 1 ) ? 0 : 1;

        // Check if handler is not disablet if yes set number to the next handler
        if (scope_Handles[handleNumber].hasAttribute('disabled')) {
            handleNumber = handleNumber ? 0 : 1;
        }

        location -= offset(scope_Base)[ options.style ];

        // Calculate the new position.
        to = ( location * 100 ) / baseSize();

        if ( !options.events.snap ) {
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            addClassFor( scope_Target, options.cssClasses.tap, options.animationDuration );
        }

        // Support 'disabled' handles
        if ( scope_Handles[handleNumber].hasAttribute('disabled') ) {
            return false;
        }

        // Find the closest handle and calculate the tapped point.
        // The set handle to the new position.
        setHandle( scope_Handles[handleNumber], to );

        fireEvent('slide', handleNumber, true);
        fireEvent('set', handleNumber, true);
        fireEvent('change', handleNumber, true);

        if ( options.events.snap ) {
            start(event, { handles: [scope_Handles[handleNumber]] });
        }
    }

    // Fires a 'hover' event for a hovered mouse/pen position.
    function hover ( event ) {

        var location = event.calcPoint - offset(scope_Base)[ options.style ],
            to = scope_Spectrum.getStep(( location * 100 ) / baseSize()),
            value = scope_Spectrum.fromStepping( to );

        Object.keys(scope_Events).forEach(function( targetEvent ) {
            if ( 'hover' === targetEvent.split('.')[0] ) {
                scope_Events[targetEvent].forEach(function( callback ) {
                    callback.call( scope_Self, value );
                });
            }
        });
    }

    // Attach events to several slider parts.
    function events ( behaviour ) {

        // Attach the standard drag event to the handles.
        if ( !behaviour.fixed ) {

            scope_Handles.forEach(function( handle, index ){

                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attach ( actions.start, handle.children[0], start, {
                    handles: [ handle ],
                    handleNumber: index
                });
            });
        }

        // Attach the tap event to the slider base.
        if ( behaviour.tap ) {

            attach ( actions.start, scope_Base, tap, {
                handles: scope_Handles
            });
        }

        // Fire hover events
        if ( behaviour.hover ) {
            attach ( actions.move, scope_Base, hover, { hover: true } );
        }

        // Make the range draggable.
        if ( behaviour.drag ){

            var drag = [scope_Base.querySelector( '.' + options.cssClasses.connect )];
            addClass(drag[0], options.cssClasses.draggable);

            // When the range is fixed, the entire range can
            // be dragged by the handles. The handle in the first
            // origin will propagate the start event upward,
            // but it needs to be bound manually on the other.
            if ( behaviour.fixed ) {
                drag.push(scope_Handles[(drag[0] === scope_Handles[0] ? 1 : 0)].children[0]);
            }

            drag.forEach(function( element ) {
                attach ( actions.start, element, start, {
                    handles: scope_Handles
                });
            });
        }
    }


    // Test suggested values and apply margin, step.
    function setHandle ( handle, to, noLimitOption ) {

        var trigger = handle !== scope_Handles[0] ? 1 : 0,
            lowerMargin = scope_Locations[0] + options.margin,
            upperMargin = scope_Locations[1] - options.margin,
            lowerLimit = scope_Locations[0] + options.limit,
            upperLimit = scope_Locations[1] - options.limit;

        // For sliders with multiple handles,
        // limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if ( scope_Handles.length > 1 ) {
            to = trigger ? Math.max( to, lowerMargin ) : Math.min( to, upperMargin );
        }

        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmoveable. 'noLimitOption' is set to 'false'
        // for the .val() method, except for pass 4/4.
        if ( noLimitOption !== false && options.limit && scope_Handles.length > 1 ) {
            to = trigger ? Math.min ( to, lowerLimit ) : Math.max( to, upperLimit );
        }

        // Handle the step option.
        to = scope_Spectrum.getStep( to );

        // Limit percentage to the 0 - 100 range
        to = limit(to);

        // Return false if handle can't move
        if ( to === scope_Locations[trigger] ) {
            return false;
        }

        // Set the handle to the new position.
        // Use requestAnimationFrame for efficient painting.
        // No significant effect in Chrome, Edge sees dramatic
        // performace improvements.
        if ( window.requestAnimationFrame ) {
            window.requestAnimationFrame(function(){
                handle.style[options.style] = to + '%';
            });
        } else {
            handle.style[options.style] = to + '%';
        }

        // Force proper handle stacking
        if ( !handle.previousSibling ) {
            removeClass(handle, options.cssClasses.stacking);
            if ( to > 50 ) {
                addClass(handle, options.cssClasses.stacking);
            }
        }

        // Update locations.
        scope_Locations[trigger] = to;

        // Convert the value to the slider stepping/range.
        scope_Values[trigger] = scope_Spectrum.fromStepping( to );

        fireEvent('update', trigger);

        return true;
    }

    // Loop values from value method and apply them.
    function setValues ( count, values ) {

        var i, trigger, to;

        // With the limit option, we'll need another limiting pass.
        if ( options.limit ) {
            count += 1;
        }

        // If there are multiple handles to be set run the setting
        // mechanism twice for the first handle, to make sure it
        // can be bounced of the second one properly.
        for ( i = 0; i < count; i += 1 ) {

            trigger = i%2;

            // Get the current argument from the array.
            to = values[trigger];

            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if ( to !== null && to !== false ) {

                // If a formatted number was passed, attemt to decode it.
                if ( typeof to === 'number' ) {
                    to = String(to);
                }

                to = options.format.from( to );

                // Request an update for all links if the value was invalid.
                // Do so too if setting the handle fails.
                if ( to === false || isNaN(to) || setHandle( scope_Handles[trigger], scope_Spectrum.toStepping( to ), i === (3 - options.dir) ) === false ) {
                    fireEvent('update', trigger);
                }
            }
        }
    }

    // Set the slider value.
    function valueSet ( input, fireSetEvent ) {

        var count, values = asArray( input ), i;

        // Event fires by default
        fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

        // The RTL settings is implemented by reversing the front-end,
        // internal mechanisms are the same.
        if ( options.dir && options.handles > 1 ) {
            values.reverse();
        }

        // Animation is optional.
        // Make sure the initial values where set before using animated placement.
        if ( options.animate && scope_Locations[0] !== -1 ) {
            addClassFor( scope_Target, options.cssClasses.tap, options.animationDuration );
        }

        // Determine how often to set the handles.
        count = scope_Handles.length > 1 ? 3 : 1;

        if ( values.length === 1 ) {
            count = 1;
        }

        setValues ( count, values );

        // Fire the 'set' event for both handles.
        for ( i = 0; i < scope_Handles.length; i++ ) {

            // Fire the event only for handles that received a new value, as per #579
            if ( values[i] !== null && fireSetEvent ) {
                fireEvent('set', i);
            }
        }
    }

    // Get the slider value.
    function valueGet ( ) {

        var i, retour = [];

        // Get the value from all handles.
        for ( i = 0; i < options.handles; i += 1 ){
            retour[i] = options.format.to( scope_Values[i] );
        }

        return inSliderOrder( retour );
    }

    // Removes classes from the root and empties it.
    function destroy ( ) {

        for ( var key in options.cssClasses ) {
            if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
            removeClass(scope_Target, options.cssClasses[key]);
        }

        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }

        delete scope_Target.noUiSlider;
    }

    // Get the current step size for the slider.
    function getCurrentStep ( ) {

        // Check all locations, map them to their stepping point.
        // Get the step point, then find it in the input list.
        var retour = scope_Locations.map(function( location, index ){

            var step = scope_Spectrum.getApplicableStep( location ),

                // As per #391, the comparison for the decrement step can have some rounding issues.
                // Round the value to the precision used in the step.
                stepDecimals = countDecimals(String(step[2])),

                // Get the current numeric value
                value = scope_Values[index],

                // To move the slider 'one step up', the current step value needs to be added.
                // Use null if we are at the maximum slider value.
                increment = location === 100 ? null : step[2],

                // Going 'one step down' might put the slider in a different sub-range, so we
                // need to switch between the current or the previous step.
                prev = Number((value - step[2]).toFixed(stepDecimals)),

                // If the value fits the step, return the current step value. Otherwise, use the
                // previous step. Return null if the slider is at its minimum value.
                decrement = location === 0 ? null : (prev >= step[1]) ? step[2] : (step[0] || false);

            return [decrement, increment];
        });

        // Return values in the proper order.
        return inSliderOrder( retour );
    }

    // Attach an event to this slider, possibly including a namespace
    function bindEvent ( namespacedEvent, callback ) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);

        // If the event bound is 'update,' fire it immediately for all handles.
        if ( namespacedEvent.split('.')[0] === 'update' ) {
            scope_Handles.forEach(function(a, index){
                fireEvent('update', index);
            });
        }
    }

    // Undo attachment of event
    function removeEvent ( namespacedEvent ) {

        var event = namespacedEvent && namespacedEvent.split('.')[0],
            namespace = event && namespacedEvent.substring(event.length);

        Object.keys(scope_Events).forEach(function( bind ){

            var tEvent = bind.split('.')[0],
                tNamespace = bind.substring(tEvent.length);

            if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
                delete scope_Events[bind];
            }
        });
    }

    // Updateable: margin, limit, step, range, animate, snap
    function updateOptions ( optionsToUpdate, fireSetEvent ) {

        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated, 'direction' cannot, due to event binding.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet(), newOptions = testOptions({
            start: [0, 0],
            margin: optionsToUpdate.margin,
            limit: optionsToUpdate.limit,
            step: optionsToUpdate.step === undefined ? options.singleStep : optionsToUpdate.step,
            range: optionsToUpdate.range,
            animate: optionsToUpdate.animate,
            snap: optionsToUpdate.snap === undefined ? options.snap : optionsToUpdate.snap
        });

        ['margin', 'limit', 'range', 'animate'].forEach(function(name){

            // Only change options that we're actually passed to update.
            if ( optionsToUpdate[name] !== undefined ) {
                options[name] = optionsToUpdate[name];
            }
        });

        // Save current spectrum direction as testOptions in testRange call
        // doesn't rely on current direction
        newOptions.spectrum.direction = scope_Spectrum.direction;
        scope_Spectrum = newOptions.spectrum;

        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [-1, -1];
        valueSet(optionsToUpdate.start || v, fireSetEvent);
    }


    // Throw an error if the slider was already initialized.
    if ( scope_Target.noUiSlider ) {
        throw new Error('Slider was already initialized.');
    }

    // Create the base element, initialise HTML and set classes.
    // Add handles and links.
    scope_Base = addSlider( options.dir, options.ort, scope_Target );
    scope_Handles = addHandles( options.handles, options.dir, scope_Base );

    // Set the connect classes.
    addConnection ( options.connect, scope_Target, scope_Handles );

    if ( options.pips ) {
        pips(options.pips);
    }

    if ( options.tooltips ) {
        tooltips();
    }

    scope_Self = {
        destroy: destroy,
        steps: getCurrentStep,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        updateOptions: updateOptions,
        options: originalOptions, // Issue #600
        target: scope_Target, // Issue #597
        pips: pips // Issue #594
    };

    // Attach user events.
    events( options.events );

    return scope_Self;

}


    // Run the standard initializer
    function initialize ( target, originalOptions ) {

        if ( !target.nodeName ) {
            throw new Error('noUiSlider.create requires a single element.');
        }

        // Test the options and create the slider environment;
        var options = testOptions( originalOptions, target ),
            slider = closure( target, options, originalOptions );

        // Use the public value method to set the start values.
        slider.set(options.start);

        target.noUiSlider = slider;
        return slider;
    }

    // Use an object instead of a function for future expansibility;
    return {
        create: initialize
    };

}));

/*!
 * Propeller v1.1.0 (http://propeller.in)
 * Copyright 2016-2017 Digicorp, Inc.
 * Licensed under MIT (http://propeller.in/LICENSE)
 */

// Propeller form ------------------------------------------------------//
$( document ).ready(function() {
    // paper input
    $(".pmd-textfield-focused").remove();
    $(".pmd-textfield .form-control").after('<span class="pmd-textfield-focused"></span>');
    // floating label
    $('.pmd-textfield input.form-control').each(function () {
        if($(this).val() !== ""){
            $(this).closest('.pmd-textfield').addClass("pmd-textfield-floating-label-completed");
        }
    });
    // floating change label
    $(".pmd-textfield input.form-control").on('change', function() {
        if($(this).val() !== ""){
            $(this).closest('.pmd-textfield').addClass("pmd-textfield-floating-label-completed");
        }
    });
    // floating label animation
    $("body").on("focus",".pmd-textfield .form-control",function(){
        $(this).closest('.pmd-textfield').addClass("pmd-textfield-floating-label-active pmd-textfield-floating-label-completed");
    });
    // remove floating label animation
    $("body").on("focusout",".pmd-textfield .form-control",function(){
        if($(this).val() === ""){
            $(this).closest('.pmd-textfield').removeClass("pmd-textfield-floating-label-completed");
        }
        $(this).closest('.pmd-textfield').removeClass("pmd-textfield-floating-label-active");
    });
});

(function(){

    'use strict';

var
/** @const */ FormatOptions = [
    'decimals',
    'thousand',
    'mark',
    'prefix',
    'postfix',
    'encoder',
    'decoder',
    'negativeBefore',
    'negative',
    'edit',
    'undo'
];

// General

    // Reverse a string
    function strReverse ( a ) {
        return a.split('').reverse().join('');
    }

    // Check if a string starts with a specified prefix.
    function strStartsWith ( input, match ) {
        return input.substring(0, match.length) === match;
    }

    // Check is a string ends in a specified postfix.
    function strEndsWith ( input, match ) {
        return input.slice(-1 * match.length) === match;
    }

    // Throw an error if formatting options are incompatible.
    function throwEqualError( F, a, b ) {
        if ( (F[a] || F[b]) && (F[a] === F[b]) ) {
            throw new Error(a);
        }
    }

    // Check if a number is finite and not NaN
    function isValidNumber ( input ) {
        return typeof input === 'number' && isFinite( input );
    }

    // Provide rounding-accurate toFixed method.
    function toFixed ( value, decimals ) {
        var scale = Math.pow(10, decimals);
        return ( Math.round(value * scale) / scale).toFixed( decimals );
    }


// Formatting

    // Accept a number as input, output formatted string.
    function formatTo ( decimals, thousand, mark, prefix, postfix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

        var originalInput = input, inputIsNegative, inputPieces, inputBase, inputDecimals = '', output = '';

        // Apply user encoder to the input.
        // Expected outcome: number.
        if ( encoder ) {
            input = encoder(input);
        }

        // Stop if no valid number was provided, the number is infinite or NaN.
        if ( !isValidNumber(input) ) {
            return false;
        }

        // Rounding away decimals might cause a value of -0
        // when using very small ranges. Remove those cases.
        if ( decimals !== false && parseFloat(input.toFixed(decimals)) === 0 ) {
            input = 0;
        }

        // Formatting is done on absolute numbers,
        // decorated by an optional negative symbol.
        if ( input < 0 ) {
            inputIsNegative = true;
            input = Math.abs(input);
        }

        // Reduce the number of decimals to the specified option.
        if ( decimals !== false ) {
            input = toFixed( input, decimals );
        }

        // Transform the number into a string, so it can be split.
        input = input.toString();

        // Break the number on the decimal separator.
        if ( input.indexOf('.') !== -1 ) {
            inputPieces = input.split('.');

            inputBase = inputPieces[0];

            if ( mark ) {
                inputDecimals = mark + inputPieces[1];
            }

        } else {

        // If it isn't split, the entire number will do.
            inputBase = input;
        }

        // Group numbers in sets of three.
        if ( thousand ) {
            inputBase = strReverse(inputBase).match(/.{1,3}/g);
            inputBase = strReverse(inputBase.join( strReverse( thousand ) ));
        }

        // If the number is negative, prefix with negation symbol.
        if ( inputIsNegative && negativeBefore ) {
            output += negativeBefore;
        }

        // Prefix the number
        if ( prefix ) {
            output += prefix;
        }

        // Normal negative option comes after the prefix. Defaults to '-'.
        if ( inputIsNegative && negative ) {
            output += negative;
        }

        // Append the actual number.
        output += inputBase;
        output += inputDecimals;

        // Apply the postfix.
        if ( postfix ) {
            output += postfix;
        }

        // Run the output through a user-specified post-formatter.
        if ( edit ) {
            output = edit ( output, originalInput );
        }

        // All done.
        return output;
    }

    // Accept a sting as input, output decoded number.
    function formatFrom ( decimals, thousand, mark, prefix, postfix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

        var originalInput = input, inputIsNegative, output = '';

        // User defined pre-decoder. Result must be a non empty string.
        if ( undo ) {
            input = undo(input);
        }

        // Test the input. Can't be empty.
        if ( !input || typeof input !== 'string' ) {
            return false;
        }

        // If the string starts with the negativeBefore value: remove it.
        // Remember is was there, the number is negative.
        if ( negativeBefore && strStartsWith(input, negativeBefore) ) {
            input = input.replace(negativeBefore, '');
            inputIsNegative = true;
        }

        // Repeat the same procedure for the prefix.
        if ( prefix && strStartsWith(input, prefix) ) {
            input = input.replace(prefix, '');
        }

        // And again for negative.
        if ( negative && strStartsWith(input, negative) ) {
            input = input.replace(negative, '');
            inputIsNegative = true;
        }

        // Remove the postfix.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
        if ( postfix && strEndsWith(input, postfix) ) {
            input = input.slice(0, -1 * postfix.length);
        }

        // Remove the thousand grouping.
        if ( thousand ) {
            input = input.split(thousand).join('');
        }

        // Set the decimal separator back to period.
        if ( mark ) {
            input = input.replace(mark, '.');
        }

        // Prepend the negative symbol.
        if ( inputIsNegative ) {
            output += '-';
        }

        // Add the number
        output += input;

        // Trim all non-numeric characters (allow '.' and '-');
        output = output.replace(/[^0-9\.\-.]/g, '');

        // The value contains no parse-able number.
        if ( output === '' ) {
            return false;
        }

        // Covert to number.
        output = Number(output);

        // Run the user-specified post-decoder.
        if ( decoder ) {
            output = decoder(output);
        }

        // Check is the output is valid, otherwise: return false.
        if ( !isValidNumber(output) ) {
            return false;
        }

        return output;
    }


// Framework

    // Validate formatting options
    function validate ( inputOptions ) {

        var i, optionName, optionValue,
            filteredOptions = {};

        for ( i = 0; i < FormatOptions.length; i+=1 ) {

            optionName = FormatOptions[i];
            optionValue = inputOptions[optionName];

            if ( optionValue === undefined ) {

                // Only default if negativeBefore isn't set.
                if ( optionName === 'negative' && !filteredOptions.negativeBefore ) {
                    filteredOptions[optionName] = '-';
                // Don't set a default for mark when 'thousand' is set.
                } else if ( optionName === 'mark' && filteredOptions.thousand !== '.' ) {
                    filteredOptions[optionName] = '.';
                } else {
                    filteredOptions[optionName] = false;
                }

            // Floating points in JS are stable up to 7 decimals.
            } else if ( optionName === 'decimals' ) {
                if ( optionValue >= 0 && optionValue < 8 ) {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

            // These options, when provided, must be functions.
            } else if ( optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo' ) {
                if ( typeof optionValue === 'function' ) {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

            // Other options are strings.
            } else {

                if ( typeof optionValue === 'string' ) {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }
            }
        }

        // Some values can't be extracted from a
        // string if certain combinations are present.
        throwEqualError(filteredOptions, 'mark', 'thousand');
        throwEqualError(filteredOptions, 'prefix', 'negative');
        throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

        return filteredOptions;
    }

    // Pass all options as function arguments
    function passAll ( options, method, input ) {
        var i, args = [];

        // Add all options in order of FormatOptions
        for ( i = 0; i < FormatOptions.length; i+=1 ) {
            args.push(options[FormatOptions[i]]);
        }

        // Append the input, then call the method, presenting all
        // options as arguments.
        args.push(input);
        return method.apply('', args);
    }

    /** @constructor */
    function wNumb ( options ) {

        if ( !(this instanceof wNumb) ) {
            return new wNumb ( options );
        }

        if ( typeof options !== "object" ) {
            return;
        }

        options = validate(options);

        // Call 'formatTo' with proper arguments.
        this.to = function ( input ) {
            return passAll(options, formatTo, input);
        };

        // Call 'formatFrom' with proper arguments.
        this.from = function ( input ) {
            return passAll(options, formatFrom, input);
        };
    }

    /** @export */
    window.wNumb = wNumb;

}());
