let mode = true;
let modebtn = document.getElementById('mode');

function setMode(){
    if(mode){
        document.body.classList.add('dark');
        modebtn.innerHTML = "Light";
        mode = false;
    }else{
        document.body.classList.remove('dark')
        modebtn.innerHTML = "Dark";
        mode = true;
    }
}