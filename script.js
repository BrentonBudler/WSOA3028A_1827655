// //Code to display back to top button and give it the functionality of scrolling to the top 
// mybutton = document.getElementById("topButton");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

//CLIENT TESTIMONIALS
const slides = document.querySelector(".slider").children; 
const indicatorImages = document.querySelector(".slider-indicator").children;


for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function(){
   // console.log(this.getAttribute("data-id"))
    for(let j=0; j<indicatorImages.length;j++){
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id= this.getAttribute("data-id"); 
    for(let z=0; z<slides.length-1;z++){
      slides[z].classList.remove("active");
    }
    slides[id].classList.add("active");
  })
  
}


//Clear input fields

const clearButton = document.querySelector(".reset");
clearButton.addEventListener("click",function(){
 var list = document.getElementsByClassName("inputBox");
 for (let item of list){
    console.log(item.children[0].value);
    item.children[0].value = "";
 }

 const feedback = document.querySelector(".submit");
 feedback.classList.add("clicked");

});