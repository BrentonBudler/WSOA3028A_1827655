


const Blogs = [
    {title: '.impressions', link: 'Blogs/impressions.html'},
    {title: '.weaving', link: 'Blogs/weavingtheweb.html'}, 
    {title: '.technology', link: 'Blogs/technologies.html'}, 
    {title: '.one', link: 'Blogs/oneweb.html'},
    {title: '.interactivity', link: 'Blogs/interactivity.html'}, 
    {title: '.online', link: 'Blogs/onlinelearning.html'},
    {title: '.info', link: 'Blogs/informationgeographies.html'},
    {title: '.digital', link: 'Blogs/inequalities.html'},
    {title: '.portrait', link: 'Blogs/portrait.html'},
    {title: '.tweet', link: 'Blogs/tweet.html'},
    {title: '.crime', link: 'Blogs/crime.html'},
    {title: '.race', link: 'Blogs/race.html'}
]

for (let blog of Blogs){

    const blog1 = document.querySelector(blog.title);
    console.log(blog1)
    blog1.addEventListener("click",function(){
        window.location.href = blog.link;
    
    });
    
}