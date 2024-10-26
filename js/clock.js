var owner = localStorage.getItem("owner");
var ownerBirthday = localStorage.getItem("owner-birthday-full");
var ownerMonth = localStorage.getItem("birth-month");
var ownerDay = localStorage.getItem("birth-day");
var favIcon = document.querySelector("link[rel~='icon']");
const dailyMessage = document.querySelector(".message-content");
const clockInfo = document.querySelectorAll(".clock-info");
const dayInfo = document.querySelector(".day-info");

const main = document.querySelector(".all");

const loadingScreen = document.querySelector(".loading");

const settingsButton = document.querySelector(".icon-setting");
const settingsContent = document.querySelector(".settings-detail");
settingsContent.style.display = "none";
const ownerInput = document.querySelector(".owner-input");
ownerInput.value = owner;
const ownerBirthdayInput = document.querySelector(".owner-birthdate");
ownerBirthdayInput.value = ownerBirthday;
const settingsForm = document.querySelector(".form-settings");
const saveButton = document.querySelector(".submit-button");

let secMS = 1000;
let minMS = 60000;
let hourMS = 3600000;

var messages = [
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night",
    "Happy Birthday",
    "Happy New Year"
]

var dayOfTheWeeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

clockLive();
getBackgroundImage();

function clockLive () {
    var rawTime = new Date();
    var month = rawTime.getMonth() +1;
    if (month < 10) {
        month = "0" + month
    }
    var day = rawTime.getDate();
    if (day < 10) {
        day = "0" + day
    }
    var hours = rawTime.getHours();
    if (hours < 10) {
        hours = "0" + hours
    }
    var minutes = rawTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var seconds = rawTime.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var dayWeek = rawTime.getDay();
    clockInfo[0].innerHTML = `${hours}<span class="dotdot">:</span>${minutes}`;
    dayInfo.innerHTML = dayOfTheWeeks[dayWeek];
    if (owner === null) {
        if (5 < hours && hours < 12) {
            dailyMessage.innerHTML = messages[0];
            document.title = messages[0];
        } else if (11 < hours && hours < 17) {
            dailyMessage.innerHTML = messages[1];
            document.title = messages[1];
        } else if (16 < hours && hours < 23) {
            dailyMessage.innerHTML = messages[2];
            document.title = messages[2];
        } else {
            dailyMessage.innerHTML = messages[3];
            document.title = messages[3];
        }

        if (day == "01" && month == "01") {
            dailyMessage.innerHTML = messages[5] + "! 🎉";
            document.title = messages[5];
        }
    } else if (owner) {
        if (5 < hours && hours < 12) {
            dailyMessage.innerHTML = messages[0] + ", " + owner + "!";
            document.title = messages[0];
        } else if (11 < hours && hours < 17) {
            dailyMessage.innerHTML = messages[1] + ", " + owner + "!";
            document.title = messages[1];
        } else if (16 < hours && hours < 23) {
            dailyMessage.innerHTML = messages[2] + ", " + owner + "!";
            document.title = messages[2];
        } else {
            dailyMessage.innerHTML = messages[3] + ", " + owner + "!";
            document.title = messages[3];
        }

        if (day == ownerDay && month == ownerMonth) {
            dailyMessage.innerHTML = messages[4] + ", " + owner + "! 🎂";
            document.title = messages[4];
        }

        if (day == "01" && month == "01") {
            dailyMessage.innerHTML = messages[5] + ", " + owner + "! 🥳🎉";
            document.title = messages[5];
        }
    } else {
        if (5 < hours && hours < 12) {
            dailyMessage.innerHTML = messages[0];
            document.title = messages[0];
        } else if (11 < hours && hours < 17) {
            dailyMessage.innerHTML = messages[1];
            document.title = messages[1];
        } else if (16 < hours && hours < 23) {
            dailyMessage.innerHTML = messages[2];
            document.title = messages[2];
        } else {
            dailyMessage.innerHTML = messages[3];
            document.title = messages[3];
        }

        if (day == "01" && month == "01") {
            dailyMessage.innerHTML = messages[5] + "! 🎉";
            document.title = messages[5];
        }
    }
    setTimeout(clockLive, secMS);
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getBackgroundImage () {
    var rawTime = new Date();
    var month = rawTime.getMonth() +1;
    if (month < 10) {
        month = "0" + month
    }
    var day = rawTime.getDate();
    if (day < 10) {
        day = "0" + day
    }
                if (owner === null) {
                if (day == "01" && month == "01") {
                    fetch("https://api.unsplash.com/collections/82898626/photos?client_id=Wjet-d3WNA9NEg2zezrefS6YuBMS3Dsn3xBDwQtxh2M")
                    .then(response => response.json())
                    .then(data => {
                    let backgroundUrl = data[0].urls.full;
                    document.body.style.backgroundImage = `url('` + backgroundUrl + `')`;
                    });
                } else {
                    fetch("https://api.unsplash.com/collections/73247100/photos?client_id=Wjet-d3WNA9NEg2zezrefS6YuBMS3Dsn3xBDwQtxh2M")
                    .then(response => response.json())
                    .then(data => {
                    let len = data.length;
                    let bgDice = getRandomNumberBetween(0,len);
                    let backgroundUrl = data[bgDice].urls.full;
                    document.body.style.backgroundImage = `url('` + backgroundUrl + `')`;
                    });
                }

            } else if (owner) {       
                if (day == ownerDay && month == ownerMonth) {
                    fetch("https://api.unsplash.com/collections/84877434/photos?client_id=Wjet-d3WNA9NEg2zezrefS6YuBMS3Dsn3xBDwQtxh2M")
                    .then(response => response.json())
                    .then(data => {
                    let backgroundUrl = data[0].urls.full;
                    document.body.style.backgroundImage = `url('` + backgroundUrl + `')`;
                    });
                }else if (day == "01" && month == "01") {
                    fetch("https://api.unsplash.com/collections/82898626/photos?client_id=Wjet-d3WNA9NEg2zezrefS6YuBMS3Dsn3xBDwQtxh2M")
                    .then(response => response.json())
                    .then(data => {
                    let backgroundUrl = data[0].urls.full;
                    document.body.style.backgroundImage = `url('` + backgroundUrl + `')`;
                    });
                }else {
                    fetch("https://api.unsplash.com/collections/73247100/photos?client_id=Wjet-d3WNA9NEg2zezrefS6YuBMS3Dsn3xBDwQtxh2M")
                    .then(response => response.json())
                    .then(data => {
                    let len = data.length;
                    let bgDice = getRandomNumberBetween(0,len);
                    let backgroundUrl = data[bgDice].urls.full;
                    document.body.style.backgroundImage = `url('` + backgroundUrl + `')`;
                    });
                }
            } else {
                if (day == "01" && month == "01") {
                    fetch("https://api.unsplash.com/collections/82898626/photos?client_id=Wjet-d3WNA9NEg2zezrefS6YuBMS3Dsn3xBDwQtxh2M")
                    .then(response => response.json())
                    .then(data => {
                    let backgroundUrl = data[0].urls.full;
                    document.body.style.backgroundImage = `url('` + backgroundUrl + `')`;
                    });
                }else {
                    fetch("https://api.unsplash.com/collections/73247100/photos?client_id=Wjet-d3WNA9NEg2zezrefS6YuBMS3Dsn3xBDwQtxh2M")
                    .then(response => response.json())
                    .then(data => {
                    let len = data.length;
                    let bgDice = getRandomNumberBetween(0,len);
                    let backgroundUrl = data[bgDice].urls.full;
                    document.body.style.backgroundImage = `url('` + backgroundUrl + `')`;
                    });
                }
            }
        };

main.addEventListener("click", function () {
    settingsContent.style.display = "none";
});

function toggle(clicked_button) {
    var clicked = document.querySelector(clicked_button);
    if (clicked.style.display === "none") {
        clicked.style.display = "inline";
    } else {
        clicked.style.display = "none";
    }
}

settingsButton.addEventListener("click", function() {
});

saveButton.addEventListener("click", function () {
    var ownerName = document.querySelector(".owner-input").value;
    var ownerBirthDate = document.querySelector(".owner-birthdate").value;
    if (ownerName === null || ownerName === "" || ownerBirthDate === null || ownerBirthDate === "") {
        // do nothing
    } else {
        event.preventDefault();
        var ownerBirthMonth = ownerBirthDate[5] + ownerBirthDate[6]
        var ownerBirthDay = ownerBirthDate[8] + ownerBirthDate[9]
        localStorage.setItem("owner", ownerName);
        localStorage.setItem("owner-birthday-full", ownerBirthDate);
        localStorage.setItem("birth-month", ownerBirthMonth);
        localStorage.setItem("birth-day", ownerBirthDay);
        settingsForm.reset();
        location.reload();
    }
});