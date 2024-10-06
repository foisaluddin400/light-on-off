function lightBtn(match){
    var change = document.querySelector("#change");
    var pic;
    for (var i=1; i<=5; i++){

        
        if(match==0){
            pic= "img/lightoff.jpg";
            change.innerHTML="Light Off";

        }
        else{
            pic="img/lighton.jpg";
            change.innerHTML= "Light On";
        }

        var light = document.getElementById('light'+(i));
        light.src= pic;
    }
};