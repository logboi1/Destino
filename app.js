let mySlide = document.querySelectorAll('.slider');

let btns= document.querySelectorAll('.btn');

let currentImage = 1;

var manualNav = function(manual){

    mySlide.forEach((slider) =>{
      slider.classList.remove('active') 

      btns.forEach((btn) =>{
        btn.classList.remove('active')
      })
    });
    mySlide[manual].classList.add('active');
    btns[manual].classList.add('active');
};
btns.forEach ((btn, i) => {
    btn.addEventListener('click',()=>{
        manualNav(i);
        currentImage = i;
    });
})




//Auto Slide Image
let repeat = function(activeClass){
    let active =document.getElementsByClassName('active');
    let i=1;

    let repeater=() =>{
        setTimeout(function(){

            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active')
            })
          mySlide[i].classList.add('active');
          btns[i].classList.add('active');
          i++;

          if(mySlide.length ==i){
            i =0;
          }
          if(i >= mySlide.length){
            return;
          }
          repeater();
        }, 10000);
    }
    repeater();
}
repeat();