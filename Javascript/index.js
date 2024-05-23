function updateTime() {
    // Johannesburg
    let johannesburgElement = document.querySelector('#johannesburg');
    if (johannesburgElement) {
        let johannesburgDateElement = johannesburgElement.querySelector('.date');
        let johannesburgTimeElement = johannesburgElement.querySelector('.time');
        let johannesburgTime = moment().tz("Africa/Johannesburg");
        johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
        johannesburgTimeElement.innerHTML = johannesburgTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Stockholm
    let stockholmElement = document.querySelector('#stockholm');
    if (stockholmElement) {
        let stockholmDateElement = stockholmElement.querySelector('.date');
        let stockholmTimeElement = stockholmElement.querySelector('.time');
        let stockholmTime = moment().tz("Europe/Stockholm");
        stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
        stockholmTimeElement.innerHTML = stockholmTime.format("h:mm:ss [<small>]A[</small>]");
    }
    //Auckland
    let aucklandElement = document.querySelector('#auckland');
    if (aucklandElement) {
        let aucklandDateElement = aucklandElement.querySelector('.date');
        let aucklandTimeElement = aucklandElement.querySelector('.time');
        let aucklandTime = moment().tz("Pacific/Auckland");
        aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
        aucklandTimeElement.innerHTML = aucklandTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current"){cityTimeZone =moment.tz.guess()};
    let cityName = cityTimeZone.split("/")[1].replace("_", " ");
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector('#cities');
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
