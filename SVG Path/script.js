var box = document.getElementById('box');

var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

box.addEventListener('mousemove', function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

    gsap.to("svg path", {
        attr: {d:path},
        duration: 1,
        ease: "power3.out"
    })
})

box.addEventListener('mouseleave', function () {
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration: 1,
        ease: "elastic.out(1, 0.2)"
    })
})