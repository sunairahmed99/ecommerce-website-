let item = document.getElementById("items");
let menu = document.getElementById("menu1");
let form = document.getElementById("form1");
let cancel = document.getElementById('cancel');

menu.addEventListener('click', ()=>{
    item.classList.toggle("active");
    form.classList.toggle("formm")
})

