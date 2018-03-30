// Time we are starting out with
var time = 61;


// create variable to hold interval ID 
var intervalId; 

// create start button and function to run timer when click
$("#StartButton").on("click", run); 

// When Start Button is clicked, the clock should count down
$("#StartButton").on("click", decrement);
console.log("Clicking this button should register in the console log and reduce the time");

// create a run function set as a decremental increment of 1 second
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

// runs a function decrementing the time at a one second interval with a one second pause.
function decrement () {
    // decrease time by 1 unit value
    time--;
    // Each instance time is decreased by 1 unit value, display that unit value. 
    // $("#Timer").html("<h2>" + time + " " + " " + ":" +  " " + "00" + " " + "seconds" + " " + " " + "left" + "</h2>");

    $("#Timer").html("<h2>" + "00" + " " + ":" + " " + time + " " + " "+ "seconds" + " " + " " + "left" + "</h2>");


    // create if statement when time hits 0. w/ a stop function with rules
    if (time === 0) {
        // run stop function
        stop();
        // alert user time is up
        alert("Game Over");
    }
};

//stop function
function stop () {
    // pass name of the interval to clearInterval function
          clearInterval(intervalId);
          console.log("Try to find a solution to stop the timer once it reaches 0");
};


// change the div holding the timer to read 60 seconds in digital
$("#Timer").html(time + " " + " " + ":" + " " + "00");
console.log ("The html timmer should read 60:00");

decrement();

// Create an object with arrarys embedded within
var questions = [
    {
    text: "Who was the first cornerback the Rams traded for in the 2018 off-season?",
    answer: "Marcus Peters",
    options:["A. Aqib Talib", "B. Sam Shields", "C. Marcus Peters", "D. Kevin Peterson"]

    },
    {
    text: "How much cap-space did the Los Angeles Rams possess heading into the 2018 off-season?",
    answer: "42 million dollars",
    options:["A. 42 million dollars", "B. 24 million dollars", "C. 16 million dollars", "D. 37 million dollars"]

    },
    {
    text: "Via trade or free agnecy, Sammy Watkins, Alec Ogletree, Cody Davis, Robert Quinn, and ________ departed from the Los Angeles Rams",
    answer: "Trumaine Johnson",
    options:["A. Kayvon Webster", "B. Nicholas Roby-Coleman", "C. Trumaine Johnson", "D. Tavon Austin"]

    },
   {
    text: "Essentially, after moves via trades and free agency, the Rams sent Robert Quinn and their 2018 6th round pick to the Miami Dolphins in exchange for Miami's 2018 4th round pick, 2018 6th round pick, and _________",
    answer: "Ndamukong Suh",
    options:["A. Tj McDonald", "B. Jarvis Landry", "C. Kiko Alonso", "D. Ndamukong Suh"]
    },

    {
    text: "As of Tuesday, March 2018, the Rams have been linked to offering a deal that includes their 2018 first round pick (21st overall) to which team for their superstar wide receiver?",
    answer: "New York Giants - Odell Beckham Jr.",
    options:["A. Houston Texans - Deandre Hopkins" + " " + "B. Atlanta Falcons - Julio Jones", "C. Arizona Cardinals - Larry Fitzgerald", "D. New York Giants - Odell Beckham Jr."]
    }
];
// how do i console.log the object to ensure it is working?


// create a var of all the correct answers
var correctAnswers = ["Marcus Peters", "42 million dollars", "Trumaine Johnson", "Ndamukong Suh", "New York Giants - Odell Beckham Jr."] 


function setup() {
    // define variables at the top for answers and questions (a/q)
    var a = $("<div>"); 
    var q = $("<div>"); 
    for (var i = 0; i < questions.length; i++) {
        // create a variable that is assigned a div
        var q = $("<div>"); 
        // use html method to put question text into question div
        q.html("<h1>" + questions[i].text + "</h1>");
        // set the q variable with divs to class ="Questions"
        q.attr("class", "Questions");
        // put options into var options
        var options = questions[i].options;
        // create a loop inside the parent loop for answer divs
       for (var j = 0; j < options.length; j++) {
            console.log("Inside the child loop");
            // variable a set to a <div>
            var a = $("<div>");
            a.text(options[j]);
            a.attr("data-i", i);
            console.log("creates a div for answers");
            // set the q variable with divs to class ="Questions"
            a.attr("class", "Answers");
            console.log("creates a class='Answers' for the div");
            q.append(a);
        };
        // give q the attribute "question-name" to hold questions
        q.attr("question-name", questions[i].text);
        
        console.log("Assign attribute with questions ")

        $('#all_questions').append(q);
    }
}

setup();

// This is a function where when the correct answer is clicked, a score will be added to the total number of correct.   finished button is clicked, the screen will move to the next page. 
$(".Answers").on("click",function () {
    // set variable answers to correctAnswers as defined above
    var i = $(this).attr("data-i");
    var question = questions[i];

    console.log("question", question);
    var userGuess; 
    // create if statement
    // if (userGuess === answers){
    //     var winTotal = 0;
    //     winTotal++;
    // }
});

    // create a var userAnswer
    //create if statements to check against user answers
    // if (userAnswer === correctAnswers[0]){


















































// use an .attr (refer to video on 03/27 class.  starting at last hour of class onward. )

// use log-movie-name-solved.html line 85-88 to find code that will help us create an on click function when a certain class (".") or ("#") is clicked.





