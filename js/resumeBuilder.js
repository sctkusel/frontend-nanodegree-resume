//Declaration object bio
var bio = {
    "name": "Sabrina Civelli Küsel",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "+55 11 982741058",
        "email": "sabrina.civelli@gmail.com",
        "githut": "sctkusel",
        "twitter": "@SaCivelli",
        "location": "São Paulo - Brazil"
    },
    "welcomeMessage": "Hey!! Hope you enjoy my resume created as a project to finish the Intro to Programming Nanodegree at Udacity! Looking foward for you comments. Thank you!!",
    "skills": ["HTML", "CSS", "JavaScript", "Python"],
    "biopic": "images/fry.jpg"
};

//bio function encapsulated using dot notation
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.githut);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


    var bioArray = ["#topContacts", "#footerContacts"];
    //iterates throught contacts and add each item of contact to the the item in the array and append to the page
    for (i = 0; i < bioArray.length; i++) {
        $(bioArray[i]).append(formattedMobile);
        $(bioArray[i]).append(formattedEmail);
        $(bioArray[i]).append(formattedGitHub);
        $(bioArray[i]).append(formattedTwitter);
        $(bioArray[i]).append(formattedLocation);
    }

    //Show skills if there is an item inside it
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        //iterates throught skills and append the items to the page
        for (j = 0; j < bio.skills.length; j++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[j]);
            $("#skills").append(formattedSkills);
        }
    }
};


//Declaration object education
var education = {
    "schools": [{
            "name": "University of Western Ontario",
            "location": "Toronto - Canada",
            "degree": "Computer Science",
            "majors": ["Master Degree", "Other1", "Other2"],
            "dates": "2002",
            "url": "http://udacity.com"
        },
        {
            "name": "PUCC",
            "location": "Campinas - Brazil",
            "degree": "Computer Science",
            "majors": ["Master Degree", "Other1", "Other2"],
            "dates": "1998 - 2001",
            "url": "http://udacity.com"
        }
    ],
    "onlineCourses": [{
            "title": "Intro to Nanogedree Programming",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://udacity.com"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://udacity.com"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://udacity.com"
        },
    ]
};


education.display = function() {
    //Iterates through schools, creates the div #education and append each item to the page
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors).replace(",", ", ");
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDate);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);

    });
    //Add element onlineClasses to the page
    $(".education-entry:last").append(HTMLonlineClasses);
    //Iterates through onlineCourses, and append each item to the page
    education.onlineCourses.forEach(function(online) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title).replace("#", online.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("#", online.url).replace("%data%", online.url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        //$(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};



//Declaration object work
var work = {
    "jobs": [{
            "employer": "Fräulein Bierhaus",
            "title": "CEO & Co-Founder",
            "location": "São Paulo - Brazil",
            "dates": "since 2012",
            "description": "Management of restaurant, all areas included.",
            "url": "http://udacity.com"
        },
        {
            "employer": "Brand Brasil",
            "title": "Software Consultant",
            "location": "Paris - France",
            "dates": "2007 - 2012",
            "description": "Implement software in companies and word with help desk in Madrid, Paris and Chile",
            "url": "http://udacity.com"
        }
    ]
};


work.display = function() {
    //Iterates through jobs, and append each item to the page
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
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
    "projects": [{
            "title": "Project 1",
            "dates": "2007 - 2012",
            "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"],
            "url": "http://udacity.com"
        },
        {
            "title": "Project 2",
            "dates": "2012 - 2014",
            "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"],
            "url": "http://udacity.com"
        }
    ]
};


projects.display = function() {
    //Iterates throught projects and append each item to the page
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        project.images.forEach(function(img) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", img);
            $(".project-entry:last").append(formattedProjectImage);
        });
    });

};

//Call the all the functions created
bio.display();
work.display();
projects.display();
education.display();


//Append the div map to the page
$("#mapDiv").append(googleMap);