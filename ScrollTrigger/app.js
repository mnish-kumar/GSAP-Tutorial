gsap.to('.box2 h1', {
    transform: 'translateX(-40%)',
    scrollTrigger: {
        trigger: '.box2',
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end: 'top -150%',
        scrub: 0.55,
        pin: true,
    },
})