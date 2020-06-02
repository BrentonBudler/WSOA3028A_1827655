const menuItems = [
    {title: 'Home', link: '/WSOA3028A_1827655/index.html'},
    {title: 'About Me', link: '#about-me'}, 
    {title: 'Training', link: '#training'},
    {title: 'My Clients', link: '#testimonials'},
    {title: 'Contact Me', link: '#contact-me'},
    {title: 'Contact Me', link: '/WSOA3028A_1827655/blogPage.html'}
]


const socialLinks = [
    {href:"1", class:"fa fa-facebook"},
    {href:"2", class:"fa fa-twitter"},
    {href:"3", class:"fa fa-instagram"}
    // {href:"4", class:"fa fa-linkedin"}
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

    const div = document.createElement('div');
    div.className = "ham-burger";

    const i = document.createElement('i');
    i.className= "fa fa-bars";

    div.appendChild(i);
    header.appendChild(div);
}; 



const initializeFooter = () => {

    const footer = document.querySelector('footer');
    const fig = document.createElement('figure');
    fig.className = "logo";
    fig.innerText = "Kent Wilson";
    footer.appendChild(fig);

    const sect = document.createElement('section');
    sect.className="social";

    for(let social of socialLinks){
        const a= document.createElement('a');
        const i = document.createElement('i');

        a.href = social.href; 
        i.className = social.class; 
        a.appendChild(i);
        sect.appendChild(a);
    }

    footer.appendChild(sect);
};


document.addEventListener('DOMContentLoaded',()=> initializeMenu());
document.addEventListener('DOMContentLoaded',()=> initializeFooter());