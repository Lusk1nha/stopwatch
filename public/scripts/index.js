const allNumbers = document.querySelectorAll('.numbers')

const startBtn = document.querySelector('#startBtn')
const stopBtn = document.querySelector('#stopBtn')
const resetBtn = document.querySelector('#resetBtn')

const hiddenHour = document.querySelector('#hours')

const hoursTime = allNumbers[0]
const minutesTime = allNumbers[1]
const secondsTime = allNumbers[2]
const milliseconds = allNumbers[3]

var myVar

var milUni = 0
var milTens = 0

var secondUni = 0
var secondTens = 0

var minutesUni = 0
var minutesTens = 0

var hoursUni = 0
var hoursTens = 0

function Start() {
    startBtn.disabled = true
    stopBtn.disabled = false
    resetBtn.disabled = false

    startBtn.innerHTML = "iniciar"

    myVar = setInterval(initiateStopwatch, 4)

}


function Stop() {
    clearInterval(myVar)
    startBtn.disabled = false
    stopBtn.disabled = true

    startBtn.innerHTML = "continuar"

    return console.log('stop')
}


function Reset() {
    clearInterval(myVar)

    minutesTime.innerHTML = "00"
    secondsTime.innerHTML = "00"
    milliseconds.innerHTML = "00"

    milUni = 0, milTens = 0
    secondUni = 0, secondTens = 0

    startBtn.disabled = false
    stopBtn.disabled = true
    resetBtn.disabled = true

    hiddenHour.hidden = true

    startBtn.innerHTML = "iniciar"

    return console.log('reset')
}


function initiateStopwatch() {
    millisecondsInitiate()

    function millisecondsInitiate() {
        milUni++
    
        if ( milUni == 10 ) {
            milTens++
            milUni = 0
    
        } else if ( milTens == 9 ) {
            milUni = 0
            milTens = 0
            
            secondsInitiate()
            
        }
        
        milliseconds.innerHTML = `${milTens}${milUni}`
        
    }
    
    function secondsInitiate() {
        secondUni++
    
        if ( secondTens == 5 && secondUni == 10 ) {
            secondUni = 0
            secondTens = 0
    
            minutesInitiate()
    
        } else if ( secondUni == 10 ) {
            secondUni = 0
            secondTens++
    
        }
        
        secondsTime.innerHTML = `${secondTens}${secondUni}`
    
    }
    
    function minutesInitiate() {
        minutesUni++
    
        if ( minutesTens == 5 && minutesUni == 10 ) {
            hiddenHour.hidden = false
    
            minutesUni = 9
            minutesTens = 5
    
            hoursInitiate()
    
        } else if ( minutesUni == 10 ) {
            minutesTens++
            minutesUni = 0
    
        }
    
        minutesTime.innerHTML = `${minutesTens}${minutesUni}`
    
    }
    
    function hoursInitiate() {
        hoursUni++
    
        if ( hoursUni == 10 ) {
            hoursTens++
            hoursUni = 0
    
        }
    
        hoursTime.innerHTML = `${hoursTens}${hoursUni}`
    
    }
}