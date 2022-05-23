container = document.getElementById("container1")
function changeColor() {
    bgColor = prompt("enter background color")
    container.style.backgroundColor = bgColor
}
function changeTextColor() {
    textColor = prompt("enter text color")
    container.style.color = textColor
}

image=document.getElementById("image")
image.style.display="none"
function imageShow(param){
    if(param=='show'){
        image.style.display="block"
    }
    else if(param=='hide'){
        image.style.display="none"
    }
    else if(param=='small'){
        image.style.width='200px'
    }
    else if(param=='large'){
        image.style.width='600px'
    }

}

bulbImage=document.getElementById("bulb")
function bulbchange(parameter){
    if(parameter=='on'){
        bulbImage.src="bulbOnn.png"
    }
    if(parameter=='off'){
        bulbImage.src="bulbOff.png"
    }
}

paracontainer=document.getElementById("container3")
function changeParaColour(){
    color1=prompt("Enter colour of Para1")
    color2=prompt("Enter colour of Para2")
    color3=prompt("Enter colour of Para3")
    color4=prompt("Enter colour of Para4")
    paragraph=paracontainer.getElementsByTagName('p')
    paragraph[0].style.color=color1
    paragraph[1].style.color=color2
    paragraph[2].style.color=color3
    paragraph[3].style.color=color4
}