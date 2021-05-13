

$('.container-fluid').hide();
$('.container-fluid2').hide();
$('.container-fluid3').hide();
$('.container-fluid4').hide();
$('.time-left').hide();

function countDown() {
    setInterval(function({
    if(timeLeft <= 0) {
        clearInterval
    }
    }))
}


$('button').click(function() {
    $('button').hide();
    $('.time-left').show();
    $('.container-fluid').show();
    $('.container-fluid2').hide();
    $('.container-fluid3').hide();
    $('.container-fluid4').hide();  
});

$('#quiz').click(function() {
    console.log("clciked")
    $('.container-fluid').hide();
    $('.container-fluid2').show();
});

$('#quiz2').click(function() {
    console.log("clciked")
    $('.container-fluid2').hide();
    $('.container-fluid3').show();
});

$('#quiz3').click(function() {
    console.log("clciked")
    $('.container-fluid3').hide();
    $('.container-fluid4').show();
});

$('#quiz4').click(function() {
    console.log("clciked")
    $('.container-fluid4').hide();
});

