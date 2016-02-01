var bio = {
    "name": "Yuan Jiang",
    "role": "Developer",
    "contacts" : {
      "mobile": "+1(603)667-8324",
      "email": "yuan.jiang.gr@dartmouth.edu",
      "github": "jiangyuanhk",
      "location": "Hanover, NH"
    },
    "welcomeMsg": "Hello World!",
    "skills": ["awesomeness", "programming", "JS"],
    "bioPic": "http://placebear.com/100/100"
};

var education = {
  "schools": [

    {
      "name": "City University of Hong Kong",
      "city": "Hong Kong",
      "degree": "BA",
      "major": "Electronic Engineering"
    },
    {
      "name": "Dartmouth College",
      "city": "Hanover, NH",
      "degree": "MS",
      "majors": ["CompSci"]
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates attended": "Jan 2016",
      "url": "https://goo.gl/EBAkI1"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Facebook",
      "title": "Software Engineer",
      "dates": "June 2016 - ",
      "description": "Starting off ~~",
      "location": "Menlo Park, CA"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates worked": "2014",
      "description": "Sample Project 1 description",
      "image": "http://placebear.com/200/200"
    }
  ]
}

// Encapsulation !!
work.display = function () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formmatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formmatedTitle);
    
    var formmatedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formmatedDates);

    var formmatedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formmatedLocation);

    var formmatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formmatedDescription);
  }
}

projects.display = function () {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formmatedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formmatedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      var formmatedDates = HTMLprojectDates.replace("%data%", projects.projects[project]["dates worked"]);
      var formmatedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image)

      $(".project-entry:last").append(formmatedTitle);
      $(".project-entry:last").append(formmatedDates);
      $(".project-entry:last").append(formmatedDescription);
      $(".project-entry:last").append(formmatedImage);

    }
}

bio.display = function () {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formmattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
  $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub);
  $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub);
  $("#header").prepend(formattedName + formattedRole);
  $("#header").append(formattedBioPic);

  //display skills
  $("#header").append(HTMLskillsStart); 
  console.log(bio.skills);
  for (skill in bio.skills) {
    console.log(bio.skills[skill]);
    var formmatedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#header").append(formmatedSkill); 
  }
}

education.displaySchools = function () {
  $("#education").append(HTMLschoolStart);
  for (school in education.schools) {
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name)
                                    + HTMLschoolDegree.replace("%data%", education.schools[school].degree));  
    
    for (major in education.schools[school].majors) {
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));  
    }
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].city))

  }

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLonlineClassesStart);

  for (course in education.onlineCourses) {
    $(".online-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title));
  }
}

bio.display();
work.display();
projects.display();
education.displaySchools();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);







