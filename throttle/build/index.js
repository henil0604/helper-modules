"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}var throttle=function throttle(callback,delay){// Conditional Checking
var check1=callback===undefined||callback===null;var check2=delay===undefined||delay===null;var check3=typeof callback!=="function"||typeof delay!=="number";if(check1||check2||check3){throw new Error("throttle: please provide correct type of arguments")}var shouldWait=false;var waitingArgs=void 0;var timeoutFunc=function timeoutFunc(){if(waitingArgs==null){shouldWait=false}else{callback.apply(undefined,_toConsumableArray(waitingArgs));waitingArgs=null;setTimeout(timeoutFunc,delay)}};return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}if(shouldWait){waitingArgs=args;return}callback.apply(undefined,args);shouldWait=true;setTimeout(timeoutFunc,delay)}};module.exports=throttle;