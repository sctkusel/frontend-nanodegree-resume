// Declaring a variable and using it
//var awesomeThoughts = "I am Sabrina and I am AWESOME";
// console.log(awesomeThoughts);

//Using .replace method
//var email = "cameron@udacity.com";
//console.log(email);
//var newEmail = email.replace("udacity", "gmail");
//console.log(newEmail);

//Replace a word in a variable and append
//var awesomeThoughts = "I am Sabrina and I am AWESOME";
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
//$("#main").append(funThoughts);

//Using .slice method
var s = "audacity";
var a = function(s){
    sPart = s.slice(-6);
    console.log(sPart);
    s = "U" + sPart;
    
    return s;    
}

var skills = ["HTML", "CSS", "JavaScript", "Python"];

//$("#main").append(skills); //append all the items in the array
//$("#main").append(skills[2]); //append only the item in the selected index

skills.push("SQL"); //add an item at the end of an array
$("#main").append(skills);

skills.pop();//remove an item at the end of an array


//Take a string and transform the firt word to uppercase and the second to lowercase
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = finalName.split(" ");//it createas an array ["AlbERt", "EINstEiN"]
    names[1] = names[1].toUpperCase(); //it changes the item on index 1 to uppercase creating EINSTEIN
    names[0] = name[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();//first takes index 0 and slice it taking just the first letter and changes it to uppercase. than with slice takes the rest from 1 to the end and changes it to lowercase
    finalName = names.join(" ");//join both item of the array changing it back to a string using a space as separator
    
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

//dot notation and brackets notation
var work = {};
work.position = "Course Developer";
work.employer = "Udacity";
work.years = 0.3;

var education = {};
education["name"] = "São Paulo";
education["years"] = "2005-2013";
education["city"] = "São Paulo";

$("#main").append(work["position"]);
$("#main").append(education.name);

//JSON notation
var education = {
    "schools" : [
        {
            "name" : "Liceu",
            "city" : "Campinas",
            "degree" : "High School", 
            "major" : "N/A"
        },
        {
            "name" : "PUCC",
            "city" : "Campinas",
            "degree" : "Post-Secondary", 
            "major" : "Bachelor"
        }
    ]
}

//Copy from resumeBuilder.js

/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Sabrina Civelli");


var name = "Sabrina Civelli Küsel"
var formattedName = HTMLheaderName.replace("%data%", name );

var role = "Front-End Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var skills = ["HTML", "CSS", "JavaScript", "Python"];

//$("#main").append(skills); //append all the items in the array
//$("#main").append(skills[2]); //append only the item in the selected index

var bio = {
    "name" : "Sabrina Civelli Küsel",
    "role" : formattedRole,
    "contacts" : {
        "mobile" : "+55-11-982741058",
        "email" : "sabrina.civelli@gmail.com",
        "githut" : "https://github.com/sctkusel",
        "twitter" : "ver depois",
        "location" : "São Paulo - Brazil"
    },
    "welcomeMessage" : "Say something nice about me.",
    "skills" : ["HTML", "CSS", "JavaScript", "Python"],
    "bioPic" : "../images/",
    "display" : "function"
};

$("#header").prepend(bio.role);
$("#header").prepend(bio.name);
$("#main").prepend(bio.name);
$("#main").append(bio.skills);


//Before changing to while loop
//Checks if the bio.skill object has content. if true append skillsStart to the div id=#header and the skills to the element with id=#skills using HTMLskills
if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
}



/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x, y);    
});


////
$("#header").append(HTMLskillsStart);
    for (j = 0; j < bio.skills.length; j++){
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[j]);
        $("#skills").append(formattedSkills);
    }
    
          
    /*if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkills);
    };*/



   /*
    //Check if needs to stay in the code for final project
    function inName(name) {
        name = name.trim().split(" ");
        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
            
        return name[0] +" "+name[1];
    }
    
    $("#main").append(internationalizeButton)
    */