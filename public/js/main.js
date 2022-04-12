
const cityName= document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name= document.getElementById('city_name');


const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const day= document.getElementById('day');
const today_date = document.getElementById('today_date');

var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

var now = new Date();
var date = now.getDate();
var month = months[now.getMonth()];

today_date.innerText = `${date} ${month}`;

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};

let todaysday = getCurrentDay();
day.innerText = todaysday;






const getInfo = async(event) =>{
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){

        city_name.innerText = `Enter the City to be Searched (Empty Input)`;
        datahide.classList.add('data_hide');
    }
    else{

        try{

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6a1723e4c1b1f6c3d2cce9b2daf2b0f6`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = (arrData[0].main.temp - 273.15).toFixed(2);

            const tempStatus = arrData[0].weather[0].main;
            if (tempStatus == "Clear") {
                temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if (tempStatus == "Rainy") {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');

        }catch{

            city_name.innerText = `Enter the City to be Searched (Empty Input)`;
            datahide.classList.add('data_hide');
        }
      
    }
}

submitBtn.addEventListener('click',getInfo);


