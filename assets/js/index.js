
let msjEmpty = 'This field is required';
let msjDay = 'Must be a valid day';
let msjMonth = 'Must be a valid month';
let msjYear = 'Must be in the past';

let inputDay;
let inputMonth;
let inputYear;

let outputDay = document.getElementById('output__day');
let outputMonth = document.getElementById('output__month');
let outputYear = document.getElementById('output__year');

let errorDay = document.getElementById('error__day');
let errorMonth = document.getElementById('error__month');
let errorYear = document.getElementById('error__year');

let todayDay;
let todayMonth;
let todayYear;

let ageDay;
let ageMonth;
let ageYear;

function esHoy(){
var today = new Date();

todayDay = today.getDate();
todayMonth = today.getMonth()+1;
todayYear = today.getFullYear();
}


function isDay(day){
    return day>=1 && day<=31;
}

function isMonth(month){
    return month>=1 && month<=12;
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

function getValues(){
    inputDay =  document.getElementById('input__day').value;
    inputMonth = document.getElementById('input__month').value;
    inputYear = document.getElementById('input__year').value;
}

function ctrlDay(){
    if(isEmpty(inputDay)){
        errorDay.innerHTML = msjEmpty;
    }
    else{
        if(!isDay(inputDay)){
            errorDay.innerHTML = msjDay;
        }
        else{
            errorDay.innerHTML = '';
            ageDay = 31 - inputDay

            if(ageDay<0){
                ageDay*=-1;
            }
        }
    }
}

function ctrlMonth(){
    if(isEmpty(inputMonth)){
        errorMonth.innerHTML = msjEmpty;
    }
    else{
        if(!isMonth(inputMonth)){
            errorMonth.innerHTML = msjMonth;
        }
        else{
            errorMonth.innerHTML = '';
            ageMonth = todayMonth - inputMonth;
            if(ageMonth<0){
                ageMonth*=-1;
            }
        }
    }
}

function ctrlYear(){
    if(isEmpty(inputYear)){
        errorYear.innerHTML = msjEmpty;
    }
    else{
        if(todayYear<(parseInt(inputYear))){
            errorYear.innerHTML = msjYear;
        }
        else{
            errorYear.innerHTML = '';
            ageYear = todayYear - inputYear;
        }
    }
}

function showDate(){
    if(ageDay != 0 && ageMonth != 0 && ageYear != 0 && !isNaN(ageDay) && !isNaN(ageMonth) && !isNaN(ageYear)){
        outputDay.innerHTML = ageDay;
        outputMonth.innerHTML = ageMonth;
        outputYear.innerHTML = ageYear;
    }
}


function convert(){
    getValues();
    esHoy();
    ctrlDay();
    ctrlMonth();
    ctrlYear();
    showDate();
}