'use strict';var uuidv4=require('uuid').v4;var random=function random(){var length=arguments.length>0&&arguments[0]!==undefined?arguments[0]:10;var chars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';var token='';for(var i=0;i<length;i++){token+=chars[Math.floor(Math.random()*chars.length)]}return token};random.__proto__.uuid=function(){return uuidv4()};random.__proto__.number=function(){var min=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var max=arguments.length>1&&arguments[1]!==undefined?arguments[1]:100;return Math.floor(Math.random()*(max-min+1)+min)};/*!
* Create a random color value.
* (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
* @return {String} A random six-digit color hexcode
*/random.__proto__.color=function(){// The available hex options
var hex=['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];/**
     * Randomly shuffle an array
     * https://stackoverflow.com/a/2450976/1293256
     */var shuffle=function shuffle(){var currentIndex=hex.length;var temporaryValue=void 0,randomIndex=void 0;// While there remain elements to shuffle...
while(0!==currentIndex){// Pick a remaining element...
randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;// And swap it with the current element.
temporaryValue=hex[currentIndex];hex[currentIndex]=hex[randomIndex];hex[randomIndex]=temporaryValue}};/**
     * Create a six-digit hex color
     */var hexColor=function hexColor(){// Create the color
var color='#';// Shuffle the hex values and append
for(var i=0;i<6;i++){shuffle(hex);color+=hex[0]}return color};// Return the color string
return hexColor()};module.exports=random;