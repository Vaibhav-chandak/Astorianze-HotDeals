//jshint esversion:6

// Timer code
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(clock, endtime) {
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}
for (const timer of document.querySelectorAll('.timer')) {
    initializeClock(timer, timer.dataset.date);
}

// Animation 
function buttonAnimation() {
    $(".container1").hover(
        function () {
            $(this).find(".timer").fadeOut(200);
            setTimeout(() => {
                $(this).find(".buttons").css("display", "flex");
            }, 200);
        },
        function () {
            $(this).find(".timer").fadeIn(500);
            $(this).find(".buttons").css("display", "none");
        }
    );
}

//  For smaller screen devices
if (window.matchMedia('(max-width: 768px)').matches) {
    $(".btn-grad").removeClass("fa-3x");
} else {
    $(".btn-grad").addClass("fa-3x");
    buttonAnimation();
}