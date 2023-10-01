var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursorblur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-50+"px"
    crsr.style.top = dets.y-20+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll(".nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // Change the style properties of 'crsr'
        crsr.style.transform = "scale(3)"; // Change the scale
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor="transparent"; // Change the border
    });
    elem.addEventListener("mouseleave",function(){
        // Change the style properties of 'crsr'
        crsr.style.transform = "scale(1)"; // Change the scale
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";  // Change the border
    });
});


gsap.to(".nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,

    }
})


gsap.to(".main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:".main",
        scroller: "body",
        // markers:true,
        start:"top --25%",
        end:"top -75%",
        scrub:2,
    }
})


gsap.from(".about-us img,.about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 65% ",
        end:"top 63%",
        scrub:3
        }
})


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70% ",
        end:"top 65%",
        scrub:3
        }
})

gsap.from("#colon1",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 60% ",
        end:"top 45%",
        scrub:4
        }
})

gsap.from("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 60% ",
        end:"top 45%",
        scrub:4
        }
})

gsap.from(".page4 h1",{
    y:30,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75% ",
        end:"top 70%",
        scrub:2
        }


})

// const text = new SplitType('.about-us-in p', { types: 'lines' })

// gsap.from("#para .line",{
//     y:50,
//     scrollTrigger:{
//         trigger:"#para .line",
//         scroller:"body",
//         markers:true,
//         start:"top 50% ",
//         end:"top 65%",
//         scale:1.2
//         }


// })