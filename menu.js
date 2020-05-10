const menuItems = [
    {title: 'Home', link: '/WSOA3028A_1827655/index.html'},
    {title: 'Website info', link: '/WSOA3028A_1827655/WebsiteInfo.html'}, 
    {title: 'Training', link: '/WSOA3028A_1827655/TrainingPage.html'},
    {title: 'Nutrition', link: '/WSOA3028A_1827655/NutritionPage.html'},
    {title: 'Events', link: '/WSOA3028A_1827655/EventsPage.html'},
    {title: 'Blogs', link: '/WSOA3028A_1827655/blogPage.html'},
    {title: 'Contact Me', link: '/WSOA3028A_1827655/ContactPage.html'}
]

const initializeMenu = () => {

    const header = document.querySelector('header');
    header.className = "container"; 

    const h1 = document.createElement('h1');
    h1.innerText = "Kent Wilson"
    h1.className = "brand-name";
    header.appendChild(h1);

    const nav = document.createElement('nav');
    nav.className = "navbar";
    const ul = document.createElement('ul');

    for (let item of menuItems){
        const li = document.createElement('li');
        const a= document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    header.appendChild(nav);
}; 


document.addEventListener('DOMContentLoaded',()=> initializeMenu());