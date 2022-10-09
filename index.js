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

let list = [];

searchInput.addEventListener("keyup", (e) => {
    if(timeout != null) clearTimeout(timeout);
    timeout = setTimeout(() => {
        const value = e.target.value;
        console.log(list)
        list.forEach((list) => {
            const isVisible = list.name.includes(value);
            list.element.classList.toggle("hide", !isVisible);
        });

        //console.log(user);
    }, 500);
})

fetch("https://stream-restaurant-menu-svc.herokuapp.com/item")
  .then(respones => respones.json())
  .then(data=> {
    data.forEach(user => {
        const list = `<li>${user.name}</li>`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', list);
    })
    })
  .catch(error => console.log(error));
