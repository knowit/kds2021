(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"0KLy":function(t,e,n){"use strict";var r=n("p0XB"),o=n("/HRN"),a=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),u=n("N9n2"),l=n("XXOK"),c=n("UXZV"),p=n("eVuF"),d=n("pLtp"),f=n("hfKm"),m=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};f(e,"__esModule",{value:!0});var h=m(n("q1tI")),v=n("Q0KE"),y=[],g=[],b=!1;function k(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then(function(t){return n.loading=!1,n.loaded=t,t}).catch(function(t){throw n.loading=!1,n.error=t,t}),n}function O(t){var e={loading:!1,loaded:{},error:null},n=[];try{d(t).forEach(function(r){var o=k(t[r]);o.loading?e.loading=!0:(e.loaded[r]=o.loaded,e.error=o.error),n.push(o.promise),o.promise.then(function(t){e.loaded[r]=t}).catch(function(t){e.error=t})})}catch(r){e.error=r}return e.promise=p.all(n).then(function(t){return e.loading=!1,t}).catch(function(t){throw e.loading=!1,t}),e}function w(t,e){return h.default.createElement((n=t)&&n.__esModule?n.default:n,e);var n}function N(t,e){var n,p=c({loader:null,loading:null,delay:200,timeout:null,render:w,webpack:null,modules:null},e),d=null;function f(){return d||(d=t(p.loader)),d.promise}if(!b&&"function"===typeof p.webpack){var m=p.webpack();g.push(function(t){var e=!0,n=!1,r=void 0;try{for(var o,a=l(m);!(e=(o=a.next()).done);e=!0){var i=o.value;if(-1!==t.indexOf(i))return f()}}catch(s){n=!0,r=s}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}})}return(n=function(e){function n(e){var r;return o(this,n),(r=i(this,s(n).call(this,e))).retry=function(){r.setState({error:null,loading:!0,timedOut:!1}),d=t(p.loader),r._loadModule()},f(),r.state={error:d.error,pastDelay:!1,timedOut:!1,loading:d.loading,loaded:d.loaded},r}return u(n,e),a(n,[{key:"UNSAFE_componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var t=this;if(this.context&&r(p.modules)&&p.modules.forEach(function(e){t.context(e)}),d.loading){"number"===typeof p.delay&&(0===p.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){t.setState({pastDelay:!0})},p.delay)),"number"===typeof p.timeout&&(this._timeout=setTimeout(function(){t.setState({timedOut:!0})},p.timeout));var e=function(){t._mounted&&(t.setState({error:d.error,loaded:d.loaded,loading:d.loading}),t._clearTimeouts())};d.promise.then(function(){e()}).catch(function(t){e()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?h.default.createElement(p.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?p.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return f()}}]),n}(h.default.Component)).contextType=v.LoadableContext,n}function j(t){return N(k,t)}function _(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return p.all(n).then(function(){if(t.length)return _(t,e)})}j.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return N(O,t)},j.preloadAll=function(){return new p(function(t,e){_(y).then(t,e)})},j.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new p(function(e){var n=function(){return b=!0,e()};_(g,t).then(n,n)})},window.__NEXT_PRELOADREADY=j.preloadReady,e.default=j},"5pKv":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,e,n){t.exports=n("uekQ")},"71sZ":function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=n("q1tI"),l=n.n(u),c=l.a.createElement,p=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c("div",{className:"event-header"},c("span",{className:"type"},this.props.type),c("span",{className:"time"},this.props.timeStart," - ",this.props.timeEnd))}}]),e}(l.a.Component);e.default=p},B8i6:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=(n("VNbw"),n("Owzh")),l=n("NpAb"),c=n("UgXd"),p=n.n(c),d=n("RleV"),f=n("q1tI"),m=n.n(f),h=n("UxUw"),v=m.a.createElement,y=p()(function(){return n.e(29).then(n.bind(null,"dewo"))},{ssr:!1,loadableGenerated:{webpack:function(){return["dewo"]},modules:["./FavouriteTalkButton"]}}),g=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return v("div",{className:"talk"},v("div",{className:"header"},v("div",{className:"time"},v("div",{className:"wrapper"},v("img",{src:"../../static/clock.svg",width:"24",height:"24"})),v("span",{className:"time-text"},v("span",{className:"time-text-day"},this.props.day,v("br",null)),this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString())),v("div",{className:"room"},v("div",{className:"wrapper"},v(d.default,{color:Object(h.a)(this.props.room)})),v("span",{className:"text room-name"},"Room ",this.props.room)),v("div",{className:"diff"},v("div",{className:"wrapper"},v(l.default,{difficulty:this.props.difficulty})),v("span",{className:"text diff-name"},this.props.difficulty)),v("div",{className:"text heart"},v(y,{talkId:this.props.id,onClick:this.props.onFavoriteChange}))),v("div",{className:"talk-content"},v("p",{className:"day"},this.props.day),v("p",{className:"time-info"},this.props.timeStart&&this.props.timeStart.toString()," - ",this.props.timeEnd&&this.props.timeEnd.toString()),v("p",{className:"type-info"},this.props.type),v("h1",{className:"title"},this.props.title),v("p",{className:"speaker"},this.props.speaker),v("p",{className:"info"},this.props.speakerInfo),v("div",{className:"tags"},this.props.tags&&this.props.tags.concat([this.props.language]).map(function(e){return v(u.default,{key:e,name:e,selected:t.props.selectedTags.indexOf(e)>-1,onClick:function(){return t.props.onToggleTag(e)}})})),v("hr",{className:"seperator"})))}}]),e}(m.a.Component);e.default=g},BKPM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Day",function(){var t=n("yHM/");return{page:t.default||t}}])},DacR:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=n("q1tI"),l=n.n(u),c=n("UxUw"),p=l.a.createElement,d=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return p("div",{className:"room-container"},this.props.showRoomHeader&&p("div",{className:"room-header",style:{backgroundColor:Object(c.a)(this.props.room)}},"Room ",this.props.room),p("div",{className:"room-content"},this.props.children))}}]),e}(l.a.Component);e.default=d},NpAb:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=(n("HrOg"),n("q1tI")),l=n.n(u),c=l.a.createElement,p=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c("div",{className:"difficulty"},c("span",{className:"first active"}),c("span",{className:"second ".concat("Intermediate"==this.props.difficulty||"Advanced"==this.props.difficulty?"active":"")}),c("span",{className:"third ".concat("Advanced"==this.props.difficulty?"active":"")}))}}]),e}(l.a.Component);e.default=p},Q0KE:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.LoadableContext=a.createContext(null)},RleV:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=n("q1tI"),l=n.n(u),c=l.a.createElement,p=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c("div",{className:"pin"},c("div",{className:"top",style:{borderColor:this.props.color}}),c("div",{className:"bottom",style:{borderColor:"".concat(this.props.color," transparent transparent  transparent")}}))}}]),e}(l.a.Component);e.default=p},UgXd:function(t,e,n){"use strict";var r=n("pLtp"),o=n("UXZV"),a=n("eVuF"),i=n("hfKm"),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};i(e,"__esModule",{value:!0});var u=s(n("q1tI")),l=s(n("0KLy")),c=!1;function p(t,e){if(delete e.webpack,delete e.modules,!c)return t(e);var n=e.loading;return function(){return u.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=p,e.default=function(t,e){var n=l.default,i={loading:function(t){return t.error,t.isLoading,t.pastDelay,null}};if(t instanceof a?i.loader=function(){return t}:"function"===typeof t?i.loader=t:"object"===typeof t&&(i=o({},i,t)),i=o({},i,e),"object"===typeof t&&!(t instanceof a)&&(t.render&&(i.render=function(e,n){return t.render(n,e)}),t.modules)){n=l.default.Map;var s={},u=t.modules();r(u).forEach(function(t){var e=u[t];"function"!==typeof e.then?s[t]=e:s[t]=function(){return e.then(function(t){return t.default||t})}}),i.loader=s}if(i.loadableGenerated&&delete(i=o({},i,i.loadableGenerated)).loadableGenerated,"boolean"===typeof i.ssr){if(!i.ssr)return delete i.ssr,p(n,i);delete i.ssr}return n(i)}},UxUw:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("6BQ9"),o=n.n(r),a=function(t){for(var e=t+"nice seed!!!!"+t,n=0,r=0;r<e.length;r++)n=e.charCodeAt(r)+((n<<5)-n);var o=(16777215&n).toString(16).toUpperCase();return i("#"+"00000".substring(0,6-o.length)+o,[130,120,90])},i=function(t,e){return"#"+t.substring(1,t.length).match(/.{1,2}/g).map(function(t){return o()(t,16)}).map(function(t,n){return Math.max(t,e[n])}).map(function(t){return t.toString(16).toUpperCase()}).map(function(t){return("0"+t).substr(-2)}).join("")}},XWtR:function(t,e,n){var r=n("5T2Y").parseInt,o=n("oc46").trim,a=n("5pKv"),i=/^[-+]?0[xX]/;t.exports=8!==r(a+"08")||22!==r(a+"0x16")?function(t,e){var n=o(String(t),3);return r(n,e>>>0||(i.test(n)?16:10))}:r},dEVD:function(t,e,n){var r=n("Y7ZC"),o=n("XWtR");r(r.G+r.F*(parseInt!=o),{parseInt:o})},oc46:function(t,e,n){var r=n("Y7ZC"),o=n("Jes0"),a=n("KUxP"),i=n("5pKv"),s="["+i+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),c=function(t,e,n){var o={},s=a(function(){return!!i[t]()||"\u200b\x85"!="\u200b\x85"[t]()}),u=o[t]=s?e(p):i[t];n&&(o[n]=u),r(r.P+r.F*s,"String",o)},p=c.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},uekQ:function(t,e,n){n("dEVD"),t.exports=n("WEpk").parseInt},vYYK:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("hfKm"),o=n.n(r);function a(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},w77i:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=n("q1tI"),l=n.n(u),c=n("B8i6"),p=n("UgXd"),d=n.n(p),f=n("DacR"),m=n("yNXk"),h=l.a.createElement,v=(d()(function(){return n.e(30).then(n.bind(null,"dewo"))},{ssr:!1,loadableGenerated:{webpack:function(){return["dewo"]},modules:["./FavouriteTalkButton"]}}),function(t){function e(t){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).call(this,t))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"createRoom",value:function(t){var e=this,n=m.a.fromString(this.props.slot.timeStart);return t.talks.map(function(r,o){return r.speakers.map(function(a){var i=n.copy().add(Object(m.b)(r.type)),s=h("div",{className:"talk-container",key:o},h(c.default,{title:r.title,speaker:a.name,room:t.name,type:r.type,language:r.language,difficulty:r.difficulty,id:r.talkId,key:o,day:e.props.day,tags:r.tags,timeStart:n.copy(),timeEnd:i.copy(),selectedTags:e.props.tags,onToggleTag:e.props.onToggleTag}));return n=i,r.hide?"":s})})}},{key:"render",value:function(){var t=this;if(this.props.slot&&this.props.slot.rooms&&1==this.props.slot.rooms.length){var e=this.props.slot.rooms[0];return h("div",{className:"rooms single-track"},this.props.slot.rooms&&h(f.default,{key:e.name,showRoomHeader:this.props.showRoomHeader,room:e},this.createRoom(e)))}return h("div",{className:"rooms multi-track"},this.props.rooms&&this.props.rooms.map(function(e){return h(f.default,{key:e,showRoomHeader:t.props.showRoomHeader,room:e},t.props.slot&&t.props.slot.rooms&&t.props.slot.rooms.filter(function(t){return t.name==e}).map(function(e){return t.createRoom(e)}))}))}}]),e}(u.Component));e.default=v},"yHM/":function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),a=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=n("q1tI"),l=n.n(u),c=n("71sZ"),p=n("w77i"),d=l.a.createElement,f=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return d("div",{className:"day"},this.props.slots&&this.props.slots.map(function(e,n){return d("div",{key:n+"slot",className:"slot"},d(c.default,{key:n+"slot",timeStart:e.timeStart,timeEnd:e.timeEnd,type:e.type}),e.rooms&&d(p.default,{day:t.props.currDay.day,onToggleTag:t.props.onToggleTag,tags:t.props.tags,slot:e,rooms:t.props.rooms,showRoomHeader:0==n}))}))}}]),e}(u.Component);e.default=f},yNXk:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return l});var r=n("6BQ9"),o=n.n(r),a=n("0iUn"),i=n("sLSF"),s=n("vYYK"),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";Object(a.a)(this,t),Object(s.a)(this,"hours",void 0),Object(s.a)(this,"minutes",void 0),this.hours=o()(e),this.minutes=o()(n)}return Object(i.a)(t,[{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".";return("0"+this.hours).slice(-2)+t+("0"+this.minutes).slice(-2)}},{key:"add",value:function(t){return this.hours+=t.hours+Math.floor((this.minutes+t.minutes)/60),this.minutes=(this.minutes+t.minutes)%60,this}},{key:"copy",value:function(){var e=new t;return e.add(this),e}}],[{key:"fromString",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",r=e.split(n);return new t(r[0],r[1])}}]),t}();function l(t){switch(t){case"Short-talk":return new u("00","30");case"Long-talk":return new u("01","00")}return new u}}},[["BKPM",1,0,2]]]);