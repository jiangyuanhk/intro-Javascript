// var name = "Yuan Jiang";
// var role = "Web Developer";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").append(formattedName);
// $("#header").append(formattedRole);
var skills = ["awesomeness", "programming", "JS"];
var bio = {
    "name": "Yuan Jiang",
    "role": "Developer",
    "contact" : {
      "mobile": "+1(603)667-8324",
      "email": "yuan.jiang.gr@dartmouth.edu",
      "github": "jiangyuanhk",
      "location": "Hanover, NH"
    },
    "welcomeMsg": "Hello World!",
    "skills": skills,
    "bioPic": "http://placeholdit.com/100/100"
};

var work = {};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.contact.skills);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
var formmattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formmattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

var formmatedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(
  formattedName + 
  formattedRole + 
  formattedEmail + 
  formattedPhone + 
  formmattedGithub + 
  formmattedLocation + 
  formattedWelcomMsg + 
  formattedSkills);




