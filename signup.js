if (localStorage.getItem("userSignUpInfo") === null){
    localStorage.setItem("userSignUpInfo", JSON.stringify([
        {
            username: "dummy",
            display: "dummy",
            email: "dummy@gmail.com",
            password: "wontworknigga",
            logCondition: "OUT",
            month: "",
            date: "",
            year: "",
            location: "",
            gender: "",
        }
    ]))
}

const inputUsername = document.getElementById('inputUsername')
const inputDisUsername = document.getElementById('inputDisUsername')
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const gridCheck = document.getElementById('gridCheck')
const existed = JSON.parse(localStorage.getItem("userSignUpInfo"))

document.getElementById("btn").addEventListener('click', function(e){
    const fe = existed.find(findExistedEmail)
    
    function findExistedEmail(Exemail){
        return Exemail.email === inputEmail.value
    }

    if (fe === undefined){
        if (inputUsername.value === "" || inputDisUsername.value === "" || inputEmail.value === "" || inputPassword.value === ""){
            alert('Please fill up the form')
        } else{
            const userInfo = {
                username: inputUsername.value,
                display: inputDisUsername.value,
                email: inputEmail.value,
                password: inputPassword.value,
                logCondition: "OUT",
                month: "",
                date: "",
                year: "",
                location: "",
                gender: "",
            }
    
            const user = JSON.parse(localStorage.getItem("userSignUpInfo"))
            user.push(userInfo)
            localStorage.setItem("userSignUpInfo", JSON.stringify(user))
            window.location.replace("http://127.0.0.1:5500/Advanced-Web-Course/4Room/signin.html")
        }
        console.log("successed")
    } else{
        e.preventDefault() 
        const error = document.getElementById("error")
        error.style.display = "block"
        inputEmail.style.borderColor = "red"
        console.log(fe)
    }

    
})