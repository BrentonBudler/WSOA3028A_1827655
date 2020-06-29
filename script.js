


const slides = document.querySelector(".slider").children; 
const indicatorImages = document.querySelector(".slider-indicator").children;


for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function(){
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