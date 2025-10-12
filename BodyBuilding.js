// login form
let loginBTN = document.querySelector('.loginBTN')
let longLine = document.querySelector('.longLine')
let firstP = document.querySelector('.firstP')
let secondP = document.querySelector('.secondP')
let welcome = document.querySelector('.welcome')
let firstH1 = document.querySelector('.firstH1')
let firstH2 = document.querySelector ('.firstH2')
let LiElems = document.querySelectorAll('li')

setInterval(() => {

    welcome.classList.add ("welcome2")

}, 500);

loginBTN.addEventListener('click', function () {
    longLine.classList.toggle('longLine2')

    welcome.classList.add('hiddenWlcome')
    document.body.classList.toggle('bodyImg')
    firstH1.classList.toggle('biggerH1')
    loginBTN.classList.toggle('loginBTNBigger')
    firstH2.classList.toggle ('firstH2js')

    LiElems.forEach (function (event){
        event.classList.toggle ('liComeIn')
    })

    setInterval(() => {

    }, 4000);

})

// **************************************************************************************************************************
// Gender 
