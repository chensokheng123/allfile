let show_time = document.querySelector('.show_time');
let greeting = document.querySelector('.greeting');
let date = new Date();

setInterval(() => {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    show_time.innerHTML = `${hour}:${minute}`;
    if (hour >= 6 && (hour <= 11 && minute <= 59)) {
        greeting.innerHTML = `Good Moring, Sokheng`;
    } else if (hour >= 12 && (hour <= 4 && minute <= 59)) {

        greeting.innerHTML = `Good Afternoon, Sokheng`;

    } else {
        greeting.innerHTML = `Good Evening, Sokheng`;

    }
}, 1000);
