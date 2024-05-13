const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector("#nav");
const back = document.querySelector(".back__btn");
const scrollToTop = document.querySelector(".isShowBtn");


humburger.addEventListener("click", function(){
    navMenu.classList.add("active")
})
back.addEventListener("click", function(){
    navMenu.classList.remove("active");
})




const counters = document.querySelectorAll(".value");
const speed = 1000;

counters.forEach((el) => {
    const animate = () => {
        const value = parseInt(el.getAttribute("endValue"));
        const data = parseInt(el.innerText);

        const time = value / speed;
        if(data < value){
            el.innerText = Math.ceil(data + time)+"+";
            setTimeout(animate, 1);
        } else {
            el.innerText = value + "+";
        }
    }
    animate();
});

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function(){
    menu.classList.toggle('active')
}


window.onscroll = function(){
    if(this.scrollY > 50 ){
        scrollToTop.classList.add("bottom__active")
    }
    else{
        scrollToTop.classList.remove("bottom__active")
    }
}

scrollToTop.onclick = function(){
    window.scrollTo(0,0)
}
