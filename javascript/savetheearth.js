"use strict";


//Set the date displayed in the calendar
var countdownDate = new Date("July 23, 2029 00:00:00");


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countdownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = "<mark>" + days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds " + "</mark>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//Set the date displayed in the calendar
var thisDay = new Date("July 23, 2029 00:00:00");

//Write the calendar to the element with the id "calendar" 
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//Function to generate the calendar table
function createCalendar (calDate) {
   var calendarHTML = "<p id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += "</p>";
   return calendarHTML;
}

//function to write the calendar caption
function calCaption(calDate) {
   //monthname array contains the list of month names
   var monthName = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

   //Determine the current month
   var thisMonth = calDate.getMonth();

   //Determine the current year
   var thisYear = calDate.getFullYear();

   //Write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

const quizData = [
  {
      question: "How can you help save the earth?",
      options: ["3 Rs", "Minimise Plastic Use", "Conserve Energy", "All of the above"],
      correctAnswer: 3
  },
  {
    question: "Making the earth a cleaer place is a...",
    options: ["A solo effort","A team effort"],
    correctAnswer: 1
  }
  // Add more quiz questions and answers here
];


const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit-btn");

function displayQuiz() {
    let output = "";
    quizData.forEach((question, index) => {
        output += `
            <div class="mb-3">
                <p><strong>${index + 1}. ${question.question}</strong></p>
                ${question.options
                    .map(
                        (option, optionIndex) => `
                        <div class="form-check">
                            <input type="radio" class="form-check-input" name="q${index}" value="${optionIndex}" id="q${index}-${optionIndex}">
                            <label class="form-check-label" for="q${index}-${optionIndex}">${option}</label>
                        </div>
                    `
                    )
                    .join("")}
            </div>
        `;
    });
    quizContainer.innerHTML = output;
}
// quiz.js (continued)

submitButton.addEventListener("click", showResult);

function showResult() {
    const answers = [];
    quizData.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            answers.push(Number(selectedOption.value));
        } 
    });

    const score = calculateScore(answers);
    resultContainer.textContent = `You scored ${score}/${quizData.length}`;
    resultContainer.style.display = "block";
}

function calculateScore(answers) {
    let score = 0;
    answers.forEach((answer, index) => {
        if (answer == quizData[index].correctAnswer) {
            score+=1;
        }
    });
    return score;
}

displayQuiz();
