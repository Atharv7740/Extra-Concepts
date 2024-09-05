var tl=gsap.timeline();
tl.from("#nav",{
    opacity:0,
})
tl.from("#nav h3",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.from("#btn",{
    opacity:0,
    y:-100,
    duration:0.6 ,
    scale:1.1,
})
tl.from("h1",{
    opacity:0,
    x:-50,
    duration:1,
    stagger:0.3,
    
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:1,
    stagger:0.5
})
tl.from("#bottom h3",{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.3
})



