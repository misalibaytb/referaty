function Au(e,t){for(var n=0;n<t.length;n++){const l=t[n];if(typeof l!="string"&&!Array.isArray(l)){for(const r in l)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(l,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>l[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ma={exports:{}},dl={},xa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),Wu=Symbol.for("react.portal"),Hu=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Yu=Symbol.for("react.memo"),qu=Symbol.for("react.lazy"),Ys=Symbol.iterator;function bu(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var va={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ga=Object.assign,ja={};function dn(e,t,n){this.props=e,this.context=t,this.refs=ja,this.updater=n||va}dn.prototype.isReactComponent={};dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ya(){}ya.prototype=dn.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=ja,this.updater=n||va}var ts=es.prototype=new ya;ts.constructor=es;ga(ts,dn.prototype);ts.isPureReactComponent=!0;var qs=Array.isArray,_a=Object.prototype.hasOwnProperty,ns={current:null},ka={key:!0,ref:!0,__self:!0,__source:!0};function Ca(e,t,n){var l,r={},s=null,o=null;if(t!=null)for(l in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)_a.call(t,l)&&!ka.hasOwnProperty(l)&&(r[l]=t[l]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(l in a=e.defaultProps,a)r[l]===void 0&&(r[l]=a[l]);return{$$typeof:li,type:e,key:s,ref:o,props:r,_owner:ns.current}}function ed(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function is(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function td(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bs=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?td(""+e.key):t.toString(36)}function Ei(e,t,n,l,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case li:case Wu:o=!0}}if(o)return o=e,r=r(o),e=l===""?"."+Il(o,0):l,qs(r)?(n="",e!=null&&(n=e.replace(bs,"$&/")+"/"),Ei(r,t,n,"",function(d){return d})):r!=null&&(is(r)&&(r=ed(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bs,"$&/")+"/")+e)),t.push(r)),1;if(o=0,l=l===""?".":l+":",qs(e))for(var a=0;a<e.length;a++){s=e[a];var c=l+Il(s,a);o+=Ei(s,t,n,c,r)}else if(c=bu(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=l+Il(s,a++),o+=Ei(s,t,n,c,r);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function di(e,t,n){if(e==null)return e;var l=[],r=0;return Ei(e,l,"","",function(s){return t.call(n,s,r++)}),l}function nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Pi={transition:null},id={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:ns};function wa(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=dn;L.Fragment=Hu;L.Profiler=Xu;L.PureComponent=es;L.StrictMode=Qu;L.Suspense=Gu;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=id;L.act=wa;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=ga({},e.props),r=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ns.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)_a.call(t,c)&&!ka.hasOwnProperty(c)&&(l[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];l.children=a}return{$$typeof:li,type:e.type,key:r,ref:s,props:l,_owner:o}};L.createContext=function(e){return e={$$typeof:Ju,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ku,_context:e},e.Consumer=e};L.createElement=Ca;L.createFactory=function(e){var t=Ca.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Zu,render:e}};L.isValidElement=is;L.lazy=function(e){return{$$typeof:qu,_payload:{_status:-1,_result:e},_init:nd}};L.memo=function(e,t){return{$$typeof:Yu,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};L.unstable_act=wa;L.useCallback=function(e,t){return ce.current.useCallback(e,t)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return ce.current.useEffect(e,t)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";xa.exports=L;var w=xa.exports;const ld=Vu(w),rd=Au({__proto__:null,default:ld},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=w,od=Symbol.for("react.element"),ad=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,ud=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dd={key:!0,ref:!0,__self:!0,__source:!0};function Sa(e,t,n){var l,r={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(l in t)cd.call(t,l)&&!dd.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)r[l]===void 0&&(r[l]=t[l]);return{$$typeof:od,type:e,key:s,ref:o,props:r,_owner:ud.current}}dl.Fragment=ad;dl.jsx=Sa;dl.jsxs=Sa;ma.exports=dl;var i=ma.exports,za={exports:{}},_e={},Na={exports:{}},Ea={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var R=N.length;N.push(T);e:for(;0<R;){var Q=R-1>>>1,Y=N[Q];if(0<r(Y,T))N[Q]=T,N[R]=Y,R=Q;else break e}}function n(N){return N.length===0?null:N[0]}function l(N){if(N.length===0)return null;var T=N[0],R=N.pop();if(R!==T){N[0]=R;e:for(var Q=0,Y=N.length,ci=Y>>>1;Q<ci;){var yt=2*(Q+1)-1,Ll=N[yt],_t=yt+1,ui=N[_t];if(0>r(Ll,R))_t<Y&&0>r(ui,Ll)?(N[Q]=ui,N[_t]=R,Q=_t):(N[Q]=Ll,N[yt]=R,Q=yt);else if(_t<Y&&0>r(ui,R))N[Q]=ui,N[_t]=R,Q=_t;else break e}}return T}function r(N,T){var R=N.sortIndex-T.sortIndex;return R!==0?R:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var c=[],d=[],m=1,p=null,x=3,j=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var T=n(d);T!==null;){if(T.callback===null)l(d);else if(T.startTime<=N)l(d),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(d)}}function g(N){if(v=!1,f(N),!y)if(n(c)!==null)y=!0,Tl(C);else{var T=n(d);T!==null&&Rl(g,T.startTime-N)}}function C(N,T){y=!1,v&&(v=!1,h(P),P=-1),j=!0;var R=x;try{for(f(T),p=n(c);p!==null&&(!(p.expirationTime>T)||N&&!Pe());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,x=p.priorityLevel;var Y=Q(p.expirationTime<=T);T=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(c)&&l(c),f(T)}else l(c);p=n(c)}if(p!==null)var ci=!0;else{var yt=n(d);yt!==null&&Rl(g,yt.startTime-T),ci=!1}return ci}finally{p=null,x=R,j=!1}}var S=!1,E=null,P=-1,H=5,I=-1;function Pe(){return!(e.unstable_now()-I<H)}function xn(){if(E!==null){var N=e.unstable_now();I=N;var T=!0;try{T=E(!0,N)}finally{T?vn():(S=!1,E=null)}}else S=!1}var vn;if(typeof u=="function")vn=function(){u(xn)};else if(typeof MessageChannel<"u"){var Gs=new MessageChannel,Bu=Gs.port2;Gs.port1.onmessage=xn,vn=function(){Bu.postMessage(null)}}else vn=function(){k(xn,0)};function Tl(N){E=N,S||(S=!0,vn())}function Rl(N,T){P=k(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||j||(y=!0,Tl(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(x){case 1:case 2:case 3:var T=3;break;default:T=x}var R=x;x=T;try{return N()}finally{x=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=x;x=N;try{return T()}finally{x=R}},e.unstable_scheduleCallback=function(N,T,R){var Q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,N={id:m++,callback:T,priorityLevel:N,startTime:R,expirationTime:Y,sortIndex:-1},R>Q?(N.sortIndex=R,t(d,N),n(c)===null&&N===n(d)&&(v?(h(P),P=-1):v=!0,Rl(g,R-Q))):(N.sortIndex=Y,t(c,N),y||j||(y=!0,Tl(C))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var T=x;return function(){var R=x;x=T;try{return N.apply(this,arguments)}finally{x=R}}}})(Ea);Na.exports=Ea;var hd=Na.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=w,ye=hd;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pa=new Set,Un={};function Dt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Un[e]=t,e=0;e<t.length;e++)Pa.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sr=Object.prototype.hasOwnProperty,pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eo={},to={};function md(e){return sr.call(to,e)?!0:sr.call(eo,e)?!1:pd.test(e)?to[e]=!0:(eo[e]=!0,!1)}function xd(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vd(e,t,n,l){if(t===null||typeof t>"u"||xd(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,l,r,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ls=/[\-:]([a-z])/g;function rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ls,rs);ne[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ls,rs);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ls,rs);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,l){var r=ne.hasOwnProperty(t)?ne[t]:null;(r!==null?r.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vd(t,n,r,l)&&(n=null),l||r===null?md(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,l=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var Ye=fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),os=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),Ta=Symbol.for("react.provider"),Ra=Symbol.for("react.context"),as=Symbol.for("react.forward_ref"),ar=Symbol.for("react.suspense"),cr=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),La=Symbol.for("react.offscreen"),no=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=no&&e[no]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ol;function zn(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Ml=!1;function Dl(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var l=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){l=d}e.call(t.prototype)}else{try{throw Error()}catch(d){l=d}e()}}catch(d){if(d&&l&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=l.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var c=`
`+r[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function gd(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function ur(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ut:return"Portal";case or:return"Profiler";case os:return"StrictMode";case ar:return"Suspense";case cr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ra:return(e.displayName||"Context")+".Consumer";case Ta:return(e._context.displayName||"Context")+".Provider";case as:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return t=e.displayName||null,t!==null?t:ur(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return ur(e(t))}catch{}}return null}function jd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ur(t);case 8:return t===os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ia(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yd(e){var t=Ia(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){l=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=yd(e))}function Oa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ia(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dr(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function io(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ma(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function hr(e,t){Ma(e,t);var n=mt(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fr(e,t.type,n):t.hasOwnProperty("defaultValue")&&fr(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fr(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function Yt(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function pr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ro(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Nn(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function Da(e,t){var n=mt(t.value),l=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function so(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,$a=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_d=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){_d.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Ua(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Ba(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,r=Ua(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,r):e[n]=r}}var kd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xr(e,t){if(t){if(kd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function vr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gr=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jr=null,qt=null,bt=null;function oo(e){if(e=oi(e)){if(typeof jr!="function")throw Error(_(280));var t=e.stateNode;t&&(t=xl(t),jr(e.stateNode,e.type,t))}}function Aa(e){qt?bt?bt.push(e):bt=[e]:qt=e}function Va(){if(qt){var e=qt,t=bt;if(bt=qt=null,oo(e),t)for(e=0;e<t.length;e++)oo(t[e])}}function Wa(e,t){return e(t)}function Ha(){}var Fl=!1;function Qa(e,t,n){if(Fl)return e(t,n);Fl=!0;try{return Wa(e,t,n)}finally{Fl=!1,(qt!==null||bt!==null)&&(Ha(),Va())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var l=xl(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var yr=!1;if(Ke)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){yr=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{yr=!1}function Cd(e,t,n,l,r,s,o,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Rn=!1,Ai=null,Vi=!1,_r=null,wd={onError:function(e){Rn=!0,Ai=e}};function Sd(e,t,n,l,r,s,o,a,c){Rn=!1,Ai=null,Cd.apply(wd,arguments)}function zd(e,t,n,l,r,s,o,a,c){if(Sd.apply(this,arguments),Rn){if(Rn){var d=Ai;Rn=!1,Ai=null}else throw Error(_(198));Vi||(Vi=!0,_r=d)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ao(e){if(Ft(e)!==e)throw Error(_(188))}function Nd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ao(r),e;if(s===l)return ao(r),t;s=s.sibling}throw Error(_(188))}if(n.return!==l.return)n=r,l=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,l=s;break}if(a===l){o=!0,l=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,l=r;break}if(a===l){o=!0,l=s,n=r;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==l)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ka(e){return e=Nd(e),e!==null?Ja(e):null}function Ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ja(e);if(t!==null)return t;e=e.sibling}return null}var Za=ye.unstable_scheduleCallback,co=ye.unstable_cancelCallback,Ed=ye.unstable_shouldYield,Pd=ye.unstable_requestPaint,X=ye.unstable_now,Td=ye.unstable_getCurrentPriorityLevel,ds=ye.unstable_ImmediatePriority,Ga=ye.unstable_UserBlockingPriority,Wi=ye.unstable_NormalPriority,Rd=ye.unstable_LowPriority,Ya=ye.unstable_IdlePriority,hl=null,Be=null;function Ld(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Md,Id=Math.log,Od=Math.LN2;function Md(e){return e>>>=0,e===0?32:31-(Id(e)/Od|0)|0}var mi=64,xi=4194304;function En(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,r=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?l=En(a):(s&=o,s!==0&&(l=En(s)))}else o=n&~r,o!==0?l=En(o):s!==0&&(l=En(s));if(l===0)return 0;if(t!==0&&t!==l&&!(t&r)&&(r=l&-l,s=t&-t,r>=s||r===16&&(s&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-Oe(t),r=1<<n,l|=e[n],t&=~r;return l}function Dd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fd(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Oe(s),a=1<<o,c=r[o];c===-1?(!(a&n)||a&l)&&(r[o]=Dd(a,t)):c<=t&&(e.expiredLanes|=a),s&=~a}}function kr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qa(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function $d(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Oe(n),s=1<<r;t[r]=0,l[r]=-1,e[r]=-1,n&=~s}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Oe(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}var M=0;function ba(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,fs,tc,nc,ic,Cr=!1,vi=[],ot=null,at=null,ct=null,Vn=new Map,Wn=new Map,nt=[],Ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uo(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function yn(e,t,n,l,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:s,targetContainers:[r]},t!==null&&(t=oi(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Bd(e,t,n,l,r){switch(t){case"focusin":return ot=yn(ot,e,t,n,l,r),!0;case"dragenter":return at=yn(at,e,t,n,l,r),!0;case"mouseover":return ct=yn(ct,e,t,n,l,r),!0;case"pointerover":var s=r.pointerId;return Vn.set(s,yn(Vn.get(s)||null,e,t,n,l,r)),!0;case"gotpointercapture":return s=r.pointerId,Wn.set(s,yn(Wn.get(s)||null,e,t,n,l,r)),!0}return!1}function lc(e){var t=St(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Xa(n),t!==null){e.blockedOn=t,ic(e.priority,function(){tc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wr(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);gr=l,n.target.dispatchEvent(l),gr=null}else return t=oi(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function ho(e,t,n){Ti(e)&&n.delete(t)}function Ad(){Cr=!1,ot!==null&&Ti(ot)&&(ot=null),at!==null&&Ti(at)&&(at=null),ct!==null&&Ti(ct)&&(ct=null),Vn.forEach(ho),Wn.forEach(ho)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,Cr||(Cr=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Ad)))}function Hn(e){function t(r){return _n(r,e)}if(0<vi.length){_n(vi[0],e);for(var n=1;n<vi.length;n++){var l=vi[n];l.blockedOn===e&&(l.blockedOn=null)}}for(ot!==null&&_n(ot,e),at!==null&&_n(at,e),ct!==null&&_n(ct,e),Vn.forEach(t),Wn.forEach(t),n=0;n<nt.length;n++)l=nt[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)lc(n),n.blockedOn===null&&nt.shift()}var en=Ye.ReactCurrentBatchConfig,Qi=!0;function Vd(e,t,n,l){var r=M,s=en.transition;en.transition=null;try{M=1,ps(e,t,n,l)}finally{M=r,en.transition=s}}function Wd(e,t,n,l){var r=M,s=en.transition;en.transition=null;try{M=4,ps(e,t,n,l)}finally{M=r,en.transition=s}}function ps(e,t,n,l){if(Qi){var r=wr(e,t,n,l);if(r===null)Jl(e,t,l,Xi,n),uo(e,l);else if(Bd(r,e,t,n,l))l.stopPropagation();else if(uo(e,l),t&4&&-1<Ud.indexOf(e)){for(;r!==null;){var s=oi(r);if(s!==null&&ec(s),s=wr(e,t,n,l),s===null&&Jl(e,t,l,Xi,n),s===r)break;r=s}r!==null&&l.stopPropagation()}else Jl(e,t,l,null,n)}}var Xi=null;function wr(e,t,n,l){if(Xi=null,e=us(l),e=St(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xi=e,null}function rc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Td()){case ds:return 1;case Ga:return 4;case Wi:case Rd:return 16;case Ya:return 536870912;default:return 16}default:return 16}}var lt=null,ms=null,Ri=null;function sc(){if(Ri)return Ri;var e,t=ms,n=t.length,l,r="value"in lt?lt.value:lt.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(l=1;l<=o&&t[n-l]===r[s-l];l++);return Ri=r.slice(e,1<l?1-l:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function fo(){return!1}function ke(e){function t(n,l,r,s,o){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gi:fo,this.isPropagationStopped=fo,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=ke(hn),si=V({},hn,{view:0,detail:0}),Hd=ke(si),Ul,Bl,kn,fl=V({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Ul=e.screenX-kn.screenX,Bl=e.screenY-kn.screenY):Bl=Ul=0,kn=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),po=ke(fl),Qd=V({},fl,{dataTransfer:0}),Xd=ke(Qd),Kd=V({},si,{relatedTarget:0}),Al=ke(Kd),Jd=V({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zd=ke(Jd),Gd=V({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yd=ke(Gd),qd=V({},hn,{data:0}),mo=ke(qd),bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=th[e])?!!t[e]:!1}function vs(){return nh}var ih=V({},si,{key:function(e){if(e.key){var t=bd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lh=ke(ih),rh=V({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=ke(rh),sh=V({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),oh=ke(sh),ah=V({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=ke(ah),uh=V({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=ke(uh),hh=[9,13,27,32],gs=Ke&&"CompositionEvent"in window,Ln=null;Ke&&"documentMode"in document&&(Ln=document.documentMode);var fh=Ke&&"TextEvent"in window&&!Ln,oc=Ke&&(!gs||Ln&&8<Ln&&11>=Ln),vo=" ",go=!1;function ac(e,t){switch(e){case"keyup":return hh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function ph(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(go=!0,vo);case"textInput":return e=t.data,e===vo&&go?null:e;default:return null}}function mh(e,t){if(At)return e==="compositionend"||!gs&&ac(e,t)?(e=sc(),Ri=ms=lt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xh[e.type]:t==="textarea"}function uc(e,t,n,l){Aa(l),t=Ki(t,"onChange"),0<t.length&&(n=new xs("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var In=null,Qn=null;function vh(e){_c(e,0)}function pl(e){var t=Ht(e);if(Oa(t))return e}function gh(e,t){if(e==="change")return t}var dc=!1;if(Ke){var Vl;if(Ke){var Wl="oninput"in document;if(!Wl){var yo=document.createElement("div");yo.setAttribute("oninput","return;"),Wl=typeof yo.oninput=="function"}Vl=Wl}else Vl=!1;dc=Vl&&(!document.documentMode||9<document.documentMode)}function _o(){In&&(In.detachEvent("onpropertychange",hc),Qn=In=null)}function hc(e){if(e.propertyName==="value"&&pl(Qn)){var t=[];uc(t,Qn,e,us(e)),Qa(vh,t)}}function jh(e,t,n){e==="focusin"?(_o(),In=t,Qn=n,In.attachEvent("onpropertychange",hc)):e==="focusout"&&_o()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(Qn)}function _h(e,t){if(e==="click")return pl(t)}function kh(e,t){if(e==="input"||e==="change")return pl(t)}function Ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Ch;function Xn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!sr.call(t,r)||!De(e[r],t[r]))return!1}return!0}function ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Co(e,t){var n=ko(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ko(n)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pc(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wh(e){var t=pc(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fc(n.ownerDocument.documentElement,n)){if(l!==null&&js(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,s=Math.min(l.start,r);l=l.end===void 0?s:Math.min(l.end,r),!e.extend&&s>l&&(r=l,l=s,s=r),r=Co(n,s);var o=Co(n,l);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),s>l?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sh=Ke&&"documentMode"in document&&11>=document.documentMode,Vt=null,Sr=null,On=null,zr=!1;function wo(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Vt==null||Vt!==Bi(l)||(l=Vt,"selectionStart"in l&&js(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),On&&Xn(On,l)||(On=l,l=Ki(Sr,"onSelect"),0<l.length&&(t=new xs("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Vt)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},Hl={},mc={};Ke&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function ml(e){if(Hl[e])return Hl[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mc)return Hl[e]=t[n];return e}var xc=ml("animationend"),vc=ml("animationiteration"),gc=ml("animationstart"),jc=ml("transitionend"),yc=new Map,So="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){yc.set(e,t),Dt(t,[e])}for(var Ql=0;Ql<So.length;Ql++){var Xl=So[Ql],zh=Xl.toLowerCase(),Nh=Xl[0].toUpperCase()+Xl.slice(1);vt(zh,"on"+Nh)}vt(xc,"onAnimationEnd");vt(vc,"onAnimationIteration");vt(gc,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(jc,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function zo(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,zd(l,t,void 0,e),e.currentTarget=null}function _c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var o=l.length-1;0<=o;o--){var a=l[o],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==s&&r.isPropagationStopped())break e;zo(r,a,d),s=c}else for(o=0;o<l.length;o++){if(a=l[o],c=a.instance,d=a.currentTarget,a=a.listener,c!==s&&r.isPropagationStopped())break e;zo(r,a,d),s=c}}}if(Vi)throw e=_r,Vi=!1,_r=null,e}function F(e,t){var n=t[Rr];n===void 0&&(n=t[Rr]=new Set);var l=e+"__bubble";n.has(l)||(kc(t,e,2,!1),n.add(l))}function Kl(e,t,n){var l=0;t&&(l|=4),kc(n,e,l,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[yi]){e[yi]=!0,Pa.forEach(function(n){n!=="selectionchange"&&(Eh.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,Kl("selectionchange",!1,t))}}function kc(e,t,n,l){switch(rc(t)){case 1:var r=Vd;break;case 4:r=Wd;break;default:r=ps}n=r.bind(null,t,n,e),r=void 0,!yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Jl(e,t,n,l,r){var s=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var a=l.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;a!==null;){if(o=St(a),o===null)return;if(c=o.tag,c===5||c===6){l=s=o;continue e}a=a.parentNode}}l=l.return}Qa(function(){var d=s,m=us(n),p=[];e:{var x=yc.get(e);if(x!==void 0){var j=xs,y=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":j=lh;break;case"focusin":y="focus",j=Al;break;case"focusout":y="blur",j=Al;break;case"beforeblur":case"afterblur":j=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=oh;break;case xc:case vc:case gc:j=Zd;break;case jc:j=ch;break;case"scroll":j=Hd;break;case"wheel":j=dh;break;case"copy":case"cut":case"paste":j=Yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=xo}var v=(t&4)!==0,k=!v&&e==="scroll",h=v?x!==null?x+"Capture":null:x;v=[];for(var u=d,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,h!==null&&(g=An(u,h),g!=null&&v.push(Jn(u,g,f)))),k)break;u=u.return}0<v.length&&(x=new j(x,y,null,n,m),p.push({event:x,listeners:v}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&n!==gr&&(y=n.relatedTarget||n.fromElement)&&(St(y)||y[Je]))break e;if((j||x)&&(x=m.window===m?m:(x=m.ownerDocument)?x.defaultView||x.parentWindow:window,j?(y=n.relatedTarget||n.toElement,j=d,y=y?St(y):null,y!==null&&(k=Ft(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(j=null,y=d),j!==y)){if(v=po,g="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=xo,g="onPointerLeave",h="onPointerEnter",u="pointer"),k=j==null?x:Ht(j),f=y==null?x:Ht(y),x=new v(g,u+"leave",j,n,m),x.target=k,x.relatedTarget=f,g=null,St(m)===d&&(v=new v(h,u+"enter",y,n,m),v.target=f,v.relatedTarget=k,g=v),k=g,j&&y)t:{for(v=j,h=y,u=0,f=v;f;f=$t(f))u++;for(f=0,g=h;g;g=$t(g))f++;for(;0<u-f;)v=$t(v),u--;for(;0<f-u;)h=$t(h),f--;for(;u--;){if(v===h||h!==null&&v===h.alternate)break t;v=$t(v),h=$t(h)}v=null}else v=null;j!==null&&No(p,x,j,v,!1),y!==null&&k!==null&&No(p,k,y,v,!0)}}e:{if(x=d?Ht(d):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var C=gh;else if(jo(x))if(dc)C=kh;else{C=yh;var S=jh}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(C=_h);if(C&&(C=C(e,d))){uc(p,C,n,m);break e}S&&S(e,x,d),e==="focusout"&&(S=x._wrapperState)&&S.controlled&&x.type==="number"&&fr(x,"number",x.value)}switch(S=d?Ht(d):window,e){case"focusin":(jo(S)||S.contentEditable==="true")&&(Vt=S,Sr=d,On=null);break;case"focusout":On=Sr=Vt=null;break;case"mousedown":zr=!0;break;case"contextmenu":case"mouseup":case"dragend":zr=!1,wo(p,n,m);break;case"selectionchange":if(Sh)break;case"keydown":case"keyup":wo(p,n,m)}var E;if(gs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else At?ac(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(oc&&n.locale!=="ko"&&(At||P!=="onCompositionStart"?P==="onCompositionEnd"&&At&&(E=sc()):(lt=m,ms="value"in lt?lt.value:lt.textContent,At=!0)),S=Ki(d,P),0<S.length&&(P=new mo(P,e,null,n,m),p.push({event:P,listeners:S}),E?P.data=E:(E=cc(n),E!==null&&(P.data=E)))),(E=fh?ph(e,n):mh(e,n))&&(d=Ki(d,"onBeforeInput"),0<d.length&&(m=new mo("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=E))}_c(p,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=An(e,n),s!=null&&l.unshift(Jn(e,s,r)),s=An(e,t),s!=null&&l.push(Jn(e,s,r))),e=e.return}return l}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function No(e,t,n,l,r){for(var s=t._reactName,o=[];n!==null&&n!==l;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===l)break;a.tag===5&&d!==null&&(a=d,r?(c=An(n,s),c!=null&&o.unshift(Jn(n,c,a))):r||(c=An(n,s),c!=null&&o.push(Jn(n,c,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ph=/\r\n?/g,Th=/\u0000|\uFFFD/g;function Eo(e){return(typeof e=="string"?e:""+e).replace(Ph,`
`).replace(Th,"")}function _i(e,t,n){if(t=Eo(t),Eo(e)!==t&&n)throw Error(_(425))}function Ji(){}var Nr=null,Er=null;function Pr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tr=typeof setTimeout=="function"?setTimeout:void 0,Rh=typeof clearTimeout=="function"?clearTimeout:void 0,Po=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof Po<"u"?function(e){return Po.resolve(null).then(e).catch(Ih)}:Tr;function Ih(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(l===0){e.removeChild(r),Hn(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=r}while(n);Hn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function To(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+fn,Zn="__reactProps$"+fn,Je="__reactContainer$"+fn,Rr="__reactEvents$"+fn,Oh="__reactListeners$"+fn,Mh="__reactHandles$"+fn;function St(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=To(e);e!==null;){if(n=e[Ue])return n;e=To(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[Ue]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function xl(e){return e[Zn]||null}var Lr=[],Qt=-1;function gt(e){return{current:e}}function $(e){0>Qt||(e.current=Lr[Qt],Lr[Qt]=null,Qt--)}function D(e,t){Qt++,Lr[Qt]=e.current,e.current=t}var xt={},se=gt(xt),fe=gt(!1),Rt=xt;function rn(e,t){var n=e.type.contextTypes;if(!n)return xt;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=t[s];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function pe(e){return e=e.childContextTypes,e!=null}function Zi(){$(fe),$(se)}function Ro(e,t,n){if(se.current!==xt)throw Error(_(168));D(se,t),D(fe,n)}function Cc(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var r in l)if(!(r in t))throw Error(_(108,jd(e)||"Unknown",r));return V({},n,l)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Rt=se.current,D(se,e),D(fe,fe.current),!0}function Lo(e,t,n){var l=e.stateNode;if(!l)throw Error(_(169));n?(e=Cc(e,t,Rt),l.__reactInternalMemoizedMergedChildContext=e,$(fe),$(se),D(se,e)):$(fe),D(fe,n)}var We=null,vl=!1,Gl=!1;function wc(e){We===null?We=[e]:We.push(e)}function Dh(e){vl=!0,wc(e)}function jt(){if(!Gl&&We!==null){Gl=!0;var e=0,t=M;try{var n=We;for(M=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}We=null,vl=!1}catch(r){throw We!==null&&(We=We.slice(e+1)),Za(ds,jt),r}finally{M=t,Gl=!1}}return null}var Xt=[],Kt=0,Yi=null,qi=0,Ce=[],we=0,Lt=null,He=1,Qe="";function Ct(e,t){Xt[Kt++]=qi,Xt[Kt++]=Yi,Yi=e,qi=t}function Sc(e,t,n){Ce[we++]=He,Ce[we++]=Qe,Ce[we++]=Lt,Lt=e;var l=He;e=Qe;var r=32-Oe(l)-1;l&=~(1<<r),n+=1;var s=32-Oe(t)+r;if(30<s){var o=r-r%5;s=(l&(1<<o)-1).toString(32),l>>=o,r-=o,He=1<<32-Oe(t)+r|n<<r|l,Qe=s+e}else He=1<<s|n<<r|l,Qe=e}function ys(e){e.return!==null&&(Ct(e,1),Sc(e,1,0))}function _s(e){for(;e===Yi;)Yi=Xt[--Kt],Xt[Kt]=null,qi=Xt[--Kt],Xt[Kt]=null;for(;e===Lt;)Lt=Ce[--we],Ce[we]=null,Qe=Ce[--we],Ce[we]=null,He=Ce[--we],Ce[we]=null}var je=null,ge=null,U=!1,Ie=null;function zc(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Io(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ge=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ge=null,!0):!1;default:return!1}}function Ir(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Or(e){if(U){var t=ge;if(t){var n=t;if(!Io(e,t)){if(Ir(e))throw Error(_(418));t=ut(n.nextSibling);var l=je;t&&Io(e,t)?zc(l,n):(e.flags=e.flags&-4097|2,U=!1,je=e)}}else{if(Ir(e))throw Error(_(418));e.flags=e.flags&-4097|2,U=!1,je=e}}}function Oo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function ki(e){if(e!==je)return!1;if(!U)return Oo(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pr(e.type,e.memoizedProps)),t&&(t=ge)){if(Ir(e))throw Nc(),Error(_(418));for(;t;)zc(e,t),t=ut(t.nextSibling)}if(Oo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=je?ut(e.stateNode.nextSibling):null;return!0}function Nc(){for(var e=ge;e;)e=ut(e.nextSibling)}function sn(){ge=je=null,U=!1}function ks(e){Ie===null?Ie=[e]:Ie.push(e)}var Fh=Ye.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var l=n.stateNode}if(!l)throw Error(_(147,e));var r=l,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ci(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mo(e){var t=e._init;return t(e._payload)}function Ec(e){function t(h,u){if(e){var f=h.deletions;f===null?(h.deletions=[u],h.flags|=16):f.push(u)}}function n(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function l(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function r(h,u){return h=pt(h,u),h.index=0,h.sibling=null,h}function s(h,u,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<u?(h.flags|=2,u):f):(h.flags|=2,u)):(h.flags|=1048576,u)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,u,f,g){return u===null||u.tag!==6?(u=ir(f,h.mode,g),u.return=h,u):(u=r(u,f),u.return=h,u)}function c(h,u,f,g){var C=f.type;return C===Bt?m(h,u,f.props.children,g,f.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===et&&Mo(C)===u.type)?(g=r(u,f.props),g.ref=Cn(h,u,f),g.return=h,g):(g=Ui(f.type,f.key,f.props,null,h.mode,g),g.ref=Cn(h,u,f),g.return=h,g)}function d(h,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=lr(f,h.mode,g),u.return=h,u):(u=r(u,f.children||[]),u.return=h,u)}function m(h,u,f,g,C){return u===null||u.tag!==7?(u=Pt(f,h.mode,g,C),u.return=h,u):(u=r(u,f),u.return=h,u)}function p(h,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ir(""+u,h.mode,f),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case hi:return f=Ui(u.type,u.key,u.props,null,h.mode,f),f.ref=Cn(h,null,u),f.return=h,f;case Ut:return u=lr(u,h.mode,f),u.return=h,u;case et:var g=u._init;return p(h,g(u._payload),f)}if(Nn(u)||gn(u))return u=Pt(u,h.mode,f,null),u.return=h,u;Ci(h,u)}return null}function x(h,u,f,g){var C=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(h,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case hi:return f.key===C?c(h,u,f,g):null;case Ut:return f.key===C?d(h,u,f,g):null;case et:return C=f._init,x(h,u,C(f._payload),g)}if(Nn(f)||gn(f))return C!==null?null:m(h,u,f,g,null);Ci(h,f)}return null}function j(h,u,f,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return h=h.get(f)||null,a(u,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hi:return h=h.get(g.key===null?f:g.key)||null,c(u,h,g,C);case Ut:return h=h.get(g.key===null?f:g.key)||null,d(u,h,g,C);case et:var S=g._init;return j(h,u,f,S(g._payload),C)}if(Nn(g)||gn(g))return h=h.get(f)||null,m(u,h,g,C,null);Ci(u,g)}return null}function y(h,u,f,g){for(var C=null,S=null,E=u,P=u=0,H=null;E!==null&&P<f.length;P++){E.index>P?(H=E,E=null):H=E.sibling;var I=x(h,E,f[P],g);if(I===null){E===null&&(E=H);break}e&&E&&I.alternate===null&&t(h,E),u=s(I,u,P),S===null?C=I:S.sibling=I,S=I,E=H}if(P===f.length)return n(h,E),U&&Ct(h,P),C;if(E===null){for(;P<f.length;P++)E=p(h,f[P],g),E!==null&&(u=s(E,u,P),S===null?C=E:S.sibling=E,S=E);return U&&Ct(h,P),C}for(E=l(h,E);P<f.length;P++)H=j(E,h,P,f[P],g),H!==null&&(e&&H.alternate!==null&&E.delete(H.key===null?P:H.key),u=s(H,u,P),S===null?C=H:S.sibling=H,S=H);return e&&E.forEach(function(Pe){return t(h,Pe)}),U&&Ct(h,P),C}function v(h,u,f,g){var C=gn(f);if(typeof C!="function")throw Error(_(150));if(f=C.call(f),f==null)throw Error(_(151));for(var S=C=null,E=u,P=u=0,H=null,I=f.next();E!==null&&!I.done;P++,I=f.next()){E.index>P?(H=E,E=null):H=E.sibling;var Pe=x(h,E,I.value,g);if(Pe===null){E===null&&(E=H);break}e&&E&&Pe.alternate===null&&t(h,E),u=s(Pe,u,P),S===null?C=Pe:S.sibling=Pe,S=Pe,E=H}if(I.done)return n(h,E),U&&Ct(h,P),C;if(E===null){for(;!I.done;P++,I=f.next())I=p(h,I.value,g),I!==null&&(u=s(I,u,P),S===null?C=I:S.sibling=I,S=I);return U&&Ct(h,P),C}for(E=l(h,E);!I.done;P++,I=f.next())I=j(E,h,P,I.value,g),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?P:I.key),u=s(I,u,P),S===null?C=I:S.sibling=I,S=I);return e&&E.forEach(function(xn){return t(h,xn)}),U&&Ct(h,P),C}function k(h,u,f,g){if(typeof f=="object"&&f!==null&&f.type===Bt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case hi:e:{for(var C=f.key,S=u;S!==null;){if(S.key===C){if(C=f.type,C===Bt){if(S.tag===7){n(h,S.sibling),u=r(S,f.props.children),u.return=h,h=u;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===et&&Mo(C)===S.type){n(h,S.sibling),u=r(S,f.props),u.ref=Cn(h,S,f),u.return=h,h=u;break e}n(h,S);break}else t(h,S);S=S.sibling}f.type===Bt?(u=Pt(f.props.children,h.mode,g,f.key),u.return=h,h=u):(g=Ui(f.type,f.key,f.props,null,h.mode,g),g.ref=Cn(h,u,f),g.return=h,h=g)}return o(h);case Ut:e:{for(S=f.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(h,u.sibling),u=r(u,f.children||[]),u.return=h,h=u;break e}else{n(h,u);break}else t(h,u);u=u.sibling}u=lr(f,h.mode,g),u.return=h,h=u}return o(h);case et:return S=f._init,k(h,u,S(f._payload),g)}if(Nn(f))return y(h,u,f,g);if(gn(f))return v(h,u,f,g);Ci(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(h,u.sibling),u=r(u,f),u.return=h,h=u):(n(h,u),u=ir(f,h.mode,g),u.return=h,h=u),o(h)):n(h,u)}return k}var on=Ec(!0),Pc=Ec(!1),bi=gt(null),el=null,Jt=null,Cs=null;function ws(){Cs=Jt=el=null}function Ss(e){var t=bi.current;$(bi),e._currentValue=t}function Mr(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function tn(e,t){el=e,Cs=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(Cs!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(el===null)throw Error(_(308));Jt=e,el.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var zt=null;function zs(e){zt===null?zt=[e]:zt.push(e)}function Tc(e,t,n,l){var r=t.interleaved;return r===null?(n.next=n,zs(t)):(n.next=r.next,r.next=n),t.interleaved=n,Ze(e,l)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,O&2){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,Ze(e,n)}return r=l.interleaved,r===null?(t.next=t,zs(l)):(t.next=r.next,r.next=t),l.interleaved=t,Ze(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,hs(e,n)}}function Do(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,l){var r=e.updateQueue;tt=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=d:a.next=d,m.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,m=d=c=null,a=s;do{var x=a.lane,j=a.eventTime;if((l&x)===x){m!==null&&(m=m.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(x=t,j=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(j,p,x);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,x=typeof y=="function"?y.call(j,p,x):y,x==null)break e;p=V({},p,x);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=r.effects,x===null?r.effects=[a]:x.push(a))}else j={eventTime:j,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(d=m=j,c=p):m=m.next=j,o|=x;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;x=a,a=x.next,x.next=null,r.lastBaseUpdate=x,r.shared.pending=null}}while(!0);if(m===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=m,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else s===null&&(r.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=p}}function Fo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],r=l.callback;if(r!==null){if(l.callback=null,l=n,typeof r!="function")throw Error(_(191,r));r.call(l)}}}var ai={},Ae=gt(ai),Gn=gt(ai),Yn=gt(ai);function Nt(e){if(e===ai)throw Error(_(174));return e}function Es(e,t){switch(D(Yn,t),D(Gn,e),D(Ae,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mr(t,e)}$(Ae),D(Ae,t)}function an(){$(Ae),$(Gn),$(Yn)}function Lc(e){Nt(Yn.current);var t=Nt(Ae.current),n=mr(t,e.type);t!==n&&(D(Gn,e),D(Ae,n))}function Ps(e){Gn.current===e&&($(Ae),$(Gn))}var B=gt(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Ts(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Oi=Ye.ReactCurrentDispatcher,ql=Ye.ReactCurrentBatchConfig,It=0,A=null,J=null,q=null,il=!1,Mn=!1,qn=0,$h=0;function ie(){throw Error(_(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Ls(e,t,n,l,r,s){if(It=s,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?Vh:Wh,e=n(l,r),Mn){s=0;do{if(Mn=!1,qn=0,25<=s)throw Error(_(301));s+=1,q=J=null,t.updateQueue=null,Oi.current=Hh,e=n(l,r)}while(Mn)}if(Oi.current=ll,t=J!==null&&J.next!==null,It=0,q=J=A=null,il=!1,t)throw Error(_(300));return e}function Is(){var e=qn!==0;return qn=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?A.memoizedState=q=e:q=q.next=e,q}function Ee(){if(J===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=q===null?A.memoizedState:q.next;if(t!==null)q=t,J=e;else{if(e===null)throw Error(_(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},q===null?A.memoizedState=q=e:q=q.next=e}return q}function bn(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Ee(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var l=J,r=l.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}l.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,l=l.baseState;var a=o=null,c=null,d=s;do{var m=d.lane;if((It&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),l=d.hasEagerState?d.eagerState:e(l,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=p,o=l):c=c.next=p,A.lanes|=m,Ot|=m}d=d.next}while(d!==null&&d!==s);c===null?o=l:c.next=a,De(l,t.memoizedState)||(he=!0),t.memoizedState=l,t.baseState=o,t.baseQueue=c,n.lastRenderedState=l}if(e=n.interleaved,e!==null){r=e;do s=r.lane,A.lanes|=s,Ot|=s,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function er(e){var t=Ee(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=e(s,o.action),o=o.next;while(o!==r);De(s,t.memoizedState)||(he=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,l]}function Ic(){}function Oc(e,t){var n=A,l=Ee(),r=t(),s=!De(l.memoizedState,r);if(s&&(l.memoizedState=r,he=!0),l=l.queue,Os(Fc.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,ei(9,Dc.bind(null,n,l,r,t),void 0,null),b===null)throw Error(_(349));It&30||Mc(n,t,r)}return r}function Mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dc(e,t,n,l){t.value=n,t.getSnapshot=l,$c(t)&&Uc(e)}function Fc(e,t,n){return n(function(){$c(t)&&Uc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Uc(e){var t=Ze(e,1);t!==null&&Me(t,e,1,-1)}function $o(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t.queue=e,e=e.dispatch=Ah.bind(null,A,e),[t.memoizedState,e]}function ei(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function Bc(){return Ee().memoizedState}function Mi(e,t,n,l){var r=$e();A.flags|=e,r.memoizedState=ei(1|t,n,void 0,l===void 0?null:l)}function gl(e,t,n,l){var r=Ee();l=l===void 0?null:l;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,l!==null&&Rs(l,o.deps)){r.memoizedState=ei(t,n,s,l);return}}A.flags|=e,r.memoizedState=ei(1|t,n,s,l)}function Uo(e,t){return Mi(8390656,8,e,t)}function Os(e,t){return gl(2048,8,e,t)}function Ac(e,t){return gl(4,2,e,t)}function Vc(e,t){return gl(4,4,e,t)}function Wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,Wc.bind(null,t,e),n)}function Ms(){}function Qc(e,t){var n=Ee();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Rs(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Xc(e,t){var n=Ee();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Rs(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function Kc(e,t,n){return It&21?(De(n,t)||(n=qa(),A.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Uh(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var l=ql.transition;ql.transition={};try{e(!1),t()}finally{M=n,ql.transition=l}}function Jc(){return Ee().memoizedState}function Bh(e,t,n){var l=ft(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},Zc(e))Gc(t,n);else if(n=Tc(e,t,n,l),n!==null){var r=ae();Me(n,e,l,r),Yc(n,t,l)}}function Ah(e,t,n){var l=ft(e),r={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))Gc(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,De(a,o)){var c=t.interleaved;c===null?(r.next=r,zs(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}n=Tc(e,t,r,l),n!==null&&(r=ae(),Me(n,e,l,r),Yc(n,t,l))}}function Zc(e){var t=e.alternate;return e===A||t!==null&&t===A}function Gc(e,t){Mn=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yc(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,hs(e,n)}}var ll={readContext:Ne,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Vh={readContext:Ne,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Uo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,Wc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mi(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=$e();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Bh.bind(null,A,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:$o,useDebugValue:Ms,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=$o(!1),t=e[0];return e=Uh.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=A,r=$e();if(U){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),b===null)throw Error(_(349));It&30||Mc(l,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Uo(Fc.bind(null,l,s,e),[e]),l.flags|=2048,ei(9,Dc.bind(null,l,s,n,t),void 0,null),n},useId:function(){var e=$e(),t=b.identifierPrefix;if(U){var n=Qe,l=He;n=(l&~(1<<32-Oe(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$h++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wh={readContext:Ne,useCallback:Qc,useContext:Ne,useEffect:Os,useImperativeHandle:Hc,useInsertionEffect:Ac,useLayoutEffect:Vc,useMemo:Xc,useReducer:bl,useRef:Bc,useState:function(){return bl(bn)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ee();return Kc(t,J.memoizedState,e)},useTransition:function(){var e=bl(bn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Oc,useId:Jc,unstable_isNewReconciler:!1},Hh={readContext:Ne,useCallback:Qc,useContext:Ne,useEffect:Os,useImperativeHandle:Hc,useInsertionEffect:Ac,useLayoutEffect:Vc,useMemo:Xc,useReducer:er,useRef:Bc,useState:function(){return er(bn)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ee();return J===null?t.memoizedState=e:Kc(t,J.memoizedState,e)},useTransition:function(){var e=er(bn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Oc,useId:Jc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dr(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=ae(),r=ft(e),s=Xe(l,r);s.payload=t,n!=null&&(s.callback=n),t=dt(e,s,r),t!==null&&(Me(t,e,r,l),Ii(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=ae(),r=ft(e),s=Xe(l,r);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=dt(e,s,r),t!==null&&(Me(t,e,r,l),Ii(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),l=ft(e),r=Xe(n,l);r.tag=2,t!=null&&(r.callback=t),t=dt(e,r,l),t!==null&&(Me(t,e,l,n),Ii(t,e,l))}};function Bo(e,t,n,l,r,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,o):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,l)||!Xn(r,s):!0}function qc(e,t,n){var l=!1,r=xt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ne(s):(r=pe(t)?Rt:se.current,l=t.contextTypes,s=(l=l!=null)?rn(e,r):xt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ao(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function Fr(e,t,n,l){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Ns(e);var s=t.contextType;typeof s=="object"&&s!==null?r.context=Ne(s):(s=pe(t)?Rt:se.current,r.context=rn(e,s)),r.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Dr(e,t,s,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&jl.enqueueReplaceState(r,r.state,null),tl(e,n,r,l),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",l=t;do n+=gd(l),l=l.return;while(l);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:r,digest:null}}function tr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $r(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qh=typeof WeakMap=="function"?WeakMap:Map;function bc(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){sl||(sl=!0,Jr=l),$r(e,t)},n}function eu(e,t,n){n=Xe(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var r=t.value;n.payload=function(){return l(r)},n.callback=function(){$r(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$r(e,t),typeof l!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Vo(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Qh;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(r.add(n),e=sf.bind(null,e,t,n),t.then(e,e))}function Wo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ho(e,t,n,l,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var Xh=Ye.ReactCurrentOwner,he=!1;function oe(e,t,n,l){t.child=e===null?Pc(t,null,n,l):on(t,e.child,n,l)}function Qo(e,t,n,l,r){n=n.render;var s=t.ref;return tn(t,r),l=Ls(e,t,n,l,s,r),n=Is(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ge(e,t,r)):(U&&n&&ys(t),t.flags|=1,oe(e,t,l,r),t.child)}function Xo(e,t,n,l,r){if(e===null){var s=n.type;return typeof s=="function"&&!Ws(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,tu(e,t,s,l,r)):(e=Ui(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(o,l)&&e.ref===t.ref)return Ge(e,t,r)}return t.flags|=1,e=pt(s,l),e.ref=t.ref,e.return=t,t.child=e}function tu(e,t,n,l,r){if(e!==null){var s=e.memoizedProps;if(Xn(s,l)&&e.ref===t.ref)if(he=!1,t.pendingProps=l=s,(e.lanes&r)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ge(e,t,r)}return Ur(e,t,n,l,r)}function nu(e,t,n){var l=t.pendingProps,r=l.children,s=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Gt,ve),ve|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Gt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=s!==null?s.baseLanes:n,D(Gt,ve),ve|=l}else s!==null?(l=s.baseLanes|n,t.memoizedState=null):l=n,D(Gt,ve),ve|=l;return oe(e,t,r,n),t.child}function iu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ur(e,t,n,l,r){var s=pe(n)?Rt:se.current;return s=rn(t,s),tn(t,r),n=Ls(e,t,n,l,s,r),l=Is(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Ge(e,t,r)):(U&&l&&ys(t),t.flags|=1,oe(e,t,n,r),t.child)}function Ko(e,t,n,l,r){if(pe(n)){var s=!0;Gi(t)}else s=!1;if(tn(t,r),t.stateNode===null)Di(e,t),qc(t,n,l),Fr(t,n,l,r),l=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=pe(n)?Rt:se.current,d=rn(t,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==l||c!==d)&&Ao(t,o,l,d),tt=!1;var x=t.memoizedState;o.state=x,tl(t,l,o,r),c=t.memoizedState,a!==l||x!==c||fe.current||tt?(typeof m=="function"&&(Dr(t,n,m,l),c=t.memoizedState),(a=tt||Bo(t,n,a,l,x,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=c),o.props=l,o.state=c,o.context=d,l=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{o=t.stateNode,Rc(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Re(t.type,a),o.props=d,p=t.pendingProps,x=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ne(c):(c=pe(n)?Rt:se.current,c=rn(t,c));var j=n.getDerivedStateFromProps;(m=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||x!==c)&&Ao(t,o,l,c),tt=!1,x=t.memoizedState,o.state=x,tl(t,l,o,r);var y=t.memoizedState;a!==p||x!==y||fe.current||tt?(typeof j=="function"&&(Dr(t,n,j,l),y=t.memoizedState),(d=tt||Bo(t,n,d,l,x,y,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=y),o.props=l,o.state=y,o.context=c,l=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),l=!1)}return Br(e,t,n,l,s,r)}function Br(e,t,n,l,r,s){iu(e,t);var o=(t.flags&128)!==0;if(!l&&!o)return r&&Lo(t,n,!1),Ge(e,t,s);l=t.stateNode,Xh.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&o?(t.child=on(t,e.child,null,s),t.child=on(t,null,a,s)):oe(e,t,a,s),t.memoizedState=l.state,r&&Lo(t,n,!0),t.child}function lu(e){var t=e.stateNode;t.pendingContext?Ro(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ro(e,t.context,!1),Es(e,t.containerInfo)}function Jo(e,t,n,l,r){return sn(),ks(r),t.flags|=256,oe(e,t,n,l),t.child}var Ar={dehydrated:null,treeContext:null,retryLane:0};function Vr(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,t,n){var l=t.pendingProps,r=B.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),D(B,r&1),e===null)return Or(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=l.children,e=l.fallback,s?(l=t.mode,s=t.child,o={mode:"hidden",children:o},!(l&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,l,0,null),e=Pt(e,l,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Vr(n),t.memoizedState=Ar,e):Ds(t,o));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Kh(e,t,o,l,a,r,n);if(s){s=l.fallback,o=t.mode,r=e.child,a=r.sibling;var c={mode:"hidden",children:l.children};return!(o&1)&&t.child!==r?(l=t.child,l.childLanes=0,l.pendingProps=c,t.deletions=null):(l=pt(r,c),l.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pt(a,s):(s=Pt(s,o,n,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,l=s,s=t.child,o=e.child.memoizedState,o=o===null?Vr(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ar,l}return s=e.child,e=s.sibling,l=pt(s,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function Ds(e,t){return t=kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,l){return l!==null&&ks(l),on(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kh(e,t,n,l,r,s,o){if(n)return t.flags&256?(t.flags&=-257,l=tr(Error(_(422))),wi(e,t,o,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=l.fallback,r=t.mode,l=kl({mode:"visible",children:l.children},r,0,null),s=Pt(s,r,o,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,t.mode&1&&on(t,e.child,null,o),t.child.memoizedState=Vr(o),t.memoizedState=Ar,s);if(!(t.mode&1))return wi(e,t,o,null);if(r.data==="$!"){if(l=r.nextSibling&&r.nextSibling.dataset,l)var a=l.dgst;return l=a,s=Error(_(419)),l=tr(s,l,void 0),wi(e,t,o,l)}if(a=(o&e.childLanes)!==0,he||a){if(l=b,l!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(l.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ze(e,r),Me(l,e,r,-1))}return Vs(),l=tr(Error(_(421))),wi(e,t,o,l)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=of.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,ge=ut(r.nextSibling),je=t,U=!0,Ie=null,e!==null&&(Ce[we++]=He,Ce[we++]=Qe,Ce[we++]=Lt,He=e.id,Qe=e.overflow,Lt=t),t=Ds(t,l.children),t.flags|=4096,t)}function Zo(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Mr(e.return,t,n)}function nr(e,t,n,l,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=n,s.tailMode=r)}function su(e,t,n){var l=t.pendingProps,r=l.revealOrder,s=l.tail;if(oe(e,t,l.children,n),l=B.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zo(e,n,t);else if(e.tag===19)Zo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(D(B,l),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),nr(t,!1,r,n,s);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&nl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}nr(t,!0,n,null,s);break;case"together":nr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jh(e,t,n){switch(t.tag){case 3:lu(t),sn();break;case 5:Lc(t);break;case 1:pe(t.type)&&Gi(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,r=t.memoizedProps.value;D(bi,l._currentValue),l._currentValue=r;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(D(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?ru(e,t,n):(D(B,B.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return su(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),D(B,B.current),l)break;return null;case 22:case 23:return t.lanes=0,nu(e,t,n)}return Ge(e,t,n)}var ou,Wr,au,cu;ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wr=function(){};au=function(e,t,n,l){var r=e.memoizedProps;if(r!==l){e=t.stateNode,Nt(Ae.current);var s=null;switch(n){case"input":r=dr(e,r),l=dr(e,l),s=[];break;case"select":r=V({},r,{value:void 0}),l=V({},l,{value:void 0}),s=[];break;case"textarea":r=pr(e,r),l=pr(e,l),s=[];break;default:typeof r.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Ji)}xr(n,l);var o;n=null;for(d in r)if(!l.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var a=r[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Un.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in l){var c=l[d];if(a=r!=null?r[d]:void 0,l.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Un.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&F("scroll",e),s||a===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};cu=function(e,t,n,l){n!==l&&(t.flags|=4)};function wn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&14680064,l|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Zh(e,t,n){var l=t.pendingProps;switch(_s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return pe(t.type)&&Zi(),le(t),null;case 3:return l=t.stateNode,an(),$(fe),$(se),Ts(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Yr(Ie),Ie=null))),Wr(e,t),le(t),null;case 5:Ps(t);var r=Nt(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)au(e,t,n,l,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(_(166));return le(t),null}if(e=Nt(Ae.current),ki(t)){l=t.stateNode,n=t.type;var s=t.memoizedProps;switch(l[Ue]=t,l[Zn]=s,e=(t.mode&1)!==0,n){case"dialog":F("cancel",l),F("close",l);break;case"iframe":case"object":case"embed":F("load",l);break;case"video":case"audio":for(r=0;r<Pn.length;r++)F(Pn[r],l);break;case"source":F("error",l);break;case"img":case"image":case"link":F("error",l),F("load",l);break;case"details":F("toggle",l);break;case"input":io(l,s),F("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!s.multiple},F("invalid",l);break;case"textarea":ro(l,s),F("invalid",l)}xr(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?l.textContent!==a&&(s.suppressHydrationWarning!==!0&&_i(l.textContent,a,e),r=["children",a]):typeof a=="number"&&l.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_i(l.textContent,a,e),r=["children",""+a]):Un.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&F("scroll",l)}switch(n){case"input":fi(l),lo(l,s,!0);break;case"textarea":fi(l),so(l);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(l.onclick=Ji)}l=r,t.updateQueue=l,l!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=o.createElement(n,{is:l.is}):(e=o.createElement(n),n==="select"&&(o=e,l.multiple?o.multiple=!0:l.size&&(o.size=l.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Zn]=l,ou(e,t,!1,!1),t.stateNode=e;e:{switch(o=vr(n,l),n){case"dialog":F("cancel",e),F("close",e),r=l;break;case"iframe":case"object":case"embed":F("load",e),r=l;break;case"video":case"audio":for(r=0;r<Pn.length;r++)F(Pn[r],e);r=l;break;case"source":F("error",e),r=l;break;case"img":case"image":case"link":F("error",e),F("load",e),r=l;break;case"details":F("toggle",e),r=l;break;case"input":io(e,l),r=dr(e,l),F("invalid",e);break;case"option":r=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},r=V({},l,{value:void 0}),F("invalid",e);break;case"textarea":ro(e,l),r=pr(e,l),F("invalid",e);break;default:r=l}xr(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?Ba(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$a(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Bn(e,c):typeof c=="number"&&Bn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Un.hasOwnProperty(s)?c!=null&&s==="onScroll"&&F("scroll",e):c!=null&&ss(e,s,c,o))}switch(n){case"input":fi(e),lo(e,l,!1);break;case"textarea":fi(e),so(e);break;case"option":l.value!=null&&e.setAttribute("value",""+mt(l.value));break;case"select":e.multiple=!!l.multiple,s=l.value,s!=null?Yt(e,!!l.multiple,s,!1):l.defaultValue!=null&&Yt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ji)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)cu(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(_(166));if(n=Nt(Yn.current),Nt(Ae.current),ki(t)){if(l=t.stateNode,n=t.memoizedProps,l[Ue]=t,(s=l.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:_i(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(l.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Ue]=t,t.stateNode=l}return le(t),null;case 13:if($(B),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ge!==null&&t.mode&1&&!(t.flags&128))Nc(),sn(),t.flags|=98560,s=!1;else if(s=ki(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[Ue]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),s=!1}else Ie!==null&&(Yr(Ie),Ie=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):Vs())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return an(),Wr(e,t),e===null&&Kn(t.stateNode.containerInfo),le(t),null;case 10:return Ss(t.type._context),le(t),null;case 17:return pe(t.type)&&Zi(),le(t),null;case 19:if($(B),s=t.memoizedState,s===null)return le(t),null;if(l=(t.flags&128)!==0,o=s.rendering,o===null)if(l)wn(s,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=nl(e),o!==null){for(t.flags|=128,wn(s,!1),l=o.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)s=n,e=l,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(B,B.current&1|2),t.child}e=e.sibling}s.tail!==null&&X()>un&&(t.flags|=128,l=!0,wn(s,!1),t.lanes=4194304)}else{if(!l)if(e=nl(o),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!U)return le(t),null}else 2*X()-s.renderingStartTime>un&&n!==1073741824&&(t.flags|=128,l=!0,wn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,n=B.current,D(B,l?n&1|2:n&1),t):(le(t),null);case 22:case 23:return As(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Gh(e,t){switch(_s(t),t.tag){case 1:return pe(t.type)&&Zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),$(fe),$(se),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ps(t),null;case 13:if($(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(B),null;case 4:return an(),null;case 10:return Ss(t.type._context),null;case 22:case 23:return As(),null;case 24:return null;default:return null}}var Si=!1,re=!1,Yh=typeof WeakSet=="function"?WeakSet:Set,z=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){W(e,t,l)}else n.current=null}function Hr(e,t,n){try{n()}catch(l){W(e,t,l)}}var Go=!1;function qh(e,t){if(Nr=Qi,e=pc(),js(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,d=0,m=0,p=e,x=null;t:for(;;){for(var j;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||l!==0&&p.nodeType!==3||(c=o+l),p.nodeType===3&&(o+=p.nodeValue.length),(j=p.firstChild)!==null;)x=p,p=j;for(;;){if(p===e)break t;if(x===n&&++d===r&&(a=o),x===s&&++m===l&&(c=o),(j=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=j}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Er={focusedElem:e,selectionRange:n},Qi=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Re(t.type,v),k);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=Go,Go=!1,y}function Dn(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var r=l=l.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hr(t,n,s)}r=r.next}while(r!==l)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function Qr(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uu(e){var t=e.alternate;t!==null&&(e.alternate=null,uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Zn],delete t[Rr],delete t[Oh],delete t[Mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function Yo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji));else if(l!==4&&(e=e.child,e!==null))for(Xr(e,t,n),e=e.sibling;e!==null;)Xr(e,t,n),e=e.sibling}function Kr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Kr(e,t,n),e=e.sibling;e!==null;)Kr(e,t,n),e=e.sibling}var ee=null,Le=!1;function be(e,t,n){for(n=n.child;n!==null;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:re||Zt(n,t);case 6:var l=ee,r=Le;ee=null,be(e,t,n),ee=l,Le=r,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),Hn(e)):Zl(ee,n.stateNode));break;case 4:l=ee,r=Le,ee=n.stateNode.containerInfo,Le=!0,be(e,t,n),ee=l,Le=r;break;case 0:case 11:case 14:case 15:if(!re&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){r=l=l.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hr(n,t,o),r=r.next}while(r!==l)}be(e,t,n);break;case 1:if(!re&&(Zt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(a){W(n,t,a)}be(e,t,n);break;case 21:be(e,t,n);break;case 22:n.mode&1?(re=(l=re)||n.memoizedState!==null,be(e,t,n),re=l):be(e,t,n);break;default:be(e,t,n)}}function qo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yh),t.forEach(function(l){var r=af.bind(null,e,l);n.has(l)||(n.add(l),l.then(r,r))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Le=!1;break e;case 3:ee=a.stateNode.containerInfo,Le=!0;break e;case 4:ee=a.stateNode.containerInfo,Le=!0;break e}a=a.return}if(ee===null)throw Error(_(160));hu(s,o,r),ee=null,Le=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){W(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fu(t,e),t=t.sibling}function fu(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Fe(e),l&4){try{Dn(3,e,e.return),yl(3,e)}catch(v){W(e,e.return,v)}try{Dn(5,e,e.return)}catch(v){W(e,e.return,v)}}break;case 1:Te(t,e),Fe(e),l&512&&n!==null&&Zt(n,n.return);break;case 5:if(Te(t,e),Fe(e),l&512&&n!==null&&Zt(n,n.return),e.flags&32){var r=e.stateNode;try{Bn(r,"")}catch(v){W(e,e.return,v)}}if(l&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ma(r,s),vr(a,o);var d=vr(a,s);for(o=0;o<c.length;o+=2){var m=c[o],p=c[o+1];m==="style"?Ba(r,p):m==="dangerouslySetInnerHTML"?$a(r,p):m==="children"?Bn(r,p):ss(r,m,p,d)}switch(a){case"input":hr(r,s);break;case"textarea":Da(r,s);break;case"select":var x=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Yt(r,!!s.multiple,j,!1):x!==!!s.multiple&&(s.defaultValue!=null?Yt(r,!!s.multiple,s.defaultValue,!0):Yt(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zn]=s}catch(v){W(e,e.return,v)}}break;case 6:if(Te(t,e),Fe(e),l&4){if(e.stateNode===null)throw Error(_(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(v){W(e,e.return,v)}}break;case 3:if(Te(t,e),Fe(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(v){W(e,e.return,v)}break;case 4:Te(t,e),Fe(e);break;case 13:Te(t,e),Fe(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Us=X())),l&4&&qo(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(re=(d=re)||m,Te(t,e),re=d):Te(t,e),Fe(e),l&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(p=z=m;z!==null;){switch(x=z,j=x.child,x.tag){case 0:case 11:case 14:case 15:Dn(4,x,x.return);break;case 1:Zt(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){l=x,n=x.return;try{t=l,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){W(l,n,v)}}break;case 5:Zt(x,x.return);break;case 22:if(x.memoizedState!==null){ea(p);continue}}j!==null?(j.return=x,z=j):ea(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{r=p.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Ua("display",o))}catch(v){W(e,e.return,v)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(v){W(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Te(t,e),Fe(e),l&4&&qo(e);break;case 21:break;default:Te(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(du(n)){var l=n;break e}n=n.return}throw Error(_(160))}switch(l.tag){case 5:var r=l.stateNode;l.flags&32&&(Bn(r,""),l.flags&=-33);var s=Yo(e);Kr(e,s,r);break;case 3:case 4:var o=l.stateNode.containerInfo,a=Yo(e);Xr(e,a,o);break;default:throw Error(_(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bh(e,t,n){z=e,pu(e)}function pu(e,t,n){for(var l=(e.mode&1)!==0;z!==null;){var r=z,s=r.child;if(r.tag===22&&l){var o=r.memoizedState!==null||Si;if(!o){var a=r.alternate,c=a!==null&&a.memoizedState!==null||re;a=Si;var d=re;if(Si=o,(re=c)&&!d)for(z=r;z!==null;)o=z,c=o.child,o.tag===22&&o.memoizedState!==null?ta(r):c!==null?(c.return=o,z=c):ta(r);for(;s!==null;)z=s,pu(s),s=s.sibling;z=r,Si=a,re=d}bo(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,z=s):bo(e)}}function bo(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||yl(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!re)if(n===null)l.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);l.componentDidUpdate(r,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Fo(t,s,l);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fo(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Hn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}re||t.flags&512&&Qr(t)}catch(x){W(t,t.return,x)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function ea(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ta(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(c){W(t,n,c)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var r=t.return;try{l.componentDidMount()}catch(c){W(t,r,c)}}var s=t.return;try{Qr(t)}catch(c){W(t,s,c)}break;case 5:var o=t.return;try{Qr(t)}catch(c){W(t,o,c)}}}catch(c){W(t,t.return,c)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var ef=Math.ceil,rl=Ye.ReactCurrentDispatcher,Fs=Ye.ReactCurrentOwner,ze=Ye.ReactCurrentBatchConfig,O=0,b=null,K=null,te=0,ve=0,Gt=gt(0),Z=0,ti=null,Ot=0,_l=0,$s=0,Fn=null,de=null,Us=0,un=1/0,Ve=null,sl=!1,Jr=null,ht=null,zi=!1,rt=null,ol=0,$n=0,Zr=null,Fi=-1,$i=0;function ae(){return O&6?X():Fi!==-1?Fi:Fi=X()}function ft(e){return e.mode&1?O&2&&te!==0?te&-te:Fh.transition!==null?($i===0&&($i=qa()),$i):(e=M,e!==0||(e=window.event,e=e===void 0?16:rc(e.type)),e):1}function Me(e,t,n,l){if(50<$n)throw $n=0,Zr=null,Error(_(185));ri(e,n,l),(!(O&2)||e!==b)&&(e===b&&(!(O&2)&&(_l|=n),Z===4&&it(e,te)),me(e,l),n===1&&O===0&&!(t.mode&1)&&(un=X()+500,vl&&jt()))}function me(e,t){var n=e.callbackNode;Fd(e,t);var l=Hi(e,e===b?te:0);if(l===0)n!==null&&co(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&co(n),t===1)e.tag===0?Dh(na.bind(null,e)):wc(na.bind(null,e)),Lh(function(){!(O&6)&&jt()}),n=null;else{switch(ba(l)){case 1:n=ds;break;case 4:n=Ga;break;case 16:n=Wi;break;case 536870912:n=Ya;break;default:n=Wi}n=ku(n,mu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mu(e,t){if(Fi=-1,$i=0,O&6)throw Error(_(327));var n=e.callbackNode;if(nn()&&e.callbackNode!==n)return null;var l=Hi(e,e===b?te:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=al(e,l);else{t=l;var r=O;O|=2;var s=vu();(b!==e||te!==t)&&(Ve=null,un=X()+500,Et(e,t));do try{lf();break}catch(a){xu(e,a)}while(!0);ws(),rl.current=s,O=r,K!==null?t=0:(b=null,te=0,t=Z)}if(t!==0){if(t===2&&(r=kr(e),r!==0&&(l=r,t=Gr(e,r))),t===1)throw n=ti,Et(e,0),it(e,l),me(e,X()),n;if(t===6)it(e,l);else{if(r=e.current.alternate,!(l&30)&&!tf(r)&&(t=al(e,l),t===2&&(s=kr(e),s!==0&&(l=s,t=Gr(e,s))),t===1))throw n=ti,Et(e,0),it(e,l),me(e,X()),n;switch(e.finishedWork=r,e.finishedLanes=l,t){case 0:case 1:throw Error(_(345));case 2:wt(e,de,Ve);break;case 3:if(it(e,l),(l&130023424)===l&&(t=Us+500-X(),10<t)){if(Hi(e,0)!==0)break;if(r=e.suspendedLanes,(r&l)!==l){ae(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Tr(wt.bind(null,e,de,Ve),t);break}wt(e,de,Ve);break;case 4:if(it(e,l),(l&4194240)===l)break;for(t=e.eventTimes,r=-1;0<l;){var o=31-Oe(l);s=1<<o,o=t[o],o>r&&(r=o),l&=~s}if(l=r,l=X()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*ef(l/1960))-l,10<l){e.timeoutHandle=Tr(wt.bind(null,e,de,Ve),l);break}wt(e,de,Ve);break;case 5:wt(e,de,Ve);break;default:throw Error(_(329))}}}return me(e,X()),e.callbackNode===n?mu.bind(null,e):null}function Gr(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=al(e,t),e!==2&&(t=de,de=n,t!==null&&Yr(t)),e}function Yr(e){de===null?de=e:de.push.apply(de,e)}function tf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var r=n[l],s=r.getSnapshot;r=r.value;try{if(!De(s(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~$s,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),l=1<<n;e[n]=-1,t&=~l}}function na(e){if(O&6)throw Error(_(327));nn();var t=Hi(e,0);if(!(t&1))return me(e,X()),null;var n=al(e,t);if(e.tag!==0&&n===2){var l=kr(e);l!==0&&(t=l,n=Gr(e,l))}if(n===1)throw n=ti,Et(e,0),it(e,t),me(e,X()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Ve),me(e,X()),null}function Bs(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(un=X()+500,vl&&jt())}}function Mt(e){rt!==null&&rt.tag===0&&!(O&6)&&nn();var t=O;O|=1;var n=ze.transition,l=M;try{if(ze.transition=null,M=1,e)return e()}finally{M=l,ze.transition=n,O=t,!(O&6)&&jt()}}function As(){ve=Gt.current,$(Gt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rh(n)),K!==null)for(n=K.return;n!==null;){var l=n;switch(_s(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Zi();break;case 3:an(),$(fe),$(se),Ts();break;case 5:Ps(l);break;case 4:an();break;case 13:$(B);break;case 19:$(B);break;case 10:Ss(l.type._context);break;case 22:case 23:As()}n=n.return}if(b=e,K=e=pt(e.current,null),te=ve=t,Z=0,ti=null,$s=_l=Ot=0,de=Fn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],l=n.interleaved,l!==null){n.interleaved=null;var r=l.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,l.next=o}n.pending=l}zt=null}return e}function xu(e,t){do{var n=K;try{if(ws(),Oi.current=ll,il){for(var l=A.memoizedState;l!==null;){var r=l.queue;r!==null&&(r.pending=null),l=l.next}il=!1}if(It=0,q=J=A=null,Mn=!1,qn=0,Fs.current=null,n===null||n.return===null){Z=1,ti=t,K=null;break}e:{var s=e,o=n.return,a=n,c=t;if(t=te,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var x=m.alternate;x?(m.updateQueue=x.updateQueue,m.memoizedState=x.memoizedState,m.lanes=x.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=Wo(o);if(j!==null){j.flags&=-257,Ho(j,o,a,s,t),j.mode&1&&Vo(s,d,t),t=j,c=d;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){Vo(s,d,t),Vs();break e}c=Error(_(426))}}else if(U&&a.mode&1){var k=Wo(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ho(k,o,a,s,t),ks(cn(c,a));break e}}s=c=cn(c,a),Z!==4&&(Z=2),Fn===null?Fn=[s]:Fn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=bc(s,c,t);Do(s,h);break e;case 1:a=c;var u=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ht===null||!ht.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=eu(s,a,t);Do(s,g);break e}}s=s.return}while(s!==null)}ju(n)}catch(C){t=C,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function vu(){var e=rl.current;return rl.current=ll,e===null?ll:e}function Vs(){(Z===0||Z===3||Z===2)&&(Z=4),b===null||!(Ot&268435455)&&!(_l&268435455)||it(b,te)}function al(e,t){var n=O;O|=2;var l=vu();(b!==e||te!==t)&&(Ve=null,Et(e,t));do try{nf();break}catch(r){xu(e,r)}while(!0);if(ws(),O=n,rl.current=l,K!==null)throw Error(_(261));return b=null,te=0,Z}function nf(){for(;K!==null;)gu(K)}function lf(){for(;K!==null&&!Ed();)gu(K)}function gu(e){var t=_u(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?ju(e):K=t,Fs.current=null}function ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gh(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,K=null;return}}else if(n=Zh(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Z===0&&(Z=5)}function wt(e,t,n){var l=M,r=ze.transition;try{ze.transition=null,M=1,rf(e,t,n,l)}finally{ze.transition=r,M=l}return null}function rf(e,t,n,l){do nn();while(rt!==null);if(O&6)throw Error(_(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if($d(e,s),e===b&&(K=b=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zi||(zi=!0,ku(Wi,function(){return nn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ze.transition,ze.transition=null;var o=M;M=1;var a=O;O|=4,Fs.current=null,qh(e,n),fu(n,e),wh(Er),Qi=!!Nr,Er=Nr=null,e.current=n,bh(n),Pd(),O=a,M=o,ze.transition=s}else e.current=n;if(zi&&(zi=!1,rt=e,ol=r),s=e.pendingLanes,s===0&&(ht=null),Ld(n.stateNode),me(e,X()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],l(r.value,{componentStack:r.stack,digest:r.digest});if(sl)throw sl=!1,e=Jr,Jr=null,e;return ol&1&&e.tag!==0&&nn(),s=e.pendingLanes,s&1?e===Zr?$n++:($n=0,Zr=e):$n=0,jt(),null}function nn(){if(rt!==null){var e=ba(ol),t=ze.transition,n=M;try{if(ze.transition=null,M=16>e?16:e,rt===null)var l=!1;else{if(e=rt,rt=null,ol=0,O&6)throw Error(_(331));var r=O;for(O|=4,z=e.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(z=d;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Dn(8,m,s)}var p=m.child;if(p!==null)p.return=m,z=p;else for(;z!==null;){m=z;var x=m.sibling,j=m.return;if(uu(m),m===d){z=null;break}if(x!==null){x.return=j,z=x;break}z=j}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Dn(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,z=h;break e}z=s.return}}var u=e.current;for(z=u;z!==null;){o=z;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,z=f;else e:for(o=u;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(C){W(a,a.return,C)}if(a===o){z=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}if(O=r,jt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(hl,e)}catch{}l=!0}return l}finally{M=n,ze.transition=t}}return!1}function ia(e,t,n){t=cn(n,t),t=bc(e,t,1),e=dt(e,t,1),t=ae(),e!==null&&(ri(e,1,t),me(e,t))}function W(e,t,n){if(e.tag===3)ia(e,e,n);else for(;t!==null;){if(t.tag===3){ia(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ht===null||!ht.has(l))){e=cn(n,e),e=eu(t,e,1),t=dt(t,e,1),e=ae(),t!==null&&(ri(t,1,e),me(t,e));break}}t=t.return}}function sf(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>X()-Us?Et(e,0):$s|=n),me(e,t)}function yu(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=ae();e=Ze(e,t),e!==null&&(ri(e,t,n),me(e,n))}function of(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function af(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(_(314))}l!==null&&l.delete(t),yu(e,n)}var _u;_u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,Jh(e,t,n);he=!!(e.flags&131072)}else he=!1,U&&t.flags&1048576&&Sc(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Di(e,t),e=t.pendingProps;var r=rn(t,se.current);tn(t,n),r=Ls(null,t,l,e,r,n);var s=Is();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(l)?(s=!0,Gi(t)):s=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ns(t),r.updater=jl,t.stateNode=r,r._reactInternals=t,Fr(t,l,e,n),t=Br(null,t,l,!0,s,n)):(t.tag=0,U&&s&&ys(t),oe(null,t,r,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Di(e,t),e=t.pendingProps,r=l._init,l=r(l._payload),t.type=l,r=t.tag=uf(l),e=Re(l,e),r){case 0:t=Ur(null,t,l,e,n);break e;case 1:t=Ko(null,t,l,e,n);break e;case 11:t=Qo(null,t,l,e,n);break e;case 14:t=Xo(null,t,l,Re(l.type,e),n);break e}throw Error(_(306,l,""))}return t;case 0:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:Re(l,r),Ur(e,t,l,r,n);case 1:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:Re(l,r),Ko(e,t,l,r,n);case 3:e:{if(lu(t),e===null)throw Error(_(387));l=t.pendingProps,s=t.memoizedState,r=s.element,Rc(e,t),tl(t,l,null,n);var o=t.memoizedState;if(l=o.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){r=cn(Error(_(423)),t),t=Jo(e,t,l,n,r);break e}else if(l!==r){r=cn(Error(_(424)),t),t=Jo(e,t,l,n,r);break e}else for(ge=ut(t.stateNode.containerInfo.firstChild),je=t,U=!0,Ie=null,n=Pc(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),l===r){t=Ge(e,t,n);break e}oe(e,t,l,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Or(t),l=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,o=r.children,Pr(l,r)?o=null:s!==null&&Pr(l,s)&&(t.flags|=32),iu(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Or(t),null;case 13:return ru(e,t,n);case 4:return Es(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=on(t,null,l,n):oe(e,t,l,n),t.child;case 11:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:Re(l,r),Qo(e,t,l,r,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,r=t.pendingProps,s=t.memoizedProps,o=r.value,D(bi,l._currentValue),l._currentValue=o,s!==null)if(De(s.value,o)){if(s.children===r.children&&!fe.current){t=Ge(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===l){if(s.tag===1){c=Xe(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Mr(s.return,n,t),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mr(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}oe(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,l=t.pendingProps.children,tn(t,n),r=Ne(r),l=l(r),t.flags|=1,oe(e,t,l,n),t.child;case 14:return l=t.type,r=Re(l,t.pendingProps),r=Re(l.type,r),Xo(e,t,l,r,n);case 15:return tu(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:Re(l,r),Di(e,t),t.tag=1,pe(l)?(e=!0,Gi(t)):e=!1,tn(t,n),qc(t,l,r),Fr(t,l,r,n),Br(null,t,l,!0,e,n);case 19:return su(e,t,n);case 22:return nu(e,t,n)}throw Error(_(156,t.tag))};function ku(e,t){return Za(e,t)}function cf(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,l){return new cf(e,t,n,l)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uf(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===as)return 11;if(e===cs)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,l,r,s){var o=2;if(l=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bt:return Pt(n.children,r,s,t);case os:o=8,r|=8;break;case or:return e=Se(12,n,t,r|2),e.elementType=or,e.lanes=s,e;case ar:return e=Se(13,n,t,r),e.elementType=ar,e.lanes=s,e;case cr:return e=Se(19,n,t,r),e.elementType=cr,e.lanes=s,e;case La:return kl(n,r,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ta:o=10;break e;case Ra:o=9;break e;case as:o=11;break e;case cs:o=14;break e;case et:o=16,l=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Se(o,n,t,r),t.elementType=e,t.type=l,t.lanes=s,t}function Pt(e,t,n,l){return e=Se(7,e,l,t),e.lanes=n,e}function kl(e,t,n,l){return e=Se(22,e,l,t),e.elementType=La,e.lanes=n,e.stateNode={isHidden:!1},e}function ir(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function lr(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function df(e,t,n,l,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=l,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,l,r,s,o,a,c){return e=new df(e,t,n,a,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Se(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(s),e}function hf(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function Cu(e){if(!e)return xt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(pe(n))return Cc(e,n,t)}return t}function wu(e,t,n,l,r,s,o,a,c){return e=Hs(n,l,!0,e,r,s,o,a,c),e.context=Cu(null),n=e.current,l=ae(),r=ft(n),s=Xe(l,r),s.callback=t??null,dt(n,s,r),e.current.lanes=r,ri(e,r,l),me(e,l),e}function Cl(e,t,n,l){var r=t.current,s=ae(),o=ft(r);return n=Cu(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(s,o),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=dt(r,t,o),e!==null&&(Me(e,r,o,s),Ii(e,r,o)),o}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function la(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qs(e,t){la(e,t),(e=e.alternate)&&la(e,t)}function ff(){return null}var Su=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}wl.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Cl(e,t,null,null)};wl.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){Cl(null,e,null,null)}),t[Je]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&lc(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ra(){}function pf(e,t,n,l,r){if(r){if(typeof l=="function"){var s=l;l=function(){var d=cl(o);s.call(d)}}var o=wu(t,l,e,0,null,!1,!1,"",ra);return e._reactRootContainer=o,e[Je]=o.current,Kn(e.nodeType===8?e.parentNode:e),Mt(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof l=="function"){var a=l;l=function(){var d=cl(c);a.call(d)}}var c=Hs(e,0,!1,null,null,!1,!1,"",ra);return e._reactRootContainer=c,e[Je]=c.current,Kn(e.nodeType===8?e.parentNode:e),Mt(function(){Cl(t,c,n,l)}),c}function zl(e,t,n,l,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var c=cl(o);a.call(c)}}Cl(t,o,e,r)}else o=pf(n,t,e,r,l);return cl(o)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=En(t.pendingLanes);n!==0&&(hs(t,n|1),me(t,X()),!(O&6)&&(un=X()+500,jt()))}break;case 13:Mt(function(){var l=Ze(e,1);if(l!==null){var r=ae();Me(l,e,1,r)}}),Qs(e,1)}};fs=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ae();Me(t,e,134217728,n)}Qs(e,134217728)}};tc=function(e){if(e.tag===13){var t=ft(e),n=Ze(e,t);if(n!==null){var l=ae();Me(n,e,t,l)}Qs(e,t)}};nc=function(){return M};ic=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};jr=function(e,t,n){switch(t){case"input":if(hr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=xl(l);if(!r)throw Error(_(90));Oa(l),hr(l,r)}}}break;case"textarea":Da(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Wa=Bs;Ha=Mt;var mf={usingClientEntryPoint:!1,Events:[oi,Ht,xl,Aa,Va,Bs]},Sn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xf={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ka(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{hl=Ni.inject(xf),Be=Ni}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mf;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(_(200));return hf(e,t,null,n)};_e.createRoot=function(e,t){if(!Ks(e))throw Error(_(299));var n=!1,l="",r=Su;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,l,r),e[Je]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Xs(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ka(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Mt(e)};_e.hydrate=function(e,t,n){if(!Sl(t))throw Error(_(200));return zl(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(_(405));var l=n!=null&&n.hydratedSources||null,r=!1,s="",o=Su;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wu(t,null,e,1,n??null,r,!1,s,o),e[Je]=t.current,Kn(e),l)for(e=0;e<l.length;e++)n=l[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new wl(t)};_e.render=function(e,t,n){if(!Sl(t))throw Error(_(200));return zl(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(_(40));return e._reactRootContainer?(Mt(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};_e.unstable_batchedUpdates=Bs;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!Sl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return zl(e,t,n,!1,l)};_e.version="18.3.1-next-f1338f8080-20240426";function zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zu)}catch(e){console.error(e)}}zu(),za.exports=_e;var vf=za.exports,Nu,sa=vf;Nu=sa.createRoot,sa.hydrateRoot;const gf="/assets/9B-CvgzApbi.png",jf="/assets/E1B-QAwVay4w.png";/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},ni.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const oa="popstate";function yf(e){e===void 0&&(e={});function t(l,r){let{pathname:s,search:o,hash:a}=l.location;return qr("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(l,r){return typeof r=="string"?r:Pu(r)}return kf(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Eu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _f(){return Math.random().toString(36).substr(2,8)}function aa(e,t){return{usr:e.state,key:e.key,idx:t}}function qr(e,t,n,l){return n===void 0&&(n=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pn(t):t,{state:n,key:t&&t.key||l||_f()})}function Pu(e){let{pathname:t="/",search:n="",hash:l=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function pn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}function kf(e,t,n,l){l===void 0&&(l={});let{window:r=document.defaultView,v5Compat:s=!1}=l,o=r.history,a=st.Pop,c=null,d=m();d==null&&(d=0,o.replaceState(ni({},o.state,{idx:d}),""));function m(){return(o.state||{idx:null}).idx}function p(){a=st.Pop;let k=m(),h=k==null?null:k-d;d=k,c&&c({action:a,location:v.location,delta:h})}function x(k,h){a=st.Push;let u=qr(v.location,k,h);d=m()+1;let f=aa(u,d),g=v.createHref(u);try{o.pushState(f,"",g)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(g)}s&&c&&c({action:a,location:v.location,delta:1})}function j(k,h){a=st.Replace;let u=qr(v.location,k,h);d=m();let f=aa(u,d),g=v.createHref(u);o.replaceState(f,"",g),s&&c&&c({action:a,location:v.location,delta:0})}function y(k){let h=r.location.origin!=="null"?r.location.origin:r.location.href,u=typeof k=="string"?k:Pu(k);return u=u.replace(/ $/,"%20"),G(h,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,h)}let v={get action(){return a},get location(){return e(r,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(oa,p),c=k,()=>{r.removeEventListener(oa,p),c=null}},createHref(k){return t(r,k)},createURL:y,encodeLocation(k){let h=y(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:j,go(k){return o.go(k)}};return v}var ca;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ca||(ca={}));function Cf(e,t,n){return n===void 0&&(n="/"),wf(e,t,n,!1)}function wf(e,t,n,l){let r=typeof t=="string"?pn(t):t,s=Lu(r.pathname||"/",n);if(s==null)return null;let o=Tu(e);Sf(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let d=Df(s);a=Of(o[c],d,l)}return a}function Tu(e,t,n,l){t===void 0&&(t=[]),n===void 0&&(n=[]),l===void 0&&(l="");let r=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let d=Tt([l,c.relativePath]),m=n.concat(c);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Tu(s.children,t,m,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:Lf(d,s.index),routesMeta:m})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let c of Ru(s.path))r(s,o,c)}),t}function Ru(e){let t=e.split("/");if(t.length===0)return[];let[n,...l]=t,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(l.length===0)return r?[s,""]:[s];let o=Ru(l.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),r&&a.push(...o),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Sf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:If(t.routesMeta.map(l=>l.childrenIndex),n.routesMeta.map(l=>l.childrenIndex)))}const zf=/^:[\w-]+$/,Nf=3,Ef=2,Pf=1,Tf=10,Rf=-2,ua=e=>e==="*";function Lf(e,t){let n=e.split("/"),l=n.length;return n.some(ua)&&(l+=Rf),t&&(l+=Ef),n.filter(r=>!ua(r)).reduce((r,s)=>r+(zf.test(s)?Nf:s===""?Pf:Tf),l)}function If(e,t){return e.length===t.length&&e.slice(0,-1).every((l,r)=>l===t[r])?e[e.length-1]-t[t.length-1]:0}function Of(e,t,n){let{routesMeta:l}=e,r={},s="/",o=[];for(let a=0;a<l.length;++a){let c=l[a],d=a===l.length-1,m=s==="/"?t:t.slice(s.length)||"/",p=da({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),x=c.route;if(!p&&d&&n&&!l[l.length-1].route.index&&(p=da({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!p)return null;Object.assign(r,p.params),o.push({params:r,pathname:Tt([s,p.pathname]),pathnameBase:Vf(Tt([s,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(s=Tt([s,p.pathnameBase]))}return o}function da(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,l]=Mf(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:l.reduce((d,m,p)=>{let{paramName:x,isOptional:j}=m;if(x==="*"){let v=a[p]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[p];return j&&!y?d[x]=void 0:d[x]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function Mf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Eu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(l.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),l]}function Df(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Eu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Lu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,l=e.charAt(n);return l&&l!=="/"?null:e.slice(n)||"/"}function Ff(e,t){t===void 0&&(t="/");let{pathname:n,search:l="",hash:r=""}=typeof e=="string"?pn(e):e;return{pathname:n?n.startsWith("/")?n:$f(n,t):t,search:Wf(l),hash:Hf(r)}}function $f(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function rr(e,t,n,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bf(e,t){let n=Uf(e);return t?n.map((l,r)=>r===n.length-1?l.pathname:l.pathnameBase):n.map(l=>l.pathnameBase)}function Af(e,t,n,l){l===void 0&&(l=!1);let r;typeof e=="string"?r=pn(e):(r=ni({},e),G(!r.pathname||!r.pathname.includes("?"),rr("?","pathname","search",r)),G(!r.pathname||!r.pathname.includes("#"),rr("#","pathname","hash",r)),G(!r.search||!r.search.includes("#"),rr("#","search","hash",r)));let s=e===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let p=t.length-1;if(!l&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),p-=1;r.pathname=x.join("/")}a=p>=0?t[p]:"/"}let c=Ff(r,a),d=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const Tt=e=>e.join("/").replace(/\/\/+/g,"/"),Vf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Iu=["post","put","patch","delete"];new Set(Iu);const Xf=["get",...Iu];new Set(Xf);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},ii.apply(this,arguments)}const Js=w.createContext(null),Kf=w.createContext(null),Nl=w.createContext(null),El=w.createContext(null),mn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ou=w.createContext(null);function Pl(){return w.useContext(El)!=null}function Mu(){return Pl()||G(!1),w.useContext(El).location}function Du(e){w.useContext(Nl).static||w.useLayoutEffect(e)}function Zs(){let{isDataRoute:e}=w.useContext(mn);return e?sp():Jf()}function Jf(){Pl()||G(!1);let e=w.useContext(Js),{basename:t,future:n,navigator:l}=w.useContext(Nl),{matches:r}=w.useContext(mn),{pathname:s}=Mu(),o=JSON.stringify(Bf(r,n.v7_relativeSplatPath)),a=w.useRef(!1);return Du(()=>{a.current=!0}),w.useCallback(function(d,m){if(m===void 0&&(m={}),!a.current)return;if(typeof d=="number"){l.go(d);return}let p=Af(d,JSON.parse(o),s,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Tt([t,p.pathname])),(m.replace?l.replace:l.push)(p,m.state,m)},[t,l,o,s,e])}function Zf(e,t){return Gf(e,t)}function Gf(e,t,n,l){Pl()||G(!1);let{navigator:r}=w.useContext(Nl),{matches:s}=w.useContext(mn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Mu(),m;if(t){var p;let k=typeof t=="string"?pn(t):t;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||G(!1),m=k}else m=d;let x=m.pathname||"/",j=x;if(c!=="/"){let k=c.replace(/^\//,"").split("/");j="/"+x.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=Cf(e,{pathname:j}),v=tp(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Tt([c,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:Tt([c,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,l);return t&&v?w.createElement(El.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:st.Pop}},v):v}function Yf(){let e=rp(),t=Qf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:r},n):null,null)}const qf=w.createElement(Yf,null);class bf extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(mn.Provider,{value:this.props.routeContext},w.createElement(Ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ep(e){let{routeContext:t,match:n,children:l}=e,r=w.useContext(Js);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(mn.Provider,{value:t},l)}function tp(e,t,n,l){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),l===void 0&&(l=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=l)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let m=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);m>=0||G(!1),o=o.slice(0,Math.min(o.length,m+1))}let c=!1,d=-1;if(n&&l&&l.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:x,errors:j}=n,y=p.route.loader&&x[p.route.id]===void 0&&(!j||j[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((m,p,x)=>{let j,y=!1,v=null,k=null;n&&(j=a&&p.route.id?a[p.route.id]:void 0,v=p.route.errorElement||qf,c&&(d<0&&x===0?(y=!0,k=null):d===x&&(y=!0,k=p.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,x+1)),u=()=>{let f;return j?f=v:y?f=k:p.route.Component?f=w.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,w.createElement(ep,{match:p,routeContext:{outlet:m,matches:h,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?w.createElement(bf,{location:n.location,revalidation:n.revalidation,component:v,error:j,children:u(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):u()},null)}var Fu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fu||{}),ul=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ul||{});function np(e){let t=w.useContext(Js);return t||G(!1),t}function ip(e){let t=w.useContext(Kf);return t||G(!1),t}function lp(e){let t=w.useContext(mn);return t||G(!1),t}function $u(e){let t=lp(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function rp(){var e;let t=w.useContext(Ou),n=ip(ul.UseRouteError),l=$u(ul.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[l]}function sp(){let{router:e}=np(Fu.UseNavigateStable),t=$u(ul.UseNavigateStable),n=w.useRef(!1);return Du(()=>{n.current=!0}),w.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,ii({fromRouteId:t},s)))},[e,t])}function xe(e){G(!1)}function op(e){let{basename:t="/",children:n=null,location:l,navigationType:r=st.Pop,navigator:s,static:o=!1,future:a}=e;Pl()&&G(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:s,static:o,future:ii({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof l=="string"&&(l=pn(l));let{pathname:m="/",search:p="",hash:x="",state:j=null,key:y="default"}=l,v=w.useMemo(()=>{let k=Lu(m,c);return k==null?null:{location:{pathname:k,search:p,hash:x,state:j,key:y},navigationType:r}},[c,m,p,x,j,y,r]);return v==null?null:w.createElement(Nl.Provider,{value:d},w.createElement(El.Provider,{children:n,value:v}))}function ap(e){let{children:t,location:n}=e;return Zf(br(t),n)}new Promise(()=>{});function br(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(l,r)=>{if(!w.isValidElement(l))return;let s=[...t,r];if(l.type===w.Fragment){n.push.apply(n,br(l.props.children,s));return}l.type!==xe&&G(!1),!l.props.index||!l.props.children||G(!1);let o={id:l.props.id||s.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(o.children=br(l.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const cp="6";try{window.__reactRouterVersion=cp}catch{}const up="startTransition",ha=rd[up];function dp(e){let{basename:t,children:n,future:l,window:r}=e,s=w.useRef();s.current==null&&(s.current=yf({window:r,v5Compat:!0}));let o=s.current,[a,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:d}=l||{},m=w.useCallback(p=>{d&&ha?ha(()=>c(p)):c(p)},[c,d]);return w.useLayoutEffect(()=>o.listen(m),[o,m]),w.createElement(op,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:l})}var fa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fa||(fa={}));var pa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pa||(pa={}));function hp(){const e=Zs(),t=n=>{e(`/reference/${n}`)};return i.jsx("div",{children:i.jsxs("div",{className:"References",id:"References",children:[i.jsxs("div",{className:"Reference",onClick:()=>t("9b"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"9.B."})}),i.jsx("img",{src:gf,alt:"Reference Picture",className:"ReferencePicture"}),i.jsxs("div",{className:"ReferenceAuthor",children:[i.jsx("p",{children:"Authors: M. A. R."}),i.jsx("p",{children:"Date: 2023-2024"})]})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("E1B"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"E1B"})}),i.jsx("img",{src:jf,alt:"Reference Picture",className:"ReferencePicture"}),i.jsxs("div",{className:"ReferenceAuthor",children:[i.jsx("p",{children:"Authors: M."}),i.jsx("p",{children:"Date: 2024-2025"})]})]})]})})}const Uu="/assets/spanek-bJYx3oOK.png",fp="/assets/viditelne-svetlo-CExvVwT2.png",pp="/assets/john-lennon-i_n0SFqQ.png",mp="/assets/diamant-CW92fFcu.png",xp="/assets/ufo-Crc9IutB.png",vp="/assets/osvetim-DqIDJbNL.png",gp="/assets/fxsalda-D-IVNSft.jpg",jp="/assets/tsunami-pWiADDqL.jpg",yp="/assets/ErikMRemarque-CIxb2zvd.png";function _p(){const e=Zs(),t=n=>{const l=document.getElementById("References");l.style.opacity=0,setTimeout(()=>{e(`/reference/9b/${n}`)},1e3)};return i.jsx("div",{children:i.jsxs("div",{className:"References",id:"References",children:[i.jsxs("div",{className:"Reference",onClick:()=>t("spanek"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"Spánek"})}),i.jsx("img",{src:Uu,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Authors: Michal Líbal & Antonín Šulc"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("viditelne-svetlo"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"Viditelné Světlo"})}),i.jsx("img",{src:fp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Author: Michal Líbal"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("john-lennon"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"John Lennon"})}),i.jsx("img",{src:pp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Authors: Michal Líbal & Radim Halama"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("diamant"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"Diamant"})}),i.jsx("img",{src:mp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Author: Michal Líbal"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("ufo"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"UFO"})}),i.jsx("img",{src:xp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Author: Michal Líbal"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("osvetim"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"Osvětim"})}),i.jsx("img",{src:vp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Author: Michal Líbal"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("frantisek-xaver-salda"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"F. X. Šalda"})}),i.jsx("img",{src:gp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Author: Michal Líbal"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("tsunami"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"Tsunami"})}),i.jsx("img",{src:jp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Author: Michal Líbal"})})]}),i.jsxs("div",{className:"Reference",onClick:()=>t("erik-remarque"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"Erik M. Remarque"})}),i.jsx("img",{src:yp,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Author: Michal Líbal"})})]})]})})}function kp(){const e=Zs(),t=n=>{const l=document.getElementById("References");l.style.opacity=0,setTimeout(()=>{e(`/reference/E1B/${n}`)},1e3)};return i.jsx("div",{children:i.jsx("div",{className:"References",id:"References",children:i.jsxs("div",{className:"Reference",onClick:()=>t("spanek"),children:[i.jsx("div",{className:"ReferenceTitle",children:i.jsx("h1",{children:"Spánek"})}),i.jsx("img",{src:Uu,alt:"Reference Picture",className:"ReferencePicture"}),i.jsx("div",{className:"ReferenceAuthor",children:i.jsx("p",{children:"Authors: Michal Líbal & Antonín Šulc"})})]})})})}const Cp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"Úvod"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Pracovali:"})}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal ( Naprogramování a Informace )"})," "]}),i.jsxs("li",{children:[i.jsx("span",{children:"Antonín Šulc ( Informace a jejích zpracování )"})," "]})]})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),wp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Proč musíme spát?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Nooo jaksi to pořádně nevíme, ani samotní vědci."})}),i.jsx("p",{children:i.jsx("span",{children:"Ale co víme:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Spánek je hlavně důležitý pro Meltální čínosti než pro fyzické činosti"})}),i.jsx("li",{children:i.jsx("span",{children:"Při spánku dochází k zvíšenné regeneraci těla"})}),i.jsx("li",{children:i.jsx("span",{children:"Pří spánku dochází k odvádění metabolitů z těla"})}),i.jsx("li",{children:i.jsx("span",{children:"Prochází několik fází, které jsou důležité pro naše tělo"})})]})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),Sp=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Co by jsme měli udělat pro lepší spánek?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ol",{children:[i.jsx("li",{children:i.jsx("span",{children:"Nejíst težké jídlo před spaním (Myšleno jako maso, těstoviny, cukr)"})}),i.jsx("li",{children:i.jsx("span",{children:"Hodinu před spaním nebýt na elektronice (Myšleno jako telefon, tablet, počítač)"})}),i.jsx("li",{children:i.jsx("span",{children:"Spát 8 - 10 hodin denně"})}),i.jsx("li",{children:i.jsx("span",{children:"Spát v tichém prostředí"})}),i.jsx("li",{children:i.jsx("span",{children:"Spát v pokojíčku, který je příjemně teplý"})}),i.jsx("li",{children:i.jsx("span",{children:"Mít nějaký stálý režím spánku (Třeba že každý den pujdeš spát v 21:00, protože vaše tělo se na to přizpůsobí)"})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),zp="/assets/grafSp%C3%A1nku-D0XUkyJq.png",Np=()=>{const e=t=>{t.preventDefault(),t.target.classList.toggle("activeImg")};return i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"4. Fáze spánku"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ol",{children:[i.jsx("li",{children:i.jsx("span",{children:"Stádium 1 - Zpomalování srdečního a dýchacího rytmu"})}),i.jsx("li",{children:i.jsx("span",{children:"Stádium 2 - Zpomalení mozkové činnosti"})}),i.jsx("li",{children:i.jsx("span",{children:"Stádium 3 - dají se nám sny, které si po probuzení nepamatujeme"})}),i.jsx("li",{children:i.jsxs("span",{children:["Stádium 4 (REM) - Rychlé pohyby očí, rychlé dýchání, rychlé srdeční tepy, aktivní mozek,",i.jsx("br",{})," sny jsou v tomto stádiumu více realistické a pamatujeme si je po probuzení"]})})]}),i.jsx("div",{className:"slideContent__text__graph",onClick:e,children:i.jsx("img",{src:zp,alt:"Graf spánku"})}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text ol {
                        display: inline-block;
                        text-align: left;
                    }
                    .slideContent__text__graph {
                        width: 30%;
                        height: 30%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    .slideContent__text__graph img.activeImg {
                        transform: translate(50%, -50%) scale(2);
                    }
                `})]})]})})},Ep=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Co to je spánková deprivace?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Spánková deprivace je stav, kdy je člověk vystaven dlouhodobému nedostatku spánku."})}),i.jsx("p",{children:i.jsx("span",{children:"Následky spánkové deprivace:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Zhoršení soustředění a paměti "})}),i.jsx("li",{children:i.jsx("span",{children:"Zhoršení schopnosti řešit problémy, učit se a pracovat "})}),i.jsx("li",{children:i.jsx("span",{children:"Zhoršení schopnosti reagovat na rychlé změny "})}),i.jsx("li",{children:i.jsx("span",{children:"Zhoršení halucinace"})})]})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),Pp="/assets/spankovaParal%C3%ADza-CWd3Twqp.png",Tp=()=>{const e=t=>{t.preventDefault(),t.target.classList.toggle("activeImg")};return i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Co to je spánková paralíza?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Spánková paralýza je stav, který se zdá jako že je to realita a že se to děje, ale je to jen sen."})}),i.jsx("p",{children:i.jsx("span",{children:"Při tomto stavu se člověk může cítit jako by byl v nějakém nebezpečí, nemůže se pohnout"})}),i.jsx("p",{children:i.jsxs("span",{children:["Vlastně je to stav kdy se člověk cítí jako kdyby byl ochrnutý a nemohl se pohnout,",i.jsx("br",{}),"jediné svaly které může ovládat je Bránice, oční víčka"]})}),i.jsx("p",{children:i.jsx("span",{children:"Spánková paralýza se může jevit jako takový horror"})})]}),i.jsx("div",{className:"slideContent__text__graph",onClick:e,children:i.jsx("img",{src:Pp,alt:"Graf spánku"})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]})},Rp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Videa na shlednutí"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=qQNG4j201ys&ab_channel=V%C4%9Bdeck%C3%A9Kladivo",target:"_blank",children:"Vědecké kladivo - Proč musíme spát? - Vědecké kladivo (4:51)"})}),i.jsx("p",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=aBf8PWHnUSA&ab_channel=JurajVie",target:"_blank",children:"JurajVie - Prečo musíme SPAŤ? (3:33)"})}),i.jsx("p",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=CfFggCmOOVk&ab_channel=JurajVie",target:"_blank",children:"JurajVie - Spánková Paralýza - Najhoršia nočná mora (4:30)"})}),i.jsx("p",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=lKDzR4o6dhA&t=145s&ab_channel=BeWise",target:"_blank",children:"BeWise - Majú sny nejaký význam? (11:45)"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),kt={space:32,left:37,up:38,right:39,down:40,f11:122,esc:27},qe=({slides:e})=>{const[t,n]=w.useState(0),[l,r]=w.useState(!1),[s,o]=w.useState(0),[a,c]=w.useState(!1);w.useEffect(()=>{const v=window.location.href,k=parseInt(v.split("/").pop());if(!isNaN(k)){if(k>e.length-1)return;n(k)}r(document.fullscreenElement!==null),window.history.replaceState({},"",`${window.location.href}`)},[]),w.useEffect(()=>{a&&s===0?(o(1),setTimeout(()=>{o(2)},1e3)):l&&!a&&s===0?(o(1),setTimeout(()=>{o(2)},1e3)):!l&&!a&&s===2&&(o(1),setTimeout(()=>{o(0)},100))},[l,a]);const[d,m]=w.useState([]),[p,x]=w.useState(!1);let j=setTimeout(()=>{x(!1)},1e4);window.addEventListener("mousemove",()=>{x(!0),clearTimeout(j),j=setTimeout(()=>{x(!1)},3e3)});const y=w.useCallback(v=>{n(k=>v<0?0:v>=e.length?e.length-1:v)},[e]);return w.useEffect(()=>{const v=window.location.href,k=parseInt(v.split("/").pop());if(isNaN(k))window.history.pushState({},"",`${v}${v.endsWith("/")?"":"/"}${t}`);else{const C=v.split("/").slice(0,-1).join("/");window.history.replaceState({},"",`${C}${C.endsWith("/")?"":"/"}${t}`)}if(t<0)return n(0);if(t>=e.length)return n(e.length-1);const h=document.getElementById("slideDiv");h.style.marginLeft=`-${t*100}%`;const f=document.getElementById(`slide${t}`).querySelectorAll("span, a"),g=[];if(!d.includes(t)){m([...d,t]);for(let C=0;C<f.length;C++){const S=f[C],E=S.innerHTML.replaceAll(" "," ").replaceAll("<br>","¤");S.innerText="";const P={spanDiv:S,text:E,index:0};setTimeout(()=>{g.push(P)},C*100)}setTimeout(()=>{const C=setInterval(()=>{if(g.length>0){const S=g[0];if(S.spanDiv.classList.contains("revealClick"))return;S.spanDiv.classList.add("spanWaiting"),S.text[S.index]==="¤"?S.spanDiv.innerHTML+="<br>":S.spanDiv.innerHTML+=S.text[S.index],S.index++,S.index>=S.text.length&&(S.spanDiv.classList.remove("spanWaiting"),g.shift(),S.spanDiv.innerHTML=S.text.replaceAll("¤","<br>").replaceAll(" "," "))}else clearInterval(C)},75)},500)}},[t]),w.useEffect(()=>{const v=k=>{const h=window.location.href,u=parseInt(h.split("/").pop());let f=u===void 0||isNaN(u)||u===null?0:u;if((f===void 0||isNaN(f)||f===null)&&n(0),k.keyCode===kt.space){const C=document.getElementById(`slide${u}`).querySelector(".revealClick");if(console.log(C),C!==null){C.classList.remove("revealClick");return}f<e.length-1&&n(f+1)}else k.keyCode===kt.right&&f<e.length-1&&n(f+1);k.keyCode===kt.left?f>0&&n(f-1):k.keyCode===kt.up?n(0):k.keyCode===kt.down?n(e.length-1):k.keyCode===kt.f11?r(document.fullscreenElement!==null):k.keyCode===kt.esc&&r(!1)};return document.body.addEventListener("fullscreenchange",()=>{console.log("fullscreenchange"),r(document.fullscreenElement!==null)}),window.addEventListener("keydown",v),window.addEventListener("click",k=>{if(k.target.tagName.toLowerCase()==="a"||k.target.tagName.toLowerCase()==="button"||k.target.classList.contains("MenuButton")||k.target.tagName.toLowerCase()==="p")return;const h=window.location.href,u=parseInt(h.split("/").pop());let f=u===void 0||isNaN(u)||u===null?0:u;const C=document.getElementById(`slide${u}`).querySelector(".revealClick");if(console.log(C,k.target),C!==null){C.classList.remove("revealClick");return}f<e.length-1&&n(f+1)}),()=>{window.removeEventListener("keydown",v),window.removeEventListener("fullscreenchange",()=>{console.log("fullscreenchange"),r(document.fullscreenElement!==null)})}},[]),i.jsxs("div",{style:{width:"100%",maxWidth:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[i.jsxs("div",{className:"MenuButton",style:{position:"fixed",zIndex:1e4,width:"100%",height:"100%",top:0,left:0,backgroundColor:"rgba(0,0,0,0.75)",color:"white",display:s===2?"none":"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center",alignContent:"center",opacity:s!==0?0:1,transition:"opacity 1s",cursor:"unset"},children:[i.jsx("p",{children:"Use the F11 key to view the presentation in fullscreen"}),i.jsx("p",{children:"Use the arrow keys, spacebar, or click the buttons below to navigate"}),i.jsx("div",{className:"MenuButton",onClick:()=>{document.body.requestFullscreen()},children:i.jsx("p",{children:"Use fullscreen"})}),i.jsx("div",{className:"MenuButton",onClick:()=>c(!0),children:i.jsx("p",{children:"I don't want to use fullscreen"})})]}),i.jsx("div",{className:"Progress",style:{width:"100%",marginTop:p?"-45px":"-50px"},children:i.jsx("div",{className:"ProgressFill",style:{width:`${t/(e.length-1)*100}%`,height:"55px",backgroundColor:"lime"}})}),i.jsx("div",{className:"slideDiv",id:"slideDiv",style:{width:`${e.length*100}%`,maxWidth:`${e.length*100}%`,overflow:"hidden"},children:e.map((v,k)=>i.jsx("div",{className:"slide",id:`slide${k}`,children:i.jsx(v,{})},k))}),i.jsx("div",{className:"RenderAd",style:{position:"fixed",bottom:0,right:0,zIndex:1e3,opacity:p?1:.35,paddingRight:15},children:i.jsxs("p",{children:["Using refmis engine by ",i.jsx("a",{href:"https://michlip.eu",target:"_blank",children:"michlip.eu"})]})}),i.jsxs("div",{className:"Menu",style:{opacity:p?1:0},children:[i.jsx("span",{children:"            "}),i.jsx("div",{className:"MenuButton",onClick:()=>window.location.href="/",children:i.jsx("p",{style:{color:"red",fontWeight:"bold"},children:"Back to Home"})}),i.jsx("div",{className:"MenuButton",onClick:()=>y(0),children:i.jsx("p",{children:"Start"})}),i.jsx("div",{className:"MenuButton",onClick:()=>y(t-1),children:i.jsx("p",{children:"Previous"})}),i.jsx("div",{className:"MenuButton",onClick:()=>y(t+1),children:i.jsx("p",{children:"Next"})}),i.jsx("div",{className:"MenuButton",onClick:()=>y(e.length-1),children:i.jsx("p",{children:"End"})})]}),i.jsx("style",{children:`
            .Progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 55px;
                background-color: transparent;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                transition: margin-top 1s;
            }
            .ProgressFill {
                border-radius: 0 0 10px 10px;
                height: 55px;
                transition: width 1s;
            }
            .Menu {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50px;
                background-color: #000000;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                transition: opacity 1s;
            }
            .MenuButton {
                min-width: 100px;
                height: 50px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                cursor: pointer;
            }
            .MenuButton p {
                margin: 0;
                padding: 0;
                font-size: 20px;
            }
            .slideDiv {
                min-width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                align-content: center;
                transition: margin-left 1s;
            }
            .slide {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;;
                justify-content: center;
                align-items: center;
                align-content: center;
            }
            .spanWaiting::after {
                content: "|";
                animation: blink 1s infinite;
            }
            @keyframes blink {
                50% {
                    opacity: 0;
                }
            }
            a {
                color: LightBlue;
                text-decoration: none;
            }
            a:hover {
                color: LightBlue;
                text-decoration: underline;
                transform: scale(1.3);
            }
        `})]})},Lp=()=>{const[e,t]=w.useState([Cp,wp,Sp,Np,Ep,Tp,Rp]);return i.jsx(qe,{slides:e})},Ip=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"Viditelné Světlo"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Autor:"})}),i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]})})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),Op=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Co to je viditelné spektrum?"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Viditelné spektrum neboli viditelné světlo je rozsah elektromagnetických vln, které jsou pro lidské oko viditelné."})}),i.jsx("li",{children:i.jsx("span",{children:"Viditelné spektrum je rozsah vln od 380 nm do 750 nm."})}),i.jsx("li",{children:i.jsx("span",{children:"Nebo od 780 THz do 380 THz."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"UltraFialové záření je pro lidské oko neviditelné."})}),i.jsx("li",{children:i.jsx("span",{children:"Před tímto záření nás chrání ozonová vrstva."})}),i.jsx("li",{children:i.jsx("span",{children:"Je to protože ultrafialové záření je škodlivé pro lidské zdraví."})}),i.jsx("br",{})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),Mp=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Spektrum"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Viditelné světlo je rozsah elektromagnetických vln, které jsou pro lidské oko viditelné."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"ALE je to jen malá část celého spektra."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"V celém spektru je mnoho dalších vln, které jsou pro lidské oko neviditelné."})}),i.jsx("li",{children:i.jsx("span",{children:"Jako je například infračervené světlo."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Seznam vlnových délek všech předmětů ve spektru:"})}),i.jsxs("ol",{children:[i.jsx("li",{children:i.jsx("span",{children:"Gamma: 0,01 nm"})}),i.jsx("li",{children:i.jsx("span",{children:"Rentgenové záření: 0,01 nm - 10 nm"})}),i.jsx("li",{children:i.jsx("span",{children:"UltraFialové světlo: 10 nm - 400 nm"})}),i.jsx("li",{children:i.jsx("span",{children:"Viditelné světlo: 400 nm - 700 nm"})}),i.jsx("li",{children:i.jsx("span",{children:"InfraČervené světlo: 700 nm - 1 mm"})}),i.jsx("li",{children:i.jsx("span",{children:"Mikrovlny: 1 cm - 1 cm"})}),i.jsx("li",{children:i.jsx("span",{children:"Radiovlny: 1 mm - 10 km"})})]})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),Dp="/assets/spektrum-BB3Vjr2r.png",Fp=()=>{const e=t=>{t.preventDefault(),t.target.classList.toggle("activeImg")};return i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:"Spektrum: "}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("div",{className:"slideContent__text__graph",onClick:e,children:i.jsx("img",{src:Dp,alt:"Graf spánku"})}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text ol {
                        display: inline-block;
                        text-align: left;
                    }
                    .slideContent__text__graph {
                        min-width: 45vw;
                        min-height: 45vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    .slideContent__text__graph img.activeImg {
                        transform: translate(50%, -50%) scale(2);
                    }
                `})]})]})})},$p=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Délky barev ve viditelném spektru"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Barva	Vlnová délka	Frekvence"})}),i.jsx("li",{children:i.jsx("span",{children:"červená	~ 625 až 750 nm	~ 480 až 405 THz"})}),i.jsx("li",{children:i.jsx("span",{children:"oranžová	~ 590 až 625 nm	~ 510 až 480 THz"})}),i.jsx("li",{children:i.jsx("span",{children:"žlutá	~ 565 až 590 nm	~ 530 až 510 THz"})}),i.jsx("li",{children:i.jsx("span",{children:"zelená	~ 520 až 565 nm	~ 580 až 530 THz"})}),i.jsx("li",{children:i.jsx("span",{children:"azurová	~ 500 až 520 nm	~ 600 až 580 THz"})}),i.jsx("li",{children:i.jsx("span",{children:"modrá	~ 430 až 500 nm	~ 700 až 600 THz"})}),i.jsx("li",{children:i.jsx("span",{children:"fialová	~ 380 až 430 nm	~ 790 až 700 THz"})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),Up=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Citace:"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("p",{children:["Přispěvatelé Wikipedie, Elektromagnetické spektrum [online], Wikipedie: Otevřená encyklopedie, c2022, Datum poslední revize 30. 07. 2022, 14:52 UTC, [citováno 11. 04. 2023] Dostupné z portálu ",i.jsx("a",{href:"https://cs.wikipedia.org/w/index.php?title=Elektromagnetick%C3%A9_spektrum&oldid=21531730",target:"_blank",children:"Wikipedia"})]}),i.jsx("p",{children:i.jsx("span",{children:"Některé vlnové dělky a Hz doporadila umělá inteligence ChatGPT s ověřením informací z jiných zdrojů."})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Bp=()=>{const[e,t]=w.useState([Ip,Op,Mp,Fp,$p,Up]);return i.jsx(qe,{slides:e})},Ap=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"John Lennon"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Autoři:"})}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]}),i.jsxs("li",{children:[i.jsx("span",{children:"Radim Halama"})," "]})]})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),Vp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"I. Dětství a rané roky"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsxs("span",{children:["Johnův původ a rodinné pozadí: John Winston Lennon se narodil 9. října 1940 v Liverpoolu, Anglie. ",i.jsx("br",{}),"Jeho otec Alfred byl námořník a později prodavač zeleniny, matka Julia byla zpěvačka a pianistka. ",i.jsx("br",{}),"John měl starší sestru Mimi, která se stala jeho opatrovnicí po matčině smrti."]})}),i.jsx("li",{children:i.jsxs("span",{children:["První hudební zkušenosti a setkání s Paulem McCartneym: John se zajímal o hudbu od dětství a začal hrát na kytaru a zpívat.",i.jsx("br",{}),"Na střední škole se seznámil s Paulem McCartneym a později se připojili George Harrison a Ringo Starr a vznikla skupina The Beatles."]})}),i.jsx("li",{children:i.jsx("span",{children:"Vznik skupiny The Beatles: The Beatles získali popularitu v Liverpoolu a postupně se prosazovali i v celé Británii. John Lennon byl hlavním skladatelem a zpěvákem skupiny a spolu s Paulem McCartneyem tvořili úspěšnou skladatelskou dvojici."})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100vw;
                    height: 100vh;
                    max-width: 100vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1em;
                    text-align: center;
                    display: inline-block;
                    width: 75vw;
                    max-width: 75vw;
                }
                .slideContent__text span {
                    display: block;
                    max-width: 100%;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),Wp=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"II. Beatles - inovace a experimentování"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Revoluční hudba The Beatles: Skupina The Beatles přinesla revoluční změny do světa hudby v 60. letech. Jejich hudba byla plná nových nápadů, neobvyklých nástrojů a experimentování s různými žánry."})}),i.jsx("li",{children:i.jsx("span",{children:"Johnova role v tvorbě a inovativní přístup: John Lennon hrál klíčovou roli v tvorbě skupiny The Beatles. Byl to on, kdo přišel s mnoha inovativními nápady, jak rozšířit hudební spektrum skupiny. Byl to také on, kdo přinesl do hudby nový, ostrý zvuk elektrické kytary."})}),i.jsx("li",{children:i.jsx("span",{children:"Experimentování s novými zvuky a nástroji: Skupina The Beatles byla proslulá svými experimenty s novými zvuky a nástroji. John Lennon se stal známým pro svůj inovativní přístup k tvorbě hudby, například používáním různých efektů a neobvyklých nástrojů jako byly sitary nebo mellotron."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),Hp=()=>{const[e,t]=w.useState([Ap,Vp,Wp]);return i.jsx(qe,{slides:e})},Qp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"Diamant"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Pracovali:"})}),i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]})})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),Xp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Jaké jsou vlastnosti diamantu?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Vlastnosti diamantu jsou:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Vedení tepla"})}),i.jsx("li",{children:i.jsx("span",{children:"Tvrdost"})}),i.jsx("li",{children:i.jsx("span",{children:"Leskost a Líbivost"})}),i.jsx("li",{children:i.jsx("span",{children:"Barva"})})]})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),Kp=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Jaké jsou využití diamantu?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Diamant lze využít jako:"})}),i.jsxs("ol",{children:[i.jsx("li",{children:i.jsx("span",{children:"Ozdoba - Ozdoba krytu na mobil, hodinek a dalších věcí"})}),i.jsx("li",{children:i.jsx("span",{children:"Klenotnictví - Lze použít to prstenů a náušnic"})}),i.jsx("li",{children:i.jsx("span",{children:"Řezání - Diamant se používá na řezání jiných kovů, protože je pevný a tvrdý."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),Jp=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Lze rozřezat diamant?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Ano diamant lze rozřezat pomocí vody"})}),i.jsx("p",{children:i.jsx("span",{children:"Na to aby jsme mohli rozřezat diamant potřebujeme:"})}),i.jsxs("ol",{children:[i.jsx("li",{children:i.jsx("span",{children:"Průměr trysky: 0,2 mm"})}),i.jsx("li",{children:i.jsx("span",{children:"Tlak vody: 40 000 psi ( pascaly se přepočítávají na Pa, kde 1 psi ≈ 6894,76 Pa )"})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text ol {
                        display: inline-block;
                        text-align: left;
                    }
                    .slideContent__text__graph {
                        width: 30%;
                        height: 30%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    .slideContent__text__graph img.activeImg {
                        transform: translate(50%, -50%) scale(2);
                    }
                `})]})]})}),Zp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Závěrečné informace"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:'Diamant patří do skupiny minerálů nazývaných "složené minerály" (anglicky "native elements") '})}),i.jsx("li",{children:i.jsx("span",{children:"Diamant je tvořen pouze jedním prvkem, a to uhlíkem. "})}),i.jsx("li",{children:i.jsx("span",{children:"Na ostatních planetách je mnohem vzácnejší strom než diamant. "})}),i.jsx("li",{children:i.jsx("span",{children:"Struktura diamantu je velmi specifická a zásadní pro jeho jedinečné vlastnosti. Diamant má krystalovou strukturu typu tětraedr (tetraedrickou), což znamená, že každý uhlíkový atom v diamantu je vázán čtyřmi jinými uhlíkovými atomy. Tyto čtyři atomy jsou uspořádány do tetraedra (čtyřstěnu), což vytváří velmi pevnou a stabilní krystalovou strukturu. "})}),i.jsx("li",{children:i.jsx("span",{children:"Diamant je nejtvrdší známý přírodní materiál. "})}),i.jsx("li",{children:i.jsx("span",{children:"Již po staletí se používá ve šperkařství, což ho činí jedním z nejoblíbenějších drahých kamenů na světě. "})}),i.jsx("li",{children:i.jsx("span",{children:"Diamanty se těží z hlubin Země, kde vznikají za extrémních podmínek vysokého tlaku a teploty. Hlavními producenty diamantů jsou země jako Jihoafrická republika, Botswana, Rusko a další. "})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),Gp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Zdroje?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Wikipedie."})}),i.jsx("p",{children:i.jsx("span",{children:"Youtube."})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Yp=()=>{const[e,t]=w.useState([Qp,Xp,Kp,Jp,Zp,Gp]);return i.jsx(qe,{slides:e})},qp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"Osvětim"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Autor:"})}),i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]})})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),bp=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Co to je Osvětim?"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Osvětim je město v Polsku."})}),i.jsx("li",{children:i.jsx("span",{children:"Nyní je známé především díky svému spojení s koncentračním táborem.."})}),i.jsx("br",{})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),em=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Osvětim - Historie"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Historie města sahá do středověku."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Během druhé světové války byl Osvětim důležitým místem pro nacistický režim."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),tm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Koncentrační tábory Osvětim"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Osvětim byl domovem několika koncentračních táborů během války."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Nejznámější z nich je Osvětim-Birkenau."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),nm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Osvětim-Birkenau"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Osvětim-Birkenau byl největší koncentrační tábor v Osvětimi."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Byl místem utrpení a smrti pro tisíce lidí."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),im=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Holocaust"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"OOsvětim je symbolem holocaustu, kdy miliony Židů byly vyvražděny nacisty."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Tento zločin proti lidskosti nikdy nesmí být zapomenut."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),lm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Muzeum a Památník"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Dnes je Osvětim domovem muzea a památníku holocaustu."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Slouží jako místo vzpomínky a vzdělávání."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),rm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Světové dědictví UNESCO"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Osvětim bylo zařazeno mezi světové dědictví UNESCO v roce 1979."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Má zásadní historický a kulturní význam."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),sm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Návštěva Osvětimi"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Důležité je respektovat místo a jeho historii při návštěvě."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Zážitek z návštěvy může být silný a emotivní."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),om=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Závěr"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Osvětim je místem, které nás připomíná hrůzy války a holocaustu."})}),i.jsx("br",{}),i.jsx("li",{children:i.jsx("span",{children:"Musíme se snažit, aby se takové události nikdy neopakovaly."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),am=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Děkuji za pozornost!"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"K tomuto referátu jsem využil následující zdroje:"})}),i.jsx("br",{}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("p",{children:i.jsx("a",{href:"https://cs.wikipedia.org/wiki/Auschwitz",target:"_blank",children:"Wikipedie - Auschwitz"})})}),i.jsx("li",{children:i.jsx("p",{children:i.jsx("a",{href:"https://cs.wikipedia.org/wiki/Osv%C4%9Btim",target:"_blank",children:"Wikipedie - Osvětim"})})}),i.jsx("li",{children:i.jsx("p",{children:i.jsx("a",{href:"https://www.holocaust.cz/dejiny/koncentracni-tabory-a-ghetta/koncentracni-tabory/osvetim/",target:"_blank",children:"Holocaust.cz - Osvětim"})})}),i.jsx("li",{children:i.jsx("p",{children:i.jsx("a",{href:"https://www.osvetim.info/",target:"_blank",children:"Osvetim.info"})})})]})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),cm=()=>{const[e,t]=w.useState([qp,bp,em,tm,nm,im,lm,rm,sm,om,am]);return i.jsx(qe,{slides:e})},um=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"UFO"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Pracovali:"})}),i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]})}),i.jsx("p",{children:i.jsx("span",{children:"Upozornění: Tato prezentace je více rozsáhlá a zasahuje do více oblastí, které jsou ať už jakým koliv způsobem spojeny s UFO."})})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),dm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Co si představit pod pojmem UFO?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Když se řekne ufo co se vám vybaví?"})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Létající talíř"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Mimozemšťané"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Scifi filmy"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Neznámé létající objekty"})})]})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),hm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Ale co když je UFO jen zkatka?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Ano UFO je pouhá zkratka:"})}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("span",{children:"Tato zkratka znamená "}),i.jsx("strong",{children:"U"}),i.jsx("span",{className:"revealClick",children:"nidentified "}),i.jsx("strong",{children:"F"}),i.jsx("span",{className:"revealClick",children:"lying "}),i.jsx("strong",{children:"O"}),i.jsx("span",{className:"revealClick",children:"bject"})]}),i.jsx("li",{children:i.jsx("span",{children:'V našem překladu "Neidentifikovaný Letájící Objekt"'})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),fm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Oficiální Zpráva Z Ameriky"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"V tomto roce bylo Americkou vládou vydáno oficiální prohlášení, že UFO existuje."})}),i.jsx("p",{children:i.jsx("a",{href:"https://www.seznamzpravy.cz/clanek/zahranicni-mimozemstane-existuji-a-vlada-ma-dukazy-jaky-byl-cil-slyseni-o-ufo-234722",children:"seznamzpravy.cz"})}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text ol {
                        display: inline-block;
                        text-align: left;
                    }
                    .slideContent__text__graph {
                        width: 30%;
                        height: 30%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    .slideContent__text__graph img.activeImg {
                        transform: translate(50%, -50%) scale(2);
                    }
                `})]})]})}),pm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Fermiho Paradox"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Fermiho Paradox Se zabívá otázkou: Kde všichni jsou?"})}),i.jsx("li",{children:i.jsx("span",{children:"A proč to je Paradox?"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Protože vesmír je obrovský a je tu obrovská šance že někde existuje mimozemská civilizace"})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),mm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Kardašova škála"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Tato škála představuje typy civilizace a řadí se tam podle toho kolik energie spotřebují."})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Typ 1 - Civilizace, která spotřebuje veškerou energii na své planetě"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Typ 2 - Civilizace, která spotřebuje veškerou energii ve své hvězdě"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Typ 3 - Civilizace, která spotřebuje veškerou energii ve své galaxii"})})]}),i.jsx("p",{children:i.jsx("span",{children:"Podle této škály jsme na stupnici 0,73"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),xm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Proč jsme je ještě nepodkali?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Je tu několik možnosti:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsxs("span",{className:"revealClick",children:["Alternativa 1: Možná jsou všude okolo nás a jsme moc primitivní",i.jsx("br",{})," aby jsme si jich všimli."]})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:'Alternativa 2: Jiné civilizace nepotřebují tak zvaně "vystrkovat růžky" a v klidu si žijou'})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Alternativa 3: Vyspělé Civilizace někde jsou a asi si uvědomují že není nejlepší nápad vysílat rádiové signáli"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Alternativa 4: Je jedna super civilizace která níčí všechny ostatní civilizace"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Alternativa 5: Žijeme v tiché části vesmíru či galaxie"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Alternativa 6: Prostě žijou mezi námi a nedávají to najevo"})})]})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),vm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Velký Filter"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Velký filter je paradox."})}),i.jsx("p",{children:i.jsx("span",{children:"Je to jaká si bariéra která nám může zabránit v tom abychom se vyvinuli do vyšších civilizací a nebo našli jiné civilizace."})}),i.jsx("p",{children:i.jsx("span",{children:"Jak by to s ním mohlo být?"})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Možná lidstvo je velmi vzácný případ a už jsme překonali velký filter"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Možná překonání velkého filtru není tak vzácné ale jsme první kterým se to podařilo"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Velký filter je ještě před námi"})})]}),i.jsx("p",{children:i.jsx("span",{children:"Podle této škály jsme na stupnici 0,73"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),gm="/assets/voyager-D4Z7ZK1M.mp3",jm=()=>{const e={one:234369077,two:240935477},t={one:17,two:15},[n,l]=w.useState({one:"0",two:"0",oneLy:"0",twoLy:"0"});return w.useEffect(()=>{setInterval(()=>{const r=new Date,s=r.getTime()/1e3-e.one,o=r.getTime()/1e3-e.two;l({one:(s*t.one).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g," "),two:(o*t.two).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g," "),oneLy:(s*t.one/9461e9).toFixed(3),twoLy:(o*t.two/9461e9).toFixed(3)})})},[]),i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Voyager 1 a 2"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("p",{children:[" Voyager 1:  ",n.one," km od Země (rychlost ",t.one," km/s) neboli ",n.oneLy," Světelných let"]}),i.jsxs("p",{children:[" Voyager 2:  ",n.two," km od Země (rychlost ",t.two," km/s) neboli ",n.twoLy," Světelných let"]}),i.jsx("p",{children:i.jsx("span",{children:"Proč budu tady mluvit o Voyageru?"})}),i.jsx("p",{children:i.jsxs("span",{className:"revealClick",children:['Protože voyager 1 a 2 jsou první umělé objekty které mají na sobě zlatou desku "Golden Record"',i.jsx("br",{})," s informacemi o lidstvu a naší planetě a opouští naší sluneční soustavu."]})}),i.jsx("p",{children:i.jsx("span",{children:"Golden Record obsahuje nahrávky:"})}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Zvířat"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Sopek"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Lidského srdce"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"Smíchu"})}),i.jsx("li",{children:i.jsx("span",{className:"revealClick",children:"27 Skladeb"})})]}),i.jsx("p",{children:i.jsx("span",{children:"Golden Record obsahuje také mapu naší sluneční soustavy a pokyny jak se dostat na naší planetu."})}),i.jsx("p",{children:i.jsx("span",{children:"Jedna z písní: "})}),i.jsx("p",{children:i.jsx("span",{children:"Willie Johnson - Dark Was The Night, Cold Was The Ground"})}),i.jsx("audio",{controls:!0,children:i.jsx("source",{src:gm,type:"audio/mpeg"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]})},ym=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Děkuji za pozornost"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("span",{children:"Zdroje:"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"https://cs.wikipedia.org/wiki/UFO",target:"_blank",children:"Wikipedia - UFO"})}),i.jsx("li",{children:i.jsx("a",{href:"https://cs.wikipedia.org/wiki/Fermiho_paradox",target:"_blank",children:"Wikipedia - Fermiho Paradox"})}),i.jsx("li",{children:i.jsx("a",{href:"https://cs.wikipedia.org/wiki/Drakeova_rovnice",target:"_blank",children:"Wikipedia - Drakeova rovnice"})}),i.jsx("li",{children:i.jsx("a",{href:"https://cs.wikipedia.org/wiki/Voyager",target:"_blank",children:"Wikipedia - Voyager"})}),i.jsx("li",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=glkRnKAfIQg",target:"_blank",children:"Jirka vysvětluje věci - Fermiho paradox: Jsme ve vesmíru sami?"})}),i.jsx("li",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=S4lfLdg3ShQ",target:"_blank",children:"JurajVie - Existujú mimozemšťania?"})}),i.jsx("li",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=Tk9ZrpQK99U",target:"_blank",children:"JurajVie - Kde sú mimozemšťania?"})}),i.jsx("li",{children:i.jsx("a",{href:"https://www.youtube.com/watch?v=V8AuYmID4wc",target:"_blank",children:"Voyager's Golden Record -Dark was the night-Blind Willie Johnson"})})]})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),_m=()=>{const[e,t]=w.useState([um,dm,hm,fm,pm,mm,xm,vm,jm,ym]);return i.jsxs(i.Fragment,{children:[i.jsx(qe,{slides:e}),";"]})},km=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"František Xaver Šalda"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Autor:"})}),i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]})})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),Cm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"1: Úvod a Mládí"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"František Xaver Šalda (1867-1937)."})}),i.jsx("li",{children:i.jsx("span",{children:"Narodil se 22. prosince 1867."})}),i.jsx("li",{children:i.jsx("span",{children:"Mladý, literárně činný, přesto na právnické fakultě"})}),i.jsx("li",{children:i.jsx("span",{children:"Odešel z univerzity a stal se nezávislým spisovatelem"})}),i.jsx("li",{children:i.jsx("span",{children:'Vůdčí osobnost české "literární revoluce" v 90. letech 19. století'})}),i.jsx("br",{})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),wm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"2: Literární Činnost"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Zaměření na literární vědu a kritiku"})}),i.jsx("li",{children:i.jsx("span",{children:"Přinesl nové metody do české kritiky"})}),i.jsx("li",{children:i.jsx("span",{children:"Ovlivněn francouzskou a anglickou tradicí"})}),i.jsx("li",{children:i.jsx("span",{children:"Věnování českým i zahraničním autorům (Mácha, Němcová, Rimbaud, Shakespeare, Dante)"})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),Sm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"3: Multitalent Šaldy"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Psaní románů, básní, dramat"})}),i.jsx("li",{children:i.jsx("span",{children:'Založení časopisu "Šaldův zápisník" v roce 1928'})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),zm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"4: Šaldova Smrt (1937)"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Úmrtí 4. dubna 1937"})}),i.jsx("li",{children:i.jsx("span",{children:"Zanechal trvalý odkaz na českou literární scénu"})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),Nm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"5: Nejznámější Díla Šaldy - Kritické Práce"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Boje o zítřek (1905)"})}),i.jsx("li",{children:i.jsx("span",{children:"Časové a nadčasové"})}),i.jsx("li",{children:i.jsx("span",{children:"Duše a dílo (1913)"})}),i.jsx("li",{children:i.jsx("span",{children:"Kritické glosy k nové poezii české"})}),i.jsx("li",{children:i.jsx("span",{children:"O nejmladší poezii české (1928)"})}),i.jsx("li",{children:i.jsx("span",{children:"Studie literárně - historické a kritické"})}),i.jsx("li",{children:i.jsx("span",{children:"Syntetism v novém umění (1892)"})}),i.jsx("li",{children:i.jsx("span",{children:"Mácha snivec i buřič (1936)"})}),i.jsx("li",{children:i.jsx("span",{children:"O tzv. nesmrtelnosti díla básnického (1928)"})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Em=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"5: Nejznámější Díla Šaldy - Dramata"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Dítě"})}),i.jsx("li",{children:i.jsx("span",{children:"Tažení proti smrti (1926)"})}),i.jsx("li",{children:i.jsx("span",{children:"Zástupové (1921)"})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Pm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"5: Nejznámější Díla Šaldy - Romány"})}),i.jsx("div",{className:"slideContent__text",children:i.jsx("ul",{children:i.jsx("li",{children:i.jsx("span",{children:"Loutky i dělníci boží (1917)"})})})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Tm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"6: Filmy/Představení kde bylo jeho dílo použito"})}),i.jsx("div",{className:"slideContent__text",children:i.jsx("ul",{children:i.jsx("li",{children:i.jsx("span",{children:"Nebyl jsem schopný najít."})})})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Rm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Citace:"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsxs("li",{children:["Přispěvatelé Wikipedie, František Xaver Šalda [online], Wikipedie: Otevřená encyklopedie, c2023, Datum poslední revize 25. 11. 2023, 16:56 UTC, [citováno 30. 11. 2023] ",i.jsx("a",{href:"https://cs.wikipedia.org/w/index.php?title=Franti%C5%A1ek_Xaver_%C5%A0alda&oldid=23408941",children:"https://cs.wikipedia.org/w/index.php?title=Franti%C5%A1ek_Xaver_%C5%A0alda&oldid=23408941"})]}),i.jsx("li",{children:"Fdb.cz. František Xaver Šalda. 2023, roč. 2023, č. 2023, s. 1."})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Lm=()=>{const[e,t]=w.useState([km,Cm,wm,Sm,zm,Nm,Em,Pm,Tm,Rm]);return i.jsx(qe,{slides:e})},Im=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"Erik M. Remarque"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Pracovali:"})}),i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]})})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),Om=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"2. Raný život"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Narozen: 22. června 1898, Osnabrück, Německo."})}),i.jsx("li",{children:i.jsx("span",{children:"Původní název: Erich Paul Remark"})}),i.jsx("li",{children:i.jsx("span",{children:"Rodina: dělnický původ, otec byl knihař."})}),i.jsx("li",{children:i.jsx("span",{children:"Vzdělání: Přerušeno vojenskou službou v první světové válce."})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),Mm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:" 3. World War I (První Světová Válka)"})}),i.jsxs("ol",{children:[i.jsx("li",{children:i.jsx("span",{children:"Nastoupil: v 18 letech"})}),i.jsx("li",{children:i.jsx("span",{children:"Zranění: Během konfliktu byl zraněn pětkrát."})}),i.jsx("li",{children:i.jsx("span",{children:"Dopad: Válečné zážitky Remarquea hluboce poznamenaly, a to jak fyzicky, tak emocionálně."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})}),Dm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"4.  Na západní frontě je klid"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Publikováno: 1929"})}),i.jsx("p",{children:i.jsx("span",{children:"Děj: Mladý německý voják Paul Bäumer vypráví své zážitky ze západní fronty. Román líčí krutou realitu zákopové války."})}),i.jsxs("ol",{children:[i.jsx("li",{children:i.jsx("span",{children:"Témata: deziluze, ztráta nevinnosti, kamarádství, marnost války."})}),i.jsx("li",{children:i.jsx("span",{children:'Poznámky řečníka:  "Remarque je nejslavnějším dílem a je považován za zásadní protiválečný román. Jeho strohá, nesentimentální próza měla obrovský vliv na vnímání války veřejností. Všimněte si, že byl nacistickým režimem zakázán a spálen.'})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text ol {
                        display: inline-block;
                        text-align: left;
                    }
                    .slideContent__text__graph {
                        width: 30%;
                        height: 30%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                    .slideContent__text__graph img.activeImg {
                        transform: translate(50%, -50%) scale(2);
                    }
                `})]})]})}),Fm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"5. Remarqueův literární odkaz"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Další významné romány:"})}),i.jsx("li",{children:i.jsx("span",{children:'"(1931) - sleduje vojáky vracející se z první světové války. '})}),i.jsx("li",{children:i.jsx("span",{children:"Na ostatních planetách je mnohem vzácnejší strom než diamant. "})}),i.jsx("li",{children:i.jsx("span",{children:'"Tři kamarádi" (1936) - zkoumá přátelství a strádání v poválečném Německu'})}),i.jsx("li",{children:i.jsx("span",{children:'"Vítězný oblouk" (1945) - lékař uprchlík v Paříži nachází lásku a pomstu '})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),$m=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"6. Filmy"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:'"Na západní frontě klid":'})}),i.jsx("li",{children:i.jsx("span",{children:"1930 - držitel Oscara za nejlepší film"})}),i.jsx("li",{children:i.jsx("span",{children:"1979 - televizní remake"})}),i.jsx("li",{children:i.jsx("span",{children:"2022 - nedávná vydání na  Netflixu"})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),Um=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"7. Vyhnanství a pozdější život"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Nacistické pronásledování: Remarqueovy knihy byly zakázány kvůli jejich protiválečným náladám. V roce 1933 opustil Německo."})}),i.jsx("li",{children:i.jsx("span",{children:"Švýcarsko: Nalezl útočiště a nakonec i občanství."})}),i.jsx("li",{children:i.jsx("span",{children:"Manželství s Paulette Goddardovou: Goddard: vysoce prestižní vztah s hollywoodskou herečkou."})}),i.jsx("li",{children:i.jsx("span",{children:"United States: Spent significant time in the U.S, particularly  California."})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),Bm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Zdroje?"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Wikipedie."})}),i.jsx("p",{children:i.jsx("span",{children:"Youtube."})}),i.jsx("p",{children:i.jsx("span",{children:"Gemini (Promty: Jaké filmy se natáčely o Erichu M. Remarqueovi? Jaká je jeho literální stopa?) (Ověřeno na wikipedii a k tomu doplněno ChatGPT)"})}),i.jsx("p",{children:i.jsx("span",{children:"ChatGPT (Promty: Jaké filmy se natáčely o Erichu M. Remarqueovi? Jaká je jeho literální stopa?) (Ověřeno i na wikipedii)"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Am=()=>{const[e,t]=w.useState([Im,Om,Mm,Dm,Fm,$m,Um,Bm]);return i.jsx(qe,{slides:e})},Vm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideTitle",children:"Tsunami"}),i.jsxs("div",{className:"slideText",children:[i.jsx("p",{children:i.jsx("span",{children:"Autor:"})}),i.jsx("ul",{children:i.jsxs("li",{children:[i.jsx("span",{children:"Michal Líbal"})," "]})})]})]}),i.jsx("style",{children:`
            .slideContent {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `})]}),Wm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Tsunami: Ničivá Síla Oceánů"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:'Tsunami, což v japonštině znamená "vlna v přístavu", představuje jedno z nejnebezpečnějších přírodních jevů.'})}),i.jsx("li",{children:i.jsx("span",{children:"Tato ničivá síla oceánů vzniká v důsledku rychlého pohybu tektonických desek, většinou pod hladinou oceánu."})}),i.jsx("li",{children:i.jsx("span",{children:"Zde přináším podrobnější pohled na toto fascinující, avšak destruktivní, přírodní dění."})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `})]}),Hm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Vznik Tsunami"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Tsunami většinou vzniká v důsledku podmořského zemětřesení."})}),i.jsx("li",{children:i.jsx("span",{children:"Když se tektonické desky pohybují, může dojít k jejich rychlému posunu, což způsobuje narušení oceánského dna."})}),i.jsx("li",{children:i.jsx("span",{children:"Tato dislokace vody pak vytváří velké vlny, které se šíří směrem k pobřeží."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),Qm=()=>i.jsx("div",{children:i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Struktura Tsunami"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Tsunami většinou není jedna vlna, ale soubor vln, které dorážejí na pobřeží s krátkými časovými intervaly."})}),i.jsx("li",{children:i.jsx("span",{children:"První vlna může být ničivá, ale mnohem větší nebezpečí přichází s následujícími vlnami, které mohou pokračovat několik hodin."})})]}),i.jsx("style",{children:`
                    .slideContent {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .slideContent__title {
                        font-size: 3em;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .slideContent__text {
                        font-size: 1.5em;
                        text-align: center;
                    }
                    .slideContent__text__graph {
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `})]})]})}),Xm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Ničivá Síla Tsunami"})}),i.jsx("div",{className:"slideContent__text",children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("span",{children:"Tsunami mohou mít devastující dopady na pobřežní oblasti. "})}),i.jsx("li",{children:i.jsx("span",{children:"Tyto vlny mohou dosahovat výšek několika metrů a proniknout až několik kilometrů do vnitrozemí. "})}),i.jsx("li",{children:i.jsx("span",{children:"Přináší s sebou ničivou sílu, která může způsobit ztráty na životech, zničení infrastruktury a trvalé změny v krajině."})})]})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
            `})]}),Km=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Varování a Prevence"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Moderní technologie umožňují včasné varování před blížícím se tsunami."})}),i.jsx("p",{children:i.jsx("span",{children:"Evakuace a připravenost jsou klíčové pro minimalizaci ztrát."})}),i.jsx("p",{children:i.jsx("span",{children:"Efektivní systémy varování mohou být rozdílem mezi životem a smrtí."})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Jm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Tsunami ve Světové Historii"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Podívejme se na některé významné historické případy tsunami, jako například Tsunami v Indickém oceánu v roce 2004 nebo v Chile v roce 1960."})}),i.jsx("p",{children:i.jsx("span",{children:"Tyto události nám poskytují ponaučení a informace o dopadech tsunami na společnosti."})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Zm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Dopady Tsunami na Společnosti"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Tsunami mají rozsáhlé dopady na společnosti, zahrnující ztráty na životech, ekonomické škody a trvalé změny v postižených oblastech."})}),i.jsx("p",{children:i.jsx("span",{children:"Porozumění těmto dopadům je klíčové pro lepší přípravu a odpověď."})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Gm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Globální Spolupráce a Výzkum"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Globální spolupráce a vědecký výzkum jsou nezbytné k lepšímu pochopení tsunami a vytvoření efektivnějších systémů prevence."})}),i.jsx("p",{children:i.jsx("span",{children:"Jaké mezinárodní úsilí je vynakládáno na ochranu obyvatelstva?"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),Ym=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Bezpečnostní Opatření a Plány"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Lokální plány a bezpečnostní opatření hrají klíčovou roli v ochraně obyvatelstva před ničivými dopady tsunami."})}),i.jsx("p",{children:i.jsx("span",{children:"Jak mohou jednotlivé komunity přispět k bezpečnosti?"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),qm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Závěr"})}),i.jsx("div",{className:"slideContent__text",children:i.jsx("p",{children:i.jsx("span",{children:"Z tsunami by jsme si neměli dělat srandu a můžeme být alespoň částečně rádi za to že nemáme moře."})})})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),bm=()=>i.jsxs("div",{children:[i.jsxs("div",{className:"slideContent",children:[i.jsx("div",{className:"slideContent__title",children:i.jsx("span",{children:"Citace"})}),i.jsxs("div",{className:"slideContent__text",children:[i.jsx("p",{children:i.jsx("span",{children:"Wikipedia contributors. (2023, November 29). Tsunami. In Wikipedia, The Free Encyclopedia. Retrieved 17:54, November 30, 2023, from https://en.wikipedia.org/w/index.php?title=Tsunami&oldid=1187433294"})}),i.jsx("p",{children:i.jsx("span",{children:"https://chat.openai.com/"})})]})]}),i.jsx("style",{children:`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `})]}),ex=()=>{const[e,t]=w.useState([Vm,Wm,Hm,Qm,Xm,Km,Jm,Zm,Gm,Ym,qm,bm]);return i.jsx(qe,{slides:e})};function tx(){return i.jsx(i.Fragment,{children:i.jsxs(ap,{children:[i.jsx(xe,{path:"/reference/9b/spanek/*",element:i.jsx(Lp,{})}),i.jsx(xe,{path:"/reference/9b/viditelne-svetlo/*",element:i.jsx(Bp,{})}),i.jsx(xe,{path:"/reference/9b/john-lennon/*",element:i.jsx(Hp,{})}),i.jsx(xe,{path:"/reference/9b/diamant/*",element:i.jsx(Yp,{})}),i.jsx(xe,{path:"/reference/9b/osvetim/*",element:i.jsx(cm,{})}),i.jsx(xe,{path:"/reference/9b/ufo/*",element:i.jsx(_m,{})}),i.jsx(xe,{path:"/reference/9b/frantisek-xaver-salda/*",element:i.jsx(Lm,{})}),i.jsx(xe,{path:"/reference/9b/tsunami/*",element:i.jsx(ex,{})}),i.jsx(xe,{path:"/reference/9b/erik-remarque/*",element:i.jsx(Am,{})}),i.jsx(xe,{path:"/reference/9b/",element:i.jsx(_p,{})}),i.jsx(xe,{path:"/reference/E1B/",element:i.jsx(kp,{})}),i.jsx(xe,{path:"*",element:i.jsx(hp,{})})]})})}Nu(document.getElementById("root")).render(i.jsx(dp,{children:i.jsx(tx,{})}));