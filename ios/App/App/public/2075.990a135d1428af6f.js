"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2075],{333:(z,v,a)=>{a.d(v,{c:()=>w,g:()=>_,h:()=>o,o:()=>c});var h=a(467);const o=(r,s)=>null!==s.closest(r),w=(r,s)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},s):s,_=r=>{const s={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(r).forEach(d=>s[d]=!0),s},k=/^[a-z][a-z0-9+\-.]*:/,c=function(){var r=(0,h.A)(function*(s,d,b,E){if(null!=s&&"#"!==s[0]&&!k.test(s)){const x=document.querySelector("ion-router");if(x)return null!=d&&d.preventDefault(),x.push(s,b,E)}return!1});return function(d,b,E,x){return r.apply(this,arguments)}}()},2075:(z,v,a)=>{a.r(v),a.d(v,{ion_menu:()=>A,ion_menu_button:()=>H,ion_menu_toggle:()=>N});var h=a(467),o=a(4261),w=a(3351),p=a(3617),_=a(1970),k=a(7192),c=a(4920),r=a(1702),s=a(9483),d=a(333),b=a(3992);a(8476),a(9986);const A=class{constructor(e){(0,o.r)(this,e),this.ionWillOpen=(0,o.d)(this,"ionWillOpen",7),this.ionWillClose=(0,o.d)(this,"ionWillClose",7),this.ionDidOpen=(0,o.d)(this,"ionDidOpen",7),this.ionDidClose=(0,o.d)(this,"ionDidClose",7),this.ionMenuChange=(0,o.d)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=_.G.createBlocker({disableScroll:!0}),this.didLoad=!1,this.operationCancelled=!1,this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=t=>{const n=(0,p.o)(document);n&&!n.contains(this.el)||this.trapKeyboardFocus(t,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.contentId=void 0,this.menuId=void 0,this.type=void 0,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(e,t){const n=this.contentEl;n&&(void 0!==t&&n.classList.remove(`menu-content-${t}`),n.classList.add(`menu-content-${e}`),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=(0,c.n)(this.side),this.animation=void 0}swipeGestureChanged(){this.updateState()}connectedCallback(){var e=this;return(0,h.A)(function*(){typeof customElements<"u"&&null!=customElements&&(yield customElements.whenDefined("ion-menu")),void 0===e.type&&(e.type=s.c.get("menuType","overlay"));const t=void 0!==e.contentId?document.getElementById(e.contentId):null;null!==t?(e.el.contains(t)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),e.contentEl=t,t.classList.add("menu-content"),e.typeChanged(e.type,void 0),e.sideChanged(),r.m._register(e),e.menuChanged(),e.gesture=(yield Promise.resolve().then(a.bind(a,8607))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:n=>e.canStart(n),onWillStart:()=>e.onWillStart(),onStart:()=>e.onStart(),onMove:n=>e.onMove(n),onEnd:n=>e.onEnd(n)}),e.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')})()}componentWillLoad(){this.inheritedAttributes=(0,c.i)(this.el)}componentDidLoad(){var e=this;return(0,h.A)(function*(){e.didLoad=!0;const t=e.el.closest("ion-split-pane");null!==t&&(e.isPaneVisible=yield t.isVisible()),e.menuChanged(),e.updateState()})()}menuChanged(){this.didLoad&&this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}disconnectedCallback(){var e=this;return(0,h.A)(function*(){yield e.close(!1),e.blocker.destroy(),r.m._unregister(e),e.animation&&e.animation.destroy(),e.gesture&&(e.gesture.destroy(),e.gesture=void 0),e.animation=void 0,e.contentEl=void 0})()}onSplitPaneChanged(e){const t=this.el.closest("ion-split-pane");null!==t&&t===e.target&&(this.isPaneVisible=e.detail.visible,this.updateState())}onBackdropClick(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close(void 0,p.B))}onKeydown(e){"Escape"===e.key&&this.close(void 0,p.B)}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(e=!0){return this.setOpen(!0,e)}close(e=!0,t){return this.setOpen(!1,e,t)}toggle(e=!0){return this.setOpen(!this._isOpen,e)}setOpen(e,t=!0,n){return r.m._setOpen(this,e,t,n)}trapKeyboardFocus(e,t){const n=e.target;if(n)if(this.el.contains(n))this.lastFocus=n;else{const{el:i}=this;(0,p.n)(i),this.lastFocus===t.activeElement&&(0,p.q)(i)}}_setOpen(e,t=!0,n){var i=this;return(0,h.A)(function*(){return!(!i._isActive()||i.isAnimating||e===i._isOpen||(i.beforeAnimation(e,n),yield i.loadAnimation(),yield i.startAnimation(e,t),i.operationCancelled?(i.operationCancelled=!1,1):(i.afterAnimation(e,n),0)))})()}loadAnimation(){var e=this;return(0,h.A)(function*(){const t=e.menuInnerEl.offsetWidth,n=(0,c.n)(e.side);if(t===e.width&&void 0!==e.animation&&n===e.isEndSide)return;e.width=t,e.isEndSide=n,e.animation&&(e.animation.destroy(),e.animation=void 0);const i=e.animation=yield r.m._createAnimation(e.type,e);s.c.getBoolean("animated",!0)||i.duration(0),i.fill("both")})()}startAnimation(e,t){var n=this;return(0,h.A)(function*(){const i=!e,u=(0,s.b)(n),f="ios"===u?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",m="ios"===u?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",l=n.animation.direction(i?"reverse":"normal").easing(i?m:f);t?yield l.play():l.play({sync:!0}),"reverse"===l.getDirection()&&l.direction("normal")})()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(e){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!r.m._getOpenSync()&&K(window,e.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen,p.G),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,c.m)(!1,"isAnimating has to be true")}onMove(e){if(!this.isAnimating||!this.animation)return void(0,c.m)(!1,"isAnimating has to be true");const n=O(e.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-n:n)}onEnd(e){if(!this.isAnimating||!this.animation)return void(0,c.m)(!1,"isAnimating has to be true");const t=this._isOpen,n=this.isEndSide,i=O(e.deltaX,t,n),u=this.width,f=i/u,m=e.velocityX,l=u/2,y=m>=0&&(m>.2||e.deltaX>l),I=m<=0&&(m<-.2||e.deltaX<-l),g=t?n?y:I:n?I:y;let L=!t&&g;t&&!g&&(L=!0),this.lastOnEnd=e.currentTime;let C=g?.001:-.001;C+=(0,w.g)([0,0],[.4,0],[.6,1],[1,1],(0,c.j)(0,f<0?.01:f,.9999))[0]||0;const $=this._isOpen?!g:g;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(L,p.G),{oneTimeCallback:!0}).progressEnd($?1:0,this._isOpen?1-C:C,300)}beforeAnimation(e,t){(0,c.m)(!this.isAnimating,"_before() should not be called while animating"),(0,s.a)("android")&&this.el.setAttribute("aria-hidden","true"),this.el.classList.add(M),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(S),this.contentEl&&(this.contentEl.classList.add(P),this.contentEl.setAttribute("aria-hidden","true")),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit({role:t})}afterAnimation(e,t){var n;this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?((0,s.a)("android")&&this.el.removeAttribute("aria-hidden"),this.ionDidOpen.emit(),(null===(n=document.activeElement)||void 0===n?void 0:n.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.removeAttribute("aria-hidden"),this.el.classList.remove(M),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(P),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(S),this.animation&&this.animation.stop(),this.ionDidClose.emit({role:t}),document.removeEventListener("focus",this.handleFocus,!0))}updateState(){const e=this._isActive();this.gesture&&this.gesture.enable(e&&this.swipeGesture),e||(this.isAnimating&&(this.operationCancelled=!0),this.afterAnimation(!1,p.G))}render(){const{type:e,disabled:t,el:n,isPaneVisible:i,inheritedAttributes:u,side:f}=this,m=(0,s.b)(this);return(0,o.h)(o.f,{key:"da96fdb4c5ddf60e615cc4cdda7ccdb3fd7e089b",onKeyDown:(0,k.shouldUseCloseWatcher)()?null:this.onKeydown,role:"navigation","aria-label":u["aria-label"]||"menu",class:{[m]:!0,[`menu-type-${e}`]:!0,"menu-enabled":!t,[`menu-side-${f}`]:!0,"menu-pane-visible":i,"split-pane-side":(0,d.h)("ion-split-pane",n)}},(0,o.h)("div",{key:"894e680fe227534711128c7aca980964ddb5a08a",class:"menu-inner",part:"container",ref:l=>this.menuInnerEl=l},(0,o.h)("slot",{key:"e9f5934518dc0cceaeadf1f2820614595fec6bc9"})),(0,o.h)("ion-backdrop",{key:"7282077817657b1bb6c155f1404c0a519fece993",ref:l=>this.backdropEl=l,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return(0,o.i)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},O=(e,t,n)=>Math.max(0,t!==n?-e:e),K=(e,t,n,i)=>n?t>=e.innerWidth-i:t<=i,M="show-menu",S="show-backdrop",P="menu-content-open";A.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const D=function(){var e=(0,h.A)(function*(t){const n=yield r.m.get(t);return!(!n||!(yield n.isActive()))});return function(n){return e.apply(this,arguments)}}(),H=(()=>{let e=class{constructor(t){var n=this;(0,o.r)(this,t),this.inheritedAttributes={},this.onClick=(0,h.A)(function*(){return r.m.toggle(n.menu)}),this.visible=!1,this.color=void 0,this.disabled=!1,this.menu=void 0,this.autoHide=!0,this.type="button"}componentWillLoad(){this.inheritedAttributes=(0,c.i)(this.el)}componentDidLoad(){this.visibilityChanged()}visibilityChanged(){var t=this;return(0,h.A)(function*(){t.visible=yield D(t.menu)})()}render(){const{color:t,disabled:n,inheritedAttributes:i}=this,u=(0,s.b)(this),f=s.c.get("menuIcon","ios"===u?b.u:b.v),m=this.autoHide&&!this.visible,l={type:this.type},y=i["aria-label"]||"menu";return(0,o.h)(o.f,{key:"7ec29715ce7926b7c2b08f3d9cac8aaa16b3dc28",onClick:this.onClick,"aria-disabled":n?"true":null,"aria-hidden":m?"true":null,class:(0,d.c)(t,{[u]:!0,button:!0,"menu-button-hidden":m,"menu-button-disabled":n,"in-toolbar":(0,d.h)("ion-toolbar",this.el),"in-toolbar-color":(0,d.h)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},(0,o.h)("button",Object.assign({key:"d4c5929264af3ba0328118bcc27d2ab7ef5d3809"},l,{disabled:n,class:"button-native",part:"native","aria-label":y}),(0,o.h)("span",{key:"7bfa6e9a93105486623d044861e879ec79ff64f1",class:"button-inner"},(0,o.h)("slot",{key:"071ab58e285832fc188706166f5547d45d501ac5"},(0,o.h)("ion-icon",{key:"918ec5d791921de9821c347af4f65f97dd94aabf",part:"icon",icon:f,mode:u,lazy:!1,"aria-hidden":"true"}))),"md"===u&&(0,o.h)("ion-ripple-effect",{key:"00ffdd53f635e706c1dbd01b8e7944498650fe81",type:"unbounded"})))}get el(){return(0,o.i)(this)}};return e.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'},e})(),N=(()=>{let e=class{constructor(t){(0,o.r)(this,t),this.onClick=()=>r.m.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}visibilityChanged(){var t=this;return(0,h.A)(function*(){t.visible=yield D(t.menu)})()}render(){const t=(0,s.b)(this),n=this.autoHide&&!this.visible;return(0,o.h)(o.f,{key:"7c27ea5b0795676bf5cb33e1f83aa142c197f64e",onClick:this.onClick,"aria-hidden":n?"true":null,class:{[t]:!0,"menu-toggle-hidden":n}},(0,o.h)("slot",{key:"69f187becedc0fe34603d41d279f043cf0fdf776"}))}};return e.style=":host(.menu-toggle-hidden){display:none}",e})()}}]);