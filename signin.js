const email = document.getElementById("inputEmail")
const password = document.getElementById("inputPassword")

const userEmail = JSON.parse(localStorage.getItem("userSignUpInfo"))[0].email
const userPassword = JSON.parse(localStorage.getItem("userSignUpInfo"))[0].password



document.getElementById("btn").addEventListener('click', function(event){
    event.preventDefault()
    if (email.value === userEmail && password.value === userPassword){
        window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/index.html")
    } else{
        const alert = document.getElementById("alert")
        alert.style.display = "block"

    }
})