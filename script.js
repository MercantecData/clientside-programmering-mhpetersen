
function UpdateIntroduction()
{
    var titles = [ "student", "programmer", "developer", "server admin", "machine" ];
    
    if(typeof UpdateIntroduction.counter == "undefined" ) {
        UpdateIntroduction.counter = 0;
    }

    document.getElementById("content-welcome-text").innerText= "i'm a " + titles[UpdateIntroduction.counter % titles.length];

    UpdateIntroduction.counter++;

    setTimeout(UpdateIntroduction, 3000);
}

function LoadInBio()
{
    var paragrams = 1;

    if(typeof LoadInBio.loadInStage == "undefined" ) {
        LoadInBio.loadInStage = 0;
    }

    if(LoadInBio.loadInStage >= paragrams)
        return;

        LoadInBio.loadInStage++;

    var elements = document.getElementsByClassName("content-left-bio");
    for(int i = 0; i<LoadInBio.loadInStage ;i++)
    {
        elements[i]
    }

    setTimeout(LoadInBio, 3000);
}