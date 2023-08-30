let menu_icon = document.getElementById('menu_icon');
let link_container =  document.getElementsByClassName('link_container')[0];
// console.log(menu_icon)
// 
menu_icon.addEventListener('click', function (){
       link_container.classList.toggle('active')
    

    
})