const getFirstName = document.querySelector('#firstname')
const getLastName = document.querySelector('#lastName')
const getMail = document.querySelector('#mail');
const button = document.querySelector('.btn')
const footerSubmit = document.querySelector('.foot-btn');
const textInput = document.querySelector('.description');

// Get value from the input...
const inputValue = function (e){
    e.preventDefault(e);
    const firstName = getFirstName.value;
    const lastName = getLastName.value;
    const mail = getMail.value;
    console.log(firstName, lastName, mail);
};
button.addEventListener('click', inputValue);

// textarea
// footerSubmit.addEventListener('click', function(){
    
// })

// Date and Time
// const clockAdd = document.querySelector('.clock');
// const date = new Date();
// const hour = date.getHours();
// const minutes = `${date.getMinutes() + 1}`.padStart(2, 0);
// const seconds = date.getSeconds();
// const day = `${date.getDate() + 1}`.padStart(2, 0);
// const month = `${date.getMonth() + 1}`.padStart(2, 0);
// const year = date.getFullYear();
// const addClock = `Date ${day}/${month}/${year} ~ Time ${hour}:${minutes}:${seconds}`;

// const clockPos = function (){
//  const html = `<div class="clock">${addClock}</div>`;
//  clockAdd.insertAdjacentHTML('beforeend',  html)
 
// }
// clockPos();

