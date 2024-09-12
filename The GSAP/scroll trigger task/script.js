gsap.to("#page-2 h1",{
    x:"-130%",
    scrollTrigger:{
        trigger:"#page-2",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,

    }

})