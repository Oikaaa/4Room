if (localStorage.getItem("userSignUpInfo") === null){
    localStorage.setItem("userSignUpInfo", JSON.stringify([]))
}

const inputUsername = document.getElementById('inputUsername')
const inputDisUsername = document.getElementById('inputDisUsername')
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const gridCheck = document.getElementById('gridCheck')


document.getElementById("btn").addEventListener('click', function(){
    if (inputUsername.value === "" || inputDisUsername.value === "" || inputEmail.value === "" || inputPassword.value === ""){
        alert('Please fill up the form')
    } else{
        const userInfo = {
            username: inputUsername.value,
            display: inputDisUsername.value,
            email: inputEmail.value,
            password: inputPassword.value,
        }

        const user = JSON.parse(localStorage.getItem("userSignUpInfo"))
        user.push(userInfo)
        localStorage.setItem("userSignUpInfo", JSON.stringify(user))
    }
})