var guressMin = 20 ;
var guessMax = 121 ;
var buttonNumMin = 1 ;
var buttonNumMax = 13 ;

var secret ;

var btn1Val ;
var btn2Vval ;
var btn3Val ;
var btn4Val ;

//window.onload = playGame ;
window.onload = init ;

function init()
{
    secret = Math.floor(Math.random() * guessMax) + guressMin;
    btn1Val = Math.floor(Math.random() * buttonNumMax) + buttonNumMin ;
    btn2Val = Math.floor(Math.random() * buttonNumMax) + buttonNumMin ;
    btn3Val = Math.floor(Math.random() * buttonNumMax) + buttonNumMin ;
    btn4Val = Math.floor(Math.random() * buttonNumMax) + buttonNumMin ;
    sum = 0 ;
    msg = '' ;
}

init() ;

var val ;
var btn ;
var sum ;
var msg ;
var totalWin = 0 ;
var totalLose = 0 ;

$('.redBtn').click(function()
{
    sum += btn1Val ;
    playGame() ;
}) ;
$('.blueBtn').click(function()
{
    sum += btn2Val ;
    playGame() ;
}) ;
$('.yellowBtn').click(function()
{
    sum += btn3Val ;
    playGame() ;
}) ;
$('.greenBtn').click(function()
{
    sum += btn4Val ;
    playGame() ;
}) ;

function playGame()
{
    if (sum == secret)
    {
        msg = 'You Won!'
        totalWin++ ;
        $('#sp1').text(msg) ;
        $('#sp2').text('Wins:' + totalWin) ;
    }
    else if (sum > secret)
    {
        msg = 'You lose!'
        totalLose++ ;
        $('#sp1').text(msg) ;
        $('#sp2').text('Loses:' + totalLose) ;
    }
    else
    {
        $('#sp').text(sum) ;
    }
}
