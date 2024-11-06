
gsap.from("#first h1 span",{
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.5, 
    y:200,
})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#main",
        start:"50% 50%",
        end:"100% 50%",
        scrub:1,
        pin:true,
    }
})
tl.to("#top",{
    top:"-50%",
},"a")
tl.to(".top-h1",{
    top:"60%",
},"a")
tl.to("#bottom",{
    bottom:"-50%",
},"a")
tl.to(".bottom-h1",{
    bottom:"-60%",
},"a")
tl.to(".content",{
    marginTop:"0%",
},"a")

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#three",
        start:"top 70%",
        end:"top -10%",
        scrub:3,
    }
})
tl.to("#three",{
    color:"#000",
    backgroundColor:"white",
})