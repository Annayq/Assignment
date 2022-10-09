let searchInput = document.querySelector(".searchinput");
let timeout = null;
// const debounce = (fn, delay) =>{
//     return function(...args){
//         if(timeout != null) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(()=>{
//             fn(...args);
//         }, delay);
//     }
// }

let menu = [];

searchInput.addEventListener("keyup", (e) => {
    if(timeout != null) clearTimeout(timeout);
    timeout = setTimeout(() => {
        const value = e.target.value;
        console.log(menu)
        menu.forEach((list) => {
            const isVisible = menu.name.includes(value);
            menu.element.classList.toggle("hide", !isVisible);
        });

        console.log(menu);
    }, 500);
})

fetch("https://stream-restaurant-menu-svc.herokuapp.com/item")
  .then(respones => respones.json())
  .then(data=> {
    data.forEach(user => {
        const list = `<li>${user.name}</li>`;

        document.querySelector('.menulist').insertAdjacentHTML('beforeend', list);
    })
    })
  .catch(error => console.log(error));
