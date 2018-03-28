// Time we are starting out with
var time = 60;

// change the div holding the timer to read 60 seconds in digital
$("#Timer").html(time + " " + " " + ":" + " " + "00");
console.log ("The html timmer should read 60:00");

// variable that will hold our interval ID
var intervalId = setInterval(decrement, 1000);
console.log("define interval at 1000 ms aka 1s");

var stop;

// runs a function decrementing the time at a one second interval with a one second pause.
function decrement () {
    // decrease time by 1 unit value
    time--;
    // Each instance time is decreased by 1 unit value, display that unit value. 
    $("#Timer").html(time + " " + " " + ":" +  " " + "00" + " " + "seconds" + " " + " " + "left");

    // create if statement when time hits 0. w/ a stop function with rules
    if(time === -1) {
        console.log("inside function if decrement = 0");
        alert("Game Over!");
        console.log("Should display 0 seconds left as well as an alert");

    }
};
  
//stop function
  stop (time);
  console.log("Try to find a solution to stop the timer once it reaches 0");

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
    { text: "Who was the first cornerback the Rams traded for in the 2018 off-season?",
    answer: "Marcus Peters",
    options:["A. Aqib Talib", " ", "B. Sam Shields", " ", "C. Marcus Peters", " ", "D. Kevin Peterson"]

    },
    {text: "How much cap-space did the Los Angeles Rams possess heading into the 2018 off-season?",
    answer: "42 million dollars",
    options:["A. 42 million dollars", " ", "B. 24 million dollars", " ", "C. 16 million dollars", " ", "D. 37 million dollars"]

},
    {text: "Via trade or free agnecy, Sammy Watkins, Alec Ogletree, Cody Davis, Robert Quinn, and ________ departed from the Los Angeles Rams",
    answer: "Trumaine Johnson",
    options:["A. Kayvon Webster", " ", "B. Nicholas Roby-Coleman", " ", "C. Dominique Hatfield", " ", "D. Tavon Austin"
    ] 

},

{
    text: "Essentially, after moves via trades and free agency, the Rams sent Robert Quinn and their 2018 6th round pick to the Miami Dolphins in exchange for Miami's 2018 4th round pick, 2018 6th round pick, and _________",
    answer: "Ndamukong Suh",
    options:["A. Tj McDonald", " ", "B. Jarvis Landry", " ", "C. Kiko Alonso", " ", "D. Ndamukong Suh"]

},

{
    text: "As of Tuesday, March 2018, the Rams have been linked to offering a deal that includes their 2018 first round pick (21st overall) to which team for their superstar wide receiver?",
    answer: "New York Giants - Odell Beckham Jr.",
    options:["A. Houston Texans - Deandre Hopkins", " ", "B. Atlanta Falcons - Julio Jones", " ", "C. Arizona Cardinals - Larry Fitzgerald", " ", "D. New York Giants - Odell Beckham Jr."]
}
];


// create a loop to puts the questions and answers in the respective divs
for (var i = 0; i < questions.length; i++) {
    $("#Question1").html(questions[0].text);
    console.log("question");
    
    $("#Options1").html(questions[0].options);
    console.log("options");  
};






