import{m as He,V as ue}from"./VSelectionControl-Cputp4iZ.js";import{p as B,Z as G,g as P,ao as L,n as y,q as E,av as le,v as d,a8 as R,a as F,bm as Ae,e as X,ab as Me,az as be,aN as Oe,ad as ge,s as $,l as re,bn as Fe,aI as ce,S as ye,bo as de,N as ae,aH as De,ai as Xe,aq as Ye,a1 as Se,ag as ke,d as Ge,u as xe,t as I,am as Ce,k as Le,ae as Ve,au as qe,F as se,bp as we,f as Ue,h as je,a0 as Ne,r as q,aD as Ke,K as U,a6 as Ie,ar as Qe,ah as Ze,bq as Je,aB as Te,ap as pe,b5 as et,br as tt,a7 as nt,a5 as at,w as oe,aG as ot,bs as lt,aK as st,bt as it,bu as ut,ay as rt,bv as ct}from"./index-BJn67cXy.js";const dt=B({indeterminate:Boolean,indeterminateIcon:{type:G,default:"$checkboxIndeterminate"},...He({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Ot=P()({name:"VCheckboxBtn",props:dt(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:t}=a;const n=L(e,"indeterminate"),l=L(e,"modelValue");function u(s){n.value&&(n.value=!1)}const o=y(()=>n.value?e.indeterminateIcon:e.falseIcon),f=y(()=>n.value?e.indeterminateIcon:e.trueIcon);return E(()=>{const s=le(ue.filterProps(e),["modelValue"]);return d(ue,R(s,{modelValue:l.value,"onUpdate:modelValue":[h=>l.value=h,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:o.value,trueIcon:f.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}});function vt(e){let{selectedElement:a,containerElement:t,isRtl:n,isHorizontal:l}=e;const u=D(l,t),o=Be(l,n,t),f=D(l,a),s=Pe(l,a),h=f*.4;return o>s?s-h:o+u<s+f?s-u+f+h:o}function ft(e){let{selectedElement:a,containerElement:t,isHorizontal:n}=e;const l=D(n,t),u=Pe(n,a),o=D(n,a);return u-l/2+o/2}function ve(e,a){const t=e?"scrollWidth":"scrollHeight";return(a==null?void 0:a[t])||0}function mt(e,a){const t=e?"clientWidth":"clientHeight";return(a==null?void 0:a[t])||0}function Be(e,a,t){if(!t)return 0;const{scrollLeft:n,offsetWidth:l,scrollWidth:u}=t;return e?a?u-l+n:n:t.scrollTop}function D(e,a){const t=e?"offsetWidth":"offsetHeight";return(a==null?void 0:a[t])||0}function Pe(e,a){const t=e?"offsetLeft":"offsetTop";return(a==null?void 0:a[t])||0}const ht=Symbol.for("vuetify:v-slide-group"),Ee=B({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ht},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...F(),...Ae({mobile:null}),...X(),...Me({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),fe=P()({name:"VSlideGroup",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{isRtl:n}=be(),{displayClasses:l,mobile:u}=Oe(e),o=ge(e,e.symbol),f=$(!1),s=$(0),h=$(0),C=$(0),m=y(()=>e.direction==="horizontal"),{resizeRef:r,contentRect:b}=re(),{resizeRef:v,contentRect:x}=re(),V=Fe(),H=y(()=>({container:r.el,duration:200,easing:"easeOutQuart"})),z=y(()=>o.selected.value.length?o.items.value.findIndex(i=>i.id===o.selected.value[0]):-1),W=y(()=>o.selected.value.length?o.items.value.findIndex(i=>i.id===o.selected.value[o.selected.value.length-1]):-1);if(ce){let i=-1;ye(()=>[o.selected.value,b.value,x.value,m.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(b.value&&x.value){const c=m.value?"width":"height";h.value=b.value[c],C.value=x.value[c],f.value=h.value+1<C.value}if(z.value>=0&&v.el){const c=v.el.children[W.value];S(c,e.centerActive)}})})}const g=$(!1);function S(i,c){let k=0;c?k=ft({containerElement:r.el,isHorizontal:m.value,selectedElement:i}):k=vt({containerElement:r.el,isHorizontal:m.value,isRtl:n.value,selectedElement:i}),w(k)}function w(i){if(!ce||!r.el)return;const c=D(m.value,r.el),k=Be(m.value,n.value,r.el);if(!(ve(m.value,r.el)<=c||Math.abs(i-k)<16)){if(m.value&&n.value&&r.el){const{scrollWidth:Y,offsetWidth:ne}=r.el;i=Y-ne-i}m.value?V.horizontal(i,H.value):V(i,H.value)}}function T(i){const{scrollTop:c,scrollLeft:k}=i.target;s.value=m.value?k:c}function j(i){if(g.value=!0,!(!f.value||!v.el)){for(const c of i.composedPath())for(const k of v.el.children)if(k===c){S(k);return}}}function N(i){g.value=!1}let _=!1;function K(i){var c;!_&&!g.value&&!(i.relatedTarget&&((c=v.el)!=null&&c.contains(i.relatedTarget)))&&A(),_=!1}function Q(){_=!0}function Z(i){if(!v.el)return;function c(k){i.preventDefault(),A(k)}m.value?i.key==="ArrowRight"?c(n.value?"prev":"next"):i.key==="ArrowLeft"&&c(n.value?"next":"prev"):i.key==="ArrowDown"?c("next"):i.key==="ArrowUp"&&c("prev"),i.key==="Home"?c("first"):i.key==="End"&&c("last")}function A(i){var k,O;if(!v.el)return;let c;if(!i)c=De(v.el)[0];else if(i==="next"){if(c=(k=v.el.querySelector(":focus"))==null?void 0:k.nextElementSibling,!c)return A("first")}else if(i==="prev"){if(c=(O=v.el.querySelector(":focus"))==null?void 0:O.previousElementSibling,!c)return A("last")}else i==="first"?c=v.el.firstElementChild:i==="last"&&(c=v.el.lastElementChild);c&&c.focus({preventScroll:!0})}function M(i){const c=m.value&&n.value?-1:1,k=(i==="prev"?-c:c)*h.value;let O=s.value+k;if(m.value&&n.value&&r.el){const{scrollWidth:Y,offsetWidth:ne}=r.el;O+=Y-ne}w(O)}const J=y(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),p=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!u.value;case!0:return f.value||Math.abs(s.value)>0;case"mobile":return u.value||f.value||Math.abs(s.value)>0;default:return!u.value&&(f.value||Math.abs(s.value)>0)}}),ee=y(()=>Math.abs(s.value)>1),te=y(()=>{if(!r.value)return!1;const i=ve(m.value,r.el),c=mt(m.value,r.el);return i-c-Math.abs(s.value)>1});return E(()=>d(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!m.value,"v-slide-group--has-affixes":p.value,"v-slide-group--is-overflowing":f.value},l.value,e.class],style:e.style,tabindex:g.value||o.selected.value.length?-1:0,onFocus:K},{default:()=>{var i,c,k;return[p.value&&d("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ee.value}],onMousedown:Q,onClick:()=>ee.value&&M("prev")},[((i=t.prev)==null?void 0:i.call(t,J.value))??d(de,null,{default:()=>[d(ae,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),d("div",{key:"container",ref:r,class:"v-slide-group__container",onScroll:T},[d("div",{ref:v,class:"v-slide-group__content",onFocusin:j,onFocusout:N,onKeydown:Z},[(c=t.default)==null?void 0:c.call(t,J.value)])]),p.value&&d("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!te.value}],onMousedown:Q,onClick:()=>te.value&&M("next")},[((k=t.next)==null?void 0:k.call(t,J.value))??d(de,null,{default:()=>[d(ae,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:M,scrollOffset:s,focus:A,hasPrev:ee,hasNext:te}}}),bt=B({divider:[Number,String],...F()},"VBreadcrumbsDivider"),gt=P()({name:"VBreadcrumbsDivider",props:bt(),setup(e,a){let{slots:t}=a;return E(()=>{var n;return d("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=t==null?void 0:t.default)==null?void 0:n.call(t))??e.divider])}),{}}}),yt=B({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...F(),...Xe(),...X({tag:"li"})},"VBreadcrumbsItem"),St=P()({name:"VBreadcrumbsItem",props:yt(),setup(e,a){let{slots:t,attrs:n}=a;const l=Ye(e,n),u=y(()=>{var h;return e.active||((h=l.isActive)==null?void 0:h.value)}),o=y(()=>u.value?e.activeColor:e.color),{textColorClasses:f,textColorStyles:s}=Se(o);return E(()=>d(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":u.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:u.value&&e.activeClass},f.value,e.class],style:[s.value,e.style],"aria-current":u.value?"page":void 0},{default:()=>{var h,C;return[l.isLink.value?d("a",R({class:"v-breadcrumbs-item--link",onClick:l.navigate},l.linkProps),[((C=t.default)==null?void 0:C.call(t))??e.title]):((h=t.default)==null?void 0:h.call(t))??e.title]}})),{}}}),kt=B({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:G,items:{type:Array,default:()=>[]},...F(),...ke(),...Ge(),...X({tag:"ul"})},"VBreadcrumbs"),Ft=P()({name:"VBreadcrumbs",props:kt(),setup(e,a){let{slots:t}=a;const{backgroundColorClasses:n,backgroundColorStyles:l}=xe(I(e,"bgColor")),{densityClasses:u}=Ce(e),{roundedClasses:o}=Le(e);Ve({VBreadcrumbsDivider:{divider:I(e,"divider")},VBreadcrumbsItem:{activeClass:I(e,"activeClass"),activeColor:I(e,"activeColor"),color:I(e,"color"),disabled:I(e,"disabled")}});const f=y(()=>e.items.map(s=>typeof s=="string"?{item:{title:s},raw:s}:{item:s,raw:s}));return E(()=>{const s=!!(t.prepend||e.icon);return d(e.tag,{class:["v-breadcrumbs",n.value,u.value,o.value,e.class],style:[l.value,e.style]},{default:()=>{var h;return[s&&d("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?d(qe,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):d(ae,{key:"prepend-icon",start:!0,icon:e.icon},null)]),f.value.map((C,m,r)=>{var x;let{item:b,raw:v}=C;return d(se,null,[((x=t.item)==null?void 0:x.call(t,{item:b,index:m}))??d(St,R({key:m,disabled:m>=r.length-1},typeof b=="string"?{title:b}:b),{default:t.title?()=>{var V;return(V=t.title)==null?void 0:V.call(t,{item:b,index:m})}:void 0}),m<r.length-1&&d(gt,null,{default:t.divider?()=>{var V;return(V=t.divider)==null?void 0:V.call(t,{item:v,index:m})}:void 0})])}),(h=t.default)==null?void 0:h.call(t)]}})}),{}}}),xt=e=>{const{touchstartX:a,touchendX:t,touchstartY:n,touchendY:l}=e,u=.5,o=16;e.offsetX=t-a,e.offsetY=l-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<a-o&&e.left(e),e.right&&t>a+o&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&l<n-o&&e.up(e),e.down&&l>n+o&&e.down(e))};function Ct(e,a){var n;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(n=a.start)==null||n.call(a,{originalEvent:e,...a})}function Vt(e,a){var n;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(n=a.end)==null||n.call(a,{originalEvent:e,...a}),xt(a)}function wt(e,a){var n;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(n=a.move)==null||n.call(a,{originalEvent:e,...a})}function It(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ct(t,a),touchend:t=>Vt(t,a),touchmove:t=>wt(t,a)}}function Tt(e,a){var f;const t=a.value,n=t!=null&&t.parent?e.parentElement:e,l=(t==null?void 0:t.options)??{passive:!0},u=(f=a.instance)==null?void 0:f.$.uid;if(!n||!u)return;const o=It(a.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=o,we(o).forEach(s=>{n.addEventListener(s,o[s],l)})}function Bt(e,a){var u,o;const t=(u=a.value)!=null&&u.parent?e.parentElement:e,n=(o=a.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const l=t._touchHandlers[n];we(l).forEach(f=>{t.removeEventListener(f,l[f])}),delete t._touchHandlers[n]}const ze={mounted:Tt,unmounted:Bt},We=Symbol.for("vuetify:v-window"),_e=Symbol.for("vuetify:v-window-group"),Re=B({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...F(),...X(),...Ue()},"VWindow"),me=P()({name:"VWindow",directives:{Touch:ze},props:Re(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:n}=je(e),{isRtl:l}=be(),{t:u}=Ne(),o=ge(e,_e),f=q(),s=y(()=>l.value?!e.reverse:e.reverse),h=$(!1),C=y(()=>{const g=e.direction==="vertical"?"y":"x",w=(s.value?!h.value:h.value)?"-reverse":"";return`v-window-${g}${w}-transition`}),m=$(0),r=q(void 0),b=y(()=>o.items.value.findIndex(g=>o.selected.value.includes(g.id)));ye(b,(g,S)=>{const w=o.items.value.length,T=w-1;w<=2?h.value=g<S:g===T&&S===0?h.value=!0:g===0&&S===T?h.value=!1:h.value=g<S}),Ke(We,{transition:C,isReversed:h,transitionCount:m,transitionHeight:r,rootRef:f});const v=y(()=>e.continuous||b.value!==0),x=y(()=>e.continuous||b.value!==o.items.value.length-1);function V(){v.value&&o.prev()}function H(){x.value&&o.next()}const z=y(()=>{const g=[],S={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${s.value?"right":"left"}`,onClick:o.prev,"aria-label":u("$vuetify.carousel.prev")};g.push(v.value?t.prev?t.prev({props:S}):d(U,S,null):d("div",null,null));const w={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${s.value?"left":"right"}`,onClick:o.next,"aria-label":u("$vuetify.carousel.next")};return g.push(x.value?t.next?t.next({props:w}):d(U,w,null):d("div",null,null)),g}),W=y(()=>e.touch===!1?e.touch:{...{left:()=>{s.value?V():H()},right:()=>{s.value?H():V()},start:S=>{let{originalEvent:w}=S;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return E(()=>Ie(d(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var g,S;return[d("div",{class:"v-window__container",style:{height:r.value}},[(g=t.default)==null?void 0:g.call(t,{group:o}),e.showArrows!==!1&&d("div",{class:"v-window__controls"},[z.value])]),(S=t.additional)==null?void 0:S.call(t,{group:o})]}}),[[Qe("touch"),W.value]])),{group:o}}}),$e=B({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...F(),...Ze(),...Je()},"VWindowItem"),he=P()({name:"VWindowItem",directives:{Touch:ze},props:$e(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const n=Te(We),l=pe(e,_e),{isBooted:u}=et();if(!n||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=$(!1),f=y(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function s(){!o.value||!n||(o.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function h(){var v;o.value||!n||(o.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=oe((v=n.rootRef.value)==null?void 0:v.clientHeight)),n.transitionCount.value+=1)}function C(){s()}function m(v){o.value&&ot(()=>{!f.value||!o.value||!n||(n.transitionHeight.value=oe(v.clientHeight))})}const r=y(()=>{const v=n.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof v!="string"?n.transition.value:v,onBeforeEnter:h,onAfterEnter:s,onEnterCancelled:C,onBeforeLeave:h,onAfterLeave:s,onLeaveCancelled:C,onEnter:m}:!1}),{hasContent:b}=tt(e,l.isSelected);return E(()=>d(at,{transition:r.value,disabled:!u.value},{default:()=>{var v;return[Ie(d("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[b.value&&((v=t.default)==null?void 0:v.call(t))]),[[nt,l.isSelected.value]])]}})),{groupItem:l}}}),ie=Symbol.for("vuetify:v-tabs"),Pt=B({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...le(lt({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Et=P()({name:"VTab",props:Pt(),setup(e,a){let{slots:t,attrs:n}=a;const{textColorClasses:l,textColorStyles:u}=Se(e,"sliderColor"),o=q(),f=q(),s=y(()=>e.direction==="horizontal"),h=y(()=>{var m,r;return((r=(m=o.value)==null?void 0:m.group)==null?void 0:r.isSelected.value)??!1});function C(m){var b,v;let{value:r}=m;if(r){const x=(v=(b=o.value)==null?void 0:b.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),V=f.value;if(!x||!V)return;const H=getComputedStyle(x).color,z=x.getBoundingClientRect(),W=V.getBoundingClientRect(),g=s.value?"x":"y",S=s.value?"X":"Y",w=s.value?"right":"bottom",T=s.value?"width":"height",j=z[g],N=W[g],_=j>N?z[w]-W[w]:z[g]-W[g],K=Math.sign(_)>0?s.value?"right":"bottom":Math.sign(_)<0?s.value?"left":"top":"center",Z=(Math.abs(_)+(Math.sign(_)<0?z[T]:W[T]))/Math.max(z[T],W[T])||0,A=z[T]/W[T]||0,M=1.5;it(V,{backgroundColor:[H,"currentcolor"],transform:[`translate${S}(${_}px) scale${S}(${A})`,`translate${S}(${_/M}px) scale${S}(${(Z-1)/M+1})`,"none"],transformOrigin:Array(3).fill(K)},{duration:225,easing:ut})}}return E(()=>{const m=U.filterProps(e);return d(U,R({symbol:ie,ref:o,class:["v-tab",e.class],style:e.style,tabindex:h.value?0:-1,role:"tab","aria-selected":String(h.value),active:!1},m,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":C}),{...t,default:()=>{var r;return d(se,null,[((r=t.default)==null?void 0:r.call(t))??e.text,!e.hideSlider&&d("div",{ref:f,class:["v-tab__slider",l.value],style:u.value},null)])}})}),st({},o)}}),zt=B({...le(Re(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Wt=P()({name:"VTabsWindow",props:zt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=Te(ie,null),l=L(e,"modelValue"),u=y({get(){var o;return l.value!=null||!n?l.value:(o=n.items.value.find(f=>n.selected.value.includes(f.id)))==null?void 0:o.value},set(o){l.value=o}});return E(()=>{const o=me.filterProps(e);return d(me,R({_as:"VTabsWindow"},o,{modelValue:u.value,"onUpdate:modelValue":f=>u.value=f,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),t)}),{}}}),_t=B({...$e()},"VTabsWindowItem"),Rt=P()({name:"VTabsWindowItem",props:_t(),setup(e,a){let{slots:t}=a;return E(()=>{const n=he.filterProps(e);return d(he,R({_as:"VTabsWindowItem"},n,{class:["v-tabs-window-item",e.class],style:e.style}),t)}),{}}});function $t(e){return e?e.map(a=>ct(a)?a:{text:a,value:a}):[]}const Ht=B({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ee({mandatory:"force",selectedClass:"v-tab-item--selected"}),...ke(),...X()},"VTabs"),Dt=P()({name:"VTabs",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:t,slots:n}=a;const l=L(e,"modelValue"),u=y(()=>$t(e.items)),{densityClasses:o}=Ce(e),{backgroundColorClasses:f,backgroundColorStyles:s}=xe(I(e,"bgColor")),{scopeId:h}=rt();return Ve({VTab:{color:I(e,"color"),direction:I(e,"direction"),stacked:I(e,"stacked"),fixed:I(e,"fixedTabs"),sliderColor:I(e,"sliderColor"),hideSlider:I(e,"hideSlider")}}),E(()=>{const C=fe.filterProps(e),m=!!(n.window||e.items.length>0);return d(se,null,[d(fe,R(C,{modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,f.value,e.class],style:[{"--v-tabs-height":oe(e.height)},s.value,e.style],role:"tablist",symbol:ie},h,t),{default:()=>{var r;return[((r=n.default)==null?void 0:r.call(n))??u.value.map(b=>{var v;return((v=n.tab)==null?void 0:v.call(n,{item:b}))??d(Et,R(b,{key:b.text,value:b.value}),{default:n[`tab.${b.value}`]?()=>{var x;return(x=n[`tab.${b.value}`])==null?void 0:x.call(n,{item:b})}:void 0})})]}}),m&&d(Wt,R({modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,key:"tabs-window"},h),{default:()=>{var r;return[u.value.map(b=>{var v;return((v=n.item)==null?void 0:v.call(n,{item:b}))??d(Rt,{value:b.value},{default:()=>{var x;return(x=n[`item.${b.value}`])==null?void 0:x.call(n,{item:b})}})}),(r=n.window)==null?void 0:r.call(n)]}})])}),{}}});export{fe as V,Ot as a,Ft as b,Dt as c,Et as d,Wt as e,Rt as f,dt as g,Ee as m};
