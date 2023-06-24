let paddle = document.getElementById("paddle")
let y = 500
let direction = 0
addEventListener("keypress", (event) => {
    if(event.key == "w"){
    direction = -1
    }
    if(event.key == "s"){
        direction = 1
    }
});
addEventListener("keyup",(event) =>{
    direction=0
})

function move(dir)
{
    y+=5*dir
}


//Frame Updates
setInterval(function(){
    move(direction)
    paddle.style.top=y+"px"
},10);

