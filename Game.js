AFRAME.registerComponent("game",{
    updatesScore: function(){
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").valueOf;
        var currentScore = parseInt(count);
    currentScore +=50;
    element.setAttribute("text",{
        value: currentScore,
    })
    
    
    },
    startTimer : function(duration,timerEl){
        var minutes;
        var seconds;

        setInterval(()=>{
            if (duration >=0){
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                if (minutes <10){
                    minutes = "0" + minutes;

                    

                }
                if (seconds <10){
                    seconds = "0" + seconds;

                    

                }
                timerEl. setAttribute("text",{
                    value :minutes + ":"+ seconds,
                });
                duration -=1
            }
        },1000)

    }
})