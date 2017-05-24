var APPID = 'd572e3897b56c1638fada0388125c161';

$(document).ready(function() {
  $('#button').click(function() {
    $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {
        q: $('#q').val(),
        units: 'imperial',
        APPID: APPID
      },
      success: function(data) {
        $('#display').html(
          // '<h2>Forecast for ' + data.name + ':</h2>' +
          'Temperature: ' + data.main.temp + '°F<br>' +
          'Hi: ' + data.main.temp_max + '°F<br>' +
          'Lo: ' + data.main.temp_min + '°F<br>' +
          data.weather[0].description + '<br>' +
          '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">'
        );
      }
    })
  });
});
