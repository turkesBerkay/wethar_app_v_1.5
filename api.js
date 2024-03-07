searchBtn.addEventListener("click", () => {
    let text =searchBar.value;
    getWeather(text);
})


async function getWeather(place) {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${place}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'Rapid Api Key',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);

        if(!response.ok) {
            throw new Error("400 No Location Found");
        }

        const data = await response.json();
        weatherApp(data);
        console.log(data);
    } catch (err) {
        errorPopup(err);
        console.log(err);
    }

}

const errorPopup = (err) => {
    document.getElementById("errorAlert").innerHTML = err;
    document.querySelector(".error-popup").classList.add("active-error");
    console.log(err);
} 

document.getElementById("closeBtn").addEventListener("click", () => {
    document.querySelector(".error-popup").classList.remove("active-error");
});

