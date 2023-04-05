/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var LIB;(()=>{var t={470:t=>{function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,e){for(var r,n="",o=0,i=-1,a=0,h=0;h<=t.length;++h){if(h<t.length)r=t.charCodeAt(h);else {if(47===r)break;r=47;}if(47===r){if(i===h-1||1===a);else if(i!==h-1&&2===a){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",o=0):o=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),i=h,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=h,a=0;continue}e&&(n.length>0?n+="/..":n="..",o=2);}else n.length>0?n+="/"+t.slice(i+1,h):n=t.slice(i+1,h),o=h-i-1;i=h,a=0;}else 46===r&&-1!==a?++a:a=-1;}return n}var n={resolve:function(){for(var t,n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a;i>=0?a=arguments[i]:(void 0===t&&(t=process.cwd()),a=t),e(a),0!==a.length&&(n=a+"/"+n,o=47===a.charCodeAt(0));}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(e(t),0===t.length)return ".";var n=47===t.charCodeAt(0),o=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!n)).length||n||(t="."),t.length>0&&o&&(t+="/"),n?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return ".";for(var t,r=0;r<arguments.length;++r){var o=arguments[r];e(o),o.length>0&&(void 0===t?t=o:t+="/"+o);}return void 0===t?".":n.normalize(t)},relative:function(t,r){if(e(t),e(r),t===r)return "";if((t=n.resolve(t))===(r=n.resolve(r)))return "";for(var o=1;o<t.length&&47===t.charCodeAt(o);++o);for(var i=t.length,a=i-o,h=1;h<r.length&&47===r.charCodeAt(h);++h);for(var s=r.length-h,c=a<s?a:s,f=-1,u=0;u<=c;++u){if(u===c){if(s>c){if(47===r.charCodeAt(h+u))return r.slice(h+u+1);if(0===u)return r.slice(h+u)}else a>c&&(47===t.charCodeAt(o+u)?f=u:0===u&&(f=0));break}var l=t.charCodeAt(o+u);if(l!==r.charCodeAt(h+u))break;47===l&&(f=u);}var p="";for(u=o+f+1;u<=i;++u)u!==i&&47!==t.charCodeAt(u)||(0===p.length?p+="..":p+="/..");return p.length>0?p+r.slice(h+f):(h+=f,47===r.charCodeAt(h)&&++h,r.slice(h))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return ".";for(var r=t.charCodeAt(0),n=47===r,o=-1,i=!0,a=t.length-1;a>=1;--a)if(47===(r=t.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return -1===o?n?"/":".":n&&1===o?"//":t.slice(0,o)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');e(t);var n,o=0,i=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return "";var h=r.length-1,s=-1;for(n=t.length-1;n>=0;--n){var c=t.charCodeAt(n);if(47===c){if(!a){o=n+1;break}}else -1===s&&(a=!1,s=n+1),h>=0&&(c===r.charCodeAt(h)?-1==--h&&(i=n):(h=-1,i=s));}return o===i?i=s:-1===i&&(i=t.length),t.slice(o,i)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){o=n+1;break}}else -1===i&&(a=!1,i=n+1);return -1===i?"":t.slice(o,i)},extname:function(t){e(t);for(var r=-1,n=0,o=-1,i=!0,a=0,h=t.length-1;h>=0;--h){var s=t.charCodeAt(h);if(47!==s)-1===o&&(i=!1,o=h+1),46===s?-1===r?r=h:1!==a&&(a=1):-1!==r&&(a=-1);else if(!i){n=h+1;break}}return -1===r||-1===o||0===a||1===a&&r===o-1&&r===n+1?"":t.slice(r,o)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+"/"+n:n}(0,t)},parse:function(t){e(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var n,o=t.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var a=-1,h=0,s=-1,c=!0,f=t.length-1,u=0;f>=n;--f)if(47!==(o=t.charCodeAt(f)))-1===s&&(c=!1,s=f+1),46===o?-1===a?a=f:1!==u&&(u=1):-1!==a&&(u=-1);else if(!c){h=f+1;break}return -1===a||-1===s||0===u||1===u&&a===s-1&&a===h+1?-1!==s&&(r.base=r.name=0===h&&i?t.slice(1,s):t.slice(h,s)):(0===h&&i?(r.name=t.slice(1,a),r.base=t.slice(1,s)):(r.name=t.slice(h,a),r.base=t.slice(h,s)),r.ext=t.slice(a,s)),h>0?r.dir=t.slice(0,h-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,t.exports=n;}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]});},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};var n={};(()=>{var t;if(r.r(n),r.d(n,{URI:()=>p,Utils:()=>_}),"object"==typeof process)t="win32"===process.platform;else if("object"==typeof navigator){var e=navigator.userAgent;t=e.indexOf("Windows")>=0;}var o,i,a=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}),h=/^\w[\w\d+.-]*$/,s=/^\//,c=/^\/\//,f="",u="/",l=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,p=function(){function e(t,e,r,n,o,i){void 0===i&&(i=!1),"object"==typeof t?(this.scheme=t.scheme||f,this.authority=t.authority||f,this.path=t.path||f,this.query=t.query||f,this.fragment=t.fragment||f):(this.scheme=function(t,e){return t||e?t:"file"}(t,i),this.authority=e||f,this.path=function(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==u&&(e=u+e):e=u;}return e}(this.scheme,r||f),this.query=n||f,this.fragment=o||f,function(t,e){if(!t.scheme&&e)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(t.authority,'", path: "').concat(t.path,'", query: "').concat(t.query,'", fragment: "').concat(t.fragment,'"}'));if(t.scheme&&!h.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!s.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(c.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,i));}return e.isUri=function(t){return t instanceof e||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString},Object.defineProperty(e.prototype,"fsPath",{get:function(){return b(this,!1)},enumerable:!1,configurable:!0}),e.prototype.with=function(t){if(!t)return this;var e=t.scheme,r=t.authority,n=t.path,o=t.query,i=t.fragment;return void 0===e?e=this.scheme:null===e&&(e=f),void 0===r?r=this.authority:null===r&&(r=f),void 0===n?n=this.path:null===n&&(n=f),void 0===o?o=this.query:null===o&&(o=f),void 0===i?i=this.fragment:null===i&&(i=f),e===this.scheme&&r===this.authority&&n===this.path&&o===this.query&&i===this.fragment?this:new d(e,r,n,o,i)},e.parse=function(t,e){void 0===e&&(e=!1);var r=l.exec(t);return r?new d(r[2]||f,x(r[4]||f),x(r[5]||f),x(r[7]||f),x(r[9]||f),e):new d(f,f,f,f,f)},e.file=function(e){var r=f;if(t&&(e=e.replace(/\\/g,u)),e[0]===u&&e[1]===u){var n=e.indexOf(u,2);-1===n?(r=e.substring(2),e=u):(r=e.substring(2,n),e=e.substring(n)||u);}return new d("file",r,e,f,f)},e.from=function(t){return new d(t.scheme,t.authority,t.path,t.query,t.fragment)},e.prototype.toString=function(t){return void 0===t&&(t=!1),C(this,t)},e.prototype.toJSON=function(){return this},e.revive=function(t){if(t){if(t instanceof e)return t;var r=new d(t);return r._formatted=t.external,r._fsPath=t._sep===g?t.fsPath:null,r}return t},e}(),g=t?1:void 0,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._formatted=null,e._fsPath=null,e}return a(e,t),Object.defineProperty(e.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=b(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(t){return void 0===t&&(t=!1),t?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)},e.prototype.toJSON=function(){var t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=g),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},e}(p),v=((i={})[58]="%3A",i[47]="%2F",i[63]="%3F",i[35]="%23",i[91]="%5B",i[93]="%5D",i[64]="%40",i[33]="%21",i[36]="%24",i[38]="%26",i[39]="%27",i[40]="%28",i[41]="%29",i[42]="%2A",i[43]="%2B",i[44]="%2C",i[59]="%3B",i[61]="%3D",i[32]="%20",i);function y(t,e){for(var r=void 0,n=-1,o=0;o<t.length;o++){var i=t.charCodeAt(o);if(i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57||45===i||46===i||95===i||126===i||e&&47===i)-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),void 0!==r&&(r+=t.charAt(o));else {void 0===r&&(r=t.substr(0,o));var a=v[i];void 0!==a?(-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),r+=a):-1===n&&(n=o);}}return -1!==n&&(r+=encodeURIComponent(t.substring(n))),void 0!==r?r:t}function m(t){for(var e=void 0,r=0;r<t.length;r++){var n=t.charCodeAt(r);35===n||63===n?(void 0===e&&(e=t.substr(0,r)),e+=v[n]):void 0!==e&&(e+=t[r]);}return void 0!==e?e:t}function b(e,r){var n;return n=e.authority&&e.path.length>1&&"file"===e.scheme?"//".concat(e.authority).concat(e.path):47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&e.path.charCodeAt(1)<=90||e.path.charCodeAt(1)>=97&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?r?e.path.substr(1):e.path[1].toLowerCase()+e.path.substr(2):e.path,t&&(n=n.replace(/\//g,"\\")),n}function C(t,e){var r=e?m:y,n="",o=t.scheme,i=t.authority,a=t.path,h=t.query,s=t.fragment;if(o&&(n+=o,n+=":"),(i||"file"===o)&&(n+=u,n+=u),i){var c=i.indexOf("@");if(-1!==c){var f=i.substr(0,c);i=i.substr(c+1),-1===(c=f.indexOf(":"))?n+=r(f,!1):(n+=r(f.substr(0,c),!1),n+=":",n+=r(f.substr(c+1),!1)),n+="@";}-1===(c=(i=i.toLowerCase()).indexOf(":"))?n+=r(i,!1):(n+=r(i.substr(0,c),!1),n+=i.substr(c));}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2))(l=a.charCodeAt(1))>=65&&l<=90&&(a="/".concat(String.fromCharCode(l+32),":").concat(a.substr(3)));else if(a.length>=2&&58===a.charCodeAt(1)){var l;(l=a.charCodeAt(0))>=65&&l<=90&&(a="".concat(String.fromCharCode(l+32),":").concat(a.substr(2)));}n+=r(a,!0);}return h&&(n+="?",n+=r(h,!1)),s&&(n+="#",n+=e?s:y(s,!1)),n}function A(t){try{return decodeURIComponent(t)}catch(e){return t.length>3?t.substr(0,3)+A(t.substr(3)):t}}var w=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function x(t){return t.match(w)?t.replace(w,(function(t){return A(t)})):t}var _,O=r(470),P=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},j=O.posix||O,U="/";!function(t){t.joinPath=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t.with({path:j.join.apply(j,P([t.path],e,!1))})},t.resolvePath=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=t.path,o=!1;n[0]!==U&&(n=U+n,o=!0);var i=j.resolve.apply(j,P([n],e,!1));return o&&i[0]===U&&!t.authority&&(i=i.substring(1)),t.with({path:i})},t.dirname=function(t){if(0===t.path.length||t.path===U)return t;var e=j.dirname(t.path);return 1===e.length&&46===e.charCodeAt(0)&&(e=""),t.with({path:e})},t.basename=function(t){return j.basename(t.path)},t.extname=function(t){return j.extname(t.path)};}(_||(_={}));})(),LIB=n;})();const{URI,Utils}=LIB;

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function createKernelUri(kernelUri) {
    const uri = URI.parse(kernelUri);
    uri.authority; //?
    uri.path; //?
    let absoluteUri = `${uri.scheme}://${uri.authority}${uri.path || "/"}`;
    return absoluteUri; //?
}
function createKernelUriWithQuery(kernelUri) {
    const uri = URI.parse(kernelUri);
    uri.authority; //?
    uri.path; //?
    let absoluteUri = `${uri.scheme}://${uri.authority}${uri.path || "/"}`;
    if (uri.query) {
        absoluteUri += `?${uri.query}`;
    }
    return absoluteUri; //?
}
function stampCommandRoutingSlipAsArrived(kernelCommandEnvelope, kernelUri) {
    stampCommandRoutingSlipAs(kernelCommandEnvelope, kernelUri, "arrived");
}
function stampCommandRoutingSlip(kernelCommandEnvelope, kernelUri) {
    if (kernelCommandEnvelope.routingSlip === undefined || kernelCommandEnvelope.routingSlip === null) {
        throw new Error("The command does not have a routing slip");
    }
    kernelCommandEnvelope.routingSlip; //?
    let absoluteUri = createKernelUri(kernelUri); //?
    if (kernelCommandEnvelope.routingSlip.find(e => e === absoluteUri)) {
        throw Error(`The uri ${absoluteUri} is already in the routing slip [${kernelCommandEnvelope.routingSlip}]`);
    }
    else if (kernelCommandEnvelope.routingSlip.find(e => e.startsWith(absoluteUri))) {
        kernelCommandEnvelope.routingSlip.push(absoluteUri);
    }
    else {
        throw new Error(`The uri ${absoluteUri} is not in the routing slip [${kernelCommandEnvelope.routingSlip}]`);
    }
}
function stampEventRoutingSlip(kernelEventEnvelope, kernelUri) {
    stampRoutingSlip(kernelEventEnvelope, kernelUri);
}
function stampCommandRoutingSlipAs(kernelCommandOrEventEnvelope, kernelUri, tag) {
    const absoluteUri = `${createKernelUri(kernelUri)}?tag=${tag}`; //?
    stampRoutingSlip(kernelCommandOrEventEnvelope, absoluteUri);
}
function stampRoutingSlip(kernelCommandOrEventEnvelope, kernelUri) {
    if (kernelCommandOrEventEnvelope.routingSlip === undefined || kernelCommandOrEventEnvelope.routingSlip === null) {
        kernelCommandOrEventEnvelope.routingSlip = [];
    }
    const normalizedUri = createKernelUriWithQuery(kernelUri);
    const canAdd = !kernelCommandOrEventEnvelope.routingSlip.find(e => createKernelUriWithQuery(e) === normalizedUri);
    if (canAdd) {
        kernelCommandOrEventEnvelope.routingSlip.push(normalizedUri);
        kernelCommandOrEventEnvelope.routingSlip; //?
    }
    else {
        throw new Error(`The uri ${normalizedUri} is already in the routing slip [${kernelCommandOrEventEnvelope.routingSlip}]`);
    }
}
function continueRoutingSlip(kernelCommandOrEventEnvelope, kernelUris) {
    if (kernelCommandOrEventEnvelope.routingSlip === undefined || kernelCommandOrEventEnvelope.routingSlip === null) {
        kernelCommandOrEventEnvelope.routingSlip = [];
    }
    let toContinue = createRoutingSlip(kernelUris);
    if (routingSlipStartsWith(toContinue, kernelCommandOrEventEnvelope.routingSlip)) {
        toContinue = toContinue.slice(kernelCommandOrEventEnvelope.routingSlip.length);
    }
    const original = [...kernelCommandOrEventEnvelope.routingSlip];
    for (let i = 0; i < toContinue.length; i++) {
        const normalizedUri = toContinue[i]; //?
        const canAdd = !kernelCommandOrEventEnvelope.routingSlip.find(e => createKernelUri(e) === normalizedUri);
        if (canAdd) {
            kernelCommandOrEventEnvelope.routingSlip.push(normalizedUri);
        }
        else {
            throw new Error(`The uri ${normalizedUri} is already in the routing slip [${original}], cannot continue with routing slip [${kernelUris.map(e => createKernelUri(e))}]`);
        }
    }
}
function continueCommandRoutingSlip(kernelCommandEnvelope, kernelUris) {
    continueRoutingSlip(kernelCommandEnvelope, kernelUris);
}
function createRoutingSlip(kernelUris) {
    return Array.from(new Set(kernelUris.map(e => createKernelUri(e))));
}
function routingSlipStartsWith(thisKernelUris, otherKernelUris) {
    let startsWith = true;
    if (otherKernelUris.length > 0 && thisKernelUris.length >= otherKernelUris.length) {
        for (let i = 0; i < otherKernelUris.length; i++) {
            if (createKernelUri(otherKernelUris[i]) !== createKernelUri(thisKernelUris[i])) {
                startsWith = false;
                break;
            }
        }
    }
    else {
        startsWith = false;
    }
    return startsWith;
}
function eventRoutingSlipContains(kernlEvent, kernelUri, ignoreQuery = false) {
    return routingSlipContains(kernlEvent, kernelUri, ignoreQuery);
}
function commandRoutingSlipContains(kernlEvent, kernelUri, ignoreQuery = false) {
    return routingSlipContains(kernlEvent, kernelUri, ignoreQuery);
}
function routingSlipContains(kernelCommandOrEventEnvelope, kernelUri, ignoreQuery = false) {
    var _a;
    const normalizedUri = ignoreQuery ? createKernelUri(kernelUri) : createKernelUriWithQuery(kernelUri);
    return ((_a = kernelCommandOrEventEnvelope === null || kernelCommandOrEventEnvelope === void 0 ? void 0 : kernelCommandOrEventEnvelope.routingSlip) === null || _a === void 0 ? void 0 : _a.find(e => normalizedUri === (!ignoreQuery ? createKernelUriWithQuery(e) : createKernelUri(e)))) !== undefined;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
const RequestInputType = "RequestInput";
const RequestKernelInfoType = "RequestKernelInfo";
const RequestValueType = "RequestValue";
const RequestValueInfosType = "RequestValueInfos";
const SendEditableCodeType = "SendEditableCode";
const SendValueType = "SendValue";
const SubmitCodeType = "SubmitCode";
const CodeSubmissionReceivedType = "CodeSubmissionReceived";
const CommandCancelledType = "CommandCancelled";
const CommandFailedType = "CommandFailed";
const CommandSucceededType = "CommandSucceeded";
const DisplayedValueProducedType = "DisplayedValueProduced";
const KernelInfoProducedType = "KernelInfoProduced";
const KernelReadyType = "KernelReady";
const ReturnValueProducedType = "ReturnValueProduced";
const ValueInfosProducedType = "ValueInfosProduced";
const ValueProducedType = "ValueProduced";
var InsertTextFormat;
(function (InsertTextFormat) {
    InsertTextFormat["PlainText"] = "plaintext";
    InsertTextFormat["Snippet"] = "snippet";
})(InsertTextFormat || (InsertTextFormat = {}));
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity["Hidden"] = "hidden";
    DiagnosticSeverity["Info"] = "info";
    DiagnosticSeverity["Warning"] = "warning";
    DiagnosticSeverity["Error"] = "error";
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var DocumentSerializationType;
(function (DocumentSerializationType) {
    DocumentSerializationType["Dib"] = "dib";
    DocumentSerializationType["Ipynb"] = "ipynb";
})(DocumentSerializationType || (DocumentSerializationType = {}));
var RequestType;
(function (RequestType) {
    RequestType["Parse"] = "parse";
    RequestType["Serialize"] = "serialize";
})(RequestType || (RequestType = {}));
var SubmissionType;
(function (SubmissionType) {
    SubmissionType["Run"] = "run";
    SubmissionType["Diagnose"] = "diagnose";
})(SubmissionType || (SubmissionType = {}));

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class PromiseCompletionSource {
    constructor() {
        this._resolve = () => { };
        this._reject = () => { };
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    resolve(value) {
        this._resolve(value);
    }
    reject(reason) {
        this._reject(reason);
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelInvocationContext {
    constructor(kernelCommandInvocation) {
        this._childCommands = [];
        this._eventSubject = new Subject();
        this._isComplete = false;
        this._handlingKernel = null;
        this.completionSource = new PromiseCompletionSource();
        this._commandEnvelope = kernelCommandInvocation;
    }
    get promise() {
        return this.completionSource.promise;
    }
    get handlingKernel() {
        return this._handlingKernel;
    }
    ;
    get kernelEvents() {
        return this._eventSubject.asObservable();
    }
    ;
    set handlingKernel(value) {
        this._handlingKernel = value;
    }
    static establish(kernelCommandInvocation) {
        let current = KernelInvocationContext._current;
        if (!current || current._isComplete) {
            KernelInvocationContext._current = new KernelInvocationContext(kernelCommandInvocation);
        }
        else {
            if (!areCommandsTheSame(kernelCommandInvocation, current._commandEnvelope)) {
                const found = current._childCommands.includes(kernelCommandInvocation);
                if (!found) {
                    current._childCommands.push(kernelCommandInvocation);
                }
            }
        }
        return KernelInvocationContext._current;
    }
    static get current() { return this._current; }
    get command() { return this._commandEnvelope.command; }
    get commandEnvelope() { return this._commandEnvelope; }
    complete(command) {
        if (areCommandsTheSame(command, this._commandEnvelope)) {
            this._isComplete = true;
            let succeeded = {};
            let eventEnvelope = {
                command: this._commandEnvelope,
                eventType: CommandSucceededType,
                event: succeeded
            };
            this.internalPublish(eventEnvelope);
            this.completionSource.resolve();
            // TODO: C# version has completion callbacks - do we need these?
            // if (!_events.IsDisposed)
            // {
            //     _events.OnCompleted();
            // }
        }
        else {
            let pos = this._childCommands.indexOf(command);
            delete this._childCommands[pos];
        }
    }
    fail(message) {
        // TODO:
        // The C# code accepts a message and/or an exception. Do we need to add support
        // for exceptions? (The TS CommandFailed interface doesn't have a place for it right now.)
        this._isComplete = true;
        let failed = { message: message !== null && message !== void 0 ? message : "Command Failed" };
        let eventEnvelope = {
            command: this._commandEnvelope,
            eventType: CommandFailedType,
            event: failed
        };
        this.internalPublish(eventEnvelope);
        this.completionSource.resolve();
    }
    publish(kernelEvent) {
        if (!this._isComplete) {
            this.internalPublish(kernelEvent);
        }
    }
    internalPublish(kernelEvent) {
        if (!kernelEvent.command) {
            kernelEvent.command = this._commandEnvelope;
        }
        let command = kernelEvent.command;
        if (this.handlingKernel) {
            const kernelUri = getKernelUri(this.handlingKernel);
            if (!eventRoutingSlipContains(kernelEvent, kernelUri)) {
                stampEventRoutingSlip(kernelEvent, kernelUri);
                kernelEvent.routingSlip; //?
            }
        }
        this._commandEnvelope; //?
        if (command === null ||
            command === undefined ||
            areCommandsTheSame(command, this._commandEnvelope) ||
            this._childCommands.includes(command)) {
            this._eventSubject.next(kernelEvent);
        }
    }
    isParentOfCommand(commandEnvelope) {
        const childFound = this._childCommands.includes(commandEnvelope);
        return childFound;
    }
    dispose() {
        if (!this._isComplete) {
            this.complete(this._commandEnvelope);
        }
        KernelInvocationContext._current = null;
    }
}
KernelInvocationContext._current = null;
function areCommandsTheSame(envelope1, envelope2) {
    if (envelope1 === envelope2) {
        return true;
    }
    const sameCommandType = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1.commandType) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2.commandType); //?
    const sameToken = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1.token) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2.token); //?
    const sameCommandId = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1.id) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2.id); //?
    if (sameCommandType && sameToken && sameCommandId) {
        return true;
    }
    return false;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
class Guid {
    constructor(guid) {
        if (!guid) {
            throw new TypeError("Invalid argument; `value` has no value.");
        }
        this.value = Guid.EMPTY;
        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }
    static isGuid(guid) {
        const value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    }
    static create() {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
    }
    static createEmpty() {
        return new Guid("emptyguid");
    }
    static parse(guid) {
        return new Guid(guid);
    }
    static raw() {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
    }
    static gen(count) {
        let out = "";
        for (let i = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    }
    equals(other) {
        // Comparing string `value` against provided `guid` will auto-call
        // toString on `guid` for comparison
        return Guid.isGuid(other) && this.value === other.toString();
    }
    isEmpty() {
        return this.value === Guid.EMPTY;
    }
    toString() {
        return this.value;
    }
    toJSON() {
        return {
            value: this.value,
        };
    }
}
Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
class TokenGenerator {
    constructor() {
        this._seed = Guid.create().toString();
        this._counter = 0;
    }
    GetNewToken() {
        this._counter++;
        return `${this._seed}::${this._counter}`;
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Warn"] = 1] = "Warn";
    LogLevel[LogLevel["Error"] = 2] = "Error";
    LogLevel[LogLevel["None"] = 3] = "None";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(source, write) {
        this.source = source;
        this.write = write;
    }
    info(message) {
        this.write({ logLevel: LogLevel.Info, source: this.source, message });
    }
    warn(message) {
        this.write({ logLevel: LogLevel.Warn, source: this.source, message });
    }
    error(message) {
        this.write({ logLevel: LogLevel.Error, source: this.source, message });
    }
    static configure(source, writer) {
        const logger = new Logger(source, writer);
        Logger._default = logger;
    }
    static get default() {
        if (Logger._default) {
            return Logger._default;
        }
        throw new Error('No logger has been configured for this context');
    }
}
Logger._default = new Logger('default', (_entry) => { });

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelScheduler {
    constructor() {
        this._operationQueue = [];
        this._mustTrampoline = (_c) => false;
    }
    setMustTrampoline(predicate) {
        this._mustTrampoline = predicate !== null && predicate !== void 0 ? predicate : ((_c) => false);
    }
    cancelCurrentOperation() {
        var _a;
        (_a = this._inFlightOperation) === null || _a === void 0 ? void 0 : _a.promiseCompletionSource.reject(new Error("Operation cancelled"));
    }
    runAsync(value, executor) {
        const operation = {
            value,
            executor,
            promiseCompletionSource: new PromiseCompletionSource(),
        };
        const mustTrampoline = this._mustTrampoline(value);
        if (this._inFlightOperation && !mustTrampoline) {
            Logger.default.info(`kernelScheduler: starting immediate execution of ${JSON.stringify(operation.value)}`);
            // invoke immediately
            return operation.executor(operation.value)
                .then(() => {
                Logger.default.info(`kernelScheduler: immediate execution completed: ${JSON.stringify(operation.value)}`);
                operation.promiseCompletionSource.resolve();
            })
                .catch(e => {
                Logger.default.info(`kernelScheduler: immediate execution failed: ${JSON.stringify(e)} - ${JSON.stringify(operation.value)}`);
                operation.promiseCompletionSource.reject(e);
            });
        }
        Logger.default.info(`kernelScheduler: scheduling execution of ${JSON.stringify(operation.value)}`);
        this._operationQueue.push(operation);
        if (this._operationQueue.length === 1) {
            setTimeout(() => {
                this.executeNextCommand();
            }, 0);
        }
        return operation.promiseCompletionSource.promise;
    }
    executeNextCommand() {
        const nextOperation = this._operationQueue.length > 0 ? this._operationQueue[0] : undefined;
        if (nextOperation) {
            this._inFlightOperation = nextOperation;
            Logger.default.info(`kernelScheduler: starting scheduled execution of ${JSON.stringify(nextOperation.value)}`);
            nextOperation.executor(nextOperation.value)
                .then(() => {
                this._inFlightOperation = undefined;
                Logger.default.info(`kernelScheduler: completing inflight operation: success ${JSON.stringify(nextOperation.value)}`);
                nextOperation.promiseCompletionSource.resolve();
            })
                .catch(e => {
                this._inFlightOperation = undefined;
                Logger.default.info(`kernelScheduler: completing inflight operation: failure ${JSON.stringify(e)} - ${JSON.stringify(nextOperation.value)}`);
                nextOperation.promiseCompletionSource.reject(e);
            })
                .finally(() => {
                setTimeout(() => {
                    this._operationQueue.shift();
                    this.executeNextCommand();
                }, 0);
            });
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class Kernel {
    constructor(name, languageName, languageVersion, displayName) {
        this.name = name;
        this._commandHandlers = new Map();
        this._eventSubject = new Subject();
        this._tokenGenerator = new TokenGenerator();
        this.rootKernel = this;
        this.parentKernel = null;
        this._scheduler = null;
        this._kernelInfo = {
            isProxy: false,
            isComposite: false,
            localName: name,
            languageName: languageName,
            aliases: [],
            uri: createKernelUri(`kernel://local/${name}`),
            languageVersion: languageVersion,
            displayName: displayName !== null && displayName !== void 0 ? displayName : name,
            supportedDirectives: [],
            supportedKernelCommands: []
        };
        this._internalRegisterCommandHandler({
            commandType: RequestKernelInfoType, handle: (invocation) => __awaiter(this, void 0, void 0, function* () {
                yield this.handleRequestKernelInfo(invocation);
            })
        });
    }
    get kernelInfo() {
        return this._kernelInfo;
    }
    get kernelEvents() {
        return this._eventSubject.asObservable();
    }
    handleRequestKernelInfo(invocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventEnvelope = {
                eventType: KernelInfoProducedType,
                command: invocation.commandEnvelope,
                event: { kernelInfo: this._kernelInfo }
            }; //?
            invocation.context.publish(eventEnvelope);
            return Promise.resolve();
        });
    }
    getScheduler() {
        var _a, _b;
        if (!this._scheduler) {
            this._scheduler = (_b = (_a = this.parentKernel) === null || _a === void 0 ? void 0 : _a.getScheduler()) !== null && _b !== void 0 ? _b : new KernelScheduler();
        }
        return this._scheduler;
    }
    ensureCommandTokenAndId(commandEnvelope) {
        var _a;
        if (!commandEnvelope.token) {
            let nextToken = this._tokenGenerator.GetNewToken();
            if ((_a = KernelInvocationContext.current) === null || _a === void 0 ? void 0 : _a.commandEnvelope) {
                // a parent command exists, create a token hierarchy
                nextToken = KernelInvocationContext.current.commandEnvelope.token;
            }
            commandEnvelope.token = nextToken;
        }
        if (!commandEnvelope.id) {
            commandEnvelope.id = Guid.create().toString();
        }
    }
    static get current() {
        if (KernelInvocationContext.current) {
            return KernelInvocationContext.current.handlingKernel;
        }
        return null;
    }
    static get root() {
        if (Kernel.current) {
            return Kernel.current.rootKernel;
        }
        return null;
    }
    // Is it worth us going to efforts to ensure that the Promise returned here accurately reflects
    // the command's progress? The only thing that actually calls this is the kernel channel, through
    // the callback set up by attachKernelToChannel, and the callback is expected to return void, so
    // nothing is ever going to look at the promise we return here.
    send(commandEnvelope) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ensureCommandTokenAndId(commandEnvelope);
            const kernelUri = getKernelUri(this);
            if (!commandRoutingSlipContains(commandEnvelope, kernelUri)) {
                stampCommandRoutingSlipAsArrived(commandEnvelope, kernelUri);
            }
            else {
                Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as arrived but uri ${kernelUri} is already present.`);
            }
            commandEnvelope.routingSlip; //?
            KernelInvocationContext.establish(commandEnvelope);
            return this.getScheduler().runAsync(commandEnvelope, (value) => this.executeCommand(value).finally(() => {
                if (!commandRoutingSlipContains(commandEnvelope, kernelUri)) {
                    stampCommandRoutingSlip(commandEnvelope, kernelUri);
                }
                else {
                    Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as completed but uri ${kernelUri} is already present.`);
                }
            }));
        });
    }
    executeCommand(commandEnvelope) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = KernelInvocationContext.establish(commandEnvelope);
            let previousHandlingKernel = context.handlingKernel;
            try {
                yield this.handleCommand(commandEnvelope);
            }
            catch (e) {
                context.fail((e === null || e === void 0 ? void 0 : e.message) || JSON.stringify(e));
            }
            finally {
                context.handlingKernel = previousHandlingKernel;
            }
        });
    }
    getCommandHandler(commandType) {
        return this._commandHandlers.get(commandType);
    }
    handleCommand(commandEnvelope) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let context = KernelInvocationContext.establish(commandEnvelope);
            const previoudHendlingKernel = context.handlingKernel;
            context.handlingKernel = this;
            let isRootCommand = areCommandsTheSame(context.commandEnvelope, commandEnvelope);
            let eventSubscription = undefined; //?
            if (isRootCommand) {
                const kernelType = (this.kernelInfo.isProxy ? "proxy" : "") + (this.kernelInfo.isComposite ? "composite" : "");
                Logger.default.info(`kernel ${this.name} of type ${kernelType} subscribing to context events`);
                eventSubscription = context.kernelEvents.pipe(map(e => {
                    var _a;
                    const message = `kernel ${this.name} of type ${kernelType} saw event ${e.eventType} with token ${(_a = e.command) === null || _a === void 0 ? void 0 : _a.token}`;
                    Logger.default.info(message);
                    const kernelUri = getKernelUri(this);
                    if (!eventRoutingSlipContains(e, kernelUri)) {
                        stampEventRoutingSlip(e, kernelUri);
                    }
                    return e;
                }))
                    .subscribe(this.publishEvent.bind(this));
            }
            let handler = this.getCommandHandler(commandEnvelope.commandType);
            if (handler) {
                try {
                    Logger.default.info(`kernel ${this.name} about to handle command: ${JSON.stringify(commandEnvelope)}`);
                    yield handler.handle({ commandEnvelope: commandEnvelope, context });
                    context.complete(commandEnvelope);
                    context.handlingKernel = previoudHendlingKernel;
                    if (isRootCommand) {
                        eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                        context.dispose();
                    }
                    Logger.default.info(`kernel ${this.name} done handling command: ${JSON.stringify(commandEnvelope)}`);
                    resolve();
                }
                catch (e) {
                    context.fail((e === null || e === void 0 ? void 0 : e.message) || JSON.stringify(e));
                    context.handlingKernel = previoudHendlingKernel;
                    if (isRootCommand) {
                        eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                        context.dispose();
                    }
                    reject(e);
                }
            }
            else {
                context.handlingKernel = previoudHendlingKernel;
                if (isRootCommand) {
                    eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                    context.dispose();
                }
                reject(new Error(`No handler found for command type ${commandEnvelope.commandType}`));
            }
        }));
    }
    subscribeToKernelEvents(observer) {
        const sub = this._eventSubject.subscribe(observer);
        return {
            dispose: () => { sub.unsubscribe(); }
        };
    }
    canHandle(commandEnvelope) {
        if (commandEnvelope.command.targetKernelName && commandEnvelope.command.targetKernelName !== this.name) {
            return false;
        }
        if (commandEnvelope.command.destinationUri) {
            const normalizedUri = createKernelUri(commandEnvelope.command.destinationUri);
            if (this.kernelInfo.uri !== normalizedUri) {
                return false;
            }
        }
        return this.supportsCommand(commandEnvelope.commandType);
    }
    supportsCommand(commandType) {
        return this._commandHandlers.has(commandType);
    }
    registerCommandHandler(handler) {
        // When a registration already existed, we want to overwrite it because we want users to
        // be able to develop handlers iteratively, and it would be unhelpful for handler registration
        // for any particular command to be cumulative.
        const shouldNotify = !this._commandHandlers.has(handler.commandType);
        this._internalRegisterCommandHandler(handler);
        if (shouldNotify) {
            const event = {
                kernelInfo: this._kernelInfo,
            };
            const envelope = {
                eventType: KernelInfoProducedType,
                event: event
            };
            stampEventRoutingSlip(envelope, getKernelUri(this));
            const context = KernelInvocationContext.current;
            if (context) {
                envelope.command = context.commandEnvelope;
                context.publish(envelope);
            }
            else {
                this.publishEvent(envelope);
            }
        }
    }
    _internalRegisterCommandHandler(handler) {
        this._commandHandlers.set(handler.commandType, handler);
        this._kernelInfo.supportedKernelCommands = Array.from(this._commandHandlers.keys()).map(commandName => ({ name: commandName }));
    }
    getHandlingKernel(commandEnvelope, context) {
        if (this.canHandle(commandEnvelope)) {
            return this;
        }
        else {
            context === null || context === void 0 ? void 0 : context.fail(`Command ${commandEnvelope.commandType} is not supported by Kernel ${this.name}`);
            return null;
        }
    }
    publishEvent(kernelEvent) {
        this._eventSubject.next(kernelEvent);
    }
}
function getKernelUri(kernel) {
    var _a;
    return (_a = kernel.kernelInfo.uri) !== null && _a !== void 0 ? _a : `kernel://local/${kernel.kernelInfo.localName}`;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class CompositeKernel extends Kernel {
    constructor(name) {
        super(name);
        this._host = null;
        this._defaultKernelNamesByCommandType = new Map();
        this.kernelInfo.isComposite = true;
        this._childKernels = new KernelCollection(this);
    }
    get childKernels() {
        return Array.from(this._childKernels);
    }
    get host() {
        return this._host;
    }
    set host(host) {
        this._host = host;
        if (this._host) {
            this.kernelInfo.uri = this._host.uri;
            this._childKernels.notifyThatHostWasSet();
        }
    }
    handleRequestKernelInfo(invocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventEnvelope = {
                eventType: KernelInfoProducedType,
                command: invocation.commandEnvelope,
                event: { kernelInfo: this.kernelInfo }
            }; //?
            invocation.context.publish(eventEnvelope);
            for (let kernel of this._childKernels) {
                if (kernel.supportsCommand(invocation.commandEnvelope.commandType)) {
                    const childCommand = {
                        commandType: RequestKernelInfoType,
                        command: {
                            targetKernelName: kernel.kernelInfo.localName
                        },
                        routingSlip: []
                    };
                    continueCommandRoutingSlip(childCommand, invocation.commandEnvelope.routingSlip || []);
                    yield kernel.handleCommand(childCommand);
                }
            }
        });
    }
    add(kernel, aliases) {
        if (!kernel) {
            throw new Error("kernel cannot be null or undefined");
        }
        if (!this.defaultKernelName) {
            // default to first kernel
            this.defaultKernelName = kernel.name;
        }
        kernel.parentKernel = this;
        kernel.rootKernel = this.rootKernel;
        kernel.kernelEvents.subscribe({
            next: (event) => {
                const kernelUri = getKernelUri(this);
                if (!eventRoutingSlipContains(event, kernelUri)) {
                    stampEventRoutingSlip(event, kernelUri);
                }
                this.publishEvent(event);
            }
        });
        if (aliases) {
            let set = new Set(aliases);
            if (kernel.kernelInfo.aliases) {
                for (let alias in kernel.kernelInfo.aliases) {
                    set.add(alias);
                }
            }
            kernel.kernelInfo.aliases = Array.from(set);
        }
        this._childKernels.add(kernel, aliases);
        const invocationContext = KernelInvocationContext.current;
        if (invocationContext) {
            invocationContext.commandEnvelope; //?
            invocationContext.publish({
                eventType: KernelInfoProducedType,
                event: {
                    kernelInfo: kernel.kernelInfo
                },
                command: invocationContext.commandEnvelope
            });
        }
        else {
            this.publishEvent({
                eventType: KernelInfoProducedType,
                event: {
                    kernelInfo: kernel.kernelInfo
                }
            });
        }
    }
    findKernelByUri(uri) {
        const normalized = createKernelUri(uri);
        if (this.kernelInfo.uri === normalized) {
            return this;
        }
        return this._childKernels.tryGetByUri(normalized);
    }
    findKernelByName(name) {
        if (this.kernelInfo.localName === name || this.kernelInfo.aliases.find(a => a === name)) {
            return this;
        }
        return this._childKernels.tryGetByAlias(name);
    }
    findKernels(predicate) {
        var results = [];
        if (predicate(this)) {
            results.push(this);
        }
        for (let kernel of this.childKernels) {
            if (predicate(kernel)) {
                results.push(kernel);
            }
        }
        return results;
    }
    findKernel(predicate) {
        if (predicate(this)) {
            return this;
        }
        return this.childKernels.find(predicate);
    }
    setDefaultTargetKernelNameForCommand(commandType, kernelName) {
        this._defaultKernelNamesByCommandType.set(commandType, kernelName);
    }
    handleCommand(commandEnvelope) {
        var _a;
        const invocationContext = KernelInvocationContext.current;
        let kernel = commandEnvelope.command.targetKernelName === this.name
            ? this
            : this.getHandlingKernel(commandEnvelope, invocationContext);
        const previusoHandlingKernel = (_a = invocationContext === null || invocationContext === void 0 ? void 0 : invocationContext.handlingKernel) !== null && _a !== void 0 ? _a : null;
        if (kernel === this) {
            if (invocationContext !== null) {
                invocationContext.handlingKernel = kernel;
            }
            return super.handleCommand(commandEnvelope).finally(() => {
                if (invocationContext !== null) {
                    invocationContext.handlingKernel = previusoHandlingKernel;
                }
            });
        }
        else if (kernel) {
            if (invocationContext !== null) {
                invocationContext.handlingKernel = kernel;
            }
            const kernelUri = getKernelUri(kernel);
            if (!commandRoutingSlipContains(commandEnvelope, kernelUri)) {
                stampCommandRoutingSlipAsArrived(commandEnvelope, kernelUri);
            }
            else {
                Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as arrived but uri ${kernelUri} is already present.`);
            }
            return kernel.handleCommand(commandEnvelope).finally(() => {
                if (invocationContext !== null) {
                    invocationContext.handlingKernel = previusoHandlingKernel;
                }
                if (!commandRoutingSlipContains(commandEnvelope, kernelUri)) {
                    stampCommandRoutingSlip(commandEnvelope, kernelUri);
                }
                else {
                    Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as completed but uri ${kernelUri} is already present.`);
                }
            });
        }
        if (invocationContext !== null) {
            invocationContext.handlingKernel = previusoHandlingKernel;
        }
        return Promise.reject(new Error("Kernel not found: " + commandEnvelope.command.targetKernelName));
    }
    getHandlingKernel(commandEnvelope, context) {
        var _a, _b, _c, _d, _e;
        let kernel = null;
        if (commandEnvelope.command.destinationUri) {
            const normalized = createKernelUri(commandEnvelope.command.destinationUri);
            kernel = (_a = this._childKernels.tryGetByUri(normalized)) !== null && _a !== void 0 ? _a : null;
            if (kernel) {
                return kernel;
            }
        }
        let targetKernelName = commandEnvelope.command.targetKernelName;
        if (targetKernelName === undefined || targetKernelName === null) {
            if (this.canHandle(commandEnvelope)) {
                return this;
            }
            targetKernelName = (_b = this._defaultKernelNamesByCommandType.get(commandEnvelope.commandType)) !== null && _b !== void 0 ? _b : this.defaultKernelName;
        }
        if (targetKernelName !== undefined && targetKernelName !== null) {
            kernel = (_c = this._childKernels.tryGetByAlias(targetKernelName)) !== null && _c !== void 0 ? _c : null;
        }
        if (targetKernelName && !kernel) {
            const errorMessage = `Kernel not found: ${targetKernelName}`;
            Logger.default.error(errorMessage);
            throw new Error(errorMessage);
        }
        if (!kernel) {
            if (this._childKernels.count === 1) {
                kernel = (_d = this._childKernels.single()) !== null && _d !== void 0 ? _d : null;
            }
        }
        if (!kernel) {
            kernel = (_e = context === null || context === void 0 ? void 0 : context.handlingKernel) !== null && _e !== void 0 ? _e : null;
        }
        return kernel !== null && kernel !== void 0 ? kernel : this;
    }
}
class KernelCollection {
    constructor(compositeKernel) {
        this._kernels = [];
        this._nameAndAliasesByKernel = new Map();
        this._kernelsByNameOrAlias = new Map();
        this._kernelsByLocalUri = new Map();
        this._kernelsByRemoteUri = new Map();
        this._compositeKernel = compositeKernel;
    }
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next: () => {
                return {
                    value: this._kernels[counter++],
                    done: counter > this._kernels.length //?
                };
            }
        };
    }
    single() {
        return this._kernels.length === 1 ? this._kernels[0] : undefined;
    }
    add(kernel, aliases) {
        if (this._kernelsByNameOrAlias.has(kernel.name)) {
            throw new Error(`kernel with name ${kernel.name} already exists`);
        }
        this.updateKernelInfoAndIndex(kernel, aliases);
        this._kernels.push(kernel);
    }
    get count() {
        return this._kernels.length;
    }
    updateKernelInfoAndIndex(kernel, aliases) {
        var _a, _b;
        if (aliases) {
            for (let alias of aliases) {
                if (this._kernelsByNameOrAlias.has(alias)) {
                    throw new Error(`kernel with alias ${alias} already exists`);
                }
            }
        }
        if (!this._nameAndAliasesByKernel.has(kernel)) {
            let set = new Set();
            for (let alias of kernel.kernelInfo.aliases) {
                set.add(alias);
            }
            kernel.kernelInfo.aliases = Array.from(set);
            set.add(kernel.kernelInfo.localName);
            this._nameAndAliasesByKernel.set(kernel, set);
        }
        if (aliases) {
            for (let alias of aliases) {
                this._nameAndAliasesByKernel.get(kernel).add(alias);
            }
        }
        (_a = this._nameAndAliasesByKernel.get(kernel)) === null || _a === void 0 ? void 0 : _a.forEach(alias => {
            this._kernelsByNameOrAlias.set(alias, kernel);
        });
        let baseUri = ((_b = this._compositeKernel.host) === null || _b === void 0 ? void 0 : _b.uri) || this._compositeKernel.kernelInfo.uri;
        if (!baseUri.endsWith("/")) {
            baseUri += "/";
        }
        kernel.kernelInfo.uri = createKernelUri(`${baseUri}${kernel.kernelInfo.localName}`); //?
        this._kernelsByLocalUri.set(kernel.kernelInfo.uri, kernel);
        if (kernel.kernelInfo.isProxy) {
            this._kernelsByRemoteUri.set(kernel.kernelInfo.remoteUri, kernel);
        }
    }
    tryGetByAlias(alias) {
        return this._kernelsByNameOrAlias.get(alias);
    }
    tryGetByUri(uri) {
        let kernel = this._kernelsByLocalUri.get(uri) || this._kernelsByRemoteUri.get(uri);
        return kernel;
    }
    notifyThatHostWasSet() {
        for (let kernel of this._kernels) {
            this.updateKernelInfoAndIndex(kernel);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class ConsoleCapture {
    constructor() {
        this.originalConsole = console;
        console = this;
    }
    set kernelInvocationContext(value) {
        this._kernelInvocationContext = value;
    }
    assert(value, message, ...optionalParams) {
        this.originalConsole.assert(value, message, optionalParams);
    }
    clear() {
        this.originalConsole.clear();
    }
    count(label) {
        this.originalConsole.count(label);
    }
    countReset(label) {
        this.originalConsole.countReset(label);
    }
    debug(message, ...optionalParams) {
        this.originalConsole.debug(message, optionalParams);
    }
    dir(obj, options) {
        this.originalConsole.dir(obj, options);
    }
    dirxml(...data) {
        this.originalConsole.dirxml(data);
    }
    error(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.error, ...[message, ...optionalParams]);
    }
    group(...label) {
        this.originalConsole.group(label);
    }
    groupCollapsed(...label) {
        this.originalConsole.groupCollapsed(label);
    }
    groupEnd() {
        this.originalConsole.groupEnd();
    }
    info(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.info, ...[message, ...optionalParams]);
    }
    log(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.log, ...[message, ...optionalParams]);
    }
    table(tabularData, properties) {
        this.originalConsole.table(tabularData, properties);
    }
    time(label) {
        this.originalConsole.time(label);
    }
    timeEnd(label) {
        this.originalConsole.timeEnd(label);
    }
    timeLog(label, ...data) {
        this.originalConsole.timeLog(label, data);
    }
    timeStamp(label) {
        this.originalConsole.timeStamp(label);
    }
    trace(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.trace, ...[message, ...optionalParams]);
    }
    warn(message, ...optionalParams) {
        this.originalConsole.warn(message, optionalParams);
    }
    profile(label) {
        this.originalConsole.profile(label);
    }
    profileEnd(label) {
        this.originalConsole.profileEnd(label);
    }
    dispose() {
        console = this.originalConsole;
    }
    redirectAndPublish(target, ...args) {
        if (this._kernelInvocationContext) {
            for (const arg of args) {
                let mimeType;
                let value;
                if (typeof arg !== 'object' && !Array.isArray(arg)) {
                    mimeType = 'text/plain';
                    value = arg === null || arg === void 0 ? void 0 : arg.toString();
                }
                else {
                    mimeType = 'application/json';
                    value = JSON.stringify(arg);
                }
                const displayedValue = {
                    formattedValues: [
                        {
                            mimeType,
                            value,
                        }
                    ]
                };
                const eventEnvelope = {
                    eventType: DisplayedValueProducedType,
                    event: displayedValue,
                    command: this._kernelInvocationContext.commandEnvelope
                };
                this._kernelInvocationContext.publish(eventEnvelope);
            }
        }
        if (target) {
            target(...args);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class JavascriptKernel extends Kernel {
    constructor(name) {
        super(name !== null && name !== void 0 ? name : "javascript", "JavaScript");
        this.kernelInfo.displayName = `${this.kernelInfo.localName} - ${this.kernelInfo.languageName}`;
        this.suppressedLocals = new Set(this.allLocalVariableNames());
        this.registerCommandHandler({ commandType: SubmitCodeType, handle: invocation => this.handleSubmitCode(invocation) });
        this.registerCommandHandler({ commandType: RequestValueInfosType, handle: invocation => this.handleRequestValueInfos(invocation) });
        this.registerCommandHandler({ commandType: RequestValueType, handle: invocation => this.handleRequestValue(invocation) });
        this.registerCommandHandler({ commandType: SendValueType, handle: invocation => this.handleSendValue(invocation) });
        this.capture = new ConsoleCapture();
    }
    handleSendValue(invocation) {
        const sendValue = invocation.commandEnvelope.command;
        if (sendValue.formattedValue) {
            switch (sendValue.formattedValue.mimeType) {
                case 'application/json':
                    globalThis[sendValue.name] = JSON.parse(sendValue.formattedValue.value);
                    break;
                default:
                    globalThis[sendValue.name] = sendValue.formattedValue.value;
                    break;
            }
            return Promise.resolve();
        }
        throw new Error("formattedValue is required");
    }
    handleSubmitCode(invocation) {
        const _super = Object.create(null, {
            kernelInfo: { get: () => super.kernelInfo }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const submitCode = invocation.commandEnvelope.command;
            const code = submitCode.code;
            _super.kernelInfo.localName; //?
            _super.kernelInfo.uri; //?
            _super.kernelInfo.remoteUri; //?
            invocation.context.publish({ eventType: CodeSubmissionReceivedType, event: { code }, command: invocation.commandEnvelope });
            invocation.context.commandEnvelope.routingSlip; //?
            this.capture.kernelInvocationContext = invocation.context;
            let result = undefined;
            try {
                const AsyncFunction = eval(`Object.getPrototypeOf(async function(){}).constructor`);
                const evaluator = AsyncFunction("console", code);
                result = yield evaluator(this.capture);
                if (result !== undefined) {
                    const formattedValue = formatValue(result, 'application/json');
                    const event = {
                        formattedValues: [formattedValue]
                    };
                    invocation.context.publish({ eventType: ReturnValueProducedType, event, command: invocation.commandEnvelope });
                }
            }
            catch (e) {
                throw e; //?
            }
            finally {
                this.capture.kernelInvocationContext = undefined;
            }
        });
    }
    handleRequestValueInfos(invocation) {
        const valueInfos = this.allLocalVariableNames().filter(v => !this.suppressedLocals.has(v)).map(v => ({
            name: v,
            typeName: getType(this.getLocalVariable(v)),
            formattedValue: formatValue(this.getLocalVariable(v), "text/plain"),
            preferredMimeTypes: []
        }));
        const event = {
            valueInfos
        };
        invocation.context.publish({ eventType: ValueInfosProducedType, event, command: invocation.commandEnvelope });
        return Promise.resolve();
    }
    handleRequestValue(invocation) {
        const requestValue = invocation.commandEnvelope.command;
        const rawValue = this.getLocalVariable(requestValue.name);
        const formattedValue = formatValue(rawValue, requestValue.mimeType || 'application/json');
        Logger.default.info(`returning ${JSON.stringify(formattedValue)} for ${requestValue.name}`);
        const event = {
            name: requestValue.name,
            formattedValue
        };
        invocation.context.publish({ eventType: ValueProducedType, event, command: invocation.commandEnvelope });
        return Promise.resolve();
    }
    allLocalVariableNames() {
        const result = [];
        try {
            for (const key in globalThis) {
                try {
                    if (typeof globalThis[key] !== 'function') {
                        result.push(key);
                    }
                }
                catch (e) {
                    Logger.default.error(`error getting value for ${key} : ${e}`);
                }
            }
        }
        catch (e) {
            Logger.default.error(`error scanning globla variables : ${e}`);
        }
        return result;
    }
    getLocalVariable(name) {
        return globalThis[name];
    }
}
function formatValue(arg, mimeType) {
    let value;
    switch (mimeType) {
        case 'text/plain':
            value = (arg === null || arg === void 0 ? void 0 : arg.toString()) || 'undefined';
            if (Array.isArray(arg)) {
                value = `[${value}]`;
            }
            break;
        case 'application/json':
            value = JSON.stringify(arg);
            break;
        default:
            throw new Error(`unsupported mime type: ${mimeType}`);
    }
    return {
        mimeType,
        value,
    };
}
function getType(arg) {
    let type = arg ? typeof (arg) : ""; //?
    if (Array.isArray(arg)) {
        type = `${typeof (arg[0])}[]`; //?
    }
    return type; //?
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function isKernelCommandEnvelope(commandOrEvent) {
    return commandOrEvent.commandType !== undefined;
}
function isKernelEventEnvelope(commandOrEvent) {
    return commandOrEvent.eventType !== undefined;
}
class KernelCommandAndEventReceiver {
    constructor(observer) {
        this._disposables = [];
        this._observable = observer;
    }
    subscribe(observer) {
        return this._observable.subscribe(observer);
    }
    dispose() {
        for (let disposable of this._disposables) {
            disposable.dispose();
        }
    }
    static FromObservable(observable) {
        return new KernelCommandAndEventReceiver(observable);
    }
    static FromEventListener(args) {
        let subject = new Subject();
        const listener = (e) => {
            let mapped = args.map(e);
            subject.next(mapped);
        };
        args.eventTarget.addEventListener(args.event, listener);
        const ret = new KernelCommandAndEventReceiver(subject);
        ret._disposables.push({
            dispose: () => {
                args.eventTarget.removeEventListener(args.event, listener);
            }
        });
        args.eventTarget.removeEventListener(args.event, listener);
        return ret;
    }
}
function isObservable(source) {
    return source.next !== undefined;
}
class KernelCommandAndEventSender {
    constructor() {
    }
    send(kernelCommandOrEventEnvelope) {
        if (this._sender) {
            try {
                const serislized = JSON.parse(JSON.stringify(kernelCommandOrEventEnvelope));
                if (typeof this._sender === "function") {
                    this._sender(serislized);
                }
                else if (isObservable(this._sender)) {
                    this._sender.next(serislized);
                }
                else {
                    return Promise.reject(new Error("Sender is not set"));
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            return Promise.resolve();
        }
        return Promise.reject(new Error("Sender is not set"));
    }
    static FromObserver(observer) {
        const sender = new KernelCommandAndEventSender();
        sender._sender = observer;
        return sender;
    }
    static FromFunction(send) {
        const sender = new KernelCommandAndEventSender();
        sender._sender = send;
        return sender;
    }
}
const onKernelInfoUpdates = [];
function notifyOfKernelInfoUpdates(compositeKernel) {
    for (const updater of onKernelInfoUpdates) {
        updater(compositeKernel);
    }
}
function ensureOrUpdateProxyForKernelInfo(kernelInfo, compositeKernel) {
    if (kernelInfo.isProxy) {
        const host = extractHostAndNomalize(kernelInfo.remoteUri);
        if (host === extractHostAndNomalize(compositeKernel.kernelInfo.uri)) {
            Logger.default.warn(`skippin creation of proxy for a proxy kernel : [${JSON.stringify(kernelInfo)}]`);
            return;
        }
    }
    const uriToLookup = kernelInfo.isProxy ? kernelInfo.remoteUri : kernelInfo.uri;
    if (uriToLookup) {
        let kernel = compositeKernel.findKernelByUri(uriToLookup);
        if (!kernel) {
            // add
            if (compositeKernel.host) {
                Logger.default.info(`creating proxy for uri[${uriToLookup}]with info ${JSON.stringify(kernelInfo)}`);
                // check for clash with `kernelInfo.localName`
                kernel = compositeKernel.host.connectProxyKernel(kernelInfo.localName, uriToLookup, kernelInfo.aliases);
                updateKernelInfo(kernel.kernelInfo, kernelInfo);
            }
            else {
                throw new Error('no kernel host found');
            }
        }
        else {
            Logger.default.info(`patching proxy for uri[${uriToLookup}]with info ${JSON.stringify(kernelInfo)} `);
        }
        if (kernel.kernelInfo.isProxy) {
            // patch
            updateKernelInfo(kernel.kernelInfo, kernelInfo);
        }
        notifyOfKernelInfoUpdates(compositeKernel);
    }
}
function updateKernelInfo(destination, source) {
    var _a, _b;
    destination.languageName = (_a = source.languageName) !== null && _a !== void 0 ? _a : destination.languageName;
    destination.languageVersion = (_b = source.languageVersion) !== null && _b !== void 0 ? _b : destination.languageVersion;
    destination.displayName = source.displayName;
    destination.isComposite = source.isComposite;
    if (source.displayName) {
        destination.displayName = source.displayName;
    }
    const supportedDirectives = new Set();
    const supportedCommands = new Set();
    if (!destination.supportedDirectives) {
        destination.supportedDirectives = [];
    }
    if (!destination.supportedKernelCommands) {
        destination.supportedKernelCommands = [];
    }
    for (const supportedDirective of destination.supportedDirectives) {
        supportedDirectives.add(supportedDirective.name);
    }
    for (const supportedCommand of destination.supportedKernelCommands) {
        supportedCommands.add(supportedCommand.name);
    }
    for (const supportedDirective of source.supportedDirectives) {
        if (!supportedDirectives.has(supportedDirective.name)) {
            supportedDirectives.add(supportedDirective.name);
            destination.supportedDirectives.push(supportedDirective);
        }
    }
    for (const supportedCommand of source.supportedKernelCommands) {
        if (!supportedCommands.has(supportedCommand.name)) {
            supportedCommands.add(supportedCommand.name);
            destination.supportedKernelCommands.push(supportedCommand);
        }
    }
}
class Connector {
    constructor(configuration) {
        this._remoteUris = new Set();
        this._receiver = configuration.receiver;
        this._sender = configuration.sender;
        if (configuration.remoteUris) {
            for (const remoteUri of configuration.remoteUris) {
                const uri = extractHostAndNomalize(remoteUri);
                if (uri) {
                    this._remoteUris.add(uri);
                }
            }
        }
        this._listener = this._receiver.subscribe({
            next: (kernelCommandOrEventEnvelope) => {
                var _a, _b;
                if (isKernelEventEnvelope(kernelCommandOrEventEnvelope)) {
                    if (kernelCommandOrEventEnvelope.eventType === KernelInfoProducedType) {
                        const event = kernelCommandOrEventEnvelope.event;
                        if (!event.kernelInfo.remoteUri) {
                            const uri = extractHostAndNomalize(event.kernelInfo.uri);
                            if (uri) {
                                this._remoteUris.add(uri);
                            }
                        }
                    }
                    if (((_b = (_a = kernelCommandOrEventEnvelope.routingSlip) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
                        const eventOrigin = kernelCommandOrEventEnvelope.routingSlip[0];
                        const uri = extractHostAndNomalize(eventOrigin);
                        if (uri) {
                            this._remoteUris.add(uri);
                        }
                    }
                }
            }
        });
    }
    get remoteHostUris() {
        return Array.from(this._remoteUris.values());
    }
    get sender() {
        return this._sender;
    }
    get receiver() {
        return this._receiver;
    }
    addRemoteHostUri(remoteUri) {
        const uri = extractHostAndNomalize(remoteUri);
        if (uri) {
            this._remoteUris.add(uri);
        }
    }
    canReach(remoteUri) {
        const host = extractHostAndNomalize(remoteUri); //?
        if (host) {
            return this._remoteUris.has(host);
        }
        return false;
    }
    dispose() {
        this._listener.unsubscribe();
    }
}
function extractHostAndNomalize(kernelUri) {
    var _a;
    const filter = /(?<host>.+:\/\/[^\/]+)(\/[^\/])*/gi;
    const match = filter.exec(kernelUri); //?
    if ((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.host) {
        const host = match.groups.host;
        return host; //?
    }
    return "";
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class ProxyKernel extends Kernel {
    constructor(name, _sender, _receiver, languageName, languageVersion) {
        super(name, languageName, languageVersion);
        this.name = name;
        this._sender = _sender;
        this._receiver = _receiver;
        this.kernelInfo.isProxy = true;
    }
    getCommandHandler(commandType) {
        return {
            commandType,
            handle: (invocation) => {
                return this._commandHandler(invocation);
            }
        };
    }
    delegatePublication(envelope, invocationContext) {
        let alreadyBeenSeen = false;
        const kernelUri = getKernelUri(this);
        if (kernelUri && !eventRoutingSlipContains(envelope, kernelUri)) {
            stampEventRoutingSlip(envelope, kernelUri);
        }
        else {
            alreadyBeenSeen = true;
        }
        if (this.hasSameOrigin(envelope)) {
            if (!alreadyBeenSeen) {
                invocationContext.publish(envelope);
            }
        }
    }
    hasSameOrigin(envelope) {
        var _a, _b, _c;
        let commandOriginUri = (_c = (_b = (_a = envelope.command) === null || _a === void 0 ? void 0 : _a.command) === null || _b === void 0 ? void 0 : _b.originUri) !== null && _c !== void 0 ? _c : this.kernelInfo.uri;
        if (commandOriginUri === this.kernelInfo.uri) {
            return true;
        }
        return commandOriginUri === null;
    }
    updateKernelInfoFromEvent(kernelInfoProduced) {
        updateKernelInfo(this.kernelInfo, kernelInfoProduced.kernelInfo);
    }
    _commandHandler(commandInvocation) {
        var _a, _b;
        var _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            this.ensureCommandTokenAndId(commandInvocation.commandEnvelope);
            const commandToken = commandInvocation.commandEnvelope.token;
            const commandId = commandInvocation.commandEnvelope.id;
            const completionSource = new PromiseCompletionSource();
            // fix : is this the right way? We are trying to avoid forwarding events we just did forward
            let eventSubscription = this._receiver.subscribe({
                next: (envelope) => {
                    var _a, _b, _c, _d;
                    if (isKernelEventEnvelope(envelope)) {
                        if (envelope.eventType === KernelInfoProducedType &&
                            (envelope.command === null || envelope.command === undefined)) {
                            const kernelInfoProduced = envelope.event;
                            kernelInfoProduced.kernelInfo; //?
                            this.kernelInfo; //?
                            if (kernelInfoProduced.kernelInfo.uri === this.kernelInfo.remoteUri) {
                                this.updateKernelInfoFromEvent(kernelInfoProduced);
                                this.publishEvent({
                                    eventType: KernelInfoProducedType,
                                    event: { kernelInfo: this.kernelInfo }
                                });
                            }
                        }
                        else if (envelope.command.token === commandToken) {
                            Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] processing event, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                            Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] processing event, ${JSON.stringify(envelope)}`);
                            try {
                                const original = [...(_b = (_a = commandInvocation.commandEnvelope) === null || _a === void 0 ? void 0 : _a.routingSlip) !== null && _b !== void 0 ? _b : []];
                                continueCommandRoutingSlip(commandInvocation.commandEnvelope, envelope.command.routingSlip);
                                envelope.command.routingSlip = [...(_c = commandInvocation.commandEnvelope.routingSlip) !== null && _c !== void 0 ? _c : []]; //?
                                Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, command routingSlip :${original}] has changed to: ${JSON.stringify((_d = commandInvocation.commandEnvelope.routingSlip) !== null && _d !== void 0 ? _d : [])}`);
                            }
                            catch (e) {
                                Logger.default.error(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, error ${e === null || e === void 0 ? void 0 : e.message}`);
                            }
                            switch (envelope.eventType) {
                                case KernelInfoProducedType:
                                    {
                                        const kernelInfoProduced = envelope.event;
                                        if (kernelInfoProduced.kernelInfo.uri === this.kernelInfo.remoteUri) {
                                            this.updateKernelInfoFromEvent(kernelInfoProduced);
                                            this.delegatePublication({
                                                eventType: KernelInfoProducedType,
                                                event: { kernelInfo: this.kernelInfo },
                                                routingSlip: envelope.routingSlip,
                                                command: commandInvocation.commandEnvelope
                                            }, commandInvocation.context);
                                            this.delegatePublication(envelope, commandInvocation.context);
                                        }
                                        else {
                                            this.delegatePublication(envelope, commandInvocation.context);
                                        }
                                    }
                                    break;
                                case CommandCancelledType:
                                case CommandFailedType:
                                case CommandSucceededType:
                                    Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] finished, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                                    if (envelope.command.id === commandId) {
                                        Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] resolving promise, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                                        completionSource.resolve(envelope);
                                    }
                                    else {
                                        Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] not resolving promise, envelopeid=${envelope.command.id}, commandid=${commandId}`);
                                        this.delegatePublication(envelope, commandInvocation.context);
                                    }
                                    break;
                                default:
                                    this.delegatePublication(envelope, commandInvocation.context);
                                    break;
                            }
                        }
                    }
                }
            });
            try {
                if (!commandInvocation.commandEnvelope.command.destinationUri || !commandInvocation.commandEnvelope.command.originUri) {
                    (_a = (_c = commandInvocation.commandEnvelope.command).originUri) !== null && _a !== void 0 ? _a : (_c.originUri = this.kernelInfo.uri);
                    (_b = (_d = commandInvocation.commandEnvelope.command).destinationUri) !== null && _b !== void 0 ? _b : (_d.destinationUri = this.kernelInfo.remoteUri);
                }
                commandInvocation.commandEnvelope.routingSlip; //?
                if (commandInvocation.commandEnvelope.commandType === RequestKernelInfoType) {
                    const destinationUri = this.kernelInfo.remoteUri;
                    if (commandRoutingSlipContains(commandInvocation.commandEnvelope, destinationUri, true)) {
                        return Promise.resolve();
                    }
                }
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] forwarding command ${commandInvocation.commandEnvelope.commandType} to ${commandInvocation.commandEnvelope.command.destinationUri}`);
                this._sender.send(commandInvocation.commandEnvelope);
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] about to await with token ${commandToken} and  commandid ${commandId}`);
                const enventEnvelope = yield completionSource.promise;
                if (enventEnvelope.eventType === CommandFailedType) {
                    commandInvocation.context.fail(enventEnvelope.event.message);
                }
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] done awaiting with token ${commandToken}} and  commandid ${commandId}`);
            }
            catch (e) {
                commandInvocation.context.fail(e.message);
            }
            finally {
                eventSubscription.unsubscribe();
            }
        });
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelHost {
    constructor(kernel, sender, receiver, hostUri) {
        this._remoteUriToKernel = new Map();
        this._uriToKernel = new Map();
        this._kernelToKernelInfo = new Map();
        this._connectors = [];
        this._kernel = kernel;
        this._uri = createKernelUri(hostUri || "kernel://vscode");
        this._kernel.host = this;
        this._scheduler = new KernelScheduler();
        this._scheduler.setMustTrampoline((c => {
            return (c.commandType === RequestInputType) || (c.commandType === SendEditableCodeType);
        }));
        this._defaultConnector = new Connector({ sender, receiver });
        this._connectors.push(this._defaultConnector);
    }
    get defaultConnector() {
        return this._defaultConnector;
    }
    get uri() {
        return this._uri;
    }
    get kernel() {
        return this._kernel;
    }
    tryGetKernelByRemoteUri(remoteUri) {
        return this._remoteUriToKernel.get(remoteUri);
    }
    trygetKernelByOriginUri(originUri) {
        return this._uriToKernel.get(originUri);
    }
    tryGetKernelInfo(kernel) {
        return this._kernelToKernelInfo.get(kernel);
    }
    addKernelInfo(kernel, kernelInfo) {
        kernelInfo.uri = createKernelUri(`${this._uri}${kernel.name}`);
        this._kernelToKernelInfo.set(kernel, kernelInfo);
        this._uriToKernel.set(kernelInfo.uri, kernel);
    }
    getKernel(kernelCommandEnvelope) {
        var _a;
        const uriToLookup = (_a = kernelCommandEnvelope.command.destinationUri) !== null && _a !== void 0 ? _a : kernelCommandEnvelope.command.originUri;
        let kernel = undefined;
        if (uriToLookup) {
            kernel = this._kernel.findKernelByUri(uriToLookup);
        }
        if (!kernel) {
            if (kernelCommandEnvelope.command.targetKernelName) {
                kernel = this._kernel.findKernelByName(kernelCommandEnvelope.command.targetKernelName);
            }
        }
        kernel !== null && kernel !== void 0 ? kernel : (kernel = this._kernel);
        Logger.default.info(`Using Kernel ${kernel.name}`);
        return kernel;
    }
    connectProxyKernelOnDefaultConnector(localName, remoteKernelUri, aliases) {
        return this.connectProxyKernelOnConnector(localName, this._defaultConnector.sender, this._defaultConnector.receiver, remoteKernelUri, aliases);
    }
    tryAddConnector(connector) {
        if (!connector.remoteUris) {
            this._connectors.push(new Connector(connector));
            return true;
        }
        else {
            const found = connector.remoteUris.find(uri => this._connectors.find(c => c.canReach(uri)));
            if (!found) {
                this._connectors.push(new Connector(connector));
                return true;
            }
            return false;
        }
    }
    tryRemoveConnector(connector) {
        if (!connector.remoteUris) {
            for (let uri of connector.remoteUris) {
                const index = this._connectors.findIndex(c => c.canReach(uri));
                if (index >= 0) {
                    this._connectors.splice(index, 1);
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    connectProxyKernel(localName, remoteKernelUri, aliases) {
        this._connectors; //?
        const connector = this._connectors.find(c => c.canReach(remoteKernelUri));
        if (!connector) {
            throw new Error(`Cannot find connector to reach ${remoteKernelUri}`);
        }
        let kernel = new ProxyKernel(localName, connector.sender, connector.receiver);
        kernel.kernelInfo.remoteUri = remoteKernelUri;
        this._kernel.add(kernel, aliases);
        return kernel;
    }
    connectProxyKernelOnConnector(localName, sender, receiver, remoteKernelUri, aliases) {
        let kernel = new ProxyKernel(localName, sender, receiver);
        kernel.kernelInfo.remoteUri = remoteKernelUri;
        this._kernel.add(kernel, aliases);
        return kernel;
    }
    tryGetConnector(remoteUri) {
        return this._connectors.find(c => c.canReach(remoteUri));
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this._kernel.subscribeToKernelEvents(e => {
                Logger.default.info(`KernelHost forwarding event: ${JSON.stringify(e)}`);
                this._defaultConnector.sender.send(e);
            });
            this._defaultConnector.receiver.subscribe({
                next: (kernelCommandOrEventEnvelope) => {
                    if (isKernelCommandEnvelope(kernelCommandOrEventEnvelope)) {
                        Logger.default.info(`KernelHost dispacthing command: ${JSON.stringify(kernelCommandOrEventEnvelope)}`);
                        this._scheduler.runAsync(kernelCommandOrEventEnvelope, commandEnvelope => {
                            const kernel = this._kernel;
                            return kernel.send(commandEnvelope);
                        });
                    }
                }
            });
            const kernelInfos = [this._kernel.kernelInfo, ...Array.from(this._kernel.childKernels.map(k => k.kernelInfo).filter(ki => ki.isProxy === false))];
            const kernekReady = {
                kernelInfos: kernelInfos
            };
            yield this._defaultConnector.sender.send({ eventType: KernelReadyType, event: kernekReady, routingSlip: [this._kernel.kernelInfo.uri] });
            return kernekReady;
        });
    }
    getKernelInfos() {
        let kernelInfos = [this._kernel.kernelInfo];
        for (let kernel of this._kernel.childKernels) {
            kernelInfos.push(kernel.kernelInfo);
        }
        return kernelInfos;
    }
    getKernelInfoProduced() {
        let events = Array.from(this.getKernelInfos().map(kernelInfo => ({ eventType: KernelInfoProducedType, event: { kernelInfo: kernelInfo }, routingSlip: [kernelInfo.uri] })));
        return events;
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function createHost(global, compositeKernelName, configureRequire, logMessage, localToRemote, remoteToLocal, onReady) {
    Logger.configure(compositeKernelName, logMessage);
    global.interactive = {};
    configureRequire(global.interactive);
    const compositeKernel = new CompositeKernel(compositeKernelName);
    const kernelHost = new KernelHost(compositeKernel, KernelCommandAndEventSender.FromObserver(localToRemote), KernelCommandAndEventReceiver.FromObservable(remoteToLocal), `kernel://${compositeKernelName}`);
    kernelHost.defaultConnector.receiver.subscribe({
        next: (envelope) => {
            if (isKernelEventEnvelope(envelope) && envelope.eventType === KernelInfoProducedType) {
                const kernelInfoProduced = envelope.event;
                ensureOrUpdateProxyForKernelInfo(kernelInfoProduced.kernelInfo, compositeKernel);
            }
        }
    });
    // use composite kernel as root
    global.kernel = {
        get root() {
            return compositeKernel;
        }
    };
    global[compositeKernelName] = {
        compositeKernel,
        kernelHost,
    };
    const jsKernel = new JavascriptKernel();
    compositeKernel.add(jsKernel, ["js"]);
    kernelHost.connect();
    onReady();
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function activate(context) {
    configure(window, context);
    Logger.default.info(`set up 'webview' host module complete`);
}
function configure(global, context) {
    if (!global) {
        global = window;
    }
    const remoteToLocal = new Subject();
    const localToRemote = new Subject();
    localToRemote.subscribe({
        next: envelope => {
            context.postKernelMessage({ envelope });
        }
    });
    const webViewId = v4();
    context.onDidReceiveKernelMessage((arg) => {
        var _a, _b;
        if (arg.envelope && arg.webViewId === webViewId) {
            const envelope = (arg.envelope);
            if (isKernelEventEnvelope(envelope)) {
                Logger.default.info(`channel got ${envelope.eventType} with token ${(_a = envelope.command) === null || _a === void 0 ? void 0 : _a.token} and id ${(_b = envelope.command) === null || _b === void 0 ? void 0 : _b.id}`);
            }
            remoteToLocal.next(envelope);
        }
        else if (arg.webViewId === webViewId) {
            const kernelHost = (global['webview'].kernelHost);
            if (kernelHost) {
                switch (arg.preloadCommand) {
                    case '#!connect': {
                        Logger.default.info(`connecting to kernels from extension host`);
                        const kernelInfos = (arg.kernelInfos);
                        for (const kernelInfo of kernelInfos) {
                            const remoteUri = kernelInfo.isProxy ? kernelInfo.remoteUri : kernelInfo.uri;
                            if (!kernelHost.tryGetConnector(remoteUri)) {
                                kernelHost.defaultConnector.addRemoteHostUri(remoteUri);
                            }
                            ensureOrUpdateProxyForKernelInfo(kernelInfo, kernelHost.kernel);
                        }
                    }
                }
            }
        }
    });
    createHost(global, 'webview', configureRequire, entry => {
        context.postKernelMessage({ logEntry: entry });
    }, localToRemote, remoteToLocal, () => {
        const kernelInfos = (global['webview'].kernelHost).getKernelInfos();
        const hostUri = (global['webview'].kernelHost).uri;
        context.postKernelMessage({ preloadCommand: '#!connect', kernelInfos, hostUri, webViewId });
    });
}
function configureRequire(interactive) {
    if ((typeof (require) !== typeof (Function)) || (typeof (require.config) !== typeof (Function))) {
        let require_script = document.createElement('script');
        require_script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js');
        require_script.setAttribute('type', 'text/javascript');
        require_script.onload = function () {
            interactive.configureRequire = (confing) => {
                return require.config(confing) || require;
            };
        };
        document.getElementsByTagName('head')[0].appendChild(require_script);
    }
    else {
        interactive.configureRequire = (confing) => {
            return require.config(confing) || require;
        };
    }
}

export { activate };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGlvbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3ZzY29kZS11cmkvbGliL2VzbS9pbmRleC5qcyIsIi4uL3NyYy9yb3V0aW5nc2xpcC50cyIsIi4uL3NyYy9jb250cmFjdHMudHMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvY3JlYXRlRXJyb3JDbGFzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9hcnJSZW1vdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL2NvbmZpZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9ub29wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvZXJyb3JDb250ZXh0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YnNjcmliZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc3ltYm9sL29ic2VydmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pZGVudGl0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL3BpcGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2xpZnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC5qcyIsIi4uL3NyYy9wcm9taXNlQ29tcGxldGlvblNvdXJjZS50cyIsIi4uL3NyYy9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dC50cyIsIi4uL3NyYy90b2tlbkdlbmVyYXRvci50cyIsIi4uL3NyYy9sb2dnZXIudHMiLCIuLi9zcmMva2VybmVsU2NoZWR1bGVyLnRzIiwiLi4vc3JjL2tlcm5lbC50cyIsIi4uL3NyYy9jb21wb3NpdGVLZXJuZWwudHMiLCIuLi9zcmMvY29uc29sZUNhcHR1cmUudHMiLCIuLi9zcmMvamF2YXNjcmlwdEtlcm5lbC50cyIsIi4uL3NyYy9jb25uZWN0aW9uLnRzIiwiLi4vc3JjL3Byb3h5S2VybmVsLnRzIiwiLi4vc3JjL2tlcm5lbEhvc3QudHMiLCIuLi9zcmMvd2Vidmlldy9mcm9udEVuZEhvc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIi4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwiLi4vc3JjL3dlYnZpZXcvYWN0aXZhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTElCOygoKT0+e1widXNlIHN0cmljdFwiO3ZhciB0PXs0NzA6dD0+e2Z1bmN0aW9uIGUodCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdGggbXVzdCBiZSBhIHN0cmluZy4gUmVjZWl2ZWQgXCIrSlNPTi5zdHJpbmdpZnkodCkpfWZ1bmN0aW9uIHIodCxlKXtmb3IodmFyIHIsbj1cIlwiLG89MCxpPS0xLGE9MCxoPTA7aDw9dC5sZW5ndGg7KytoKXtpZihoPHQubGVuZ3RoKXI9dC5jaGFyQ29kZUF0KGgpO2Vsc2V7aWYoNDc9PT1yKWJyZWFrO3I9NDd9aWYoNDc9PT1yKXtpZihpPT09aC0xfHwxPT09YSk7ZWxzZSBpZihpIT09aC0xJiYyPT09YSl7aWYobi5sZW5ndGg8Mnx8MiE9PW98fDQ2IT09bi5jaGFyQ29kZUF0KG4ubGVuZ3RoLTEpfHw0NiE9PW4uY2hhckNvZGVBdChuLmxlbmd0aC0yKSlpZihuLmxlbmd0aD4yKXt2YXIgcz1uLmxhc3RJbmRleE9mKFwiL1wiKTtpZihzIT09bi5sZW5ndGgtMSl7LTE9PT1zPyhuPVwiXCIsbz0wKTpvPShuPW4uc2xpY2UoMCxzKSkubGVuZ3RoLTEtbi5sYXN0SW5kZXhPZihcIi9cIiksaT1oLGE9MDtjb250aW51ZX19ZWxzZSBpZigyPT09bi5sZW5ndGh8fDE9PT1uLmxlbmd0aCl7bj1cIlwiLG89MCxpPWgsYT0wO2NvbnRpbnVlfWUmJihuLmxlbmd0aD4wP24rPVwiLy4uXCI6bj1cIi4uXCIsbz0yKX1lbHNlIG4ubGVuZ3RoPjA/bis9XCIvXCIrdC5zbGljZShpKzEsaCk6bj10LnNsaWNlKGkrMSxoKSxvPWgtaS0xO2k9aCxhPTB9ZWxzZSA0Nj09PXImJi0xIT09YT8rK2E6YT0tMX1yZXR1cm4gbn12YXIgbj17cmVzb2x2ZTpmdW5jdGlvbigpe2Zvcih2YXIgdCxuPVwiXCIsbz0hMSxpPWFyZ3VtZW50cy5sZW5ndGgtMTtpPj0tMSYmIW87aS0tKXt2YXIgYTtpPj0wP2E9YXJndW1lbnRzW2ldOih2b2lkIDA9PT10JiYodD1wcm9jZXNzLmN3ZCgpKSxhPXQpLGUoYSksMCE9PWEubGVuZ3RoJiYobj1hK1wiL1wiK24sbz00Nz09PWEuY2hhckNvZGVBdCgwKSl9cmV0dXJuIG49cihuLCFvKSxvP24ubGVuZ3RoPjA/XCIvXCIrbjpcIi9cIjpuLmxlbmd0aD4wP246XCIuXCJ9LG5vcm1hbGl6ZTpmdW5jdGlvbih0KXtpZihlKHQpLDA9PT10Lmxlbmd0aClyZXR1cm5cIi5cIjt2YXIgbj00Nz09PXQuY2hhckNvZGVBdCgwKSxvPTQ3PT09dC5jaGFyQ29kZUF0KHQubGVuZ3RoLTEpO3JldHVybiAwIT09KHQ9cih0LCFuKSkubGVuZ3RofHxufHwodD1cIi5cIiksdC5sZW5ndGg+MCYmbyYmKHQrPVwiL1wiKSxuP1wiL1wiK3Q6dH0saXNBYnNvbHV0ZTpmdW5jdGlvbih0KXtyZXR1cm4gZSh0KSx0Lmxlbmd0aD4wJiY0Nz09PXQuY2hhckNvZGVBdCgwKX0sam9pbjpmdW5jdGlvbigpe2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVyblwiLlwiO2Zvcih2YXIgdCxyPTA7cjxhcmd1bWVudHMubGVuZ3RoOysrcil7dmFyIG89YXJndW1lbnRzW3JdO2Uobyksby5sZW5ndGg+MCYmKHZvaWQgMD09PXQ/dD1vOnQrPVwiL1wiK28pfXJldHVybiB2b2lkIDA9PT10P1wiLlwiOm4ubm9ybWFsaXplKHQpfSxyZWxhdGl2ZTpmdW5jdGlvbih0LHIpe2lmKGUodCksZShyKSx0PT09cilyZXR1cm5cIlwiO2lmKCh0PW4ucmVzb2x2ZSh0KSk9PT0ocj1uLnJlc29sdmUocikpKXJldHVyblwiXCI7Zm9yKHZhciBvPTE7bzx0Lmxlbmd0aCYmNDc9PT10LmNoYXJDb2RlQXQobyk7KytvKTtmb3IodmFyIGk9dC5sZW5ndGgsYT1pLW8saD0xO2g8ci5sZW5ndGgmJjQ3PT09ci5jaGFyQ29kZUF0KGgpOysraCk7Zm9yKHZhciBzPXIubGVuZ3RoLWgsYz1hPHM/YTpzLGY9LTEsdT0wO3U8PWM7Kyt1KXtpZih1PT09Yyl7aWYocz5jKXtpZig0Nz09PXIuY2hhckNvZGVBdChoK3UpKXJldHVybiByLnNsaWNlKGgrdSsxKTtpZigwPT09dSlyZXR1cm4gci5zbGljZShoK3UpfWVsc2UgYT5jJiYoNDc9PT10LmNoYXJDb2RlQXQobyt1KT9mPXU6MD09PXUmJihmPTApKTticmVha312YXIgbD10LmNoYXJDb2RlQXQobyt1KTtpZihsIT09ci5jaGFyQ29kZUF0KGgrdSkpYnJlYWs7NDc9PT1sJiYoZj11KX12YXIgcD1cIlwiO2Zvcih1PW8rZisxO3U8PWk7Kyt1KXUhPT1pJiY0NyE9PXQuY2hhckNvZGVBdCh1KXx8KDA9PT1wLmxlbmd0aD9wKz1cIi4uXCI6cCs9XCIvLi5cIik7cmV0dXJuIHAubGVuZ3RoPjA/cCtyLnNsaWNlKGgrZik6KGgrPWYsNDc9PT1yLmNoYXJDb2RlQXQoaCkmJisraCxyLnNsaWNlKGgpKX0sX21ha2VMb25nOmZ1bmN0aW9uKHQpe3JldHVybiB0fSxkaXJuYW1lOmZ1bmN0aW9uKHQpe2lmKGUodCksMD09PXQubGVuZ3RoKXJldHVyblwiLlwiO2Zvcih2YXIgcj10LmNoYXJDb2RlQXQoMCksbj00Nz09PXIsbz0tMSxpPSEwLGE9dC5sZW5ndGgtMTthPj0xOy0tYSlpZig0Nz09PShyPXQuY2hhckNvZGVBdChhKSkpe2lmKCFpKXtvPWE7YnJlYWt9fWVsc2UgaT0hMTtyZXR1cm4tMT09PW8/bj9cIi9cIjpcIi5cIjpuJiYxPT09bz9cIi8vXCI6dC5zbGljZSgwLG8pfSxiYXNlbmFtZTpmdW5jdGlvbih0LHIpe2lmKHZvaWQgMCE9PXImJlwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZXh0XCIgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO2UodCk7dmFyIG4sbz0wLGk9LTEsYT0hMDtpZih2b2lkIDAhPT1yJiZyLmxlbmd0aD4wJiZyLmxlbmd0aDw9dC5sZW5ndGgpe2lmKHIubGVuZ3RoPT09dC5sZW5ndGgmJnI9PT10KXJldHVyblwiXCI7dmFyIGg9ci5sZW5ndGgtMSxzPS0xO2ZvcihuPXQubGVuZ3RoLTE7bj49MDstLW4pe3ZhciBjPXQuY2hhckNvZGVBdChuKTtpZig0Nz09PWMpe2lmKCFhKXtvPW4rMTticmVha319ZWxzZS0xPT09cyYmKGE9ITEscz1uKzEpLGg+PTAmJihjPT09ci5jaGFyQ29kZUF0KGgpPy0xPT0tLWgmJihpPW4pOihoPS0xLGk9cykpfXJldHVybiBvPT09aT9pPXM6LTE9PT1pJiYoaT10Lmxlbmd0aCksdC5zbGljZShvLGkpfWZvcihuPXQubGVuZ3RoLTE7bj49MDstLW4paWYoNDc9PT10LmNoYXJDb2RlQXQobikpe2lmKCFhKXtvPW4rMTticmVha319ZWxzZS0xPT09aSYmKGE9ITEsaT1uKzEpO3JldHVybi0xPT09aT9cIlwiOnQuc2xpY2UobyxpKX0sZXh0bmFtZTpmdW5jdGlvbih0KXtlKHQpO2Zvcih2YXIgcj0tMSxuPTAsbz0tMSxpPSEwLGE9MCxoPXQubGVuZ3RoLTE7aD49MDstLWgpe3ZhciBzPXQuY2hhckNvZGVBdChoKTtpZig0NyE9PXMpLTE9PT1vJiYoaT0hMSxvPWgrMSksNDY9PT1zPy0xPT09cj9yPWg6MSE9PWEmJihhPTEpOi0xIT09ciYmKGE9LTEpO2Vsc2UgaWYoIWkpe249aCsxO2JyZWFrfX1yZXR1cm4tMT09PXJ8fC0xPT09b3x8MD09PWF8fDE9PT1hJiZyPT09by0xJiZyPT09bisxP1wiXCI6dC5zbGljZShyLG8pfSxmb3JtYXQ6ZnVuY3Rpb24odCl7aWYobnVsbD09PXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInBhdGhPYmplY3RcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIHQpO3JldHVybiBmdW5jdGlvbih0LGUpe3ZhciByPWUuZGlyfHxlLnJvb3Qsbj1lLmJhc2V8fChlLm5hbWV8fFwiXCIpKyhlLmV4dHx8XCJcIik7cmV0dXJuIHI/cj09PWUucm9vdD9yK246citcIi9cIituOm59KDAsdCl9LHBhcnNlOmZ1bmN0aW9uKHQpe2UodCk7dmFyIHI9e3Jvb3Q6XCJcIixkaXI6XCJcIixiYXNlOlwiXCIsZXh0OlwiXCIsbmFtZTpcIlwifTtpZigwPT09dC5sZW5ndGgpcmV0dXJuIHI7dmFyIG4sbz10LmNoYXJDb2RlQXQoMCksaT00Nz09PW87aT8oci5yb290PVwiL1wiLG49MSk6bj0wO2Zvcih2YXIgYT0tMSxoPTAscz0tMSxjPSEwLGY9dC5sZW5ndGgtMSx1PTA7Zj49bjstLWYpaWYoNDchPT0obz10LmNoYXJDb2RlQXQoZikpKS0xPT09cyYmKGM9ITEscz1mKzEpLDQ2PT09bz8tMT09PWE/YT1mOjEhPT11JiYodT0xKTotMSE9PWEmJih1PS0xKTtlbHNlIGlmKCFjKXtoPWYrMTticmVha31yZXR1cm4tMT09PWF8fC0xPT09c3x8MD09PXV8fDE9PT11JiZhPT09cy0xJiZhPT09aCsxPy0xIT09cyYmKHIuYmFzZT1yLm5hbWU9MD09PWgmJmk/dC5zbGljZSgxLHMpOnQuc2xpY2UoaCxzKSk6KDA9PT1oJiZpPyhyLm5hbWU9dC5zbGljZSgxLGEpLHIuYmFzZT10LnNsaWNlKDEscykpOihyLm5hbWU9dC5zbGljZShoLGEpLHIuYmFzZT10LnNsaWNlKGgscykpLHIuZXh0PXQuc2xpY2UoYSxzKSksaD4wP3IuZGlyPXQuc2xpY2UoMCxoLTEpOmkmJihyLmRpcj1cIi9cIikscn0sc2VwOlwiL1wiLGRlbGltaXRlcjpcIjpcIix3aW4zMjpudWxsLHBvc2l4Om51bGx9O24ucG9zaXg9bix0LmV4cG9ydHM9bn19LGU9e307ZnVuY3Rpb24gcihuKXt2YXIgbz1lW25dO2lmKHZvaWQgMCE9PW8pcmV0dXJuIG8uZXhwb3J0czt2YXIgaT1lW25dPXtleHBvcnRzOnt9fTtyZXR1cm4gdFtuXShpLGkuZXhwb3J0cyxyKSxpLmV4cG9ydHN9ci5kPSh0LGUpPT57Zm9yKHZhciBuIGluIGUpci5vKGUsbikmJiFyLm8odCxuKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6ZVtuXX0pfSxyLm89KHQsZSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpLHIucj10PT57XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX07dmFyIG49e307KCgpPT57dmFyIHQ7aWYoci5yKG4pLHIuZChuLHtVUkk6KCk9PnAsVXRpbHM6KCk9Pl99KSxcIm9iamVjdFwiPT10eXBlb2YgcHJvY2Vzcyl0PVwid2luMzJcIj09PXByb2Nlc3MucGxhdGZvcm07ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgbmF2aWdhdG9yKXt2YXIgZT1uYXZpZ2F0b3IudXNlckFnZW50O3Q9ZS5pbmRleE9mKFwiV2luZG93c1wiKT49MH12YXIgbyxpLGE9KG89ZnVuY3Rpb24odCxlKXtyZXR1cm4gbz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9LG8odCxlKX0sZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcoZSkrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fW8odCxlKSx0LnByb3RvdHlwZT1udWxsPT09ZT9PYmplY3QuY3JlYXRlKGUpOihyLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgcil9KSxoPS9eXFx3W1xcd1xcZCsuLV0qJC8scz0vXlxcLy8sYz0vXlxcL1xcLy8sZj1cIlwiLHU9XCIvXCIsbD0vXigoW146Lz8jXSs/KTopPyhcXC9cXC8oW14vPyNdKikpPyhbXj8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/LyxwPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGUscixuLG8saSl7dm9pZCAwPT09aSYmKGk9ITEpLFwib2JqZWN0XCI9PXR5cGVvZiB0Pyh0aGlzLnNjaGVtZT10LnNjaGVtZXx8Zix0aGlzLmF1dGhvcml0eT10LmF1dGhvcml0eXx8Zix0aGlzLnBhdGg9dC5wYXRofHxmLHRoaXMucXVlcnk9dC5xdWVyeXx8Zix0aGlzLmZyYWdtZW50PXQuZnJhZ21lbnR8fGYpOih0aGlzLnNjaGVtZT1mdW5jdGlvbih0LGUpe3JldHVybiB0fHxlP3Q6XCJmaWxlXCJ9KHQsaSksdGhpcy5hdXRob3JpdHk9ZXx8Zix0aGlzLnBhdGg9ZnVuY3Rpb24odCxlKXtzd2l0Y2godCl7Y2FzZVwiaHR0cHNcIjpjYXNlXCJodHRwXCI6Y2FzZVwiZmlsZVwiOmU/ZVswXSE9PXUmJihlPXUrZSk6ZT11fXJldHVybiBlfSh0aGlzLnNjaGVtZSxyfHxmKSx0aGlzLnF1ZXJ5PW58fGYsdGhpcy5mcmFnbWVudD1vfHxmLGZ1bmN0aW9uKHQsZSl7aWYoIXQuc2NoZW1lJiZlKXRocm93IG5ldyBFcnJvcignW1VyaUVycm9yXTogU2NoZW1lIGlzIG1pc3Npbmc6IHtzY2hlbWU6IFwiXCIsIGF1dGhvcml0eTogXCInLmNvbmNhdCh0LmF1dGhvcml0eSwnXCIsIHBhdGg6IFwiJykuY29uY2F0KHQucGF0aCwnXCIsIHF1ZXJ5OiBcIicpLmNvbmNhdCh0LnF1ZXJ5LCdcIiwgZnJhZ21lbnQ6IFwiJykuY29uY2F0KHQuZnJhZ21lbnQsJ1wifScpKTtpZih0LnNjaGVtZSYmIWgudGVzdCh0LnNjaGVtZSkpdGhyb3cgbmV3IEVycm9yKFwiW1VyaUVycm9yXTogU2NoZW1lIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycy5cIik7aWYodC5wYXRoKWlmKHQuYXV0aG9yaXR5KXtpZighcy50ZXN0KHQucGF0aCkpdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBJZiBhIFVSSSBjb250YWlucyBhbiBhdXRob3JpdHkgY29tcG9uZW50LCB0aGVuIHRoZSBwYXRoIGNvbXBvbmVudCBtdXN0IGVpdGhlciBiZSBlbXB0eSBvciBiZWdpbiB3aXRoIGEgc2xhc2ggKFwiL1wiKSBjaGFyYWN0ZXInKX1lbHNlIGlmKGMudGVzdCh0LnBhdGgpKXRocm93IG5ldyBFcnJvcignW1VyaUVycm9yXTogSWYgYSBVUkkgZG9lcyBub3QgY29udGFpbiBhbiBhdXRob3JpdHkgY29tcG9uZW50LCB0aGVuIHRoZSBwYXRoIGNhbm5vdCBiZWdpbiB3aXRoIHR3byBzbGFzaCBjaGFyYWN0ZXJzIChcIi8vXCIpJyl9KHRoaXMsaSkpfXJldHVybiBlLmlzVXJpPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgZXx8ISF0JiZcInN0cmluZ1wiPT10eXBlb2YgdC5hdXRob3JpdHkmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmZyYWdtZW50JiZcInN0cmluZ1wiPT10eXBlb2YgdC5wYXRoJiZcInN0cmluZ1wiPT10eXBlb2YgdC5xdWVyeSYmXCJzdHJpbmdcIj09dHlwZW9mIHQuc2NoZW1lJiZcInN0cmluZ1wiPT10eXBlb2YgdC5mc1BhdGgmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQud2l0aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC50b1N0cmluZ30sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiZnNQYXRoXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBiKHRoaXMsITEpfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLndpdGg9ZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuIHRoaXM7dmFyIGU9dC5zY2hlbWUscj10LmF1dGhvcml0eSxuPXQucGF0aCxvPXQucXVlcnksaT10LmZyYWdtZW50O3JldHVybiB2b2lkIDA9PT1lP2U9dGhpcy5zY2hlbWU6bnVsbD09PWUmJihlPWYpLHZvaWQgMD09PXI/cj10aGlzLmF1dGhvcml0eTpudWxsPT09ciYmKHI9Ziksdm9pZCAwPT09bj9uPXRoaXMucGF0aDpudWxsPT09biYmKG49Ziksdm9pZCAwPT09bz9vPXRoaXMucXVlcnk6bnVsbD09PW8mJihvPWYpLHZvaWQgMD09PWk/aT10aGlzLmZyYWdtZW50Om51bGw9PT1pJiYoaT1mKSxlPT09dGhpcy5zY2hlbWUmJnI9PT10aGlzLmF1dGhvcml0eSYmbj09PXRoaXMucGF0aCYmbz09PXRoaXMucXVlcnkmJmk9PT10aGlzLmZyYWdtZW50P3RoaXM6bmV3IGQoZSxyLG4sbyxpKX0sZS5wYXJzZT1mdW5jdGlvbih0LGUpe3ZvaWQgMD09PWUmJihlPSExKTt2YXIgcj1sLmV4ZWModCk7cmV0dXJuIHI/bmV3IGQoclsyXXx8Zix4KHJbNF18fGYpLHgocls1XXx8ZikseChyWzddfHxmKSx4KHJbOV18fGYpLGUpOm5ldyBkKGYsZixmLGYsZil9LGUuZmlsZT1mdW5jdGlvbihlKXt2YXIgcj1mO2lmKHQmJihlPWUucmVwbGFjZSgvXFxcXC9nLHUpKSxlWzBdPT09dSYmZVsxXT09PXUpe3ZhciBuPWUuaW5kZXhPZih1LDIpOy0xPT09bj8ocj1lLnN1YnN0cmluZygyKSxlPXUpOihyPWUuc3Vic3RyaW5nKDIsbiksZT1lLnN1YnN0cmluZyhuKXx8dSl9cmV0dXJuIG5ldyBkKFwiZmlsZVwiLHIsZSxmLGYpfSxlLmZyb209ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBkKHQuc2NoZW1lLHQuYXV0aG9yaXR5LHQucGF0aCx0LnF1ZXJ5LHQuZnJhZ21lbnQpfSxlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITEpLEModGhpcyx0KX0sZS5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGUucmV2aXZlPWZ1bmN0aW9uKHQpe2lmKHQpe2lmKHQgaW5zdGFuY2VvZiBlKXJldHVybiB0O3ZhciByPW5ldyBkKHQpO3JldHVybiByLl9mb3JtYXR0ZWQ9dC5leHRlcm5hbCxyLl9mc1BhdGg9dC5fc2VwPT09Zz90LmZzUGF0aDpudWxsLHJ9cmV0dXJuIHR9LGV9KCksZz10PzE6dm9pZCAwLGQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3ZhciBlPW51bGwhPT10JiZ0LmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpcztyZXR1cm4gZS5fZm9ybWF0dGVkPW51bGwsZS5fZnNQYXRoPW51bGwsZX1yZXR1cm4gYShlLHQpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcImZzUGF0aFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZnNQYXRofHwodGhpcy5fZnNQYXRoPWIodGhpcywhMSkpLHRoaXMuX2ZzUGF0aH0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITEpLHQ/Qyh0aGlzLCEwKToodGhpcy5fZm9ybWF0dGVkfHwodGhpcy5fZm9ybWF0dGVkPUModGhpcywhMSkpLHRoaXMuX2Zvcm1hdHRlZCl9LGUucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3ZhciB0PXskbWlkOjF9O3JldHVybiB0aGlzLl9mc1BhdGgmJih0LmZzUGF0aD10aGlzLl9mc1BhdGgsdC5fc2VwPWcpLHRoaXMuX2Zvcm1hdHRlZCYmKHQuZXh0ZXJuYWw9dGhpcy5fZm9ybWF0dGVkKSx0aGlzLnBhdGgmJih0LnBhdGg9dGhpcy5wYXRoKSx0aGlzLnNjaGVtZSYmKHQuc2NoZW1lPXRoaXMuc2NoZW1lKSx0aGlzLmF1dGhvcml0eSYmKHQuYXV0aG9yaXR5PXRoaXMuYXV0aG9yaXR5KSx0aGlzLnF1ZXJ5JiYodC5xdWVyeT10aGlzLnF1ZXJ5KSx0aGlzLmZyYWdtZW50JiYodC5mcmFnbWVudD10aGlzLmZyYWdtZW50KSx0fSxlfShwKSx2PSgoaT17fSlbNThdPVwiJTNBXCIsaVs0N109XCIlMkZcIixpWzYzXT1cIiUzRlwiLGlbMzVdPVwiJTIzXCIsaVs5MV09XCIlNUJcIixpWzkzXT1cIiU1RFwiLGlbNjRdPVwiJTQwXCIsaVszM109XCIlMjFcIixpWzM2XT1cIiUyNFwiLGlbMzhdPVwiJTI2XCIsaVszOV09XCIlMjdcIixpWzQwXT1cIiUyOFwiLGlbNDFdPVwiJTI5XCIsaVs0Ml09XCIlMkFcIixpWzQzXT1cIiUyQlwiLGlbNDRdPVwiJTJDXCIsaVs1OV09XCIlM0JcIixpWzYxXT1cIiUzRFwiLGlbMzJdPVwiJTIwXCIsaSk7ZnVuY3Rpb24geSh0LGUpe2Zvcih2YXIgcj12b2lkIDAsbj0tMSxvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBpPXQuY2hhckNvZGVBdChvKTtpZihpPj05NyYmaTw9MTIyfHxpPj02NSYmaTw9OTB8fGk+PTQ4JiZpPD01N3x8NDU9PT1pfHw0Nj09PWl8fDk1PT09aXx8MTI2PT09aXx8ZSYmNDc9PT1pKS0xIT09biYmKHIrPWVuY29kZVVSSUNvbXBvbmVudCh0LnN1YnN0cmluZyhuLG8pKSxuPS0xKSx2b2lkIDAhPT1yJiYocis9dC5jaGFyQXQobykpO2Vsc2V7dm9pZCAwPT09ciYmKHI9dC5zdWJzdHIoMCxvKSk7dmFyIGE9dltpXTt2b2lkIDAhPT1hPygtMSE9PW4mJihyKz1lbmNvZGVVUklDb21wb25lbnQodC5zdWJzdHJpbmcobixvKSksbj0tMSkscis9YSk6LTE9PT1uJiYobj1vKX19cmV0dXJuLTEhPT1uJiYocis9ZW5jb2RlVVJJQ29tcG9uZW50KHQuc3Vic3RyaW5nKG4pKSksdm9pZCAwIT09cj9yOnR9ZnVuY3Rpb24gbSh0KXtmb3IodmFyIGU9dm9pZCAwLHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dC5jaGFyQ29kZUF0KHIpOzM1PT09bnx8NjM9PT1uPyh2b2lkIDA9PT1lJiYoZT10LnN1YnN0cigwLHIpKSxlKz12W25dKTp2b2lkIDAhPT1lJiYoZSs9dFtyXSl9cmV0dXJuIHZvaWQgMCE9PWU/ZTp0fWZ1bmN0aW9uIGIoZSxyKXt2YXIgbjtyZXR1cm4gbj1lLmF1dGhvcml0eSYmZS5wYXRoLmxlbmd0aD4xJiZcImZpbGVcIj09PWUuc2NoZW1lP1wiLy9cIi5jb25jYXQoZS5hdXRob3JpdHkpLmNvbmNhdChlLnBhdGgpOjQ3PT09ZS5wYXRoLmNoYXJDb2RlQXQoMCkmJihlLnBhdGguY2hhckNvZGVBdCgxKT49NjUmJmUucGF0aC5jaGFyQ29kZUF0KDEpPD05MHx8ZS5wYXRoLmNoYXJDb2RlQXQoMSk+PTk3JiZlLnBhdGguY2hhckNvZGVBdCgxKTw9MTIyKSYmNTg9PT1lLnBhdGguY2hhckNvZGVBdCgyKT9yP2UucGF0aC5zdWJzdHIoMSk6ZS5wYXRoWzFdLnRvTG93ZXJDYXNlKCkrZS5wYXRoLnN1YnN0cigyKTplLnBhdGgsdCYmKG49bi5yZXBsYWNlKC9cXC8vZyxcIlxcXFxcIikpLG59ZnVuY3Rpb24gQyh0LGUpe3ZhciByPWU/bTp5LG49XCJcIixvPXQuc2NoZW1lLGk9dC5hdXRob3JpdHksYT10LnBhdGgsaD10LnF1ZXJ5LHM9dC5mcmFnbWVudDtpZihvJiYobis9byxuKz1cIjpcIiksKGl8fFwiZmlsZVwiPT09bykmJihuKz11LG4rPXUpLGkpe3ZhciBjPWkuaW5kZXhPZihcIkBcIik7aWYoLTEhPT1jKXt2YXIgZj1pLnN1YnN0cigwLGMpO2k9aS5zdWJzdHIoYysxKSwtMT09PShjPWYuaW5kZXhPZihcIjpcIikpP24rPXIoZiwhMSk6KG4rPXIoZi5zdWJzdHIoMCxjKSwhMSksbis9XCI6XCIsbis9cihmLnN1YnN0cihjKzEpLCExKSksbis9XCJAXCJ9LTE9PT0oYz0oaT1pLnRvTG93ZXJDYXNlKCkpLmluZGV4T2YoXCI6XCIpKT9uKz1yKGksITEpOihuKz1yKGkuc3Vic3RyKDAsYyksITEpLG4rPWkuc3Vic3RyKGMpKX1pZihhKXtpZihhLmxlbmd0aD49MyYmNDc9PT1hLmNoYXJDb2RlQXQoMCkmJjU4PT09YS5jaGFyQ29kZUF0KDIpKShsPWEuY2hhckNvZGVBdCgxKSk+PTY1JiZsPD05MCYmKGE9XCIvXCIuY29uY2F0KFN0cmluZy5mcm9tQ2hhckNvZGUobCszMiksXCI6XCIpLmNvbmNhdChhLnN1YnN0cigzKSkpO2Vsc2UgaWYoYS5sZW5ndGg+PTImJjU4PT09YS5jaGFyQ29kZUF0KDEpKXt2YXIgbDsobD1hLmNoYXJDb2RlQXQoMCkpPj02NSYmbDw9OTAmJihhPVwiXCIuY29uY2F0KFN0cmluZy5mcm9tQ2hhckNvZGUobCszMiksXCI6XCIpLmNvbmNhdChhLnN1YnN0cigyKSkpfW4rPXIoYSwhMCl9cmV0dXJuIGgmJihuKz1cIj9cIixuKz1yKGgsITEpKSxzJiYobis9XCIjXCIsbis9ZT9zOnkocywhMSkpLG59ZnVuY3Rpb24gQSh0KXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh0KX1jYXRjaChlKXtyZXR1cm4gdC5sZW5ndGg+Mz90LnN1YnN0cigwLDMpK0EodC5zdWJzdHIoMykpOnR9fXZhciB3PS8oJVswLTlBLVphLXpdWzAtOUEtWmEtel0pKy9nO2Z1bmN0aW9uIHgodCl7cmV0dXJuIHQubWF0Y2godyk/dC5yZXBsYWNlKHcsKGZ1bmN0aW9uKHQpe3JldHVybiBBKHQpfSkpOnR9dmFyIF8sTz1yKDQ3MCksUD1mdW5jdGlvbih0LGUscil7aWYocnx8Mj09PWFyZ3VtZW50cy5sZW5ndGgpZm9yKHZhciBuLG89MCxpPWUubGVuZ3RoO288aTtvKyspIW4mJm8gaW4gZXx8KG58fChuPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUsMCxvKSksbltvXT1lW29dKTtyZXR1cm4gdC5jb25jYXQobnx8QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSkpfSxqPU8ucG9zaXh8fE8sVT1cIi9cIjshZnVuY3Rpb24odCl7dC5qb2luUGF0aD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspZVtyLTFdPWFyZ3VtZW50c1tyXTtyZXR1cm4gdC53aXRoKHtwYXRoOmouam9pbi5hcHBseShqLFAoW3QucGF0aF0sZSwhMSkpfSl9LHQucmVzb2x2ZVBhdGg9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKWVbci0xXT1hcmd1bWVudHNbcl07dmFyIG49dC5wYXRoLG89ITE7blswXSE9PVUmJihuPVUrbixvPSEwKTt2YXIgaT1qLnJlc29sdmUuYXBwbHkoaixQKFtuXSxlLCExKSk7cmV0dXJuIG8mJmlbMF09PT1VJiYhdC5hdXRob3JpdHkmJihpPWkuc3Vic3RyaW5nKDEpKSx0LndpdGgoe3BhdGg6aX0pfSx0LmRpcm5hbWU9ZnVuY3Rpb24odCl7aWYoMD09PXQucGF0aC5sZW5ndGh8fHQucGF0aD09PVUpcmV0dXJuIHQ7dmFyIGU9ai5kaXJuYW1lKHQucGF0aCk7cmV0dXJuIDE9PT1lLmxlbmd0aCYmNDY9PT1lLmNoYXJDb2RlQXQoMCkmJihlPVwiXCIpLHQud2l0aCh7cGF0aDplfSl9LHQuYmFzZW5hbWU9ZnVuY3Rpb24odCl7cmV0dXJuIGouYmFzZW5hbWUodC5wYXRoKX0sdC5leHRuYW1lPWZ1bmN0aW9uKHQpe3JldHVybiBqLmV4dG5hbWUodC5wYXRoKX19KF98fChfPXt9KSl9KSgpLExJQj1ufSkoKTtleHBvcnQgY29uc3R7VVJJLFV0aWxzfT1MSUI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0ICogYXMgY29udHJhY3RzIGZyb20gJy4vY29udHJhY3RzJztcclxuaW1wb3J0IHsgVVJJIH0gZnJvbSAndnNjb2RlLXVyaSc7XHJcbmltcG9ydCB7IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUgfSBmcm9tICcuL2Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtlcm5lbFVyaShrZXJuZWxVcmk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBrZXJuZWxVcmk7Ly8/XHJcbiAgICBjb25zdCB1cmkgPSBVUkkucGFyc2Uoa2VybmVsVXJpKTtcclxuICAgIHVyaS5hdXRob3JpdHk7Ly8/XHJcbiAgICB1cmkucGF0aDsvLz9cclxuICAgIGxldCBhYnNvbHV0ZVVyaSA9IGAke3VyaS5zY2hlbWV9Oi8vJHt1cmkuYXV0aG9yaXR5fSR7dXJpLnBhdGggfHwgXCIvXCJ9YDtcclxuICAgIHJldHVybiBhYnNvbHV0ZVVyaTsvLz9cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShrZXJuZWxVcmk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBrZXJuZWxVcmk7Ly8/XHJcbiAgICBjb25zdCB1cmkgPSBVUkkucGFyc2Uoa2VybmVsVXJpKTtcclxuICAgIHVyaS5hdXRob3JpdHk7Ly8/XHJcbiAgICB1cmkucGF0aDsvLz9cclxuICAgIGxldCBhYnNvbHV0ZVVyaSA9IGAke3VyaS5zY2hlbWV9Oi8vJHt1cmkuYXV0aG9yaXR5fSR7dXJpLnBhdGggfHwgXCIvXCJ9YDtcclxuICAgIGlmICh1cmkucXVlcnkpIHtcclxuICAgICAgICBhYnNvbHV0ZVVyaSArPSBgPyR7dXJpLnF1ZXJ5fWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWJzb2x1dGVVcmk7Ly8/XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFtcENvbW1hbmRSb3V0aW5nU2xpcEFzQXJyaXZlZChrZXJuZWxDb21tYW5kRW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGtlcm5lbFVyaTogc3RyaW5nKSB7XHJcbiAgICBzdGFtcENvbW1hbmRSb3V0aW5nU2xpcEFzKGtlcm5lbENvbW1hbmRFbnZlbG9wZSwga2VybmVsVXJpLCBcImFycml2ZWRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFtcENvbW1hbmRSb3V0aW5nU2xpcChrZXJuZWxDb21tYW5kRW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGtlcm5lbFVyaTogc3RyaW5nKSB7XHJcbiAgICBpZiAoa2VybmVsQ29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwID09PSB1bmRlZmluZWQgfHwga2VybmVsQ29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbW1hbmQgZG9lcyBub3QgaGF2ZSBhIHJvdXRpbmcgc2xpcFwiKTtcclxuICAgIH1cclxuICAgIGtlcm5lbENvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcDsvLz9cclxuICAgIGtlcm5lbFVyaTsvLz9cclxuICAgIGxldCBhYnNvbHV0ZVVyaSA9IGNyZWF0ZUtlcm5lbFVyaShrZXJuZWxVcmkpOyAvLz9cclxuICAgIGlmIChrZXJuZWxDb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuZmluZChlID0+IGUgPT09IGFic29sdXRlVXJpKSkge1xyXG4gICAgICAgIHRocm93IEVycm9yKGBUaGUgdXJpICR7YWJzb2x1dGVVcml9IGlzIGFscmVhZHkgaW4gdGhlIHJvdXRpbmcgc2xpcCBbJHtrZXJuZWxDb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXB9XWApO1xyXG4gICAgfSBlbHNlIGlmIChrZXJuZWxDb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuZmluZChlID0+IGUuc3RhcnRzV2l0aChhYnNvbHV0ZVVyaSkpKSB7XHJcbiAgICAgICAga2VybmVsQ29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwLnB1c2goYWJzb2x1dGVVcmkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdXJpICR7YWJzb2x1dGVVcml9IGlzIG5vdCBpbiB0aGUgcm91dGluZyBzbGlwIFske2tlcm5lbENvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcH1dYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFtcEV2ZW50Um91dGluZ1NsaXAoa2VybmVsRXZlbnRFbnZlbG9wZTogY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGUsIGtlcm5lbFVyaTogc3RyaW5nKSB7XHJcbiAgICBzdGFtcFJvdXRpbmdTbGlwKGtlcm5lbEV2ZW50RW52ZWxvcGUsIGtlcm5lbFVyaSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YW1wQ29tbWFuZFJvdXRpbmdTbGlwQXMoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZTogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSwga2VybmVsVXJpOiBzdHJpbmcsIHRhZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVVyaSA9IGAke2NyZWF0ZUtlcm5lbFVyaShrZXJuZWxVcmkpfT90YWc9JHt0YWd9YDsvLz9cclxuICAgIHN0YW1wUm91dGluZ1NsaXAoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSwgYWJzb2x1dGVVcmkpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3RhbXBSb3V0aW5nU2xpcChrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLCBrZXJuZWxVcmk6IHN0cmluZykge1xyXG4gICAgaWYgKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUucm91dGluZ1NsaXAgPT09IHVuZGVmaW5lZCB8fCBrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLnJvdXRpbmdTbGlwID09PSBudWxsKSB7XHJcbiAgICAgICAga2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5yb3V0aW5nU2xpcCA9IFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9ybWFsaXplZFVyaSA9IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShrZXJuZWxVcmkpO1xyXG4gICAgY29uc3QgY2FuQWRkID0gIWtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUucm91dGluZ1NsaXAuZmluZChlID0+IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSA9PT0gbm9ybWFsaXplZFVyaSk7XHJcbiAgICBpZiAoY2FuQWRkKSB7XHJcbiAgICAgICAga2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5yb3V0aW5nU2xpcC5wdXNoKG5vcm1hbGl6ZWRVcmkpO1xyXG4gICAgICAgIGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUucm91dGluZ1NsaXA7Ly8/XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHVyaSAke25vcm1hbGl6ZWRVcml9IGlzIGFscmVhZHkgaW4gdGhlIHJvdXRpbmcgc2xpcCBbJHtrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLnJvdXRpbmdTbGlwfV1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udGludWVSb3V0aW5nU2xpcChrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLCBrZXJuZWxVcmlzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgaWYgKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUucm91dGluZ1NsaXAgPT09IHVuZGVmaW5lZCB8fCBrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLnJvdXRpbmdTbGlwID09PSBudWxsKSB7XHJcbiAgICAgICAga2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5yb3V0aW5nU2xpcCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0b0NvbnRpbnVlID0gY3JlYXRlUm91dGluZ1NsaXAoa2VybmVsVXJpcyk7XHJcblxyXG4gICAgaWYgKHJvdXRpbmdTbGlwU3RhcnRzV2l0aCh0b0NvbnRpbnVlLCBrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLnJvdXRpbmdTbGlwKSkge1xyXG4gICAgICAgIHRvQ29udGludWUgPSB0b0NvbnRpbnVlLnNsaWNlKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUucm91dGluZ1NsaXAubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbCA9IFsuLi5rZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLnJvdXRpbmdTbGlwXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Db250aW51ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmkgPSB0b0NvbnRpbnVlW2ldOy8vP1xyXG4gICAgICAgIGNvbnN0IGNhbkFkZCA9ICFrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLnJvdXRpbmdTbGlwLmZpbmQoZSA9PiBjcmVhdGVLZXJuZWxVcmkoZSkgPT09IG5vcm1hbGl6ZWRVcmkpO1xyXG4gICAgICAgIGlmIChjYW5BZGQpIHtcclxuICAgICAgICAgICAga2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5yb3V0aW5nU2xpcC5wdXNoKG5vcm1hbGl6ZWRVcmkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHVyaSAke25vcm1hbGl6ZWRVcml9IGlzIGFscmVhZHkgaW4gdGhlIHJvdXRpbmcgc2xpcCBbJHtvcmlnaW5hbH1dLCBjYW5ub3QgY29udGludWUgd2l0aCByb3V0aW5nIHNsaXAgWyR7a2VybmVsVXJpcy5tYXAoZSA9PiBjcmVhdGVLZXJuZWxVcmkoZSkpfV1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250aW51ZUNvbW1hbmRSb3V0aW5nU2xpcChrZXJuZWxDb21tYW5kRW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGtlcm5lbFVyaXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBjb250aW51ZVJvdXRpbmdTbGlwKGtlcm5lbENvbW1hbmRFbnZlbG9wZSwga2VybmVsVXJpcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250aW51ZUV2ZW50Um91dGluZ1NsaXAoa2VybmVsRXZlbnRFbnZlbG9wZTogY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGUsIGtlcm5lbFVyaXM6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBjb250aW51ZVJvdXRpbmdTbGlwKGtlcm5lbEV2ZW50RW52ZWxvcGUsIGtlcm5lbFVyaXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91dGluZ1NsaXAoa2VybmVsVXJpczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGtlcm5lbFVyaXMubWFwKGUgPT4gY3JlYXRlS2VybmVsVXJpKGUpKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRSb3V0aW5nU2xpcFN0YXJ0c1dpdGgodGhpc0V2ZW50OiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSwgb3RoZXI6IHN0cmluZ1tdIHwgY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRoaXNLZXJuZWxVcmlzID0gdGhpc0V2ZW50LnJvdXRpbmdTbGlwID8/IFtdO1xyXG4gICAgY29uc3Qgb3RoZXJLZXJuZWxVcmlzID0gKG90aGVyIGluc3RhbmNlb2YgQXJyYXkgPyBvdGhlciA6IG90aGVyPy5yb3V0aW5nU2xpcCkgPz8gW107XHJcblxyXG4gICAgcmV0dXJuIHJvdXRpbmdTbGlwU3RhcnRzV2l0aCh0aGlzS2VybmVsVXJpcywgb3RoZXJLZXJuZWxVcmlzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRSb3V0aW5nU2xpcFN0YXJ0c1dpdGgodGhpc0NvbW1hbmQ6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIG90aGVyOiBzdHJpbmdbXSB8IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRoaXNLZXJuZWxVcmlzID0gdGhpc0NvbW1hbmQucm91dGluZ1NsaXAgPz8gW107XHJcbiAgICBjb25zdCBvdGhlcktlcm5lbFVyaXMgPSAob3RoZXIgaW5zdGFuY2VvZiBBcnJheSA/IG90aGVyIDogb3RoZXI/LnJvdXRpbmdTbGlwKSA/PyBbXTtcclxuXHJcbiAgICByZXR1cm4gcm91dGluZ1NsaXBTdGFydHNXaXRoKHRoaXNLZXJuZWxVcmlzLCBvdGhlcktlcm5lbFVyaXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3V0aW5nU2xpcFN0YXJ0c1dpdGgodGhpc0tlcm5lbFVyaXM6IHN0cmluZ1tdLCBvdGhlcktlcm5lbFVyaXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgc3RhcnRzV2l0aCA9IHRydWU7XHJcblxyXG4gICAgaWYgKG90aGVyS2VybmVsVXJpcy5sZW5ndGggPiAwICYmIHRoaXNLZXJuZWxVcmlzLmxlbmd0aCA+PSBvdGhlcktlcm5lbFVyaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlcktlcm5lbFVyaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNyZWF0ZUtlcm5lbFVyaShvdGhlcktlcm5lbFVyaXNbaV0pICE9PSBjcmVhdGVLZXJuZWxVcmkodGhpc0tlcm5lbFVyaXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydHNXaXRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0c1dpdGggPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhcnRzV2l0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50Um91dGluZ1NsaXBDb250YWlucyhrZXJubEV2ZW50OiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSwga2VybmVsVXJpOiBzdHJpbmcsIGlnbm9yZVF1ZXJ5OiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgIHJldHVybiByb3V0aW5nU2xpcENvbnRhaW5zKGtlcm5sRXZlbnQsIGtlcm5lbFVyaSwgaWdub3JlUXVlcnkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZFJvdXRpbmdTbGlwQ29udGFpbnMoa2VybmxFdmVudDogY29udHJhY3RzLktlcm5lbENvbW1hbmRFbnZlbG9wZSwga2VybmVsVXJpOiBzdHJpbmcsIGlnbm9yZVF1ZXJ5OiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgIHJldHVybiByb3V0aW5nU2xpcENvbnRhaW5zKGtlcm5sRXZlbnQsIGtlcm5lbFVyaSwgaWdub3JlUXVlcnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3V0aW5nU2xpcENvbnRhaW5zKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUsIGtlcm5lbFVyaTogc3RyaW5nLCBpZ25vcmVRdWVyeTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkVXJpID0gaWdub3JlUXVlcnkgPyBjcmVhdGVLZXJuZWxVcmkoa2VybmVsVXJpKSA6IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShrZXJuZWxVcmkpO1xyXG4gICAgcmV0dXJuIGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU/LnJvdXRpbmdTbGlwPy5maW5kKGUgPT4gbm9ybWFsaXplZFVyaSA9PT0gKCFpZ25vcmVRdWVyeSA/IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSA6IGNyZWF0ZUtlcm5lbFVyaShlKSkpICE9PSB1bmRlZmluZWQ7XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuLy8gR2VuZXJhdGVkIFR5cGVTY3JpcHQgaW50ZXJmYWNlcyBhbmQgdHlwZXMuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gS2VybmVsIENvbW1hbmRzXHJcblxyXG5leHBvcnQgY29uc3QgQ2FuY2VsVHlwZSA9IFwiQ2FuY2VsXCI7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VXb3JraW5nRGlyZWN0b3J5VHlwZSA9IFwiQ2hhbmdlV29ya2luZ0RpcmVjdG9yeVwiO1xyXG5leHBvcnQgY29uc3QgQ29tcGlsZVByb2plY3RUeXBlID0gXCJDb21waWxlUHJvamVjdFwiO1xyXG5leHBvcnQgY29uc3QgRGlzcGxheUVycm9yVHlwZSA9IFwiRGlzcGxheUVycm9yXCI7XHJcbmV4cG9ydCBjb25zdCBEaXNwbGF5VmFsdWVUeXBlID0gXCJEaXNwbGF5VmFsdWVcIjtcclxuZXhwb3J0IGNvbnN0IE9wZW5Eb2N1bWVudFR5cGUgPSBcIk9wZW5Eb2N1bWVudFwiO1xyXG5leHBvcnQgY29uc3QgT3BlblByb2plY3RUeXBlID0gXCJPcGVuUHJvamVjdFwiO1xyXG5leHBvcnQgY29uc3QgUXVpdFR5cGUgPSBcIlF1aXRcIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RDb21wbGV0aW9uc1R5cGUgPSBcIlJlcXVlc3RDb21wbGV0aW9uc1wiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdERpYWdub3N0aWNzVHlwZSA9IFwiUmVxdWVzdERpYWdub3N0aWNzXCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0SG92ZXJUZXh0VHlwZSA9IFwiUmVxdWVzdEhvdmVyVGV4dFwiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdElucHV0VHlwZSA9IFwiUmVxdWVzdElucHV0XCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0S2VybmVsSW5mb1R5cGUgPSBcIlJlcXVlc3RLZXJuZWxJbmZvXCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0U2lnbmF0dXJlSGVscFR5cGUgPSBcIlJlcXVlc3RTaWduYXR1cmVIZWxwXCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0VmFsdWVUeXBlID0gXCJSZXF1ZXN0VmFsdWVcIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RWYWx1ZUluZm9zVHlwZSA9IFwiUmVxdWVzdFZhbHVlSW5mb3NcIjtcclxuZXhwb3J0IGNvbnN0IFNlbmRFZGl0YWJsZUNvZGVUeXBlID0gXCJTZW5kRWRpdGFibGVDb2RlXCI7XHJcbmV4cG9ydCBjb25zdCBTZW5kVmFsdWVUeXBlID0gXCJTZW5kVmFsdWVcIjtcclxuZXhwb3J0IGNvbnN0IFN1Ym1pdENvZGVUeXBlID0gXCJTdWJtaXRDb2RlXCI7XHJcbmV4cG9ydCBjb25zdCBVcGRhdGVEaXNwbGF5ZWRWYWx1ZVR5cGUgPSBcIlVwZGF0ZURpc3BsYXllZFZhbHVlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBLZXJuZWxDb21tYW5kVHlwZSA9XHJcbiAgICAgIHR5cGVvZiBDYW5jZWxUeXBlXHJcbiAgICB8IHR5cGVvZiBDaGFuZ2VXb3JraW5nRGlyZWN0b3J5VHlwZVxyXG4gICAgfCB0eXBlb2YgQ29tcGlsZVByb2plY3RUeXBlXHJcbiAgICB8IHR5cGVvZiBEaXNwbGF5RXJyb3JUeXBlXHJcbiAgICB8IHR5cGVvZiBEaXNwbGF5VmFsdWVUeXBlXHJcbiAgICB8IHR5cGVvZiBPcGVuRG9jdW1lbnRUeXBlXHJcbiAgICB8IHR5cGVvZiBPcGVuUHJvamVjdFR5cGVcclxuICAgIHwgdHlwZW9mIFF1aXRUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0Q29tcGxldGlvbnNUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0RGlhZ25vc3RpY3NUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0SG92ZXJUZXh0VHlwZVxyXG4gICAgfCB0eXBlb2YgUmVxdWVzdElucHV0VHlwZVxyXG4gICAgfCB0eXBlb2YgUmVxdWVzdEtlcm5lbEluZm9UeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0U2lnbmF0dXJlSGVscFR5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3RWYWx1ZVR5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3RWYWx1ZUluZm9zVHlwZVxyXG4gICAgfCB0eXBlb2YgU2VuZEVkaXRhYmxlQ29kZVR5cGVcclxuICAgIHwgdHlwZW9mIFNlbmRWYWx1ZVR5cGVcclxuICAgIHwgdHlwZW9mIFN1Ym1pdENvZGVUeXBlXHJcbiAgICB8IHR5cGVvZiBVcGRhdGVEaXNwbGF5ZWRWYWx1ZVR5cGU7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbCBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbENvbW1hbmQge1xyXG4gICAgdGFyZ2V0S2VybmVsTmFtZT86IHN0cmluZztcclxuICAgIG9yaWdpblVyaT86IHN0cmluZztcclxuICAgIGRlc3RpbmF0aW9uVXJpPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZVdvcmtpbmdEaXJlY3RvcnkgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIHdvcmtpbmdEaXJlY3Rvcnk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21waWxlUHJvamVjdCBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlFcnJvciBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlWYWx1ZSBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgZm9ybWF0dGVkVmFsdWU6IEZvcm1hdHRlZFZhbHVlO1xyXG4gICAgdmFsdWVJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5Eb2N1bWVudCBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgcmVsYXRpdmVGaWxlUGF0aDogc3RyaW5nO1xyXG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuUHJvamVjdCBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgcHJvamVjdDogUHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBRdWl0IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdENvbXBsZXRpb25zIGV4dGVuZHMgTGFuZ3VhZ2VTZXJ2aWNlQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VTZXJ2aWNlQ29tbWFuZCBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgbGluZVBvc2l0aW9uOiBMaW5lUG9zaXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdERpYWdub3N0aWNzIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEhvdmVyVGV4dCBleHRlbmRzIExhbmd1YWdlU2VydmljZUNvbW1hbmQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RJbnB1dCBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgcHJvbXB0OiBzdHJpbmc7XHJcbiAgICBpc1Bhc3N3b3JkOiBib29sZWFuO1xyXG4gICAgaW5wdXRUeXBlSGludDogc3RyaW5nO1xyXG4gICAgdmFsdWVOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEtlcm5lbEluZm8gZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0U2lnbmF0dXJlSGVscCBleHRlbmRzIExhbmd1YWdlU2VydmljZUNvbW1hbmQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RWYWx1ZSBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWltZVR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0VmFsdWVJbmZvcyBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgbWltZVR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZW5kRWRpdGFibGVDb2RlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBrZXJuZWxOYW1lOiBzdHJpbmc7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VuZFZhbHVlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBmb3JtYXR0ZWRWYWx1ZTogRm9ybWF0dGVkVmFsdWU7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VibWl0Q29kZSBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgc3VibWlzc2lvblR5cGU/OiBTdWJtaXNzaW9uVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVEaXNwbGF5ZWRWYWx1ZSBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG4gICAgZm9ybWF0dGVkVmFsdWU6IEZvcm1hdHRlZFZhbHVlO1xyXG4gICAgdmFsdWVJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbEV2ZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEludGVyYWN0aXZlRG9jdW1lbnRPdXRwdXRFbGVtZW50IHtcclxuICAgIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xyXG4gICAgbWV0YWRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aXZlRG9jdW1lbnRPdXRwdXRFbGVtZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXR1cm5WYWx1ZUVsZW1lbnQgZXh0ZW5kcyBJbnRlcmFjdGl2ZURvY3VtZW50T3V0cHV0RWxlbWVudCB7XHJcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueTsgfTtcclxuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XHJcbiAgICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEVsZW1lbnQgZXh0ZW5kcyBJbnRlcmFjdGl2ZURvY3VtZW50T3V0cHV0RWxlbWVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JFbGVtZW50IGV4dGVuZHMgSW50ZXJhY3RpdmVEb2N1bWVudE91dHB1dEVsZW1lbnQge1xyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmc7XHJcbiAgICBlcnJvclZhbHVlOiBzdHJpbmc7XHJcbiAgICBzdGFja1RyYWNlOiBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50S2VybmVsSW5mbyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBsYW5ndWFnZU5hbWU/OiBzdHJpbmc7XHJcbiAgICBhbGlhc2VzOiBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVib29rUGFyc2VSZXF1ZXN0IGV4dGVuZHMgTm90ZWJvb2tQYXJzZU9yU2VyaWFsaXplUmVxdWVzdCB7XHJcbiAgICB0eXBlOiBSZXF1ZXN0VHlwZTtcclxuICAgIHJhd0RhdGE6IFVpbnQ4QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90ZWJvb2tQYXJzZU9yU2VyaWFsaXplUmVxdWVzdCB7XHJcbiAgICB0eXBlOiBSZXF1ZXN0VHlwZTtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBzZXJpYWxpemF0aW9uVHlwZTogRG9jdW1lbnRTZXJpYWxpemF0aW9uVHlwZTtcclxuICAgIGRlZmF1bHRMYW5ndWFnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVib29rU2VyaWFsaXplUmVxdWVzdCBleHRlbmRzIE5vdGVib29rUGFyc2VPclNlcmlhbGl6ZVJlcXVlc3Qge1xyXG4gICAgdHlwZTogUmVxdWVzdFR5cGU7XHJcbiAgICBuZXdMaW5lOiBzdHJpbmc7XHJcbiAgICBkb2N1bWVudDogSW50ZXJhY3RpdmVEb2N1bWVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RlYm9va1BhcnNlUmVzcG9uc2UgZXh0ZW5kcyBOb3RlYm9va1BhcnNlclNlcnZlclJlc3BvbnNlIHtcclxuICAgIGRvY3VtZW50OiBJbnRlcmFjdGl2ZURvY3VtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVib29rUGFyc2VyU2VydmVyUmVzcG9uc2Uge1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RlYm9va1NlcmlhbGl6ZVJlc3BvbnNlIGV4dGVuZHMgTm90ZWJvb2tQYXJzZXJTZXJ2ZXJSZXNwb25zZSB7XHJcbiAgICByYXdEYXRhOiBVaW50OEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVib29rRXJyb3JSZXNwb25zZSBleHRlbmRzIE5vdGVib29rUGFyc2VyU2VydmVyUmVzcG9uc2Uge1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBLZXJuZWwgZXZlbnRzXHJcblxyXG5leHBvcnQgY29uc3QgQXNzZW1ibHlQcm9kdWNlZFR5cGUgPSBcIkFzc2VtYmx5UHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IENvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlID0gXCJDb2RlU3VibWlzc2lvblJlY2VpdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBDb21tYW5kQ2FuY2VsbGVkVHlwZSA9IFwiQ29tbWFuZENhbmNlbGxlZFwiO1xyXG5leHBvcnQgY29uc3QgQ29tbWFuZEZhaWxlZFR5cGUgPSBcIkNvbW1hbmRGYWlsZWRcIjtcclxuZXhwb3J0IGNvbnN0IENvbW1hbmRTdWNjZWVkZWRUeXBlID0gXCJDb21tYW5kU3VjY2VlZGVkXCI7XHJcbmV4cG9ydCBjb25zdCBDb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlID0gXCJDb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRcIjtcclxuZXhwb3J0IGNvbnN0IENvbXBsZXRpb25zUHJvZHVjZWRUeXBlID0gXCJDb21wbGV0aW9uc1Byb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBEaWFnbm9zdGljTG9nRW50cnlQcm9kdWNlZFR5cGUgPSBcIkRpYWdub3N0aWNMb2dFbnRyeVByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBEaWFnbm9zdGljc1Byb2R1Y2VkVHlwZSA9IFwiRGlhZ25vc3RpY3NQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgRGlzcGxheWVkVmFsdWVQcm9kdWNlZFR5cGUgPSBcIkRpc3BsYXllZFZhbHVlUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IERpc3BsYXllZFZhbHVlVXBkYXRlZFR5cGUgPSBcIkRpc3BsYXllZFZhbHVlVXBkYXRlZFwiO1xyXG5leHBvcnQgY29uc3QgRG9jdW1lbnRPcGVuZWRUeXBlID0gXCJEb2N1bWVudE9wZW5lZFwiO1xyXG5leHBvcnQgY29uc3QgRXJyb3JQcm9kdWNlZFR5cGUgPSBcIkVycm9yUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IEhvdmVyVGV4dFByb2R1Y2VkVHlwZSA9IFwiSG92ZXJUZXh0UHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IEluY29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkVHlwZSA9IFwiSW5jb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRcIjtcclxuZXhwb3J0IGNvbnN0IElucHV0UHJvZHVjZWRUeXBlID0gXCJJbnB1dFByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBLZXJuZWxFeHRlbnNpb25Mb2FkZWRUeXBlID0gXCJLZXJuZWxFeHRlbnNpb25Mb2FkZWRcIjtcclxuZXhwb3J0IGNvbnN0IEtlcm5lbEluZm9Qcm9kdWNlZFR5cGUgPSBcIktlcm5lbEluZm9Qcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgS2VybmVsUmVhZHlUeXBlID0gXCJLZXJuZWxSZWFkeVwiO1xyXG5leHBvcnQgY29uc3QgUGFja2FnZUFkZGVkVHlwZSA9IFwiUGFja2FnZUFkZGVkXCI7XHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0T3BlbmVkVHlwZSA9IFwiUHJvamVjdE9wZW5lZFwiO1xyXG5leHBvcnQgY29uc3QgUmV0dXJuVmFsdWVQcm9kdWNlZFR5cGUgPSBcIlJldHVyblZhbHVlUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IFNpZ25hdHVyZUhlbHBQcm9kdWNlZFR5cGUgPSBcIlNpZ25hdHVyZUhlbHBQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgU3RhbmRhcmRFcnJvclZhbHVlUHJvZHVjZWRUeXBlID0gXCJTdGFuZGFyZEVycm9yVmFsdWVQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgU3RhbmRhcmRPdXRwdXRWYWx1ZVByb2R1Y2VkVHlwZSA9IFwiU3RhbmRhcmRPdXRwdXRWYWx1ZVByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBWYWx1ZUluZm9zUHJvZHVjZWRUeXBlID0gXCJWYWx1ZUluZm9zUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IFZhbHVlUHJvZHVjZWRUeXBlID0gXCJWYWx1ZVByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBXb3JraW5nRGlyZWN0b3J5Q2hhbmdlZFR5cGUgPSBcIldvcmtpbmdEaXJlY3RvcnlDaGFuZ2VkXCI7XHJcblxyXG5leHBvcnQgdHlwZSBLZXJuZWxFdmVudFR5cGUgPVxyXG4gICAgICB0eXBlb2YgQXNzZW1ibHlQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIENvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBDb21tYW5kQ2FuY2VsbGVkVHlwZVxyXG4gICAgfCB0eXBlb2YgQ29tbWFuZEZhaWxlZFR5cGVcclxuICAgIHwgdHlwZW9mIENvbW1hbmRTdWNjZWVkZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBDb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBDb21wbGV0aW9uc1Byb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgRGlhZ25vc3RpY0xvZ0VudHJ5UHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBEaWFnbm9zdGljc1Byb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgRGlzcGxheWVkVmFsdWVQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIERpc3BsYXllZFZhbHVlVXBkYXRlZFR5cGVcclxuICAgIHwgdHlwZW9mIERvY3VtZW50T3BlbmVkVHlwZVxyXG4gICAgfCB0eXBlb2YgRXJyb3JQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIEhvdmVyVGV4dFByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgSW5jb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBJbnB1dFByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgS2VybmVsRXh0ZW5zaW9uTG9hZGVkVHlwZVxyXG4gICAgfCB0eXBlb2YgS2VybmVsSW5mb1Byb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgS2VybmVsUmVhZHlUeXBlXHJcbiAgICB8IHR5cGVvZiBQYWNrYWdlQWRkZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBQcm9qZWN0T3BlbmVkVHlwZVxyXG4gICAgfCB0eXBlb2YgUmV0dXJuVmFsdWVQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIFNpZ25hdHVyZUhlbHBQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIFN0YW5kYXJkRXJyb3JWYWx1ZVByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgU3RhbmRhcmRPdXRwdXRWYWx1ZVByb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgVmFsdWVJbmZvc1Byb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgVmFsdWVQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIFdvcmtpbmdEaXJlY3RvcnlDaGFuZ2VkVHlwZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXNzZW1ibHlQcm9kdWNlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGFzc2VtYmx5OiBCYXNlNjRFbmNvZGVkQXNzZW1ibHk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVN1Ym1pc3Npb25SZWNlaXZlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kQ2FuY2VsbGVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRGYWlsZWQgZXh0ZW5kcyBLZXJuZWxDb21tYW5kQ29tcGxldGlvbkV2ZW50IHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxDb21tYW5kQ29tcGxldGlvbkV2ZW50IGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFN1Y2NlZWRlZCBleHRlbmRzIEtlcm5lbENvbW1hbmRDb21wbGV0aW9uRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0aW9uc1Byb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgbGluZVBvc2l0aW9uU3Bhbj86IExpbmVQb3NpdGlvblNwYW47XHJcbiAgICBjb21wbGV0aW9uczogQXJyYXk8Q29tcGxldGlvbkl0ZW0+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWNMb2dFbnRyeVByb2R1Y2VkIGV4dGVuZHMgRGlhZ25vc3RpY0V2ZW50IHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFnbm9zdGljRXZlbnQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ25vc3RpY3NQcm9kdWNlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGRpYWdub3N0aWNzOiBBcnJheTxEaWFnbm9zdGljPjtcclxuICAgIGZvcm1hdHRlZERpYWdub3N0aWNzOiBBcnJheTxGb3JtYXR0ZWRWYWx1ZT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkVmFsdWVQcm9kdWNlZCBleHRlbmRzIERpc3BsYXlFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheUV2ZW50IGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgZm9ybWF0dGVkVmFsdWVzOiBBcnJheTxGb3JtYXR0ZWRWYWx1ZT47XHJcbiAgICB2YWx1ZUlkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZFZhbHVlVXBkYXRlZCBleHRlbmRzIERpc3BsYXlFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRPcGVuZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICByZWxhdGl2ZUZpbGVQYXRoOiBzdHJpbmc7XHJcbiAgICByZWdpb25OYW1lPzogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yUHJvZHVjZWQgZXh0ZW5kcyBEaXNwbGF5RXZlbnQge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhvdmVyVGV4dFByb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgY29udGVudDogQXJyYXk8Rm9ybWF0dGVkVmFsdWU+O1xyXG4gICAgbGluZVBvc2l0aW9uU3Bhbj86IExpbmVQb3NpdGlvblNwYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5jb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9kdWNlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsRXh0ZW5zaW9uTG9hZGVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbEluZm9Qcm9kdWNlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGtlcm5lbEluZm86IEtlcm5lbEluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsUmVhZHkgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBrZXJuZWxJbmZvczogQXJyYXk8S2VybmVsSW5mbz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFja2FnZUFkZGVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgcGFja2FnZVJlZmVyZW5jZTogUmVzb2x2ZWRQYWNrYWdlUmVmZXJlbmNlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RPcGVuZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBwcm9qZWN0SXRlbXM6IEFycmF5PFByb2plY3RJdGVtPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXR1cm5WYWx1ZVByb2R1Y2VkIGV4dGVuZHMgRGlzcGxheUV2ZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduYXR1cmVIZWxwUHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBzaWduYXR1cmVzOiBBcnJheTxTaWduYXR1cmVJbmZvcm1hdGlvbj47XHJcbiAgICBhY3RpdmVTaWduYXR1cmVJbmRleDogbnVtYmVyO1xyXG4gICAgYWN0aXZlUGFyYW1ldGVySW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGFuZGFyZEVycm9yVmFsdWVQcm9kdWNlZCBleHRlbmRzIERpc3BsYXlFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhbmRhcmRPdXRwdXRWYWx1ZVByb2R1Y2VkIGV4dGVuZHMgRGlzcGxheUV2ZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWx1ZUluZm9zUHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICB2YWx1ZUluZm9zOiBBcnJheTxLZXJuZWxWYWx1ZUluZm8+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZhbHVlUHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBmb3JtYXR0ZWRWYWx1ZTogRm9ybWF0dGVkVmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV29ya2luZ0RpcmVjdG9yeUNoYW5nZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICB3b3JraW5nRGlyZWN0b3J5OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSZXF1aXJlZCBUeXBlc1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlNjRFbmNvZGVkQXNzZW1ibHkge1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0aW9uSXRlbSB7XHJcbiAgICBkaXNwbGF5VGV4dDogc3RyaW5nO1xyXG4gICAga2luZDogc3RyaW5nO1xyXG4gICAgZmlsdGVyVGV4dDogc3RyaW5nO1xyXG4gICAgc29ydFRleHQ6IHN0cmluZztcclxuICAgIGluc2VydFRleHQ6IHN0cmluZztcclxuICAgIGluc2VydFRleHRGb3JtYXQ/OiBJbnNlcnRUZXh0Rm9ybWF0O1xyXG4gICAgZG9jdW1lbnRhdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbnNlcnRUZXh0Rm9ybWF0IHtcclxuICAgIFBsYWluVGV4dCA9IFwicGxhaW50ZXh0XCIsXHJcbiAgICBTbmlwcGV0ID0gXCJzbmlwcGV0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ25vc3RpYyB7XHJcbiAgICBsaW5lUG9zaXRpb25TcGFuOiBMaW5lUG9zaXRpb25TcGFuO1xyXG4gICAgc2V2ZXJpdHk6IERpYWdub3N0aWNTZXZlcml0eTtcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlhZ25vc3RpY1NldmVyaXR5IHtcclxuICAgIEhpZGRlbiA9IFwiaGlkZGVuXCIsXHJcbiAgICBJbmZvID0gXCJpbmZvXCIsXHJcbiAgICBXYXJuaW5nID0gXCJ3YXJuaW5nXCIsXHJcbiAgICBFcnJvciA9IFwiZXJyb3JcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaW5lUG9zaXRpb25TcGFuIHtcclxuICAgIHN0YXJ0OiBMaW5lUG9zaXRpb247XHJcbiAgICBlbmQ6IExpbmVQb3NpdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaW5lUG9zaXRpb24ge1xyXG4gICAgbGluZTogbnVtYmVyO1xyXG4gICAgY2hhcmFjdGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERvY3VtZW50U2VyaWFsaXphdGlvblR5cGUge1xyXG4gICAgRGliID0gXCJkaWJcIixcclxuICAgIElweW5iID0gXCJpcHluYlwiLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1hdHRlZFZhbHVlIHtcclxuICAgIG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aXZlRG9jdW1lbnQge1xyXG4gICAgZWxlbWVudHM6IEFycmF5PEludGVyYWN0aXZlRG9jdW1lbnRFbGVtZW50PjtcclxuICAgIG1ldGFkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueTsgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGl2ZURvY3VtZW50RWxlbWVudCB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGtlcm5lbE5hbWU/OiBzdHJpbmc7XHJcbiAgICBjb250ZW50czogc3RyaW5nO1xyXG4gICAgb3V0cHV0czogQXJyYXk8SW50ZXJhY3RpdmVEb2N1bWVudE91dHB1dEVsZW1lbnQ+O1xyXG4gICAgZXhlY3V0aW9uT3JkZXI6IG51bWJlcjtcclxuICAgIG1ldGFkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsSW5mbyB7XHJcbiAgICBhbGlhc2VzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgbGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgbGFuZ3VhZ2VWZXJzaW9uPzogc3RyaW5nO1xyXG4gICAgaXNQcm94eTogYm9vbGVhbjtcclxuICAgIGlzQ29tcG9zaXRlOiBib29sZWFuO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIGxvY2FsTmFtZTogc3RyaW5nO1xyXG4gICAgdXJpOiBzdHJpbmc7XHJcbiAgICByZW1vdGVVcmk/OiBzdHJpbmc7XHJcbiAgICBzdXBwb3J0ZWRLZXJuZWxDb21tYW5kczogQXJyYXk8S2VybmVsQ29tbWFuZEluZm8+O1xyXG4gICAgc3VwcG9ydGVkRGlyZWN0aXZlczogQXJyYXk8S2VybmVsRGlyZWN0aXZlSW5mbz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsQ29tbWFuZEluZm8ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbERpcmVjdGl2ZUluZm8ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbFZhbHVlSW5mbyB7XHJcbiAgICB0eXBlTmFtZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZm9ybWF0dGVkVmFsdWU6IEZvcm1hdHRlZFZhbHVlO1xyXG4gICAgcHJlZmVycmVkTWltZVR5cGVzOiBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xyXG4gICAgZmlsZXM6IEFycmF5PFByb2plY3RGaWxlPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0RmlsZSB7XHJcbiAgICByZWxhdGl2ZUZpbGVQYXRoOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdEl0ZW0ge1xyXG4gICAgcmVsYXRpdmVGaWxlUGF0aDogc3RyaW5nO1xyXG4gICAgcmVnaW9uTmFtZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICByZWdpb25zQ29udGVudDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlcXVlc3RUeXBlIHtcclxuICAgIFBhcnNlID0gXCJwYXJzZVwiLFxyXG4gICAgU2VyaWFsaXplID0gXCJzZXJpYWxpemVcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlZFBhY2thZ2VSZWZlcmVuY2UgZXh0ZW5kcyBQYWNrYWdlUmVmZXJlbmNlIHtcclxuICAgIGFzc2VtYmx5UGF0aHM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcm9iaW5nUGF0aHM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwYWNrYWdlUm9vdDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhY2thZ2VSZWZlcmVuY2Uge1xyXG4gICAgcGFja2FnZU5hbWU6IHN0cmluZztcclxuICAgIHBhY2thZ2VWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBpc1BhY2thZ2VWZXJzaW9uU3BlY2lmaWVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hdHVyZUluZm9ybWF0aW9uIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBkb2N1bWVudGF0aW9uOiBGb3JtYXR0ZWRWYWx1ZTtcclxuICAgIHBhcmFtZXRlcnM6IEFycmF5PFBhcmFtZXRlckluZm9ybWF0aW9uPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJhbWV0ZXJJbmZvcm1hdGlvbiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgZG9jdW1lbnRhdGlvbjogRm9ybWF0dGVkVmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN1Ym1pc3Npb25UeXBlIHtcclxuICAgIFJ1biA9IFwicnVuXCIsXHJcbiAgICBEaWFnbm9zZSA9IFwiZGlhZ25vc2VcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEtlcm5lbEluZm9Db2xsZWN0aW9uIHtcclxuICAgIGRlZmF1bHRLZXJuZWxOYW1lOiBzdHJpbmc7XHJcbiAgICBpdGVtczogRG9jdW1lbnRLZXJuZWxJbmZvW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsRXZlbnRFbnZlbG9wZSB7XHJcbiAgICBldmVudFR5cGU6IEtlcm5lbEV2ZW50VHlwZTtcclxuICAgIGV2ZW50OiBLZXJuZWxFdmVudDtcclxuICAgIGNvbW1hbmQ/OiBLZXJuZWxDb21tYW5kRW52ZWxvcGU7XHJcbiAgICByb3V0aW5nU2xpcD86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbENvbW1hbmRFbnZlbG9wZSB7XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgY29tbWFuZFR5cGU6IEtlcm5lbENvbW1hbmRUeXBlO1xyXG4gICAgY29tbWFuZDogS2VybmVsQ29tbWFuZDtcclxuICAgIHJvdXRpbmdTbGlwPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsRXZlbnRFbnZlbG9wZU9ic2VydmVyIHtcclxuICAgIChldmVudEVudmVsb3BlOiBLZXJuZWxFdmVudEVudmVsb3BlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxDb21tYW5kRW52ZWxvcGVIYW5kbGVyIHtcclxuICAgIChldmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2xhc3MoY3JlYXRlSW1wbCkge1xuICAgIHZhciBfc3VwZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgfTtcbiAgICB2YXIgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gICAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGN0b3JGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JGdW5jO1xuICAgIHJldHVybiBjdG9yRnVuYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUVycm9yQ2xhc3MuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5leHBvcnQgdmFyIFVuc3Vic2NyaXB0aW9uRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzXG4gICAgICAgICAgICA/IGVycm9ycy5sZW5ndGggKyBcIiBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxcblwiICsgZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiBpICsgMSArIFwiKSBcIiArIGVyci50b1N0cmluZygpOyB9KS5qb2luKCdcXG4gICcpXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFyclJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyclJlbW92ZS5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXksIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKGluaXRpYWxUZWFyZG93bikge1xuICAgICAgICB0aGlzLmluaXRpYWxUZWFyZG93biA9IGluaXRpYWxUZWFyZG93bjtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgICAgIGlmIChfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3BhcmVudGFnZV8xID0gX192YWx1ZXMoX3BhcmVudGFnZSksIF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKTsgIV9wYXJlbnRhZ2VfMV8xLmRvbmU7IF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRhZ2VfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXJlbnRhZ2VfMV8xICYmICFfcGFyZW50YWdlXzFfMS5kb25lICYmIChfYSA9IF9wYXJlbnRhZ2VfMS5yZXR1cm4pKSBfYS5jYWxsKF9wYXJlbnRhZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbml0aWFsRmluYWxpemVyID0gdGhpcy5pbml0aWFsVGVhcmRvd247XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihpbml0aWFsRmluYWxpemVyKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxGaW5hbGl6ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzO1xuICAgICAgICAgICAgaWYgKF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2ZpbmFsaXplcnNfMSA9IF9fdmFsdWVzKF9maW5hbGl6ZXJzKSwgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCk7ICFfZmluYWxpemVyc18xXzEuZG9uZTsgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaW5hbGl6ZXIgPSBfZmluYWxpemVyc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgIT09IG51bGwgJiYgZXJyb3JzICE9PSB2b2lkIDAgPyBlcnJvcnMgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChlcnJvcnMpKSwgX19yZWFkKGVyci5lcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2ZpbmFsaXplcnNfMV8xICYmICFfZmluYWxpemVyc18xXzEuZG9uZSAmJiAoX2IgPSBfZmluYWxpemVyc18xLnJldHVybikpIF9iLmNhbGwoX2ZpbmFsaXplcnNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlYXJkb3duLmNsb3NlZCB8fCB0ZWFyZG93bi5faGFzUGFyZW50KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhcmRvd24uX2FkZFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKHRoaXMuX2ZpbmFsaXplcnMgPSAoX2EgPSB0aGlzLl9maW5hbGl6ZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2hhc1BhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2FkZFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgPyAoX3BhcmVudGFnZS5wdXNoKHBhcmVudCksIF9wYXJlbnRhZ2UpIDogX3BhcmVudGFnZSA/IFtfcGFyZW50YWdlLCBwYXJlbnRdIDogcGFyZW50O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fcmVtb3ZlUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgaWYgKF9wYXJlbnRhZ2UgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIF9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycztcbiAgICAgICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG4gICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGVhcmRvd24uX3JlbW92ZVBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLkVNUFRZID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVtcHR5ID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiB9O1xuZXhwb3J0IHZhciBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKSk7XG59XG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZpbmFsaXplcikpIHtcbiAgICAgICAgZmluYWxpemVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaW5hbGl6ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiZXhwb3J0IHZhciBjb25maWcgPSB7XG4gICAgb25VbmhhbmRsZWRFcnJvcjogbnVsbCxcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGZhbHNlLFxuICAgIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuZXhwb3J0IHZhciB0aW1lb3V0UHJvdmlkZXIgPSB7XG4gICAgc2V0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLnNldFRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRUaW1lb3V0LmFwcGx5KGRlbGVnYXRlLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuY2xlYXJUaW1lb3V0KSB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSk7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWVvdXRQcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKSB7XG4gICAgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25VbmhhbmRsZWRFcnJvciA9IGNvbmZpZy5vblVuaGFuZGxlZEVycm9yO1xuICAgICAgICBpZiAob25VbmhhbmRsZWRFcnJvcikge1xuICAgICAgICAgICAgb25VbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXBvcnRVbmhhbmRsZWRFcnJvci5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xudmFyIGNvbnRleHQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICB2YXIgaXNSb290ID0gIWNvbnRleHQ7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb250ZXh0LCBlcnJvclRocm93biA9IF9hLmVycm9yVGhyb3duLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2IoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbC9ub29wJztcbmltcG9ydCB7IG5leHROb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9uLCBDT01QTEVURV9OT1RJRklDQVRJT04gfSBmcm9tICcuL05vdGlmaWNhdGlvbkZhY3Rvcmllcyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuaW1wb3J0IHsgY2FwdHVyZUVycm9yIH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG52YXIgU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlcihkZXN0aW5hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IEVNUFRZX09CU0VSVkVSO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaWJlci5jcmVhdGUgPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2FmZVN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKGVycm9yTm90aWZpY2F0aW9uKGVyciksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb24pKTtcbmV4cG9ydCB7IFN1YnNjcmliZXIgfTtcbnZhciBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cbnZhciBDb25zdW1lck9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcikge1xuICAgICAgICB0aGlzLnBhcnRpYWxPYnNlcnZlciA9IHBhcnRpYWxPYnNlcnZlcjtcbiAgICB9XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29uc3VtZXJPYnNlcnZlcjtcbn0oKSk7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSB8fCAhb2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiAob2JzZXJ2ZXJPck5leHQgIT09IG51bGwgJiYgb2JzZXJ2ZXJPck5leHQgIT09IHZvaWQgMCA/IG9ic2VydmVyT3JOZXh0IDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCA/IGVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSAhPT0gbnVsbCAmJiBjb21wbGV0ZSAhPT0gdm9pZCAwID8gY29tcGxldGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvbnRleHRfMTtcbiAgICAgICAgICAgIGlmIChfdGhpcyAmJiBjb25maWcudXNlRGVwcmVjYXRlZE5leHRDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyT3JOZXh0Lm5leHQgJiYgYmluZChvYnNlcnZlck9yTmV4dC5uZXh0LCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXJPck5leHQuZXJyb3IgJiYgYmluZChvYnNlcnZlck9yTmV4dC5lcnJvciwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuY29tcGxldGUsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IFNhZmVTdWJzY3JpYmVyIH07XG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICBjYXB0dXJlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckhhbmRsZXIoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgb25TdG9wcGVkTm90aWZpY2F0aW9uID0gY29uZmlnLm9uU3RvcHBlZE5vdGlmaWNhdGlvbjtcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb24gJiYgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb25TdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcik7IH0pO1xufVxuZXhwb3J0IHZhciBFTVBUWV9PQlNFUlZFUiA9IHtcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbmV4dDogbm9vcCxcbiAgICBlcnJvcjogZGVmYXVsdEVycm9ySGFuZGxlcixcbiAgICBjb21wbGV0ZTogbm9vcCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcCIsImV4cG9ydCB2YXIgb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZGVudGl0eS5qcy5tYXAiLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsImltcG9ydCB7IFNhZmVTdWJzY3JpYmVyLCBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgcGlwZUZyb21BcnJheSB9IGZyb20gJy4vdXRpbC9waXBlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gaXNTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0KSA/IG9ic2VydmVyT3JOZXh0IDogbmV3IFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIG9wZXJhdG9yID0gX2Eub3BlcmF0b3IsIHNvdXJjZSA9IF9hLnNvdXJjZTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKG9wZXJhdG9yXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5jYWxsKHN1YnNjcmliZXIsIHNvdXJjZSlcbiAgICAgICAgICAgICAgICA6IHNvdXJjZVxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVyID0gbmV3IFNhZmVTdWJzY3JpYmVyKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbU3ltYm9sX29ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiAodmFsdWUgPSB4KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gcHJvbWlzZUN0b3IgIT09IG51bGwgJiYgcHJvbWlzZUN0b3IgIT09IHZvaWQgMCA/IHByb21pc2VDdG9yIDogY29uZmlnLlByb21pc2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFByb21pc2U7XG59XG5mdW5jdGlvbiBpc09ic2VydmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5mdW5jdGlvbiBpc1N1YnNjcmliZXIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaWJlcikgfHwgKGlzT2JzZXJ2ZXIodmFsdWUpICYmIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlID09PSBudWxsIHx8IHNvdXJjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc291cmNlLmxpZnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGUoaW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAobGlmdGVkU291cmNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlmdC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSkge1xuICAgIHJldHVybiBuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpO1xufVxudmFyIE9wZXJhdG9yU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9wZXJhdG9yU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSwgc2hvdWxkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9uRmluYWxpemUgPSBvbkZpbmFsaXplO1xuICAgICAgICBfdGhpcy5zaG91bGRVbnN1YnNjcmliZSA9IHNob3VsZFVuc3Vic2NyaWJlO1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG9uTmV4dFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbk5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9uZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBvbkVycm9yXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2Vycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBvbkNvbXBsZXRlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9wZXJhdG9yU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFVuc3Vic2NyaWJlIHx8IHRoaXMuc2hvdWxkVW5zdWJzY3JpYmUoKSkge1xuICAgICAgICAgICAgdmFyIGNsb3NlZF8xID0gdGhpcy5jbG9zZWQ7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAhY2xvc2VkXzEgJiYgKChfYSA9IHRoaXMub25GaW5hbGl6ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT3BlcmF0b3JTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBPcGVyYXRvclN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9wZXJhdG9yU3Vic2NyaWJlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKCkge1xuICAgICAgICBfc3VwZXIodGhpcyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMudGhyb3duRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3QucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICAgICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90aHJvd0lmQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbShfdGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLmN1cnJlbnRPYnNlcnZlcnMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhc0Vycm9yID0gX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1YmplY3QucHJvdG90eXBlLCBcIm9ic2VydmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMub2JzZXJ2ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5faW5uZXJTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBoYXNFcnJvciA9IF9hLmhhc0Vycm9yLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQsIG9ic2VydmVycyA9IF9hLm9ic2VydmVycztcbiAgICAgICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhhc0Vycm9yID0gX2EuaGFzRXJyb3IsIHRocm93bkVycm9yID0gX2EudGhyb3duRXJyb3IsIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBTdWJqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdWJqZWN0O1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBTdWJqZWN0IH07XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdmFsdWUpO1xuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVycik7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgQW5vbnltb3VzU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ge1xyXG4gICAgcmV0dXJuIG9iai5wcm9taXNlXHJcbiAgICAgICAgJiYgb2JqLnJlc29sdmVcclxuICAgICAgICAmJiBvYmoucmVqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ge1xyXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZTogKHZhbHVlOiBUKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgcHJpdmF0ZSBfcmVqZWN0OiAocmVhc29uOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgICByZWFkb25seSBwcm9taXNlOiBQcm9taXNlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVqZWN0KHJlYXNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgcm91dGluZ3NsaXAgZnJvbSBcIi4vcm91dGluZ3NsaXBcIjtcclxuaW1wb3J0ICogYXMgY29udHJhY3RzIGZyb20gXCIuL2NvbnRyYWN0c1wiO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlIH0gZnJvbSBcIi4vZGlzcG9zYWJsZXNcIjtcclxuaW1wb3J0IHsgZ2V0S2VybmVsVXJpLCBLZXJuZWwgfSBmcm9tIFwiLi9rZXJuZWxcIjtcclxuaW1wb3J0IHsgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UgfSBmcm9tIFwiLi9wcm9taXNlQ29tcGxldGlvblNvdXJjZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCBpbXBsZW1lbnRzIERpc3Bvc2FibGUge1xyXG4gICAgcHVibGljIGdldCBwcm9taXNlKCk6IHZvaWQgfCBQcm9taXNlTGlrZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGlvblNvdXJjZS5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnQ6IEtlcm5lbEludm9jYXRpb25Db250ZXh0IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb21tYW5kRW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jaGlsZENvbW1hbmRzOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlW10gPSBbXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50U3ViamVjdDogcnhqcy5TdWJqZWN0PGNvbnRyYWN0cy5LZXJuZWxFdmVudEVudmVsb3BlPiA9IG5ldyByeGpzLlN1YmplY3Q8Y29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaGFuZGxpbmdLZXJuZWw6IEtlcm5lbCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaGFuZGxpbmdLZXJuZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsaW5nS2VybmVsO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGtlcm5lbEV2ZW50cygpOiByeGpzLk9ic2VydmFibGU8Y29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc2V0IGhhbmRsaW5nS2VybmVsKHZhbHVlOiBLZXJuZWwgfCBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxpbmdLZXJuZWwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBsZXRpb25Tb3VyY2UgPSBuZXcgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8dm9pZD4oKTtcclxuICAgIHN0YXRpYyBlc3RhYmxpc2goa2VybmVsQ29tbWFuZEludm9jYXRpb246IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5fY3VycmVudDtcclxuICAgICAgICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC5faXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5fY3VycmVudCA9IG5ldyBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dChrZXJuZWxDb21tYW5kSW52b2NhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFhcmVDb21tYW5kc1RoZVNhbWUoa2VybmVsQ29tbWFuZEludm9jYXRpb24sIGN1cnJlbnQuX2NvbW1hbmRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gY3VycmVudC5fY2hpbGRDb21tYW5kcy5pbmNsdWRlcyhrZXJuZWxDb21tYW5kSW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5fY2hpbGRDb21tYW5kcy5wdXNoKGtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEtlcm5lbEludm9jYXRpb25Db250ZXh0Ll9jdXJyZW50ITtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKTogS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfCBudWxsIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7IH1cclxuICAgIGdldCBjb21tYW5kKCk6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kIHsgcmV0dXJuIHRoaXMuX2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kOyB9XHJcbiAgICBnZXQgY29tbWFuZEVudmVsb3BlKCk6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUgeyByZXR1cm4gdGhpcy5fY29tbWFuZEVudmVsb3BlOyB9XHJcbiAgICBjb25zdHJ1Y3RvcihrZXJuZWxDb21tYW5kSW52b2NhdGlvbjogY29udHJhY3RzLktlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbW1hbmRFbnZlbG9wZSA9IGtlcm5lbENvbW1hbmRJbnZvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBsZXRlKGNvbW1hbmQ6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpIHtcclxuICAgICAgICBpZiAoYXJlQ29tbWFuZHNUaGVTYW1lKGNvbW1hbmQsIHRoaXMuX2NvbW1hbmRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBzdWNjZWVkZWQ6IGNvbnRyYWN0cy5Db21tYW5kU3VjY2VlZGVkID0ge307XHJcbiAgICAgICAgICAgIGxldCBldmVudEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSA9IHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMuX2NvbW1hbmRFbnZlbG9wZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50VHlwZTogY29udHJhY3RzLkNvbW1hbmRTdWNjZWVkZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IHN1Y2NlZWRlZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsUHVibGlzaChldmVudEVudmVsb3BlKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uU291cmNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogQyMgdmVyc2lvbiBoYXMgY29tcGxldGlvbiBjYWxsYmFja3MgLSBkbyB3ZSBuZWVkIHRoZXNlP1xyXG4gICAgICAgICAgICAvLyBpZiAoIV9ldmVudHMuSXNEaXNwb3NlZClcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgX2V2ZW50cy5PbkNvbXBsZXRlZCgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuX2NoaWxkQ29tbWFuZHMuaW5kZXhPZihjb21tYW5kKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NoaWxkQ29tbWFuZHNbcG9zXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbChtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gVE9ETzpcclxuICAgICAgICAvLyBUaGUgQyMgY29kZSBhY2NlcHRzIGEgbWVzc2FnZSBhbmQvb3IgYW4gZXhjZXB0aW9uLiBEbyB3ZSBuZWVkIHRvIGFkZCBzdXBwb3J0XHJcbiAgICAgICAgLy8gZm9yIGV4Y2VwdGlvbnM/IChUaGUgVFMgQ29tbWFuZEZhaWxlZCBpbnRlcmZhY2UgZG9lc24ndCBoYXZlIGEgcGxhY2UgZm9yIGl0IHJpZ2h0IG5vdy4pXHJcbiAgICAgICAgdGhpcy5faXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGZhaWxlZDogY29udHJhY3RzLkNvbW1hbmRGYWlsZWQgPSB7IG1lc3NhZ2U6IG1lc3NhZ2UgPz8gXCJDb21tYW5kIEZhaWxlZFwiIH07XHJcbiAgICAgICAgbGV0IGV2ZW50RW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxFdmVudEVudmVsb3BlID0ge1xyXG4gICAgICAgICAgICBjb21tYW5kOiB0aGlzLl9jb21tYW5kRW52ZWxvcGUsXHJcbiAgICAgICAgICAgIGV2ZW50VHlwZTogY29udHJhY3RzLkNvbW1hbmRGYWlsZWRUeXBlLFxyXG4gICAgICAgICAgICBldmVudDogZmFpbGVkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbFB1Ymxpc2goZXZlbnRFbnZlbG9wZSk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0aW9uU291cmNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaXNoKGtlcm5lbEV2ZW50OiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsUHVibGlzaChrZXJuZWxFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJuYWxQdWJsaXNoKGtlcm5lbEV2ZW50OiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSkge1xyXG4gICAgICAgIGlmICgha2VybmVsRXZlbnQuY29tbWFuZCkge1xyXG4gICAgICAgICAgICBrZXJuZWxFdmVudC5jb21tYW5kID0gdGhpcy5fY29tbWFuZEVudmVsb3BlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBrZXJuZWxFdmVudC5jb21tYW5kO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYW5kbGluZ0tlcm5lbCkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkodGhpcy5oYW5kbGluZ0tlcm5lbCk7XHJcbiAgICAgICAgICAgIGlmICghcm91dGluZ3NsaXAuZXZlbnRSb3V0aW5nU2xpcENvbnRhaW5zKGtlcm5lbEV2ZW50LCBrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nc2xpcC5zdGFtcEV2ZW50Um91dGluZ1NsaXAoa2VybmVsRXZlbnQsIGtlcm5lbFVyaSk7XHJcbiAgICAgICAgICAgICAgICBrZXJuZWxFdmVudC5yb3V0aW5nU2xpcDsvLz9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFwic2hvdWxkIG5vdCBiZSBoZXJlXCI7Ly8/XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAga2VybmVsRXZlbnQ7Ly8/XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbW1hbmRFbnZlbG9wZTsvLz9cclxuICAgICAgICBpZiAoY29tbWFuZCA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgICBjb21tYW5kID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgYXJlQ29tbWFuZHNUaGVTYW1lKGNvbW1hbmQhLCB0aGlzLl9jb21tYW5kRW52ZWxvcGUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkQ29tbWFuZHMuaW5jbHVkZXMoY29tbWFuZCEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50U3ViamVjdC5uZXh0KGtlcm5lbEV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNQYXJlbnRPZkNvbW1hbmQoY29tbWFuZEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRGb3VuZCA9IHRoaXMuX2NoaWxkQ29tbWFuZHMuaW5jbHVkZXMoY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRGb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKHRoaXMuX2NvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEtlcm5lbEludm9jYXRpb25Db250ZXh0Ll9jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvbW1hbmRzVGhlU2FtZShlbnZlbG9wZTE6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGVudmVsb3BlMjogY29udHJhY3RzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IGJvb2xlYW4ge1xyXG4gICAgZW52ZWxvcGUxOy8vP1xyXG4gICAgZW52ZWxvcGUyOy8vP1xyXG4gICAgZW52ZWxvcGUxID09PSBlbnZlbG9wZTI7Ly8/XHJcbiAgICBpZiAoZW52ZWxvcGUxID09PSBlbnZlbG9wZTIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzYW1lQ29tbWFuZFR5cGUgPSBlbnZlbG9wZTE/LmNvbW1hbmRUeXBlID09PSBlbnZlbG9wZTI/LmNvbW1hbmRUeXBlOyAvLz9cclxuICAgIGNvbnN0IHNhbWVUb2tlbiA9IGVudmVsb3BlMT8udG9rZW4gPT09IGVudmVsb3BlMj8udG9rZW47IC8vP1xyXG4gICAgY29uc3Qgc2FtZUNvbW1hbmRJZCA9IGVudmVsb3BlMT8uaWQgPT09IGVudmVsb3BlMj8uaWQ7IC8vP1xyXG4gICAgaWYgKHNhbWVDb21tYW5kVHlwZSAmJiBzYW1lVG9rZW4gJiYgc2FtZUNvbW1hbmRJZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBLZXJuZWxDb21tYW5kRW52ZWxvcGUgfSBmcm9tIFwiLi9jb250cmFjdHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHdWlkIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHZhbGlkYXRvciA9IG5ldyBSZWdFeHAoXCJeW2EtejAtOV17OH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17MTJ9JFwiLCBcImlcIik7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBFTVBUWSA9IFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0d1aWQoZ3VpZDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGd1aWQudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gZ3VpZCAmJiAoZ3VpZCBpbnN0YW5jZW9mIEd1aWQgfHwgR3VpZC52YWxpZGF0b3IudGVzdCh2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IEd1aWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3VpZChbR3VpZC5nZW4oMiksIEd1aWQuZ2VuKDEpLCBHdWlkLmdlbigxKSwgR3VpZC5nZW4oMSksIEd1aWQuZ2VuKDMpXS5qb2luKFwiLVwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFbXB0eSgpOiBHdWlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEd1aWQoXCJlbXB0eWd1aWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZShndWlkOiBzdHJpbmcpOiBHdWlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEd1aWQoZ3VpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYXcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gW0d1aWQuZ2VuKDIpLCBHdWlkLmdlbigxKSwgR3VpZC5nZW4oMSksIEd1aWQuZ2VuKDEpLCBHdWlkLmdlbigzKV0uam9pbihcIi1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb3V0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICAgICAgICAgIG91dCArPSAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFndWlkKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50OyBgdmFsdWVgIGhhcyBubyB2YWx1ZS5cIik7IH1cclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IEd1aWQuRU1QVFk7XHJcblxyXG4gICAgICAgIGlmIChndWlkICYmIEd1aWQuaXNHdWlkKGd1aWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBndWlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXF1YWxzKG90aGVyOiBHdWlkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gQ29tcGFyaW5nIHN0cmluZyBgdmFsdWVgIGFnYWluc3QgcHJvdmlkZWQgYGd1aWRgIHdpbGwgYXV0by1jYWxsXHJcbiAgICAgICAgLy8gdG9TdHJpbmcgb24gYGd1aWRgIGZvciBjb21wYXJpc29uXHJcbiAgICAgICAgcmV0dXJuIEd1aWQuaXNHdWlkKG90aGVyKSAmJiB0aGlzLnZhbHVlID09PSBvdGhlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBHdWlkLkVNUFRZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0pTT04oKTogYW55IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUb2tlbihjb21tYW5kRW52ZWxvcGU6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgaWYgKCFjb21tYW5kRW52ZWxvcGUudG9rZW4pIHtcclxuICAgICAgICBjb21tYW5kRW52ZWxvcGUudG9rZW4gPSBHdWlkLmNyZWF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuR2VuZXJhdG9yIHtcclxuICAgIHByaXZhdGUgX3NlZWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9zZWVkID0gR3VpZC5jcmVhdGUoKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXROZXdUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMuX2NvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5fc2VlZH06OiR7dGhpcy5fY291bnRlcn1gO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XHJcbiAgICBJbmZvID0gMCxcclxuICAgIFdhcm4gPSAxLFxyXG4gICAgRXJyb3IgPSAyLFxyXG4gICAgTm9uZSA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIExvZ0VudHJ5ID0ge1xyXG4gICAgbG9nTGV2ZWw6IExvZ0xldmVsO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZGVmYXVsdDogTG9nZ2VyID0gbmV3IExvZ2dlcignZGVmYXVsdCcsIChfZW50cnk6IExvZ0VudHJ5KSA9PiB7IH0pO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IHN0cmluZywgcmVhZG9ubHkgd3JpdGU6IChlbnRyeTogTG9nRW50cnkpID0+IHZvaWQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndyaXRlKHsgbG9nTGV2ZWw6IExvZ0xldmVsLkluZm8sIHNvdXJjZTogdGhpcy5zb3VyY2UsIG1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm4obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53cml0ZSh7IGxvZ0xldmVsOiBMb2dMZXZlbC5XYXJuLCBzb3VyY2U6IHRoaXMuc291cmNlLCBtZXNzYWdlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndyaXRlKHsgbG9nTGV2ZWw6IExvZ0xldmVsLkVycm9yLCBzb3VyY2U6IHRoaXMuc291cmNlLCBtZXNzYWdlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29uZmlndXJlKHNvdXJjZTogc3RyaW5nLCB3cml0ZXI6IChlbnRyeTogTG9nRW50cnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHNvdXJjZSwgd3JpdGVyKTtcclxuICAgICAgICBMb2dnZXIuX2RlZmF1bHQgPSBsb2dnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZGVmYXVsdCgpOiBMb2dnZXIge1xyXG4gICAgICAgIGlmIChMb2dnZXIuX2RlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIExvZ2dlci5fZGVmYXVsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbG9nZ2VyIGhhcyBiZWVuIGNvbmZpZ3VyZWQgZm9yIHRoaXMgY29udGV4dCcpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UgfSBmcm9tIFwiLi9wcm9taXNlQ29tcGxldGlvblNvdXJjZVwiO1xyXG5cclxuaW50ZXJmYWNlIFNjaGVkdWxlck9wZXJhdGlvbjxUPiB7XHJcbiAgICB2YWx1ZTogVDtcclxuICAgIGV4ZWN1dG9yOiAodmFsdWU6IFQpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBwcm9taXNlQ29tcGxldGlvblNvdXJjZTogUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8dm9pZD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJuZWxTY2hlZHVsZXI8VD4ge1xyXG4gICAgc2V0TXVzdFRyYW1wb2xpbmUocHJlZGljYXRlOiAoYzogVCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX211c3RUcmFtcG9saW5lID0gcHJlZGljYXRlID8/ICgoX2MpID0+IGZhbHNlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX29wZXJhdGlvblF1ZXVlOiBBcnJheTxTY2hlZHVsZXJPcGVyYXRpb248VD4+ID0gW107XHJcbiAgICBwcml2YXRlIF9pbkZsaWdodE9wZXJhdGlvbj86IFNjaGVkdWxlck9wZXJhdGlvbjxUPjtcclxuICAgIHByaXZhdGUgX211c3RUcmFtcG9saW5lOiAoYzogVCkgPT4gYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX211c3RUcmFtcG9saW5lID0gKF9jKSA9PiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsQ3VycmVudE9wZXJhdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pbkZsaWdodE9wZXJhdGlvbj8ucHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UucmVqZWN0KG5ldyBFcnJvcihcIk9wZXJhdGlvbiBjYW5jZWxsZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bkFzeW5jKHZhbHVlOiBULCBleGVjdXRvcjogKHZhbHVlOiBUKSA9PiBQcm9taXNlPHZvaWQ+KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uID0ge1xyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgZXhlY3V0b3IsXHJcbiAgICAgICAgICAgIHByb21pc2VDb21wbGV0aW9uU291cmNlOiBuZXcgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8dm9pZD4oKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtdXN0VHJhbXBvbGluZSA9IHRoaXMuX211c3RUcmFtcG9saW5lKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0T3BlcmF0aW9uICYmICFtdXN0VHJhbXBvbGluZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWxTY2hlZHVsZXI6IHN0YXJ0aW5nIGltbWVkaWF0ZSBleGVjdXRpb24gb2YgJHtKU09OLnN0cmluZ2lmeShvcGVyYXRpb24udmFsdWUpfWApO1xyXG5cclxuICAgICAgICAgICAgLy8gaW52b2tlIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVyYXRpb24uZXhlY3V0b3Iob3BlcmF0aW9uLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbFNjaGVkdWxlcjogaW1tZWRpYXRlIGV4ZWN1dGlvbiBjb21wbGV0ZWQ6ICR7SlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uLnZhbHVlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWxTY2hlZHVsZXI6IGltbWVkaWF0ZSBleGVjdXRpb24gZmFpbGVkOiAke0pTT04uc3RyaW5naWZ5KGUpfSAtICR7SlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uLnZhbHVlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UucmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWxTY2hlZHVsZXI6IHNjaGVkdWxpbmcgZXhlY3V0aW9uIG9mICR7SlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uLnZhbHVlKX1gKTtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb25RdWV1ZS5wdXNoKG9wZXJhdGlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wZXJhdGlvblF1ZXVlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZU5leHRDb21tYW5kKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbi5wcm9taXNlQ29tcGxldGlvblNvdXJjZS5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhlY3V0ZU5leHRDb21tYW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5leHRPcGVyYXRpb24gPSB0aGlzLl9vcGVyYXRpb25RdWV1ZS5sZW5ndGggPiAwID8gdGhpcy5fb3BlcmF0aW9uUXVldWVbMF0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKG5leHRPcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5faW5GbGlnaHRPcGVyYXRpb24gPSBuZXh0T3BlcmF0aW9uO1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWxTY2hlZHVsZXI6IHN0YXJ0aW5nIHNjaGVkdWxlZCBleGVjdXRpb24gb2YgJHtKU09OLnN0cmluZ2lmeShuZXh0T3BlcmF0aW9uLnZhbHVlKX1gKTtcclxuICAgICAgICAgICAgbmV4dE9wZXJhdGlvbi5leGVjdXRvcihuZXh0T3BlcmF0aW9uLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luRmxpZ2h0T3BlcmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbFNjaGVkdWxlcjogY29tcGxldGluZyBpbmZsaWdodCBvcGVyYXRpb246IHN1Y2Nlc3MgJHtKU09OLnN0cmluZ2lmeShuZXh0T3BlcmF0aW9uLnZhbHVlKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0T3BlcmF0aW9uLnByb21pc2VDb21wbGV0aW9uU291cmNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5GbGlnaHRPcGVyYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhga2VybmVsU2NoZWR1bGVyOiBjb21wbGV0aW5nIGluZmxpZ2h0IG9wZXJhdGlvbjogZmFpbHVyZSAke0pTT04uc3RyaW5naWZ5KGUpfSAtICR7SlNPTi5zdHJpbmdpZnkobmV4dE9wZXJhdGlvbi52YWx1ZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dE9wZXJhdGlvbi5wcm9taXNlQ29tcGxldGlvblNvdXJjZS5yZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcGVyYXRpb25RdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVOZXh0Q29tbWFuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCwgYXJlQ29tbWFuZHNUaGVTYW1lIH0gZnJvbSBcIi4va2VybmVsSW52b2NhdGlvbkNvbnRleHRcIjtcclxuaW1wb3J0IHsgVG9rZW5HZW5lcmF0b3IsIEd1aWQgfSBmcm9tIFwiLi90b2tlbkdlbmVyYXRvclwiO1xyXG5pbXBvcnQgKiBhcyBjb250cmFjdHMgZnJvbSBcIi4vY29udHJhY3RzXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBDb21wb3NpdGVLZXJuZWwgfSBmcm9tIFwiLi9jb21wb3NpdGVLZXJuZWxcIjtcclxuaW1wb3J0IHsgS2VybmVsU2NoZWR1bGVyIH0gZnJvbSBcIi4va2VybmVsU2NoZWR1bGVyXCI7XHJcbmltcG9ydCB7IFByb21pc2VDb21wbGV0aW9uU291cmNlIH0gZnJvbSBcIi4vcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2VcIjtcclxuaW1wb3J0ICogYXMgZGlzcG9zYWJsZXMgZnJvbSBcIi4vZGlzcG9zYWJsZXNcIjtcclxuaW1wb3J0ICogYXMgcm91dGluZ3NsaXAgZnJvbSBcIi4vcm91dGluZ3NsaXBcIjtcclxuaW1wb3J0ICogYXMgcnhqcyBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJS2VybmVsQ29tbWFuZEludm9jYXRpb24ge1xyXG4gICAgY29tbWFuZEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlO1xyXG4gICAgY29udGV4dDogS2VybmVsSW52b2NhdGlvbkNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtlcm5lbENvbW1hbmRIYW5kbGVyIHtcclxuICAgIGNvbW1hbmRUeXBlOiBzdHJpbmc7XHJcbiAgICBoYW5kbGU6IChjb21tYW5kSW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElLZXJuZWxFdmVudE9ic2VydmVyIHtcclxuICAgIChrZXJuZWxFdmVudDogY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGUpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcm5lbCB7XHJcbiAgICBwcml2YXRlIF9rZXJuZWxJbmZvOiBjb250cmFjdHMuS2VybmVsSW5mbztcclxuICAgIHByaXZhdGUgX2NvbW1hbmRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCBJS2VybmVsQ29tbWFuZEhhbmRsZXI+KCk7XHJcbiAgICBwcml2YXRlIF9ldmVudFN1YmplY3QgPSBuZXcgcnhqcy5TdWJqZWN0PGNvbnRyYWN0cy5LZXJuZWxFdmVudEVudmVsb3BlPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdG9rZW5HZW5lcmF0b3I6IFRva2VuR2VuZXJhdG9yID0gbmV3IFRva2VuR2VuZXJhdG9yKCk7XHJcbiAgICBwdWJsaWMgcm9vdEtlcm5lbDogS2VybmVsID0gdGhpcztcclxuICAgIHB1YmxpYyBwYXJlbnRLZXJuZWw6IENvbXBvc2l0ZUtlcm5lbCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVyPzogS2VybmVsU2NoZWR1bGVyPGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGU+IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQga2VybmVsSW5mbygpOiBjb250cmFjdHMuS2VybmVsSW5mbyB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXJuZWxJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQga2VybmVsRXZlbnRzKCk6IHJ4anMuT2JzZXJ2YWJsZTxjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgbmFtZTogc3RyaW5nLCBsYW5ndWFnZU5hbWU/OiBzdHJpbmcsIGxhbmd1YWdlVmVyc2lvbj86IHN0cmluZywgZGlzcGxheU5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9rZXJuZWxJbmZvID0ge1xyXG4gICAgICAgICAgICBpc1Byb3h5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNDb21wb3NpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2NhbE5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlTmFtZTogbGFuZ3VhZ2VOYW1lLFxyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXSxcclxuICAgICAgICAgICAgdXJpOiByb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkoYGtlcm5lbDovL2xvY2FsLyR7bmFtZX1gKSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2VWZXJzaW9uOiBsYW5ndWFnZVZlcnNpb24sXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSA/PyBuYW1lLFxyXG4gICAgICAgICAgICBzdXBwb3J0ZWREaXJlY3RpdmVzOiBbXSxcclxuICAgICAgICAgICAgc3VwcG9ydGVkS2VybmVsQ29tbWFuZHM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbFJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoe1xyXG4gICAgICAgICAgICBjb21tYW5kVHlwZTogY29udHJhY3RzLlJlcXVlc3RLZXJuZWxJbmZvVHlwZSwgaGFuZGxlOiBhc3luYyBpbnZvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUmVxdWVzdEtlcm5lbEluZm8oaW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlUmVxdWVzdEtlcm5lbEluZm8oaW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRFbnZlbG9wZTogY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGUgPSB7XHJcbiAgICAgICAgICAgIGV2ZW50VHlwZTogY29udHJhY3RzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IGludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLFxyXG4gICAgICAgICAgICBldmVudDogPGNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWQ+eyBrZXJuZWxJbmZvOiB0aGlzLl9rZXJuZWxJbmZvIH1cclxuICAgICAgICB9Oy8vP1xyXG5cclxuICAgICAgICBpbnZvY2F0aW9uLmNvbnRleHQucHVibGlzaChldmVudEVudmVsb3BlKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTY2hlZHVsZXIoKTogS2VybmVsU2NoZWR1bGVyPGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGU+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NjaGVkdWxlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSB0aGlzLnBhcmVudEtlcm5lbD8uZ2V0U2NoZWR1bGVyKCkgPz8gbmV3IEtlcm5lbFNjaGVkdWxlcjxjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZW5zdXJlQ29tbWFuZFRva2VuQW5kSWQoY29tbWFuZEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKSB7XHJcbiAgICAgICAgaWYgKCFjb21tYW5kRW52ZWxvcGUudG9rZW4pIHtcclxuICAgICAgICAgICAgbGV0IG5leHRUb2tlbiA9IHRoaXMuX3Rva2VuR2VuZXJhdG9yLkdldE5ld1Rva2VuKCk7XHJcbiAgICAgICAgICAgIGlmIChLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5jdXJyZW50Py5jb21tYW5kRW52ZWxvcGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGEgcGFyZW50IGNvbW1hbmQgZXhpc3RzLCBjcmVhdGUgYSB0b2tlbiBoaWVyYXJjaHlcclxuICAgICAgICAgICAgICAgIG5leHRUb2tlbiA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQuY29tbWFuZEVudmVsb3BlLnRva2VuITtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21tYW5kRW52ZWxvcGUudG9rZW4gPSBuZXh0VG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbW1hbmRFbnZlbG9wZS5pZCkge1xyXG4gICAgICAgICAgICBjb21tYW5kRW52ZWxvcGUuaWQgPSBHdWlkLmNyZWF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudCgpOiBLZXJuZWwgfCBudWxsIHtcclxuICAgICAgICBpZiAoS2VybmVsSW52b2NhdGlvbkNvbnRleHQuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuY3VycmVudC5oYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCByb290KCk6IEtlcm5lbCB8IG51bGwge1xyXG4gICAgICAgIGlmIChLZXJuZWwuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gS2VybmVsLmN1cnJlbnQucm9vdEtlcm5lbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSXMgaXQgd29ydGggdXMgZ29pbmcgdG8gZWZmb3J0cyB0byBlbnN1cmUgdGhhdCB0aGUgUHJvbWlzZSByZXR1cm5lZCBoZXJlIGFjY3VyYXRlbHkgcmVmbGVjdHNcclxuICAgIC8vIHRoZSBjb21tYW5kJ3MgcHJvZ3Jlc3M/IFRoZSBvbmx5IHRoaW5nIHRoYXQgYWN0dWFsbHkgY2FsbHMgdGhpcyBpcyB0aGUga2VybmVsIGNoYW5uZWwsIHRocm91Z2hcclxuICAgIC8vIHRoZSBjYWxsYmFjayBzZXQgdXAgYnkgYXR0YWNoS2VybmVsVG9DaGFubmVsLCBhbmQgdGhlIGNhbGxiYWNrIGlzIGV4cGVjdGVkIHRvIHJldHVybiB2b2lkLCBzb1xyXG4gICAgLy8gbm90aGluZyBpcyBldmVyIGdvaW5nIHRvIGxvb2sgYXQgdGhlIHByb21pc2Ugd2UgcmV0dXJuIGhlcmUuXHJcbiAgICBhc3luYyBzZW5kKGNvbW1hbmRFbnZlbG9wZTogY29udHJhY3RzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuZW5zdXJlQ29tbWFuZFRva2VuQW5kSWQoY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkodGhpcyk7XHJcbiAgICAgICAgaWYgKCFyb3V0aW5nc2xpcC5jb21tYW5kUm91dGluZ1NsaXBDb250YWlucyhjb21tYW5kRW52ZWxvcGUsIGtlcm5lbFVyaSkpIHtcclxuICAgICAgICAgICAgcm91dGluZ3NsaXAuc3RhbXBDb21tYW5kUm91dGluZ1NsaXBBc0Fycml2ZWQoY29tbWFuZEVudmVsb3BlLCBrZXJuZWxVcmkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0Lndhcm4oYFRyeWluZyB0byBzdGFtcCAke2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX0gYXMgYXJyaXZlZCBidXQgdXJpICR7a2VybmVsVXJpfSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcDsvLz9cclxuICAgICAgICBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5lc3RhYmxpc2goY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2hlZHVsZXIoKS5ydW5Bc3luYyhjb21tYW5kRW52ZWxvcGUsICh2YWx1ZSkgPT4gdGhpcy5leGVjdXRlQ29tbWFuZCh2YWx1ZSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcm91dGluZ3NsaXAuY29tbWFuZFJvdXRpbmdTbGlwQ29udGFpbnMoY29tbWFuZEVudmVsb3BlLCBrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nc2xpcC5zdGFtcENvbW1hbmRSb3V0aW5nU2xpcChjb21tYW5kRW52ZWxvcGUsIGtlcm5lbFVyaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBUcnlpbmcgdG8gc3RhbXAgJHtjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGV9IGFzIGNvbXBsZXRlZCBidXQgdXJpICR7a2VybmVsVXJpfSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlQ29tbWFuZChjb21tYW5kRW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0LmVzdGFibGlzaChjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c0hhbmRsaW5nS2VybmVsID0gY29udGV4dC5oYW5kbGluZ0tlcm5lbDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVDb21tYW5kKGNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmFpbCgoPGFueT5lKT8ubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldmlvdXNIYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tbWFuZEhhbmRsZXIoY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kVHlwZSk6IElLZXJuZWxDb21tYW5kSGFuZGxlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbW1hbmRIYW5kbGVycy5nZXQoY29tbWFuZFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNvbW1hbmQoY29tbWFuZEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5lc3RhYmxpc2goY29tbWFuZEVudmVsb3BlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VkSGVuZGxpbmdLZXJuZWwgPSBjb250ZXh0LmhhbmRsaW5nS2VybmVsO1xyXG4gICAgICAgICAgICBjb250ZXh0LmhhbmRsaW5nS2VybmVsID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IGlzUm9vdENvbW1hbmQgPSBhcmVDb21tYW5kc1RoZVNhbWUoY29udGV4dC5jb21tYW5kRW52ZWxvcGUsIGNvbW1hbmRFbnZlbG9wZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRTdWJzY3JpcHRpb246IHJ4anMuU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkOy8vP1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzUm9vdENvbW1hbmQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbFR5cGUgPSAodGhpcy5rZXJuZWxJbmZvLmlzUHJveHkgPyBcInByb3h5XCIgOiBcIlwiKSArICh0aGlzLmtlcm5lbEluZm8uaXNDb21wb3NpdGUgPyBcImNvbXBvc2l0ZVwiIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWwgJHt0aGlzLm5hbWV9IG9mIHR5cGUgJHtrZXJuZWxUeXBlfSBzdWJzY3JpYmluZyB0byBjb250ZXh0IGV2ZW50c2ApO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRTdWJzY3JpcHRpb24gPSBjb250ZXh0Lmtlcm5lbEV2ZW50cy5waXBlKHJ4anMubWFwKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBga2VybmVsICR7dGhpcy5uYW1lfSBvZiB0eXBlICR7a2VybmVsVHlwZX0gc2F3IGV2ZW50ICR7ZS5ldmVudFR5cGV9IHdpdGggdG9rZW4gJHtlLmNvbW1hbmQ/LnRva2VufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTsvLz9cclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbFVyaSA9IGdldEtlcm5lbFVyaSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJvdXRpbmdzbGlwLmV2ZW50Um91dGluZ1NsaXBDb250YWlucyhlLCBrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmdzbGlwLnN0YW1wRXZlbnRSb3V0aW5nU2xpcChlLCBrZXJuZWxVcmkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdWxkIG5vdCBnZXQgaGVyZVwiOy8vP1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5wdWJsaXNoRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5nZXRDb21tYW5kSGFuZGxlcihjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWwgJHt0aGlzLm5hbWV9IGFib3V0IHRvIGhhbmRsZSBjb21tYW5kOiAke0pTT04uc3RyaW5naWZ5KGNvbW1hbmRFbnZlbG9wZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5oYW5kbGUoeyBjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRFbnZlbG9wZSwgY29udGV4dCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbXBsZXRlKGNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpb3VkSGVuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUm9vdENvbW1hbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWwgJHt0aGlzLm5hbWV9IGRvbmUgaGFuZGxpbmcgY29tbWFuZDogJHtKU09OLnN0cmluZ2lmeShjb21tYW5kRW52ZWxvcGUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5mYWlsKCg8YW55PmUpPy5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldmlvdWRIZW5kbGluZ0tlcm5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSb290Q29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSBwcmV2aW91ZEhlbmRsaW5nS2VybmVsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUm9vdENvbW1hbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYE5vIGhhbmRsZXIgZm91bmQgZm9yIGNvbW1hbmQgdHlwZSAke2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX1gKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVUb0tlcm5lbEV2ZW50cyhvYnNlcnZlcjogY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGVPYnNlcnZlcik6IGRpc3Bvc2FibGVzLkRpc3Bvc2FibGVTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX2V2ZW50U3ViamVjdC5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXNwb3NlOiAoKSA9PiB7IHN1Yi51bnN1YnNjcmliZSgpOyB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FuSGFuZGxlKGNvbW1hbmRFbnZlbG9wZTogY29udHJhY3RzLktlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgICAgIGlmIChjb21tYW5kRW52ZWxvcGUuY29tbWFuZC50YXJnZXRLZXJuZWxOYW1lICYmIGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUgIT09IHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmkgPSByb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkoY29tbWFuZEVudmVsb3BlLmNvbW1hbmQuZGVzdGluYXRpb25VcmkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXJuZWxJbmZvLnVyaSAhPT0gbm9ybWFsaXplZFVyaSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdXBwb3J0c0NvbW1hbmQoY29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0c0NvbW1hbmQoY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21tYW5kSGFuZGxlcnMuaGFzKGNvbW1hbmRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNvbW1hbmRIYW5kbGVyKGhhbmRsZXI6IElLZXJuZWxDb21tYW5kSGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIFdoZW4gYSByZWdpc3RyYXRpb24gYWxyZWFkeSBleGlzdGVkLCB3ZSB3YW50IHRvIG92ZXJ3cml0ZSBpdCBiZWNhdXNlIHdlIHdhbnQgdXNlcnMgdG9cclxuICAgICAgICAvLyBiZSBhYmxlIHRvIGRldmVsb3AgaGFuZGxlcnMgaXRlcmF0aXZlbHksIGFuZCBpdCB3b3VsZCBiZSB1bmhlbHBmdWwgZm9yIGhhbmRsZXIgcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgLy8gZm9yIGFueSBwYXJ0aWN1bGFyIGNvbW1hbmQgdG8gYmUgY3VtdWxhdGl2ZS5cclxuXHJcbiAgICAgICAgY29uc3Qgc2hvdWxkTm90aWZ5ID0gIXRoaXMuX2NvbW1hbmRIYW5kbGVycy5oYXMoaGFuZGxlci5jb21tYW5kVHlwZSk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxSZWdpc3RlckNvbW1hbmRIYW5kbGVyKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmIChzaG91bGROb3RpZnkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQ6IGNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWQgPSB7XHJcbiAgICAgICAgICAgICAgICBrZXJuZWxJbmZvOiB0aGlzLl9rZXJuZWxJbmZvLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBlbnZlbG9wZTogY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGUgPSB7XHJcbiAgICAgICAgICAgICAgICBldmVudFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJvdXRpbmdzbGlwLnN0YW1wRXZlbnRSb3V0aW5nU2xpcChlbnZlbG9wZSwgZ2V0S2VybmVsVXJpKHRoaXMpKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZW52ZWxvcGUuY29tbWFuZCA9IGNvbnRleHQuY29tbWFuZEVudmVsb3BlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHQucHVibGlzaChlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hFdmVudChlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxSZWdpc3RlckNvbW1hbmRIYW5kbGVyKGhhbmRsZXI6IElLZXJuZWxDb21tYW5kSGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbW1hbmRIYW5kbGVycy5zZXQoaGFuZGxlci5jb21tYW5kVHlwZSwgaGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsSW5mby5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcyA9IEFycmF5LmZyb20odGhpcy5fY29tbWFuZEhhbmRsZXJzLmtleXMoKSkubWFwKGNvbW1hbmROYW1lID0+ICh7IG5hbWU6IGNvbW1hbmROYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SGFuZGxpbmdLZXJuZWwoY29tbWFuZEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlLCBjb250ZXh0PzogS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfCBudWxsKTogS2VybmVsIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuSGFuZGxlKGNvbW1hbmRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGV4dD8uZmFpbChgQ29tbWFuZCAke2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX0gaXMgbm90IHN1cHBvcnRlZCBieSBLZXJuZWwgJHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcHVibGlzaEV2ZW50KGtlcm5lbEV2ZW50OiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50U3ViamVjdC5uZXh0KGtlcm5lbEV2ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdENvbW1hbmRBbmRHZXRSZXN1bHQ8VEV2ZW50IGV4dGVuZHMgY29udHJhY3RzLktlcm5lbEV2ZW50PihrZXJuZWw6IEtlcm5lbCwgY29tbWFuZEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsQ29tbWFuZEVudmVsb3BlLCBleHBlY3RlZEV2ZW50VHlwZTogY29udHJhY3RzLktlcm5lbEV2ZW50VHlwZSk6IFByb21pc2U8VEV2ZW50PiB7XHJcbiAgICBsZXQgY29tcGxldGlvblNvdXJjZSA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTxURXZlbnQ+KCk7XHJcbiAgICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xyXG4gICAgbGV0IGRpc3Bvc2FibGUgPSBrZXJuZWwuc3Vic2NyaWJlVG9LZXJuZWxFdmVudHMoZXZlbnRFbnZlbG9wZSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50RW52ZWxvcGUuY29tbWFuZD8udG9rZW4gPT09IGNvbW1hbmRFbnZlbG9wZS50b2tlbikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50RW52ZWxvcGUuZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbnRyYWN0cy5Db21tYW5kRmFpbGVkVHlwZTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnIgPSA8Y29udHJhY3RzLkNvbW1hbmRGYWlsZWQ+ZXZlbnRFbnZlbG9wZS5ldmVudDsvLz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvblNvdXJjZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbnRyYWN0cy5Db21tYW5kU3VjY2VlZGVkVHlwZTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJlQ29tbWFuZHNUaGVTYW1lKGV2ZW50RW52ZWxvcGUuY29tbWFuZCEsIGNvbW1hbmRFbnZlbG9wZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKGV2ZW50RW52ZWxvcGUuY29tbWFuZD8uaWQgPT09IGNvbW1hbmRFbnZlbG9wZS5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkKSB7Ly8/ICgkID8gZXZlbnRFbnZlbG9wZSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uU291cmNlLnJlamVjdCgnQ29tbWFuZCB3YXMgaGFuZGxlZCBiZWZvcmUgcmVwb3J0aW5nIGV4cGVjdGVkIHJlc3VsdC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudEVudmVsb3BlLmV2ZW50VHlwZSA9PT0gZXhwZWN0ZWRFdmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IDxURXZlbnQ+ZXZlbnRFbnZlbG9wZS5ldmVudDsvLz8gKCQgPyBldmVudEVudmVsb3BlIDoge30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZShldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBrZXJuZWwuc2VuZChjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsZXRpb25Tb3VyY2UucHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEtlcm5lbFVyaShrZXJuZWw6IEtlcm5lbCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4ga2VybmVsLmtlcm5lbEluZm8udXJpID8/IGBrZXJuZWw6Ly9sb2NhbC8ke2tlcm5lbC5rZXJuZWxJbmZvLmxvY2FsTmFtZX1gO1xyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHJvdXRpbmdzbGlwIGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmltcG9ydCAqIGFzIGNvbnRyYWN0cyBmcm9tIFwiLi9jb250cmFjdHNcIjtcclxuaW1wb3J0IHsgZ2V0S2VybmVsVXJpLCBJS2VybmVsQ29tbWFuZEludm9jYXRpb24sIEtlcm5lbCB9IGZyb20gXCIuL2tlcm5lbFwiO1xyXG5pbXBvcnQgeyBLZXJuZWxIb3N0IH0gZnJvbSBcIi4va2VybmVsSG9zdFwiO1xyXG5pbXBvcnQgeyBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB9IGZyb20gXCIuL2tlcm5lbEludm9jYXRpb25Db250ZXh0XCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUtlcm5lbCBleHRlbmRzIEtlcm5lbCB7XHJcbiAgICBwcml2YXRlIF9ob3N0OiBLZXJuZWxIb3N0IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZWZhdWx0S2VybmVsTmFtZXNCeUNvbW1hbmRUeXBlOiBNYXA8Y29udHJhY3RzLktlcm5lbENvbW1hbmRUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGRlZmF1bHRLZXJuZWxOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9jaGlsZEtlcm5lbHM6IEtlcm5lbENvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5rZXJuZWxJbmZvLmlzQ29tcG9zaXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMgPSBuZXcgS2VybmVsQ29sbGVjdGlvbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2hpbGRLZXJuZWxzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2NoaWxkS2VybmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvc3QoKTogS2VybmVsSG9zdCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBob3N0KGhvc3Q6IEtlcm5lbEhvc3QgfCBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXJuZWxJbmZvLnVyaSA9IHRoaXMuX2hvc3QudXJpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMubm90aWZ5VGhhdEhvc3RXYXNTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGFzeW5jIGhhbmRsZVJlcXVlc3RLZXJuZWxJbmZvKGludm9jYXRpb246IElLZXJuZWxDb21tYW5kSW52b2NhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICBjb25zdCBldmVudEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSA9IHtcclxuICAgICAgICAgICAgZXZlbnRUeXBlOiBjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSxcclxuICAgICAgICAgICAgY29tbWFuZDogaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUsXHJcbiAgICAgICAgICAgIGV2ZW50OiA8Y29udHJhY3RzLktlcm5lbEluZm9Qcm9kdWNlZD57IGtlcm5lbEluZm86IHRoaXMua2VybmVsSW5mbyB9XHJcbiAgICAgICAgfTsvLz9cclxuXHJcbiAgICAgICAgaW52b2NhdGlvbi5jb250ZXh0LnB1Ymxpc2goZXZlbnRFbnZlbG9wZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtlcm5lbCBvZiB0aGlzLl9jaGlsZEtlcm5lbHMpIHtcclxuICAgICAgICAgICAgaWYgKGtlcm5lbC5zdXBwb3J0c0NvbW1hbmQoaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZENvbW1hbmQ6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5SZXF1ZXN0S2VybmVsSW5mb1R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRLZXJuZWxOYW1lOiBrZXJuZWwua2VybmVsSW5mby5sb2NhbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmdTbGlwOiBbXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdzbGlwLmNvbnRpbnVlQ29tbWFuZFJvdXRpbmdTbGlwKGNoaWxkQ29tbWFuZCwgaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAgfHwgW10pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQga2VybmVsLmhhbmRsZUNvbW1hbmQoY2hpbGRDb21tYW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGQoa2VybmVsOiBLZXJuZWwsIGFsaWFzZXM/OiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmICgha2VybmVsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImtlcm5lbCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdEtlcm5lbE5hbWUpIHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBmaXJzdCBrZXJuZWxcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2VybmVsTmFtZSA9IGtlcm5lbC5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2VybmVsLnBhcmVudEtlcm5lbCA9IHRoaXM7XHJcbiAgICAgICAga2VybmVsLnJvb3RLZXJuZWwgPSB0aGlzLnJvb3RLZXJuZWw7XHJcbiAgICAgICAga2VybmVsLmtlcm5lbEV2ZW50cy5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50Oy8vP1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2VybmVsVXJpID0gZ2V0S2VybmVsVXJpKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0aW5nc2xpcC5ldmVudFJvdXRpbmdTbGlwQ29udGFpbnMoZXZlbnQsIGtlcm5lbFVyaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0aW5nc2xpcC5zdGFtcEV2ZW50Um91dGluZ1NsaXAoZXZlbnQsIGtlcm5lbFVyaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBldmVudDsvLz9cclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWxpYXNlcykge1xyXG4gICAgICAgICAgICBsZXQgc2V0ID0gbmV3IFNldChhbGlhc2VzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXJuZWwua2VybmVsSW5mby5hbGlhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhbGlhcyBpbiBrZXJuZWwua2VybmVsSW5mby5hbGlhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0LmFkZChhbGlhcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtlcm5lbC5rZXJuZWxJbmZvLmFsaWFzZXMgPSBBcnJheS5mcm9tKHNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMuYWRkKGtlcm5lbCwgYWxpYXNlcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25Db250ZXh0ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuY3VycmVudDtcclxuXHJcbiAgICAgICAgaWYgKGludm9jYXRpb25Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmNvbW1hbmRFbnZlbG9wZTsvLz9cclxuICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQucHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBldmVudFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IDxjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkPntcclxuICAgICAgICAgICAgICAgICAgICBrZXJuZWxJbmZvOiBrZXJuZWwua2VybmVsSW5mb1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6IGludm9jYXRpb25Db250ZXh0LmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1Ymxpc2hFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBldmVudFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IDxjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkPntcclxuICAgICAgICAgICAgICAgICAgICBrZXJuZWxJbmZvOiBrZXJuZWwua2VybmVsSW5mb1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEtlcm5lbEJ5VXJpKHVyaTogc3RyaW5nKTogS2VybmVsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkID0gcm91dGluZ3NsaXAuY3JlYXRlS2VybmVsVXJpKHVyaSk7XHJcbiAgICAgICAgaWYgKHRoaXMua2VybmVsSW5mby51cmkgPT09IG5vcm1hbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZEtlcm5lbHMudHJ5R2V0QnlVcmkobm9ybWFsaXplZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEtlcm5lbEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICh0aGlzLmtlcm5lbEluZm8ubG9jYWxOYW1lID09PSBuYW1lIHx8IHRoaXMua2VybmVsSW5mby5hbGlhc2VzLmZpbmQoYSA9PiBhID09PSBuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkS2VybmVscy50cnlHZXRCeUFsaWFzKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRLZXJuZWxzKHByZWRpY2F0ZTogKGtlcm5lbDogS2VybmVsKSA9PiBib29sZWFuKTogS2VybmVsW10ge1xyXG4gICAgICAgIHZhciByZXN1bHRzOiBLZXJuZWxbXSA9IFtdO1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUodGhpcykpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrZXJuZWwgb2YgdGhpcy5jaGlsZEtlcm5lbHMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShrZXJuZWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goa2VybmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBmaW5kS2VybmVsKHByZWRpY2F0ZTogKGtlcm5lbDogS2VybmVsKSA9PiBib29sZWFuKTogS2VybmVsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAocHJlZGljYXRlKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZEtlcm5lbHMuZmluZChwcmVkaWNhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmF1bHRUYXJnZXRLZXJuZWxOYW1lRm9yQ29tbWFuZChjb21tYW5kVHlwZTogY29udHJhY3RzLktlcm5lbENvbW1hbmRUeXBlLCBrZXJuZWxOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0S2VybmVsTmFtZXNCeUNvbW1hbmRUeXBlLnNldChjb21tYW5kVHlwZSwga2VybmVsTmFtZSk7XHJcbiAgICB9XHJcbiAgICBvdmVycmlkZSBoYW5kbGVDb21tYW5kKGNvbW1hbmRFbnZlbG9wZTogY29udHJhY3RzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25Db250ZXh0ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuY3VycmVudDtcclxuXHJcbiAgICAgICAgbGV0IGtlcm5lbCA9IGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUgPT09IHRoaXMubmFtZVxyXG4gICAgICAgICAgICA/IHRoaXNcclxuICAgICAgICAgICAgOiB0aGlzLmdldEhhbmRsaW5nS2VybmVsKGNvbW1hbmRFbnZlbG9wZSwgaW52b2NhdGlvbkNvbnRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcHJldml1c29IYW5kbGluZ0tlcm5lbCA9IGludm9jYXRpb25Db250ZXh0Py5oYW5kbGluZ0tlcm5lbCA/PyBudWxsO1xyXG5cclxuICAgICAgICBpZiAoa2VybmVsID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSBrZXJuZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZEVudmVsb3BlKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldml1c29IYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXJuZWwpIHtcclxuICAgICAgICAgICAgaWYgKGludm9jYXRpb25Db250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IGtlcm5lbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkoa2VybmVsKTtcclxuICAgICAgICAgICAgaWYgKCFyb3V0aW5nc2xpcC5jb21tYW5kUm91dGluZ1NsaXBDb250YWlucyhjb21tYW5kRW52ZWxvcGUsIGtlcm5lbFVyaSkpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdzbGlwLnN0YW1wQ29tbWFuZFJvdXRpbmdTbGlwQXNBcnJpdmVkKGNvbW1hbmRFbnZlbG9wZSwga2VybmVsVXJpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0Lndhcm4oYFRyeWluZyB0byBzdGFtcCAke2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX0gYXMgYXJyaXZlZCBidXQgdXJpICR7a2VybmVsVXJpfSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGtlcm5lbC5oYW5kbGVDb21tYW5kKGNvbW1hbmRFbnZlbG9wZSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW52b2NhdGlvbkNvbnRleHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpdXNvSGFuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRpbmdzbGlwLmNvbW1hbmRSb3V0aW5nU2xpcENvbnRhaW5zKGNvbW1hbmRFbnZlbG9wZSwga2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmdzbGlwLnN0YW1wQ29tbWFuZFJvdXRpbmdTbGlwKGNvbW1hbmRFbnZlbG9wZSwga2VybmVsVXJpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQud2FybihgVHJ5aW5nIHRvIHN0YW1wICR7Y29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlfSBhcyBjb21wbGV0ZWQgYnV0IHVyaSAke2tlcm5lbFVyaX0gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpdXNvSGFuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJLZXJuZWwgbm90IGZvdW5kOiBcIiArIGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBvdmVycmlkZSBnZXRIYW5kbGluZ0tlcm5lbChjb21tYW5kRW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGNvbnRleHQ/OiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB8IG51bGwpOiBLZXJuZWwgfCBudWxsIHtcclxuXHJcbiAgICAgICAgbGV0IGtlcm5lbDogS2VybmVsIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSByb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkoY29tbWFuZEVudmVsb3BlLmNvbW1hbmQuZGVzdGluYXRpb25VcmkpO1xyXG4gICAgICAgICAgICBrZXJuZWwgPSB0aGlzLl9jaGlsZEtlcm5lbHMudHJ5R2V0QnlVcmkobm9ybWFsaXplZCkgPz8gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGtlcm5lbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtlcm5lbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhcmdldEtlcm5lbE5hbWUgPSBjb21tYW5kRW52ZWxvcGUuY29tbWFuZC50YXJnZXRLZXJuZWxOYW1lO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0S2VybmVsTmFtZSA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldEtlcm5lbE5hbWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuSGFuZGxlKGNvbW1hbmRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRLZXJuZWxOYW1lID0gdGhpcy5fZGVmYXVsdEtlcm5lbE5hbWVzQnlDb21tYW5kVHlwZS5nZXQoY29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlKSA/PyB0aGlzLmRlZmF1bHRLZXJuZWxOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldEtlcm5lbE5hbWUgIT09IHVuZGVmaW5lZCAmJiB0YXJnZXRLZXJuZWxOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGtlcm5lbCA9IHRoaXMuX2NoaWxkS2VybmVscy50cnlHZXRCeUFsaWFzKHRhcmdldEtlcm5lbE5hbWUpID8/IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0S2VybmVsTmFtZSAmJiAha2VybmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBLZXJuZWwgbm90IGZvdW5kOiAke3RhcmdldEtlcm5lbE5hbWV9YDtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWtlcm5lbCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NoaWxkS2VybmVscy5jb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAga2VybmVsID0gdGhpcy5fY2hpbGRLZXJuZWxzLnNpbmdsZSgpID8/IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgha2VybmVsKSB7XHJcbiAgICAgICAgICAgIGtlcm5lbCA9IGNvbnRleHQ/LmhhbmRsaW5nS2VybmVsID8/IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXJuZWwgPz8gdGhpcztcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEtlcm5lbENvbGxlY3Rpb24gaW1wbGVtZW50cyBJdGVyYWJsZTxLZXJuZWw+IHtcclxuXHJcbiAgICBwcml2YXRlIF9jb21wb3NpdGVLZXJuZWw6IENvbXBvc2l0ZUtlcm5lbDtcclxuICAgIHByaXZhdGUgX2tlcm5lbHM6IEtlcm5lbFtdID0gW107XHJcbiAgICBwcml2YXRlIF9uYW1lQW5kQWxpYXNlc0J5S2VybmVsOiBNYXA8S2VybmVsLCBTZXQ8c3RyaW5nPj4gPSBuZXcgTWFwPEtlcm5lbCwgU2V0PHN0cmluZz4+KCk7XHJcbiAgICBwcml2YXRlIF9rZXJuZWxzQnlOYW1lT3JBbGlhczogTWFwPHN0cmluZywgS2VybmVsPiA9IG5ldyBNYXA8c3RyaW5nLCBLZXJuZWw+KCk7XHJcbiAgICBwcml2YXRlIF9rZXJuZWxzQnlMb2NhbFVyaTogTWFwPHN0cmluZywgS2VybmVsPiA9IG5ldyBNYXA8c3RyaW5nLCBLZXJuZWw+KCk7XHJcbiAgICBwcml2YXRlIF9rZXJuZWxzQnlSZW1vdGVVcmk6IE1hcDxzdHJpbmcsIEtlcm5lbD4gPSBuZXcgTWFwPHN0cmluZywgS2VybmVsPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvc2l0ZUtlcm5lbDogQ29tcG9zaXRlS2VybmVsKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcG9zaXRlS2VybmVsID0gY29tcG9zaXRlS2VybmVsO1xyXG4gICAgfVxyXG5cclxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhdG9yPEtlcm5lbD4ge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9rZXJuZWxzW2NvdW50ZXIrK10sXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogY291bnRlciA+IHRoaXMuX2tlcm5lbHMubGVuZ3RoIC8vP1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2luZ2xlKCk6IEtlcm5lbCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbHMubGVuZ3RoID09PSAxID8gdGhpcy5fa2VybmVsc1swXSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFkZChrZXJuZWw6IEtlcm5lbCwgYWxpYXNlcz86IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2tlcm5lbHNCeU5hbWVPckFsaWFzLmhhcyhrZXJuZWwubmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBrZXJuZWwgd2l0aCBuYW1lICR7a2VybmVsLm5hbWV9IGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlS2VybmVsSW5mb0FuZEluZGV4KGtlcm5lbCwgYWxpYXNlcyk7XHJcbiAgICAgICAgdGhpcy5fa2VybmVscy5wdXNoKGtlcm5lbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBjb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXJuZWxzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVLZXJuZWxJbmZvQW5kSW5kZXgoa2VybmVsOiBLZXJuZWwsIGFsaWFzZXM/OiBzdHJpbmdbXSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoYWxpYXNlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhbGlhcyBvZiBhbGlhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fa2VybmVsc0J5TmFtZU9yQWxpYXMuaGFzKGFsaWFzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihga2VybmVsIHdpdGggYWxpYXMgJHthbGlhc30gYWxyZWFkeSBleGlzdHNgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9uYW1lQW5kQWxpYXNlc0J5S2VybmVsLmhhcyhrZXJuZWwpKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBhbGlhcyBvZiBrZXJuZWwua2VybmVsSW5mby5hbGlhc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQuYWRkKGFsaWFzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAga2VybmVsLmtlcm5lbEluZm8uYWxpYXNlcyA9IEFycmF5LmZyb20oc2V0KTtcclxuXHJcbiAgICAgICAgICAgIHNldC5hZGQoa2VybmVsLmtlcm5lbEluZm8ubG9jYWxOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX25hbWVBbmRBbGlhc2VzQnlLZXJuZWwuc2V0KGtlcm5lbCwgc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFsaWFzZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYWxpYXMgb2YgYWxpYXNlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZUFuZEFsaWFzZXNCeUtlcm5lbC5nZXQoa2VybmVsKSEuYWRkKGFsaWFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbmFtZUFuZEFsaWFzZXNCeUtlcm5lbC5nZXQoa2VybmVsKT8uZm9yRWFjaChhbGlhcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tlcm5lbHNCeU5hbWVPckFsaWFzLnNldChhbGlhcywga2VybmVsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJhc2VVcmkgPSB0aGlzLl9jb21wb3NpdGVLZXJuZWwuaG9zdD8udXJpIHx8IHRoaXMuX2NvbXBvc2l0ZUtlcm5lbC5rZXJuZWxJbmZvLnVyaTtcclxuXHJcbiAgICAgICAgaWYgKCFiYXNlVXJpIS5lbmRzV2l0aChcIi9cIikpIHtcclxuICAgICAgICAgICAgYmFzZVVyaSArPSBcIi9cIjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtlcm5lbC5rZXJuZWxJbmZvLnVyaSA9IHJvdXRpbmdzbGlwLmNyZWF0ZUtlcm5lbFVyaShgJHtiYXNlVXJpfSR7a2VybmVsLmtlcm5lbEluZm8ubG9jYWxOYW1lfWApOy8vP1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbHNCeUxvY2FsVXJpLnNldChrZXJuZWwua2VybmVsSW5mby51cmksIGtlcm5lbCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoa2VybmVsLmtlcm5lbEluZm8uaXNQcm94eSkge1xyXG4gICAgICAgICAgICB0aGlzLl9rZXJuZWxzQnlSZW1vdGVVcmkuc2V0KGtlcm5lbC5rZXJuZWxJbmZvLnJlbW90ZVVyaSEsIGtlcm5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlHZXRCeUFsaWFzKGFsaWFzOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXJuZWxzQnlOYW1lT3JBbGlhcy5nZXQoYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlHZXRCeVVyaSh1cmk6IHN0cmluZyk6IEtlcm5lbCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgbGV0IGtlcm5lbCA9IHRoaXMuX2tlcm5lbHNCeUxvY2FsVXJpLmdldCh1cmkpIHx8IHRoaXMuX2tlcm5lbHNCeVJlbW90ZVVyaS5nZXQodXJpKTtcclxuICAgICAgICByZXR1cm4ga2VybmVsO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeVRoYXRIb3N0V2FzU2V0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGtlcm5lbCBvZiB0aGlzLl9rZXJuZWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlS2VybmVsSW5mb0FuZEluZGV4KGtlcm5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCJ1dGlsXCI7XHJcbmltcG9ydCAqIGFzIGNvbnRyYWN0cyBmcm9tIFwiLi9jb250cmFjdHNcIjtcclxuaW1wb3J0IHsgS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dFwiO1xyXG5pbXBvcnQgKiBhcyBkaXNwb3NhYmxlcyBmcm9tIFwiLi9kaXNwb3NhYmxlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnNvbGVDYXB0dXJlIGltcGxlbWVudHMgZGlzcG9zYWJsZXMuRGlzcG9zYWJsZSB7XHJcbiAgICBwcml2YXRlIG9yaWdpbmFsQ29uc29sZTogQ29uc29sZTtcclxuICAgIHByaXZhdGUgX2tlcm5lbEludm9jYXRpb25Db250ZXh0OiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZSA9IGNvbnNvbGU7XHJcbiAgICAgICAgY29uc29sZSA9IDxDb25zb2xlPjxhbnk+dGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQga2VybmVsSW52b2NhdGlvbkNvbnRleHQodmFsdWU6IEtlcm5lbEludm9jYXRpb25Db250ZXh0IHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsSW52b2NhdGlvbkNvbnRleHQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3NlcnQodmFsdWU6IGFueSwgbWVzc2FnZT86IHN0cmluZywgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuYXNzZXJ0KHZhbHVlLCBtZXNzYWdlLCBvcHRpb25hbFBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgY291bnQobGFiZWw/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5jb3VudChsYWJlbCk7XHJcbiAgICB9XHJcbiAgICBjb3VudFJlc2V0KGxhYmVsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuY291bnRSZXNldChsYWJlbCk7XHJcbiAgICB9XHJcbiAgICBkZWJ1ZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5kZWJ1ZyhtZXNzYWdlLCBvcHRpb25hbFBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBkaXIob2JqOiBhbnksIG9wdGlvbnM/OiB1dGlsLkluc3BlY3RPcHRpb25zKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuZGlyKG9iaiwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBkaXJ4bWwoLi4uZGF0YTogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5kaXJ4bWwoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0QW5kUHVibGlzaCh0aGlzLm9yaWdpbmFsQ29uc29sZS5lcnJvciwgLi4uW21lc3NhZ2UsIC4uLm9wdGlvbmFsUGFyYW1zXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JvdXAoLi4ubGFiZWw6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuZ3JvdXAobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgZ3JvdXBDb2xsYXBzZWQoLi4ubGFiZWw6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuZ3JvdXBDb2xsYXBzZWQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgZ3JvdXBFbmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgIH1cclxuICAgIGluZm8obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdEFuZFB1Ymxpc2godGhpcy5vcmlnaW5hbENvbnNvbGUuaW5mbywgLi4uW21lc3NhZ2UsIC4uLm9wdGlvbmFsUGFyYW1zXSk7XHJcbiAgICB9XHJcbiAgICBsb2cobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdEFuZFB1Ymxpc2godGhpcy5vcmlnaW5hbENvbnNvbGUubG9nLCAuLi5bbWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXNdKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSh0YWJ1bGFyRGF0YTogYW55LCBwcm9wZXJ0aWVzPzogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS50YWJsZSh0YWJ1bGFyRGF0YSwgcHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgICB0aW1lKGxhYmVsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUudGltZShsYWJlbCk7XHJcbiAgICB9XHJcbiAgICB0aW1lRW5kKGxhYmVsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUudGltZUVuZChsYWJlbCk7XHJcbiAgICB9XHJcbiAgICB0aW1lTG9nKGxhYmVsPzogc3RyaW5nLCAuLi5kYXRhOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLnRpbWVMb2cobGFiZWwsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgdGltZVN0YW1wKGxhYmVsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUudGltZVN0YW1wKGxhYmVsKTtcclxuICAgIH1cclxuICAgIHRyYWNlKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RBbmRQdWJsaXNoKHRoaXMub3JpZ2luYWxDb25zb2xlLnRyYWNlLCAuLi5bbWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXNdKTtcclxuICAgIH1cclxuICAgIHdhcm4obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUud2FybihtZXNzYWdlLCBvcHRpb25hbFBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZmlsZShsYWJlbD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLnByb2ZpbGUobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgcHJvZmlsZUVuZChsYWJlbD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLnByb2ZpbGVFbmQobGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZSA9IHRoaXMub3JpZ2luYWxDb25zb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVkaXJlY3RBbmRQdWJsaXNoKHRhcmdldDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFyZyBvZiBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWltZVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgIT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGFyZykpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZSA9ICd0ZXh0L3BsYWluJztcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZz8udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShhcmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZFZhbHVlOiBjb250cmFjdHMuRGlzcGxheWVkVmFsdWVQcm9kdWNlZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudEVudmVsb3BlOiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IGNvbnRyYWN0cy5EaXNwbGF5ZWRWYWx1ZVByb2R1Y2VkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZGlzcGxheWVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogdGhpcy5fa2VybmVsSW52b2NhdGlvbkNvbnRleHQuY29tbWFuZEVudmVsb3BlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2tlcm5lbEludm9jYXRpb25Db250ZXh0LnB1Ymxpc2goZXZlbnRFbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0YXJnZXQoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIGNvbnRyYWN0cyBmcm9tIFwiLi9jb250cmFjdHNcIjtcclxuaW1wb3J0IHsgQ29uc29sZUNhcHR1cmUgfSBmcm9tIFwiLi9jb25zb2xlQ2FwdHVyZVwiO1xyXG5pbXBvcnQgeyBLZXJuZWwsIElLZXJuZWxDb21tYW5kSW52b2NhdGlvbiB9IGZyb20gXCIuL2tlcm5lbFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBKYXZhc2NyaXB0S2VybmVsIGV4dGVuZHMgS2VybmVsIHtcclxuICAgIHByaXZhdGUgc3VwcHJlc3NlZExvY2FsczogU2V0PHN0cmluZz47XHJcbiAgICBwcml2YXRlIGNhcHR1cmU6IENvbnNvbGVDYXB0dXJlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lID8/IFwiamF2YXNjcmlwdFwiLCBcIkphdmFTY3JpcHRcIik7XHJcbiAgICAgICAgdGhpcy5rZXJuZWxJbmZvLmRpc3BsYXlOYW1lID0gYCR7dGhpcy5rZXJuZWxJbmZvLmxvY2FsTmFtZX0gLSAke3RoaXMua2VybmVsSW5mby5sYW5ndWFnZU5hbWV9YDtcclxuICAgICAgICB0aGlzLnN1cHByZXNzZWRMb2NhbHMgPSBuZXcgU2V0PHN0cmluZz4odGhpcy5hbGxMb2NhbFZhcmlhYmxlTmFtZXMoKSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKHsgY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5TdWJtaXRDb2RlVHlwZSwgaGFuZGxlOiBpbnZvY2F0aW9uID0+IHRoaXMuaGFuZGxlU3VibWl0Q29kZShpbnZvY2F0aW9uKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoeyBjb21tYW5kVHlwZTogY29udHJhY3RzLlJlcXVlc3RWYWx1ZUluZm9zVHlwZSwgaGFuZGxlOiBpbnZvY2F0aW9uID0+IHRoaXMuaGFuZGxlUmVxdWVzdFZhbHVlSW5mb3MoaW52b2NhdGlvbikgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKHsgY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5SZXF1ZXN0VmFsdWVUeXBlLCBoYW5kbGU6IGludm9jYXRpb24gPT4gdGhpcy5oYW5kbGVSZXF1ZXN0VmFsdWUoaW52b2NhdGlvbikgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKHsgY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5TZW5kVmFsdWVUeXBlLCBoYW5kbGU6IGludm9jYXRpb24gPT4gdGhpcy5oYW5kbGVTZW5kVmFsdWUoaW52b2NhdGlvbikgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdHVyZSA9IG5ldyBDb25zb2xlQ2FwdHVyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2VuZFZhbHVlKGludm9jYXRpb246IElLZXJuZWxDb21tYW5kSW52b2NhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHNlbmRWYWx1ZSA9IDxjb250cmFjdHMuU2VuZFZhbHVlPmludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmQ7XHJcbiAgICAgICAgaWYgKHNlbmRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNlbmRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZS5taW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+Z2xvYmFsVGhpcylbc2VuZFZhbHVlLm5hbWVdID0gSlNPTi5wYXJzZShzZW5kVmFsdWUuZm9ybWF0dGVkVmFsdWUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5nbG9iYWxUaGlzKVtzZW5kVmFsdWUubmFtZV0gPSBzZW5kVmFsdWUuZm9ybWF0dGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtYXR0ZWRWYWx1ZSBpcyByZXF1aXJlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVN1Ym1pdENvZGUoaW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0Q29kZSA9IDxjb250cmFjdHMuU3VibWl0Q29kZT5pbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kO1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBzdWJtaXRDb2RlLmNvZGU7XHJcblxyXG4gICAgICAgIHN1cGVyLmtlcm5lbEluZm8ubG9jYWxOYW1lOy8vP1xyXG4gICAgICAgIHN1cGVyLmtlcm5lbEluZm8udXJpOy8vP1xyXG4gICAgICAgIHN1cGVyLmtlcm5lbEluZm8ucmVtb3RlVXJpOy8vP1xyXG4gICAgICAgIGludm9jYXRpb24uY29udGV4dC5wdWJsaXNoKHsgZXZlbnRUeXBlOiBjb250cmFjdHMuQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFR5cGUsIGV2ZW50OiB7IGNvZGUgfSwgY29tbWFuZDogaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUgfSk7XHJcbiAgICAgICAgaW52b2NhdGlvbi5jb250ZXh0LmNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcDsvLz9cclxuICAgICAgICB0aGlzLmNhcHR1cmUua2VybmVsSW52b2NhdGlvbkNvbnRleHQgPSBpbnZvY2F0aW9uLmNvbnRleHQ7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBBc3luY0Z1bmN0aW9uID0gZXZhbChgT2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCl7fSkuY29uc3RydWN0b3JgKTtcclxuICAgICAgICAgICAgY29uc3QgZXZhbHVhdG9yID0gQXN5bmNGdW5jdGlvbihcImNvbnNvbGVcIiwgY29kZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGV2YWx1YXRvcih0aGlzLmNhcHR1cmUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0VmFsdWUocmVzdWx0LCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQ6IGNvbnRyYWN0cy5SZXR1cm5WYWx1ZVByb2R1Y2VkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlczogW2Zvcm1hdHRlZFZhbHVlXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb24uY29udGV4dC5wdWJsaXNoKHsgZXZlbnRUeXBlOiBjb250cmFjdHMuUmV0dXJuVmFsdWVQcm9kdWNlZFR5cGUsIGV2ZW50LCBjb21tYW5kOiBpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgZTsvLz9cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZS5rZXJuZWxJbnZvY2F0aW9uQ29udGV4dCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXF1ZXN0VmFsdWVJbmZvcyhpbnZvY2F0aW9uOiBJS2VybmVsQ29tbWFuZEludm9jYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZUluZm9zOiBjb250cmFjdHMuS2VybmVsVmFsdWVJbmZvW10gPSB0aGlzLmFsbExvY2FsVmFyaWFibGVOYW1lcygpLmZpbHRlcih2ID0+ICF0aGlzLnN1cHByZXNzZWRMb2NhbHMuaGFzKHYpKS5tYXAodiA9PiAoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHYsXHJcbiAgICAgICAgICAgICAgICB0eXBlTmFtZTogZ2V0VHlwZSh0aGlzLmdldExvY2FsVmFyaWFibGUodikpLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdFZhbHVlKHRoaXMuZ2V0TG9jYWxWYXJpYWJsZSh2KSwgXCJ0ZXh0L3BsYWluXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkTWltZVR5cGVzOiBbXVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBjb250cmFjdHMuVmFsdWVJbmZvc1Byb2R1Y2VkID0ge1xyXG4gICAgICAgICAgICB2YWx1ZUluZm9zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbnZvY2F0aW9uLmNvbnRleHQucHVibGlzaCh7IGV2ZW50VHlwZTogY29udHJhY3RzLlZhbHVlSW5mb3NQcm9kdWNlZFR5cGUsIGV2ZW50LCBjb21tYW5kOiBpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZSB9KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXF1ZXN0VmFsdWUoaW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFZhbHVlID0gPGNvbnRyYWN0cy5SZXF1ZXN0VmFsdWU+aW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZDtcclxuICAgICAgICBjb25zdCByYXdWYWx1ZSA9IHRoaXMuZ2V0TG9jYWxWYXJpYWJsZShyZXF1ZXN0VmFsdWUubmFtZSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXRWYWx1ZShyYXdWYWx1ZSwgcmVxdWVzdFZhbHVlLm1pbWVUeXBlIHx8ICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcmV0dXJuaW5nICR7SlNPTi5zdHJpbmdpZnkoZm9ybWF0dGVkVmFsdWUpfSBmb3IgJHtyZXF1ZXN0VmFsdWUubmFtZX1gKTtcclxuICAgICAgICBjb25zdCBldmVudDogY29udHJhY3RzLlZhbHVlUHJvZHVjZWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHJlcXVlc3RWYWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW52b2NhdGlvbi5jb250ZXh0LnB1Ymxpc2goeyBldmVudFR5cGU6IGNvbnRyYWN0cy5WYWx1ZVByb2R1Y2VkVHlwZSwgZXZlbnQsIGNvbW1hbmQ6IGludm9jYXRpb24uY29tbWFuZEVudmVsb3BlIH0pO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxsTG9jYWxWYXJpYWJsZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZ2xvYmFsVGhpcykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICg8YW55Pmdsb2JhbFRoaXMpW2tleV0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuZXJyb3IoYGVycm9yIGdldHRpbmcgdmFsdWUgZm9yICR7a2V5fSA6ICR7ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuZXJyb3IoYGVycm9yIHNjYW5uaW5nIGdsb2JsYSB2YXJpYWJsZXMgOiAke2V9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2NhbFZhcmlhYmxlKG5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICg8YW55Pmdsb2JhbFRoaXMpW25hbWVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VmFsdWUoYXJnOiBhbnksIG1pbWVUeXBlOiBzdHJpbmcpOiBjb250cmFjdHMuRm9ybWF0dGVkVmFsdWUge1xyXG4gICAgbGV0IHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgc3dpdGNoIChtaW1lVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3RleHQvcGxhaW4nOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IGFyZz8udG9TdHJpbmcoKSB8fCAndW5kZWZpbmVkJztcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgWyR7dmFsdWV9XWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XHJcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkoYXJnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBtaW1lIHR5cGU6ICR7bWltZVR5cGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtaW1lVHlwZSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKGFyZzogYW55KTogc3RyaW5nIHtcclxuICAgIGxldCB0eXBlOiBzdHJpbmcgPSBhcmcgPyB0eXBlb2YgKGFyZykgOiBcIlwiOy8vP1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcclxuICAgICAgICB0eXBlID0gYCR7dHlwZW9mIChhcmdbMF0pfVtdYDsvLz9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZTsgLy8/XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBvc2l0ZUtlcm5lbCB9IGZyb20gJy4vY29tcG9zaXRlS2VybmVsJztcclxuaW1wb3J0ICogYXMgY29udHJhY3RzIGZyb20gJy4vY29udHJhY3RzJztcclxuaW1wb3J0ICogYXMgZGlzcG9zYWJsZXMgZnJvbSAnLi9kaXNwb3NhYmxlcyc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGUgfSBmcm9tICcuL2Rpc3Bvc2FibGVzJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSA9IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUgfCBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0tlcm5lbENvbW1hbmRFbnZlbG9wZShjb21tYW5kT3JFdmVudDogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSk6IGNvbW1hbmRPckV2ZW50IGlzIGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUge1xyXG4gICAgcmV0dXJuICg8YW55PmNvbW1hbmRPckV2ZW50KS5jb21tYW5kVHlwZSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNLZXJuZWxFdmVudEVudmVsb3BlKGNvbW1hbmRPckV2ZW50OiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKTogY29tbWFuZE9yRXZlbnQgaXMgY29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGUge1xyXG4gICAgcmV0dXJuICg8YW55PmNvbW1hbmRPckV2ZW50KS5ldmVudFR5cGUgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIgZXh0ZW5kcyByeGpzLlN1YnNjcmliYWJsZTxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPiB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciB7XHJcbiAgICBzZW5kKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpOiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIgaW1wbGVtZW50cyBJS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIge1xyXG4gICAgcHJpdmF0ZSBfb2JzZXJ2YWJsZTogcnhqcy5TdWJzY3JpYmFibGU8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT47XHJcbiAgICBwcml2YXRlIF9kaXNwb3NhYmxlczogZGlzcG9zYWJsZXMuRGlzcG9zYWJsZVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvYnNlcnZlcjogcnhqcy5PYnNlcnZhYmxlPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+KSB7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZSA9IG9ic2VydmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogUGFydGlhbDxyeGpzLk9ic2VydmVyPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+Pik6IHJ4anMuVW5zdWJzY3JpYmFibGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgZGlzcG9zYWJsZSBvZiB0aGlzLl9kaXNwb3NhYmxlcykge1xyXG4gICAgICAgICAgICBkaXNwb3NhYmxlLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBGcm9tT2JzZXJ2YWJsZShvYnNlcnZhYmxlOiByeGpzLk9ic2VydmFibGU8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4pOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIob2JzZXJ2YWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBGcm9tRXZlbnRMaXN0ZW5lcihhcmdzOiB7IG1hcDogKGRhdGE6IEV2ZW50KSA9PiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLCBldmVudFRhcmdldDogRXZlbnRUYXJnZXQsIGV2ZW50OiBzdHJpbmcgfSk6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciB7XHJcbiAgICAgICAgbGV0IHN1YmplY3QgPSBuZXcgcnhqcy5TdWJqZWN0PEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+KCk7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1hcHBlZCA9IGFyZ3MubWFwKGUpO1xyXG4gICAgICAgICAgICBzdWJqZWN0Lm5leHQobWFwcGVkKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFyZ3MuZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihhcmdzLmV2ZW50LCBsaXN0ZW5lcik7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gbmV3IEtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyKHN1YmplY3QpO1xyXG4gICAgICAgIHJldC5fZGlzcG9zYWJsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFyZ3MuZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhcmdzLmV2ZW50LCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhcmdzLmV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYXJncy5ldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZShzb3VyY2U6IGFueSk6IHNvdXJjZSBpcyByeGpzLk9ic2VydmVyPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+IHtcclxuICAgIHJldHVybiAoPGFueT5zb3VyY2UpLm5leHQgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciBpbXBsZW1lbnRzIElLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIge1xyXG4gICAgcHJpdmF0ZSBfc2VuZGVyPzogcnhqcy5PYnNlcnZlcjxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPiB8ICgoa2VybmVsRXZlbnRFbnZlbG9wZTogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkgPT4gdm9pZCk7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgc2VuZChrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbmRlcikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VyaXNsaXplZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbmRlcihzZXJpc2xpemVkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlKHRoaXMuX3NlbmRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZW5kZXIubmV4dChzZXJpc2xpemVkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlNlbmRlciBpcyBub3Qgc2V0XCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU2VuZGVyIGlzIG5vdCBzZXRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRnJvbU9ic2VydmVyKG9ic2VydmVyOiByeGpzLk9ic2VydmVyPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+KTogSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciB7XHJcbiAgICAgICAgY29uc3Qgc2VuZGVyID0gbmV3IEtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlcigpO1xyXG4gICAgICAgIHNlbmRlci5fc2VuZGVyID0gb2JzZXJ2ZXI7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEZyb21GdW5jdGlvbihzZW5kOiAoa2VybmVsRXZlbnRFbnZlbG9wZTogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkgPT4gdm9pZCk6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIge1xyXG4gICAgICAgIGNvbnN0IHNlbmRlciA9IG5ldyBLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIoKTtcclxuICAgICAgICBzZW5kZXIuX3NlbmRlciA9IHNlbmQ7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRlcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0T2ZTdHJpbmcoY29sbGVjdGlvbjogYW55KTogY29sbGVjdGlvbiBpcyBTZXQ8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIChjb2xsZWN0aW9uKSAhPT0gdHlwZW9mIChuZXcgU2V0PHN0cmluZz4oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTdHJpbmcoY29sbGVjdGlvbjogYW55KTogY29sbGVjdGlvbiBpcyBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSAmJiBjb2xsZWN0aW9uLmxlbmd0aCA+IDAgJiYgdHlwZW9mIChjb2xsZWN0aW9uWzBdKSA9PT0gdHlwZW9mIChcIlwiKTtcclxufVxyXG5cclxuY29uc3Qgb25LZXJuZWxJbmZvVXBkYXRlczogKChjb21wb3NpdGVLZXJuZWw6IENvbXBvc2l0ZUtlcm5lbCkgPT4gdm9pZClbXSA9IFtdO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJGb3JLZXJuZWxJbmZvVXBkYXRlcyhjYWxsYmFjazogKGNvbXBvc2l0ZUtlcm5lbDogQ29tcG9zaXRlS2VybmVsKSA9PiB2b2lkKSB7XHJcbiAgICBvbktlcm5lbEluZm9VcGRhdGVzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcbmZ1bmN0aW9uIG5vdGlmeU9mS2VybmVsSW5mb1VwZGF0ZXMoY29tcG9zaXRlS2VybmVsOiBDb21wb3NpdGVLZXJuZWwpIHtcclxuICAgIGZvciAoY29uc3QgdXBkYXRlciBvZiBvbktlcm5lbEluZm9VcGRhdGVzKSB7XHJcbiAgICAgICAgdXBkYXRlcihjb21wb3NpdGVLZXJuZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlT3JVcGRhdGVQcm94eUZvcktlcm5lbEluZm8oa2VybmVsSW5mbzogY29udHJhY3RzLktlcm5lbEluZm8sIGNvbXBvc2l0ZUtlcm5lbDogQ29tcG9zaXRlS2VybmVsKSB7XHJcbiAgICBpZiAoa2VybmVsSW5mby5pc1Byb3h5KSB7XHJcbiAgICAgICAgY29uc3QgaG9zdCA9IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUoa2VybmVsSW5mby5yZW1vdGVVcmkhKTtcclxuICAgICAgICBpZiAoaG9zdCA9PT0gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShjb21wb3NpdGVLZXJuZWwua2VybmVsSW5mby51cmkpKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0Lndhcm4oYHNraXBwaW4gY3JlYXRpb24gb2YgcHJveHkgZm9yIGEgcHJveHkga2VybmVsIDogWyR7SlNPTi5zdHJpbmdpZnkoa2VybmVsSW5mbyl9XWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXJpVG9Mb29rdXAgPSBrZXJuZWxJbmZvLmlzUHJveHkgPyBrZXJuZWxJbmZvLnJlbW90ZVVyaSEgOiBrZXJuZWxJbmZvLnVyaTtcclxuICAgIGlmICh1cmlUb0xvb2t1cCkge1xyXG4gICAgICAgIGxldCBrZXJuZWwgPSBjb21wb3NpdGVLZXJuZWwuZmluZEtlcm5lbEJ5VXJpKHVyaVRvTG9va3VwKTtcclxuICAgICAgICBpZiAoIWtlcm5lbCkge1xyXG4gICAgICAgICAgICAvLyBhZGRcclxuICAgICAgICAgICAgaWYgKGNvbXBvc2l0ZUtlcm5lbC5ob3N0KSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBjcmVhdGluZyBwcm94eSBmb3IgdXJpWyR7dXJpVG9Mb29rdXB9XXdpdGggaW5mbyAke0pTT04uc3RyaW5naWZ5KGtlcm5lbEluZm8pfWApO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGNsYXNoIHdpdGggYGtlcm5lbEluZm8ubG9jYWxOYW1lYFxyXG4gICAgICAgICAgICAgICAga2VybmVsID0gY29tcG9zaXRlS2VybmVsLmhvc3QuY29ubmVjdFByb3h5S2VybmVsKGtlcm5lbEluZm8ubG9jYWxOYW1lLCB1cmlUb0xvb2t1cCwga2VybmVsSW5mby5hbGlhc2VzKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUtlcm5lbEluZm8oa2VybmVsLmtlcm5lbEluZm8sIGtlcm5lbEluZm8pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBrZXJuZWwgaG9zdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcGF0Y2hpbmcgcHJveHkgZm9yIHVyaVske3VyaVRvTG9va3VwfV13aXRoIGluZm8gJHtKU09OLnN0cmluZ2lmeShrZXJuZWxJbmZvKX0gYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2VybmVsLmtlcm5lbEluZm8uaXNQcm94eSkge1xyXG4gICAgICAgICAgICAvLyBwYXRjaFxyXG4gICAgICAgICAgICB1cGRhdGVLZXJuZWxJbmZvKGtlcm5lbC5rZXJuZWxJbmZvLCBrZXJuZWxJbmZvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vdGlmeU9mS2VybmVsSW5mb1VwZGF0ZXMoY29tcG9zaXRlS2VybmVsKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzS2VybmVsSW5mb0ZvclByb3h5KGtlcm5lbEluZm86IGNvbnRyYWN0cy5LZXJuZWxJbmZvKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4ga2VybmVsSW5mby5pc1Byb3h5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlS2VybmVsSW5mbyhkZXN0aW5hdGlvbjogY29udHJhY3RzLktlcm5lbEluZm8sIHNvdXJjZTogY29udHJhY3RzLktlcm5lbEluZm8pIHtcclxuICAgIGRlc3RpbmF0aW9uLmxhbmd1YWdlTmFtZSA9IHNvdXJjZS5sYW5ndWFnZU5hbWUgPz8gZGVzdGluYXRpb24ubGFuZ3VhZ2VOYW1lO1xyXG4gICAgZGVzdGluYXRpb24ubGFuZ3VhZ2VWZXJzaW9uID0gc291cmNlLmxhbmd1YWdlVmVyc2lvbiA/PyBkZXN0aW5hdGlvbi5sYW5ndWFnZVZlcnNpb247XHJcbiAgICBkZXN0aW5hdGlvbi5kaXNwbGF5TmFtZSA9IHNvdXJjZS5kaXNwbGF5TmFtZTtcclxuICAgIGRlc3RpbmF0aW9uLmlzQ29tcG9zaXRlID0gc291cmNlLmlzQ29tcG9zaXRlO1xyXG5cclxuICAgIGlmIChzb3VyY2UuZGlzcGxheU5hbWUpIHtcclxuICAgICAgICBkZXN0aW5hdGlvbi5kaXNwbGF5TmFtZSA9IHNvdXJjZS5kaXNwbGF5TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdXBwb3J0ZWREaXJlY3RpdmVzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBjb25zdCBzdXBwb3J0ZWRDb21tYW5kcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgIGlmICghZGVzdGluYXRpb24uc3VwcG9ydGVkRGlyZWN0aXZlcykge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uLnN1cHBvcnRlZERpcmVjdGl2ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRlc3RpbmF0aW9uLnN1cHBvcnRlZEtlcm5lbENvbW1hbmRzKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb24uc3VwcG9ydGVkS2VybmVsQ29tbWFuZHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHN1cHBvcnRlZERpcmVjdGl2ZSBvZiBkZXN0aW5hdGlvbi5zdXBwb3J0ZWREaXJlY3RpdmVzKSB7XHJcbiAgICAgICAgc3VwcG9ydGVkRGlyZWN0aXZlcy5hZGQoc3VwcG9ydGVkRGlyZWN0aXZlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qgc3VwcG9ydGVkQ29tbWFuZCBvZiBkZXN0aW5hdGlvbi5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcykge1xyXG4gICAgICAgIHN1cHBvcnRlZENvbW1hbmRzLmFkZChzdXBwb3J0ZWRDb21tYW5kLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qgc3VwcG9ydGVkRGlyZWN0aXZlIG9mIHNvdXJjZS5zdXBwb3J0ZWREaXJlY3RpdmVzKSB7XHJcbiAgICAgICAgaWYgKCFzdXBwb3J0ZWREaXJlY3RpdmVzLmhhcyhzdXBwb3J0ZWREaXJlY3RpdmUubmFtZSkpIHtcclxuICAgICAgICAgICAgc3VwcG9ydGVkRGlyZWN0aXZlcy5hZGQoc3VwcG9ydGVkRGlyZWN0aXZlLm5hbWUpO1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5zdXBwb3J0ZWREaXJlY3RpdmVzLnB1c2goc3VwcG9ydGVkRGlyZWN0aXZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBzdXBwb3J0ZWRDb21tYW5kIG9mIHNvdXJjZS5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcykge1xyXG4gICAgICAgIGlmICghc3VwcG9ydGVkQ29tbWFuZHMuaGFzKHN1cHBvcnRlZENvbW1hbmQubmFtZSkpIHtcclxuICAgICAgICAgICAgc3VwcG9ydGVkQ29tbWFuZHMuYWRkKHN1cHBvcnRlZENvbW1hbmQubmFtZSk7XHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnN1cHBvcnRlZEtlcm5lbENvbW1hbmRzLnB1c2goc3VwcG9ydGVkQ29tbWFuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdG9yIGltcGxlbWVudHMgRGlzcG9zYWJsZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9saXN0ZW5lcjogcnhqcy5VbnN1YnNjcmliYWJsZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3JlY2VpdmVyOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zZW5kZXI6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZW1vdGVVcmlzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgcmVtb3RlSG9zdFVyaXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX3JlbW90ZVVyaXMudmFsdWVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2VuZGVyKCk6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5kZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZWNlaXZlcigpOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWNlaXZlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiB7IHJlY2VpdmVyOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIsIHNlbmRlcjogSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciwgcmVtb3RlVXJpcz86IHN0cmluZ1tdIH0pIHtcclxuICAgICAgICB0aGlzLl9yZWNlaXZlciA9IGNvbmZpZ3VyYXRpb24ucmVjZWl2ZXI7XHJcbiAgICAgICAgdGhpcy5fc2VuZGVyID0gY29uZmlndXJhdGlvbi5zZW5kZXI7XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24ucmVtb3RlVXJpcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlbW90ZVVyaSBvZiBjb25maWd1cmF0aW9uLnJlbW90ZVVyaXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVyaSA9IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUocmVtb3RlVXJpKTtcclxuICAgICAgICAgICAgICAgIGlmICh1cmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdGVVcmlzLmFkZCh1cmkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IHRoaXMuX3JlY2VpdmVyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNLZXJuZWxFdmVudEVudmVsb3BlKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUuZXZlbnRUeXBlID09PSBjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IDxjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkPmtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUuZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnQua2VybmVsSW5mby5yZW1vdGVVcmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVyaSA9IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUoZXZlbnQua2VybmVsSW5mby51cmkhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdGVVcmlzLmFkZCh1cmkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5yb3V0aW5nU2xpcD8ubGVuZ3RoID8/IDApID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudE9yaWdpbiA9IGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUucm91dGluZ1NsaXAhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmkgPSBleHRyYWN0SG9zdEFuZE5vbWFsaXplKGV2ZW50T3JpZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVyaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3RlVXJpcy5hZGQodXJpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRSZW1vdGVIb3N0VXJpKHJlbW90ZVVyaTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgdXJpID0gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShyZW1vdGVVcmkpO1xyXG4gICAgICAgIGlmICh1cmkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3RlVXJpcy5hZGQodXJpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblJlYWNoKHJlbW90ZVVyaTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaG9zdCA9IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUocmVtb3RlVXJpKTsvLz9cclxuICAgICAgICBpZiAoaG9zdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3RlVXJpcy5oYXMoaG9zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIb3N0QW5kTm9tYWxpemUoa2VybmVsVXJpOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZmlsdGVyOiBSZWdFeHAgPSAvKD88aG9zdD4uKzpcXC9cXC9bXlxcL10rKShcXC9bXlxcL10pKi9naTtcclxuICAgIGNvbnN0IG1hdGNoID0gZmlsdGVyLmV4ZWMoa2VybmVsVXJpKTsgLy8/XHJcbiAgICBpZiAobWF0Y2g/Lmdyb3Vwcz8uaG9zdCkge1xyXG4gICAgICAgIGNvbnN0IGhvc3QgPSBtYXRjaC5ncm91cHMuaG9zdDtcclxuICAgICAgICByZXR1cm4gaG9zdDsvLz9cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyBjb250cmFjdHMgZnJvbSBcIi4vY29udHJhY3RzXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBLZXJuZWwsIElLZXJuZWxDb21tYW5kSGFuZGxlciwgSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uLCBnZXRLZXJuZWxVcmkgfSBmcm9tIFwiLi9rZXJuZWxcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRpbmdTbGlwIGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmltcG9ydCB7IFByb21pc2VDb21wbGV0aW9uU291cmNlIH0gZnJvbSBcIi4vcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2VcIjtcclxuaW1wb3J0IHsgS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb3h5S2VybmVsIGV4dGVuZHMgS2VybmVsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvdmVycmlkZSByZWFkb25seSBuYW1lOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgX3NlbmRlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyLCBwcml2YXRlIHJlYWRvbmx5IF9yZWNlaXZlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIsIGxhbmd1YWdlTmFtZT86IHN0cmluZywgbGFuZ3VhZ2VWZXJzaW9uPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGFuZ3VhZ2VOYW1lLCBsYW5ndWFnZVZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMua2VybmVsSW5mby5pc1Byb3h5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvdmVycmlkZSBnZXRDb21tYW5kSGFuZGxlcihjb21tYW5kVHlwZTogY29udHJhY3RzLktlcm5lbENvbW1hbmRUeXBlKTogSUtlcm5lbENvbW1hbmRIYW5kbGVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb21tYW5kVHlwZSxcclxuICAgICAgICAgICAgaGFuZGxlOiAoaW52b2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbW1hbmRIYW5kbGVyKGludm9jYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGVnYXRlUHVibGljYXRpb24oZW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxFdmVudEVudmVsb3BlLCBpbnZvY2F0aW9uQ29udGV4dDogS2VybmVsSW52b2NhdGlvbkNvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgYWxyZWFkeUJlZW5TZWVuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qga2VybmVsVXJpID0gZ2V0S2VybmVsVXJpKHRoaXMpO1xyXG4gICAgICAgIGlmIChrZXJuZWxVcmkgJiYgIXJvdXRpbmdTbGlwLmV2ZW50Um91dGluZ1NsaXBDb250YWlucyhlbnZlbG9wZSwga2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICByb3V0aW5nU2xpcC5zdGFtcEV2ZW50Um91dGluZ1NsaXAoZW52ZWxvcGUsIGtlcm5lbFVyaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxyZWFkeUJlZW5TZWVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc1NhbWVPcmlnaW4oZW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgIGlmICghYWxyZWFkeUJlZW5TZWVuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5wdWJsaXNoKGVudmVsb3BlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhc1NhbWVPcmlnaW4oZW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxFdmVudEVudmVsb3BlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmRPcmlnaW5VcmkgPSBlbnZlbG9wZS5jb21tYW5kPy5jb21tYW5kPy5vcmlnaW5VcmkgPz8gdGhpcy5rZXJuZWxJbmZvLnVyaTtcclxuICAgICAgICBpZiAoY29tbWFuZE9yaWdpblVyaSA9PT0gdGhpcy5rZXJuZWxJbmZvLnVyaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21tYW5kT3JpZ2luVXJpID09PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlS2VybmVsSW5mb0Zyb21FdmVudChrZXJuZWxJbmZvUHJvZHVjZWQ6IGNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWQpIHtcclxuICAgICAgICBjb25uZWN0aW9uLnVwZGF0ZUtlcm5lbEluZm8odGhpcy5rZXJuZWxJbmZvLCBrZXJuZWxJbmZvUHJvZHVjZWQua2VybmVsSW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29tbWFuZEhhbmRsZXIoY29tbWFuZEludm9jYXRpb246IElLZXJuZWxDb21tYW5kSW52b2NhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuZW5zdXJlQ29tbWFuZFRva2VuQW5kSWQoY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICBjb25zdCBjb21tYW5kVG9rZW4gPSBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUudG9rZW47XHJcbiAgICAgICAgY29uc3QgY29tbWFuZElkID0gY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmlkO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25Tb3VyY2UgPSBuZXcgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8Y29udHJhY3RzLktlcm5lbEV2ZW50RW52ZWxvcGU+KCk7XHJcbiAgICAgICAgLy8gZml4IDogaXMgdGhpcyB0aGUgcmlnaHQgd2F5PyBXZSBhcmUgdHJ5aW5nIHRvIGF2b2lkIGZvcndhcmRpbmcgZXZlbnRzIHdlIGp1c3QgZGlkIGZvcndhcmRcclxuICAgICAgICBsZXQgZXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLl9yZWNlaXZlci5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoZW52ZWxvcGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmlzS2VybmVsRXZlbnRFbnZlbG9wZShlbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW52ZWxvcGUuZXZlbnRUeXBlID09PSBjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZW52ZWxvcGUuY29tbWFuZCA9PT0gbnVsbCB8fCBlbnZlbG9wZS5jb21tYW5kID09PSB1bmRlZmluZWQpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXJuZWxJbmZvUHJvZHVjZWQgPSA8Y29udHJhY3RzLktlcm5lbEluZm9Qcm9kdWNlZD5lbnZlbG9wZS5ldmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2VybmVsSW5mb1Byb2R1Y2VkLmtlcm5lbEluZm87Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2VybmVsSW5mbzsvLz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtlcm5lbEluZm9Qcm9kdWNlZC5rZXJuZWxJbmZvLnVyaSA9PT0gdGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlS2VybmVsSW5mb0Zyb21FdmVudChrZXJuZWxJbmZvUHJvZHVjZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogeyBrZXJuZWxJbmZvOiB0aGlzLmtlcm5lbEluZm8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVudmVsb3BlLmNvbW1hbmQhLnRva2VuID09PSBjb21tYW5kVG9rZW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5IG5hbWU9JHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIHByb2Nlc3NpbmcgZXZlbnQsIGVudmVsb3BlaWQ9JHtlbnZlbG9wZS5jb21tYW5kIS5pZH0sIGNvbW1hbmRpZD0ke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgbmFtZT0ke3RoaXMubmFtZX1bbG9jYWwgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnVyaX0sIHJlbW90ZSB1cmk6JHt0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpfV0gcHJvY2Vzc2luZyBldmVudCwgJHtKU09OLnN0cmluZ2lmeShlbnZlbG9wZSl9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBbLi4uY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlPy5yb3V0aW5nU2xpcCA/PyBbXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5nU2xpcC5jb250aW51ZUNvbW1hbmRSb3V0aW5nU2xpcChjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUsIGVudmVsb3BlLmNvbW1hbmQhLnJvdXRpbmdTbGlwISk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZlbG9wZS5jb21tYW5kIS5yb3V0aW5nU2xpcCA9IFsuLi5jb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAgPz8gW11dOy8vP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgbmFtZT0ke3RoaXMubmFtZX1bbG9jYWwgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnVyaX0sIGNvbW1hbmQgcm91dGluZ1NsaXAgOiR7b3JpZ2luYWx9XSBoYXMgY2hhbmdlZCB0bzogJHtKU09OLnN0cmluZ2lmeShjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAgPz8gW10pfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmVycm9yKGBwcm94eSBuYW1lPSR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgZXJyb3IgJHtlPy5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGVudmVsb3BlLmV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9Qcm9kdWNlZCA9IDxjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkPmVudmVsb3BlLmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2VybmVsSW5mb1Byb2R1Y2VkLmtlcm5lbEluZm8udXJpID09PSB0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUtlcm5lbEluZm9Gcm9tRXZlbnQoa2VybmVsSW5mb1Byb2R1Y2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVQdWJsaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZTogY29udHJhY3RzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7IGtlcm5lbEluZm86IHRoaXMua2VybmVsSW5mbyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5nU2xpcDogZW52ZWxvcGUucm91dGluZ1NsaXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQ6IGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGNvbW1hbmRJbnZvY2F0aW9uLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZVB1YmxpY2F0aW9uKGVudmVsb3BlLCBjb21tYW5kSW52b2NhdGlvbi5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVQdWJsaWNhdGlvbihlbnZlbG9wZSwgY29tbWFuZEludm9jYXRpb24uY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbnRyYWN0cy5Db21tYW5kQ2FuY2VsbGVkVHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY29udHJhY3RzLkNvbW1hbmRGYWlsZWRUeXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjb250cmFjdHMuQ29tbWFuZFN1Y2NlZWRlZFR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgbmFtZT0ke3RoaXMubmFtZX1bbG9jYWwgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnVyaX0sIHJlbW90ZSB1cmk6JHt0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpfV0gZmluaXNoZWQsIGVudmVsb3BlaWQ9JHtlbnZlbG9wZS5jb21tYW5kIS5pZH0sIGNvbW1hbmRpZD0ke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW52ZWxvcGUuY29tbWFuZCEuaWQgPT09IGNvbW1hbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBwcm94eSBuYW1lPSR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSByZXNvbHZpbmcgcHJvbWlzZSwgZW52ZWxvcGVpZD0ke2VudmVsb3BlLmNvbW1hbmQhLmlkfSwgY29tbWFuZGlkPSR7Y29tbWFuZElkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uU291cmNlLnJlc29sdmUoZW52ZWxvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5IG5hbWU9JHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIG5vdCByZXNvbHZpbmcgcHJvbWlzZSwgZW52ZWxvcGVpZD0ke2VudmVsb3BlLmNvbW1hbmQhLmlkfSwgY29tbWFuZGlkPSR7Y29tbWFuZElkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlUHVibGljYXRpb24oZW52ZWxvcGUsIGNvbW1hbmRJbnZvY2F0aW9uLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZVB1YmxpY2F0aW9uKGVudmVsb3BlLCBjb21tYW5kSW52b2NhdGlvbi5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpIHx8ICFjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5vcmlnaW5VcmkpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLm9yaWdpblVyaSA/Pz0gdGhpcy5rZXJuZWxJbmZvLnVyaTtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpID8/PSB0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXA7Ly8/XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlID09PSBjb250cmFjdHMuUmVxdWVzdEtlcm5lbEluZm9UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvblVyaSA9IHRoaXMua2VybmVsSW5mby5yZW1vdGVVcmkhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdXRpbmdTbGlwLmNvbW1hbmRSb3V0aW5nU2xpcENvbnRhaW5zKGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZSwgZGVzdGluYXRpb25VcmksIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5ICR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSBmb3J3YXJkaW5nIGNvbW1hbmQgJHtjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGV9IHRvICR7Y29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmQuZGVzdGluYXRpb25Vcml9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRlci5zZW5kKGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5ICR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSBhYm91dCB0byBhd2FpdCB3aXRoIHRva2VuICR7Y29tbWFuZFRva2VufSBhbmQgIGNvbW1hbmRpZCAke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICAgICAgY29uc3QgZW52ZW50RW52ZWxvcGUgPSBhd2FpdCBjb21wbGV0aW9uU291cmNlLnByb21pc2U7XHJcbiAgICAgICAgICAgIGlmIChlbnZlbnRFbnZlbG9wZS5ldmVudFR5cGUgPT09IGNvbnRyYWN0cy5Db21tYW5kRmFpbGVkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29udGV4dC5mYWlsKCg8Y29udHJhY3RzLkNvbW1hbmRGYWlsZWQ+ZW52ZW50RW52ZWxvcGUuZXZlbnQpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5ICR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSBkb25lIGF3YWl0aW5nIHdpdGggdG9rZW4gJHtjb21tYW5kVG9rZW59fSBhbmQgIGNvbW1hbmRpZCAke2NvbW1hbmRJZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29udGV4dC5mYWlsKCg8YW55PmUpLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IENvbXBvc2l0ZUtlcm5lbCB9IGZyb20gJy4vY29tcG9zaXRlS2VybmVsJztcclxuaW1wb3J0ICogYXMgY29udHJhY3RzIGZyb20gJy4vY29udHJhY3RzJztcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyByb3V0aW5nU2xpcCBmcm9tICcuL3JvdXRpbmdzbGlwJztcclxuaW1wb3J0IHsgS2VybmVsIH0gZnJvbSAnLi9rZXJuZWwnO1xyXG5pbXBvcnQgeyBQcm94eUtlcm5lbCB9IGZyb20gJy4vcHJveHlLZXJuZWwnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XHJcbmltcG9ydCB7IEtlcm5lbFNjaGVkdWxlciB9IGZyb20gJy4va2VybmVsU2NoZWR1bGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJuZWxIb3N0IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3JlbW90ZVVyaVRvS2VybmVsID0gbmV3IE1hcDxzdHJpbmcsIEtlcm5lbD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3VyaVRvS2VybmVsID0gbmV3IE1hcDxzdHJpbmcsIEtlcm5lbD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2tlcm5lbFRvS2VybmVsSW5mbyA9IG5ldyBNYXA8S2VybmVsLCBjb250cmFjdHMuS2VybmVsSW5mbz4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3VyaTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2NoZWR1bGVyOiBLZXJuZWxTY2hlZHVsZXI8Y29udHJhY3RzLktlcm5lbENvbW1hbmRFbnZlbG9wZT47XHJcbiAgICBwcml2YXRlIF9rZXJuZWw6IENvbXBvc2l0ZUtlcm5lbDtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDb25uZWN0b3I6IGNvbm5lY3Rpb24uQ29ubmVjdG9yO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29ubmVjdG9yczogY29ubmVjdGlvbi5Db25uZWN0b3JbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtlcm5lbDogQ29tcG9zaXRlS2VybmVsLCBzZW5kZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciwgcmVjZWl2ZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyLCBob3N0VXJpOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9rZXJuZWwgPSBrZXJuZWw7XHJcbiAgICAgICAgdGhpcy5fdXJpID0gcm91dGluZ1NsaXAuY3JlYXRlS2VybmVsVXJpKGhvc3RVcmkgfHwgXCJrZXJuZWw6Ly92c2NvZGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX2tlcm5lbC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBuZXcgS2VybmVsU2NoZWR1bGVyPGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGU+KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NjaGVkdWxlci5zZXRNdXN0VHJhbXBvbGluZSgoYyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYy5jb21tYW5kVHlwZSA9PT0gY29udHJhY3RzLlJlcXVlc3RJbnB1dFR5cGUpIHx8IChjLmNvbW1hbmRUeXBlID09PSBjb250cmFjdHMuU2VuZEVkaXRhYmxlQ29kZVR5cGUpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbm5lY3RvciA9IG5ldyBjb25uZWN0aW9uLkNvbm5lY3Rvcih7IHNlbmRlciwgcmVjZWl2ZXIgfSk7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdG9ycy5wdXNoKHRoaXMuX2RlZmF1bHRDb25uZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdENvbm5lY3RvcigpOiBjb25uZWN0aW9uLkNvbm5lY3RvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDb25uZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1cmkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQga2VybmVsKCk6IENvbXBvc2l0ZUtlcm5lbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0S2VybmVsQnlSZW1vdGVVcmkocmVtb3RlVXJpOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW1vdGVVcmlUb0tlcm5lbC5nZXQocmVtb3RlVXJpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5Z2V0S2VybmVsQnlPcmlnaW5Vcmkob3JpZ2luVXJpOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91cmlUb0tlcm5lbC5nZXQob3JpZ2luVXJpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0S2VybmVsSW5mbyhrZXJuZWw6IEtlcm5lbCk6IGNvbnRyYWN0cy5LZXJuZWxJbmZvIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2VybmVsVG9LZXJuZWxJbmZvLmdldChrZXJuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRLZXJuZWxJbmZvKGtlcm5lbDogS2VybmVsLCBrZXJuZWxJbmZvOiBjb250cmFjdHMuS2VybmVsSW5mbykge1xyXG4gICAgICAgIGtlcm5lbEluZm8udXJpID0gcm91dGluZ1NsaXAuY3JlYXRlS2VybmVsVXJpKGAke3RoaXMuX3VyaX0ke2tlcm5lbC5uYW1lfWApO1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbFRvS2VybmVsSW5mby5zZXQoa2VybmVsLCBrZXJuZWxJbmZvKTtcclxuICAgICAgICB0aGlzLl91cmlUb0tlcm5lbC5zZXQoa2VybmVsSW5mby51cmksIGtlcm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEtlcm5lbChrZXJuZWxDb21tYW5kRW52ZWxvcGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBLZXJuZWwge1xyXG5cclxuICAgICAgICBjb25zdCB1cmlUb0xvb2t1cCA9IGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpID8/IGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLm9yaWdpblVyaTtcclxuICAgICAgICBsZXQga2VybmVsOiBLZXJuZWwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHVyaVRvTG9va3VwKSB7XHJcbiAgICAgICAgICAgIGtlcm5lbCA9IHRoaXMuX2tlcm5lbC5maW5kS2VybmVsQnlVcmkodXJpVG9Mb29rdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFrZXJuZWwpIHtcclxuICAgICAgICAgICAgaWYgKGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGtlcm5lbCA9IHRoaXMuX2tlcm5lbC5maW5kS2VybmVsQnlOYW1lKGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBrZXJuZWwgPz89IHRoaXMuX2tlcm5lbDtcclxuICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBVc2luZyBLZXJuZWwgJHtrZXJuZWwubmFtZX1gKTtcclxuICAgICAgICByZXR1cm4ga2VybmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25uZWN0UHJveHlLZXJuZWxPbkRlZmF1bHRDb25uZWN0b3IobG9jYWxOYW1lOiBzdHJpbmcsIHJlbW90ZUtlcm5lbFVyaT86IHN0cmluZywgYWxpYXNlcz86IHN0cmluZ1tdKTogUHJveHlLZXJuZWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3RQcm94eUtlcm5lbE9uQ29ubmVjdG9yKGxvY2FsTmFtZSwgdGhpcy5fZGVmYXVsdENvbm5lY3Rvci5zZW5kZXIsIHRoaXMuX2RlZmF1bHRDb25uZWN0b3IucmVjZWl2ZXIsIHJlbW90ZUtlcm5lbFVyaSwgYWxpYXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUFkZENvbm5lY3Rvcihjb25uZWN0b3I6IHsgc2VuZGVyOiBjb25uZWN0aW9uLklLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIsIHJlY2VpdmVyOiBjb25uZWN0aW9uLklLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciwgcmVtb3RlVXJpcz86IHN0cmluZ1tdIH0pIHtcclxuICAgICAgICBpZiAoIWNvbm5lY3Rvci5yZW1vdGVVcmlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RvcnMucHVzaChuZXcgY29ubmVjdGlvbi5Db25uZWN0b3IoY29ubmVjdG9yKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gY29ubmVjdG9yLnJlbW90ZVVyaXMhLmZpbmQodXJpID0+IHRoaXMuX2Nvbm5lY3RvcnMuZmluZChjID0+IGMuY2FuUmVhY2godXJpKSkpO1xyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0b3JzLnB1c2gobmV3IGNvbm5lY3Rpb24uQ29ubmVjdG9yKGNvbm5lY3RvcikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5UmVtb3ZlQ29ubmVjdG9yKGNvbm5lY3RvcjogeyByZW1vdGVVcmlzPzogc3RyaW5nW10gfSkge1xyXG4gICAgICAgIGlmICghY29ubmVjdG9yLnJlbW90ZVVyaXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdXJpIG9mIGNvbm5lY3Rvci5yZW1vdGVVcmlzISkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9jb25uZWN0b3JzLmZpbmRJbmRleChjID0+IGMuY2FuUmVhY2godXJpKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RvcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29ubmVjdFByb3h5S2VybmVsKGxvY2FsTmFtZTogc3RyaW5nLCByZW1vdGVLZXJuZWxVcmk6IHN0cmluZywgYWxpYXNlcz86IHN0cmluZ1tdKTogUHJveHlLZXJuZWwge1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RvcnM7Ly8/XHJcbiAgICAgICAgY29uc3QgY29ubmVjdG9yID0gdGhpcy5fY29ubmVjdG9ycy5maW5kKGMgPT4gYy5jYW5SZWFjaChyZW1vdGVLZXJuZWxVcmkpKTtcclxuICAgICAgICBpZiAoIWNvbm5lY3Rvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGNvbm5lY3RvciB0byByZWFjaCAke3JlbW90ZUtlcm5lbFVyaX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGtlcm5lbCA9IG5ldyBQcm94eUtlcm5lbChsb2NhbE5hbWUsIGNvbm5lY3Rvci5zZW5kZXIsIGNvbm5lY3Rvci5yZWNlaXZlcik7XHJcbiAgICAgICAga2VybmVsLmtlcm5lbEluZm8ucmVtb3RlVXJpID0gcmVtb3RlS2VybmVsVXJpO1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbC5hZGQoa2VybmVsLCBhbGlhc2VzKTtcclxuICAgICAgICByZXR1cm4ga2VybmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdFByb3h5S2VybmVsT25Db25uZWN0b3IobG9jYWxOYW1lOiBzdHJpbmcsIHNlbmRlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyLCByZWNlaXZlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIsIHJlbW90ZUtlcm5lbFVyaT86IHN0cmluZywgYWxpYXNlcz86IHN0cmluZ1tdKTogUHJveHlLZXJuZWwge1xyXG4gICAgICAgIGxldCBrZXJuZWwgPSBuZXcgUHJveHlLZXJuZWwobG9jYWxOYW1lLCBzZW5kZXIsIHJlY2VpdmVyKTtcclxuICAgICAgICBrZXJuZWwua2VybmVsSW5mby5yZW1vdGVVcmkgPSByZW1vdGVLZXJuZWxVcmk7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsLmFkZChrZXJuZWwsIGFsaWFzZXMpO1xyXG4gICAgICAgIHJldHVybiBrZXJuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUdldENvbm5lY3RvcihyZW1vdGVVcmk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0b3JzLmZpbmQoYyA9PiBjLmNhblJlYWNoKHJlbW90ZVVyaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8Y29udHJhY3RzLktlcm5lbFJlYWR5PiB7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsLnN1YnNjcmliZVRvS2VybmVsRXZlbnRzKGUgPT4ge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBLZXJuZWxIb3N0IGZvcndhcmRpbmcgZXZlbnQ6ICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRDb25uZWN0b3Iuc2VuZGVyLnNlbmQoZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb25uZWN0b3IucmVjZWl2ZXIuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU6IGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmlzS2VybmVsQ29tbWFuZEVudmVsb3BlKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgS2VybmVsSG9zdCBkaXNwYWN0aGluZyBjb21tYW5kOiAke0pTT04uc3RyaW5naWZ5KGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlci5ydW5Bc3luYyhrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLCBjb21tYW5kRW52ZWxvcGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXJuZWwgPSB0aGlzLl9rZXJuZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXJuZWwuc2VuZChjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtlcm5lbEluZm9zID0gW3RoaXMuX2tlcm5lbC5rZXJuZWxJbmZvLCAuLi5BcnJheS5mcm9tKHRoaXMuX2tlcm5lbC5jaGlsZEtlcm5lbHMubWFwKGsgPT4gay5rZXJuZWxJbmZvKS5maWx0ZXIoa2kgPT4ga2kuaXNQcm94eSA9PT0gZmFsc2UpKV07XHJcblxyXG4gICAgICAgIGNvbnN0IGtlcm5la1JlYWR5OiBjb250cmFjdHMuS2VybmVsUmVhZHkgPSB7XHJcbiAgICAgICAgICAgIGtlcm5lbEluZm9zOiBrZXJuZWxJbmZvc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX2RlZmF1bHRDb25uZWN0b3Iuc2VuZGVyLnNlbmQoeyBldmVudFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxSZWFkeVR5cGUsIGV2ZW50OiBrZXJuZWtSZWFkeSwgcm91dGluZ1NsaXA6IFt0aGlzLl9rZXJuZWwua2VybmVsSW5mby51cmkhXSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtlcm5la1JlYWR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRLZXJuZWxJbmZvcygpOiBjb250cmFjdHMuS2VybmVsSW5mb1tdIHtcclxuICAgICAgICBsZXQga2VybmVsSW5mb3MgPSBbdGhpcy5fa2VybmVsLmtlcm5lbEluZm9dO1xyXG4gICAgICAgIGZvciAobGV0IGtlcm5lbCBvZiB0aGlzLl9rZXJuZWwuY2hpbGRLZXJuZWxzKSB7XHJcbiAgICAgICAgICAgIGtlcm5lbEluZm9zLnB1c2goa2VybmVsLmtlcm5lbEluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2VybmVsSW5mb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEtlcm5lbEluZm9Qcm9kdWNlZCgpOiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZVtdIHtcclxuICAgICAgICBsZXQgZXZlbnRzOiBjb250cmFjdHMuS2VybmVsRXZlbnRFbnZlbG9wZVtdID0gQXJyYXkuZnJvbSh0aGlzLmdldEtlcm5lbEluZm9zKCkubWFwKGtlcm5lbEluZm8gPT4gKHsgZXZlbnRUeXBlOiBjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSwgZXZlbnQ6IDxjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkPnsga2VybmVsSW5mbzoga2VybmVsSW5mbyB9LCByb3V0aW5nU2xpcDogW2tlcm5lbEluZm8udXJpIV0gfSkpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgQ29tcG9zaXRlS2VybmVsIH0gZnJvbSBcIi4uL2NvbXBvc2l0ZUtlcm5lbFwiO1xyXG5pbXBvcnQgeyBKYXZhc2NyaXB0S2VybmVsIH0gZnJvbSBcIi4uL2phdmFzY3JpcHRLZXJuZWxcIjtcclxuaW1wb3J0IHsgTG9nRW50cnksIExvZ2dlciB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgS2VybmVsSG9zdCB9IGZyb20gXCIuLi9rZXJuZWxIb3N0XCI7XHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi4vY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBjb250cmFjdHMgZnJvbSBcIi4uL2NvbnRyYWN0c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvc3QoXHJcbiAgICBnbG9iYWw6IGFueSxcclxuICAgIGNvbXBvc2l0ZUtlcm5lbE5hbWU6IHN0cmluZyxcclxuICAgIGNvbmZpZ3VyZVJlcXVpcmU6IChpbnRlcmFjdGl2ZTogYW55KSA9PiB2b2lkLFxyXG4gICAgbG9nTWVzc2FnZTogKGVudHJ5OiBMb2dFbnRyeSkgPT4gdm9pZCxcclxuICAgIGxvY2FsVG9SZW1vdGU6IHJ4anMuT2JzZXJ2ZXI8Y29ubmVjdGlvbi5LZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPixcclxuICAgIHJlbW90ZVRvTG9jYWw6IHJ4anMuT2JzZXJ2YWJsZTxjb25uZWN0aW9uLktlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+LFxyXG4gICAgb25SZWFkeTogKCkgPT4gdm9pZCkge1xyXG4gICAgTG9nZ2VyLmNvbmZpZ3VyZShjb21wb3NpdGVLZXJuZWxOYW1lLCBsb2dNZXNzYWdlKTtcclxuXHJcbiAgICBnbG9iYWwuaW50ZXJhY3RpdmUgPSB7fTtcclxuICAgIGNvbmZpZ3VyZVJlcXVpcmUoZ2xvYmFsLmludGVyYWN0aXZlKTtcclxuXHJcbiAgICBjb25zdCBjb21wb3NpdGVLZXJuZWwgPSBuZXcgQ29tcG9zaXRlS2VybmVsKGNvbXBvc2l0ZUtlcm5lbE5hbWUpO1xyXG4gICAgY29uc3Qga2VybmVsSG9zdCA9IG5ldyBLZXJuZWxIb3N0KGNvbXBvc2l0ZUtlcm5lbCwgY29ubmVjdGlvbi5LZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIuRnJvbU9ic2VydmVyKGxvY2FsVG9SZW1vdGUpLCBjb25uZWN0aW9uLktlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyLkZyb21PYnNlcnZhYmxlKHJlbW90ZVRvTG9jYWwpLCBga2VybmVsOi8vJHtjb21wb3NpdGVLZXJuZWxOYW1lfWApO1xyXG5cclxuICAgIGtlcm5lbEhvc3QuZGVmYXVsdENvbm5lY3Rvci5yZWNlaXZlci5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6IChlbnZlbG9wZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5pc0tlcm5lbEV2ZW50RW52ZWxvcGUoZW52ZWxvcGUpICYmIGVudmVsb3BlLmV2ZW50VHlwZSA9PT0gY29udHJhY3RzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9Qcm9kdWNlZCA9IDxjb250cmFjdHMuS2VybmVsSW5mb1Byb2R1Y2VkPmVudmVsb3BlLmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5lbnN1cmVPclVwZGF0ZVByb3h5Rm9yS2VybmVsSW5mbyhrZXJuZWxJbmZvUHJvZHVjZWQua2VybmVsSW5mbywgY29tcG9zaXRlS2VybmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVzZSBjb21wb3NpdGUga2VybmVsIGFzIHJvb3RcclxuXHJcbiAgICBnbG9iYWwua2VybmVsID0ge1xyXG4gICAgICAgIGdldCByb290KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlS2VybmVsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2xvYmFsW2NvbXBvc2l0ZUtlcm5lbE5hbWVdID0ge1xyXG4gICAgICAgIGNvbXBvc2l0ZUtlcm5lbCxcclxuICAgICAgICBrZXJuZWxIb3N0LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBqc0tlcm5lbCA9IG5ldyBKYXZhc2NyaXB0S2VybmVsKCk7XHJcbiAgICBjb21wb3NpdGVLZXJuZWwuYWRkKGpzS2VybmVsLCBbXCJqc1wiXSk7XHJcblxyXG4gICAga2VybmVsSG9zdC5jb25uZWN0KCk7XHJcblxyXG4gICAgb25SZWFkeSgpO1xyXG59XHJcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIGZyb250RW5kSG9zdCBmcm9tICcuL2Zyb250RW5kSG9zdCc7XHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi4vY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEtlcm5lbEhvc3QgfSBmcm9tICcuLi9rZXJuZWxIb3N0JztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBLZXJuZWxJbmZvIH0gZnJvbSAnLi4vY29udHJhY3RzJztcclxuXHJcbnR5cGUgS2VybmVsTWVzc2FnaW5nQXBpID0ge1xyXG4gICAgb25EaWRSZWNlaXZlS2VybmVsTWVzc2FnZTogKGFyZzogYW55KSA9PiBhbnk7XHJcbiAgICBwb3N0S2VybmVsTWVzc2FnZTogKGRhdGE6IHVua25vd24pID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoY29udGV4dDogS2VybmVsTWVzc2FnaW5nQXBpKSB7XHJcbiAgICBjb25maWd1cmUod2luZG93LCBjb250ZXh0KTtcclxuICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHNldCB1cCAnd2VidmlldycgaG9zdCBtb2R1bGUgY29tcGxldGVgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlKGdsb2JhbDogYW55LCBjb250ZXh0OiBLZXJuZWxNZXNzYWdpbmdBcGkpIHtcclxuICAgIGlmICghZ2xvYmFsKSB7XHJcbiAgICAgICAgZ2xvYmFsID0gd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW90ZVRvTG9jYWwgPSBuZXcgcnhqcy5TdWJqZWN0PGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4oKTtcclxuICAgIGNvbnN0IGxvY2FsVG9SZW1vdGUgPSBuZXcgcnhqcy5TdWJqZWN0PGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4oKTtcclxuXHJcbiAgICBsb2NhbFRvUmVtb3RlLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogZW52ZWxvcGUgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LnBvc3RLZXJuZWxNZXNzYWdlKHsgZW52ZWxvcGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgd2ViVmlld0lkID0gdXVpZCgpO1xyXG4gICAgY29udGV4dC5vbkRpZFJlY2VpdmVLZXJuZWxNZXNzYWdlKChhcmc6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChhcmcuZW52ZWxvcGUgJiYgYXJnLndlYlZpZXdJZCA9PT0gd2ViVmlld0lkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudmVsb3BlID0gPGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT48YW55PihhcmcuZW52ZWxvcGUpO1xyXG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5pc0tlcm5lbEV2ZW50RW52ZWxvcGUoZW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBjaGFubmVsIGdvdCAke2VudmVsb3BlLmV2ZW50VHlwZX0gd2l0aCB0b2tlbiAke2VudmVsb3BlLmNvbW1hbmQ/LnRva2VufSBhbmQgaWQgJHtlbnZlbG9wZS5jb21tYW5kPy5pZH1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVtb3RlVG9Mb2NhbC5uZXh0KGVudmVsb3BlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZy53ZWJWaWV3SWQgPT09IHdlYlZpZXdJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXJuZWxIb3N0ID0gKDxLZXJuZWxIb3N0PihnbG9iYWxbJ3dlYnZpZXcnXS5rZXJuZWxIb3N0KSk7XHJcbiAgICAgICAgICAgIGlmIChrZXJuZWxIb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFyZy5wcmVsb2FkQ29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyMhY29ubmVjdCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgY29ubmVjdGluZyB0byBrZXJuZWxzIGZyb20gZXh0ZW5zaW9uIGhvc3RgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2VybmVsSW5mb3MgPSA8S2VybmVsSW5mb1tdPihhcmcua2VybmVsSW5mb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtlcm5lbEluZm8gb2Yga2VybmVsSW5mb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZVVyaSA9IGtlcm5lbEluZm8uaXNQcm94eSA/IGtlcm5lbEluZm8ucmVtb3RlVXJpISA6IGtlcm5lbEluZm8udXJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXJuZWxIb3N0LnRyeUdldENvbm5lY3RvcihyZW1vdGVVcmkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VybmVsSG9zdC5kZWZhdWx0Q29ubmVjdG9yLmFkZFJlbW90ZUhvc3RVcmkocmVtb3RlVXJpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uZW5zdXJlT3JVcGRhdGVQcm94eUZvcktlcm5lbEluZm8oa2VybmVsSW5mbywga2VybmVsSG9zdC5rZXJuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnJvbnRFbmRIb3N0LmNyZWF0ZUhvc3QoXHJcbiAgICAgICAgZ2xvYmFsLFxyXG4gICAgICAgICd3ZWJ2aWV3JyxcclxuICAgICAgICBjb25maWd1cmVSZXF1aXJlLFxyXG4gICAgICAgIGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5wb3N0S2VybmVsTWVzc2FnZSh7IGxvZ0VudHJ5OiBlbnRyeSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2FsVG9SZW1vdGUsXHJcbiAgICAgICAgcmVtb3RlVG9Mb2NhbCxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9zID0gKDxLZXJuZWxIb3N0PihnbG9iYWxbJ3dlYnZpZXcnXS5rZXJuZWxIb3N0KSkuZ2V0S2VybmVsSW5mb3MoKTtcclxuICAgICAgICAgICAgY29uc3QgaG9zdFVyaSA9ICg8S2VybmVsSG9zdD4oZ2xvYmFsWyd3ZWJ2aWV3J10ua2VybmVsSG9zdCkpLnVyaTtcclxuICAgICAgICAgICAgY29udGV4dC5wb3N0S2VybmVsTWVzc2FnZSh7IHByZWxvYWRDb21tYW5kOiAnIyFjb25uZWN0Jywga2VybmVsSW5mb3MsIGhvc3RVcmksIHdlYlZpZXdJZCB9KTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVSZXF1aXJlKGludGVyYWN0aXZlOiBhbnkpIHtcclxuICAgIGlmICgodHlwZW9mIChyZXF1aXJlKSAhPT0gdHlwZW9mIChGdW5jdGlvbikpIHx8ICh0eXBlb2YgKCg8YW55PnJlcXVpcmUpLmNvbmZpZykgIT09IHR5cGVvZiAoRnVuY3Rpb24pKSkge1xyXG4gICAgICAgIGxldCByZXF1aXJlX3NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHJlcXVpcmVfc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlcXVpcmUuanMvMi4zLjYvcmVxdWlyZS5taW4uanMnKTtcclxuICAgICAgICByZXF1aXJlX3NjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XHJcbiAgICAgICAgcmVxdWlyZV9zY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZS5jb25maWd1cmVSZXF1aXJlID0gKGNvbmZpbmc6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8YW55PnJlcXVpcmUpLmNvbmZpZyhjb25maW5nKSB8fCByZXF1aXJlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQocmVxdWlyZV9zY3JpcHQpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW50ZXJhY3RpdmUuY29uZmlndXJlUmVxdWlyZSA9IChjb25maW5nOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICg8YW55PnJlcXVpcmUpLmNvbmZpZyhjb25maW5nKSB8fCByZXF1aXJlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlN5bWJvbF9vYnNlcnZhYmxlIiwicnhqcy5TdWJqZWN0IiwiY29udHJhY3RzLkNvbW1hbmRTdWNjZWVkZWRUeXBlIiwiY29udHJhY3RzLkNvbW1hbmRGYWlsZWRUeXBlIiwicm91dGluZ3NsaXAuZXZlbnRSb3V0aW5nU2xpcENvbnRhaW5zIiwicm91dGluZ3NsaXAuc3RhbXBFdmVudFJvdXRpbmdTbGlwIiwicm91dGluZ3NsaXAuY3JlYXRlS2VybmVsVXJpIiwiY29udHJhY3RzLlJlcXVlc3RLZXJuZWxJbmZvVHlwZSIsImNvbnRyYWN0cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlIiwicm91dGluZ3NsaXAuY29tbWFuZFJvdXRpbmdTbGlwQ29udGFpbnMiLCJyb3V0aW5nc2xpcC5zdGFtcENvbW1hbmRSb3V0aW5nU2xpcEFzQXJyaXZlZCIsInJvdXRpbmdzbGlwLnN0YW1wQ29tbWFuZFJvdXRpbmdTbGlwIiwicnhqcy5tYXAiLCJyb3V0aW5nc2xpcC5jb250aW51ZUNvbW1hbmRSb3V0aW5nU2xpcCIsImNvbnRyYWN0cy5EaXNwbGF5ZWRWYWx1ZVByb2R1Y2VkVHlwZSIsImNvbnRyYWN0cy5TdWJtaXRDb2RlVHlwZSIsImNvbnRyYWN0cy5SZXF1ZXN0VmFsdWVJbmZvc1R5cGUiLCJjb250cmFjdHMuUmVxdWVzdFZhbHVlVHlwZSIsImNvbnRyYWN0cy5TZW5kVmFsdWVUeXBlIiwiY29udHJhY3RzLkNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlIiwiY29udHJhY3RzLlJldHVyblZhbHVlUHJvZHVjZWRUeXBlIiwiY29udHJhY3RzLlZhbHVlSW5mb3NQcm9kdWNlZFR5cGUiLCJjb250cmFjdHMuVmFsdWVQcm9kdWNlZFR5cGUiLCJyb3V0aW5nU2xpcC5ldmVudFJvdXRpbmdTbGlwQ29udGFpbnMiLCJyb3V0aW5nU2xpcC5zdGFtcEV2ZW50Um91dGluZ1NsaXAiLCJjb25uZWN0aW9uLnVwZGF0ZUtlcm5lbEluZm8iLCJjb25uZWN0aW9uLmlzS2VybmVsRXZlbnRFbnZlbG9wZSIsInJvdXRpbmdTbGlwLmNvbnRpbnVlQ29tbWFuZFJvdXRpbmdTbGlwIiwiY29udHJhY3RzLkNvbW1hbmRDYW5jZWxsZWRUeXBlIiwicm91dGluZ1NsaXAuY29tbWFuZFJvdXRpbmdTbGlwQ29udGFpbnMiLCJyb3V0aW5nU2xpcC5jcmVhdGVLZXJuZWxVcmkiLCJjb250cmFjdHMuUmVxdWVzdElucHV0VHlwZSIsImNvbnRyYWN0cy5TZW5kRWRpdGFibGVDb2RlVHlwZSIsImNvbm5lY3Rpb24uQ29ubmVjdG9yIiwiY29ubmVjdGlvbi5pc0tlcm5lbENvbW1hbmRFbnZlbG9wZSIsImNvbnRyYWN0cy5LZXJuZWxSZWFkeVR5cGUiLCJjb25uZWN0aW9uLktlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciIsImNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIiLCJjb25uZWN0aW9uLmVuc3VyZU9yVXBkYXRlUHJveHlGb3JLZXJuZWxJbmZvIiwidXVpZCIsImZyb250RW5kSG9zdC5jcmVhdGVIb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsa0VBQWtFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxFQUFFLE9BQU8sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsOERBQThELENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywwSUFBMEksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLDJIQUEySCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxH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S0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBQ0Q7QUFDQSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckY7QUFDQTtBQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVB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
