
$( document ).ready(function() {
     
});

function UpdateIntroduction()
{
    var titles = [ "student", "programmer", "developer", "memer", "machine" ];
    
    // Define our counter as a number
    if(typeof UpdateIntroduction.counter == 'undefined' ) {
        UpdateIntroduction.counter = 0;
    }

    document.getElementById("content-welcome-text").innerText= "i'm a " + titles[UpdateIntroduction.counter % titles.length];
    
    UpdateIntroduction.counter++;

    setTimeout(UpdateIntroduction, 3000);
}
