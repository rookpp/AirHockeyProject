let paddle = 
{
    "direction":0,
    'y':500,
    "element":document.getElementById("paddle")
}
addEventListener("keypress", (event) => {
    if(event.key == "w"){
    paddle["direction"] = -1
    }
    if(event.key == "s"){
        paddle["direction"] = 1
    }
});
addEventListener("keyup",(event) =>{
    paddle["direction"] = 0
    
})
let ball = {
    "direction":-1,
    "directionx":1,
    'y':500,
    'x':375,
    "element":document.getElementById("ball"),
    "name":"ball"
}
function pmove(object)
{
    object['y']+=5*object["direction"]
    object["element"].style.top=object['y']+"px"
    if (object["name"] == "ball")
    {   
        object['x']+=8*object["directionx"]
        object["element"].style.left=object['x']+"px"
    }
}
///////////////////////////////////////////


//Frame Updates
setInterval(function(){
    //move(ball)
    pmove(paddle)
    pmove(ball)
    console.log(paddle['direction'])
},10);

