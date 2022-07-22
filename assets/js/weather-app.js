var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var wname = document.querySelector('.wname');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

const element = document.getElementById('wbutton');
//element.addEventListener('click', myFunction);
element.addEventListener('click', function () {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      inputValue.value +
      '&appid=b4573d2ecf25b6c2f532ec7d25ed457f'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];

      wname.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
    })

    .catch((err) => alert('Wrong city name'));
});
