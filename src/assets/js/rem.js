/* eslint-disable*/
var autoSetRem = (function(doc, win) {
  var docEl = doc.documentElement,
      done = false,
      //监听屏幕宽度和横屏竖屏
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      set = function(paper) {
          if(paper==null){
              paper=750;
          }
          //获取屏幕宽度
          var clientWidth = docEl.clientWidth || win.innerWidth || screen.width;
          if (!clientWidth) return;
          docEl.style.fontSize = 100 * (clientWidth / paper) + 'px';
          done = true;
          return done;
      };
  return {
      set:set
  };
  //AbortifbrowserdoesnotsupportaddEventListener
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, set, false);
  doc.addEventListener('DOMContentLoaded', set, false);
})(document, window);

autoSetRem.set(750);
