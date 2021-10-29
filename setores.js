var circle = document.querySelectorAll('.circle')

function flip(){
    this.classList.add("rotatee") 
}

function fliped(){
    this.setAttribute('class', 'circle')
}

for (var item = 0; item < circle.length; item++){
    circle[item].addEventListener('mouseover', flip)
    circle[item].addEventListener('mouseout', fliped)
} 