gsap.from("#page-1 #box-1",{
    scale:0,
    duration:2,
    rotate:720,
    delay:1,
    scrollTrigger:{
        trigger:"#page-1 #box-1",
        scroller:"body",
        // markers:true,
        
       
        scrub:2,

    }
    
})
gsap.to("#pagemid img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#pagemid",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
        
    }

})

gsap.from("#page-2 #box-2",{
    scale:0,
    duration:2,
    rotate:720,
    delay:1,
    scrollTrigger:{
        trigger:"#page-2 #box-2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 30%",
        scrub:2,

    }
    
})
gsap.from("#page-3 #box-3",{
    scale:0,
    duration:2,
    rotate:720,
    delay:1,
    scrollTrigger:{
        trigger:"#page-3 #box-3",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 30%",
        scrub:2,

    }
    
})