$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
console.log("Loading");

var app = angular.module('resume',['ngRoute']);

app.controller('listController', function($scope){
	$scope.msg = "hello world";
	$scope.knowns = [
	{pre: "Participating", link: "#", linktxt: "AngelHack Hackathon"},
	{pre: "Winning", link: "", linktxt:"Programming contest at Oracle and Indeed"},
	{pre: "Winning", link: "", linktxt:"UIL Districts Competition"},
	{pre: "Winning", link: "", linktxt:"DECA Virtual Business Challenge"}
	];
	
	$scope.info = ["Austin, Texas", "vasujogani7@gmail.com","(512) 297-4454"];
	$scope.links = [
	{inf:"GitHub", link:"https://github.com/vasujogani"},
	{inf:"LinkedIn", link:"https://www.linkedin.com/in/vasujogani"},
	{inf:"Twitter", link:"https://twitter.com/vasujogani"}
	];
	
	$scope.languages=["C/C++ - Algorithms","Java - Android Development", "JavaScript - Angular, Node.js, Vue.JS", "HTML/CSS - Pug, Bootstrap", "Python - Competitive Programming"];
	
});