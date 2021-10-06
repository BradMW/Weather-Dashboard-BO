var topBanner = document.getElementById('top-table');
var StartButton = document.getElementById('startBtn');
var resaultTxt = document.querySelector('city-list')
var city = "";
var searchCity = $(".search-title");
//var searchButton = $(".searchBtn");
var searchButton = document.getElementById("search-button")

searchButton.addEventListener('click', function(event){
    event.preventDefault()
    city = $('#city-search').val().trim()
    document.getElementById('city-search').value = "";
    console.log(city)
    console.log("fetching")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83e5754caf9dc2bb8749aac913a14dd3&units=imperial`)
  .then(response => response.json())
  .then(data => {
    // generate the banner here
    //document.getElementById('banner-title').textContent = data.name;
    var node = document.createElement("H2");                 
     var textnode = document.createTextNode(data.name, data.sys.country);        
        node.appendChild(textnode);                              
         document.getElementById("current").appendChild(node); 

    var node = document.createElement("H5");                 
     var textnode = document.createTextNode(`Temperature: ${data.main.temp} F`);         
         node.appendChild(textnode);                              
         document.getElementById("current").appendChild(node); 

    var node = document.createElement("H5");                 
     var textnode = document.createTextNode(`High: ${data.main.temp_max} F`);         
         node.appendChild(textnode);                              
         document.getElementById("current").appendChild(node); 

    var node = document.createElement("H5");                 
      var textnode = document.createTextNode(`Low: ${data.main.temp_min} F`);         
         node.appendChild(textnode);                              
         document.getElementById("current").appendChild(node); 
        // Append <li> to <ul> with id="myList"
    //document.getElementById('current').createE
    onCallApi(data);
  })
//====================================================================
  function getApi() {
      var city = document.getElementsByClassName("search-title").value;
      var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83e5754caf9dc2bb8749aac913a14dd3`;
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
})

function onCallApi(data) {
    console.log("Data", data)
    var lat = data.coord.lat;
    var lon = data.coord.lon; 
    fetch( `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=83e5754caf9dc2bb8749aac913a14dd3&units=imperial`)
        .then(function (response){
            console.log(response)
            return response.json();
        })
        .then(data => {
            // generate the five day forecast in here
            console.log(data)

        })
          document.getElementById('cityList').innerHTML = data.timezone

    //       var node = document.createElement("H2");                 
    //   var textnode = document.createTextNode(`Temperature: ${data.current.temp} F`);         
    //      node.appendChild(textnode);                              
    //      document.getElementById("cityList").appendChild(node); 
}

  


// function getParams() {
//     var searchParamsArr = document.location.search.split('&');

//     var query = searchParamsArr[0].split('=').pop();
//     var format = searchParamsArr[1].split('=').pop();

//     searchApi(query, format);
// }



function printResults(resaultObj) {
    console.log(resaultObj);
    var futureInfo = "http://openweathermap.org/img/wn/" + dailyW.icon + ".png";
    var img = document.createElement('img');
                img.src = futureInfo;
                document.getElementById('icon1').appendChild(img);
    
    var todayTemp = ((data3.daily[0].temp.max)- 273.15) * 9 / 5 + 32

}






