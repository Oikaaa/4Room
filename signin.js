const emailIn = document.getElementById("inputEmail")
const passwordIn = document.getElementById("inputPassword")

document.getElementById("btn").addEventListener('click', function(event){
    event.preventDefault()
    const existed = JSON.parse(localStorage.getItem("userSignUpInfo"))
    const fE = existed.find(findEmail)
    function findEmail(emailEx){
        return emailEx.email === emailIn.value
    }
    if (fE === undefined){
        const alert = document.getElementById("alert")
        alert.style.display = "block"
    } else{
        if (fE.password === passwordIn.value){
            console.log("true")
            fE.logCondition = "IN"
            console.log(existed)
            localStorage.setItem("userSignUpInfo", JSON.stringify(existed))
            setTimeout(function(){
                window.location.replace("https://oikaaa.github.io/4room/home")
            }, 450)
        }else{
            const alert = document.getElementById("alert")
            alert.style.display = "block"
        }
    }
    

})
