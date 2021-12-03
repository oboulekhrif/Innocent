const button = document.querySelector(".btn-outline-dark");
const wrapper = docment.querySelector(".wrapper");

button.addEventListener("click", changeColor);

function changeColor(){
    if(wrapper.classlist.contains("black")){
        wrapper.classlist.remove("black");
    } else{
        wrapper.classlist.add("black");
    }
}



const input = document.querySelectorAll(".myInput");
