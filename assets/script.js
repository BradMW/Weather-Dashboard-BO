var topBanner = document.getElementById('top-table');
var StartButton = document.getElementById('startBtn');
var resaultTxt = document.querySelector('city-list')
var city = "";
var searchCity = $(".search-title");
var searchButton = $(".searchBtn");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=83e5754caf9dc2bb8749aac913a14dd3`)
  .then(response => response.json())
  .then(data => console.log(data));


function getParams() {
    var searchParamsArr = document.location.search.split('&');

    var query = searchParamsArr[0].split('=').pop();
    var format = searchParamsArr[1].split('=').pop();

    searchApi(query, format);
}



function printResults(resaultObj) {
    console.log(resaultObj);
    var futureInfo = "http://openweathermap.org/img/wn/" + dailyW.icon + ".png";
    var img = document.createElement('img');
                img.src = futureInfo;
                document.getElementById('icon1').appendChild(img);
    
    var todayTemp = ((data3.daily[0].temp.max)- 273.15) * 9 / 5 + 32

}






function searchApi(query, format) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=&appid=83e5754caf9dc2bb8749aac913a14dd3`;
    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        for(var i = 0; i < data.length; i++) {
            var createTableRow = document.createElement('tr');
            var tableData = document.createElement('td');
            var link = document.createElement('a');

            link.textContent = data[i].html_url;
            link.href = data[i].html_url;

            tableData.appendChild(link);
            createTableRow.appendChild(tableData);
            topBanner.appendChild(createTableRow);
        }
    });
}



// StartButton.onclick(getApi);



// const apiKey = "83e5754caf9dc2bb8749aac913a14dd3";
// const form = document.querySelector(".top-banner form");
// const input = document.querySelector(".top-banner input");
// const msg = document.querySelector(".top-banner .msg");
// const list = document.querySelector(".ajax-section .cities");
// const inputVal = input.value;
// let response = fetch(`https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid=83e5754caf9dc2bb8749aac913a14dd3`);
// const { main, name, sys, weather } = data;





// fetch(`https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid=83e5754caf9dc2bb8749aac913a14dd3`)
// then(response=> {

// })
// .catch(error => {

// });

// async function fetchText() {
//     let response = await fetch('/readme.txt');

//     console.log(response.status); // 200
//     console.log(response.statusText); // OK

//     if (response.status === 200) {
//         let data = await response.text();
//         // handle data
//     }
// }

// fetchText();


// const li = document.createElement("li");
// li.classList.add("city");
// const markup = `
//   <h2 class="city-name" data-name="${name},${sys.country}">
//     <span>${name}</span>
//     <sup>${sys.country}</sup>
//   </h2>
//   <div class="city-temp">${Math.round(main.temp)}<sup>°F</sup>
//   </div>
//   <figure>
//     <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
//     <figcaption>${weather[0]["description"]}</figcaption>
//   </figure>
// `;
// li.innerHTML = markup;
// list.appendChild(li);


// form.addEventListener("submit", e => {
//     e.preventDefault();
//     const inputVal = input.value;
//   });

//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//   })
//   .catch(() => {
//     msg.textContent = "Enter city name.";
//   });

  