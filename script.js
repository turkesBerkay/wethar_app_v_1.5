const currentIcon = document.getElementById("currentWeatherIcon");
const currentTemperature = document.getElementById("currentTemperature");
const currentWind = document.getElementById("currentWind");
const currentClouds = document.getElementById("currentClouds");
const cityInfo = document.getElementById("cityInfo");
const lastUpdate = document.getElementById("lastUpdate");
const currentHum = document.getElementById("currentHumidity");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");
const loca = document.getElementById("myLocation");
const currentLoca = document.querySelector(".location-txt");
const rainChance = document.getElementById("rainChance");
const snowChance = document.getElementById("snowChance");
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");
const maxWind = document.getElementById("maxWind");
const uv = document.getElementById("uv");
const hIconOne = document.getElementById("hourlyIconOne");
const hTempOne = document.getElementById("hourlyTempOne");
const hRainOne = document.getElementById("hourlyRainOne");
const hIconTwo = document.getElementById("hourlyIconTwo");
const hTempTwo = document.getElementById("hourlyTempTwo");
const hRainTwo = document.getElementById("hourlyRainTwo");
const hIconThr = document.getElementById("hourlyIconThr");
const hTempThr = document.getElementById("hourlyTempThr");
const hRainThr = document.getElementById("hourlyRainThr");
const hIconFour = document.getElementById("hourlyIconFour");
const hTempFour = document.getElementById("hourlyTempFour");
const hRainFour = document.getElementById("hourlyRainFour");
const hIconFive = document.getElementById("hourlyIconFive");
const hTempFive = document.getElementById("hourlyTempFive");
const hRainFive = document.getElementById("hourlyRainFive");
const hIconSix = document.getElementById("hourlyIconSix");
const hTempSix = document.getElementById("hourlyTempSix");
const hRainSix = document.getElementById("hourlyRainSix");
const hIconSeven = document.getElementById("hourlyIconSeven");
const hTempSeven = document.getElementById("hourlyTempSeven");
const hRainSeven = document.getElementById("hourlyRainSeven");
const hIconEight = document.getElementById("hourlyIconEight");
const hTempEight = document.getElementById("hourlyTempEight");
const hRainEight = document.getElementById("hourlyRainEight");
const hIconNine = document.getElementById("hourlyIconNine");
const hTempNine = document.getElementById("hourlyTempNine");
const hRainNine = document.getElementById("hourlyRainNine");
const hIconTen = document.getElementById("hourlyIconTen");
const hTempTen = document.getElementById("hourlyTempTen");
const hRainTen = document.getElementById("hourlyRainTen");
const hIconEleven = document.getElementById("hourlyIconEleven");
const hTempEleven = document.getElementById("hourlyTempEleven");
const hRainEleven = document.getElementById("hourlyRainEleven");
const hIconTwe = document.getElementById("hourlyIconTwe");
const hTempTwe = document.getElementById("hourlyTempTwe");
const hRainTwe = document.getElementById("hourlyRainTwe");
const hIconThrt = document.getElementById("hourlyIconThrt");
const hTempThrt = document.getElementById("hourlyTempThrt");
const hRainThrt = document.getElementById("hourlyRainThrt");
const hIconFourt = document.getElementById("hourlyIconFourt");
const hTempFourt = document.getElementById("hourlyTempFourt");
const hRainFourt = document.getElementById("hourlyRainFourt");
const hIconFift = document.getElementById("hourlyIconFift");
const hTempFift = document.getElementById("hourlyTempFift");
const hRainFift = document.getElementById("hourlyRainFift");
const hIconSixt = document.getElementById("hourlyIconSixt");
const hTempSixt = document.getElementById("hourlyTempSixt");
const hRainSixt = document.getElementById("hourlyRainSixt");
const hIconSevent = document.getElementById("hourlyIconSevent");
const hTempSevent = document.getElementById("hourlyTempSevent");
const hRainSevent = document.getElementById("hourlyRainSevent");
const hIconEighteen = document.getElementById("hourlyIconEighteen");
const hTempEighteen = document.getElementById("hourlyTempEighteen");
const hRainEighteen = document.getElementById("hourlyRainEighteen");
const hIconNinet = document.getElementById("hourlyIconNinet");
const hTempNinet = document.getElementById("hourlyTempNinet");
const hRainNinet = document.getElementById("hourlyRainNinet");
const hIconTwen = document.getElementById("hourlyIconTwen");
const hTempTwen = document.getElementById("hourlyTempTwen");
const hRainTwen = document.getElementById("hourlyRainTwen");
const hIconTwenOne = document.getElementById("hourlyIconTwenOne");
const hTempTwenOne = document.getElementById("hourlyTempTwenOne");
const hRainTwenOne = document.getElementById("hourlyRainTwenOne");
const hIconTwenTwo = document.getElementById("hourlyIconTwenTwo");
const hTempTwenTwo = document.getElementById("hourlyTempTwenTwo");
const hRainTwenTwo = document.getElementById("hourlyRainTwenTwo");
const hIconTwenThre = document.getElementById("hourlyIconTwenThre");
const hTempTwenThre = document.getElementById("hourlyTempTwenThre");
const hRainTwenThre = document.getElementById("hourlyRainTwenThre");
const hIconTwenFour = document.getElementById("hourlyIconTwenFour");
const hTempTwenFour = document.getElementById("hourlyTempTwenFour");
const hRainTwenFour = document.getElementById("hourlyRainTwenFour");
const hourlyBtn = document.getElementById("hourlyBtn");
const dailyBtn = document.getElementById("dailyBtn");
const dailyIconOne = document.getElementById("dailyIconOne");
const dailyTempOne = document.getElementById("dailyTempOne");
const dailyRainOne = document.getElementById("dailyRainOne");
const dailyMaxTempOne = document.getElementById("dailyMaxTempOne");
const dailyMinTempOne = document.getElementById("dailyMinTempOne");
const dailyIconTwo = document.getElementById("dailyIconTwo");
const dailyTempTwo = document.getElementById("dailyTempTwo");
const dailyRainTwo = document.getElementById("dailyRainTwo");
const dailyMaxTempTwo = document.getElementById("dailyMaxTempTwo");
const dailyMinTempTwo = document.getElementById("dailyMinTempTwo");
const dailyDateOne = document.getElementById("dailyDateOne");
const dailyDateTwo = document.getElementById("dailyDateTwo");
const dailyWeatherTextOne = document.getElementById("dailyWeatherTextOne");
const dailyWeatherTextTwo = document.getElementById("dailyWeatherTextTwo");

const weatherApp = (data) => {
    currentTemperature.innerHTML = data.current.temp_c + "°C";
    currentWind.innerHTML = data.current.wind_kph + "kph";
    currentHum.innerHTML = data.current.humidity + "%";
    currentClouds.innerHTML = data.current.cloud + "%";
    lastUpdate.innerHTML = data.current.last_updated;
    cityInfo.innerHTML = data.location.name;
    rainChance.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    snowChance.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_snow + "%";
    maxTemp.innerHTML = data.forecast.forecastday[0].day.maxtemp_c + "°C";
    minTemp.innerHTML = data.forecast.forecastday[0].day.mintemp_c + "°C";
    maxWind.innerHTML = data.forecast.forecastday[0].day.maxwind_kph + "kph";
    uv.innerHTML = data.forecast.forecastday[0].day.uv;

    const hourly = data.forecast.forecastday[0].hour;

    //---index0----
    hTempOne.innerHTML = hourly[0].temp_c + "°C";
    hRainOne.innerHTML = hourly[0].chance_of_rain + "%";
    switch(hourly[0].condition.code) {
        case 1000:
            hIconOne.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconOne.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconOne.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconOne.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconOne.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconOne.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconOne.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconOne.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconOne.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconOne.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconOne.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconOne.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconOne.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconOne.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconOne.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconOne.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconOne.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconOne.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconOne.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconOne.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconOne.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconOne.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconOne.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconOne.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconOne.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconOne.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconOne.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconOne.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconOne.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconOne.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconOne.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconOne.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconOne.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconOne.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconOne.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconOne.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconOne.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconOne.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconOne.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconOne.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconOne.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconOne.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconOne.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconOne.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconOne.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconOne.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconOne.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconOne.src = 'weather/64x64/day/395.png';
            break;
    }
    //----index1--------
    hTempTwo.innerHTML = hourly[1].temp_c + "°C";
    hRainTwo.innerHTML = hourly[1].chance_of_rain + "%";
    switch(hourly[1].condition.code) {
        case 1000:
            hIconTwo.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTwo.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTwo.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTwo.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTwo.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTwo.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTwo.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTwo.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTwo.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTwo.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTwo.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTwo.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTwo.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTwo.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTwo.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTwo.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTwo.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTwo.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTwo.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTwo.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTwo.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTwo.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTwo.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTwo.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTwo.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTwo.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTwo.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTwo.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTwo.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTwo.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTwo.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTwo.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTwo.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTwo.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTwo.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTwo.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTwo.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTwo.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTwo.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTwo.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTwo.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTwo.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTwo.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTwo.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTwo.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTwo.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTwo.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTwo.src = 'weather/64x64/day/395.png';
            break;
    }
    //---index2--------------
    hTempThr.innerHTML = hourly[2].temp_c + "°C";
    hRainThr.innerHTML = hourly[2].chance_of_rain + "%";
    switch(hourly[2].condition.code) {
        case 1000:
            hIconThr.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconThr.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconThr.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconThr.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconThr.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconThr.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconThr.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconThr.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconThr.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconThr.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconThr.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconThr.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconThr.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconThr.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconThr.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconThr.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconThr.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconThr.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconThr.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconThr.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconThr.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconThr.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconThr.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconThr.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconThr.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconThr.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconThr.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconThr.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconThr.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconThr.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconThr.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconThr.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconThr.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconThr.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconThr.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconThr.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconThr.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconThr.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconThr.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconThr.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconThr.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconThr.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconThr.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconThr.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconThr.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconThr.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconThr.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconThr.src = 'weather/64x64/day/395.png';
            break;
    }
    //------index3------------------
    hTempFour.innerHTML = hourly[3].temp_c + "°C";
    hRainFour.innerHTML = hourly[3].chance_of_rain + "%";
    switch(hourly[3].condition.code) {
        case 1000:
            hIconFour.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconFour.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconFour.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconFour.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconFour.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconFour.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconFour.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconFour.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconFour.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconFour.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconFour.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconFour.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconFour.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconFour.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconFour.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconFour.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconFour.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconFour.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconFour.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconFour.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconFour.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconFour.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconFour.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconFour.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconFour.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconFour.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconFour.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconFour.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconFour.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconFour.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconFour.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconFour.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconFour.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconFour.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconFour.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconFour.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconFour.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconFour.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconFour.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconFour.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconFour.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconFour.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconFour.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconFour.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconFour.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconFour.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconFour.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconFour.src = 'weather/64x64/day/395.png';
            break;
    }
    //--------index4--------
    hTempFive.innerHTML = hourly[4].temp_c + "°C";
    hRainFive.innerHTML = hourly[4].chance_of_rain + "%";
    switch(hourly[4].condition.code) {
        case 1000:
            hIconFive.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconFive.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconFive.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconFive.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconFive.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconFour.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconFive.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconFive.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconFive.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconFive.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconFive.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconFive.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconFive.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconFive.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconFive.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconFive.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconFive.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconFive.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconFive.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconFive.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconFive.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconFive.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconFive.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconFive.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconFive.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconFive.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconFive.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconFive.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconFive.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconFive.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconFive.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconFive.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconFive.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconFive.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconFive.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconFive.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconFive.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconFive.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconFive.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconFive.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconFive.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconFive.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconFive.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconFive.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconFive.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconFive.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconFive.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconFive.src = 'weather/64x64/day/395.png';
            break;
    }
    //---------index5-----------------------
    hTempSix.innerHTML = hourly[5].temp_c + "°C";
    hRainSix.innerHTML = hourly[5].chance_of_rain + "%";
    switch(hourly[5].condition.code) {
        case 1000:
            hIconSix.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconSix.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconSix.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconSix.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconSix.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconSix.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconSix.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconSix.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconSix.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconSix.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconSix.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconSix.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconSix.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconSix.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconSix.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconSix.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconSix.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconSix.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconSix.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconSix.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconSix.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconSix.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconSix.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconSix.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconSix.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconSix.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconSix.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconSix.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconSix.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconSix.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconSix.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconSix.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconSix.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconSix.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconSix.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconSix.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconSix.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconSix.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconSix.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconSix.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconSix.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconSix.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconSix.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconSix.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconSix.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconSix.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconSix.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconSix.src = 'weather/64x64/day/395.png';
            break;
    }
    //------------index6-----------------------
    hTempSeven.innerHTML = hourly[6].temp_c + "°C";
    hRainSeven.innerHTML = hourly[6].chance_of_rain + "%";
    switch(hourly[6].condition.code) {
        case 1000:
            hIconSeven.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconSeven.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconSeven.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconSeven.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconSeven.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconSeven.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconSeven.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconSeven.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconSeven.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconSeven.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconSeven.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconSeven.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconSeven.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconSeven.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconSeven.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconSeven.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconSeven.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconSeven.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconSeven.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconSeven.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconSeven.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconSeven.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconSeven.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconSeven.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconSeven.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconSeven.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconSeven.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconSeven.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconSeven.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconSeven.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconSeven.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconSeven.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconSeven.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconSeven.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconSeven.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconSeven.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconSeven.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconSeven.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconSeven.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconSeven.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconSeven.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconSeven.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconSeven.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconSeven.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconSeven.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconSeven.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconSeven.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconSeven.src = 'weather/64x64/day/395.png';
            break;
    }
    //------------index7------------------------
    hTempEight.innerHTML = hourly[7].temp_c + "°C";
    hRainEight.innerHTML = hourly[7].chance_of_rain + "%";
    switch(hourly[7].condition.code) {
        case 1000:
            hIconEight.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconEight.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconEight.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconEight.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconEight.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconEight.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconEight.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconEight.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconEight.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconEight.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconEight.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconEight.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconEight.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconEight.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconEight.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconEight.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconEight.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconEight.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconEight.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconEight.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconEight.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconEight.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconEight.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconEight.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconEight.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconEight.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconEight.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconEight.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconEight.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconEight.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconEight.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconEight.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconEight.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconEight.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconEight.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconEight.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconEight.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconEight.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconEight.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconEight.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconEight.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconEight.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconEight.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconEight.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconEight.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconEight.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconEight.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconEight.src = 'weather/64x64/day/395.png';
            break;
    }
    //-----------index8----------------
    hTempNine.innerHTML = hourly[8].temp_c + "°C";
    hRainNine.innerHTML = hourly[8].chance_of_rain + "%";
    switch(hourly[8].condition.code) {
        case 1000:
            hIconNine.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconNine.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconNine.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconNine.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconNine.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconNine.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconNine.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconNine.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconNine.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconNine.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconNine.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconNine.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconNine.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconNine.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconNine.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconNine.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconNine.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconNine.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconNine.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconNine.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconNine.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconNine.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconNine.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconNine.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconNine.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconNine.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconNine.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconNine.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconNine.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconNine.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconNine.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconNine.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconNine.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconNine.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconNine.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconNine.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconNine.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconNine.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconNine.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconNine.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconNine.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconNine.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconNine.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconNine.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconNine.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconNine.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconNine.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconNine.src = 'weather/64x64/day/395.png';
            break;
    }
    //----------index9-----------------
    hTempTen.innerHTML = hourly[9].temp_c + "°C";
    hRainTen.innerHTML = hourly[9].chance_of_rain + "%";
    switch(hourly[9].condition.code) {
        case 1000:
            hIconTen.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTen.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTen.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTen.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTen.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTen.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTen.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTen.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTen.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTen.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTen.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTen.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTen.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTen.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTen.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTen.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTen.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTen.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTen.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTen.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTen.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTen.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTen.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTen.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTen.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTen.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTen.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTen.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTen.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTen.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTen.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTen.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTen.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTen.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTen.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTen.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTen.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTen.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTen.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTen.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTen.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTen.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTen.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTen.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTen.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTen.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTen.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTen.src = 'weather/64x64/day/395.png';
            break;
    }
    //-----------index10------------------
    hTempEleven.innerHTML = hourly[10].temp_c + "°C";
    hRainEleven.innerHTML = hourly[10].chance_of_rain + "%";
    switch(hourly[10].condition.code) {
        case 1000:
            hIconEleven.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconEleven.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconEleven.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconEleven.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconEleven.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconEleven.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconEleven.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconEleven.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconEleven.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconEleven.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconEleven.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconEleven.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconEleven.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconEleven.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconEleven.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconEleven.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconEleven.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconEleven.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconEleven.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconEleven.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconEleven.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconEleven.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconEleven.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconEleven.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconEleven.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconEleven.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconEleven.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconEleven.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconEleven.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconEleven.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconEleven.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconEleven.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconEleven.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconEleven.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconEleven.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconEleven.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconEleven.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconEleven.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconEleven.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconEleven.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconEleven.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconEleven.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconEleven.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconEleven.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconEleven.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconEleven.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconEleven.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconEleven.src = 'weather/64x64/day/395.png';
            break;
    }
    //------------index11---------------------
    hTempTwe.innerHTML = hourly[11].temp_c + "°C";
    hRainTwe.innerHTML = hourly[11].chance_of_rain + "%";
    switch(hourly[11].condition.code) {
        case 1000:
            hIconTwe.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTwe.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTwe.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTwe.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTwe.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTwe.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTwe.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTwe.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTwe.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTwe.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTwe.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTwe.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTwe.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTwe.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTwe.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTwe.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTwe.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTwe.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTwe.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTwe.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTwe.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTwe.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTwe.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTwe.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTwe.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTwe.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTwe.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTwe.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTwe.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTwe.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTwe.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTwe.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTwe.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTwe.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTwe.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTwe.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTwe.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTwe.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTwe.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTwe.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTwe.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTwe.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTwe.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTwe.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTwe.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTwe.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTwe.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTwe.src = 'weather/64x64/day/395.png';
            break;
    }
    //-------------index12-----------------------
    hTempThrt.innerHTML = hourly[12].temp_c + "°C";
    hRainThrt.innerHTML = hourly[12].chance_of_rain + "%";
    switch(hourly[12].condition.code) {
        case 1000:
            hIconThrt.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconThrt.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconThrt.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconThrt.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconThrt.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconThrt.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconThrt.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconThrt.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconThrt.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconThrt.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconThrt.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconThrt.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconThrt.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconThrt.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconThrt.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconThrt.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconThrt.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconThrt.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconThrt.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconThrt.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconThrt.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconThrt.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconThrt.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconThrt.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconThrt.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconThrt.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconThrt.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconThrt.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconThrt.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconThrt.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconThrt.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconThrt.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconThrt.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconThrt.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconThrt.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconThrt.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconThrt.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconThrt.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconThrt.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconThrt.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconThrt.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconThrt.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconThrt.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconThrt.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconThrt.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconThrt.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconThrt.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconThrt.src = 'weather/64x64/day/395.png';
            break;
    }
    //--------------index13--------------------
    hTempFourt.innerHTML = hourly[13].temp_c + "°C";
    hRainFourt.innerHTML = hourly[13].chance_of_rain + "%";
    switch(hourly[13].condition.code) {
        case 1000:
            hIconFourt.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconFourt.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconFourt.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconFourt.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconFourt.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconFourt.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconFourt.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconFourt.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconFourt.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconFourt.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconFourt.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconFourt.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconFourt.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconFourt.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconFourt.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconFourt.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconFourt.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconFourt.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconFourt.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconFourt.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconFourt.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconFourt.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconFourt.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconFourt.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconFourt.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconFourt.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconFourt.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconFourt.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconFourt.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconFourt.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconFourt.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconFourt.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconFourt.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconFourt.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconFourt.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconFourt.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconFourt.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconFourt.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconFourt.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconFourt.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconFourt.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconFourt.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconFourt.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconFourt.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconFourt.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconFourt.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconFourt.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconFourt.src = 'weather/64x64/day/395.png';
            break;
    }
    //------------index14----------------------
    hTempFift.innerHTML = hourly[14].temp_c + "°C";
    hRainFift.innerHTML = hourly[14].chance_of_rain + "%";
    switch(hourly[14].condition.code) {
        case 1000:
            hIconFift.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconFift.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconFift.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconFift.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconFift.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconFift.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconFift.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconFift.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconFift.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconFift.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconFift.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconFift.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconFift.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconFift.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconFift.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconFift.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconFift.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconFift.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconFift.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconFift.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconFift.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconFift.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconFift.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconFift.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconFift.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconFift.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconFift.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconFift.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconFift.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconFift.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconFift.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconFift.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconFift.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconFift.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconFift.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconFift.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconFift.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconFift.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconFift.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconFift.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconFift.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconFift.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconFift.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconFift.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconFift.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconFift.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconFift.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconFift.src = 'weather/64x64/day/395.png';
            break;
    }
    //----------index15---------------------------
    hTempSixt.innerHTML = hourly[15].temp_c + "°C";
    hRainSixt.innerHTML = hourly[15].chance_of_rain + "%";
    switch(hourly[15].condition.code) {
        case 1000:
            hIconSixt.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconSixt.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconSixt.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconSixt.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconSixt.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconSixt.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconSixt.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconSixt.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconSixt.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconSixt.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconSixt.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconSixt.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconSixt.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconSixt.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconSixt.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconSixt.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconSixt.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconSixt.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconSixt.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconSixt.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconSixt.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconSixt.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconSixt.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconSixt.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconSixt.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconSixt.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconSixt.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconSixt.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconSixt.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconSixt.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconSixt.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconSixt.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconSixt.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconSixt.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconSixt.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconSixt.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconSixt.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconSixt.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconSixt.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconSixt.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconSixt.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconSixt.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconSixt.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconSixt.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconSixt.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconSixt.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconSixt.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconSixt.src = 'weather/64x64/day/395.png';
            break;
    }
    //-------------index16------------------
    hTempSevent.innerHTML = hourly[16].temp_c + "°C";
    hRainSevent.innerHTML = hourly[16].chance_of_rain + "%";
    switch(hourly[16].condition.code) {
        case 1000:
            hIconSevent.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconSevent.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconSevent.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconSevent.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconSevent.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconSevent.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconSevent.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconSevent.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconSevent.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconSevent.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconSevent.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconSevent.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconSevent.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconSevent.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconSevent.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconSevent.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconSevent.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconSevent.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconSevent.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconSevent.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconSevent.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconSevent.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconSevent.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconSevent.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconSevent.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconSevent.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconSevent.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconSevent.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconSevent.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconSevent.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconSevent.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconSevent.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconSevent.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconSevent.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconSevent.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconSevent.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconSevent.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconSevent.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconSevent.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconSevent.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconSevent.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconSevent.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconSevent.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconSevent.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconSevent.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconSevent.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconSevent.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconSevent.src = 'weather/64x64/day/395.png';
            break;
    }
    //-------------index17--------------------
    hTempEighteen.innerHTML = hourly[17].temp_c + "°C";
    hRainEighteen.innerHTML = hourly[17].chance_of_rain + "%";
    switch(hourly[17].condition.code) {
        case 1000:
            hIconEighteen.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconEighteen.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconEighteen.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconEighteen.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconEighteen.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconEighteen.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconEighteen.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconEighteen.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconEighteen.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconEighteen.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconEighteen.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconEighteen.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconEighteen.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconEighteen.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconEighteen.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconEighteen.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconEighteen.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconEighteen.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconEighteen.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconEighteen.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconEighteen.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconEighteen.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconEighteen.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconEighteen.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconEighteen.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconEighteen.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconEighteen.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconEighteen.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconEighteen.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconEighteen.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconEighteen.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconEighteen.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconEighteen.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconEighteen.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconEighteen.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconEighteen.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconEighteen.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconEighteen.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconEighteen.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconEighteen.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconEighteen.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconEighteen.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconEighteen.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconEighteen.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconEighteen.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconEighteen.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconEighteen.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconEighteen.src = 'weather/64x64/day/395.png';
            break;
    }
    //-----------index18----------------------
    hTempNinet.innerHTML = hourly[18].temp_c + "°C";
    hRainNinet.innerHTML = hourly[18].chance_of_rain + "%";
    switch(hourly[18].condition.code) {
        case 1000:
            hIconNinet.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconNinet.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconNinet.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconNinet.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconNinet.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconNinet.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconNinet.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconNinet.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconNinet.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconNinet.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconNinet.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconNinet.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconNinet.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconNinet.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconNinet.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconNinet.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconNinet.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconNinet.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconNinet.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconNinet.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconNinet.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconNinet.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconNinet.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconNinet.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconNinet.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconNinet.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconNinet.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconNinet.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconNinet.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconNinet.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconNinet.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconNinet.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconNinet.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconNinet.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconNinet.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconNinet.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconNinet.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconNinet.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconNinet.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconNinet.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconNinet.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconNinet.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconNinet.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconNinet.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconNinet.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconNinet.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconNinet.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconNinet.src = 'weather/64x64/day/395.png';
            break;
    }
    //---------index19----------------
    hTempTwen.innerHTML = hourly[19].temp_c + "°C";
    hRainTwen.innerHTML = hourly[19].chance_of_rain + "%";
    switch(hourly[19].condition.code) {
        case 1000:
            hIconTwen.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTwen.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTwen.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTwen.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTwen.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTwen.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTwen.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTwen.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTwen.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTwen.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTwen.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTwen.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTwen.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTwen.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTwen.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTwen.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTwen.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTwen.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTwen.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTwen.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTwen.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTwen.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTwen.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTwen.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTwen.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTwen.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTwen.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTwen.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTwen.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTwen.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTwen.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTwen.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTwen.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTwen.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTwen.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTwen.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTwen.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTwen.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTwen.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTwen.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTwen.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTwen.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTwen.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTwen.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTwen.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTwen.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTwen.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTwen.src = 'weather/64x64/day/395.png';
            break;
    }
    //------------index20---------------------
    hTempTwenOne.innerHTML = hourly[20].temp_c + "°C";
    hRainTwenOne.innerHTML = hourly[20].chance_of_rain + "%";
    switch(hourly[20].condition.code) {
        case 1000:
            hIconTwenOne.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTwenOne.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTwenOne.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTwenOne.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTwenOne.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTwenOne.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTwenOne.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTwenOne.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTwenOne.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTwenOne.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTwenOne.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTwenOne.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTwenOne.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTwenOne.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTwenOne.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTwenOne.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTwenOne.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTwenOne.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTwenOne.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTwenOne.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTwenOne.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTwenOne.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTwenOne.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTwenOne.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTwenOne.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTwenOne.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTwenOne.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTwenOne.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTwenOne.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTwenOne.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTwenOne.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTwenOne.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTwenOne.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTwenOne.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTwenOne.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTwenOne.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTwenOne.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTwenOne.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTwenOne.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTwenOne.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTwenOne.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTwenOne.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTwenOne.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTwenOne.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTwenOne.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTwenOne.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTwenOne.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTwenOne.src = 'weather/64x64/day/395.png';
            break;
    }
    //---------index21------------
    hTempTwenTwo.innerHTML = hourly[21].temp_c + "°C";
    hRainTwenTwo.innerHTML = hourly[21].chance_of_rain + "%";
    switch(hourly[21].condition.code) {
        case 1000:
            hIconTwenTwo.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTwenTwo.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTwenTwo.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTwenTwo.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTwenTwo.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTwenTwo.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTwenTwo.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTwenTwo.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTwenTwo.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTwenTwo.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTwenTwo.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTwenTwo.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTwenTwo.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTwenTwo.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTwenTwo.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTwenTwo.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTwenTwo.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTwenTwo.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTwenTwo.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTwenTwo.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTwenTwo.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTwenTwo.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTwenTwo.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTwenTwo.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTwenTwo.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTwenTwo.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTwenTwo.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTwenTwo.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTwenTwo.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTwenTwo.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTwenTwo.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTwenTwo.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTwenTwo.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTwenTwo.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTwenTwo.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTwenTwo.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTwenTwo.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTwenTwo.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTwenTwo.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTwenTwo.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTwenTwo.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTwenTwo.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTwenTwo.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTwenTwo.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTwenTwo.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTwenTwo.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTwenTwo.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTwenTwo.src = 'weather/64x64/day/395.png';
            break;
    }
    //---------index22---------------------
    hTempTwenThre.innerHTML = hourly[22].temp_c + "°C";
    hRainTwenThre.innerHTML = hourly[22].chance_of_rain + "%";
    switch(hourly[22].condition.code) {
        case 1000:
            hIconTwenThre.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTwenThre.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTwenThre.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTwenThre.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTwenThre.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTwenThre.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTwenThre.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTwenThre.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTwenThre.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTwenThre.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTwenThre.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTwenThre.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTwenThre.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTwenThre.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTwenThre.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTwenThre.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTwenThre.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTwenThre.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTwenThre.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTwenThre.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTwenThre.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTwenThre.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTwenThre.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTwenThre.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTwenThre.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTwenThre.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTwenThre.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTwenThre.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTwenThre.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTwenThre.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTwenThre.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTwenThre.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTwenThre.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTwenThre.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTwenThre.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTwenThre.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTwenThre.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTwenThre.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTwenThre.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTwenThre.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTwenThre.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTwenThre.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTwenThre.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTwenThre.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTwenThre.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTwenThre.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTwenThre.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTwenThre.src = 'weather/64x64/day/395.png';
            break;
    }
    //------------index23----------------
    hTempTwenFour.innerHTML = hourly[23].temp_c + "°C";
    hRainTwenFour.innerHTML = hourly[23].chance_of_rain + "%";
    switch(hourly[23].condition.code) {
        case 1000:
            hIconTwenFour.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            hIconTwenFour.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            hIconTwenFour.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            hIconTwenFour.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            hIconTwenFour.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            hIconTwenFour.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            hIconTwenFour.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            hIconTwenFour.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            hIconTwenFour.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            hIconTwenFour.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            hIconTwenFour.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            hIconTwenFour.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            hIconTwenFour.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            hIconTwenFour.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            hIconTwenFour.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            hIconTwenFour.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            hIconTwenFour.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            hIconTwenFour.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            hIconTwenFour.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            hIconTwenFour.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            hIconTwenFour.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            hIconTwenFour.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            hIconTwenFour.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            hIconTwenFour.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            hIconTwenFour.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            hIconTwenFour.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            hIconTwenFour.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            hIconTwenFour.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            hIconTwenFour.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            hIconTwenFour.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            hIconTwenFour.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            hIconTwenFour.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            hIconTwenFour.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            hIconTwenFour.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            hIconTwenFour.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            hIconTwenFour.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            hIconTwenFour.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            hIconTwenFour.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            hIconTwenFour.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            hIconTwenFour.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            hIconTwenFour.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            hIconTwenFour.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            hIconTwenFour.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            hIconTwenFour.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            hIconTwenFour.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            hIconTwenFour.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            hIconTwenFour.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            hIconTwenFour.src = 'weather/64x64/day/395.png';
            break;
    }


    //------------daily weather-------------------
    //--------one-----------
    const dailyOne = data.forecast.forecastday[1].day;
    dailyTempOne.innerHTML = dailyOne.avgtemp_c + "°C";
    dailyRainOne.innerHTML = dailyOne.daily_chance_of_rain + "%";
    dailyMaxTempOne.innerHTML = dailyOne.maxtemp_c + "°C";
    dailyMinTempOne.innerHTML = dailyOne.mintemp_c + "°C";
    dailyDateOne.innerHTML = data.forecast.forecastday[1].date;
    dailyWeatherTextOne.innerHTML = dailyOne.condition.text;
    switch(dailyOne.condition.code) {
        case 1000:
            dailyIconOne.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            dailyIconOne.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            dailyIconOne.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            dailyIconOne.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            dailyIconOne.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            dailyIconOne.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            dailyIconOne.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            dailyIconOne.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            dailyIconOne.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            dailyIconOne.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            dailyIconOne.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            dailyIconOne.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            dailyIconOne.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            dailyIconOne.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            dailyIconOne.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            dailyIconOne.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            dailyIconOne.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            dailyIconOne.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            dailyIconOne.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            dailyIconOne.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            dailyIconOne.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            dailyIconOne.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            dailyIconOne.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            dailyIconOne.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            dailyIconOne.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            dailyIconOne.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            dailyIconOne.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            dailyIconOne.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            dailyIconOne.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            dailyIconOne.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            dailyIconOne.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            dailyIconOne.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            dailyIconOne.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            dailyIconOne.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            dailyIconOne.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            dailyIconOne.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            dailyIconOne.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            dailyIconOne.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            dailyIconOne.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            dailyIconOne.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            dailyIconOne.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            dailyIconOne.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            dailyIconOne.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            dailyIconOne.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            dailyIconOne.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            dailyIconOne.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            dailyIconOne.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            dailyIconOne.src = 'weather/64x64/day/395.png';
            break;
    }
    //----------two-----------------
    const dailyTwo = data.forecast.forecastday[2].day;
    dailyTempTwo.innerHTML = dailyTwo.avgtemp_c + "°C";
    dailyRainTwo.innerHTML = dailyTwo.daily_chance_of_rain + "%";
    dailyMaxTempTwo.innerHTML = dailyTwo.maxtemp_c + "°C";
    dailyMinTempTwo.innerHTML = dailyTwo.mintemp_c + "°C";
    dailyDateTwo.innerHTML = data.forecast.forecastday[2].date;
    dailyWeatherTextTwo.innerHTML = dailyTwo.condition.text;

    switch(dailyTwo.condition.code) {
        case 1000:
            dailyIconTwo.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            dailyIconTwo.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            dailyIconTwo.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            dailyIconTwo.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            dailyIconTwo.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            dailyIconTwo.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            dailyIconTwo.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            dailyIconTwo.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            dailyIconTwo.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            dailyIconTwo.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            dailyIconTwo.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            dailyIconTwo.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            dailyIconTwo.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            dailyIconTwo.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            dailyIconTwo.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            dailyIconTwo.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            dailyIconTwo.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            dailyIconTwo.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            dailyIconTwo.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            dailyIconTwo.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            dailyIconTwo.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            dailyIconTwo.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            dailyIconTwo.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            dailyIconTwo.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            dailyIconTwo.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            dailyIconTwo.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            dailyIconTwo.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            dailyIconTwo.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            dailyIconTwo.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            dailyIconTwo.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            dailyIconTwo.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            dailyIconTwo.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            dailyIconTwo.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            dailyIconTwo.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            dailyIconTwo.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            dailyIconTwo.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            dailyIconTwo.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            dailyIconTwo.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            dailyIconTwo.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            dailyIconTwo.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            dailyIconTwo.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            dailyIconTwo.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            dailyIconTwo.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            dailyIconTwo.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            dailyIconTwo.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            dailyIconTwo.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            dailyIconTwo.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            dailyIconTwo.src = 'weather/64x64/day/395.png';
            break;
    }
    
    switch(data.current.condition.code) {
        case 1000:
            currentIcon.src = 'weather/64x64/day/113.png';
            break;
        case 1003:
            currentIcon.src = 'weather/64x64/day/116.png';
            break;
        case 1006:
            currentIcon.src = 'weather/64x64/day/119.png';
            break;
        case 1009:
            currentIcon.src = 'weather/64x64/day/122.png';
            break;
        case 1030:
            currentIcon.src = 'weather/64x64/day/143.png';
            break;
        case 1063:
            currentIcon.src = 'weather/64x64/day/176.png';
            break;
        case 1066:
            currentIcon.src = 'weather/64x64/day/179.png';
            break;    
        case 1069:
            currentIcon.src = 'weather/64x64/day/182.png';
            break;    
        case 1072:
            currentIcon.src = 'weather/64x64/day/185.png';
            break;
        case 1087:
            currentIcon.src = 'weather/64x64/day/200.png';
            break;
        case 1114:
            currentIcon.src = 'weather/64x64/day/227.png';
            break;
        case 1117:
            currentIcon.src = 'weather/64x64/day/230.png';
            break;
        case 1135:
            currentIcon.src = 'weather/64x64/day/248.png';
            break;
        case 1147:
            currentIcon.src = 'weather/64x64/day/260.png';
            break;
        case 1150:
            currentIcon.src = 'weather/64x64/day/263.png';
            break;
        case 1153:
            currentIcon.src = 'weather/64x64/day/266.png';
            break;
        case 1168:
            currentIcon.src = 'weather/64x64/day/281.png';
            break;
        case 1171:
            currentIcon.src = 'weather/64x64/day/284.png';
            break;
        case 1180:
            currentIcon.src = 'weather/64x64/day/293.png';
            break;
        case 1180:
            currentIcon.src = 'weather/64x64/day/293.png';
            break;
        case 1183:
            currentIcon.src = 'weather/64x64/day/296.png';
            break;
        case 1186:
            currentIcon.src = 'weather/64x64/day/299.png';
            break;
        case 1189:
            currentIcon.src = 'weather/64x64/day/302.png';
            break;
        case 1192:
            currentIcon.src = 'weather/64x64/day/305.png';
            break;
        case 1195:
            currentIcon.src = 'weather/64x64/day/308.png';
            break;
        case 1198:
            currentIcon.src = 'weather/64x64/day/311.png';
            break;
        case 1201:
            currentIcon.src = 'weather/64x64/day/314.png';
            break;
        case 1204:
            currentIcon.src = 'weather/64x64/day/317.png';
            break;
        case 1207:
            currentIcon.src = 'weather/64x64/day/320.png';
            break;
        case 1210:
            currentIcon.src = 'weather/64x64/day/323.png';
            break;
        case 1213:
            currentIcon.src = 'weather/64x64/day/326.png';
            break;
        case 1216:
            currentIcon.src = 'weather/64x64/day/329.png';
            break;
        case 1222:
            currentIcon.src = 'weather/64x64/day/335.png';
            break;
        case 1225:
            currentIcon.src = 'weather/64x64/day/338.png';
            break;
        case 1237:
            currentIcon.src = 'weather/64x64/day/350.png';
            break;
        case 1240:
            currentIcon.src = 'weather/64x64/day/353.png';
            break;
        case 1243:
            currentIcon.src = 'weather/64x64/day/356.png';
            break;
        case 1246:
            currentIcon.src = 'weather/64x64/day/359.png';
            break;
        case 1249:
            currentIcon.src = 'weather/64x64/day/362.png';
            break;
        case 1252:
            currentIcon.src = 'weather/64x64/day/365.png';
            break;
        case 1255:
            currentIcon.src = 'weather/64x64/day/368.png';
            break;
        case 1258:
            currentIcon.src = 'weather/64x64/day/371.png';
            break;
        case 1261:
            currentIcon.src = 'weather/64x64/day/374.png';
            break;
        case 1264:
            currentIcon.src = 'weather/64x64/day/377.png';
            break;
        case 1273:
            currentIcon.src = 'weather/64x64/day/386.png';
            break;
        case 1276:
            currentIcon.src = 'weather/64x64/day/389.png';
            break;
        case 1279:
            currentIcon.src = 'weather/64x64/day/392.png';
            break;
        case 1282:
            currentIcon.src = 'weather/64x64/day/395.png';
            break;
    }
}

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
});

loca.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
});

async function onSuccess(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    const api_key = "cca53f6bd1ab46f78a2390f780c47eab";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${api_key}`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const place = data.results[0].components.province;

    currentLoca.innerHTML = place;

    searchBar.value = place;
    searchBtn.click();

}

function onError(err) {
    console.log(err);
}

window.addEventListener("keypress", function(e) {
    if(e.which == 13) {
        searchBtn.click();
    }
})

hourlyBtn.addEventListener("click", () => {
    hourlyBtn.classList.add("active");
    dailyBtn.classList.remove("active");
    document.querySelector(".hourly").classList.add("open");
    document.querySelector(".daily").classList.remove("open");
});

dailyBtn.addEventListener("click", () => {
    hourlyBtn.classList.remove("active");
    dailyBtn.classList.add("active");
    document.querySelector(".daily").classList.add("open");
    document.querySelector(".hourly").classList.remove("open");
});