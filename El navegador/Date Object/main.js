/*
Date
    *instancias
        -new Date()
        -new Date(year,month,day) (meses de 0 a 11)
        -new Date(year,month,day,hours,minutes,seconds)
        -new Date(string)

    *métodos
        -getFullYear()
        -getMinutes()
        -getSeconds()
        -getDate()
        -getMonth()
        -getDay()
        -getTime() (milisegundos desde el 1 de enero de 1970)
        -getTimezoneOffset()    */

const clock = document.getElementById('clock');

setInterval(() => {
    if(clock){
        clock.textContent = new Date().toLocaleTimeString();
    }
}, 1000);


const now = new Date(),
      birthday = new Date(1997,4,5);

console.log(`now: ${now}`);
console.log(`birthday: ${birthday}`);
console.log(`year: ${now.getFullYear()}, month: ${now.getMonth()}, day: ${now.getDay()}`)