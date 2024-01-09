const existed = JSON.parse(localStorage.getItem("userSignUpInfo"))

const signUpAccount = existed.find(inAccount)
function inAccount (IN){
    return IN.logCondition === "IN"
}

const SignOut = document.getElementById('SignOut')

SignOut.addEventListener('click', function(e){
    e.preventDefault()
    console.log(signUpAccount.display)
    signUpAccount.logCondition = "OUT"
    localStorage.setItem("userSignUpInfo", JSON.stringify(existed))
    setTimeout(function(){
        window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/signin.html")
    },450)
})

//-------------------
const dashboardMb = document.getElementById('dashboardMb')
const mbNav = document.getElementById('mbNav')

dashboardMb.addEventListener('click', function(){
    if (mbNav.style.display === 'none'){
        mbNav.style.display = 'block'
        console.log('done')
    } else{
        mbNav.style.display = 'none'
        console.log('fail')
    }
})