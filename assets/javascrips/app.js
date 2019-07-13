var total = 5
var timer = {
    time: 60,

    run: function () {
        counter = setInterval(timer.decrement, 1000);
    },

    

    decrement: function () {
        if (timer.time > 0 && total > 0) {
            timer.time--;
        }
        $('#timeRemaining').html("Time Remaining: " + timer.time);
        if (timer.time === 0) {
            $("#theQuestion").html("Time is up!");
            $("#container4").html("You Lose!")




        };
    },
}



var Questions = {
    Q1: {
        trivia: "What was the original name of the show?",
        a: "Insomnia Cafe",
        b: "Central Perk",
        c: "Life with Friends",
        d: "New York City"
    },
    Q2: {
        trivia: "What was Monica's apartment number?",
        a: "40",
        b: "36",
        c: "15",
        d: "20"
    },
    Q3: {
        trivia: "Which pairing never kissed on the show?",
        a: "Rachel and Ross",
        b: "Monica and Phoebe",
        c: "Pheobe and Joey",
        d: "Chandler and Monica"
    },
    Q4: {
        trivia: "What did Joey name his barcalounger?",
        a: "Rosa",
        b: "Rosy",
        c: "Rossetron",
        d: "Rosita"
    },
    Q5: {
        trivia: "Who pees on Monica's leg when she gets stung by a jellyfish?",
        a: "Monica",
        b: "Joey",
        c: "Chandler",
        d: "Phoebe"
    }

}

score = 0

function Question0() {
    
    $("#bttn").on("click", function () {
        
        timer.run()
        $("#bttn").hide();
        // $("#timeRemaining").html("Time Remaining: " + timer.time)
        $("#theQuestion").html(Questions.Q1.trivia);
        $("#answer1").html(Questions.Q1.a);
        $("#answer2").html(Questions.Q1.b);
        $("#answer3").html(Questions.Q1.c);
        $("#answer4").html(Questions.Q1.d);


        $("#answer1").click(function () {
            
            $("#theQuestion").html("You Are Correct");
            
            setTimeout(changeQuestion1, 5000);
        })
        $("#answer2").click(function () {
            
            $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q1.a);
 
            setTimeout(changeQuestion1, 5000);

        })
        $("#answer3").click(function () {
           
            $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q1.a);       
            setTimeout(changeQuestion1, 5000);
        })
        $("#answer4").click(function () {
            $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q1.a);           
            setTimeout(changeQuestion1, 5000);
        })
        



    })
    
}
Question0();
function changeQuestion1() {
    $("#theQuestion").html(Questions.Q2.trivia);
    $("#answer1").html(Questions.Q2.a);
    $("#answer2").html(Questions.Q2.b);
    $("#answer3").html(Questions.Q2.c);
    $("#answer4").html(Questions.Q2.d);


    $("#answer1").click(function () {
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q2.d);     
        setTimeout(changeQuestion2, 5000);
    })
    $("#answer2").click(function () {
        
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q2.d);       
        setTimeout(changeQuestion2, 5000);

    })
    $("#answer3").click(function () {
        
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q2.d);
        setTimeout(changeQuestion2, 5000);
    })
    $("#answer4").click(function () {
        
        $("#theQuestion").html("You Are Correct");

        setTimeout(changeQuestion2, 5000);
        
    })
    
    console.log(total)
    
}
function changeQuestion2() {
    $("#theQuestion").html(Questions.Q3.trivia);
    $("#answer1").html(Questions.Q3.a);
    $("#answer2").html(Questions.Q3.b);
    $("#answer3").html(Questions.Q3.c);
    $("#answer4").html(Questions.Q3.d);


    $("#answer1").click(function () {

        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q3.b);
        setTimeout(changeQuestion3, 5000);
    })
    $("#answer2").click(function () {
       
        $("#theQuestion").html("You Are Correct");
 
        setTimeout(changeQuestion3, 5000);

    })
    $("#answer3").click(function () {
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q3.b);      
        setTimeout(changeQuestion3, 5000);
    })
    $("#answer4").click(function () {
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q3.b);       
        setTimeout(changeQuestion3, 5000);
    })
    
}
function changeQuestion3() {
    $("#theQuestion").html(Questions.Q4.trivia);
    $("#answer1").html(Questions.Q4.a);
    $("#answer2").html(Questions.Q4.b);
    $("#answer3").html(Questions.Q4.c);
    $("#answer4").html(Questions.Q4.d);


    $("#answer1").click(function () {

        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q4.d);   
        setTimeout(changeQuestion4, 5000);
    })
    $("#answer2").click(function () {
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q4.d);         
        setTimeout(changeQuestion4, 5000);

    })
    $("#answer3").click(function () {
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q4.d);         
        setTimeout(changeQuestion4, 5000);
    })
    $("#answer4").click(function () {
        
        $("#theQuestion").html("You Are Correct");
        
        setTimeout(changeQuestion4, 5000);
    })
    
}
function changeQuestion4() {
    $("#theQuestion").html(Questions.Q5.trivia);
    $("#answer1").html(Questions.Q5.a);
    $("#answer2").html(Questions.Q5.b);
    $("#answer3").html(Questions.Q5.c);
    $("#answer4").html(Questions.Q5.d);


    $("#answer1").click(function () {

        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q5.c); 
        setTimeout(finale, 5000);

    })
    $("#answer2").click(function () {
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q5.c); 
        setTimeout(finale, 5000);


    })
    $("#answer3").click(function () {
        
        $("#theQuestion").html("You Are Correct");
        setTimeout(finale, 5000);

    })
    $("#answer4").click(function () {
        $("#theQuestion").html("You Are Incorrect. Correct answer was: " + Questions.Q5.c); 
        setTimeout(finale, 5000);
    })
    total--
}
function finale() {
    $("#theQuestion").html("Thanks for playing!");
    $("#answer1").html("See you next time :)");
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
}