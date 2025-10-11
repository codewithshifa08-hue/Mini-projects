let today = new Date(); //getting new date and time
let day = today.getDay();//get the day and week where 0 is sunday and 6 is saturday0-6
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = today.getDate();
let month = today.getMonth() + 1; //month start from 0
let year = today.getFullYear();
console.log(` Today is  ${daylist[day]}, ${date} - ${month} - ${year} `);
let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let prepand = (hour >= 12) ? 'PM ' : ' AM';
hour = (hour >= 12) ? hour - 12 : hour; //convert 24hour format to 12 hour format
if (hour === 0 && prepand === 'PM') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = 'noon'
    }
    else {
        hour = 12
        prepand = 'PM';
    }
}
if (hour === 0 && prepand === 'AM') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = 'Midnight'
    }
    else {
        hour = 12
        prepand = 'AM';
    }
}
console.log("Current time : " + hour + prepand + " : " + minutes + ' : ' + seconds);