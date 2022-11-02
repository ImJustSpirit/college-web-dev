const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 2000);
})

function login(){
    Swal.fire({
        icon: "error",
        title: "Well...",
        text: "I don't get how to do this with posts and tokens and whatnot. Also why would this site even need a user system, there would be no point! Well if you could download the games from this site then there would be, but it's easier to just publish stuff on steam. Anyway, this doesn't work so click OK already."
    })
}