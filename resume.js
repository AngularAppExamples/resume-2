var app = angular.module('resume',['ngRoute']);

app.controller('listController', function($scope){
	$scope.msg = "hello world";
	$scope.knowns = [
	{pre: "Participatings", link: "#", linktxt: "AngelHack Hackathon"},
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
	$scope.bio = "I’m an avid programmer and am seeking an internship opportunity for this summer to gain experience and apply programming skills I’ve gained. I will be attending University of Texas at Austin next fall and majoring in Computer Science.";
	$scope.everything=[
		{
			head: "Education",
			topics: [
				{name:"University of Texas at Austind", title: "2017-2021", desp: " blah blah blah blah blah"},	
				{name:"Round Rock High School", title: "2013-2017", desp:" I specialized in STEM with a 3.9 GPA. ahblahblah blah blahblah blah blah blah blah blah blah"}
			]
		},
		{
			head: "Work Experience",
			topics: [
				{name: "Aerospace dep. at University of Texas at Austin", title: "Researcher", desp: "As a part of a research, I worked under a graduate student and professor Akella and researched and implement some path finding algorithms such A*, Dijkstra, RRT, and PRM in Java and C++."},
				{name: "Burro Co.", title: "Java Developer", desp: "As a Java developer, I updated the GUI of drivers’ app and added featured animations and transitions between the pages."},
				{name: "Mathnasium", title: "Math Tutor", desp: "As a Math tutor, I taught math to kids who needed help ranging from elementary students to juniors in high school."},
				{name: "Private Mentor", title: "Advisor/Tutor", desp: "As a Math tutor, I taught math to kids who needed help ranging from elementary students to juniors in high school."}
			]
		},
		{
			head: "Work Experience",
			topics: [
				{name: "Aerospace dep. at University of Texas at Austin", title: "Researcher", desp: "As a part of a research, I worked under a graduate student and professor Akella and researched and implement some path finding algorithms such A*, Dijkstra, RRT, and PRM in Java and C++."},
				{name: "Burro Co.", title: "Java Developer", desp: "As a Java developer, I updated the GUI of drivers’ app and added featured animations and transitions between the pages."},
				{name: "Mathnasium", title: "Math Tutor", desp: "As a Math tutor, I taught math to kids who needed help ranging from elementary students to juniors in high school."},
				{name: "Private Mentor", title: "Advisor/Tutor", desp: "As a Math tutor, I taught math to kids who needed help ranging from elementary students to juniors in high school."}
			]
		},
		{
			head: "Work Experience",
			topics: [
				{name: "Aerospace dep. at University of Texas at Austin", title: "Researcher", desp: "As a part of a research, I worked under a graduate student and professor Akella and researched and implement some path finding algorithms such A*, Dijkstra, RRT, and PRM in Java and C++."},
				{name: "Burro Co.", title: "Java Developer", desp: "As a Java developer, I updated the GUI of drivers’ app and added featured animations and transitions between the pages."},
				{name: "Mathnasium", title: "Math Tutor", desp: "As a Math tutor, I taught math to kids who needed help ranging from elementary students to juniors in high school."},
				{name: "Private Mentor", title: "Advisor/Tutor", desp: "As a Math tutor, I taught math to kids who needed help ranging from elementary students to juniors in high school."}
			]
		}
	];
});

//$(document).ready(function(){
 //   $('[data-toggle="popover"]').popover();   
//});
//console.log("Loading");
