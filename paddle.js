let scoreboard = document.getElementById("scoreP")
let gamemessage = document.getElementById("message")
let score = 0
let gameplay = false
let starts = 0
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
    if (gameplay== false && starts == 0)
    {
        gameplay=true
        gamemessage.innerText = "";
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
            score+=1
        }
        
    }
    if (ball['x']<0)
    {
        gameplay = false
        starts+=1
        gamemessage.innerText= "Game over! \n Score: "+score+"\n Refresh page to play again!";
    }
}

//Frame Updates
{
    setInterval(function(){
        //move(ball)
        if(gameplay == true)
        {
        collision()
        pmove(paddle)
        pmove(ball)
        console.log(ball["direction"])
        scoreboard.innerText = score;
        console.log("check")
        }
    },10);
}


