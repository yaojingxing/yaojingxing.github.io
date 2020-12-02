const portfolio=document.querySelectorAll(".portfolio >div")
console.log(portfolio)

const urlarr=["./showcase.html"]
for(let i=0;i<=portfolio.length-1;i++){
    portfolio[i].addEventListener("click",()=>{
        window.location.href=urlarr[i]
    },true)

    }

function preloading(url){
    const img=new Image();
    img.src='https://finalyao.s3.us-east-2.amazonaws.com/login.png'

}