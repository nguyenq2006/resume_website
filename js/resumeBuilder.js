/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //declare a new variable
 // var first_name = "Quoc";
 // var age = 20;
 // console.log(first_name);

 //replace a string
//  var new_name = first_name.replace("Quoc", "Kevin");
// $("#main").append(new_name);

//append and prepend
// var name = HTMLheaderName.replace("%data%", "Quoc Nguyen");
// var role = HTMLheaderRole.replace("%data%", "Software Engineer");
// $("#header").append(role);
// $("#header").prepend(name);

var skills = ["Java", "Data Structure & Algorthms", "Java Swing", "C/C++", "Javascript", "HTML/CSS", "PHP", "Python"];

//object literal
var bio = {"name" : "Quoc Nguyen", "role" : "Software Engineer", 
			"pic" : "images/me.jpg",
			"email" : "nguyenq2006@gmail.com", 
			"message" : "Weclcome to Quoc's Resume",
			"skills" : skills
		};
//adding new data to the object
//bio["city"] = "Fremont";

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
HTMLemail = HTMLemail.replace("%data%", bio.email);
HTMLgithub = HTMLgithub.replace(/%data%/g, "https://github.com/nguyenq2006");//replace all occurence 
HTMLbioPic = HTMLbioPic.replace("%data%", bio.pic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);
// HTMLskills = HTMLskills.replace("%data%", skills);

$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);
$("#header").append(HTMLemail);
$("#header").append(HTMLgithub);
$("#header").append(HTMLbioPic);
$("#header").append(HTMLwelcomeMsg);
$("#header").append(HTMLskillsStart);
// $("#header").append(HTMLskills);

for (i = 0; i < bio.skills.length; i++) {
	$("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
}

//work experience
var work = { "experiences" :[
			{"position" : "Peer Educator",
			"employer" : "SISU Peer Connections",
			"start_date" : "January 2016",
			"end_date" : "Present",
			"location" : "San Jose, CA",
			"description" : "- Tutor students in math and computer science courses <br>\
			- Assist professor in an Introduction Programming course(CS46A) <br>\
			- Facilitate and plan study session for students in CS46A"},
	 		{"position" : "Shift Manager",
	 		"employer" : "Pho T&T",
	 		"start_date" : "May 2015",
	 		"end_date" : "January 2016",
	 		"location" : "San Leandro, CA",
	 		"description" : "- Train new employees <br>\
	 		- Build costumer satisfication <br>\
	 		- Manage sales"} ]
	 };

var education = {"school" : "San Jose State University",
			"start_date" : "August 2014",
			"major" : "Computer Science",
			"location" : "San Jose, CA"
	};	

var projects = {"projects" : [{"name" : "SJSU Book Finder",
					"date" : "April 2016",
					"description" : "An iOS application that allow SJSU stidents to buy, sell, and trade textbook. \
					The app was build on Java server to communicate between the iOS and the Database. \
					We implemented our own database base the knowledge we gained from Data Structure and Algorithms course. \
					The database store the user and the textbooks infomation. We used AVL Tree and map as our main data structure."},
					{"name" : "Mancala Game",
					"date" : "May 2016",
					"description" : ""}
	
	]}


for(exp in work.experiences) {
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.experiences[exp].employer));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.experiences[exp].location));
	var date = work.experiences[exp].start_date + " - " + work.experiences[exp].end_date;
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", date));
	$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.experiences[exp].position));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.experiences[exp].description));
}



$("#education").append(HTMLschoolStart);
HTMLschoolName = HTMLschoolName.replace("%data%", education.school);
HTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.major);
HTMLschoolDates = HTMLschoolDates.replace("%data%", education.start_date);
HTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.location);
$(".education-entry:last").append(HTMLschoolName);
$(".education-entry:last").append(HTMLschoolLocation);
$(".education-entry:last").append(HTMLschoolDates);
$(".education-entry:last").append(HTMLschoolMajor);

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
}); //document is the whole website

projects.display = function() {
	for(proj in projects.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[proj].name));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[proj].date));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[proj].description));
	}
}

projects.display();

$("#mapdiv").append("googleMap");






