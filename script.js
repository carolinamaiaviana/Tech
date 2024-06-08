var menuButton = document.getElementById('menuButton');
var menuColapseDown = document.getElementById('menuColapseDown');

 menuButton.addEventListener('click',() =>{
    if(menuColapseDown.classList.contains('hidden')){
        menuColapseDown.classList.remove('hidden')
    } else {
        menuColapseDown.classList.add('hidden')
    }

})
const buttons = document.querySelectorAll('[id^="symbolImage"]');
const images = document.querySelectorAll('[id^="img"]');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        images.forEach((image) => {
            image.classList.add("hidden");
        });
        images[index].classList.remove("hidden");
    });
});


var firstPriceCard = document.getElementById('firstPriceCard')
var secondPriceCard = document.getElementById('secondPriceCard')
var thirdPriceCard = document.getElementById('thirdPriceCard')
var togglePrice = document.getElementById('togglePrice')
var descontoAtivo = false;

togglePrice.addEventListener('click', ()=>{
    if (!descontoAtivo){
        firstPriceCard.innerHTML= '44'
        secondPriceCard.innerHTML = '68'
        thirdPriceCard.innerHTML = '108'
        descontoAtivo = true;
    } else { 
        firstPriceCard.innerHTML= '55'
        secondPriceCard.innerHTML = '85'
        thirdPriceCard.innerHTML = '135'
        descontoAtivo = false;
    }


})



const buttonsFour = document.querySelectorAll('[id^="singleButton"]');
const imagesFour = document.querySelectorAll('[id^="photoFour"]');

buttonsFour.forEach((button, index) => {
    button.addEventListener('click', () => {
        imagesFour.forEach((image) => {
            image.classList.add("hidden");
        });
        imagesFour[index].classList.remove("hidden");
    });
});


