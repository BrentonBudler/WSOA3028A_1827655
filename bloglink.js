// const blog1 = document.querySelector(".impressions");
// console.log(blog1)
// blog1.addEventListener("click",function(){
//     window.location.href = "Blogs/impressions.html";

// });



const Blogs = [
    {title: '.impressions', link: 'Blogs/impressions.html'},
    {title: '.weaving', link: 'Blogs/weavingtheweb.html'}, 
    {title: '.technology', link: 'Blogs/technologies.html'}, 
    {title: '.one', link: 'Blogs/oneweb.html'},
    {title: '.interactivity', link: 'Blogs/interactivity.html'}, 
    {title: '.online', link: 'Blogs/onlinelearning.html'},
    {title: '.info', link: 'Blogs/informationgeographies.html'}
]

for (let blog of Blogs){

    const blog1 = document.querySelector(blog.title);
    console.log(blog1)
    blog1.addEventListener("click",function(){
        window.location.href = blog.link;
    
    });
    
}