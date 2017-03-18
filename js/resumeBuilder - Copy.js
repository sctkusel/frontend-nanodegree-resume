//Declaration object bio
var bio = {
    "name" : "Sabrina Civelli Küsel",
    "role" : "Front-End Developer",
    "contacts" : {
        "mobile" : "+55-11-982741058",
        "email" : "sabrina.civelli@gmail.com",
        "githut" : "https://github.com/sctkusel",
        "twitter" : "@SaCivelli",
        "location" : "São Paulo - Brazil"
    },
    "welcomeMessage" : "Say something nice about me.",
    "skills" : ["HTML", "CSS", "JavaScript", "Python"],
    "bioPic" : "images/fry.jpg"
};

//Function displaybio()
bio.display = function() {
    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    
        
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.githut); 
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    
    var bioArray = ["#topContacts", "#footerContacts"];
    for (i = 0; i < bioArray.length; i++){
        $(bioArray[i]).append(formattedMobile);
        $(bioArray[i]).append(formattedEmail);
        $(bioArray[i]).append(formattedGitHub);
        $(bioArray[i]).append(formattedTwitter);
        $(bioArray[i]).append(formattedLocation);
    }

    //Skills loop
    if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
        for (j = 0; j < bio.skills.length; j++){
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[j]);
            $("#skills").append(formattedSkills);
        }
    } 
};


//Declaration object education
var education = {
    "schools" : [
        {
            "name" : "Hospital das Clínicas",
            "location" : "São Paulo - SP", 
            "degree" : "Help",
            "majors" : "Bachelor's of Nutrition",
            "dates" : "2002",
            "url" : "http://udacity.com"
        },
        {
            "name" : "PUCC",
            "location" : "Campinas - SP", 
            "degree" : "Post-Secondary",
            "majors" : "Bachelor",
            "dates" : "1998-2001",
            "url" : "procurar"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Intro to Nanogedree Programming",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://br.udacity.com/course/intro-to-programming-nanodegree--nd000/"
        },
        {
            "title" : "Javascript Basics",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://br.udacity.com/course/javascript-basics--ud804/"
        },
        {
            "title" : "How to Use Git and GitHub",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "https://br.udacity.com/course/how-to-use-git-and-github--ud775/"
        },
    ]
};

//function displayEducation
education.display = function() {
    education.schools.forEach(function(school){
       $("#education").append(HTMLschoolStart);
        
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("Major: %data%", school.majors);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolMajor);
        $(".education-entry:last").append(formattedSchoolDate);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDegree);
      
    });
    
    $(".education-entry:last").append(HTMLonlineClasses);        
   
    education.onlineCourses.forEach(function(online){
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
        
        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};


//Declaration object work
var work = {
    "jobs" : [
        {
            "employer" : "Self-Employed",
            "title" : "Businesses Owner",
            "location" : "São Paulo - Brazil",
            "dates" : "2011 - in progress",
            "description" : "Owner of a restaurant. Execute all administrative funcions such as purchase, finantial, process, human resources"
        },
        {
            "employer" : "Brand Brasil",
            "title" : "Software Consultant",
            "location" : "São Paulo - Brazil",
            "dates" : "2007 - 2012",
            "description" : "Implement software in companies and word with help desk in Madrid, Paris and Chile"
        }
    ]
};

//work.display = function(){
function displayWork() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
                
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    });
};



//Declaration object projects
var projects = {
    "projects" : [
        {
            "title" : "See projects at Brand",
            "dates" : "2007 - 2012",
            "description" : "See",
            "images" : "images/197x148.gif"
        },
        {
            "title" : "See projects at Sei la onde",
            "dates" : "2012 - 2014",
            "description" : "See buuuuu",
            "images" : "images/197x148.gif"
        }
    ]
};





//funcion displayProjects
projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
        
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        $(".project-entry:last").append(formattedProjectImage);
    });
};


bio.display();

displayWork();
//work.display();

projects.display();

education.display();


$("#mapDiv").append(googleMap);

