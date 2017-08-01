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


app.controller('detailCntrl', function($scope){
	$scope.msg="hel";
	$scope.bio = "I’m an avid programmer and am seeking an internship opportunity for this summer to gain experience and apply programming skills I’ve gained. I will be attending University of Texas at Austin next fall and majoring in Computer Science. blah blah blah blah blah blah  blahblahblah blah blahblah blah blah blah blah blah blah  blahblahblah blah blahblah blah blah blah blah blah blah  blah blahblah blah blahblah blah blah blah blah blah blah  blah blahblah blah blahblah blah blah blah blah blah blah  blah blahblah blah  blah blah blah  blah blahblah blah blahblah blah blah blah blah blah blah ";
	$scope.everything=[
		{//object1-- education
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{
			title: "Education",
			topics: [{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}]
		},
		{}
		
	//	{title: "Education"},	
	//	{name:"University of Texas at Austin", year: "2017-2021", desp: "ahblahblah blah blahblah blah blah blah blah blah blah"},
	//	{name:"Round Rock High School", year: "2013-2017", desp:"I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}
	];
});