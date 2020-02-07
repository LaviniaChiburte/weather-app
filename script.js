var lista = [];

function getVremea() {
  var oras = document.getElementById("text-box").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      lista = JSON.parse(this.responseText);
      deseneazaVremea();

      var lat = lista.coord.lat;
      var lon = lista.coord.lon;
      var uluru = { lat: lat, lng: lon };
      var map = new google.maps.Map(document.getElementById("harta"), {
        zoom: 10,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  };
  xhttp.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${oras}`,
    true
  );
  xhttp.send();
}

function deseneazaVremea() {
  document.getElementById("descriere").innerHTML = lista.weather[0].description;
  document.getElementById("umiditate").innerHTML = lista.main.humidity;
  document.getElementById("presiune").innerHTML = lista.main.pressure;
  document.getElementById("temperatura").innerHTML = lista.main.temp;
  document.getElementById("maxima").innerHTML = lista.main.temp_max;
  document.getElementById("minima").innerHTML = lista.main.temp_min;
  document.getElementById(
    "icoana"
  ).src = `http://openweathermap.org/img/w/${lista.weather[0].icon}.png`;
}

function getPrognoza() {
  var oras = document.getElementById("text-box").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      lista = JSON.parse(this.responseText);
      deseneazaPrognoza();
    }
  };
  xhttp.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${oras}`,
    true
  );
  xhttp.send();
}

var azi = new Date();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var ziua = azi.getDate();
var luna = month[azi.getMonth()];
var an = azi.getFullYear();

var tomorrow = new Date(azi.getTime() + 24 * 60 * 60 * 1000);
var ziua2 = tomorrow.getDate();
var luna2 = month[tomorrow.getMonth()];
var an2 = tomorrow.getFullYear();

var tomorrow2 = new Date(azi.getTime() + 24 * 60 * 60 * 1000 * 2);
var ziua3 = tomorrow2.getDate();
var luna3 = month[tomorrow2.getMonth()];
var an3 = tomorrow2.getFullYear();

var tomorrow3 = new Date(azi.getTime() + 24 * 60 * 60 * 1000 * 3);
var ziua4 = tomorrow3.getDate();
var luna4 = month[tomorrow3.getMonth()];
var an4 = tomorrow3.getFullYear();

var tomorrow4 = new Date(azi.getTime() + 24 * 60 * 60 * 1000 * 4);
var ziua5 = tomorrow4.getDate();
var luna5 = month[tomorrow4.getMonth()];
var an5 = tomorrow4.getFullYear();

var tomorrow5 = new Date(azi.getTime() + 24 * 60 * 60 * 1000 * 5);
var ziua6 = tomorrow5.getDate();
var luna6 = month[tomorrow5.getMonth()];
var an6 = tomorrow5.getFullYear();
console.log(an6);

function deseneazaPrognoza() {
  document.getElementById("ziua_1").innerHTML =
    " " + ziua.toString() + "-" + luna.toString() + "-" + an.toString();
  document.getElementById("ziua_2").innerHTML =
    " " + ziua2.toString() + "-" + luna2.toString() + "-" + an2.toString();

  document.getElementById("ziua_3").innerHTML =
    " " + ziua3.toString() + "-" + luna3.toString() + "-" + an3.toString();

  document.getElementById("ziua_4").innerHTML =
    " " + ziua4.toString() + "-" + luna4.toString() + "-" + an4.toString();

  document.getElementById("ziua_5").innerHTML =
    " " + ziua5.toString() + "-" + luna5.toString() + "-" + an5.toString();

  document.getElementById("ziua_6").innerHTML =
    " " + ziua6.toString() + "-" + luna6.toString() + "-" + an6.toString();

  var day1 = "";
  var day2 = "";
  var day3 = "";
  var day4 = "";
  var day5 = "";
  var day6 = "";

  for (var i in lista.list) {
    if (lista.list[i].dt_txt.substring(8, 10) == ziua) {
      day1 += `<td>
            <img src="http://openweathermap.org/img/w/${
              lista.list[i].weather["0"].icon
            }.png" /> <br/>
            <span> Ora: ${lista.list[i].dt_txt.substring(11, 16)} </span> <br/>
            <span> Temperatura:  ${lista.list[i].main.temp} </span> <br/> 
            <span> Descriere: ${
              lista.list[i].weather["0"].description
            }  </span> <br><br>
            <td>`;
      document.getElementById("ziua1-ora1").innerHTML = day1;
    } else if (lista.list[i].dt_txt.substring(8, 10) == ziua2) {
      day2 += `<td>
            <img src="http://openweathermap.org/img/w/${
              lista.list[i].weather["0"].icon
            }.png" /> <br/>
            <span> Ora: ${lista.list[i].dt_txt.substring(11, 16)} </span> <br/>
            <span> Temperatura:  ${lista.list[i].main.temp} </span> <br/> 
            <span> Descriere: ${
              lista.list[i].weather["0"].description
            }  </span> <br><br>
            <td>`;
      document.getElementById("ziua2-ora1").innerHTML = day2;
    } else if (lista.list[i].dt_txt.substring(8, 10) == ziua3) {
      day3 += `<td>
            <img src="http://openweathermap.org/img/w/${
              lista.list[i].weather["0"].icon
            }.png" /> <br/>
            <span> Ora: ${lista.list[i].dt_txt.substring(11, 16)} </span> <br/>
            <span> Temperatura:  ${lista.list[i].main.temp} </span> <br/> 
            <span> Descriere: ${
              lista.list[i].weather["0"].description
            }  </span> <br><br>
            <td>`;
      document.getElementById("ziua3-ora1").innerHTML = day3;
    } else if (lista.list[i].dt_txt.substring(8, 10) == ziua4) {
      day4 += `<td>
            <img src="http://openweathermap.org/img/w/${
              lista.list[i].weather["0"].icon
            }.png" /> <br/>
            <span> Ora: ${lista.list[i].dt_txt.substring(11, 16)} </span> <br/>
            <span> Temperatura:  ${lista.list[i].main.temp} </span> <br/> 
            <span> Descriere: ${
              lista.list[i].weather["0"].description
            }  </span><br><br>
            <td>`;
      document.getElementById("ziua4-ora1").innerHTML = day4;
    } else if (lista.list[i].dt_txt.substring(8, 10) == ziua5) {
      day5 += `<td>
            <img src="http://openweathermap.org/img/w/${
              lista.list[i].weather["0"].icon
            }.png" /> <br/>
            <span id="ora"> Ora: ${lista.list[i].dt_txt.substring(
              11,
              16
            )} </span> <br/>
            <span> Temperatura:  ${lista.list[i].main.temp} </span> <br/> 
            <span> Descriere: ${
              lista.list[i].weather["0"].description
            }  </span><br><br>
            <td>`;
      document.getElementById("ziua5-ora1").innerHTML = day5;
    } else if (lista.list[i].dt_txt.substring(8, 10) == ziua6) {
      day6 += `<td>
            <img src="http://openweathermap.org/img/w/${
              lista.list[i].weather["0"].icon
            }.png" /> <br/>
            <span id="ora"> Ora: ${lista.list[i].dt_txt.substring(
              11,
              16
            )} </span> <br/>
            <span> Temperatura:  ${lista.list[i].main.temp} </span> <br/> 
            <span> Descriere: ${
              lista.list[i].weather["0"].description
            }  </span><br><br>
            <td>`;
      document.getElementById("ziua6-ora1").innerHTML = day6;
    }
  }
}
