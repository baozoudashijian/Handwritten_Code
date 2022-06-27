
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

    let x = e.clientX
    let y = e.clientY
    let deltaX = x - position[0]
    let deltaY = y - position[1]
    let left = parseInt(slide.style.left || 0)
    let top = parseInt(slide.style.top || 0)
    slide.style.top = top + deltaY + 'px'
    slide.style.left = left + deltaX + 'px'
    position = [e.clientX, e.clientY]
}

document.onmouseup = function(e) {
    drag = false
}