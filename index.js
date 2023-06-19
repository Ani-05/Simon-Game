var buttonCol = ["red", "blue", "green", "yellow"];

var emp = [];

var user = [];

$(".btn").onclick(function(){
    var userChosenColour = $(this).attr("id");
    user.push(userChosenColour);
});

function nextSeq() {
    var rand = Math.floor(Math.random() * 4);
    var randomCol = buttonCol[rand];
    emp.push(randomCol);

    $('#'+randomCol).onclick(function () {
        $('.'+randomCol).fadeOut(100).fadeIn(100);
    });

    var audio =new Audio( "sounds/" +randomCol+ ".mp3" );
    audio.play();
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



