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
			head: "Personal Projects",
			topics: [
				{name: "Chat App", title: "Java", desp: "This application was purely made in Java and had ability to communicate with others connected to the same LAN Network. Live communication was done using sockets and GUI was made using swing library."},
				{name: "Monopoly", title: "Java", desp: "This game was also made in Java and allowed upto 4 players to connect a host and play live. The essence was to establish multiple ways of communication (client to server, server to client, client to client)."},
				{name: "Web Diary", title: "HTML/CSS/Bootstrap/PHP/MySQL", desp: "Using my web developing knowledge, I made an interactive diary that had a login/registration system with a little security and a simple space to keep notes for a user."}
			]
		},
		{
			head: "Personal Experience",
			topics: ["I am an avid Java programmer and have experienced it for more than three years. I have also worked with other popular programming and scripting languages such as Python, PHP, C++, SQL, HTML, CSS, JavaScript, and a little exposure to Swift.",
				"Through four years of computer science class at high school and out-of-school, I have earned a solid understanding in Object Oriented Programming, data structure, and efficient algorithms.",
				"I am proactive at competing in programming contests. I did Computer Science UIL, HP Code Wars, and multiple online competitions and it has allowed me to become a multitasker and a good team player. My team placed first overall at two invitational (ARM and Oracle) and placed third in districts.",
				"In my high school, I was an officer of Leo Club, UIL Math, UIL CS, and Mu Alpha Theta and was a part of National Honors Society, Student Council, Class Council, DECA and Robotics.",
				"I am active in community and have volunteered at Hearthstone Nursing Home, St. David’s Hospital, Summer Olympics, Park Cleanups, Kabaria Hospital, and Earth Day rallies."
			]
		}
	];
});

//$(document).ready(function(){
 //   $('[data-toggle="popover"]').popover();   
//});
//console.log("Loading");

//$(document).ready(function(){
 //   $('[data-toggle="popover"]').popover();   
//});
//console.log("Loading");

