const existed = JSON.parse(localStorage.getItem("userSignUpInfo"))

const signUpAccount = existed.find(inAccount)
function inAccount (IN){
    return IN.logCondition === "IN"
}

if (signUpAccount === undefined){
    
    window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/signin.html")
} else {
    const usernameAvatar = document.getElementById("usernameAvatar")
    usernameAvatar.innerText = signUpAccount.display
}

//----------------------------------------
const profile = document.getElementById('user-menu-button')

profile.addEventListener('click',function(){
    window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/profile.html#")
})