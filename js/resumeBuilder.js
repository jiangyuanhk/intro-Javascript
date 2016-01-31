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
    "bioPic": "http://placeholdit.com/100/100"
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
      "major": ["CompSci"]
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
      "images": ["http://placebear.com/200/200"]
    }
  ]
}

var displayWork = function displayWork () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formmatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formmatedTitle);
    
    var formmatedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formmatedDates);

    var formmatedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formmatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formmatedDescription);
    $(".work-entry:last").append(formmatedLocation);
  }
}








