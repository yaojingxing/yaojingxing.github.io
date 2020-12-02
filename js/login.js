const button=document.querySelectorAll(".submit-button")

const username=document.querySelectorAll(".username")
const password=document.querySelectorAll(".password")
let profile;
button[0].addEventListener("click",()=>{
    if (username[0].value==="bigfish"&&password[0].value==="20122611"){
        profile={
            name:"bigfish",
            age:"23"
        }
        sessionStorage.setItem("profile", JSON.stringify(profile));
        window.location.href="./bigfish.html"

    }

    else if(username[0].value==="bigfish"&&password[0].value==="20122612"){
        profile={
            name:"bigcat",
            age:"24"
        }
    }
    sessionStorage.setItem("profile", JSON.stringify(profile));
    window.location.href="./bigfish.html"


},true)