const tomatoTimer = document.querySelector('#tomato-slice');

const tomatoBackground = document.querySelector('#t-bg');
const tomatoBorder = document.querySelector('#t-border');
const tomatoTriangles = document.querySelector('#t-slices');
const tomatoSeeds = document.querySelector('#t-seeds');

const sessionPlus = document.querySelector('#session-plus');
const sessionMinus = document.querySelector('#session-minus');
const sessionControl = document.querySelector('#session-control');

const breakPlus = document.querySelector('#break-plus');
const breakMinus = document.querySelector('#break-minus');
const breakControl = document.querySelector('#break-control');

const stopButton = document.querySelector('#stop-button');

const title = document.querySelector('.title');

const alarmBeep = new Audio('audio/0758.ogg');


//CONTROLS FOR SESSION AND BREAK TIMERS

sessionPlus.addEventListener('click', (event) => {
    if (parseInt(sessionControl.innerHTML) >= 100) {
        sessionControl.innerHTML += '';
    } else {
        sessionControl.innerHTML = parseInt(sessionControl.innerHTML) + 1 ;
    }
})

sessionMinus.addEventListener('click', (event) => {
    if (parseInt(sessionControl.innerHTML) <= 10) {
        sessionControl.innerHTML += '';
    } else {
        sessionControl.innerHTML = parseInt(sessionControl.innerHTML) - 1 ;
    }
})

breakPlus.addEventListener('click', (event) => {
    if (parseInt(breakControl.innerHTML) >= 60) {
        breakControl.innerHTML += '';
    } else {
        breakControl.innerHTML = parseInt(breakControl.innerHTML) + 1 ;
    }
})

breakMinus.addEventListener('click', (event) => {
    if (parseInt(breakControl.innerHTML) <= 5) {
        breakControl.innerHTML += '';
    } else {
        breakControl.innerHTML = parseInt(breakControl.innerHTML) - 1 ;
    }
})


// TIMER ANIMATION

let testBoolean = true;

tomatoTimer.addEventListener('click', (event) => {

    if (testBoolean) {
        testBoolean = false;
    let sessionTime = parseInt(sessionControl.innerHTML) * 60000;
    let breakTime = parseInt(breakControl.innerHTML) * 60000;
    
    let test1 = tomatoTimer.animate([
        { transform: 'rotate(137deg)' },
        { transform: 'rotate(496deg)' }],
        sessionTime );

    test1.onfinish = () => {
        alarmBeep.play();
        test2 = tomatoTimer.animate([
            {transform: 'rotate(137deg)'},
            {transform: 'rotate(496deg)'}
        ], breakTime );

        test3 = tomatoBackground.animate([
            {fill: '#D53349'},
            {fill: '#AAA', offset: 0.1},
            {fill: '#AAA', offset: 0.95},
            {fill: '#D53349'}
        ], breakTime );

        test4 = tomatoBorder.animate([
            {fill: '#53180F'},
            {fill: '#5A5760', offset: 0.1},
            {fill: '#5A5760', offset: 0.95},
            {fill: '#53180F'}
        ], breakTime );

        test5 = tomatoTriangles.animate([
            {fill: '#53180F'},
            {fill: '#333', offset: 0.1},
            {fill: '#333', offset: 0.95},
            {fill: '#53180F'}
        ], breakTime );

        test6 = tomatoSeeds.animate([
            {fill: '#DEB841'},
            {fill: '#FFF', offset: 0.1},
            {fill: '#FFF', offset: 0.95},
            {fill: '#DEB841'}
        ], breakTime );

        stopButton.addEventListener('click', (event) => {
            test2.cancel();
            test3.cancel();
            test4.cancel();
            test5.cancel();
            test6.cancel();
            testBoolean = true;
        })

        test2.onfinish = () => {
            alarmBeep.play();
            testBoolean = true;
        }
        
    }

        stopButton.addEventListener('click', (event) => {
            test1.cancel();
            testBoolean = true;
        })
    
    }
});
