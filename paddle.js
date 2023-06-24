let paddle = 
{
    "direction":0,
    'y':50,
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
    "direction":1,
    "directionx":1,
    'y':50,
    'x':50,
    "element":document.getElementById("ball"),
    "name":"ball"
}
function pmove(object)
{
    object['y']+=.5*object["direction"]
    object["element"].style.top=object['y']+"vh"
    if (object["name"] == "ball")
    {   
        object['x']+=.4*object["directionx"]
        object["element"].style.left=object['x']+"vw"
    }
}
///////////////////////////////////////////
function collision(){
    if(ball['y']<0)
    {
        ball["direction"] *=-1
        
    }
    if(ball['y']>95)
    {
        ball["direction"] *=-1
    }
    if(ball['x'] >= 100)
    {
        ball["directionx"] *=-1
    }
    if(paddle['y']+20 >= ball['y'] && ball['y']>=paddle['y'])
    {
        if (ball['x'] <= 1)
        {
            ball["directionx"]*=-1
        }
        
    }
}

//Frame Updates
setInterval(function(){
    //move(ball)
    collision()
    pmove(paddle)
    pmove(ball)
    console.log(ball["direction"])
},10);

