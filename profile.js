const disname = document.getElementById('disname')
const usrname = document.getElementById('usrname')
const emaill = document.getElementById('emaill')

const existed = JSON.parse(localStorage.getItem("userSignUpInfo"))

const signUpAccount = existed.find(inAccount)
function inAccount (IN){
    return IN.logCondition === "IN"
}

disname.innerText = signUpAccount.display
usrname.innerText = signUpAccount.username
emaill.innerText = signUpAccount.email

//----------------------------------------
const profile = document.getElementById('user-menu-button')

profile.addEventListener('click',function(){
    window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/profile.html#")
})

//----------------------------------------

const SignOut = document.getElementById('SignOut')

SignOut.addEventListener('click', function(){
    console.log(signUpAccount.display)
    signUpAccount.logCondition = "OUT"
    localStorage.setItem("userSignUpInfo", JSON.stringify(existed))
    setTimeout(function(){
        window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/signin.html")
    },450)
})

//-----------------------------------------
const editDis = document.getElementById("editDis")
const editUser = document.getElementById("editUser")
const editEmail = document.getElementById("editEmail")
const editPas = document.getElementById("editPas")

const disInput = document.getElementById('disInput')
const disUsr = document.getElementById('disUsr')
const disEmail = document.getElementById('disEmail')
const disPas = document.getElementById('disPas')

const saveDis = document.getElementById('saveDis')
const saveUsr = document.getElementById('saveUsr')
const saveEmail = document.getElementById('saveEmail')
const savePas = document.getElementById('savePas')

editDis.addEventListener('click', function(){
    editDis.style.display = 'none'
    disInput.style.display = 'block'
    saveDis.style.display = 'block'
})
saveDis.addEventListener('click', function(){
    if (disInput.value === "" || disInput.value.includes(" ")){
        disInput.style.display = 'none'
        saveDis.style.display = 'none'
        signUpAccount.display = disInput.value
        alert("display name invalid")
        location.reload();
    } else{
        signUpAccount.display = disInput.value
        localStorage.setItem('userSignUpInfo', JSON.stringify(existed))
        editDis.style.display = 'block'
        disInput.style.display = 'none'
        saveDis.style.display = 'none'
        location.reload();
    }
})
//---------
editUser.addEventListener('click', function(){
    editUser.style.display = 'none'
    disUsr.style.display = 'block'
    saveUsr.style.display = 'block'
})
saveUsr.addEventListener('click', function(){
    if (disUsr.value === "" || disUsr.value.includes(" ")){
        disUsr.style.display = 'none'
        saveUsr.style.display = 'none'
        signUpAccount.display = disUsr.value
        alert("Username invalid")
        location.reload();
    } else{
        signUpAccount.username = disUsr.value
        localStorage.setItem('userSignUpInfo', JSON.stringify(existed))
        editUser.style.display = 'block'
        disUsr.style.display = 'none'
        saveUsr.style.display = 'none'
        location.reload();
    }
})
//---------
editEmail.addEventListener('click', function(){
    editEmail.style.display = 'none'
    disEmail.style.display = 'block'
    saveEmail.style.display = 'block'
})
saveEmail.addEventListener('click', function(){
    if (disEmail.value === "" || disEmail.value.includes(" ") || !disEmail.value.includes('@') || !disEmail.value.includes('.com')){
        disEmail.style.display = 'none'
        saveEmail.style.display = 'none'
        signUpAccount.display = disEmail.value
        alert("Email invalid")
        location.reload();
    } else{
        signUpAccount.email = disEmail.value
        localStorage.setItem('userSignUpInfo', JSON.stringify(existed))
        editEmail.style.display = 'block'
        disEmail.style.display = 'none'
        saveEmail.style.display = 'none'
        location.reload();
    }
})

//---------
editPas.addEventListener('click', function(){
    editPas.style.display = 'none'
    disPas.style.display = 'block'
    savePas.style.display = 'block'
})
savePas.addEventListener('click', function(){
    if (disPas.value === "" || disPas.value.includes(" ")){
        disPas.style.display = 'none'
        savePas.style.display = 'none'
        signUpAccount.display = disPas.value
        alert("Pasword invalid, shouldn't include spaces")
        location.reload();
    } else{
        signUpAccount.password = disPas.value
        localStorage.setItem('userSignUpInfo', JSON.stringify(existed))
        editPas.style.display = 'block'
        disPas.style.display = 'none'
        savePas.style.display = 'none'
        location.reload();
    }
})

//------------------------------
const saveInfo = document.getElementById('saveInfo')
const month = document.getElementById('month')
const date = document.getElementById('date')
const year = document.getElementById('year')
const locatioon = document.getElementById('location')
const genderr = document.getElementById('gender')

saveInfo.addEventListener('click',function(){
    signUpAccount.month = month.options[month.selectedIndex].value
    signUpAccount.date = date.options[date.selectedIndex].value
    signUpAccount.year = year.options[year.selectedIndex].value
    signUpAccount.location = locatioon.options[locatioon.selectedIndex].value
    signUpAccount.gender = genderr.options[genderr.selectedIndex].value
    localStorage.setItem('userSignUpInfo', JSON.stringify(existed))
    location.reload();
    alert('Saved')
})

//--------------------------------
console.log(month.options.length)

for (var i=0; i<month.options.length; i++) {
    option = month.options[i];
    if (option.value === signUpAccount.month) {
       option.setAttribute('selected', true);
       
       for (var i=0; i<month.options.length; i++) {
        option = month.options[i];
        if (option.value !== signUpAccount.month && option.hasAttribute('selected')) {
           option.removeAttribute('selected');
           
        } 
    }
    } 
}

for (var i=0; i<date.options.length; i++) {
    option = date.options[i];
    if (option.value === signUpAccount.date) {
       option.setAttribute('selected', true);
       
       for (var i=0; i<date.options.length; i++) {
        option = date.options[i];
        if (option.value !== signUpAccount.date && option.hasAttribute('selected')) {
           option.removeAttribute('selected');
           
        } 
    }
    } 
}

for (var i=0; i<year.options.length; i++) {
    option = year.options[i];
    if (option.value === signUpAccount.year) {
       option.setAttribute('selected', true);
       
       for (var i=0; i<year.options.length; i++) {
        option = year.options[i];
        if (option.value !== signUpAccount.year && option.hasAttribute('selected')) {
           option.removeAttribute('selected');
           
        } 
    }
    } 
}

for (var i=0; i<locatioon.options.length; i++) {
    option = locatioon.options[i];
    if (option.value === signUpAccount.location) {
       option.setAttribute('selected', true);
       
       for (var i=0; i<locatioon.options.length; i++) {
        option = locatioon.options[i];
        if (option.value !== signUpAccount.location && option.hasAttribute('selected')) {
           option.removeAttribute('selected');      
        } 
    }
    } 
}

for (var i=0; i<genderr.options.length; i++) {
    option = genderr.options[i];
    if (option.value === signUpAccount.gender) {
       option.setAttribute('selected', true);
       
       for (var i=0; i<genderr.options.length; i++) {
        option = genderr.options[i];
        if (option.value !== signUpAccount.gender && option.hasAttribute('selected')) {
           option.removeAttribute('selected');
           
        } 
    }
    } 
}