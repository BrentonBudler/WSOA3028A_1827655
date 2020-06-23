const menuItems = [
    {title: 'Return to Website', link: '/WSOA3028A_1827655/index.html'}
]



const initializeMenu = () => {

    const header = document.querySelector('header');
    header.className = "container"; 

    const h1 = document.createElement('h1');
    h1.innerText = "FITNESS IN THE CITY"
    h1.className = "brand-name";
    header.appendChild(h1);

    const div = document.createElement('div');
    div.className = "homeLink";

    const i = document.createElement('i');
    i.className= "fa fa-home";

    div.appendChild(i);
    header.appendChild(div);

    const nav = document.createElement('nav');
    nav.className = "navbar";
    const ul = document.createElement('ul');

    
    const li = document.createElement('li');
    const a= document.createElement('a');
    a.innerText = 'Return to Website';
    a.href = '/WSOA3028A_1827655/index.html';
    li.appendChild(a);
    ul.appendChild(li);
    

    nav.appendChild(ul);
    header.appendChild(nav);


}; 

document.addEventListener('DOMContentLoaded',()=> initializeMenu());