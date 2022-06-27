
let position = null
let drag = false
let slide = document.querySelector('.slide')

slide.onmousedown = function(e) {
    drag = true
    position = [e.clientX, e.clientY]
    console.log(position, '按下!')
}

document.onmousemove = function(e) {
    if(!drag) return
    slide.style.top = parseInt(slide.style.top || 0) + e.clientY - position[1] + 'px'
    slide.style.left = parseInt(slide.style.left || 0) +  e.clientX - position[0] + 'px'
    position = [e.clientX, e.clientY]
}

document.onmouseup = function(e) {
    drag = false
}