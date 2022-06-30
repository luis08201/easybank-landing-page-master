let burgerBtn = document.getElementById("burgerBtn");
let fadein = document.getElementById("fadein");

burgerBtn.addEventListener("click", () =>{
    burgerBtn.classList.toggle("active");
    let nav = document.getElementById("nav");
    nav.classList.toggle("show");

    if(burgerBtn.classList.contains("active")){
        fadein.classList.add("show");
    }else{
        fadein.classList.remove("show");
    }
})