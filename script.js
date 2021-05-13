

$('.container-fluid').hide();
$('.container-fluid2').hide();
$('.container-fluid3').hide();
$('.container-fluid4').hide();
$('form').hide();
$('span').hide();



$('button').click(function() {
    $('button').hide();
    $('h3').show();
    $('span').show();
    $('.container-fluid').show();
    $('.container-fluid2').hide();
    $('.container-fluid3').hide();
    $('.container-fluid4').hide();
});

$('#quiz').click(function() {
    console.log("clicked")
    $('.container-fluid').hide();
    $('.container-fluid2').show();
});

$('#quiz2').click(function() {
    console.log("clicked")
    $('.container-fluid2').hide();
    $('.container-fluid3').show();
});

$('#quiz3').click(function() {
    console.log("clicked")
    $('.container-fluid3').hide();
    $('.container-fluid4').show();
});

$('#quiz4').click(function() {
    console.log("clicked")
    $('.container-fluid4').hide();
    $('form').show();
});

function c(){
    var n=$('.c').attr('id');
    var c=n;
    $('.c').text(c);
    setInterval(function(){
        c--;
        if(c>=0){
            $('.c').text(c);
        }
        if(c==0){
            $('.c').text(n);
        }
    },1000);
}

// Start
c();

// Loop


