var cursor = document.getElementById('cursor');
var main = document.getElementById('main');
var image = document.getElementById('image');

main.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease:"back.out(1.7)"
    })
})

image.addEventListener('mouseenter', function (dets) {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 5,
        duration: 0.5,
    })
})

image.addEventListener('mouseleave', function (dets) {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
    })
})