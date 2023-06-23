//initalizing an array of colors
var buttonCol = ["red", "blue", "green", "yellow"];

//initializing an empty array where the new color patter generated randomly be stored
var emp = [];

//initializing an empty array where the user pressed color will be stored
var user = [];

var level = 0;

//keep an check whether the game has started or not
var started = false;


//changing the h1 to level 1 on starting of the game
$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level" + level);
        nextSeq();
        started = true;
    }
});


$(".btn").click(function () {
    //gives the id of the button pressed
    var userChosenColour = $(this).attr("id");
    user.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAns(user.length - 1);
    console.log(user);
});

function checkAns(currLevel) {
    //if the user array is equal toh the randomized array
    if (emp[currLevel] == user[currLevel]) {
        if (user.length == emp.length) {
            setTimeout(function () {
                nextSeq();
            }, 1000);
        }
    }
    else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press any key to Restart");

        startOver();
    }
}

function nextSeq() {
    user = [];
    level++;
    $("#level-title").text("Level" + level);

    var rand = Math.floor(Math.random() * 4);
    var randomCol = buttonCol[rand];
    emp.push(randomCol);

    // $('#' + randomCol).click(function() {
    //     $('.' + randomCol).fadeOut(100).fadeIn(100);
    // });
    $("#" + randomCol).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomCol);
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(currcolor) {
    $("#" + currcolor).addClass("pressed");
    setTimeout(function () {
        $("#" + currcolor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    emp = [];
    started = false;
}


// // $('#green').click(function(){
// //     $('.green').fadeOut(100).fadeIn(100);
// });

// $('#red').click(function(){
//     $('.red').fadeOut(100).fadeIn(100);
// });

// $('#blue').click(function(){
//     $('.blue').fadeOut(100).fadeIn(100);
// });

// $('#yellow').click(function(){
//     $('.yellow').fadeOut(100).fadeIn(100);
// });



