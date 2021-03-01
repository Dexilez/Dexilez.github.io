var owner = localStorage.getItem("owner");
var ownerBirthday = localStorage.getItem("owner-birthday-full");
var ownerMonth = localStorage.getItem("birth-month");
var ownerDay = localStorage.getItem("birth-day");
var favIcon = document.querySelector("link[rel~='icon']");
const dailyMessage = document.querySelector(".message-content");
const clockInfo = document.querySelectorAll(".clock-info");
const dayInfo = document.querySelector(".day-info");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const tempContent = document.querySelector(".textTemp");
const cityContent = document.querySelector(".city");
const weatherIcon = document.querySelector(".iconW");
const weather = document.querySelector(".weather");
const weatherDetail = document.querySelector(".weatherDetail");
weatherDetail.style.display = "none";
const main = document.querySelector(".all");
const tempDetailTemp = document.querySelector(".temperatureInfo");
const weatherDetailIcon = document.querySelector(".weatherIcon");
const weatherDescription = document.querySelector(".weatherDesc");
const feelsWind = document.querySelectorAll(".textDegree");
const loadingScreen = document.querySelector(".loading");
const toDoButton = document.querySelector(".todo-button");
const toDoContent = document.querySelector(".todo-list-detail");
toDoContent.style.display = "none";
const settingsButton = document.querySelector(".icon-setting");
const settingsContent = document.querySelector(".settings-detail");
settingsContent.style.display = "none";
const ownerInput = document.querySelector(".owner-input");
ownerInput.value = owner;
const ownerBirthdayInput = document.querySelector(".owner-birthdate");
ownerBirthdayInput.value = ownerBirthday;
const settingsForm = document.querySelector(".form-settings");
const saveButton = document.querySelector(".submit-button");
const cryptoButton = document.querySelector(".crypto-currency");
const cryptoContent = document.querySelector(".crypto-currency-detail");
cryptoContent.style.display = "none";
let secMS = 1000;
let minMS = 60000;
let hourMS = 3600000;

var messages = [
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night",
    "🎂 Happy Birthday",
    "🥳 Happy New Year"
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

var backgroundImages = [
    "https://source.unsplash.com/user/dexilez/likes/1920x1080",
    "https://source.unsplash.com/collection/84877434/1920x1080",
    "https://source.unsplash.com/collection/82898626/1920x1080"
]

clockLive();
todayQuote();
getWeather();
getCryptoCurrency();

function clockLive () {
    var rawTime = new Date();
    var year = rawTime.getFullYear();
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
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[0];
        } else if (11 < hours && hours < 17) {
            dailyMessage.innerHTML = messages[1];
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[1];
        } else if (16 < hours && hours < 23) {
            dailyMessage.innerHTML = messages[2];
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[2];
        } else {
            dailyMessage.innerHTML = messages[3];
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[3];
        }

        if (day == "01" && month == "01") {
            dailyMessage.innerHTML = messages[5] + "! 🎉";
            document.body.style.backgroundImage = `url('${backgroundImages[2]}')`;
            document.title = messages[5];
        }
    } else if (owner) {
        if (5 < hours && hours < 12) {
            dailyMessage.innerHTML = messages[0] + ", " + owner + "!";
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[0];
        } else if (11 < hours && hours < 17) {
            dailyMessage.innerHTML = messages[1] + ", " + owner + "!";
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[1];
        } else if (16 < hours && hours < 23) {
            dailyMessage.innerHTML = messages[2] + ", " + owner + "!";
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[2];
        } else {
            dailyMessage.innerHTML = messages[3] + ", " + owner + "!";
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[3];
        }

        if (day == ownerDay && month == ownerMonth) {
            dailyMessage.innerHTML = messages[4] + ", " + owner + "! 🎂";
            document.body.style.backgroundImage = `url('${backgroundImages[1]}')`;
            document.title = messages[4];
        }

        if (day == "01" && month == "01") {
            dailyMessage.innerHTML = messages[5] + ", " + owner + "! 🎉";
            document.body.style.backgroundImage = `url('${backgroundImages[2]}')`;
            document.title = messages[5];
        }
    } else {
        if (5 < hours && hours < 12) {
            dailyMessage.innerHTML = messages[0];
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[0];
        } else if (11 < hours && hours < 17) {
            dailyMessage.innerHTML = messages[1];
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[1];
        } else if (16 < hours && hours < 23) {
            dailyMessage.innerHTML = messages[2];
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[2];
        } else {
            dailyMessage.innerHTML = messages[3];
            document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;
            document.title = messages[3];
        }

        if (day == "01" && month == "01") {
            dailyMessage.innerHTML = messages[5] + "! 🎉";
            document.body.style.backgroundImage = `url('${backgroundImages[2]}')`;
            document.title = messages[5];
        }
    }

    setTimeout(clockLive, secMS);

}

function todayQuote () {
    var todayDate = new Date();
    var month = todayDate.getMonth() + 1;
    var day = todayDate.getDate();
    var dayOfWeek = todayDate.getDay();
    var todayNumber = dayOfWeek + day + month;
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data =>
        {
            if (data[todayNumber].author == null) {
                quote.innerText = `"${data[todayNumber].text}"`;
            } else {
                quote.innerText = `"${data[todayNumber].text}"`;
                author.innerText = data[todayNumber].author;
            }
        });
}

function getWeather () {
    fetch("https://aerisweather1.p.rapidapi.com/observations/istanbul,tr", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "66e53af876msh61eab4cb0e61c98p1a025djsnec46bfa5786d",
            "x-rapidapi-host": "aerisweather1.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        var temp = data.response.ob.tempC;
        if (temp >= 10) {
            var tempString = temp.toString().substr(0,2);
        } else {
            var tempString = temp.toString().substr(0,1);
        }
        var speed = data.response.ob.windKPH;
        if (speed >= 10) {
            var speedString = speed.toString().substr(0,2);
        } else {
            var speedString = speed.toString().substr(0,1);
        }
        var feelsLike = data.response.ob.feelslikeC;
        if (feelsLike >= 10) {
            var feelsString = feelsLike.toString().substr(0,2);
        } else {
            var feelsString = feelsLike.toString().substr(0,1);
        }
        tempContent.innerHTML = `${tempString}&#176;`;
        cityContent.innerHTML = "Istanbul";
        weatherIcon.innerHTML = `<img class="imgIcon" title="${data.response.ob.weatherPrimary}" src="icons/${data.response.ob.icon}" />`;
        tempDetailTemp.innerHTML = `${tempString}&#176;`;
        weatherDetailIcon.innerHTML = `<img width="80px" title="${data.response.ob.weatherPrimary}" src="icons/${data.response.ob.icon}"/>`;
        weatherDescription.innerHTML = `${data.response.ob.weatherPrimary}`;
        feelsWind[0].innerHTML = `${feelsString}&#176;`;
        feelsWind[1].innerHTML = `${speedString} kph`;
    });

    setTimeout(getWeather, hourMS);
}

function getCryptoCurrency () {
    fetch("https://min-api.cryptocompare.com/data/pricemulti?api_key=f888ddbbf6c8292e789ac143b1db12a221b9a14532aba7349613ce8711b0c1aa&fsyms=BTC,EOS,ETH,LINK,XLM,XRP,XTZ,NEO&tsyms=USD,TRY")
    .then(response => response.json())
    .then(data =>
        { 
            var bitcoinPriceUSD = data.BTC.USD;
            var bitcoinPriceTRY = data.BTC.TRY;
            var EOSPriceUSD = data.EOS.USD;
            var EOSPriceTRY = data.EOS.TRY;
            var ETHPriceUSD = data.ETH.USD;
            var ETHPriceTRY = data.ETH.TRY;
            var LINKPriceUSD = data.LINK.USD;
            var LINKPriceTRY = data.LINK.TRY;
            var XLMPriceUSD = data.XLM.USD;
            var XLMPriceTRY = data.XLM.TRY;
            var XRPPriceUSD = data.XRP.USD;
            var XRPPriceTRY = data.XRP.TRY;
            var XTZPriceUSD = data.XTZ.USD;
            var XTZPriceTRY = data.XTZ.TRY;
            var NEOPriceUSD = data.NEO.USD;
            var NEOPriceTRY = data.NEO.TRY;

            cryptoContent.innerHTML = "";

            cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">Bitcoin</span></div><div class="crypto-price"><span id="crypto-price">$ ${bitcoinPriceUSD}</span></div></div>`;
            cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">EOS</span></div><div class="crypto-price"><span id="crypto-price">$ ${EOSPriceUSD}</span></div></div>`;
            cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">Etherium</span></div><div class="crypto-price"><span id="crypto-price">$ ${ETHPriceUSD}</span></div></div>`;
            // cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">LINK</span></div><div class="crypto-price"><span id="crypto-price">$ ${LINKPriceUSD}</span></div></div>`;
            cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">NEO</span></div><div class="crypto-price"><span id="crypto-price">$ ${NEOPriceUSD}</span></div></div>`;
            cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">Stellar</span></div><div class="crypto-price"><span id="crypto-price">$ ${XLMPriceUSD}</span></div></div>`;
            cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">Ripple</span></div><div class="crypto-price"><span id="crypto-price">$ ${XRPPriceUSD}</span></div></div>`;
            // cryptoContent.innerHTML += `<div class="crypto-item"><div class="crypto-name"><span id="crypto-name">XTZ</span></div><div class="crypto-price"><span id="crypto-price">$ ${XTZPriceUSD}</span></div></div>`;
        });

        setTimeout(getCryptoCurrency, secMS)
}

main.addEventListener("click", function () {
    weatherDetail.style.display = "none";
    toDoContent.style.display = "none";
    settingsContent.style.display = "none";
    cryptoContent.style.display = "none";
});

function toggle(clicked_button) {
    var clicked = document.querySelector(clicked_button);
    if (clicked.style.display === "none") {
        clicked.style.display = "inline";
    } else {
        clicked.style.display = "none";
    }
}

weather.addEventListener("click", function() {
    toDoContent.style.display = "none";
    settingsContent.style.display = "none";
    cryptoContent.style.display = "none";
});

toDoButton.addEventListener("click", function() {
    weatherDetail.style.display = "none";
    settingsContent.style.display = "none";
    cryptoContent.style.display = "none";
});

settingsButton.addEventListener("click", function() {
    weatherDetail.style.display = "none";
    toDoContent.style.display = "none";
    cryptoContent.style.display = "none";
});

cryptoButton.addEventListener("click", function() {
    weatherDetail.style.display = "none";
    toDoContent.style.display = "none";
    settingsContent.style.display = "none";
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