
function toggle_good() {
    if(document.getElementById("good").checked == true)
    {
        if(document.getElementById("fast").checked == true)
        {
            document.getElementById("cheap").checked = false;
        }
    }
}

function toggle_fast() {
    if(document.getElementById("fast").checked == true){
        if(document.getElementById("cheap").checked == true){
                document.getElementById("good").checked = false;
            }
    }
}

function toggle_cheap() {
    
    if(document.getElementById("cheap").checked == true){
        if(document.getElementById("good").checked == true){
            document.getElementById("fast").checked = false;
        }
    }
}
