// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });




var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-img")
        console.log(img)
        fixed.style.backgroundImage = `url(${uranuscrypto})`
    })

    
})


















