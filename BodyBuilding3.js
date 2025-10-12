const genderguyLi = document.querySelector('.navLi1')
const genderLadyLi = document.querySelector('.navLi2')

let DetailsSpecifications = document.querySelector('.DetailsSpecifications')

genderguyLi.addEventListener('click', function () {

    DetailsSpecifications.classList.toggle('DetailsSpecifications2')
    genderguyLi.classList.toggle('guyBackground')
    document.body.classList.toggle('changeBackGroundGuy')


})

let localgenderguyLi = localStorage.getItem ('genderguyLi')
console.log(localgenderguyLi);


genderLadyLi.addEventListener('click', function () {
    DetailsSpecifications.classList.toggle('DetailsSpecifications2')
    genderLadyLi.classList.toggle("ladyBackground")
    document.body.classList.toggle('changeBackGround')
})


// **********************************************************************************************************

const diseaseYes = document.querySelector('.YES_disease')
const diseaseNo = document.querySelector('.No_disease')

let kindOfDisease = document.querySelector('.diseaseKind')

diseaseYes.addEventListener('click', function () {
    kindOfDisease.classList.toggle('boxOfkindOfDisease')
    
})


// *************************************************************************************************************

const bulkBTNCut = document.querySelectorAll('.bulkBTNCut')
let allKindOfBodyBuilding = document.querySelector('.allKindOfBodyBuilding')

bulkBTNCut.forEach(function (bulkBTNCutParam) {
    bulkBTNCutParam.addEventListener('click', function () {

        allKindOfBodyBuilding.classList.toggle('allKindOfBodyBuilding__js')

    })

})


// **************************************************************************************************************
























