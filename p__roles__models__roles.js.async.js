(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{Kmnf:function(e,t,r){"use strict";r.r(t);var n=r("d6i3"),a=r.n(n),o=r("p0pE"),s=r.n(o),u=r("t3Un");function l(){return u["a"].post(u["a"].api.platformRoleQuery)}function c(e){return u["a"].post(u["a"].api.platformRoleDelete,e)}function p(e){return u["a"].post(u["a"].api.platformRoleAdd,e)}function i(e){return u["a"].post(u["a"].api.platformRoleEdit,e)}t["default"]={namespace:"roles",state:{rolesList:[],total:null},reducers:{saveList(e,t){var r=t.payload.rolesList;return s()({},e,{rolesList:r})}},effects:{queryRole:a.a.mark(function e(t,r){var n,o,s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t._,n=r.call,o=r.put,e.next=4,n(l);case 4:return s=e.sent,console.log(s),e.next=8,o({type:"saveList",payload:{rolesList:s}});case 8:case"end":return e.stop()}},e)}),deleteRole:a.a.mark(function e(t,r){var n,o,s,u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=r.call,s=r.put,e.next=4,o(c,n);case 4:return u=e.sent,e.next=7,s({type:"queryRole"});case 7:return console.log(u),e.abrupt("return",u);case 9:case"end":return e.stop()}},e)}),addRole:a.a.mark(function e(t,r){var n,o,s,u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=r.call,s=r.put,e.next=4,o(p,n);case 4:return u=e.sent,e.next=7,s({type:"queryRole"});case 7:return console.log(u),e.abrupt("return",u);case 9:case"end":return e.stop()}},e)}),editRole:a.a.mark(function e(t,r){var n,o,s,u;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=r.call,s=r.put,e.next=4,o(i,n);case 4:return u=e.sent,e.next=7,s({type:"queryRole"});case 7:return console.log(u),e.abrupt("return",u);case 9:case"end":return e.stop()}},e)})}}}}]);