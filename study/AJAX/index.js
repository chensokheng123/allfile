const API_KEY = "a44c095e9fab5ca59635a75d8c07b260";

// function ajax() {
//     let http = new XMLHttpRequest();
//     http.onreadystatechange = function () {
//         if (this.readyState == 4) {
//             if (this.status == 200)
//                 console.log(this.response);
//             else if (this.status == 404)
//                 console.log('Error Not Found');
//         }
//     };
//     http.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`, true);
//     http.send();
// }
// ajax();

// getdata = async e => {
//     const api_call = await fetch(``);

//     console.log(api_call);
// }
// getdata();

// let btn = document.querySelector('button');
// let myJSON;
// btn.addEventListener('click', ajax);

// function ajax() {

//     let city = document.querySelector('input').value;
//     let http = new XMLHttpRequest();
//     http.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.response);
//             myJSON = JSON.parse(this.response);
//             document.querySelector('.display').innerHTML = `London-humidity: ${myJSON.main.humidity} <br> London-temp: ${myJSON.main.temp}`
//         } else if (this.status == 404 && this.readyState == 4) {
//             console.log("%c Error Not Found", 'color:red');
//         }
//     }

//     http.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API_KEY}`, true);
//     http.send();
// };


getdata = async e => {

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
}
getdata();