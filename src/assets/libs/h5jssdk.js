(function(){(function(){(function(){(function(S){function g(d){if(p[d])return p[d].exports;var r=p[d]={i:d,l:!1,exports:{}};return S[d].call(r.exports,r,r.exports,g),r.l=!0,r.exports}var p={};g.m=S,g.c=p,g.i=function(d){return d},g.d=function(d,r,l){g.o(d,r)||Object.defineProperty(d,r,{configurable:!1,enumerable:!0,get:l})},g.n=function(d){var r=d&&d.__esModule?function(){return d.default}:function(){return d};return g.d(r,"a",r),r},g.o=function(d,r){return Object.prototype.hasOwnProperty.call(d,r)},g.p="",g(g.s=11)})([function(S,g,p){"use strict";var d,r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},l=p(1),c=(d=l)&&d.__esModule?d:{default:d};S.exports={getSystemInfoSync:function(){return wx.getSystemInfoSync()},getNetworkType:function(){wx.getNetworkType({success:function(o){c.default.networkType=o.networkType}})},getLaunchOptionsSync:function(){return wx.getLaunchOptionsSync()},getSystem:function(){var o=this.getSystemInfoSync().system;return-1<o.indexOf("Android")?"android":-1<o.indexOf("iOS")?"ios":"pc"},getWXsdkVersion:function(){var o=this.getSystemInfoSync().SDKVersion;return(o=o.replace(/\./g,"")).substring(0,3)},checkSession:function(){return new Promise(function(o,n){wx.checkSession({success:function(u){o(u)},fail:function(u){n(u)}})})},serialize:function(o){var n=null;if(o!==void 0&&typeof o!="function"||(n=""),typeof o=="number"&&(n=o.toString()),typeof o=="boolean"&&(n=o?"1":"0"),(o===void 0?"undefined":r(o))=="object"&&(o||(n=""),o instanceof RegExp&&(n=o.toString())),typeof o=="string"&&(n=o),typeof n=="string")return encodeURIComponent(n);var u=[];if(o instanceof Array){for(var t=0;t<o.length;t++)o[t]!==void 0&&u.push(r(o[t])=="object"?"":this.serialize(o[t]));return u.join("|")}for(var t in o)o[t]!==void 0&&(n=null,r(o[t])=="object"?o[t]instanceof Array?(n=o[t],u.push(t+"="+this.serialize(n))):u.push(t+"="):(n=o[t],u.push(t+"="+this.serialize(n))));return u.join("&")}}},function(S,g,p){"use strict";S.exports={api:"https://h5sdk.game.qq.com/api2/H5SDKApi.php",report:"",apptype:4,wxappid:"",networkType:"",h5channel:10030414,h5sdkVersion:"20180525",gameVersion:"",reportCount:9,requestCount:0,maxRequestCount:1,tempUserLoginInfo:{},tempReportData:[]}},function(S,g,p){"use strict";var d,r=p(1),l=(d=r)&&d.__esModule?d:{default:d};S.exports={setStorage:function(c,o,n){n=n==null?86400:Math.abs(n);var u=Date.now()+1e3*n;try{wx.setStorageSync(c,o),wx.setStorageSync(c+"_expiresIn",u)}catch(t){return l.default.tempUserLoginInfo[c]=o,l.default.tempUserLoginInfo[c+"_expiresIn"]=u,!1}return!0},getStorage:function(c){var o=Date.now(),n=wx.getStorageSync(c+"_expiresIn");if(n==""&&(n=l.default.tempUserLoginInfo[c+"_expiresIn"]!=null||l.default.tempUserLoginInfo[c+"_expiresIn"]!==0?l.default.tempUserLoginInfo[c+"_expiresIn"]:0),n<o)return this.removeStorage(c),null;try{var u=wx.getStorageSync(c);return u==""&&(u=l.default.tempUserLoginInfo[c]),u}catch(t){return null}},removeStorage:function(c){try{wx.removeStorageSync(c),wx.removeStorageSync(c+"_expiresIn"),l.default.tempUserLoginInfo[c]=null,l.default.tempUserLoginInfo[c+"_expiresIn"]=0}catch(o){return l.default.tempUserLoginInfo[c]=null,l.default.tempUserLoginInfo[c+"_expiresIn"]=0,!1}return!0}}},function(S,g,p){"use strict";Object.defineProperty(g,"__esModule",{value:!0});var d=function(){var r=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"GET";return function(l,c){return new Promise(function(o,n){var u={url:l,data:c,method:r,success:function(t){o(t)},fail:function(t){n(t)}};r=="POST"&&(u.header={"Content-Type":r=="GET"?"application/json;":"application/x-www-form-urlencoded;"},u.data="reportData="+JSON.stringify(c)),wx.request(u)})}};g.get=d("GET"),g.post=d("POST")},function(S,g,p){"use strict";function d(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(g,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};g.Report=function(o,n,u){var t,i,a,s,f,m,y,h,w,I,v,_={};if(o=="SceneFlow"){if(w=_,v=u,(I=n).isubZoneAreaID==null||I.isubZoneAreaID==""?w.isubZoneAreaID=-1:w.isubZoneAreaID=I.isubZoneAreaID,I.vRoleID==null&&I.vRoleID==""?w.vRoleID=-1:w.vRoleID=I.vRoleID,!(I.cardID==null&&I.cardID==""?((v===void 0?"undefined":r(v))=="object"&&typeof v.fail=="function"&&v.fail({data:{iRet:"-9999",sMsg:"param error, cardID is not empty"}}),0):(w.CardID=I.cardID,I.slotID==null&&I.slotID==""?((v===void 0?"undefined":r(v))=="object"&&typeof v.fail=="function"&&v.fail({data:{iRet:"-9999",sMsg:"param error, slotID is not empty"}}),0):(w.SlotID=I.slotID,I.orderID==null&&I.orderID==""?((v===void 0?"undefined":r(v))=="object"&&typeof v.fail=="function"&&v.fail({data:{iRet:"-9999",sMsg:"param error, orderID is not empty"}}),0):(w.OrderID=I.orderID,I.iActionId==null&&I.iActionId==""?((v===void 0?"undefined":r(v))=="object"&&typeof v.fail=="function"&&v.fail({data:{iRet:"-9999",sMsg:"param error, iActionId is not empty"}}),0):(w.iActionId=I.iActionId,r(I.extend)=="object"&&(w.extend=I.extend),1))))))return!1}else if(o=="ActionFlow")y=_,(h=n).isubZoneAreaID==null||h.isubZoneAreaID==""?y.isubZoneAreaID=-1:y.isubZoneAreaID=h.isubZoneAreaID,h.vActionType&&(y.vactiontype=h.vActionType),h.vactiontype&&(y.vactiontype=h.vactiontype),h.c1&&(y.c1=h.c1),h.c2&&(y.c2=h.c2),h.c3&&(y.c3=h.c3),h.c4&&(y.c4=h.c4),h.c5&&(y.c5=h.c5),h.c6&&(y.c6=h.c6),h.c7&&(y.c7=h.c7),h.c8&&(y.c8=h.c8),h.c9&&(y.c9=h.c9),r(h.extend)=="object"&&(y.extend=h.extend);else if(o=="GuideFlow"){if(s=_,m=u,(f=n).isubZoneAreaID==null||f.isubZoneAreaID==""?s.isubZoneAreaID=-1:s.isubZoneAreaID=f.isubZoneAreaID,f.vRoleID==null&&f.vRoleID==""?s.vRoleID=-1:s.vRoleID=f.vRoleID,f.combatEffectiveness&&(s.CombatEffectiveness=f.combatEffectiveness),f.playerFriendsNum&&(s.PlayerFriendsNum=f.playerFriendsNum),f.mapID&&(s.MapID=f.mapID),!(f.iGuideType==null&&f.iGuideType==""?(m.fail({data:{iRet:"-9999",sMsg:"param error, iGuideType is not empty"}}),0):(s.iGuideType=f.iGuideType,f.iGuideID==null&&f.iGuideID==""?((m===void 0?"undefined":r(m))=="object"&&typeof m.fail=="function"&&m.fail({data:{iRet:"-9999",sMsg:"param error, iGuideID is not empty"}}),0):(s.iGuideID=f.iGuideID,s.ClientVersion=l.default.gameVersion,f.result&&(s.Result=f.result==0?0:1),r(f.extend)=="object"&&(s.extend=f.extend),1))))return!1}else if(o!="SnsFlow"||(t=_,a=u,(i=n).isubZoneAreaID==null||i.isubZoneAreaID==""?t.isubZoneAreaID=-1:t.isubZoneAreaID=i.isubZoneAreaID,!(i.iCount==null||i.iCount==""?((a===void 0?"undefined":r(a))=="object"&&typeof a.fail=="function"&&a.fail({data:{iRet:"-9999",sMsg:"param error, iCount illegal"}}),0):(t.icount=i.iCount,i.iSNSType==null||i.iSNSType==""?((a===void 0?"undefined":r(a))=="object"&&typeof a.fail=="function"&&a.fail({data:{iRet:"-9999",sMsg:"param error, iSNSType is not empty"}}),0):(t.vsnstype=i.iSNSType,i.toFriendsOpenid&&(t.vtoopenids=i.toFriendsOpenid),i.toNumberOfFriends&&(t.irecnum=i.toNumberOfFriends),i.iSNSChildType&&(t.vsnssubtype=i.iSNSChildType),r(i.extend)=="object"&&(t.extend=i.extend),1)))))return!1;var b=wx.getStorageSync("HSDK_report_data");if(b==""&&(b=[]),_.reportType=o,b.push(_),b.length>l.default.reportCount)return(0,c.reportIdata)(b).then(function(k){k.iRet==-9999?(u===void 0?"undefined":r(u))=="object"&&typeof u.fail=="function"&&u.fail(e):(u===void 0?"undefined":r(u))=="object"&&typeof u.success=="function"&&u.success(k)}).catch(function(k){(u===void 0?"undefined":r(u))=="object"&&typeof u.fail=="function"&&u.fail(k)}),wx.removeStorageSync("HSDK_report_data"),!1;try{wx.setStorageSync("HSDK_report_data",b)}catch(k){}},g.onhideReport=function(){wx.onHide(function(){var o=wx.getStorageSync("HSDK_report_data");(o===void 0?"undefined":r(o))=="object"&&0<o.length&&((0,c.reportIdata)(o),wx.removeStorageSync("HSDK_report_data"))})};var l=d(p(1)),c=p(5);d(p(2))},function(S,g,p){"use strict";function d(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(g,"__esModule",{value:!0}),g.reportIdata=function(n){var u=l.default.getSystemInfoSync(),t=l.default.getLaunchOptionsSync(),i=r.default.api+"?"+l.default.serialize({methodCmd:1042,apptype:r.default.apptype,h5game_openid:c.default.getStorage("openid"),h5sdk_sessionid:c.default.getStorage("sdkKey"),h5game_os:l.default.getSystem(),appid:r.default.wxappid,h5channel:t.query.scene==null?t.scene:t.query.scene,h5sdkVersion:r.default.h5sdkVersion,user_agent:{channelversion:u.version,system:u.system,model:u.model,networkType:r.default.networkType}});return new Promise(function(a,s){r.default.wxappid.length<3?s({data:{iRet:"-9999",sMsg:"param error, appid illegal"}}):c.default.getStorage("openid")==null||c.default.getStorage("openid")==null||c.default.getStorage("openid")==""?s({data:{iRet:"-9999",sMsg:"h5game_openid is not empty"}}):c.default.getStorage("sdkKey")==null||c.default.getStorage("sdkKey")==null||c.default.getStorage("sdkKey")==""?s({data:{iRet:"-9999",sMsg:"h5sdk_sessionid is not empty"}}):(0,o.post)(i,n).then(function(f){a(f.data)}).catch(function(f){s(f)})})},g.reportATM=function(n){var u=l.default.getSystemInfoSync(),t=(l.default.getLaunchOptionsSync(),r.default.api+"?"+l.default.serialize({methodCmd:1046,apptype:r.default.apptype,h5game_openid:c.default.getStorage("openid"),appid:r.default.wxappid,h5sdkVersion:r.default.h5sdkVersion})),i={h5game_os:l.default.getSystem(),version:r.default.gameVersion==null?"":r.default.gameVersion,h5sdkVersion:r.default.h5sdkVersion,dateTime:new Date().getTime(),sMsg:n,user_agent:{channelversion:u.version,system:u.system,model:u.model,networkType:r.default.networkType}};return new Promise(function(a,s){r.default.wxappid.length<3?s({data:{iRet:"-9999",sMsg:"param error, appid illegal"}}):c.default.getStorage("openid")==null||c.default.getStorage("openid")==null||c.default.getStorage("openid")==""?s({data:{iRet:"-9999",sMsg:"param error, h5game_openid is not empty"}}):c.default.getStorage("sdkKey")==null||c.default.getStorage("sdkKey")==null||c.default.getStorage("sdkKey")==""?s({data:{iRet:"-9999",sMsg:"param error, h5sdk_sessionid is not empty"}}):(0,o.post)(t,i).then(function(f){a(f.data)}).catch(function(f){s(f)})})};var r=d(p(1)),l=d(p(0)),c=d(p(2)),o=p(3)},function(S,g,p){"use strict";function d(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(g,"__esModule",{value:!0}),g.Init=function(o){r.default.wxappid=o.wxappid,r.default.gameVersion=o.gameVersion,l.default.getNetworkType(),(0,c.onhideReport)()};var r=d(p(1)),l=d(p(0)),c=p(4)},function(S,g,p){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=d(p(0)),c=d(p(12)),o=d(p(2)),n=d(p(1)),u=p(5);S.exports={login:function(t){var i=this;t===void 0||r(t),i.getLogin().then(function(a){a.code?wx.getSetting({success:function(s){s.authSetting["scope.userInfo"]||l.default.getWXsdkVersion()<201?i.getUserinfoLowVersion(t,a):i.getLoginState(a,t)}}):typeof t.fail=="function"&&t.fail(a)}).catch(function(a){typeof t.fail=="function"&&t.fail(a)})},getLoginState:function(t,i){this.getLoginKey(t.code,{}).then(function(){var a={userInfo:{h5game_openid:o.default.getStorage("openid"),h5sdk_sessionid:o.default.getStorage("sdkKey")}};o.default.getStorage("unionid")!=null&&(a.userInfo.unionid=o.default.getStorage("unionid")),a.needCreateUserInfoBtn=!0,typeof i.success=="function"&&i.success(a)}).catch(function(a){(0,u.reportATM)(a),typeof i.fail=="function"&&i.fail(a)})},getUserinfoLowVersion:function(t,i){var a=this;c.default.getUserInfo(t).then(function(s){a.getLoginKey(i.code,s.userInfo).then(function(){var f={encryptedData:s.encryptedData,errMsg:s.errMsg,iv:s.iv,rawData:s.rawData,signature:s.signature,userInfo:{avatarUrl:s.userInfo.avatarUrl,city:s.userInfo.city,country:s.userInfo.country,gender:s.userInfo.gender,h5game_openid:o.default.getStorage("openid"),h5sdk_sessionid:o.default.getStorage("sdkKey"),language:s.userInfo.language,nickName:s.userInfo.nickName,province:s.userInfo.province}};o.default.getStorage("unionid")!=null&&(f.userInfo.unionid=o.default.getStorage("unionid")),typeof t.success=="function"&&t.success(f)}).catch(function(f){(0,u.reportATM)(f),typeof t.fail=="function"&&t.fail(f)})}).catch(function(s){t.canUserInfoPlay===!0?(a.reportLoginFail(2,s.errMsg),typeof t.fail=="function"&&t.fail(s)):/auth\sdeny/.test(s.errMsg)?a.getLoginKey(i.code,{}).then(function(){var f={userInfo:{h5game_openid:o.default.getStorage("openid"),h5sdk_sessionid:o.default.getStorage("sdkKey")}};o.default.getStorage("unionid")!=null&&(f.userInfo.unionid=o.default.getStorage("unionid")),typeof t.success=="function"&&t.success(f)}).catch(function(f){typeof t.fail=="function"&&t.fail(f)}):(a.reportLoginFail(1,s.errMsg),typeof t.fail=="function"&&t.fail(s))})},getLogin:function(){var t=this;return new Promise(function(i,a){(function s(){wx.login({success:function(f){n.default.requestCount=0,i(f)},fail:function(f){t.reportLoginFail(1,f.errMsg),/timed\sout/.test(f.errMsg)||/failed\sto\sconnect\sto/.test(f.errMsg)?n.default.requestCount>=n.default.maxRequestCount?((f===void 0?"undefined":r(f))=="object"&&(f.errfrom="wx login",f.requestCount=n.default.requestCount),a(f)):(s(),n.default.requestCount++):((f===void 0?"undefined":r(f))=="object"&&(f.errfrom="wx login"),a(f))}})})()})},getLoginKey:function(t,i){var a=this;return new Promise(function(s,f){(function m(){c.default.getLoginKey(t,i).then(function(){n.default.requestCount=0,s()}).catch(function(y){var h=y.errMsg==null?y.sMsg:y.errMsg;a.reportLoginFail(1,h),/timed\sout/.test(h)||/failed\sto\sconnect\sto/.test(h)?n.default.requestCount>=n.default.maxRequestCount?((y===void 0?"undefined":r(y))=="object"&&(y.errfrom="h5sdk getLoginKey",y.requestCount=n.default.requestCount),f(y)):(m(),n.default.requestCount++):((y===void 0?"undefined":r(y))=="object"&&(y.errfrom="h5sdk getLoginKey"),f(y))})})()})},reportUserInfo:function(t,i){var a=l.default.getSystemInfoSync(),s=[{reportType:"userprofile",isubZoneAreaID:-1,gender:t.gender,country:t.country==null?"":t.country,province:t.province==null?"":t.province,city:t.city==null?"":t.city,model:a.model,vflag:i}];(0,u.reportIdata)(s).then(function(f){}).catch(function(f){console.log("report fail",f)})},reportLoginFail:function(t,i){var a=l.default.getLaunchOptionsSync(),s={icmd:t,iresult:i};a.query.openid==null||a.query.openid==""||a.query.scene!=1007&&a.query.scene!=1008||(s.shareOpenid=a.query.openid,s.shareStatus=a.query.shareStatus==13?13:-1);var f=[s];(0,u.reportIdata)(f).then(function(m){}).catch(function(m){console.log("report fail",m)})},createUserInfoButton:function(t){if(200<l.default.getWXsdkVersion()){t.lang=t.lang==null?"zh_CN":t.lang;var i=wx.createUserInfoButton(t),a=this;return i.onTap(function(s){/auth\sdeny/.test(s.errMsg)?a.reportUserInfo({},0):a.reportUserInfo(s.userInfo,1)}),i}},getLoginUserInfo:function(t){var i=this;return new Promise(function(a,s){(function f(){c.default.getLoginUserInfo(t).then(function(){n.default.requestCount=0,a()}).catch(function(m){var y=m.errMsg==null?m.sMsg:m.errMsg;i.reportLoginFail(1,y),/timed\sout/.test(y)||/failed\sto\sconnect\sto/.test(y)?n.default.requestCount>=n.default.maxRequestCount?((m===void 0?"undefined":r(m))=="object"&&(m.errfrom="h5sdk getLoginUserInfo",m.requestCount=n.default.requestCount),s(m)):(f(),n.default.requestCount++):((m===void 0?"undefined":r(m))=="object"&&(m.errfrom="h5sdk getLoginUserInfo"),s(m))})})()})},checkLogin:function(t){var i=this;wx.checkSession({success:function(a){o.default.getStorage("openid")==null||o.default.getStorage("sdkKey")==null||o.default.getStorage("openid").length<8||o.default.getStorage("sdkKey").length<8?i.login(t):wx.getSetting({success:function(s){s.authSetting["scope.userInfo"]||l.default.getWXsdkVersion()<201?i.getUserinfoLowVersionByStorage(t):i.checkUserLoginStatus(t)}})},fail:function(a){i.login(t)}})},checkUserLoginStatus:function(t){var i=this;i.getLoginUserInfo({}).then(function(){var a={userInfo:{h5game_openid:o.default.getStorage("openid"),h5sdk_sessionid:o.default.getStorage("sdkKey")}};o.default.getStorage("unionid")!=null&&(a.userInfo.unionid=o.default.getStorage("unionid")),a.needCreateUserInfoBtn=!0,typeof t.success=="function"&&t.success(a)}).catch(function(a){(a===void 0?"undefined":r(a))=="object"&&r(a.data)=="object"&&a.data.iRet=="-9201"?i.login(t):typeof t.fail=="function"&&t.fail(a)})},getUserinfoLowVersionByStorage:function(t){var i=this;c.default.getUserInfo(t).then(function(a){i.getLoginUserInfo(a.userInfo).then(function(){var s={encryptedData:a.encryptedData,errMsg:a.errMsg,iv:a.iv,rawData:a.rawData,signature:a.signature,userInfo:{avatarUrl:a.userInfo.avatarUrl,city:a.userInfo.city,country:a.userInfo.country,gender:a.userInfo.gender,h5game_openid:o.default.getStorage("openid"),h5sdk_sessionid:o.default.getStorage("sdkKey"),language:a.userInfo.language,nickName:a.userInfo.nickName,province:a.userInfo.province}};o.default.getStorage("unionid")!=null&&(s.userInfo.unionid=o.default.getStorage("unionid")),typeof t.success=="function"&&t.success(s)}).catch(function(s){(s===void 0?"undefined":r(s))=="object"&&r(s.data)=="object"&&s.data.iRet=="-9201"?i.login(t):typeof t.fail=="function"&&t.fail(s)})}).catch(function(a){t.canUserInfoPlay===!0?(i.reportLoginFail(2,a.errMsg),typeof t.fail=="function"&&t.fail(a)):/auth\sdeny/.test(a.errMsg)?i.getLoginUserInfo({}).then(function(){var s={userInfo:{h5game_openid:o.default.getStorage("openid"),h5sdk_sessionid:o.default.getStorage("sdkKey")}};o.default.getStorage("unionid")!=null&&(s.userInfo.unionid=o.default.getStorage("unionid")),typeof t.success=="function"&&t.success(s)}).catch(function(s){(s===void 0?"undefined":r(s))=="object"&&r(s.data)=="object"&&s.data.iRet=="-9201"?i.login(t):typeof t.fail=="function"&&t.fail(s)}):(i.reportLoginFail(1,a.errMsg),typeof t.fail=="function"&&t.fail(a))})}}},function(S,g,p){"use strict";function d(n){return n&&n.__esModule?n:{default:n}}var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l=d(p(10)),c=d(p(0)),o=d(p(2));S.exports={setUserSnsData:function(n){if(typeof n!="object"&&r(n.rankVal)!=null){var u=c.default.getSystemInfoSync();return c.default.getLaunchOptionsSync(),l.default.apptype,o.default.getStorage("openid"),o.default.getStorage("sdkKey"),c.default.getSystem(),l.default.wxappid,l.default.h5channel,n.rankVal,u.version,u.system,u.model,l.default.networkType,new Promise(function(t,i){get(l.default.api,sendData).then(function(a){typeof n.success=="function"&&n.success(a)}).catch(function(a){typeof n.fail=="function"&&n.fail(res)})})}},exitMiniProgram:function(n){wx.exitMiniProgram({success:function(u){typeof n.success=="function"&&n.success(u)},fail:function(u){typeof n.fail=="function"&&n.fail(u)},complete:function(u){typeof n.complete=="function"&&n.complete(u)}})},getSessionInfo:function(){return{h5game_openid:o.default.getStorage("openid"),h5sdk_sessionid:o.default.getStorage("sdkKey")}},openTencentGameContract:function(){typeof wx.openTencentGameContract=="function"&&wx.openTencentGameContract()},openTencentPrivacyContract:function(){typeof wx.openTencentPrivacyContract=="function"&&wx.openTencentPrivacyContract()}}},function(S,g,p){"use strict";function d(n){return n&&n.__esModule?n:{default:n}}var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l=p(13),c=d(p(2)),o=d(p(0));S.exports={share:function(n){wx.showShareMenu({withShareTicket:!0}),wx.onShareAppMessage(function(u){var t={},i=n;if(typeof n=="function"&&(i=n()),r(i.shareInfo)=="object")return t.title=i.shareInfo.title,i.shareInfo.imageUrl!=null&&i.shareInfo.imageUrl!=""&&(t.imageUrl=i.shareInfo.imageUrl),i.shareInfo.query!=null&&i.shareInfo.query!=""?t.query=i.shareInfo.query+"&openid="+c.default.getStorage("openid"):t.query="openid="+c.default.getStorage("openid"),i.shareInfo.canvas!=null&&i.shareInfo.canvas!=""&&(t.canvas=i.shareInfo.canvas),207<o.default.getWXsdkVersion()?(0,l.shareReport)({shareResult:0,iActionId:1}):(t.success=function(a){(0,l.shareReport)({shareResult:0,iActionId:1}),typeof i.success=="function"&&i.success(a)},t.fail=function(a){(0,l.shareReport)({shareResult:1,iActionId:1}),typeof i.fail=="function"&&i.fail(a)}),t})},shareMessage:function(n){var u={};u.title=n.shareInfo.title,n.shareInfo.imageUrl!=null&&n.shareInfo.imageUrl!=""&&(u.imageUrl=n.shareInfo.imageUrl),n.shareInfo.query!=null&&n.shareInfo.query!=""?u.query=n.shareInfo.query+"&openid="+c.default.getStorage("openid"):u.query="openid="+c.default.getStorage("openid"),n.shareInfo.canvas!=null&&n.shareInfo.canvas!=""&&(u.canvas=n.shareInfo.canvas),207<o.default.getWXsdkVersion()?(0,l.shareReport)({shareResult:0,iActionId:2,gameScene:n.shareInfo.gameScene}):(u.success=function(t){(0,l.shareReport)({shareResult:0,iActionId:2,gameScene:n.shareInfo.gameScene}),typeof n.success=="function"&&n.success(t)},u.fail=function(t){(0,l.shareReport)({shareResult:1,iActionId:2,gameScene:n.shareInfo.gameScene}),typeof n.fail=="function"&&n.fail(t)},u.complete=function(t){typeof n.complete=="function"&&n.complete(t)}),wx.shareAppMessage(u)}}},function(S,g,p){"use strict";var d={wegameUrl:location.protocol+"//wximg.gtimg.com/wxgame/wegame-v2.js",qqapi:location.protocol+"//open.mobile.qq.com/sdk/qqapi.js?_bid=152",wxappid:"",qqappid:"",shareInfo:{image_url:"",title:"",desc:""},h5sdkApi:{default:"h5sdk.game.qq.com",snake:"snake.h5sdk.game.qq.com",h5game:"peng.h5sdk.game.qq.com"},enbaleRightDragToGoBackParams:!1,isNeedPayToken:!0,isNeeduserInfo:!0,isDebug:!1,startTime:0,log:"",countwxloginapi:0,beaconHttpUrl:location.protocol=="https:"?"https://3gimg.qq.com/mig_op/beacon/js/beacon_release_s.js?":"http://3gimg.qq.com/mig_op/beacon/js/beacon_release.js?",version:"v1.0.0"};S.exports=d},function(S,g,p){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}var r=d(p(0)),l=p(6),c=d(p(7)),o=d(p(9)),n=d(p(8)),u=p(4);window.H5SDK={},window.H5SDK.init=function(t){(0,l.Init)(t)},window.H5SDK.checkLogin=function(t){c.default.checkLogin(t)},window.H5SDK.createUserInfoButton=function(t,i){return c.default.createUserInfoButton(t,i)},window.H5SDK.getWXSDKVersion=function(){return r.default.getWXsdkVersion()},window.H5SDK.share=function(t){o.default.share(t)},window.H5SDK.shareMessage=function(t){o.default.shareMessage(t)},window.H5SDK.getSessionInfo=function(t){return n.default.getSessionInfo()},window.H5SDK.setUserSnsData=function(t){n.default.setUserSnsData()},window.H5SDK.report=function(t,i,a){(0,u.Report)(t,i,a)},window.H5SDK.exitMiniProgram=function(t){n.default.exitMiniProgram(t)},window.H5SDK.openTencentGameContract=function(t){n.default.openTencentGameContract(t)},window.H5SDK.openTencentPrivacyContract=function(t){n.default.openTencentPrivacyContract(t)}},function(S,g,p){"use strict";function d(n){return n&&n.__esModule?n:{default:n}}var r=d(p(1)),l=d(p(0)),c=d(p(2)),o=p(3);S.exports={getLoginKey:function(n,u){var t=l.default.getSystemInfoSync(),i=l.default.getLaunchOptionsSync(),a={h5game_code:n,methodCmd:1034,apptype:r.default.apptype,h5game_os:l.default.getSystem(),appid:r.default.wxappid,h5channel:i.query.scene==null?i.scene:i.query.scene,gender:u.gender==null?-1:u.gender,country:u.country==null?-1:u.country,province:u.province==null?-1:u.province,city:u.city==null?-1:u.city,regChannel:r.default.h5channel,version:r.default.gameVersion==null?"":r.default.gameVersion,h5sdkVersion:r.default.h5sdkVersion,user_agent:{channelversion:t.version,system:t.system,model:t.model,networkType:r.default.networkType}};return i.query.openid==null||i.query.openid==""||i.query.scene!=1007&&i.query.scene!=1008||(a.shareOpenid=i.query.openid,a.shareStatus=i.query.shareStatus==13?13:-1),new Promise(function(s,f){a.appid.length<3?f({data:{iRet:"-9999",sMsg:"param error, appid illegal"}}):(0,o.get)(r.default.api,a).then(function(m){if(m.data.iRet=="-9201"||m.data.iRet=="40029"||m.data.iRet=="-9999")f(m);else{var y=m.data;c.default.setStorage("sdkKey",y.list.h5sdk_sessionid,86400),c.default.setStorage("openid",y.list.openid,86400),y.list.unionid&&c.default.setStorage("unionid",y.list.unionid,86400),s(y)}}).catch(function(m){f(m)})})},getUserInfo:function(n){return new Promise(function(u,t){wx.getUserInfo({lang:n.lang==null?"zh_CN":n.lang,success:function(i){u(i)},fail:function(i){t(i)}})})},getLoginUserInfo:function(n){var u=l.default.getSystemInfoSync(),t=l.default.getLaunchOptionsSync(),i={methodCmd:1039,apptype:r.default.apptype,h5game_openid:c.default.getStorage("openid"),h5sdk_sessionid:c.default.getStorage("sdkKey"),no_strong_check:0,h5game_os:l.default.getSystem(),appid:r.default.wxappid,h5channel:t.query.scene==null?t.scene:t.query.scene,gender:n.gender==null?-1:n.gender,country:n.country==null?-1:n.country,province:n.province==null?-1:n.province,city:n.city==null?-1:n.city,regChannel:r.default.h5channel,version:r.default.gameVersion==null?"":r.default.gameVersion,h5sdkVersion:r.default.h5sdkVersion,user_agent:{channelversion:u.version,system:u.system,model:u.model,networkType:r.default.networkType}};return t.query.openid==null||t.query.openid==""||t.query.scene!=1007&&t.query.scene!=1008||(i.shareOpenid=t.query.openid,i.shareStatus=t.query.shareStatus==13?13:-1),new Promise(function(a,s){i.appid.length<3?s({data:{iRet:"-9999",sMsg:"param error, appid illegal"}}):i.h5game_openid==null||i.h5game_openid==null||i.h5game_openid==""?s({data:{iRet:"-9999",sMsg:"h5game_openid is not empty"}}):i.h5sdk_sessionid==null||i.h5sdk_sessionid==null||i.h5sdk_sessionid==""?s({data:{iRet:"-9999",sMsg:"h5sdk_sessionid is not empty"}}):(0,o.get)(r.default.api,i).then(function(f){f.data.iRet=="-9201"||f.data.iRet=="40029"||f.data.iRet=="-9999"?s(f):a(f)}).catch(function(f){s(f)})})}}},function(S,g,p){"use strict";function d(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(g,"__esModule",{value:!0}),g.shareReport=function(n){var u=l.default.getSystemInfoSync(),t=l.default.getLaunchOptionsSync(),i={methodCmd:1014,apptype:r.default.apptype,logtype:"share",h5game_openid:c.default.getStorage("openid"),h5sdk_sessionid:c.default.getStorage("sdkKey"),result:n.shareResult,h5game_os:l.default.getSystem(),appid:r.default.wxappid,h5channel:t.query.scene==null?t.scene:t.query.scene,version:r.default.gameVersion==null?"":r.default.gameVersion,shareMode:n.iActionId,shareOpenid:c.default.getStorage("openid"),shareStatus:13,user_agent:{channelversion:u.version,system:u.system,model:u.model,networkType:r.default.networkType}};return n.shareMode==2&&(i.scene=n.gameScene==null?-1:n.gameScene),new Promise(function(a,s){i.appid.length<3?s({data:{iRet:"-9999",sMsg:"param error, appid illegal"}}):i.h5game_openid==null||i.h5game_openid==null||i.h5game_openid==""?s({data:{iRet:"-9999",sMsg:"h5game_openid is not empty"}}):i.h5sdk_sessionid==null||i.h5sdk_sessionid==null||i.h5sdk_sessionid==""?s({data:{iRet:"-9999",sMsg:"h5sdk_sessionid is not empty"}}):(0,o.get)(r.default.api,i).then(function(f){a(f.data)}).catch(function(f){s(f)})})};var r=d(p(1)),l=d(p(0)),c=d(p(2)),o=p(3)}])})()})();})();
