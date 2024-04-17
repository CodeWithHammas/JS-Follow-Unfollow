let istatus=document.querySelector("h2")
let btn=document.querySelector("#add")
let check=0
btn.addEventListener("click",function () {
if (check == 0) {
    

    istatus.innerHTML = "Friend"
    istatus.style.color ='green'
    btn.innerHTML ="Remove"
    check=1
}   
else{
    istatus.innerHTML = "Stranger"
    istatus.style.color ='red'
    btn.innerHTML ="Add Friend"
check=0
}
})
