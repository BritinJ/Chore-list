function chooseDay(eve, day) {
    var i, choreContent, tab;

    // hide all the tabs
    choreContent = document.getElementsByClassName("day-info");
    for (i = 0; i < choreContent.length; i++) {
        choreContent[i].style.display = "none";
    }

    // make all the tabs inactive
    tab = document.getElementsByClassName("tabd");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace("active", "");
    }

    // show current tab and ads back the "active" attribute
    document.getElementById(day).style.display = "block";
    eve.currentTarget.className += " active";
}

function chooseWeek(eve, week) {
    var i, choreContent, tab;

    // hide all the tabs
    choreContent = document.getElementsByClassName("week-info");
    for (i = 0; i < choreContent.length; i++) {
        choreContent[i].style.display = "none";
    }

    // make all the tabs inactive
    tab = document.getElementsByClassName("tabw");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace("active", "");
    }

    // show current tab and ads back the "active" attribute
    document.getElementById(week).style.display = "block";
    eve.currentTarget.className += " active";
}

// this waits for the page to load and clicks today as the default tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("init-day").click();
    document.getElementById("init-week").click();
});