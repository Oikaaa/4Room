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
    setTimeout(function(){
        window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/profile.html#")
    }, 450)
})

//-------------------------------------

const join = document.getElementById('join')
const closeModal = document.getElementById('closeModal')
const modalBg = document.getElementById('modalBg')

join.addEventListener('click', function(){
    if (modalBg.style.display === 'none'){
        modalBg.style.display = 'block'
        console.log('yes')
    } 
})

closeModal.addEventListener('click', function(){
    if (modalBg.style.display === 'block'){
        modalBg.style.display = 'none'
    } 
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
