// Time we are starting out with
var time = 61;


// create variable to hold interval ID 
var intervalId; 

// create start button and function to run timer when click
$("#StartButton").on("click", run); 

// create a run function set as a decremental increment of 1 second
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// runs a function decrementing the time at a one second interval with a one second pause.
function decrement () {
    // decrease time by 1 unit value
    time--;
    // Each instance time is decreased by 1 unit value, display that unit value. 
    $("#Timer").html("<h2>" + time + " " + " " + ":" +  " " + "00" + " " + "seconds" + " " + " " + "left" + "</h2>");

    // create if statement when time hits 0. w/ a stop function with rules
    if (time === -1) {
        stop();
        alert("Game Over!");
    }
};

// change the div holding the timer to read 60 seconds in digital
$("#Timer").html(time + " " + " " + ":" + " " + "00");
console.log ("The html timmer should read 60:00");

// // variable that will hold our interval ID
// var intervalId = setInterval(decrement, 1000);
// console.log("define interval at 1000 ms aka 1s");

var stop;

  
//stop function
  function stop () {
// pass name of the interval to clearInterval function
      clearInterval(intervalId);
      console.log("Try to find a solution to stop the timer once it reaches 0");
  }


// When Start Button is clicked, the clock should count down
$("#StartButton").on("click", decrement);
console.log("Clicking this button should register in the console log and reduce the time");

// ORIGINAL CODE THAT I HAD 
// function run () {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//     console.log("timer decrement of 1 second");
// };

decrement();

// Create an object with arrarys embedded within
var questions = [
    {text: "Who was the first cornerback the Rams traded for in the 2018 off-season?",
    answer: "Marcus Peters",
    options:["A. Aqib Talib", "B. Sam Shields", "C. Marcus Peters", "D. Kevin Peterson"],

    },
    {text: "How much cap-space did the Los Angeles Rams possess heading into the 2018 off-season?",
    answer: "42 million dollars",
    options:["A. 42 million dollars", "B. 24 million dollars", "C. 16 million dollars", "D. 37 million dollars"],

    },
    {text: "Via trade or free agnecy, Sammy Watkins, Alec Ogletree, Cody Davis, Robert Quinn, and ________ departed from the Los Angeles Rams",
    answer: "Trumaine Johnson",
    options:["A. Kayvon Webster", "B. Nicholas Roby-Coleman", "C. Trumaine Johnson", "D. Tavon Austin"],

    },
   {text: "Essentially, after moves via trades and free agency, the Rams sent Robert Quinn and their 2018 6th round pick to the Miami Dolphins in exchange for Miami's 2018 4th round pick, 2018 6th round pick, and _________",
    answer: "Ndamukong Suh",
    options:["A. Tj McDonald", "B. Jarvis Landry", "C. Kiko Alonso", "D. Ndamukong Suh"],
    },

    {text: "As of Tuesday, March 2018, the Rams have been linked to offering a deal that includes their 2018 first round pick (21st overall) to which team for their superstar wide receiver?",
    answer: "New York Giants - Odell Beckham Jr.",
    options:["A. Houston Texans - Deandre Hopkins", "B. Atlanta Falcons - Julio Jones", "C. Arizona Cardinals - Larry Fitzgerald", "D. New York Giants - Odell Beckham Jr."],
    }
];

// create a var of all the correct answers
var correctAnswers = ["Marcus Peters", "42 million dollars", "Trumaine Johnson", "Ndamukong Suh", "New York Giants - Odell Beckham Jr."]; 

// create a loop that puts the questions in the respective divs 

for (var i = 0; i < questions.length; i++) {
    // create a variable that is assigned a div
    var q = $("<div>"); 
    // assign a .attr "attribute" to the div
    q.attr("question-name", questions[i].text);
    // the a variable representing the creation of a div, now holds the questions.
    q.text(questions[i].text);
    // Assign the class "Questions" to a. 
    q.attr("class", "Questions");
    // for class "Question", append the variable a with the question attached to variable a. 
    $("#Question").append(q);
};
console.log("end of the questions loop");



for (var i = 0; i < questions.length; i++) {
    // repeat for answer options
    var a = $("<div>"); 
    // assign a .attr "attribute" to the div
    a.attr("answer-options", correctAnswers);
    // the a variable representing the creation of a div, now holds the questions.
    a.html(correctAnswers);
    console.log(correctAnswers);
    // Assign the class "Option" to a. 
    a.attr("class", "Option");
    // for class "Options", append the variable a with the question attached to variable a. 
    $("Option").prepend(a);
    console.log("should add var a to option");
};


// Create a loop that puts the answer options in the respective divs 

// // for (var i = 0; i < questions.length; i++) {
//     // create a variable that is assigned a div
//     var a = $("<div>"); 
//     // assign a .attr "attribute" to the div
//     a.attr("answer-options", questions[i].options);
//     // the a variable representing the creation of a div, now holds the questions.
//     a.html(questions[i].options);
//     console.log("text should show up on page", questions[i].options);
//     // Assign the class "Questions" to a. 
//     a.attr("class", "Options");
//     // for class "Question", append the variable a with the question attached to variable a. 
//     $("#Options").append(a);
// // };


    // //create div for each question. 
    // var a = $("<row>");
    // // create a class for each question
    // a.addClass("Question");
    // //add a data-attribute
    // a.attr("Question-Type", questions[i]);
    // //provide the initial text for each div 
    // a.text(questions[i]);
    // // add the attribute to html
    // $("#Question").append(a);
    // console.log(questions[i]);





// $("#Question1").html(questions[0].text);
    
    
// $("#Options1").html(questions[0].options);
      
// // };

// // Code for question 2
// $("#Question2").html(questions[1].text);
// $("#Options2").html(questions[1].options); 

// // Code for question 3
// $("#Question3").html(questions[2].text);
// $("#Options3").html(questions[2].options);
 
// // Code for question 4
// $("#Question4").html(questions[3].text);
// $("#Options4").html(questions[3].options);

// // Code for question 5
// $("#Question5").html(questions[4].text);
// $("#Options5").html(questions[4].options);






// use an .attr (refer to video on 03/27 class.  starting at last hour of class onward. )
// fix the clock, tell clock to stop at 0
// use log-movie-name-solved.html line 85-88 to find code that will help us create an on click function when a certain class (".") or ("#") is clicked.

// Use code from line 53 to 68 to get an idea on how to loop the function that will put each individual question in each line. 


// create a click function on each index of the options - might have to tie the row id the options are stored in - use log-movie-name.html to see how to use a single loop function to call strings in an array for each Question row opposed to writing it out 5 times. use code lines 53-68 for reference. 
// create a p.hover{} function. 
// 


